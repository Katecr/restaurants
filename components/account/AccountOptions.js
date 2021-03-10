import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { map } from 'lodash';

import Modal from '../Modal';
import ChangeDisplayNameForm from './ChangeDisplayNameForm';

export default function AccountOptions({user, toastRef, setRelodUser}) {
    
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)

    const generateOptions = () => {
        return [
            {
                title: "Cambiar Nombres y Apellidos",
                iconNameLeft: "account-circle",
                iconColorLeft: "#fb9104",
                iconNameRight: "chevron-right",
                iconColorRight: "#fb9104",
                onPress: () => selectedComponent("displayName")
            },
            {
                title: "Cambiar Email",
                iconNameLeft: "at",
                iconColorLeft: "#fb9104",
                iconNameRight: "chevron-right",
                iconColorRight: "#fb9104",
                onPress: () => selectedComponent("email")
            },
            {
                title: "Cambiar Contraseña",
                iconNameLeft: "lock-reset",
                iconColorLeft: "#fb9104",
                iconNameRight: "chevron-right",
                iconColorRight: "#fb9104",
                onPress: () => selectedComponent("password")
            }
        ]
    }

    const selectedComponent = (key) => {
        switch (key) {
            case "displayName":
                setRenderComponent(
                    <ChangeDisplayNameForm 
                        displayName={user.displayName}
                        setShowModal={setShowModal}
                        toastRef={toastRef}
                        setRelodUser={setRelodUser}
                    />
                )
            break;
            case "email":
                setRenderComponent(
                    <Text>Email</Text>
                )
            break;
            case "password":
                setRenderComponent(
                    <Text>password</Text>
                )
            break;
        
            default:
                break;
        }
        setShowModal(true)
    }
    const menuOptions = generateOptions();
    return (
        <View>
           {
              map(menuOptions, (menu, index) => (
                    <ListItem
                        key={index}
                        style={styles.menuItem}
                        onPress={menu.onPress}
                    >
                    <Icon
                        type="material-community"   
                        name={menu.iconNameLeft}
                        color={menu.iconColorLeft}                   
                    />
                    <ListItem.Content>
                        <ListItem.Title>{menu.title}</ListItem.Title>
                    </ListItem.Content>
                    <Icon
                        type="material-community"   
                        name={menu.iconNameRight}
                        color={menu.iconColorRight}                   
                    />
                  </ListItem>
              )) 
           }
           <Modal isVisible={showModal} setVisible={setShowModal}>
               {
                   renderComponent
               }
           </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    menuItem:{
        borderBottomWidth:1,
        borderBottomColor:"#fbd605"
    }
})
