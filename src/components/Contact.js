import React from 'react';


export default class Contact extends React.Component {
    render() {
        return(
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
                             <form >
                             <input type="hidden" name="contact_number" />
                             <div className="row1">
                                <label>
                                    <p className="title">Imię:</p>
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
                  

                            </form>
                    </div>
            </div>
        )
    }
}