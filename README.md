# todo-ui5

## Tech Stack

* Platform: Google App Engine Standard Environment
* Backend: Node.js, Express
* Database: Cloud Firestore
* Frontend: UI5

## API

[Api-Documentation](https://app.swaggerhub.com/apis-docs/Safadurimo/todo-ui5/1.0.0)

## Commands

Starting the app locally: npm start

Deploying the app to app engine: 

## Develment

Local Development:

Serving static files
Local: express app app.use('/static', express.static('static'));
App engine: app.yaml file

Database:
Local: https://cloud.google.com/datastore/docs/tools/datastore-emulator#windows
Produktion: 


## Links

* [Documentation: App Engine Standard Environment with Node](https://cloud.google.com/appengine/docs/standard/)
 * Next link


 	$.ajax({
				url: /api/todo,
				type: 'POST',
				data: JSON.stringify({ "text": "Martin" }),
				contentType: 'application/json',
				success: function(data){
					console.log("success"+data);
				},
				error: function(e){
					console.log("error: "+e);
				}
			  });