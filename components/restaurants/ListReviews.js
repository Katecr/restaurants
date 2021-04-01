import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import firebase from 'firebase/app'

export default function ListReviews({ navigation, idRestaurant }) {

    const [userLogged, setUserLogged] = useState(false)
    

    firebase.auth().onAuthStateChanged((user) => {
        user ? setUserLogged(true) : setUserLogged(false)
    })

    return (
        <View>
            {
                userLogged ? (
                    <Button
                        buttonStyle={styles.btnAddReview}
                        title="Escribe una opinión"
                        titleStyle={styles.btnTitleAddReview}
                        onPress={() => navigation.navigate("add-review-restaurant", { idRestaurant })}
                        icon={{
                            type: "material-community",
                            name: "square-edit-outline",
                            color: "#ff9600"
                        }}
                    />
                ) : (
                    <Text 
                        style={styles.mustLoginText}
                        onPress={() => navigation.navigate("Login")}
                    >
                        Para escribir una opinión es necesario estar logueado.{" "}
                        <Text style={styles.loginText}>
                            Pulsa AQUÍ para iniciar sesión.
                        </Text>
                    </Text>
                )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    btnAddReview:{
        backgroundColor:"transparent"
    },
    btnTitleAddReview:{
        color:"#443424"
    },
    mustLoginText:{
        textAlign:"center",
        color:"#443424",
        padding: 20,
    },
    loginText:{
        fontWeight:"bold"
    }
})
