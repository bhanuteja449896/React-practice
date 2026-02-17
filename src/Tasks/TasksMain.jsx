import Counter from './Beginner/Task1/Counter'
import Parent from './Beginner/Task2/Parent'
import Toggle from './Beginner/Task3/Toggle'
import SimpleList from './Beginner/Task4/SimpleList'
import Parent1 from './Beginner/Task5/Parent1'

import TodoList from './Intermediate/Task1/TodoList'
import FormValidator from './Intermediate/Task2/FormValidator'
import HomePage from './Intermediate/Task3/HomePage'
import FetchUser from './Intermediate/Task4/FetchUser'
import FruitSearch from './Intermediate/Task5/FruitSearch'

import HomePage1 from './Advanced/Task1/HomePage'

export default function TasksMain(){
    return(
        <>
            {/* Beginner Tasks */}
            {/* <Counter/> */}
            {/* <Parent/> */}
            {/* <Toggle/> */}
            {/* <SimpleList/> */}
            {/* <Parent1/> */}

            {/* Intermediate Tasks  */}
            {/* <TodoList/> */}
            {/* <FormValidator/> */}
            {/* <HomePage/> */}
            {/* <FetchUser/> */}
            {/* <FruitSearch/> */}

            {/* Advanced Tasks  */}
            <HomePage1/>


        </>
    )
}