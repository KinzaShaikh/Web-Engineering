import React from "react";
import "semantic-ui-css/semantic.min.css";
import { SearchAlumni } from "./DashboardView";
import { Button, Modal } from 'semantic-ui-react'
import { DisplayAllAlumniMembers } from "./DisplayAllAlumniMembers";

export function SearchAlumniMember() {

  return (

    <div>

      <div class="ui mt-4 grid p-4">
        <div class="three wide column"></div>
        <div class="eleven wide column">
          <h1>Search Alumni</h1>
          <hr />

          <ModalExampleDimmer />
   
        </div>
        <div class="one wide column"></div>
      </div>
      
      <DisplayAllAlumniMembers/>
    </div>

  )
}



function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

function ModalExampleDimmer() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

  return (
    <div>
      <Button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Search By CmsID</Button>
      <Button
        onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'inverted' })}
      >
        Search By Name
      </Button>
      <Button
        onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
      >
        Search By Email
      </Button>
      <Modal
        size='mini'
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>Search Alumni Member</Modal.Header>
        <Modal.Content>
          <SearchAlumni />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Disagree
          </Button>
          <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Agree
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
   
  )
}