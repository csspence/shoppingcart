// import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
       }
    }

    render() {
       return (
          <div>
              Crew's Stuff Store
             <FormOne/>
          </div>
       );
    }
 }

//  window.onload = function (){
//     ReactDOM.render(
//       <BrowserRouter>
//         <App/>
//       </BrowserRouter>
//         , document.getElementById('root')
//       );
//   }



/*--------------------------------------------------
------------------This is the first form component-
---------------------------------------------------*/
 function FormOne(props) {
    return (
      <div className="FormOne">
        <p><br></br>Please enter your personal information:</p>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label> &nbsp; &nbsp;
          <label>
            Email:
            <input type="text" name="name" />
          </label> &nbsp; &nbsp;
          <label>
            Password:
            <input type="password" name="name" />
          </label>
          <br></br> <br></br>
            <input id="formOneSubmit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }

/*--------------------------------------------------
------------------This is the second form component-
---------------------------------------------------*/

  function FormTwo(props) {
    return (
      <div className="FormTwo">
        <p><br></br>Please share your contact information:</p>
        <form>
          <label>
            Mailing Address (line 1):
            <input type="text" name="name" />
          </label> &nbsp; &nbsp;
          <label>
            Mailing Address (line 2):
            <input type="text" name="name" />
          </label> &nbsp; &nbsp;
          <label>
            City, State, Zip Code:
            <input type="text" name="name" />
          </label> &nbsp; &nbsp;
          <label>
            Phone Number:
            <input type="tel" name="name" maxLength= "10" />
          </label>
          <br></br> <br></br>
            <input id="formTwoSubmit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }


/*--------------------------------------------------
------------------This is the third form component-
---------------------------------------------------*/

function FormThree(props) {
    return (
      <div className="FormThree">
        <p><br></br>Please share your contact information:</p>
        <form>
          <label>
            Credit Card Number:
            <input type="text" name="name" maxLength= "19" />
          </label> &nbsp; &nbsp;
          <label>
            Expiration Date:
            <input type="date" name="name" />
          </label> &nbsp; &nbsp;
          <label>
            CVV Code:
            <input type="text" name="name" maxLength= "4" />
          </label> &nbsp; &nbsp;
          <label>
            Billing Zip Code:
            <input type="text" name="name" maxLength= "5" />
          </label>
          <br></br> <br></br>
            <input id="formThreeSubmit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }







ReactDOM.render(<App />, document.getElementById('root'));

