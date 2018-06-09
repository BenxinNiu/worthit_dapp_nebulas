// Atuhor Benxin Niu
'use strict';

var is_worth_it = function(){
  // key is the topic_id
LocalContractStorage.defineMapProperty(this, "topics")
//key is the address value is the user_id
LocalContractStorage.defineMapProperty(this, "user") // used
LocalContractStorage.defineProperty(this, "num_user") // used
LocalContractStorage.defineProperty(this,"topic_bucket") // used
LocalContractStorage.defineProperty(this, "tag_list") // used
}

is_worth_it.prototype = {

  init: function(){
    this.num_user = 0;
    this.topic_bucket = [];
    this.tag_list = [];
  },

  getTopicsCount: function(){
    return this.topic_bucket.length;
  },

  getTagsCount: function(){
    return this.tag_list.lenght;
  },

  getUserCount: function(){
    return this.num_user;
  },

  createVote: function(req){
    const from_address = Blockchain.transaction.from;
    const json_req = JSON.parse(req);
    _modifiy_topic(req.id,req.condition);
  },

  getTopics: function(){
    const json_res = {
      "tags": this.tag_list,
      "topics": this.topic_bucket
    }
    return JSON.stringify(json_res);
  },

  createNewTopic: function(req){
    var topic = _formatTopic(req);
    _update_usr_topic_list(topic);
    _update_topic_bucket(topic);
  },

  _modifiy_topic: function(id, condition){
    var i;
    for (i=0; i<this.topic_bucket.length;i++){
      if(this.topic_bucket[i].id==id){
      if(condition=="upvote"){
        var up=parseInt(this.topic_bucket[i].upvote) + 1;
        this.topic_bucket[i].upvote = up;
      }
      else{
        var down=parseInt(this.topic_bucket[i].downvote) + 1;
        this.topic_bucket[i].downvote = down;
      }
     break;
    }
    }
  },

  _update_topic_bucket: function(topic){
    if(!this.tag_list.includes(topic.tag.toLowerCase()))
      this.tag_list.push(topic.tag.toLowerCase());
    this.topic_bucket.push(topic);
  },

  _update_usr_topic_list: function(topic){
    var usr_topics = this.topics.get(topic.user_id);
    if(!usr_topics){
      this.topics.put(topic.user_id, [topic.id]);
    }
    else {
      usr_topics.push(topic.id);
      this.topics.delete(topic.user_id);
      this.topics.put(topic.user_id, usr_topics);
    }
  },

  _formatTopic: function(req){
    const from_address = Blockchain.transaction.from;
    var json = JSON.parse(req);
    var usr = this.user.get(from_address);
    if (!usr){
      usr = this.num_user++;
      this.user.put(from_address,usr);
    }
    json.user_id = usr;
    json.user_addr = from_address;
    json.id = this.topic_bucket.length;
    return json;
  }


}
module.exports=is_worth_it;
