import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import { withNavigation } from 'react-navigation';
const screen = Dimensions.get('window');
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.navigate = this.props.navigation.navigate;
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.standardNode} underlayColor={'transparent'} onPress={() => this.navigate('SignUpNode', { nodeType: '2', title: '全节点' })}>
                    <View style={styles.standardNode_item}>
                        <View style={styles.title}>
                            <Text>
                                全节点 (POW+PBFT节点)
                            </Text>
                            <Image style={{ height: 15 }} source={require('../../assets/images/common/arr2ri.png')} />
                        </View>
                        <Text>
                            全节点即POW+PBFT节点，也被称为MasterNode：全节点在未进入PBFT Committee委员会的情况下，会自动执行POW节点任务，全节点需要具备相应的算力要求。 个人竞选需要不少于5万TRUE，并执行锁仓；组队竞选需要不少于10万TRUE，并执行锁仓。
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.standardNode} underlayColor={'transparent'} onPress={() => this.navigate('SignUpNode', { nodeType: '1', title: '标准节点' })}>
                    <View style={styles.standardNode_item}>
                        <View style={styles.title}>
                            <Text>
                                标准节点 (POW节点)
                            </Text>
                            <Image style={{ height: 15 }} source={require('../../assets/images/common/arr2ri.png')} />
                        </View>
                        <Text>
                            标准节点即POW节点,主网测试期结束后将无节点数量限制,仅执行POW节点任务。个人竞选需要2千TRUE,并执行锁仓;组队竞选需要3千TRUE,并执行锁仓。
                        </Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

export default withNavigation(SignUp)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    standardNode: {
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 10,
        padding: 10,
        marginTop: 20
    },
    standardNode_item: {
        height: screen.height * 0.25,
        justifyContent: 'space-around'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
