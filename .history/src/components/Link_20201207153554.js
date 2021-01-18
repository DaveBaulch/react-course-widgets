const Link  = ({ path }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;