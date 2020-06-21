import {maxLengthCreator, required} from "../../utils/validators/validators";
import {reduxForm} from "redux-form";
import {createField, Textarea} from "../../Common/FormsControls/FormsControls";
import React from "react";
import {LoginFormKeyType} from "../../Login/Login";

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return( <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageValuesKeysType>('Enter your message', 'newMessageBody', [required, maxLength10], Textarea)}

            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
export type NewMessageValuesKeysType = Extract<keyof NewMessageFormType, string>
export default reduxForm ( {form: 'dialogAddMessageForm'} ) (AddMessageForm);
