// The content of this file was generated by IBM Cloud
// Do not modify it as it might get overridden
module.exports = function(app, server){
    if (process.env.API_HOST) require('./api')(app);
    require('./public')(app);
    require('./health')(app);
};
