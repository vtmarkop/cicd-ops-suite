const express = require('express');
const client = require('prom-client');
const app = express();
const port = 3000;

// Create a Registry to hold metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Custom Metric: Counter for HTTP requests
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});
register.registerMetric(httpRequestCounter);

app.get('/', (req, res) => {
  // Increment metric
  httpRequestCounter.inc({ method: 'GET', route: '/', status: 200 });
  res.send('Hello! I am an observable app. Check /metrics');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
