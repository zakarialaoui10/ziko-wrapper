
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const banner= `
/*
  Project: react-ziko
  Author: Zakaria Elalaoui
  Date : ${new Date()}
  Git-Repo : https://github.com/zakarialaoui10/react-ziko.js
  Released under MIT License
*/
`
export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/react-ziko.jsx',
    globals: {
      react: 'React',
      ziko : 'Ziko'
    },
    banner
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
    }),
  ],
  external: ['react','ziko'],
};

