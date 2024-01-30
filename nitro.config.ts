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
	}
});
