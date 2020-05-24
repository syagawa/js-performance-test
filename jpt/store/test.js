export const state = function(){
  return {
    test: "testtest"
  }
};

export const getters = {
  currentTest(state){
    return state.test;
  }
};

export const mutations = {
  setTest(state, { test }){
    state.test = test;
  }
};

export const actions = {
  addTest({ stete, commit }, { test }){
    commit("setItem", { test: test } );
  }
}

