import { createElement, Component, render } from "./toy-react";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>demo</h1>
        {this.children}
      </div>
    );
  }
}

// console.log(document.body)
render(
  <MyComponent id="whj" class="demo">
    <div>hello toy</div>
    <div>
      <a>react</a>
    </div>
    <div></div>
  </MyComponent>,
  document.body
);