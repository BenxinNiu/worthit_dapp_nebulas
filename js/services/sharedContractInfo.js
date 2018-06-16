app.factory('contractInfo', function(){
  var NebPay = require("nebpay");
  var nebPay = new NebPay();
  const contract_address = "n1h7EDDFG3DJ5tizZibHmwRiu4pq5i2UXwu";
  const callBackUrl = NebPay.config.testnetUrl;

    return {
      addr : contract_address,
      url : callBackUrl,
      nebPay : nebPay
    };

})