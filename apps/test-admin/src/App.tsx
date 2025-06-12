import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TestTestList } from "./testTest/TestTestList";
import { TestTestCreate } from "./testTest/TestTestCreate";
import { TestTestEdit } from "./testTest/TestTestEdit";
import { TestTestShow } from "./testTest/TestTestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TestTest"
          list={TestTestList}
          edit={TestTestEdit}
          create={TestTestCreate}
          show={TestTestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
