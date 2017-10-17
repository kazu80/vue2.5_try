<template>
  <div id="app">

    <!-- Web Component -->
    <kazu-up-down id="up-down" v-bind:val="num"></kazu-up-down><br>
    <br>

    <child myMessage="hello! child"></child>
    <bs-date-input class="date-picker-theme-dark" data-3d-date-picker="true"></bs-date-input>
  </div>
</template>

<script>


export default {
    name: 'app',
    data: function () {
        return {
            num: 0
        }
    },

    mounted: function () {
        const up_down = document.getElementById('up-down');

        up_down.addEventListener('up_val', (e) => {
            if (this.num < 10) {
                this.num = this.num + 1;
            }
        });

        up_down.addEventListener('down_val', (e) => {
            if (this.num > 0) {
                this.num = this.num - 1;
            }
        });
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
