import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import React from "react";

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return( <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder='Enter your message'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

export default reduxForm ( {form: 'dialogAddMessageForm'} ) (AddMessageForm);