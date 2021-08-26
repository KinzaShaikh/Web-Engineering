import React from "react";
import "semantic-ui-css/semantic.min.css";

import { DropZone } from "./DropZone";
export function CreateEvent(){

    console.log("Comes")
    return(
        <div>
            
    <div class="ui mt-4 grid p-4">
        <div class="four wide column"></div>
        <div class="ten wide column">
            <h1>Create Event</h1>
            <hr />
           
            <CreateNewEvent/>
            </div>
        <div class="two wide column"></div>
    </div>
       </div>
       )
}

class CreateNewEvent extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          title:"",
          date:"",
          description:"",
          profileImage: null
      };

      this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleProfileImage = this.handleProfileImage.bind(this);
  }
  handleSubmitEvent(){

     alert(this.state.title+' '+this.state.description+' '+this.state.date+' '+this.state.profileImage);

    const formData = new FormData();
    
    formData.append("title", this.state.title)
    formData.append("date", this.state.date)
    formData.append("description", this.state.description)
    formData.append("image", this.state.profileImage);
   

  }
  handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name)
    this.setState({ [name]: value });
  }
  handleProfileImage(img) {
    this.setState({ profileImage: img });
  }
  
render(){
    return(
        <div>
     <div>
          <div className="container" class="ui form shadow large">
          <form>
                  <div className="row pt-5 mx-auto">
                      <div className="col-8 form-group pt-2 mx-auto" class="field">
                      <label>Title</label>
                          <input type="text" value={this.state.title} onChange={this.handleInputChange} className="form-control" placeholder="Title" name="title"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto" class="field">
                      <label>Date</label>
                          <input type="date" value={this.state.date} onChange={this.handleInputChange} className="form-control" name="date" data-ms-editor="true" placeholder="Date" />  
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto" class="field">
                      <label>Description</label>
                          <textarea className="form-control" value={this.state.description} onChange={this.handleInputChange} id="" cols="30" rows="8" placeholder="Description" name="description"></textarea>
                      </div>
                      { <div className="col-8 pt-3 mx-auto" class="field">
                        <DropZone profileImage={this.handleProfileImage} />
                    </div>     }
                    <div className="col-8 pt-3 mx-auto pb-3 mb-3" >
                    <button class="btn btn-outline-dark w-25">Cancel</button>
                    <button onClick={this.handleSubmitEvent} class="ui right floated button green w-25">Submit</button>
                      </div>
                  
                  </div>
              </form>
          </div>
      </div>
            
        </div>
    )
}

}
  