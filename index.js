#!/usr/bin/env node
var shell = require('shelljs')
var chalk = require('chalk')
var npmAddScript = require('npm-add-script')


console.log(chalk.cyan('--------------------------------------------'))
console.log(chalk.blue('Setting up sass for create-react-app!'))
console.log(chalk.cyan('--------------------------------------------'))

shell.exec('npm install --save node-sass-chokidar')
console.log(chalk.red('1/')+chalk.red('5')+chalk.cyan(' : node-sass-chokidar Installed'))

shell.exec('npm install --save npm-run-all')
console.log(chalk.red('2/')+chalk.red('5')+chalk.cyan(' : npm-run-all Installed'))

shell.exec('npm install --save npm-add-script')
console.log(chalk.red('3/')+chalk.red('5')+chalk.cyan(' : npm-add-script Installed'))

// Scripts
console.log(chalk.cyan('|-- Creating Scripts --|'));
npmAddScript({key: "build-css" , value: "node-sass-chokidar src/ -o src/" , force: true})
console.log(chalk.cyan('1/5/')+chalk.red('4/')+chalk.red('5')+chalk.cyan(' : Build CSS'))

npmAddScript({key: "watch-css" , value: "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive" , force: true})
console.log(chalk.cyan('2/5/')+chalk.red('4/')+chalk.red('5')+chalk.cyan(' : Watch CSS'))

npmAddScript({key: "start-js" , value: "react-scripts start" , force: true})
console.log(chalk.cyan('3/5/')+chalk.red('4/')+chalk.red('5')+chalk.cyan(' : Start JS'))

npmAddScript({key: "start" , value: "npm-run-all -p watch-css start-js" , force: true})
console.log(chalk.cyan('4/5/')+chalk.red('4/')+chalk.red('5')+chalk.cyan(' : Start'))

npmAddScript({key: "build" , value: "npm run build-css && react-scripts build" , force: true})
console.log(chalk.cyan('5/5/')+chalk.red('4/')+chalk.red('5')+chalk.cyan(' : Build'))

console.log(chalk.cyan('|-- Check Installs --|'));
shell.exec('npm install');

console.log(chalk.cyan('--------------------------------------------'))
console.log(chalk.blue('All done, you should now have SASS tied to your build and watch scripts!'))
console.log(chalk.blue('Give it a whirl with `yarn start` add a `.scss` file and save it is should compile a css file alongside.'))
console.log(chalk.cyan('--------------------------------------------'))
