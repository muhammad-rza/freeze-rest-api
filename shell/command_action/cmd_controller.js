/* eslint-disable */
// require('../paths');

const route_path = 'app/';
const file_name_suffix = 'Controller';

const readFrom  =


module.exports = {

    create(fileName) {

        let onlyFileName =

        createFile(route_path+fileName+file_name_suffix ,fileName.split('/').splice(-1,1))

    },
    remove() {}

}

var fs = require('fs');


function createFile(filenameWithDir , filename) {

    if (fs.existsSync(filenameWithDir+'.js')) {

        console.log('Upps '+filename+' already exists')

    }else {

        fs.readFile('shell/blue_print/controller.js',  'utf8' , (err, data) => {


            let newCreatedFile = data.replace('<controllerName>' ,filename.toString()+file_name_suffix );


            fs.writeFile(filenameWithDir+'.js', newCreatedFile , function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });




         });


        // fs.writeFile(filename, "Hey there!", function(err) {
        //     if(err) {
        //         return console.log(err);
        //     }
        //
        //     console.log("The file was saved!");
        // });

    }


}