import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import categoriesGetir from '../../../assets/categoriesGetir';
import CategoryItem from '../CategoryItem';

const index = () => {
    const [categories, setCategories] = useState(categoriesGetir);
    return (
        <View style={{ backgroundColor: "#F5F5F5" }}>
            <View style={styles.listContainer}>
                {categories.map((item) => (
                    <CategoryItem key={item.id} item={item} />
                ))}
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        //backgroundColor: "white",
        width: "100%",
    },
});