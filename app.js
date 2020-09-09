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
const {Datastore} = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = new Datastore();


const insertTodo = (visit) => {
  return datastore.save({
    key: datastore.key('todo'),
    data: visit,
  });
};

/**
 * Retrieve the latest 10 visit records from the database.
 */
const getTodos = () => {
  const query = datastore
    .createQuery('todo')
    .order('timestamp', {descending: true});

  return datastore.runQuery(query);
};

app.get('/', function(req, res) {
  // Process the data received in req.body
  res.redirect('/static/webapp/index.html');
});


app.get('/api/todolist', async (req, res) => {
  
  const [entities] = await getTodos();
  res.send(entities);
})

app.post('/api/todo', async (req, res) => {
  var todo = req.body;
  todo.timestamp = new Date();new Date(),
  await insertTodo(todo);
  return res.send('Todo posted');
});


 
const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;