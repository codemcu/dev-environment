import { onRunning } from './message-server.js';

describe('message-server', () => {
  test('onRunning function ', () => {
    const fn = onRunning();
    const text = 'running in dev mode';

    expect(fn).toBe(text);
  });
});
