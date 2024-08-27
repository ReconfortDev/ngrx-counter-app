import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCount} from "./store/counter.selectors";
import {decrement, increment, reset, setCount, undo} from "./store/counter.actions";

interface Action {
  name: string
  color: string
  action: () => void
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count$: Observable<number>;


  Actions: Action[] = [
    {
      name: "+",
      color: "indigo",
      action: () => this.onIncrement(),
    },
    {
      name: "-",
      color: "red",
      action: () => this.onDecrement(),
    },
    {
      name: "reset",
      color: "gray",
      action: () => this.onReset(),
    },
    {
      name: "undo",
      color: "yellow",
      action: () => this.onUndo(),
    }

  ]

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  onUndo() {
    this.store.dispatch(undo());
  }

  onSetCount(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const count = parseInt(inputElement.value, 10) || 0;
    this.store.dispatch(setCount({value: count}));
  }

  getButtonClasses(color: string) {
    return {
      'bg-indigo-500 hover:bg-indigo-400 focus:ring-indigo-300': color === 'indigo',
      'bg-gray-500 hover:bg-gray-400 focus:ring-gray-300': color === 'gray',
      'bg-red-500 hover:bg-red-400 focus:ring-red-300': color === 'red',
      'bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-300': color === 'yellow',
    };
  }
}
