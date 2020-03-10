const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: "#fff"
    },
    callout:{
        width: 260,
    },
    devBio:{
        color: '#666',
        marginTop: 5,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devTechs: {
        marginTop: 5
    },

    searchFrom: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
        display: 'flex',
    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 3 // sombra e elevação para android
    },
    loadBotton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,

    }

})

export default styles