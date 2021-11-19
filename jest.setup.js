const CONSOLE_LEVELS = ['debug', 'info', 'warn', 'error'];

// Notice that by default the levels will be ["error"]
const allowedConsoleLevels = CONSOLE_LEVELS.slice(
  CONSOLE_LEVELS.indexOf(process.env.CONSOLE_LEVELS)
);

global.console = CONSOLE_LEVELS.reduce((levels, level) => {
  return allowedConsoleLevels.includes(level)
    ? { ...levels, [level]: console[level] } // eslint-disable-line
    : { ...levels, [level]: jest.fn() };
}, {});
