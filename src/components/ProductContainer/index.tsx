import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Productİtem from '../Productİtem'
import productsGetir from '../../../assets/productsGetir'

const index = () => {
    return (
        // main view
        <View >

            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
                {productsGetir.slice(0, 2).map((item) => (
                    <Productİtem key={item.id} item={item} />
                ))}
            </View>
            <Text style={{ color: 'gray', fontWeight: 'bold', padding: 14 }}>Çubuk</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, backgroundColor: 'white', alignItems: 'center', marginVertical: 10 }}>
                {productsGetir.slice(2).map((item) => (
                    <Productİtem key={item.id} item={item} />
                ))}
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})