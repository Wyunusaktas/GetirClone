import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons'
import HeaderMain from '../../components/HeaderMain'
import BannerCrousel from '../../components/BannerCrousel'

const index = () => {
    return (
        <ScrollView stickyHeaderIndices={[0]} style={{ backgroundColor: '#f5f5f5' }}>
            <HeaderMain />
            <BannerCrousel />
        </ScrollView>
    )
}

export default index

