import {atom} from "shared/factory";
import {createGate} from "effector-react";
import {createEvent, createStore} from "effector";

export const homeModel = atom(() => {
  const homeGate = createGate()

  const increment = createEvent()
  const decrement = createEvent()

  const $count = createStore(0)

  $count
    .on(increment, state => state + 1)
    .on(decrement, state => state - 1)

  return {
    homeGate,
    $count,
    increment,
    decrement
  }
})
