# todo-ui5

## tech stack

* google app engine
* node.js, standard environment
* Cloud Firestore
* ui5

## API
Post TODO
/api/todo
Request Body contains
{
    "text": "Go to sumermarket"
}

Get Todo
/api/todolist
response body 
[
    {"text": "" , "id":"", "timestamp"}
]


## commands

Starting the app locally: npm start

Deploying the app to app engine: 

## Develment

Local DEvelopment:

Serving static files
Local: express app app.use('/static', express.static('static'));
App engine: app.yaml file

Database:
Local: 