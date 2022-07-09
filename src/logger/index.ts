// A logger is an object in the client application that submits log messages to the backend. Every logger is identified by a unique name.
// The pino-pretty module can be used to format logs during development:

import pino from 'pino';

import dayjs from 'dayjs';

const transport = pino.transport({
    target: 'pino-pretty',
    options: { colorize: true }
})

const log = pino({
    base: { pid: false },
    timestamp: () => `,"time":"${dayjs().format()}"`,
}, transport)

export default log;
