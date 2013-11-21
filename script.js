var localDB = null;

function onInit()
{
    var dbName = "dbExercicio";
    var version = "1.0";
    var displayName = "displayName";
    var size = 65536;
    
    localDB = window.openDatabase(dbName,version,displayName,size);
    
    // createTable();
}

function createTable()
{
    var query = "CREATE TABLE IF NOT EXISTS tbUsers(Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Nome varchar);";
    
    localDB.transaction(function(transaction,results){
        transaction.executeSql(query,[]);
    });
}

function salvaperiodo()
{
    var query = "SALVAR PERIODO";
    
    localDB.transaction(function(transaction,results){
        transaction.executeSql(query,[]);
    });
}

function deleteTbUsers()
{
    var query = "Drop Table tbUsers";
    localDB.transaction(function(transaction){
        transaction.executeSql(query,[]);
    });
}

function onInsert()
{
    var query = "insert into tbUsers(Nome) Values(?)";
    
        localDB.transaction(function(transaction,results){
            transaction.executeSql(query,[document.form1.txtnome.value],function(transaction,results){
                alert(results.rowsAffected);
            },function(transaction,error){alert("ERROR: " + error.message);})
        });
}

function onSelect()
{
    var query = "Select * from tbUsers";
    localDB.transaction(function(transaction,results){
        transaction.executeSql(query,[],function(transaction,results){
            var content = "";
            for (var i=0; i < results.rows.length; i++)
            {
                var row = results.rows.item(i);
                content += "Id: " + row["Id"] + " Nome: " + row["Nome"] + "<br />"; 
            }
            
            document.getElementById("lstusers").innerHTML = content;            
        },function(transaction,error){
            alert("ERROR: " + error.message);
        });
    });
}


















