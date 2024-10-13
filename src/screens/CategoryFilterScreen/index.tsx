import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CategoryFiltering from '../../components/CategoryFiltering'
import { Category } from '../../models'
import TypeFiltering from '../../components/TypeFiltering'
import ProductContainer from '../../components/ProductContainer'


const index = (props: any) => {
    const [category, setCayegory] = useState<Category>(props.route.params.category)
    return (
        <ScrollView>
            <CategoryFiltering category={category} />
            <TypeFiltering />
            <ProductContainer />

        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})