import React from 'react'
import { WebView } from 'react-native-webview'

function Profile( { navigation } ){
    
    return <WebView domStorageEnabled={ true } javaScriptEnabled={ true } renderError={ (e) => {
      if (e === 'WebKitErrorDomain') {
        return
      }
    }} style = {{flex: 1}} source = {{ uri: 'https://google.com', }} />
}

export default Profile