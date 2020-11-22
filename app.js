'use strict';

const express = require('express');
const crypto = require('crypto');

const app = express();
app.enable('trust proxy');
app.use(express.json())

// Use the built-in express middleware for serving static files from './public'
app.use('/static', express.static('static'));

// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// These environment variables are set automatically on Google App Engine
const { Datastore } = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = new Datastore();


app.get('/', function (req, res) {
  // Process the data received in req.body
  res.redirect('/static/webapp/uimodule/webapp/index.html');
});


app.get('/tasks', async (req, res) => {

  const query = datastore.createQuery('todo');
  const [tasks] = await datastore.runQuery(query);

  for (const task of tasks) {
    const taskKey = task[datastore.KEY];
    task['id'] = taskKey.id;
  }
  return res.send(tasks);

});

app.post('/tasks', async (req, res) => {
  var todo = req.body;
  

  await datastore.save({
    key: datastore.key('todo'),
    data: todo
  });
  res.json(todo);

});

app.get('/tasks/:id', async (req, res) => {

  var id = req.params.id;
  const taskKey = datastore.key(['todo', datastore.int(id)]);
   
  var todo = await datastore.get(taskKey);
  res.json(todo[0]);

});


app.put('/tasks/:id', async (req, res) => {

  var id = req.params.id;
  const taskKey = datastore.key(['todo', datastore.int(id)]);
  var todos = await datastore.get(taskKey);
  var todo = todos[0];

  var valueToUpdate = req.body;

  if ('text' in valueToUpdate){
    todo["text"] = valueToUpdate.text;
  }

  if ('done' in valueToUpdate){
    todo["done"] = valueToUpdate.done;
  }

  await datastore.update(
    { "key":taskKey,
    "data" : todo}

  )

  res.json(todo);
});

app.delete('/tasks/:id', async (req, res) => {
  var id = req.params.id;
  const taskKey = datastore.key(['todo', datastore.int(id)]);
  await datastore.delete(taskKey);
  res.send("alles gut");
});


const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;