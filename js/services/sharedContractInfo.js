app.factory('contractInfo', function(){
  var NebPay = require("nebpay");
  var nebPay = new NebPay();
  const contract_address = "n1pDAXD6ovZ9V1srHXxufCRfpMpkMJHuHmp";
  const callBackUrl = NebPay.config.testnetUrl;

    return {
      addr : contract_address,
      url : callBackUrl,
      nebPay : nebPay
    };

});
//n1gGHow91fRHQdHk43mYe1URwTQZsfNzTC4
//n1h7EDDFG3DJ5tizZibHmwRiu4pq5i2UXwu
//n1vnBqqkDx74aqtpdBexX1AKzHHbXpfpxTZ
