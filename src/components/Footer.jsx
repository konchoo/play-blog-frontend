import { Component, React } from "react";
import { Divider, Icon } from "semantic-ui-react";
import Spacing from "./Spacing";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <Spacing />
        <p className="logo">
          <a href="/">
            <img src="/logo.svg" alt="logo" width={48} height={48} />
          </a>
        </p>
        <p>
          build with <Icon name="react" color="teal" />
          <a href="https://github.com/facebook/react">
            <b>React</b>
          </a>
        </p>
        <p>
          <a href="https://www.github.com/zhuqigong">
            <Icon color="green" name="github" size="big" />
            @zhuqigong
          </a>
        </p>
        <Divider />
        <p>Copyright &copy; zhuqigong.xyz 2021</p>
      </div>
    );
  }
}
export default Footer;
