import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    Badge,
    Form,
    Item,
    Label,
    Input
} from 'native-base';

import * as indexPageActions from '../../actions/IndexPageActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Col, Row, Grid} from 'react-native-easy-grid';

import {Image, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native';
import {post} from "../../util/axios/post";


class IndexPage extends Component {


    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let indexTab = this.props.indexPageInfo.indexTab;

        return (
            <Container>
                <ImageBackground
                    style={{flex: 1}}
                    source={{uri: 'http://img3.imgtn.bdimg.com/it/u=763756416,2693074659&fm=27&gp=0.jpg'}}
                >
                    <Header style={styles.header}/>
                    <Content>
                        <Text style={{fontSize: 20, marginBottom: 20, fontWeight: "bold"}}>首页</Text>
                        <Form>
                            <Item style={{}}>
                                <Label style={styles.inputLabel}>用户编号：</Label>
                                <Input placeholder="用户编号"
                                       placeholderTextColor={"#aab"}
                                       onChangeText={(userId) => this.setState({userId})}
                                />
                            </Item>
                            <Item style={{}}>
                                <Label style={styles.inputLabel}>用户名：</Label>
                                <Input placeholder="用户名"
                                       placeholderTextColor={"#aab"}
                                       onChangeText={(userId) => this.setState({userId})}
                                />
                            </Item>
                        </Form>

                    </Content>
                    <Footer>
                        <FooterTab>
                            {
                                indexTab.map((tab, key) => {

                                    return (
                                        <Button onPress={() => null} key={key} badge={tab.badge === 0 ? null : true}
                                                vertical>
                                            {
                                                tab.badge === 0 ? null : <Badge><Text>{tab.badge}</Text></Badge>
                                            }

                                            <Icon name={tab.icon}/>
                                            <Text>{tab.title}</Text>
                                        </Button>
                                    )


                                })
                            }
                        </FooterTab>
                    </Footer>
                </ImageBackground>
            </Container>
        );
    }


}

const styles = StyleSheet.create({
    header: {
        opacity: 0
    }
});


function mapStateToProps(state) {
    return {
        indexPageInfo: state.indexPageInfo
    };
}

function matchDispatchToProps(dispatch) {
    return {
        loadingActions: bindActionCreators(indexPageActions, dispatch),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(IndexPage);