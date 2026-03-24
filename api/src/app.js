const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors');

require('./db.js');

const server = express();

server.name = 'API';

// ✅ CORS correcto
const whiteList = [
	'http://localhost:3000',
	'http://localhost:3001',
	'https://pokemon-go.up.railway.app',
	'https://pokemon-edinsondevs.vercel.app',
	'https://app-poke.vercel.app',
];

server.use(
	cors({
		origin: function (origin, callback) {
			if (!origin || whiteList.includes(origin)) {
				return callback(null, true);
			}
			return callback(new Error('Not allowed by CORS'));
		},
		credentials: true,
	}),
);

// ✅ Body parsing nativo (más seguro)
server.use(express.json({ limit: '10mb' }));
server.use(express.urlencoded({ extended: true, limit: '10mb' }));

server.use(cookieParser());
server.use(morgan('dev'));

// ✅ Rutas
server.use('/api', routes);
server.use('/', routes);

// ✅ Error handler
server.use((err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500).json({
		error: err.message || 'Internal server error',
	});
});

module.exports = server;
