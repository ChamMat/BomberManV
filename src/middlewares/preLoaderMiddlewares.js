const preLoaderMiddlewares = (store) => (next) => (action) => {
      
    next(action);
  };
  
  export default preLoaderMiddlewares;
  