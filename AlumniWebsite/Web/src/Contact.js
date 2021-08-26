import React from "react";
import "./Styles/MenuBar.css";
import "semantic-ui-css/semantic.min.css";
import { SendmailCom} from "./DashboardComponents/DashboardView";
export function Contact(){

    return(
        <div>
            
    <div class="ui mt-4 grid p-4">
        <div class="two wide column"></div>
        <div class="twelve wide column">
            <h1>Contacts</h1>
            <hr />
           
            <SendmailComponent/>
            </div>
        <div class="two wide column"></div>
    </div>
       </div>
    )
}

function SendmailComponent() {
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_ptftscd', 'template_8nj85vw', e.target, 'user_5gEKQsdapzgshXDDEJBtQ')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset()
    }
  
    return (
      <div>
        <div className="container" class="ui form">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group pt-2 mx-auto" class="field">
                <label>From</label>
                <input type="email" className="form-control" placeholder="Email Address" name="email" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto" class="field">
                <label>Subject</label>
                <input type="text" className="form-control" name="subject" data-ms-editor="true" placeholder="Subject" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto" class="field">
                <label>Body</label>
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
              </div>
              {/* <div className="col-8 pt-3 mx-auto" class="field">
                        <DropZone />
                    </div>     */}
              <div className="col-8 pt-3 mx-auto" >
                <button class="btn btn-outline-dark w-25">Cancel</button>
                <input type="submit" class="ui right floated button green w-25" value="Send Mail"></input>
              </div>
  
            </div>
          </form>
        </div>
      </div>
    )
  
  }