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
    console.log(e.detail.value.name)
    var name=e.detail.value.name;
    
    var store=e.detail.value.store;
    var price=e.detail.value.price;
    my.serverless.db.collection('products').insertOne({
       name:name,
    price:price,
    store:store,
    imageUrl:this.data.imageUrl
})
.then(res => {alert("添加成功")})
.catch(console.error);
  }
});
