const programs = require('../models/Programs');
const users = require('../models/Users');
const contributors = require('../models/Contributors');

module.exports = function (app) {
    app.get('/api/programs', async (req, res) => {
        let programs = await programs.find();
        res.send(programs);
    });

    app.get('/api/programs/:id', async (req, res) => {
        let program = await programs.findById( req ,req.params.id, function (err, program) {
            if (err) {
                console.log(err);
            }
        });
        res.send(program);
    });

    app.create('/api/programs', async (req, res) => {
        let program = await programs.create(req.body, function (err, program) {
            if (err) {
                console.log(err);
            }
        });
        res.send(program);
    });
    app.delete('/api/programs/:id', async (req, res) => {
        let program = await programs.findByIdAndDelete(req.params.id, function (err, program) {
            if (err) {
                console.log(err);
            }
        });
        res.send(program);
    });

    app.put('/api/programs/:id', async (req, res) => {
        let program = await programs.findByIdAndUpdate(req.params.id, req.body, function (err, program) {
            if (err) {
                console.log(err);
            }
        });
        res.send(program);
    });
    ///////////////////////////////////////////////////////////////////////////////////////////
    // contributors
    app.get('/api/contributors', async (req, res) => {
        let contributors = await contributors.find();
        res.send(contributors);
    });

    app.get('/api/contributors/:id', async (req, res) => {
        let contributor = await contributors.findById(req, req.params.id, function (err, contributor) {
            if (err) {
                console.log(err);
            }
        });
        res.send(contributor);
    });

    app.create('/api/contributors', async (req, res) => {
        let contributor = await contributors.create(req.body, function (err, contributor) {
            if (err) {
                console.log(err);
            }
        });
        res.send(contributor);
    });

    app.delete('/api/contributors/:id', async (req, res) => {
        let contributor = await contributors.findByIdAndDelete(req.params.id, function (err, contributor) {
            if (err) {
                console.log(err);
            }
        });
        res.send(contributor);
    });

    app.put('/api/contributors/:id', async (req, res) => {
        let contributor = await contributors.findByIdAndUpdate(req.params.id, req.body, function (err, contributor) {
            if (err) {
                console.log(err);
            }
        });
        res.send(contributor);
    });
    //////////////////////////////////////////////////////////////////////////////////////////////
    // users
    app.get('/api/users/:id', async (req, res) => {
        let user = await users.findById(req, req.params.id, function (err, user) {
            if (err) {
                console.log(err);
            }
        });
        res.send(user);
    });
    app.create('/api/users', async (req, res) => {
        let user = await users.create(req.body, function (err, user) {
            if (err) {
                console.log(err);
            }
        });
        res.send(user);
    });
    app.delete('/api/users/:id', async (req, res) => {
        let user = await users.findByIdAndDelete(req.params.id, function (err, user) {
            if (err) {
                console.log(err);
            }
        });
        res.send(user);
    });
    app.put('/api/users/:id', async (req, res) => {
        let user = await users.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
            if (err) {
                console.log(err);
            }
        });
        res.send(user);
    });
}