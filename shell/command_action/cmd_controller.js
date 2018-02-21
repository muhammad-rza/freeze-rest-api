/* eslint-disable */
// require('../paths');

const route_path = 'app/';
const file_name_suffix = 'Controller';

const readFrom  =


module.exports = {

    create(fileName) {

        let onlyFileName = createFile(route_path+fileName+file_name_suffix ,fileName.split('/').splice(-1,1))

    },
    remove() {}

}

var mkdirp = require("mkdirp")
var fs = require("fs")
var getDirName = require("path").dirname

function createFile(filenameWithDir , filename) {

    let fileFullName = filenameWithDir+'.js';

    if (fs.existsSync(fileFullName)) {

        console.log('Upps '+filename+' already exists')

    }else {

        fs.readFile('shell/blue_print/controller.js',  'utf8' , (err, data) => {



            let newCreatedFile = data.replace(new RegExp("<controllerName>", 'g')  ,filename.toString() );


            newCreatedFile = newCreatedFile.replace('<modelPath>' , '../Model');


            writeFile(fileFullName ,newCreatedFile , function(err) {

                if(err) console.log('error')
                else  console.log(filename+' was created successfull')
            } )


         });
    }


}

function writeFile (path, contents, cb) {
    mkdirp(getDirName(path), function (err) {
        if (err) return cb(err)
        fs.writeFile(path, contents, cb)
    })
}