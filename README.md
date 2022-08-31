# xander-email
A library to facilitate the use of nodemailer.

[![npm](https://img.shields.io/npm/v/xander-email)](https://www.npmjs.com/package/xander-email)
[![GitHub](https://img.shields.io/github/license/ZaikoXander/xander-email)](LICENSE)

## Installation

You may install this module using npm or Yarn.

```bash
npm i xander-email
```
Or ``yarn add xander-email`` for Yarn

## How to use

```js
import xanderEmail from "xander-email"

transport.sendMail({
  from: "Support <support@gmail.com>",
  to: "Client <client@gmail.com>",
  subject: "Test",
  html: xanderEmail("view1", "./src/modules/mailer/views", { title: "xander-email" }) 
})
```

### Views

Assuming that you already know how to use ``nodemailer``, start creating a folder for the email's views.<br>
This views is basically web pages (html), so you just need to create elements like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div style="background-color: black; height: 100vh;">
    {{title}}
    {{greenBox}}
  </div>
</body>
</html>
```

### Components

You probably notice that this two lines are not html elements.<br>
So... What is it?

```html
{{title}}
{{greenBox}}
```

Well, those are components, which can be called from multiple different ``Views``.<br>
And in reality to take an example, here we have the ``title`` component:
```html
<h1 style="color: white; font-family: Arial, Helvetica, sans-serif;">
  {{-title}}
</h1>
```

### Variables

There are variables too, we will take a look how to use them later.

```html
{{-title}}
```

### Finally getting our views using xander-email

Before, you need to make sure that the ``components`` folder is inside the ``views`` folder. Just like this:
<img src="https://user-images.githubusercontent.com/80606136/187573193-b01fcc1d-d3ae-462e-a61b-6008ebe063ab.png" alt="folder_example" align="center"><br>
And the name of the ``components`` folder needs to be in lowercase (for now).

Now we just need to create the transport of nodemailer, and when sending the Email, write on the html param something like:
```js
import xanderEmail from "xander-email"

transport.sendMail({
  from: "Support <support@gmail.com>",
  to: "Client <client@gmail.com>",
  subject: "Test",
  html: xanderEmail("body", "./src/modules/mailer/views", { title: "xander-email" }) // <--
})
```
#### Params
* viewName(the name of the view file that you want)
* viewsPath(the path to your views folder, and it includes the view folder itself)
* variables(an object that receives keys (name of the variables of the views) and the values of it)
