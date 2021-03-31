import React, { useState, useEffect } from 'react'
import { Alert, Dimensions, StyleSheet, Text, ScrollView } from 'react-native'
import CarouselImages from '../../components/CarouselImages'


import { getDocumentById } from '../../utils/actions'
import Loading from '../../components/Loading'



const widthScreen = Dimensions.get("window").width

export default function Restaurant({ navigation, route }) {
    const { id, name } = route.params
    const [restaurant, setRestaurant] = useState(null)

    navigation.setOptions({title: name})

    useEffect(() => {
        (async() => {
            const response = await getDocumentById("restaurants", id)
            if(response.statusResponse){
                setRestaurant(response.document)
            }else{
                setRestaurant({})
                Alert.alert("Ocurrio un problema cargando el restaurante, intente más tarde.")
            }
        })()
    }, [])

    if(!restaurant){
        return <Loading isVisible={true} text={"Cargando..."}/>
    }
    return (
        <ScrollView style={styles.viewBody}>
            <CarouselImages
                images={restaurant.images}
                height={250}
                width={widthScreen}
            />
            <Text>{restaurant.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        flex:1,
    }
})
