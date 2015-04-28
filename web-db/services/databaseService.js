app.service('databaseService', function () {

    var name = 'letmeknow';
    var version = "1.0";
    var description = "letmeknow web sql database";
    var dbSize = 5 * 1024 * 1024; // 5MB
    var db = null;

    this.open = function () {
        if (db == null) {
            db = openDatabase(name, version, description, dbSize);
        }
        console.log(db != null);
    }

    this.createTable = function () {
        if (db != null) {
            db.transaction(function (transaction) {
                transaction.executeSql('CREATE TABLE IF NOT EXISTS TASK(name TEXT, target_datetime DATETIME)', []);
            });
        }
    }

    this.add = function (tableName, fields, values) {
        this.open();
        this.createTable();

        var sql = "INSERT INTO " + tableName + "("
        for (var index = 0; index < fields.length; index++) {
            if (index < fields.length - 1) {
                sql += fields[index] + ",";
            } else {
                sql += fields[index];
            }
        }
        sql += ") VALUES (";
        for (var index = 0; index < values.length; index++) {
            if (index < values.length - 1) {
                sql += "'" + values[index] + "',";
            } else {
                sql += "'" + values[index] + "'";
            }
        }
        sql += ")";
        db.transaction(function (tx) {
            tx.executeSql(sql);
        });

    }

});