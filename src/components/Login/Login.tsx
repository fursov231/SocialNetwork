import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from "./../Common/FormsControls/FormsControls.module.css"
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaUrl: string | null,
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, LoginFormOwnProps> & LoginFormOwnProps>  = ({handleSubmit, error, captchaUrl}) => {
    return (<form onSubmit={handleSubmit}>

            {createField<LoginFormKeyType>('Login', 'email', [required], Input)}
            {createField<LoginFormKeyType>('Password', 'password', [required], Input, {type: "password"})}
            {createField<LoginFormKeyType>(undefined, 'rememberMe', [], Input, {type: "checkbox"}, 'Remember me')}
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && createField("Symbols", 'captcha', [required], Input)}

        {error && <div className={styles.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>)
};

const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormOwnProps>({form: 'login',})(LoginForm);

type LoginFormDataType = {
    rememberMe: boolean,
    password: string,
    email: string,
    captcha: string,
}

export type LoginFormKeyType = Extract<keyof LoginFormDataType, string>;

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: LoginFormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}


type MapStateToPropsType = {
    captchaUrl: string | null,
    isAuth: boolean,
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void,
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login})(Login);