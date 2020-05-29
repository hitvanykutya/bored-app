import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../services/api.service'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    firstLoad: true,
    randomActivity: undefined,
    savedActivities: [],
  }
}

const state = getDefaultState()

const getters = {
}

const actions = {
  async getActivity({ commit }, payload) {
    const randomActivity = await ApiService.getActivity(payload);
    if (randomActivity && randomActivity.error) {
      Vue.notify({
        group: 'notification',
        type: 'error',
        text: randomActivity.error
      });
    }
    commit('updateRandomActivity', randomActivity);
  },
  updateFirstLoad({ commit }, payload) {
    commit('updateFirstLoad', payload);
  },
}

const mutations = {
  initStore: (state) => {
    Object.assign(state, JSON.parse( localStorage.getItem('bored-app-my-list') ) || getDefaultState());
  },
  updateRandomActivity: (state, randomActivity) => {
    state.randomActivity = randomActivity;
  },
  updateFirstLoad: (state, firstLoadValue) => {
    state.firstLoad = firstLoadValue;
  },
  saveActivity: (state) => {
    if (!state.randomActivity || state.randomActivity.error) {
      state.randomActivity = {
        error: 'Unable to save this activity',
      }
      Vue.notify({
        group: 'notification',
        type: 'error',
        text: state.randomActivity.error
      });
    } else if (
      state.savedActivities.map((a) => a.key)
        .includes(state.randomActivity.key)
    ) {
      state.randomActivity = {
        error: 'Activity already saved',
      }
      Vue.notify({
        group: 'notification',
        type: 'error',
        text: state.randomActivity.error
      });
    } else {
      state.savedActivities.push(state.randomActivity);
      Vue.notify({
        group: 'notification',
        type: 'success',
        text: 'Activity saved successfully.'
      });
    }
  },
  checkActivity: (state, activity) => {
    const i = state.savedActivities.findIndex((a) => a === activity);
    if (i >= 0) {
      Vue.set(state.savedActivities, i, {
        ...state.savedActivities[i],
        done: !state.savedActivities[i].done,
      });
    }
  },
  clearActivities: (state) => {
    state.savedActivities = [];
  }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
