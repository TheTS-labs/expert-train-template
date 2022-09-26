module.exports = {
    presets: [
      [ '@babel/preset-env', { modules: false } ],
      '@babel/preset-typescript',
      '@babel/preset-react'
    ],
    plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-transform-runtime'
    ]
  };