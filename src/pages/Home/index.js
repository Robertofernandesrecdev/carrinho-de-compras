// pagina Home 
import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native'
import {CartContext} from '../../contexts/CartContext'

export default function Home() {
    const { cart, addItemCart } = useContext(CartContext)

    const navigation = useNavigation();
    const [products, setProducts] = useState([
        {
            id: '1',
            name: "pastel de frango",
            price: 5.50
        },
        {
            id: '2',
            name: "pastel de frango",
            price: 5.50
        },
        {
            id: '3',
            name: "coxinha franco c/ catupiry",
            price: 4.50
        },
        {
            id: '4',
            name: "coxinha frango c/ chedar",
            price: 4.50
        },
        {
            id: '5',
            name: "coxinha de frango",
            price: 4.50
        },
        {
            id: '6',
            name: "guaraná amazonas",
            price: 5.00
        },
        {
            id: '7',
            name: "Coca lata",
            price: 5.00
        },
        {
            id: '8',
            name: "aguá mineral 500ml",
            price: 2.50
        },

    ])

    function handleAddCart(item) {
        addItemCart(item)
    }


    // SafeAreaView é uma area segura aplicaa para IOS 
    // onPress={() => navigation.navigate("Cart")}>  navegação de pagina
    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de Produtos</Text>

                <TouchableOpacity
                    style={styles.cardButton}
                    onPress={() => navigation.navigate("Cart")}> 
                    
                    {cart.length >= 1 && (
                        <View style={styles.dot}>
                        <Text style={styles.dotText}>
                            {cart?.length} 
                        </Text>
                    </View>
                    )}
                    <Feather name="shopping-cart" size={30} color="#000" />
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Product data={item} addToCart={() => handleAddCart(item)} /> }
            
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFE0',
        paddingEnd: 14,
        paddingStart:14,
    },
    cartContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4
    },
    dotText: {
        fontSize:12
    },
    


})