import { connect } from 'react-redux'
import { toggleTodo, fetchTodos } from '../../actions'
import TodoList from '../../components/App/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})


const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
