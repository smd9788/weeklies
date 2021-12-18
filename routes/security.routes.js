module.exports = app => {
    const securities = require('../controllers/security.controller.js');
  
    let router = require('express').Router();
  
    // Create a new Security
    router.post('/', securities.create);
  
    // Retrieve all Securities
    router.get('/', securities.findAll);
  
    // Retrieve a single Security with id
    router.get('/:id', securities.findOne);
  
    // Update a Security with id
    router.put('/:id', securities.update);
  
    // Delete a Security with id
    router.delete('/:id', securities.delete);
  
    // Create a new Security
    // router.delete('/', securities.deleteAll);
  
    app.use('/api/securities', router);
  };