
// console.log(module);
exports.getDate=function (){
    var today=new Date();
    var options = { weekday: 'long',
     month: 'long', 
     day: 'numeric' };

     var day=today.toLocaleDateString("en-US",options);

     return day
}


exports.getDay=function (){
    var today=new Date();
    var options = { weekday: 'long',
                         };
     var day=today.toLocaleDateString("en-US",options);
     return day
}