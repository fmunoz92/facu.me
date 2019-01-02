import React from 'react'

import './Signup.css'

class Signup extends React.Component {
  render() {
    return (
      <form action="https://app.convertkit.com/forms/815833/subscriptions" className="seva-form formkit-form" data-format="inline" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;modal&quot;:{&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:null,&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null}}}" data-sv-form={815833} data-uid="02c5ca2f38" data-version={5} method="post" min-width="400 500 600 700 800" style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '6px'}}>
        <div data-style="full">
          <div className="formkit-column" data-element="column" style={{backgroundColor: 'rgb(249, 250, 251)'}}>
            <h1 className="formkit-header" data-element="header" style={{color: 'rgb(77, 77, 77)', fontSize: '20px', fontWeight: 700}}>
              Join the Newsletter
            </h1>
            <div className="formkit-subheader" data-element="subheader" style={{color: 'rgb(104, 104, 104)', fontSize: '15px'}}>
              <p>
                Subscribe to get my latest content by email.
              </p>
            </div>
          </div>
          <div className="formkit-column" data-element="column">
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert">
            </ul>
            <div className="seva-fields formkit-fields" data-element="fields">
              <div className="formkit-field">
                <input aria-label="Your first name" className="formkit-input" name="fields[first_name]" placeholder="Your first name" style={{borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', color: 'rgb(0, 0, 0)', fontWeight: 400}} type="text" />
              </div>
              <div className="formkit-field">
                <input className="formkit-input" name="email_address" placeholder="Your email address" required style={{borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', color: 'rgb(0, 0, 0)', fontWeight: 400}} type="text" />
              </div>
              <button className="formkit-submit formkit-submit" data-element="submit" style={{backgroundColor: 'rgb(22, 119, 190)', borderRadius: '24px', color: 'rgb(255, 255, 255)', fontWeight: 700}}>
                <div className="formkit-spinner">
                  <div>
                  </div>
                  <div>
                  </div>
                  <div>
                  </div>
                </div>
                <span>
                  Subscribe
                </span>
              </button>
            </div>
            <div className="formkit-guarantee" data-element="guarantee" style={{color: 'rgb(77, 77, 77)', fontSize: '13px', fontWeight: 400}}>
              <p>
                I won't send you spam. Unsubscribe at any time.
              </p>
            </div>
            <a className="formkit-powered-by" data-element="powered-by" href="https://convertkit.com/?utm_source=dynamic&utm_medium=referral&utm_campaign=poweredby&utm_content=form" rel="noopener noreferrer" target="_blank">
              Powered By ConvertKit
            </a>
          </div>
        </div>
      </form>

    )
  }
}

export default Signup
