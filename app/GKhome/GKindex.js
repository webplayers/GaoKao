/**
 * Created by kai on 17-6-6.
 */
/**
 * Created by kai on 17-5-10.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Picker,
    TextInput,
    Button,
    ListView,
    TouchableOpacity,
} from 'react-native';
/*
 import ViewPager from 'react-native-viewpager';
 import Icon from 'react-native-vector-icons/Ionicons';
 import IconFont from 'react-native-vector-icons/FontAwesome';*/
var {height, width} = Dimensions.get('window');
var url_api = "http://data.api.gkcx.eol.cn/soudaxue/v2queryschoolgufen.html?messtype=json&prompt=1&province=";
var urls_api = "&type=";
var urla_api = "&size=1000&score=";
var images = "http://gkcx.eol.cn/upload/schoollogo/";
import {StackNavigator} from 'react-navigation';
var DXdetail = require('./DXdetail');

//http://data.api.gkcx.eol.cn/soudaxue/queryschool.html?messtype=json&keyWord1=
var HomeScreen = React.createClass({
    getInitialState(){
        return {
            shengfen: "北京",
            kelei: "理科",
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    },
    render() {
        return (
            <View style={{backgroundColor:'#FFFFFF'}}>
                <View style={styles.titletop}>
                    <Text style={{fontSize: 20, color: '#FFFFFF'}}>高考管家</Text>
                </View>
                <View style={styles.titlepicker}>
                    <Picker
                        style={{width: 100,backgroundColor:'#FFFFFF'}}
                        //Picker样式 dialog弹窗样式默认  dropdown显示在下边
                        mode={'dialog'}
                        //显示选择内容
                        selectedValue={this.state.shengfen}
                        //选择内容时调用此方法
                        onValueChange={(value) => this.setState({shengfen: value})}
                        //设置Title 当设置为dialog时有用
                        prompt={'请选择省份'}
                    >
                        <Picker.Item label="北京" value="北京"/>
                        <Picker.Item label="天津" value="天津"/>
                        <Picker.Item label="河北" value="河北"/>
                        <Picker.Item label="河南" value="河南"/>
                        <Picker.Item label="山东" value="山东"/>
                        <Picker.Item label="山西" value="山西"/>
                        <Picker.Item label="内蒙古" value="内蒙古"/>
                        <Picker.Item label="陕西" value="陕西"/>
                        <Picker.Item label="辽宁" value="辽宁"/>
                        <Picker.Item label="吉林" value="吉林"/>
                        <Picker.Item label="黑龙江" value="黑龙江"/>
                        <Picker.Item label="上海" value="上海"/>
                        <Picker.Item label="江苏" value="江苏"/>
                        <Picker.Item label="浙江" value="浙江"/>
                        <Picker.Item label="安徽" value="安徽"/>
                        <Picker.Item label="江西" value="江西"/>
                        <Picker.Item label="湖北" value="湖北"/>
                        <Picker.Item label="湖南" value="湖南"/>
                        <Picker.Item label="重庆" value="重庆"/>
                        <Picker.Item label="四川" value="四川"/>
                        <Picker.Item label="贵州" value="贵州"/>
                        <Picker.Item label="云南" value="云南"/>
                        <Picker.Item label="广东" value="广东"/>
                        <Picker.Item label="广西" value="广西"/>
                        <Picker.Item label="福建" value="福建"/>
                        <Picker.Item label="甘肃" value="甘肃"/>
                        <Picker.Item label="青海" value="青海"/>
                        <Picker.Item label="宁夏" value="宁夏"/>
                        <Picker.Item label="新疆" value="新疆"/>
                        <Picker.Item label="西藏" value="西藏"/>
                        <Picker.Item label="海南" value="海南"/>
                    </Picker>
                    <Picker
                        style={{width: 100,backgroundColor:'#FFFFFF'}}
                        //Picker样式 dialog弹窗样式默认  dropdown显示在下边
                        mode={'dropdown'}
                        //显示选择内容
                        selectedValue={this.state.kelei}
                        //选择内容时调用此方法
                        onValueChange={(value) => this.setState({kelei: value})}
                        //设置Title 当设置为dialog时有用
                        prompt={'请选择'}
                    >
                        <Picker.Item label="文科" value='文科'/>
                        <Picker.Item label='理科' value='理科'/>
                    </Picker>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder="分数"
                        style={{width: 100}}
                        onEndEditing={this.onSearchChange}
                    />
                </View>
                <View style={styles.daohang}>
                    <Text style={{paddingLeft: 63}}>学校名称</Text>
                    <Text style={{paddingRight: 30}}>批次</Text>
                    <Text style={{paddingRight: 10}}>录取概率</Text>
                </View>
                <ListView
                    ref="listview"
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },
    renderRow(rowData){
        const {navigate} = this.props.navigation;
        var url = rowData.schoolname;
        var max = rowData.max;
        var min = rowData.min;
        var year = rowData.year;
        var imageurl = images + rowData.schoolid + ".jpg";
        return (
            <View>
                <TouchableOpacity activeOpacity={0.5} onPress={(rowData) => navigate('Chat', {url, max, min, year})}>
                    <View style={styles.TitleStyles}>
                        <View style={styles.textstyles}>
                            <Image source={{uri: imageurl}} style={{width: 50, height: 50}}/>
                            <View style={{paddingLeft: 10, width: 100}}>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}}>{rowData.schoolname}</Text>
                                <Text style={{fontSize: 14, paddingTop: 20}}>录取几率：{rowData.percentage}</Text>
                            </View>
                            <Text style={{paddingLeft: 20}}>{rowData.batch}</Text>
                            <View style={{paddingLeft: 20, paddingTop: 15}}>
                                <Text style={{fontSize: 10}}>最高分 平均分</Text>
                                <Text style={{fontSize: 10, color: '#60CEF7'}}>{rowData.max} {rowData.var}</Text>
                            </View>
                            <Text
                                style={{color: '#7AEBA7', paddingTop: 25, paddingLeft: 10}}>{rowData.recommended}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    },
    onSearchChange(event){
        var srarchchTerm = this.state.shengfen; //toLowerCase() 方法用于把字符串转换为小写
        var keleirearch = this.state.kelei;
        var fenshusearch = event.nativeEvent.text.toLowerCase();
        var queryURL = url_api + srarchchTerm + urls_api + keleirearch + urla_api + fenshusearch;
        fetch(queryURL)
            .then((response) => response.json())
            .then((responseData) => {
                var jsonData = responseData.school;
                var listDataArr = [];
                for (var i = 0; i < jsonData.length; i++) {
                    var data = jsonData[i];
                    listDataArr.push(data)
                }
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(listDataArr)
                });
            });
    },
});
const DSfind = StackNavigator({
        Home: {screen: HomeScreen},
        Chat: {screen: DXdetail},
    },
    {
        initialRouteName: 'Home', // 默认显示界面
        headerMode: 'none',
    });

const styles = StyleSheet.create({
    titletop: {
        height: 40,
        width: width,
        backgroundColor: '#2B90ED',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
    },
    titlepicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: '#FFFFFF',
        padding: 5
    },
    daohang: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 20,
    },
    textstyles: {
        flexDirection: 'row',
    },
    TitleStyles: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 0.5,
        backgroundColor: '#FFFFFF'
    },
});
module.exports = DSfind;