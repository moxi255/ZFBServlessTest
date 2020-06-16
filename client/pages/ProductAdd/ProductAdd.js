Page({
  data: {
    name:'',
    price:0,
    store:0,
    imageUrl:'',
  },
  onLoad() {},
  selectImg(event){
    my.chooseImage({
      chooseImage: 1,
      success: res => {
        const path = res.apFilePaths[0];
        const options = {
          filePath: path,
          headers: {
            contentDisposition: 'attachment',
          },
        };
        console.log(options);
        
       my.serverless.file.uploadFile(options).then((image) => {
        console.log(image);
        this.setData({
          imageUrl: image.fileUrl,
        });
      }).catch(console.log);
      
      },
    });
  },
  onSubmit(e){
    var data=JSON.stringify(e.detail.value);
    my.serverless.db.collection('products').insertOne({
       name:data.name,
    price:data.price,
    store:data.store,
    imageUrl:this.data.imageUrl,
})
.then(res => {alert("添加成功")})
.catch(console.error);
  }
});
