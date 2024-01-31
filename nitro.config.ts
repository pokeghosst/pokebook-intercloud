export default defineNitroConfig({
	runtimeConfig: {
		redis: {
			host: '',
			port: 0,
			password: ''
		},
		google: {
			clientId: '',
			clientSecret: ''
		},
		dropbox: {
			appKey: '',
			appSecret: ''
		},
		pokebookFolderName: '',
		serverUrl: '',
		clientUrl: ''
	},
	routeRules: {
		'/**': {
			cors: true,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
			}
		}
	}
});
