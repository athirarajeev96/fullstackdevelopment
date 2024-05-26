import React from 'react'

function Form() {
  return <>
        <section className="call-to-action text-white text-center" id="signup">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                        <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="c38d21ec-5e64-4a0f-a2cb-9e507824ae81">
                            {/* <!-- Email address input--> */}
                            <div className="row">
                                <div className="col">
                                    <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                                </div>
                                <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                            </div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                </div>
                            </div>

                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  </>
}
export default Form
