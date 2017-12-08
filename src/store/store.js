/**
 * Created by Administrator on 2017/12/8.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    sideBarOpened: false
    //放置公用状态
  }
});
