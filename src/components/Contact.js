import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_YCtnKMQdIqpB506jCVedg");



export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_b5km7fq', 'template_2pd9bq7', e.target, 'user_YCtnKMQdIqpB506jCVedg')
        .then((result) => {
            console.log(result.text);
            alert('Formularz został wysłany, dziękujemy!');
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (


            <div className="Contact">
                 <div className="filterContact"> </div>   
                    <div className="contact-left">
                        <h1>Kontakt</h1>

                        
                        <h2>
                                            Zamówienia przyjmujemy za pomocą formularza. Napisz nam co chcesz zamówić, będziemy się kontaktować podczas zamówienia. Jeśli masz jakieś pytania albo uwagi, podziel się nimi z nami!

                                            </h2>
                        
                        

                    </div>
                    
                    <div className="contact-right">
                         <h3>NAPISZ DO NAS!</h3>
                             <form onSubmit={sendEmail}>
                             <input type="hidden" name="contact_number" />
                             <div className="row1">
                                <label>
                                    <p className="title">Mail:</p>
                                    <input className="formUp" type="text" name="user_name" />
                                </label>

                                <label>
                                    <p className="title">Nazwa produktu:</p>
                                    <input className="formUp" type="text" name="id" />                           
                                </label>
                             </div>
                             
                            <label className="formBottom">
                                <p className="title">Wiadomość:</p>
                                <textarea className="formMessage" name="message"/>
                                <br/>
                            </label>

                            <input className="sendButton" type="submit" value="Wyślij" />
                            <div class="g-recaptcha" data-sitekey="6LeMag8aAAAAADla6raFq_UJaJhE14wstPt3fokM"></div>

                  

                            </form>
                    </div>
            </div>
        )
    }
