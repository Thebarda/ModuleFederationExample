// This can be retrieved from the API
const remotes = [
  {
    url: 'http://localhost:3002/remoteEntry.js',
    scope: 'app3',
    module: './hooks/Hello',
  },
  {
    url: 'http://localhost:3001/remoteEntry.js',
    scope: 'app2',
    module: './Counter',
  },
  {
    url: 'http://localhost:3002/remoteEntry.js',
    scope: 'app3',
    module: './hooks/CounterState',
  }
];

export default remotes;