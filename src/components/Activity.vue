<template>
  <div>
    <h2>You should:</h2>
    <v-textarea
      solo
      label="Activity will appear here..."
      :value="value"
      readonly
      class="mt-2"
    ></v-textarea>
    <v-btn color="primary" @click="saveActivityClick">Save for later</v-btn>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    saveActivityClick: function () {
      this.$emit('save-activity-click', {
        activityType: this.activityType,
        participants: this.participants,
        price: this.price,
      })
    }
  },
}
</script>
