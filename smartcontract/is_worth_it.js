//This smart contract allows user to create a topic which
// will be visulizaed on UI, also gives user to broswe all topics
// or specific ones and create vote on this topic

//Powered by Nebulas tech
//Author Benxin Niu
//License: MIT
// view on github https://github.com/BenxinNiu/worthit_dpp_nebulas.git


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

getTopicsCount: function(){
  return this.topic_index;
},

getUsersCount: function(){
  return this.user_index;
},

get_one_topic: function(topic_id){
return this.topic_list.get(topic_id);
},

get_users_topics: function(){
const user_id = this.user.get(Blockchain.transaction.from);
var topics = [];
for(var i=0;i<this.topic_index;i++){
  var topic = JSON.parse(this.topic_list.get(i));
  if (topic.user_id == user_id)
    topics.push(topic);
}
const res = {data: topics};
return JSON.stringify(res);
},

getTopics: function(){
  var topics = new Array();
  for(var i=0; i<this.topic_index; i++){
    var raw = JSON.parse(this.topic_list.get(i));
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
},

createVote: function(id,condition){
  var topic_target = JSON.parse(this.topic_list.get(parseInt(id)));
  if(condition==="upvote"){
    topic_target.likes = parseInt(topic_target.likes) + 1;
  }
  else{
    topic_target.dislikes = parseInt(topic_target.dislikes) + 1;
  }
  this.topic_list.delete(parseInt(id));
  this.topic_list.put(parseInt(id), JSON.stringify(topic_target));
}

};

module.exports = is_worth_it;
