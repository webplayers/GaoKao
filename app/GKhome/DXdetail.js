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
    ListView,
    Dimensions,
} from 'react-native';
var {height, width} = Dimensions.get('window');
var url = "http://data.api.gkcx.eol.cn/soudaxue/queryschool.html?messtype=json&keyWord1=";
var DXdetail = React.createClass({
    getInitialState(){
        return {
            Sourcedata: "",
        }
    },
    render() {
        const {params} = this.props.navigation.state;
        var Data = this.state.Sourcedata;
        return (
            <View style={styles.contern}>
                <View style={styles.schoolstyle}>
                    <Text style={styles.schooltitlestyle}>{Data.schoolname}</Text>
                </View>
                <View style={styles.jianjiestyle}>
                    <Text style={styles.T1}>所属地区：{Data.province}</Text>
                    <Text style={styles.T1}>2016年最高分:{params.max}最低分:{params.min}</Text>
                    <Text style={styles.T1}>学校类型：{Data.schooltype}-{Data.schoolproperty}-{Data.level}</Text>
                    <Text style={styles.T1}>收费标准：{Data.shoufei}</Text>
                    <Text style={styles.T1}>简介：{Data.jianjie}</Text>
                    <Text style={styles.T1}>官网地址：{Data.guanwang}</Text>
                </View>
            </View>
        );
    },

    componentDidMount() {
        const {params} = this.props.navigation.state;
        var fenshusearch = params.url;
        var queryURL = url + fenshusearch;
        fetch(queryURL)
            .then((response) => response.json())
            .then((responseData) => {
                var jsonData = responseData.school[0];
                this.setState({
                    Sourcedata: jsonData
                })
            });
    }
})

const styles = StyleSheet.create({
    contern: {
        flex: 1,
    },
    schoolstyle: {
        flexDirection: 'row',
        width: width,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#939393',
        borderBottomWidth: 0.5,
    },
    schooltitlestyle: {
        color: '#6624E0',
        fontSize: 20,
    },
    jianjiestyle: {
        height: 200,
    },
    T1:{
        fontSize:20,
        padding: 5,
        borderBottomColor: '#939393',
        borderBottomWidth: 0.5,
    },
});

module.exports = DXdetail;