import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';
import Message, { messageType } from './components/Message/Message';

function App() {
  return (
    <div className="App">

      {/* <h1> Welcome To Pat-UI</h1>
      <h2>Default</h2>
      <Button className="test">Default Button</Button>
      <Button
        disabled
        onClick={() => {
          alert('Default Button Clicked');
        }}
      >
        Default Button
      </Button>

      <h2>Type</h2>
      <Button btnType={ButtonType.Primary}>Primary Button</Button>
      <Button btnType={ButtonType.Secondary}>Secondary Button</Button>
      <Button btnType={ButtonType.Danger}>Danger Button</Button>
      <Button btnType={ButtonType.Link}>Link Button</Button>
      <Button
        disabled
        // onClick={() => {
        //   alert('Default Button Clicked');
        // }}
        btnType={ButtonType.Link}
        href="www.google.com"
      >
        Link Button
      </Button>
      <h2>Size</h2>
      <Button btnSize={ButtonSize.Large}>Large Button</Button>
      <Button>Default Button</Button>
      <Button btnSize={ButtonSize.Small}>Small Button</Button> */}

      <Message msgType={messageType.Basic} >
        <div className="header">
          Changes in Service
        </div>
        <div className="content">
          <p>We just updated our privacy policy here to better service our customers. 
            We recommend reviewing the changes.</p>
        </div>
      </Message>

      <Message msgType={messageType.List}>
        <div className="header">
          New Site Features
        </div>
        <div className="content">
          <ul className="list">
            <li>You can now have cover images on blog pages</li>
            <li>Drafts will now auto-save while writing</li>
          </ul>
        </div>
      </Message>

      <Message msgType={messageType.Icon}>
        <i className="notched circle loading icon"></i>
          <div className="header">
            Just one second
          </div>
          <div className="content">
            <p>We're fetching that content for you.</p>
          </div>
      </Message>

      <Message msgType={messageType.Dismiss}>
        <i className="close icon"></i>
        <div className="header">
          Welcome back!
        </div>
        <div className="content">
          <p>This is a special notification which you can dismiss if you're bored with it.</p>
        </div>
      </Message>
    </div>
  );
}

export default App;
