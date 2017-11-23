const path = require('path')
const webpack = require('webpack')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const vueLoaderConfig = require('./vue-loader.conf')

const webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/jui.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'jui.js',
    library: 'jui',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '..', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, '..', 'src')]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[hash:7].[ext]'
        }
      },
      {
        test: /\.less$/,
        loader: 'less-loader'
      }
    ]
  },
  plugins: [

  ]
}

const spinner = ora('building...')
spinner.start()

rm(path.resolve(__dirname, '../lib'), err => {
  if (err) throw err
    
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
