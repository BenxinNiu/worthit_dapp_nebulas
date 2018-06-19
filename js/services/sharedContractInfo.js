app.factory('contractInfo', function(){
  var NebPay = require("nebpay");
  var nebPay = new NebPay();
  const contract_address = "n1m6wT5rtKG39CSJXUfRKZnQwqesG9ZcMYb";
  const callBackUrl = NebPay.config.mainnetUrl;

    return {
      addr : contract_address,
      url : callBackUrl,
      nebPay : nebPay
    };

});