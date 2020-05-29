<template>
  <v-app id="app">
    <notifications group="notification" position="bottom right"/>
    <v-container fill-height fluid>
      <v-layout align-center justify-center>
          <v-container fill-height >
            <v-layout align-center justify-center >
              <v-flex xs12 sm10 md10 style="max-width: 960px">
                <v-tabs class="border-radius-top" color="black" background-color="light-green" slider-color="light-green darken-4" grow>
                  <v-tab v-for="t in tabs" :key="t.tabName" ripple :to="t.url">
                    {{ t.tabName }}
                  </v-tab>
                </v-tabs>
                <v-card flat class="card-top-no-radius">
                  <v-container>
                    <router-view></router-view>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    tabs: [
      {
        tabName: 'activities',
        url: '/activities'
      },
      {
        tabName: 'my-list',
        url: '/my-list'
      }
    ],
  })
};
</script>
