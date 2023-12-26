// webpack的功能：将所有的资源文件打包到一起，然后在js中引用
const requireAsset = require.context('.', true, /^.+\.(png|webm)$/);
export default requireAsset;