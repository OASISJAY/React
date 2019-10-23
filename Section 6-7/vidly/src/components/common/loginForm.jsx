import React from 'react';
import Joi from 'joi-browser';
import Form from './form';
class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {
        },
    };
    //就像一个过滤器一样 筛选出想要的结果。
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),//为错误信息设置别名。
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };//ES6 特性
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    render() {

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} >
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;