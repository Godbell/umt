// SearchTab.js
// 앱 메인 화면에서의 '검색' 탭

import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { createStackNavigator } from 'react-navigation-stack';

// Test용 데이터 함수 : 나중에 지울것
import { getData } from '../tmp/fakedata';
import DeliverInfor from './DeliverInfor';

// SearchTab에서 쓰이는 스택 네비게이터
const SeacrhStack = createStackNavigator({
    Search: {screen: () => <SearchTab />},
    Detail: {screen: () => <DeliverInfor />},
})

export default class SearchTab extends Component 
{
    // Flatlist 관련 state
    state = {
      refreshing: false,
      data: getData(20),
      // TODO: backend 구현 내용에 맞게 받을 데이터 수정
    };

    // 리스트에 끝에 도달하면 호출되는 Method
    // 10개의 데이터를 state.data에 추가한다.
    // TODO : 오랫동안 리스트를 밀었을 때 최적화
    onEndReached = () => {
        this.setState(state => ({
            data: [
              ...state.data,
              ...getData(),
            ]
          }));
    };

    // Pull to Refresh를 시도할 때 호출되는 Method
    // 데이터 20개를 다시 받는다.
    onRefresh = () => {
        this.setState({data: getData(20)});
    };
    
    // 리스트를 클릭할 때 호출되는 Method
    onPress = (item) => {
        this.props.navigation.
    };

    // 리스트의 내용을 출력할 때 호출되는 Method
    onRenderItem = ({ item }) => {
        return (
            <List.Item
                title={item.phonenumber}
                description={item.company}
                onPress={() => this.onPress}
                // TODO : 신용에 따라 맞춤 아이콘으로 적용하기
                left={props => 
                    <List.Icon color={item.color} icon="account" />
                }
            />
        );
    };

    // 아래 네비게이션 바에 관한 옵션
    static navigationOptions = {
        title: "검색",
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name='search' size={24} color={tintColor}/> 
        ),
    }

    // '검색' 탭에 표시되는 내용
    render() {
        return (
            <FlatList 
            data={this.state.data}
            renderItem={this.onRenderItem}
            keyExtractor={(item, key) => item.key}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={1}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            />       
        );
    }
}