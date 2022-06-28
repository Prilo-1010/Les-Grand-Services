import React from 'react'
import '../styles/Contact.css'
import { Button } from '../components/Button';

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
        <div className='ctext'>
          <h1>Contact Us.</h1>
          <p>Got any Questions? Feel free to ask or visit our FAQ page </p>
        </div>

        <div class="container-contact">
          <div class="wrap-contact">

            <form name="contact" class="contact-form validate-form" method="post" action="">

              <div class="wrap-input validate-input" data-validate="Please enter your name">
                <input class="input" type="text" name="name" placeholder="Full Name" />
              </div>

              <div class="wrap-input validate-input" data-validate="Please enter your email">
                <input class="input" type="text" name="email" placeholder="E-mail" />
              </div>

              <div class="wrap-input validate-input" data-validate="Please enter your message">
                <textarea class="input" type="text" name="message" placeholder="Your Message"></textarea>
              </div>

              <div class="container-contact-form-btn">
              <Button
                    buttonStyle='btn-other'
                    buttonSize='btn-medium'
                    type='submit'
                    onClick={console.log("Prosper")}
                    >
                    Send
                    </Button>
              </div>

              <div class="grid-container">
                <div class="item1 left-align"><i class="fa fa-lg fa-map-marker-alt"></i> Coming bientot</div>
                <div class="item4 right-align"><i class="fa fa-lg fa-phone"></i> (123) 456-7890</div>

              </div>

            </form>

          </div>
        </div>
      </div>
</div>
    </>
  )
}

export default Contact