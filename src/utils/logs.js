import chalk from 'chalk'
const log = console.log

const redLog = (text) => {
  log(chalk.bgRed.bold(text))
}

const blueLog = (text) => {
  log(chalk.bgBlue.bold(text))
}

export { redLog, blueLog }
