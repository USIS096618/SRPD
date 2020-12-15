/**
 * @file Este archivo se encarga de verificar si se tiene acceso a dichas rutas
 * @author SRPD
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import JWT from "./Class/JWT";

/**
 * @function ProtectedRoute
 * @param {props} propiedades Recive las propiedades del componente
 * @yields {Componente} Verifica la autentificacion del usuario
 * @exports <Route>
 */
export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated() || JWT.validatorJWT()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/Login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
