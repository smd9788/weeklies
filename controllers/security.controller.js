const Security = require('../models').Security;
const { Op } = require('sequelize');

exports.create = (req, res) => {
    if (!req.body.ticker) {
        res.status(400).send({
            message: "Ticker must not be empty"
        });
        return;
    }

    if (!req.body.securityName) {
        res.status(400).send({
            message: "Security name must not be empty"
        });
        return;
    }

    console.log(req.body)

    const security = {
        lastPrice: req.body.lastPrice,
        priceDate: req.body.priceDate,
        securityName: req.body.securityName,
        ticker: req.body.ticker
    };

    Security.create(security)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while creating a security"
            });
        });
};

exports.findAll = (req, res) => {
    const securityName = req.query.securityName;
    let condition = securityName ? { securityName: { [Op.like]: `%${securityName}%` } } : null;

    Security.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrieving securities"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Security.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find security with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving security with id=${id}.`
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    console.log(req.body)

    Security.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message:  'Security was updated successfully.'
                });
            } else {
                res.send({
                    message: `Cannot update Security with id=${id}. Security not found or req.body empty`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating security with id=${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Security.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Security deleted successfully.'
                });
            } else {
                res.send({
                    message: `Cannot delete security with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Cannot delete security with id=${id}.`
            });
        });
};

// exports.deleteAll = (req, res) => {
//     Security.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({ message: `${nums} Securities were deleted successfully` });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || 'Some error occurred while removing all securities'
//             });
//         });
// };