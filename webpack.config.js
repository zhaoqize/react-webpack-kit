var path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
	    loaders: [{
	      test: /\.jsx?$/, 
	      loader: 'babel',
	      query: {
          	presets: ['react', 'es2015']
          }
	    },{
	      test: /\.css$/, 
	      loader: 'style!css' 
	    }
	    ]
  	}
};
