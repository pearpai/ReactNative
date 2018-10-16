import React, {Component} from 'react';
import {Container, Header, Content, Form, Item, Input, Label, Body, Title, Button, Text, Right} from 'native-base';
import * as loginAction from '../../actions/loginActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Col, Row, Grid} from 'react-native-easy-grid';

import {Image, StyleSheet, TouchableHighlight} from 'react-native';
import {post} from "../../util/axios/post";


class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            verifyImageUrl: 'http://localhost:8089/api/getVerifyImage?' + Math.random(),
        }
    }

    render() {

        return (

            <Form>
                <Item>
                    <Label style={styles.inputLabel}>账号：</Label>
                    <Input placeholder="请输入账号"
                           placeholderTextColor={"#aab"}
                           onChangeText={(userId) => this.setState({userId})}
                    />
                </Item>

                <Item>
                    <Label style={styles.inputLabel}>验证码：</Label>
                    <Input placeholder="请输入验证码"
                           placeholderTextColor={"#aab"}
                           onChangeText={(verifyCode) => this.setState({verifyCode})}

                    />
                    <TouchableHighlight >
                        <Image

                            style={{width: 100, height: 40}}
                            source={{uri: this.state.verifyImageUrl}}
                        />
                    </TouchableHighlight>
                </Item>

            </Form>


        );
    }


}

const styles = StyleSheet.create({
    inputLabel: {
        width: 80,
    },


});


function mapStateToProps(state) {
    return {
        loginInfo: state.loginInfo
    };
}

function matchDispatchToProps(dispatch) {
    return {
        loadingActions: bindActionCreators(loginAction, dispatch),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);