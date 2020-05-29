<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="value"
      class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <v-btn text icon
          :color="item.done ? 'green' : 'grey'"
          @click="activityCkeck(item)"
        >
          <v-icon>check_circle_outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-btn block color="error" width="100%" class="mt-2" @click="activityClearClick">
      Clear all
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'MyList',
  props: {
    value: {
      type: Array,
    },
  },
  data () {
    return {
      headers: [
        {
          text: 'Activity',
          align: 'left',
          value: 'activity',
        },
        { text: 'Participants', value: 'participants' },
        { text: 'Budget', value: 'price' },
        { text: '', value: 'action' },
      ]
    }
  },
  methods: {
    activityClearClick: function () {
      this.$emit('activity-clear-click')
      return null
    },
    activityCkeck: function (activity) {
      this.$emit('activity-ckeck', activity)
      return activity
    }
  },
}
</script>
