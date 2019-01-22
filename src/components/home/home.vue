<template>
  <div class="home-content">
   <div slot="content">
      <cube-tab-bar v-model="selectedLabel" show-slider>
        <cube-tab v-for="(item, index) in tabLabels" :label="item.label" :icon="item.icon" :key="item.label"></cube-tab>
      </cube-tab-bar>
      <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel v-for="(item, index) in tabLabels" :label="item.label" :key="item.label">
          <ul>
            <li class="tab-panel-li border-top-1px" v-for="(hero, index) in item.heroes" :key="index">
              {{hero}}
            </li>
          </ul>
        </cube-tab-panel>
      </cube-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      selectedLabel: '全部',
      disabled: true,
      loop: false,
      tabLabels: [{
        label: '全部',
        heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵']
      }, {
        label: '前端',
        heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者']
      }]
    }
  },
  watch: {
    selectedLabel (newV) {
      console.log(newV)
    }
  },
  methods: {
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
      console.log(current)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet">
@import "~assets/style/index.styl"
@import "~assets/style/mixin.styl"
.home-content
  .cube-tab-bar
    background-color: #fff
    height: 30px
    .cube-tab
      font-size: 12px
  .cube-tab-panels
    background-color: #f3f4f5
    ul
      background: #fff
      .tab-panel-li
        padding: 0 16px
        height: 40px
        line-height: 40px
        &:first-child
          &:before
            border: none
</style>
