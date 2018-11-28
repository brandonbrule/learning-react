import React, { Component } from "react";

class DynamicComponent1 extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li>
              <a href="#nowhere" title="Lorum ipsum dolor sit amet">
                Lorem
              </a>
            </li>
            <li>
              <a href="#nowhere" title="Aliquam tincidunt mauris eu risus">
                Aliquam
              </a>
            </li>
            <li>
              <a href="#nowhere" title="Morbi in sem quis dui placerat ornare">
                Morbi
              </a>
            </li>
            <li>
              <a
                href="#nowhere"
                title="Praesent dapibus, neque id cursus faucibus"
              >
                Praesent
              </a>
            </li>
            <li>
              <a href="#nowhere" title="Pellentesque fermentum dolor">
                Pellentesque
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default DynamicComponent1;
