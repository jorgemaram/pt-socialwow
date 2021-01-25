module.exports = app => {

    // Base URLS
    app.use('/api/event', require('./event.routes.js'))

}