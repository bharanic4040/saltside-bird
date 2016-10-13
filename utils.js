function isValidDateFormat(str) {
    //yyyy-mm-dd regexp
    return /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(str);
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function hasSomeValue(str) {
    return !isEmpty(str) && !isBlank(str);
}

module.exports = {
    //validates the post request body
    validateReqBody: function(postBody) {
        var errors = [];
        if (!hasSomeValue(postBody.name)) {
            errors.push("name is mandatory.");
        }

        if (!hasSomeValue(postBody.family)) {
            errors.push("family is mandatory.");
        }
        if (!postBody.continents) {
            errors.push("continents is mandatory.");
        }
        if (postBody.added && !isValidDateFormat(postBody.added)) {
            errors.push('Invalid date format ,date must be of YYYY-MM-DD format');
        }
        return errors;
    },
    //gets the date in yyyy-mm-dd format
    getDateInYYYYMMDD: function() {
        var date = new Date();
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    },
    BIRD_PROJECTION:{
       continents:false,__v:false,visible:false,name:false,family:false,added:false}
    
};
