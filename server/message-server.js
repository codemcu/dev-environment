import chalk from 'chalk';

export const onRunning = () => {
  chalk.green('running in dev mode');
  return 'running in dev mode';
};

onRunning();
