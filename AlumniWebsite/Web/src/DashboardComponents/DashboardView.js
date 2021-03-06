import { Button, Dropdown } from "semantic-ui-react";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { DropZone } from "./DropZone";
import emailjs from 'emailjs-com'

/** For search option */
import _ from 'lodash'
import faker from 'faker'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
/** */


export function DashboardView() {
  const [emailBoxIsVisible, showHideEmailBox] = useState(false);
  function handleSendEmail() {
    showHideEmailBox((prev) => !prev);
  }

  return (
    <div class="container">
      <div class="ui grid mt-4 ms-2">
        <div class="two wide column"></div>
        <div class="eleven wide column">
          <div id="">
            <h1>Dashboard</h1>
          </div>
        </div>

        <div class="three wide column">
          <div id="">
            <SearchAlumni />
          </div>
        </div>
      </div>

      <div class="ui grid mt-4 ms-2">
        <div class="two wide column"></div>
        {/* Send Email button */}
        <div>
          <div
            class="ui button blue"
            data-tooltip={emailBoxIsVisible ? "Hide Email Box" : "Display Email Box"}
            data-position="bottom center"
            onClick={handleSendEmail}
          >
            Send Quick Email to ALumni
          </div>
        </div>
      </div>
      {/* Conditionl rendering of email box */}
      {emailBoxIsVisible ? (
        <div class="ui grid mt-4 ms-2">
          <div class="two wide column"></div>
          {/* Send Email button */}
          <div class="fourteen wide column shadow-sm rounded p-4">
            <SendmailCom />
            {/* <QuickNotify /> */}
          </div>
        </div>
      ) : (
        ""
      )}

      <div class="ui grid mt-4 ms-2">
        <div class="two wide column"></div>
        <div class="fourteen wide column shadow-sm rounded p-4">
          <h1>Recently Added</h1>
          <hr />
          <RecentlyAdded />
        </div>
      </div>

      <div class="ui grid mt-4 ms-2">
        <div class="two wide column"></div>
        <div class="fourteen wide column shadow-sm rounded p-4">
          <h1>Statistics</h1>
          <hr />
          <Statistics />
        </div>
      </div>
    </div>
  );
}
export function SendmailCom() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ptftscd', 'template_0254grl', e.target, 'user_5gEKQsdapzgshXDDEJBtQ')
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
              <label>To</label>
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
export const QuickNotify = () => {
  function sendMail(e) {

    e.preventDefault();
    emailjs.sendForm('gmail', 'template_0254grl', e.target, 'user_5gEKQsdapzgshXDDEJBtQ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <div>
      <div>
        <div class="ui form">
          <div class="field" name="user_email">
            <label>To</label>
            <Recepients />
          </div>

          <div class="field">
            <label>Subject</label>
            <input type="text" name="subject" data-ms-editor="true" placeholder="Subject" />
          </div>

          <div class="field" name="message">
            <label>Body</label>
            <textarea />
          </div>

          {/* Drop files and images here */}
          <div>
            <DropZone />
          </div>

          <div class="field mt-4">
            <hr />
            <button class="btn btn-outline-dark w-25">Cancel</button>
            <button class="ui right floated button green w-25" onClick={sendMail}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const recepients = [
  { key: "angular", text: "nadirhussaintumrani@gmail.com", value: "angular" },
  { key: "css", text: "kinzashaikh38@gmail.com", value: "css" },
  { key: "design", text: "khalidhussain@iba-suk.edu.pk", value: "design" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "mech", text: "Mechanical Engineering", value: "mech" },
  { key: "meteor", text: "Meteor", value: "meteor" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "plumbing", text: "Plumbing", value: "plumbing" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "repair", text: "Kitchen Repair", value: "repair" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "ux", text: "User Experience", value: "ux" },
];

export const Recepients = () => (
  <Dropdown
    placeholder="Recepients"
    fluid
    multiple
    selection
    search
    options={recepients}
  />
);


const RecentlyAdded = () => {
  return (
    <div class="ui horizontal list">
      <div class="item">
        <img class="ui avatar image" src="/Resources/nadir.jpg" />
        <div class="content">
          <div class="header">Tom</div>
          Top Contributor
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/Resources/nadir.jpg" />
        <div class="content">
          <div class="header">Christian Rocha</div>
          Admin
        </div>
      </div>
      <div class="item">
        <img class="ui avatar image" src="/Resources/nadir.jpg" />
        <div class="content">
          <div class="header">Matt</div>
          Top Rated User
        </div>
      </div>
    </div>
  );
};


const Statistics = () => {
  return (
    <div class="ui statistics">
      <div class="statistic">
        <div class="value">1532</div>
        <div class="label text-primary">Total Members</div>
      </div>
      <div class="statistic">
        <div class="value text-success">1140</div>
        <div class="label text-primary">Employed/Hired</div>
      </div>

      <div class="statistic">
        <div class="value text-danger">392</div>
        <div class="label text-primary">Unemployed</div>
      </div>

      <div class="statistic">
        <div class="value text-info">132</div>
        <div class="label text-primary">PHds</div>
      </div>

      <div class="statistic">
        <div class="value text-secondary">450</div>
        <div class="label text-primary">Masters</div>
      </div>
      <div class="statistic">
        <div class="value text-warning">950</div>
        <div class="label text-primary">Bachelors</div>
      </div>


    </div>
  );
};





/** For Local SEarch */


const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}


export const SearchAlumni = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
          placeholder="Search Alumni"
        />
      </Grid.Column>

      {/* <Grid.Column width={10}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column> */}
    </Grid>
  )
}

/** END For Local Search */
