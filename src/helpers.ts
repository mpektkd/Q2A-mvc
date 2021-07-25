const hbs = require('handlebars');
hbs.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});