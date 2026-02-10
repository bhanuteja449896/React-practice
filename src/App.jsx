import Parent from './practice/props/Parent'
import { useState, useRef } from 'react'
import './App.css'
import CompMain from './practice/components/CompMain'
import RenderingMain from './practice/Rendering/RenderingMain'
import MainHooks from './practice/hooks/MainHooks'
import ContextMain from './practice/useContext/Task1/ContextMain'
import TaskMain from './practice/useContext/Task2/TaskMain'
import ThemeButton from './practice/useContext/Task2/ThemeButton'
import UseReducerMain from './practice/useReducer/UseReducerMain'
import UseCallbackMain from './practice/useCallback/UseCallbackMain'
import UseMemoMain from './practice/useMemo/UseMemoMain'


function App() {

  return (
    <>
      {/* <Parent/> */}
      {/* <CompMain/> */}
      {/* <RenderingMain/> */}
      {/* <MainHooks/> */}
      {/* <ContextMain/> */}
      {/* <TaskMain/> */}
      {/* <ThemeButton/> */}
      {/* <UseReducerMain/> */}
      {/* <UseCallbackMain/> */}
      <UseMemoMain/>
    </>
  )
}

export default App
