<template>
  <div>
    <h2>Activity details:</h2>
    <v-select
      v-model="activityType"
      :items="types"
      label="Type"
      @change="getActivityClick"
    ></v-select>
    <v-text-field
      label="Participants"
      type="number"
      v-model="participants"
      @keyup="getActivityClick"
    ></v-text-field>
    <v-slider
      :tick-labels="['cheap', '', '', '', '', '', '', '', '', '', 'expensive']"
      v-model="price"
      always-dirty
      min="0"
      max="1"
      step="0.1"
      ticks
      @change="getActivityClick"
    ></v-slider>
    <v-btn color="primary" @click="getActivityClick">
      Hit me with a new one!
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    randomActivity: {
      type: Object,
    },
  },
  data () {
    return {
      activityType: '',
      participants: null,
      price: null,
      types: [
        'education',
        'recreational',
        'social',
        'diy',
        'charity',
        'cooking',
        'relaxation',
        'music',
        'busywork',
      ]
    }
  },
  watch: {
    randomActivity: function (newVal) {
      this.activityType = newVal.type
      this.price = newVal.price
      this.participants = newVal.participants
    },
  },
  methods: {
    getActivityClick: function () {
      this.$emit('get-activity-click', {
        type: this.activityType,
        participants: this.participants,
        price: this.price,
      })
    }
  },
}
</script>
