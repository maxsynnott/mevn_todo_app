// MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tasks');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

var Task = require("../models/task");

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/tasks', (req, res) => {
  Task.find({}, 'title checked', (error, tasks) => {
  	if (error) {
  		console.log(error)

  		res.send('Error encountered')
  	} else {
  		res.send({
  			tasks: tasks
  		})
  	}
  }).sort({_id:-1})
})

app.get('/tasks/:id', (req, res) => {
	Task.findById(req.params.id, 'title checked', (error, task) => {
		if (error) { console.log(error) }

		res.send(task)
	})
})

app.put('/tasks/:id', (req, res) => {
	var db = req.db;

	Task.findById(req.params.id, 'title checked', function (error, task) {
	  if (error) { console.error(error); }

	  task.title = req.body.title
	  task.checked = req.body.checked

	  task.save(function (error) {
	    if (error) {
	      console.log(error)
	    }
	    
	    res.send({
	      success: true
	    })
	  })
	})
})

app.post('/tasks', (req, res) => {
	var db = req.db;
	var title = req.body.title;
	var checked = req.body.checked;

	var new_task = new Task({
		title: title,
		checked: checked
	})

	new_task.save((error) => {
		if (error) {
			console.log(error);

			res.send({
				success: false,
				message: 'Task saved unsuccessfully'
			})
		} else {
			res.send({
				success: true,
				message: 'Task saved successfully!'
			})
		}
	})
})

app.delete('/tasks/:id', (req, res) => {
  var db = req.db;
  Task.remove({ _id: req.params.id }, (err, task) => {
    if (err) { res.send(err) }

    res.send({
      success: true
    })
  })
})


const port = process.env.PORT || 8081

app.listen(port, () => console.log(`Listening on port ${port}!`))
