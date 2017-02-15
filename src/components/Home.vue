<template>
    <div>
        <form @submit.prevent="addBoard">
        <input type="text" v-model="boardTitle">
        <button>New Board</button>
        </form>
        <ul>
            <li v-for="board in boards">
                <router-link :to="'boards/'+ board.title">{{board.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Board from './Board'
import boardService from '../board-service'

export default {
  name: 'home',
  components: { Board },
  data(){
    return {
     boardTitle: '',
     boards: boardService.getBoards()
    }
  },
  methods: {
        addBoard(){
            boardService.addBoard(this.boardTitle)
            this.boardTitle = ''
        }
     }
}
</script>

<style>
</style>