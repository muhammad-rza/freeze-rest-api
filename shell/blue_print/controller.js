const BaseController = require(APP_ROOT_PATH + 'base/BaseController');


class <controllerName> extends BaseController  {

    constructor() {


        super();
        // console.log(this)

    }


    index(req,res,next){

        return res.send('ExampleController')

    };
    create(req,res,next){

        return res.send('ExampleController')

    }

}

module.exports = ExampleController;