module.exports={


getDateInYYYYMMDD: function(){
var date = new Date();
return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}
};
