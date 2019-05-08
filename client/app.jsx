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


 function FormOne(props) {
    return (
      <div className="FormOne">
        <p><br></br>Please enter your personal information:</p>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>
            Email:
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>
            Password:
            <input type="text" name="name" />
          </label>
          <br></br>
          <br></br>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }







ReactDOM.render(<App />, document.getElementById('root'));

