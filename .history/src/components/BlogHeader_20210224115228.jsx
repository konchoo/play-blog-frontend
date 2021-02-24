import React, { Component } from "react";
import { Container, Menu, Visibility } from "semantic-ui-react";
const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "4em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
};

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
};

const overlayStyle = {
  float: "left",
  margin: "0em 3em 1em 0em",
};

const overlayMenuStyle = {
  position: "relative",
  left: 0,
  transition: "left 0.5s ease",
};

class BlogHeader extends Component {
  state = {
    activeItem: "home",
    menuFixed: false,
    overlayFixed: false,
  };
  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem, menuFixed, overlayFixed, overlayRect } = this.state;
    return (
      <Container fluid>
        <Menu borderless fixed="top" pointing secondary className="blog-header">
          <Menu.Item
            as="a"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            link
            href="/"
          ></Menu.Item>
          <Menu.Item
            as="a"
            name="archives"
            active={activeItem === "archives"}
            onClick={this.handleItemClick}
            link
            href="/posts/timeline"
          />
          <Menu.Item
            as="a"
            name="categories"
            active={activeItem === "categories"}
            onClick={this.handleItemClick}
            link
            href="/categories"
          />
          <Menu.Item
            name="tags"
            active={activeItem === "tags"}
            onClick={this.handleItemClick}
            as="a"
            href="/tags"
          />
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Container>
    );
  }
}

export default BlogHeader;
