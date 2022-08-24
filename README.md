Download dependencies by running

npm install

Start the app using

cd myapp npm start

Open http://localhost:3000 to view it in your browser.

Language Used:

Reactjs



react-dishpoll
Problem Statement
Make a small react app for ranking dishes. Multiple users should be able to login into the app and vote for their favourite dishes and see the results of the poll.

Screens and functionalities needed:

Login Screen: A user should be able to login into the app using a username and password. Since there is no backend to query you can use a static list of users. Refer to users.json for the static list of users to use

Once logged in the main app should have 2 tabs (or equivalent).

Tab 1: Fetch the list of dishes using an API and display the results for the user to vote. Each user then should be able to make a selection of 3 dishes from the poll that has been created. Each selection is given points based on the rank (Rank 1 gets 30 points, Rank 2 gets 20, Rank 3 gets 10). Save the user’s selections for displaying it to him on the next screen for poll results. A user should be able to edit his choices anytime even after submission i.e. if Dish 1 was Rank 1, the user can change it to no Rank or Rank 2, if there is another dish with the same rank the other dish will lose its rank

URL to fetch dishes json: https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json

Sample dish object
{
"id": 1,
"dishName": "Lasagne",
"description": "Breaded fried chicken with waffles, and a side of maple syrup.",
"image": "https://loremflickr.com/300/300/food"
}
Tab2: Show the dishes in the descending order of the points received from the polling. The logged in user should also be able to see his selections in this list so that he knows where his selected dishes stand in the rankings.

How will the submission be evaluated?
Functionality: Is the web-app functional and performant?
Code Quality: Code Readability and structuring.
Exception Handling: No crashes and proper error messages logged.
Git Commit practices: Manage your code in github and make frequent commits.
Submission
Share the github repository and hosted webapp link with a readme on how to run the code. If you have any other doubts, get in touch with us

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
