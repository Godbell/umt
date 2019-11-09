// DelieverInfor.js
// '검색' 탭에서 자세한 정보를 볼 때 나오는 탭

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ListDetail extends Component 
{
    static navigationOptions = {
        title: '자세한 정보',
    };

    // 자세한 내용을 보려고 할 때 탭에 표시되는 내용
    render() {
        return (
            <View style={styles.container}>
                <Text>ListDetail</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});