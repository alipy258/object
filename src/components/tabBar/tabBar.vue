<template>
  <div class="tab">
    <home v-if="curTab === 'Home'"></home>
    <like v-if="curTab === 'Like'"></like>
    <vip v-if="curTab === 'Vip'"></vip>
    <div class="footers">
      <cube-tab-bar
        v-model="selectedLabelSlots"
        :data="tabs"
        useTransition
        @click="clickHandler">
      </cube-tab-bar>
    </div>
  </div>
</template>

<script>
import Home from 'components/home/home'
import Like from 'components/like/like'
import Vip from 'components/vip/vip'
export default {
  name: 'tab',
  components: {
    Home,
    Like,
    Vip
  },
  data () {
    return {
      selectedLabelSlots: 'Home',
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'Like',
        icon: 'cubeic-like'
      }, {
        label: 'Vip',
        icon: 'cubeic-vip'
      }],
      curTab: 'Home'
    }
  },
  methods: {
    clickHandler (label) {
      this.curTab = label
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet">
@import "~assets/style/index.styl"
.footers
  position: fixed
  width: 100%
  bottom: 0
  background: $color-white
</style>
