import { Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { RouteDetails } from "../../types";

const RouteHandler = (props: { appRoutes: RouteDetails[] }) => {
  const location = useLocation();
  const { appRoutes } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="page" key={location.key}>
          <Switch location={location}>
            {appRoutes.map((rt) => (
              <Route key={`${rt.title}-route`} path={rt.route} exact={rt.exact}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <rt.component />
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Suspense>
  );
};

export default RouteHandler;
