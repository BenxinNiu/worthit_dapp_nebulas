app.directive('topicsCard', function(contractInfo){

  return {
    restrict: 'E',
    scope:{
      info: "="
    },
    templateUrl: "js/directives/html/topicCard.html",
    link: function(scope, element, attrs) {

    const onCreateVote = function(res){
      if(typeof(res) === 'string' && res.startsWith("Error")){
        alert("Ooops.. please try again later");
      }
      console.log(res);
    };



    const submitVote = function(topic_id,type){
        const contract_address = contractInfo.addr;
        const callBackUrl = contractInfo.url;
        const nebPay = contractInfo.nebPay;
        // const req = {
        //   id: topic_id.toString(),
        //   condition: type
        // };
        // console.log(req);

        nebPay.call(contract_address,0,"createVote",JSON.stringify([topic_id, type]),{
            listener: onCreateVote
        });
    };



      scope.voteUp=function(){
      if(!this.info.upvote_clicked) {
          this.info.upvote_clicked = true;
          this.info.likes += 1;
          submitVote(this.info.id, "upvote");
      }
    };



    scope.voteDown=function(){
    if(!this.info.downvote_clicked) {
        this.info.downvote_clicked=true;
        this.info.dislikes += 1;
        submitVote(this.info.id, "downvote");
    }
    };
}
  };
});
