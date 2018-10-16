import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Body,
    Title,
    Button,
    Text,
    Right,
    Icon
} from 'native-base';
import * as loginAction from '../../actions/loginActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Col, Row, Grid} from 'react-native-easy-grid';

import {Image, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native';
import {post} from "../../util/axios/post";


class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            verifyImageUrl: 'http://localhost:8089/api/getVerifyImage?' + Math.random(),
            iconName: 'eye-off',
            secureTextEntry: true
        }
    }

    render() {
        let userInfo = this.props.loginInfo.userInfo;
        return (
            <Container>
                <ImageBackground
                    style={{flex: 1}}
                    source={{uri: 'http://bpic.588ku.com/back_pic/02/65/52/215788492b58a2d.jpg!/fh/300/quality/90/unsharp/true/compress/true'}}
                >
                    <Content style={{marginTop: 50}} padder>
                        <Text style={{fontSize: 20, marginBottom: 20, fontWeight: "bold"}}>请登录{userInfo.userId}</Text>
                        <Form>
                            <Item style={{borderBottomColor:'#123'}}>
                                <Label style={styles.inputLabel}>账号：</Label>
                                <Input placeholder="请输入账号"
                                       placeholderTextColor={"#aab"}
                                       onChangeText={(userId) => this.setState({userId})}
                                />
                            </Item>
                            <Item>
                                <Label style={styles.inputLabel}>密码：</Label>
                                <Input placeholder="请输入密码"
                                       placeholderTextColor={"#aab"}
                                       onChangeText={(password) => this.setState({password})}
                                       secureTextEntry={this.state.secureTextEntry}
                                />
                                <Icon style={{color: '#aab'}} onPress={this.passwordEye} type={"Feather"}
                                      name={this.state.iconName}/>
                            </Item>
                            <Item last>
                                <Label style={styles.inputLabel}>验证码：</Label>
                                <Input placeholder="请输入验证码"
                                       placeholderTextColor={"#aab"}
                                       onChangeText={(verifyCode) => this.setState({verifyCode})}


                                />
                                <TouchableHighlight onPress={this.getVerifyImage}>
                                    <Image

                                        style={{width: 100, height: 40}}
                                        source={{uri: this.state.verifyImageUrl}}
                                    />
                                </TouchableHighlight>
                            </Item>

                        </Form>
                        <Grid>
                            <Row>
                                <Col>
                                    <Button transparent danger>
                                        <Text style={{fontSize: 12}}>忘记密码</Text>
                                    </Button>
                                </Col>
                                <Right>
                                    <Button transparent danger>
                                        <Text style={{fontSize: 12}}>新用户注册</Text>
                                    </Button>
                                </Right>

                            </Row>
                        </Grid>

                        <Button block onPress={this.login}>
                            <Text>登录</Text>
                        </Button>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }

    getVerifyImage = () => {
        this.setState({verifyImageUrl: 'http://localhost:8089/api/getVerifyImage?' + Math.random()})
    };

    passwordEye = () => {

        if (this.state.secureTextEntry) {
            this.setState({
                iconName: 'eye',
                secureTextEntry: false
            })
        } else {
            this.setState({
                iconName: 'eye-off',
                secureTextEntry: true
            })
        }
    };

    login = () => {
        let loadingActions = this.props.loadingActions;
        let loginInfo = this.props.loginInfo;
        console.log(this.state);
        this.props.navigation.navigate('IndexPage')
        // post("http://localhost:8089/api/login", this.state).then((data) => {
        //     console.log(data);
        //     if (data.success) {
        //         console.log(data.response);
        //         loadingActions.login({...loginInfo, userInfo: data.response});
        //         this.props.navigation.navigate('IndexPage')
        //     }
        // })
    };
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