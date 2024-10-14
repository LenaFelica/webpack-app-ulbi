import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
   mode: 'development',
   entry: path.resolve(__dirname, 'src', 'index.ts'),
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html')// создали объект из класса HtmlWebpackPlugin и хотим чтобы html из папки public использовался как шаблон, чтобы в него встраивались скрипты!
      }), 
      new webpack.ProgressPlugin(),
   ],
   module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;