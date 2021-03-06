import rc from 'rc';

// Load RC configuration if present. Pass `[]` as last argument to avoid
// getting variables from `argv`.
const config = rc(
  'jscrambler',
  {
    keys: {},
    host: 'api4.jscrambler.com',
    jscramblerVersion: 'stable',
    werror: true,
    clientId: 0
  },
  []
);

export default config;
