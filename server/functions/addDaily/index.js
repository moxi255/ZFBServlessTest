'use strict';

module.exports = async function (ctx) {
  var title=new Date().toLocaleDateString()+"定时调度";
  var timestamp=new Date().getTime();
     await ctx.mpserverless.db.collection('daily').insertOne({
       title:title,
     timestamp: timestamp
})
.then(res => {console.log(res)})
.catch(console.error);

};

