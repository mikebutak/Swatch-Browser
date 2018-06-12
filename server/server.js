const app = require('./api');
const PORT = process.env.PORT || 3306;

// the reason I have abstracted this functionality from the
// rest of the express API is because otherwise the test suite 
// will interrupt the server from listening.  
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}.`)
})