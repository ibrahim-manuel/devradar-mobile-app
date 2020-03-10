import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api'
import styles from './styles/mainScreen'

function Main( { navigation } ){

    const [getCurrentRegion, setCurrentRegion] = useState(null)
    const [getDevs, setDevs] = useState([])
    const [techs, setTechs] = useState('')
    useEffect( () => {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync()

            if (granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                })
                const { latitude, longitude } = coords
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.0099,
                    longitudeDelta: 0.0099, 
                })
            }
        }

        loadInitialPosition()
    })

    async function loadDevs(){
        const { latitude, longitude } = getCurrentRegion
        const response =  await api.get('/search', {
            params: {
                latitude,
                longitude,
                techs
            }
        })
        setDevs(response.data)
    }

    function handleRegionChanged(region){
        setCurrentRegion(region)
    }
    
    if (!getCurrentRegion){
        return null
    }

    return (
        <>
            <MapView onRegionChangeComplete={handleRegionChanged} initialRegion={ getCurrentRegion } style= {styles.map}>
                { getDevs.map( dev => (      
                <Marker key={dev._id} coordinate= {{ latitude: dev.location.coordinates[1], longitude: dev.location.coordinates[0] }} >
                    <Image style={styles.avatar} source={{ uri: dev.avatar_url }}/>
                    <Callout onPress={() => {
                        navigation.navigate('Profile', { github_username: dev.github_username })
                    }}>
                        <View style={styles.callout} >
                            <Text style={styles.devName}>{dev.name}</Text>
                            <Text style={styles.devBio}>{dev.bio}</Text>
                            <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
                        </View>
                    </Callout>
                </Marker>)) 

                }
            </MapView> 
           
            <View style = {styles.searchFrom}>
                <TextInput
                    style = {styles.searchInput}
                    placeholder = "Buscar devs por techs"
                    placeholderTextColor = "#999"
                    autoCapitalize = "words"
                    autoCorrect= {false}
                    value={techs}
                    onChangeText={ techs => setTechs(techs)}
                />

                <TouchableOpacity style = {styles.loadBotton} onPress= { loadDevs }>
                    <MaterialIcons name = 'my-location' size = {20} color = '#fff' />
                </TouchableOpacity>
            </View>
        </>
            
            )
}



export default Main