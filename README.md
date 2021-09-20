# Nord-HW
#Explicit Requirements
- Create a server explorer web app:
    * Implement login - POST
    https://playground.tesonet.lt/v1/tokens
    { username: "tesonet", password: "partyanimal" }
    * Display servers list - GET https://playground.tesonet.lt/v1/servers
    * Make servers list sortable by name/distance
- App must work on all modern browsers + IE11

#Implicit Requirements
- App must be production-ready - (functionality, performance, error handling etc.)
- There is no design provided but make it visually appealing.

#Other expectations
- Use React + Redux (or context)
- Don't import too many libraries. Keep away from bootstrap, material-ui etc., utility libraries like lodash, tailwindcss ect. are fine.
- create-react-app is fine for entry/mid level positions
- we like tests

#***************************
#To run project locally:
- cd nord-web-homework
- npm install
- npm start