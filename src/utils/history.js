const  createHistory = require("history").createBrowserHistory;
const  createMemoryHistory = require("history").createMemoryHistory;

export const browserHistory = createHistory();
export const memoryHistory = createMemoryHistory();