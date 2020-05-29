<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 class="pr-sm-0 pr-md-4">
        <Activity
          :value="randomActivity && randomActivity.activity"
          @save-activity-click="saveActivity"
        ></Activity>
      </v-flex>
      <v-flex xs12 sm12 md6  class="pl-sm-0 pl-md-4 pt-md-0 pt-8 ">
        <ActivityFilters @get-activity-click="getActivity" :randomActivity="randomActivity"></ActivityFilters>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Activity from '@/components/Activity.vue';
import ActivityFilters from '@/components/ActivityFilters.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  created() {
    if (this.firstLoad) {
      this.getActivity()
      this.updateFirstLoad(false)
    }
  },
  components: {
    Activity,
    ActivityFilters,
  },
  computed: {
    ...mapState({
      randomActivity: (state) => state.randomActivity,
      firstLoad: (state) => state.firstLoad,
    }),
  },
  methods: {
    ...mapMutations(['updateRandomActivity', 'saveActivity']),
    ...mapActions(['getActivity','updateFirstLoad']),
  },
}
</script>
