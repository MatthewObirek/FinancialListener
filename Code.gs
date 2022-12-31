var Sheet1 = SpreadsheetApp.openById("GS_ID").getSheetByName('Sheet1');

function doGet(e) {
  
  var store = JSON.parse(e.parameters.store)
  var amount = JSON.parse(e.parameters.amount)

  var formattedDate = Utilities.formatDate(new Date(), "GMT-3", "MM/dd/yyyy");

  var LR = Sheet1.getLastRow()+1;
  var AccumulationFunc = "=SUM($C$2:C"+LR+")";

  Sheet1.appendRow([formattedDate,store,amount,AccumulationFunc]);

 
}
