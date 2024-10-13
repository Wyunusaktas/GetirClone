import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
const { height, width } = Dimensions.get('window')
const TypeBox = ({ item, active, setCat }: { item: string, active: string, setCat: any }) => {
    return (
        <TouchableOpacity onPress={() => setCat(item)} style={[{ paddingHorizontal: 10, marginRight: 12, flexDirection: 'row', alignItems: 'center', borderRadius: 8, height: height * 0.045 }, item == active ? { backgroundColor: '#7849F7' } : { borderColor: '#f0eef7', borderWidth: 1.3 }]}>
            <Text style={[{ fontSize: 15, color: '#7849F7', fontWeight: '600' }, item == active ? { color: 'white' } : {}]}>{item}</Text>
        </TouchableOpacity>
    )
}
const index = () => {
    const [category, setCategory] = useState<string>('Birlikte İyi Gider')
    return (
        <ScrollView style={{ width: '100%', height: height * 0.072, flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'white', borderBottomColor: 'lightgray', borderBottomWidth: 0.3 }} showsHorizontalScrollIndicator={false} bounces={false} horizontal={true}>
            {['Birlikte İyi Gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map((item) => (
                <TypeBox setCat={setCategory} item={item} active={category} />
            ))}

        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})