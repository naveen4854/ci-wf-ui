import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Col, FormControl, FormLabel, FormGroup, Button } from "react-bootstrap";

const StageDetails = (props: any) => {
    const { handleSubmit } = props;
    const onSubmit = (values: any) => {
        alert(JSON.stringify(values))
    }

    const InputField = (field: any) => {
        return (
            <FormGroup className="col-12" style={{ display: "flex" }}>
                <Col sm="5" className="text-right">
                    <FormLabel>{field.placeholder}</FormLabel >
                </Col>
                <Col sm="7">
                    <input
                        {...field.input}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="form-control"
                    />
                </Col>
            </FormGroup>
        )
    }

    return (
        <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-6" style={{ margin: "auto" }}>
                <div className="card row">
                    <div className="card-body col-xs-12">
                        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 20 }}>
                            <div className="row">
                                <Field
                                    name="firstName"
                                    component={InputField}
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="row">
                                <Field
                                    name="lastName"
                                    component={InputField}
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="row">
                                <div className="col-xs-6 text-center" style={{margin: "auto"}}>
                                    <Button variant="warning" type="submit">Cancel</Button>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default reduxForm({
    form: 'StageDetailsForm'
})(StageDetails);