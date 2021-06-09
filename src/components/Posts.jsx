import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Divider,
  Grid,
  GridColumn,
  Header,
  Icon,
  Loader,
  Pagination,
} from "semantic-ui-react";
import Spacing from "./Spacing";
export default function Posts(props) {
  const history = useHistory();
  const handlePaginationClick = (e, { activePage }) => {
    const url = props.pagePrefix + activePage;
    history.push(url);
  };
  const $ = require("jquery");
  $(() => {
    const ele = document.querySelectorAll("pre code");
    if (undefined !== ele && null !== ele) {
      ele.forEach((block) => {
        window.hljs.highlightBlock(block);
      });
    }
  });
  return (
    <>
      <>
        <Container>
          {props.response.list && props.response.list.length > 0 ? (
            props.response.list.map(
              (a, index) =>
                a && (
                  <div
                    key={index}
                    className="post-container"
                    style={
                      index > 0 ? { marginTop: "2em" } : { marginTop: "11em" }
                    }
                  >
                    <Header as="h1">
                      <a href={"/post/" + a.id} className="post-title">
                        {a.title}
                      </a>
                    </Header>
                    {/* <Header as="h6" textAlign="center" className="post-time">
                      <em> {a.publishTime}</em>
                    </Header> */}
                    <Spacing />
                    {props.focus && a.catalogueBody && (
                      <>
                        <Header as="h3">
                          <Icon name="bookmark" style={{ color: "#169E36" }} />
                          TOC
                        </Header>

                        <div
                          className="catalog"
                          style={{ display: "inline-block" }}
                          dangerouslySetInnerHTML={{ __html: a.catalogueBody }}
                        ></div>
                        <Divider />
                      </>
                    )}
                    {
                      <div
                        style={{ maxWidth: "960px" }}
                        className="markdown-body"
                        dangerouslySetInnerHTML={{
                          __html: a.contentBody,
                        }}
                      ></div>
                    }
                    <Spacing />
                    {a.categories && a.tags && (
                      <>
                        <Container fluid>
                          <Grid>
                            <Grid.Row>
                              <Grid.Column width={5}>
                                {/* <Icon name="bookmark" color="blue" /> */}
                                {a.categories.map((c, index) => (
                                  <span key={c.id}>
                                    <span>
                                      <a
                                        href={"/category/" + c.category}
                                        className="post-category"
                                      >
                                        #{c.category}
                                      </a>
                                    </span>
                                  </span>
                                ))}
                              </Grid.Column>

                              <Grid.Column width={11}>
                                {/* <Icon name="tag" color="blue" /> */}
                                {a.tags.map((t, index) => (
                                  <>
                                    <span key={t.id}>
                                      <a
                                        href={"/tag/" + t.tag}
                                        className="post-tag"
                                      >
                                        #{t.tag}
                                      </a>
                                    </span>
                                  </>
                                ))}
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Container>
                      </>
                    )}
                    <Spacing />
                  </div>
                )
            )
          ) : (
            <Loader style={{ marginTop: "30%" }} active inline="centered" />
          )}
          {props.focus && props.response.list && (
            <Container style={{ marginTop: "2.5em" }}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5} textAlign="right">
                    {props.response.list.map((e, index) => (
                      <>
                        {e && e.prevPost && (
                          <a
                            key={e.prevPost.id}
                            href={"/post/" + e.prevPost.id}
                            className="post-previous-next"
                          >
                            <Icon name="angle left" size="big"></Icon>
                            {e.prevPost.title}
                          </a>
                        )}
                      </>
                    ))}
                  </Grid.Column>
                  <GridColumn width={4}>&nbsp;</GridColumn>
                  <Grid.Column width={5} textAlign="left">
                    {props.response.list.map((e, index) => (
                      <>
                        {e && e.nextPost && (
                          <a
                            key={e.nextPost.id}
                            href={"/post/" + e.nextPost.id}
                            className="post-previous-next"
                          >
                            {e.nextPost.title}
                            <Icon name="angle right" size="big"></Icon>
                          </a>
                        )}
                      </>
                    ))}
                    <GridColumn width={2} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          )}
        </Container>
        {props.response.totalPage > 1 && props.activePage && (
          <Container textAlign="center" style={{ marginTop: "2em" }}>
            <Pagination
              totalPages={props.response.totalPage}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              activePage={props.activePage}
              onPageChange={handlePaginationClick}
            />
          </Container>
        )}
        {/* <Button className="back-to-top" icon="chevron up" size="big"></Button> */}
      </>
    </>
  );
}
