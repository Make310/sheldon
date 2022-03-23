import { createStore } from "vuex";
import sheldon from "../modules/sheldon/store/sheldon/index";

export default createStore({
  modules: {
    sheldon,
  },
});
