import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { Category } from '../../models'
const { width, height } = Dimensions.get('window')

const index = ({ item }: { item: Category }) => {
    return (
        <TouchableOpacity style={{ width: width * 0.25, height: height * 0.11, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, }}>
            <Image style={{ width: width * 0.18, height: width * 0.18, borderRadius: 10 }} source={{ uri: item.src }} />
            <Text style={{ fontSize: 12, color: '#616161', fontWeight: '500' }}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default index

const styles = StyleSheet.create({})