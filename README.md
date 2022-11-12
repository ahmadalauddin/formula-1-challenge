# F1 Champions
F1 Champions is a SPA (Single Page Application) which shows list of F1 champions from 2005 till the date.  There are two screens in the application
### Main-screen: 
    Shows list of all the F1 champions with the following information:
        Champion Name, Nationality, Season, Round, Wins, Points

### Season Detail: 
    Shows details of the season including all the races in that calendar year with winners of each races.
    This screen shows the following information:
        Race Name, Round, Date, Grid, Winner, Laps, Time

The project uses http://ergast.com/mrd/ api to fetch all the records shown on both modules in the application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Project Specifications

### Language
Javascript is used for this project with React as Frontend Library

### Variables
Project uses the following variables defined in a "constants" folder found in the src folder
- Base URL: base_url
- Starting Year: starting_year
- Current Year: current_year
- Offset: offset (used to calculate offset for the API) 
- Limit: limit (used to calculate the limit for the API records)

### Component Structure
The components have the following structure in the project directory:
components
```
├──componentName (Folder)
   └──componentName.js
   └──componentName.scss
   └──componentName.utils.js
   └──helperFunction.js
   └──relatedComponent.js
```

### Tests
Jest + Enzyme is used for testing.
All the UI tests are placed in the src folder with a structure similar to components

```
src
├── --tests (Folder)
    └──components (Folder)
        └──componentName (Folder)
            └──componentName.test.js
            └──relatedComponent.test.js
```

#### Fonts
This application uses google fonts named 'Montseratt'.
The font file is loaded using google.fonts in the HTML file

````<link href="//fonts.googleapis.com/css?family=Montserrat:300,400,500" rel="stylesheet">````

## Project installation
In order to run the project you have to issue the following commands

### Install dependencies
Issue the following command to install all the dependencies 
`npm install`

### Run Project
Issue the following command to run the project (by default on port 3000) 
`npm start`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
