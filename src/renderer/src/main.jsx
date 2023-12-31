import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider domain={'dev-m2hmp2fkbivz6uc5.us.auth0.com'}
	clientId = {'nwDxxJjoJ7kB8gyydqhxwk82co0OX0ih'}
	authorizationParams = {{ redirectUri: 'https://googlecloud.seannotseen.com/#/home'}}>
    <App />
</Auth0Provider>
)
