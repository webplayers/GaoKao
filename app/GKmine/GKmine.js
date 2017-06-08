/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
var {height, width} = Dimensions.get('window');
var GKfind = React.createClass({
    render() {
        return (
            <View>
                <View style={styles.titletop}>
                    <Text style={{fontSize: 20,color:'#FFFFFF'}}>我的</Text>
                </View>
                <Text style={styles.welcome}>
                    mine
                </Text>
            </View>
        );
    }
})

const styles = StyleSheet.create({
    titletop: {
        height: 40,
        width: width,
        backgroundColor: '#2B90ED',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:3,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = GKfind;
