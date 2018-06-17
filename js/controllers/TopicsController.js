app.controller('TopicsController',['$scope' ,'contractInfo',function($scope,contractInfo){
    const contract_address = contractInfo.addr;
    const callBackUrl = contractInfo.url;
    const nebPay = contractInfo.nebPay;
  const generate_logo_list = function(){
    let list = [];
    for (let i=1; i<=20; i++)
      list.push("public/logo/a" + i.toString() + ".png")
    return list;
};
  const validate_form = function(data){
    let msg = [];
    if(data.title === "" )
      msg.push("Title can not be Empty...");
    if(data.tag === "")
      msg.push("Tag can not be Empty...");
    if(data.story === "")
      msg.push("Description can not be Empty...");
    if(data.avator === "")
      msg.push("Please choose an avator...");
  return msg;
  };
  const onCreateTopic= function(res){
      if(typeof(res)==='string' && res.startsWith('Error')){
          alert("Ooops...Something went wrong, Please tey again later....");
      }
      else{
        //$scope.error_msg = ["Submission Successful"]
        $("input").val('');
        $("textarea").val('');
      }
    };


$scope.selected_avator = "";
$scope.title="Publish New Topic";

$scope.selected = false;
$scope.error = false;
$scope.avator = "Choose avator for your topic: "
$scope.error_msg = [];

$scope.logo_list = generate_logo_list();

$scope.update_avator = function (index){
  $scope.selected_avator = this.logo_list[index];
  $scope.avator = "Updated";
};

$scope.submitTopic = function(){
  const d = new Date();
  let data = {
    title: $("#input_title").val(),
    tag: $("#input_tag").val(),
    story: $("#input_story").val(),
    worthit: $("#input_worthit").val(),
    avator: $scope.selected_avator,
    likes : 0,
    dislikes: 0,
    date: new Date(d.getFullYear(),d.getMonth(),d.getDate())
};
  $scope.error_msg = validate_form(data);
  if($scope.error_msg.length !== 0){
    return ;
  }
  else{
  nebPay.call(contract_address,0,"createNewTopic",JSON.stringify([JSON.stringify(data)]),{
    listener: onCreateTopic
  });
  }
}
}
])
