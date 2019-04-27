import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

import Title from '../../components/Title';
import BuyerNavigator from '../../components/BuyerNavigator';
import HorizontalFoodList from '../../components/HorizontalFoodList';
import VerticalFoodList from '../../components/VerticalFoodList';

class HomeScreen extends React.Component {
    state = {
        data: [
            {
                id: 1,
                title: 'Warung Sri',
                address: 'Jl. Sigura-gura barat No.5',
                img: 'https://apollo-singapore.akamaized.net/v1/files/x8x2zlpckici1-ID/image;s=966x691;olx-st/_2_.jpg',
                menu: [
                    {
                        id: 1,
                        img: 'https://apollo-singapore.akamaized.net/v1/files/x8x2zlpckici1-ID/image;s=966x691;olx-st/_2_.jpg',
                        name: 'Bakpia',
                        price: 10000,
                        minOrder: 12
                    },
                    {
                        id: 2,
                        img: 'https://craftlog.com/m/i/5214819=s1280=h960',
                        name: 'Risoles',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 3,
                        img: 'https://img-global.cpcdn.com/003_recipes/30f824d8f1ee84f6/640x640sq70/photo.jpg',
                        name: 'Tahu Bakso',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 4,
                        img: 'https://cdn1-production-images-kly.akamaized.net/isEybfb9ydrDp1A4_zw1VvvkiNg=/53x0:419x366/640x640/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2227924/original/065369300_1527241932-tips-agar-tahu-bulat-renyah-dan-kopong-saat-digoreng.jpg',
                        name: 'Tahu Bulat',
                        price: 2000,
                        minOrder: 12
                    }
                ]
            },
            {
                id: 2,
                title: 'Warung Sari',
                address: 'Jl. Kaliurang No.6',
                img: 'data:image/jpeg;base64,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',
                menu: [
                    {
                        id: 1,
                        img: 'https://apollo-singapore.akamaized.net/v1/files/x8x2zlpckici1-ID/image;s=966x691;olx-st/_2_.jpg',
                        name: 'Bakpia',
                        price: 10000,
                        minOrder: 12
                    },
                    {
                        id: 2,
                        img: 'https://craftlog.com/m/i/5214819=s1280=h960',
                        name: 'Risoles',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 3,
                        img: 'https://img-global.cpcdn.com/003_recipes/30f824d8f1ee84f6/640x640sq70/photo.jpg',
                        name: 'Tahu Bakso',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 4,
                        img: 'https://cdn1-production-images-kly.akamaized.net/isEybfb9ydrDp1A4_zw1VvvkiNg=/53x0:419x366/640x640/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2227924/original/065369300_1527241932-tips-agar-tahu-bulat-renyah-dan-kopong-saat-digoreng.jpg',
                        name: 'Tahu Bulat',
                        price: 2000,
                        minOrder: 12
                    }
                ]
            },
            {
                id: 3,
                title: 'Warung Inem',
                address: 'Jl. Puncak Esberg No.7',
                img: 'https://craftlog.com/m/i/5214819=s1280=h960',
                menu: [
                    {
                        id: 1,
                        img: 'https://apollo-singapore.akamaized.net/v1/files/x8x2zlpckici1-ID/image;s=966x691;olx-st/_2_.jpg',
                        name: 'Bakpia',
                        price: 10000,
                        minOrder: 12
                    },
                    {
                        id: 2,
                        img: 'https://craftlog.com/m/i/5214819=s1280=h960',
                        name: 'Risoles',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 3,
                        img: 'https://img-global.cpcdn.com/003_recipes/30f824d8f1ee84f6/640x640sq70/photo.jpg',
                        name: 'Tahu Bakso',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 4,
                        img: 'https://cdn1-production-images-kly.akamaized.net/isEybfb9ydrDp1A4_zw1VvvkiNg=/53x0:419x366/640x640/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2227924/original/065369300_1527241932-tips-agar-tahu-bulat-renyah-dan-kopong-saat-digoreng.jpg',
                        name: 'Tahu Bulat',
                        price: 2000,
                        minOrder: 12
                    }
                ]
            },
            {
                id: 4,
                title: 'Warung Ica',
                address: 'Jl. Melati No.8',
                img: 'https://cdn.idntimes.com/content-images/post/20181003/ed69e7356cb2c2f6ea450c68fba692b8.jpg',
                menu: [
                    {
                        id: 1,
                        img: 'https://apollo-singapore.akamaized.net/v1/files/x8x2zlpckici1-ID/image;s=966x691;olx-st/_2_.jpg',
                        name: 'Bakpia',
                        price: 10000,
                        minOrder: 12
                    },
                    {
                        id: 2,
                        img: 'https://craftlog.com/m/i/5214819=s1280=h960',
                        name: 'Risoles',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 3,
                        img: 'https://img-global.cpcdn.com/003_recipes/30f824d8f1ee84f6/640x640sq70/photo.jpg',
                        name: 'Tahu Bakso',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 4,
                        img: 'https://cdn1-production-images-kly.akamaized.net/isEybfb9ydrDp1A4_zw1VvvkiNg=/53x0:419x366/640x640/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2227924/original/065369300_1527241932-tips-agar-tahu-bulat-renyah-dan-kopong-saat-digoreng.jpg',
                        name: 'Tahu Bulat',
                        price: 2000,
                        minOrder: 12
                    }
                ]
            },
            {
                id: 5,
                title: 'Warung Ica',
                address: 'Jl. Mawar No.9',
                open: '08.00',
                close: '21.00',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU5IQ9_myhKCEfiA_J50zwB1l2FgksQ_qjSvZ-eWqvAfC-ABDh',
                menu: [
                    {
                        id: 1,
                        img: 'https://apollo-singapore.akamaized.net/v1/files/x8x2zlpckici1-ID/image;s=966x691;olx-st/_2_.jpg',
                        name: 'Bakpia',
                        price: 10000,
                        minOrder: 12
                    },
                    {
                        id: 2,
                        img: 'https://craftlog.com/m/i/5214819=s1280=h960',
                        name: 'Risoles',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 3,
                        img: 'https://img-global.cpcdn.com/003_recipes/30f824d8f1ee84f6/640x640sq70/photo.jpg',
                        name: 'Tahu Bakso',
                        price: 2000,
                        minOrder: 12
                    },
                    {
                        id: 4,
                        img: 'https://cdn1-production-images-kly.akamaized.net/isEybfb9ydrDp1A4_zw1VvvkiNg=/53x0:419x366/640x640/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2227924/original/065369300_1527241932-tips-agar-tahu-bulat-renyah-dan-kopong-saat-digoreng.jpg',
                        name: 'Tahu Bulat',
                        price: 2000,
                        minOrder: 12
                    }
                ]
            },
        ]
    };

    render() {
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ height: '100%' }}>
                    <Title text='GroFood' navigation={this.props.navi} />
                    <View style={{ marginHorizontal: 16, justifyContent: 'center', marginBottom: 4 }}>
                        <Image
                            source={require('../../assets/poster.png')}
                            style={{ width: '100%', maxWidth: 400 }} />
                    </View>
                    <HorizontalFoodList title='Nearby' data={this.state.data} navigation={this.props.navigation} />
                    <HorizontalFoodList title='Popular' data={this.state.data} navigation={this.props.navigation} />
                    <VerticalFoodList title='Recomended' data={this.state.data} navigation={this.props.navigation} />
                </ScrollView>
                <BuyerNavigator active='home' navigation={this.props.navigation} />
            </View>
        );
    }
}

export default connect(
    null,
    {}
)(HomeScreen);
