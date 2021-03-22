const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('base', resolve('@$/base'))
            .set('views',resolve('@$/views'))
            .set('common', resolve('@$/common'))
            .set('components', resolve('@$/components'))
            .set('assets', resolve('@$/assets'))
    }
}