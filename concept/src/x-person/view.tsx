import { Events, Self } from "./types";
import { View } from "../lib/view";
import { State } from "../lib/types";

export default class PersonView extends View<Self> {
  protected meta = {
    tag: "x-person",
    styles: import("./styles.css"),
  };

  private name(state: State): string {
    switch (state) {
      case State.Optimistic:
        return state;
    }
  }

  public render() {
    <>
      <h1></h1>

      <p>Unsaved: {this.model.name.is(State.Optimistic)}</p>

      <button
        onClick={() => this.dispatch(Events.ModifyName, { name: "Maria" })}
      >
        Update name
      </button>
    </>;
  }
}
