<template>
  <div>
    <ActivityList
      :value="savedActivities"
      @activity-ckeck="checkActivity"
      @activity-clear-click="handleActivityClear"
    ></ActivityList>

    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title class="headline">Clear all saved activities?</v-card-title>
        <v-card-text>You will lose all progress towards existent activities.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="cancelClear">Cancel</v-btn>
          <v-btn color="red" text @click="okClear">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ActivityList from '@/components/ActivityList.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'MyList',
  data () {
    return {
      dialog: false,
    }
  },
  components: {
    ActivityList,
  },
  computed: {
    ...mapState(['savedActivities']),
  },
  methods: {
    ...mapMutations(['checkActivity', 'clearActivities']),
    handleActivityClear: function () {
      this.dialog = true;
    },
    cancelClear: function () {
      this.dialog = false;
    },
    okClear: function () {
      this.dialog = false;
      this.clearActivities();
    },

  },
}
</script>
