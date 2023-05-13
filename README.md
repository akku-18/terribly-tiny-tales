# Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Additional dependencies`

`chart.js`, `react-chartjs-2` and  `papaparse`


### `FetchData.js`

This is a functional component named `FetchData` which is the main component of the application. It uses the React `useState` hook to create state variables `click` and `wordCount`. The `click` state variable is initialized as `false` and is used to handle the click event of the "Submit" button. The `wordCount` state variable is an empty object that will be updated with the frequency count of words after the "Submit" button is clicked.

When the "Submit" button is clicked, the `handleClick` function is called. This function fetches a text file from a URL using the `fetch` API and converts the response to text using the `text` method. Then it performs some preprocessing steps on the text such as converting it to lowercase, removing punctuations, and splitting it into an array of words. The function also calls another function `removeStopwords` to remove common stop words from the array of words.

After preprocessing, the function counts the frequency of each word using an object `filtered` with keys as words and values as their frequency. The frequency count is performed using a `for...of` loop that iterates over the filtered array and updates the `filtered` object.

Finally, the `setWordCount` function is called to update the state variable `wordCount` with the `filtered` object and the `setClick` function is called to update the state variable `click` to `true`.

The `return` statement of the component contains a conditional rendering statement that checks the value of `click` state variable. If it is `false`, it renders a "Submit" button, otherwise, it renders a child component named `MyChart` with `wordCount` object passed as props to it.

Overall, this component fetches and preprocesses the text file, counts the frequency of words, and renders a chart component to display the top 20 most frequent words in the text file.


### `MyChart.jsx`

This is a React component named `MyChart` that displays a horizontal bar chart using the `react-chartjs-2` library. The chart displays the frequency of the top 20 items in a given dataset. The data is passed to the component as a prop named "data".

First, the data is sorted in descending order and the top 20 items are selected. Then, the labels and data are extracted from the top 20 items and added to two separate arrays named `labelsArray` and `dataArray`. These arrays are then used to create the chart data object with the appropriate labels and data for the horizontal bar chart.

The chartOptions object is used to set options for the chart, such as the scales and legends. The `y` scale is set to begin at zero and the font size and weight are set for both the x and y axis ticks. The legend font size and padding are also set in the "plugins" section.

Finally, the component returns a div containing the Bar component from "react-chartjs-2" with the chartData and chartOptions passed in as props. Additionally, there is an ExportCSV component that takes in the xAxis and yAxis arrays as props, which allows the user to download the chart data as a CSV file. The entire chart component is styled using CSS properties like width, background color, padding, and border radius.



### `ExportCSV.jsx`

This is a React component named `ExportCSV` that allows the user to download the data used in the chart as a CSV file. The component receives two props, xAxis and yAxis, which are arrays containing the labels and data used in the chart.

First, the component maps the xAxis and yAxis arrays into an array of objects named `data`. Each object contains an x and y property with the corresponding values from the xAxis and yAxis arrays. This is necessary because the Papa Parse library requires the data to be in an array of objects format to create a CSV file.

The handleExportClick function is called when the `Export` button is clicked. This function uses the Papa Parse library to convert the data array into a CSV string. Then, it creates a Blob object containing the CSV data with the appropriate MIME type and a file name of `mydata.csv`. A link element is created and its href attribute is set to the URL of the created Blob object. The link element is then clicked and removed from the document.

Finally, the component returns a div containing a button element with an onClick event handler that calls the handleExportClick function when clicked. The button is styled using CSS properties like background color, border, font size, padding, border radius, margin, and cursor to give it a visually appealing appearance.


### Deployment

Deployed on netlify 

`https://ttt-12015923.netlify.app/`
