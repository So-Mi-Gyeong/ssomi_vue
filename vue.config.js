const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  
  // 프로덕션 환경 및 개발 환경에 따른 publicPath 설정
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // 프로덕션 환경에서 기본 경로를 루트로 설정
    : '/', // 개발 환경에서는 기본 경로를 루트로 설정 (필요시 수정)

  // 웹팩 설정 커스터마이징
  chainWebpack: config => {
    // 이미지 파일을 처리할 rule 설정
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/) // 이미지 파일의 확장자를 처리
      .use('file-loader') // file-loader 사용
      .loader('file-loader')
      .options({
        name: 'assets/img/[name].[hash:8].[ext]', // 이미지가 dist 폴더에 복사될 때의 경로 및 파일명
        esModule: false // CommonJS 방식으로 파일을 처리
      });
  }
});
