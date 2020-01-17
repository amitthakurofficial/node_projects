var file=require('fs');
var x;
file.readFile('file.txt', function (err,data)
{
    try {
        if(err)
        {
            return console.log(err.stack);
        }
    }
    catch (e) {
        console.log(err);
    }
    console.log(data.toString());

});