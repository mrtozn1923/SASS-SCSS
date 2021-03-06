const {merge}=require('webpack-merge');
const common=require('./webpack.common');
const path=require("path");

module.exports=merge(common,{
    mode:'development',
    target:'web',
    devtool:"source-map",
    devServer:{
        contentBase:'src',
        hot:true,
        watchContentBase: true,
        port:9001
    }
});