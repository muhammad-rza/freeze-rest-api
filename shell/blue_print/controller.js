const BaseController = require(APP_ROOT_PATH + 'base/BaseController');

const <controllerName>Model = require('<modelPath>/<controllerName>');


class <controllerName>Controller extends BaseController  {

    constructor() {

        super();

        this.controllerName = '<controllerName>';

    };
    index(req,res,next) {

        res.action_name = 'index';
        res.status(200).json({action_name:res.action_name})

        // your code

    };

    create(req,res,next) {

        res.action_name = 'create'
        res.status(200).json({action_name:res.action_name});

        // your code

    };

    store(req,res,next) {

        res.action_name = 'store';
        res.status(200).json({action_name:res.action_name})

        // your code

    };

    show(req,res,next) {

        res.action_name = 'show';

        res.status(200).json({action_name:res.action_name})
        // your code

    };

    edit(req,res,next) {

        res.action_name = 'edit';

        res.status(200).json({action_name:res.action_name})
        // your code

    };

    update(req,res,next) {

        res.action_name = 'update'
        res.status(200).json({action_name:res.action_name});

        // your code

    };

    destroy(req,res,next) {

        res.action_name = 'destroy' +
            'res.json(200'.json({action_name:res.action_name});

        // your code

    };

    /*====================================================/
    *    YOUR OWN CONTROLLER`S FUNCTIONS START FROM HERE
    * ===================================================*/



}

module.exports = <controllerName>Controller;