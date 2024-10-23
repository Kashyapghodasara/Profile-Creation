# Profile-Creation
This is Project is Based on Backend Learning.

- CSS
- Javascript
- EJS
- Node JS
- Express JS
- MongoDB

In this project You can Create a Profile. Where you can enter your Name, Email and as well as add your Favourit Profile picture. ANd you can also Edit your profile and Delete your Profile.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Install MongoDB and have it running on your local machine or use a cloud service like MongoDB Atlas.

nstall dependencies:

Make sure you're in your project directory, then run:

```
npm install express mongoose ejs
express: Fast, unopinionated, minimalist web framework for Node.js.
mongoose: MongoDB object modeling tool.
ejs: Templating engine for rendering HTML with JavaScript.
Set up MongoDB connection:
```

Create a ```.env ``` file in the root of your project and add your MongoDB URI:

```
MONGODB_URI=mongodb://localhost:27017/your-database-name
```
Create a basic server:

Create a file named server.js and add the following code:
```
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define a route
app.get('/', (req, res) => {
    res.render('index'); // Render index.ejs from views folder
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
Create a views folder:
```
Inside your project directory, create a folder named ```views``` and create a file named ```index.ejs``` with the following content:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
</head>
<body>
    <h1>Welcome to My App!</h1>
</body>
</html>

```
Usage
Start the server:

Run the following command in your terminal:
```
node server.js
```
Open your browser:

Go to http://localhost:3000 to see your application running.


## License Grant

Copyright © [2024] Kashyap Ghodasara. All rights reserved.
You are Free to Use this Project.

