import cloudSdk from 'alipay-serverless-sdk';
Page({
  data: {},
 async onLoad() {
    my.serverless.function.invoke('getImageList').then((res) => {
  if (res.success && res.result) {
    console.log(res.result)
    this.setData({ imageList: res.result.images });
  }

}).catch(console.error);
const res = await cloudSdk.base.qrcode.create("/Product/Product", "a", "扫一扫");
console.log(res)
  },
});
