const orm = require("../config/orm.js");

const forest = {
    all: function (callback) {
        orm.selectAll('trees', callback);
    },

    create: function (treeText, callback) {
        orm.insertInto('trees', 'tree_name', treeText, callback);
    },

    update: function (id, callback) {
        orm.update('trees', 'planted', 1, id, callback);
    }


}

module.exports = forest;