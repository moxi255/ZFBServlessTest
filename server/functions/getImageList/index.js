'use strict';

module.exports = async (ctx) => {
  
  const images = await ctx.mpserverless.db.collection('products').find();
  return { images };
};