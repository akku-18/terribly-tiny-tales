# Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Additional dependencies`

chart.js
papaparse

### `App.js is the main component that will be used to render other components`

It has click useState that is false by default and will be used to render the start button initially and when clicked it will be true and will render the MyChart component with prop as object of words with their frequency 

### `Data preprocessing`

We have first fetch the entire text from https://www.terriblytinytales.com/test.txt, then changed the text to lower case, removed the punctuations and splitting them into spaces.

#### Removing stop words

In the entire text we have words like a, an, the, and, or these words have greater frequency in the text but these words are of less importance than other words so we need to remove them from the text to have a better analysis of the text as we have a target to plot a histogram of top 20 words having highest frequency

### `MyChart Component`

In this component we have used chart.js library to create a bar graph of 20 most frequent words. Sorted the data and sliced to get top 20 words as an object. Now we have stored the words in a labelsArray similarlly frequency to dataArray. Then we have added style tag to the parent div to add some styles.  

### `ExportCSV Component`

In the MyChart component we have used ExportCSV Component that get two arrays as props one of labels and other of frequency. In the component we have defined a handleExportClick() function that will we triggered on click which downloads the data into a csv format.


### `npm test`

Launches the test runner in the interactive watch mode.\

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

### Deployment

Deployed on netlify
