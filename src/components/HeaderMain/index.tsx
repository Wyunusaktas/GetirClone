import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons'

const index = () => {
    return (
        <View style={styles.Contaier}>
            <View style={styles.ConteinerOne}>
                <Image style={styles.image} source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} />
                <View style={styles.headerArrow}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Ev</Text>
                    <Text style={{ fontWeight: '500', fontSize: 12, color: '#6e7480', marginLeft: 6, marginRight: 6 }}> Muttalip Mahallesi ..Eskişehir/Tepebaşı</Text>
                    <Entypo name="chevron-right" size={24} color="purple" />
                </View>
                <View style={styles.ContainerTwo}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#5D3EBD' }}>TVS</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5D3EBD' }}>13<Text style={{ fontSize: 16, fontWeight: 'bold' }}>dk</Text></Text>

                </View>
            </View>

        </View >
    )
}

export default index

