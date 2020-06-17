
import MPServerless from '@alicloud/mpserverless-sdk';
import cloud from 'alipay-cloud-sdk';
import cloudSdk from 'alipay-serverless-sdk';
// my.serverless=my.serverless||new MpServerless({
// uploadFile:my.uploadFile,
// request:my.request,
// getAuthCode:my.getAuthCode,
// },{
// appId:'2021001167694360',
// spaceId:'db277cdd-a03f-4a1b-84f7-292c17d78c81',
// clientSecret:'NoueHLon8V6KUVhdGGAv1w==',
// endpoint:'https://api.bspapp.com',
// });
// 2.1 初始化 MPServerless
                                  
my.serverless =my.serverless || new MPServerless({
  uploadFile: my.uploadFile,
  request: my.request,
  getAuthCode: my.getAuthCode,
}, {
  // 2.2 参数能在小程序云服务空间详情中获取
  appId: '2021001167694360',
  spaceId: 'db277cdd-a03f-4a1b-84f7-292c17d78c81',
  clientSecret: 'NoueHLon8V6KUVhdGGAv1w==',
  endpoint: 'https://api.bspapp.com'
});
cloud.init(my.serverless)
cloudSdk.init(my.serverless)
App({
   async onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    await my.serverless.user.authorize({      authProvider: 'alipay_openapi',    })
//     await my.serverless.user.authorize({
//       authProvider: 'alipay_openapi',
//       // authType: 'anonymous'
// });
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
