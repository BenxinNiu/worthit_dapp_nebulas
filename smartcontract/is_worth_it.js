
'use strict' ;

var is_worth_it = function(){

//LocalContractStorage.defineMapProperty(this, "topic_index");
LocalContractStorage.defineMapProperty(this,"topic_list");
LocalContractStorage.defineMapProperty(this, "user");
// properties
LocalContractStorage.defineProperty(this, "topice_list_index");
LocalContractStorage.defineProperty(this, "topic_index");
LocalContractStorage.defineProperty(this, "user_index");

}

is_worth_it.prototype = {

init :function(){
  this.user_index = 0;
  this.topic_index = 0;
  this.topice_list_index = 0;
},

getTopics: function(){
  var topics = new Array();
  for(var i=0; i<=this.topic_index; i++){
    var raw = this.topic_list.get(i);
    topics.push(raw);
  }
  var res = {data: topics};
  return JSON.stringify(res);
},

createNewTopic: function(req){
var json_req = JSON.parse(req);
const from_addr = Blockchain.transaction.from;

var usr_id = this.user.get(from_addr);
if(!usr_id){
  usr_id = this.user_index++;
  this.user.put(from_addr,usr_id);
}
json_req.id = this.topic_index++;
json_req.user_addr = from_addr;
json_req.user_id = usr_id;

this.topic_list.put(json_req.id, JSON.stringify(json_req));

return "Topic created";

}

}

module.exports = is_worth_it;
