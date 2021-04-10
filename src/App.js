import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBooks from "./Components/AddBooks/AddBooks";
import ManageBooks from "./Components/ManageBooks/ManageBooks";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Orders from "./Components/Orders/Orders";
import EditPage from "./Components/EditPage/EditPage";

// createContext()
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkout/:bookId">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/orderDetail">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/manageBook">
            <ManageBooks></ManageBooks>
          </PrivateRoute>
          <PrivateRoute path="/addBook">
            <AddBooks></AddBooks>
          </PrivateRoute>
          <PrivateRoute path="/editBook">
            <EditPage></EditPage>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
