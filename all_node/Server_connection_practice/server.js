//method1
var sql = require('mssql');

var dbconfig = {
    server: '192.168.6.196',
    database: 'Sahil_Sharma',
    user: 'Sahil_Sharma',
    password: 'Sahil_Sharma_123',
    port: 54299
};

function getstd() {
    var conn = new sql.ConnectionPool(dbconfig);
    var req = new sql.Request(conn);

    conn.connect(function (err) {
        if (err) {
            console.log(err);
            return;

        }
        req.query("SELECT * FROM Student", function (err, recordset) {
            if (err) {
                console.log(err);

            }
            else {
                console.log(recordset);
            }
            conn.close()

        });
    });
}
getstd();






//method2

console.log("hello1")
var sql = require('mssql');
//2.
console.log("hello2")
var config = {
    server: '192.168.6.196',
    database: 'Sahil_Sharma',
    user: 'Sahil_Sharma',
    password: 'Sahil_Sharma_123',
   
};
//3
console.log("hello3")
function loadEmployees() {
    //4.
    console.log("hello4")
    var dbConn = new sql.ConnectionPool(config);
    //5.
    console.log("hello5")
    dbConn.connect().then(function () {
        //6.
        console.log("hello6")
        var request = new sql.Request(dbConn);
        //7.
        console.log("hello7")
        request.query("select * from Student").then(function (recordSet) {
            console.log(recordSet);
            dbConn.close();
        }).catch(function (err) {

            //8.
            console.log("hello8")
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });
}
loadEmployees();
console.log("hello10")
