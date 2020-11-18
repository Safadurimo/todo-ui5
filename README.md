# todo-ui5

## Tech Stack

* Platform: Google App Engine Standard Environment
* Backend: Node.js, Express
* Database: Cloud Firestore
* Frontend: UI5

## API

* [Api-Documentation on swaggerhub](https://app.swaggerhub.com/apis-docs/Safadurimo/todo-ui5/1.0.0)
* [Selfhosted Api-Documentation](https://todo-ui5.ew.r.appspot.com/static/dist/index.html)

## Commands

* Starting the app locally: npm start
* Deploying the app to app engine: gcloud app deploy

## Development

Local Development:

Serving static files
Local: express app app.use('/static', express.static('static'));
App engine: app.yaml file

Database:
Local: https://cloud.google.com/datastore/docs/tools/datastore-emulator#windows
Produktion: App Engine Cloud Firestore in Datastore mode

## Notes

* webapp has been generated with template easy ui5
* webapp uses ui5 tooling
* swagger api has been generated as described here: https://stackoverflow.com/a/53711091/1405321


## Links

* [Documentation: App Engine Standard Environment with Node](https://cloud.google.com/appengine/docs/standard/)
