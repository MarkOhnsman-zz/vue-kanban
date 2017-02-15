<template>
  <div id="board">
    <h3>{{board.title}}</h3>
    <Page v-for="page in board.pages" :page='page'></Page>
  </div>
</template>

<script>
import Page from "./Page"
import boardService from '../board-service'

export default {
  name: 'board',
  components: { Page },
  data(){
    return {
     board: boardService.getBoard(this.$route.params.boardTitle)
    }
  }
}
</script>

<style>

</style>
