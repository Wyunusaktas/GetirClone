import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Entypo from '@expo/vector-icons/Entypo';
import { Product } from '../../models';

const { width, height } = Dimensions.get('window')
const index = ({ item }: { item: Product }) => {
    return (
        <TouchableOpacity style={{ width: width * 0.30, marginTop: 12, height: height * 0.25, marginLeft: 10, marginBottom: 10, }}>
            <Image style={{ width: width * 0.28, height: height * 0.15, borderWidth: 0.2, borderRadius: 12, borderColor: 'gray' }} source={{ uri: item.image }} />
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 11, color: '#747990', textDecorationLine: 'line-through' }}>
                    <Text>{'\u20BA'}</Text> {item.fiyat}
                </Text>
                <Text style={{
                    color: '#5d3ebd',
                    fontWeight: 'bold', fontSize: 12,
                    marginLeft: 4
                }}>
                    <Text>{'\u20BA'}</Text> {item.fiyatIndirimli}
                </Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>{item.name}</Text>
            <Text style={{ color: '#747990', fontSize: 12, marginTop: 5, fontWeight: '500' }}>{item.miktar}</Text>
            <View style={{ width: 30, height: 30, borderWidth: 0.3, borderColor: 'lightgray', position: 'absolute', right: -6, top: -5, shadowRadius: 3.6, shadowOpacity: 0.7, borderRadius: 6, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                <Entypo name='plus' size={22} color='#5d3ebd' />
            </View>
        </TouchableOpacity>
    )
}

export default index

const styles = StyleSheet.create({})