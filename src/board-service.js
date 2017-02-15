let boards = {
    "da-board": {
        title: 'Da Board',
        pages: []
    }
}


let boardService = {
    getBoards(){
        return boards
    },
    getBoard(boardName){
        return boards[boardName]
    },
    addBoard(boardName){
        boards[boardName] = { title: boardName, pages: [] }
    }
}



export default boardService