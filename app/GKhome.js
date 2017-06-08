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
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {TabNavigator} from "react-navigation";
var GKhome=require('./GKhome/GKindex');
var GKquestion=require('./GKquestion/GKquestion');
var GKfind=require('./GKfind/GKfind');
var GKmine=require('./GKmine/GKmine');

const GKhome = TabNavigator({
        home: {
            screen: GKhome,
            navigationOptions: {
                tabBarLabel: '主页',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="ios-home-outline"
                        size={30}   //图片大小
                    />
                ),
            },
        },
        question: {
            screen: GKquestion,
            navigationOptions: {
                tabBarLabel: '问答',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="ios-book-outline"
                        size={30}   //图片大小
                    />
                ),
            },
        },
        find: {
            screen: GKfind,
            navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="ios-eye-outline"
                        size={30}   //图片大小
                    />
                ),
            },
        },
        mine: {
            screen: GKmine,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="ios-contact-outline"
                        size={30}   //图片大小
                    />
                ),
            },
        },
    }, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3e9ce9',
            inactiveTintColor: '#999999',
            showIcon: true,
            style: {
                backgroundColor: '#fff',
                height:57,
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {//tab的样式
                padding: 0
            }
        }
    }
);
module.exports = GKhome;