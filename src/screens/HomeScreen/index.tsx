import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import HeaderMain from '../../components/HeaderMain'
import BannerCrousel from '../../components/BannerCrousel'
import MainCategories from '../../components/MainCategories'

const index = () => {
    return (
        <ScrollView stickyHeaderIndices={[0]} style={{ backgroundColor: '#f5f5f5' }}>
            <HeaderMain />
            <BannerCrousel />
            <MainCategories />
        </ScrollView>
    )
}

export default index

