
import MpServerless from '@alicloud/mpserverless-sdk';
import cloud from 'alipay-cloud-sdk';
my.serverless=my.serverless||new MpServerless({
uploadFile:my.uploadFile,
request:my.request,
getAuthCode:my.getAuthCode,
},{
appId:'2021001167694360',
spaceId:'db277cdd-a03f-4a1b-84f7-292c17d78c81',
clientSecret:'NoueHLon8V6KUVhdGGAv1w==',
endpoint:'https://api.bspapp.com',
});
App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});