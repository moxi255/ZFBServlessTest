Page({
  data: {},
  onLoad() {
    my.serverless.function.invoke('getImageList').then((res) => {
  if (res.success && res.result) {
    console.log(res.result)
    this.setData({ imageList: res.result.images });
  }
}).catch(console.error);
  },
});
