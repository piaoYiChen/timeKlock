

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'index.js',
        path:__dirname+'/dist'
    },
    module:{
        rules:[
            {test:/.js$/,use:['babel-loader']},
            {test:/.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    }
}