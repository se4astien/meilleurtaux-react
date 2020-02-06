# Meilleurtaux FullStack Project React/NodeJS

Project created with React for the frontend and the back office and Express / Node for the Backend deployed on Heroku.
Data hosted on MongoDB via mLab.
Cookies for data persistence.
Email notification send by Mailgun with all data after filling the form.
Back Office with password to read and/or remove all data.

## Installation

Use terminal et npm to install dependancies.

```javascript
npx create-react-app meilleurtaux
npm install axios
npm install js-cookie
npm install ...
```

## Deploiement

https://meilleurtaux-react.netlify.com

## Requirements

Navigation with React Router.
The user can keep going through the screen and go back to previous screens without loosing data (global state & cookies).  
If the user close the session and re-open it, it could be possible to reload the last page visited.     
All required inputs must be fulfilled in order to go trough.
Alerting user when an input is required.
Use VIPOCO API for the zip code autocompletion.
When user finish to fill all inputs, a notification will send by email to the user. 
Storing new request on database and send an email to user with all the data.  
Back-office to read and remove the requests.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Screenshots

![](https://github.com/se4astien/meilleurtaux-react/blob/master/src/screenshots/meilleurtaux-01.png)
![](https://github.com/se4astien/meilleurtaux-react/blob/master/src/screenshots/meilleurtaux-02.png)
![](https://github.com/se4astien/meilleurtaux-react/blob/master/src/screenshots/meilleurtaux-03.png)
![](https://github.com/se4astien/meilleurtaux-react/blob/master/src/screenshots/meilleurtaux-04.png)
![](https://github.com/se4astien/meilleurtaux-react/blob/master/src/screenshots/meilleurtaux-05.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
