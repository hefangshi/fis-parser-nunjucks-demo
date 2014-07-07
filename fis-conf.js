//插件与配置
fis.config.merge({
    modules : {
        parser : {
            //.tmpl后缀的文件使用fis-parser-nunjucks插件编译
            tmpl : 'nunjucks'
        },
        postpackager : 'autoload'
    },
    settings : {
        parser: {
            //设置自定义语法示例
            // nunjucks : {
            //     env : {
            //         tags : {
            //             blockStart: '{%',
            //             blockEnd: '%}'
            //         }
            //     }
            // }
        }
    }
});

//目录规范

fis.config.merge({
    roadmap : {
        ext : {
            tmpl : "js"
        },
        path : [
            {
                //前端模板
                reg: '**.tmpl',
                //当做类js文件处理，可以识别__inline, __uri等资源定位标识
                isJsLike: true,
                release: "$&.js"
            }
        ]
    }
});