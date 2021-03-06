import { lowerCase } from "lodash";
import React, { useCallback, useMemo } from "react";
import { useSearch } from "../../hook/useSearch";
import { SearchItem } from "./searchItem";
import { StaticQuery, graphql } from "gatsby";
import { debounce } from "../../utils/event-manager/debounce";
import "./index.scss";

const Search = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const [search, changeSearch] = useSearch();
        const filterdData = data.allMarkdownRemark.edges.filter(
          ({
            node: {
              frontmatter: { title },
            },
            node,
          }) => {
            if (
              lowerCase(title)
                .replace(/ /g, "")
                .includes(lowerCase(search).replace(/ /g, ""))
            ) {
              return node;
            }
          }
        );

        // search debouncing
        const debounceAct = useMemo(() => debounce(), []);
        const onChange = useCallback(
          e => {
            const callback = () => {
              changeSearch(e.target.value);
            };
            debounceAct(callback, 300);
          },
          [changeSearch, debounceAct]
        );

        // prevent click event flow
        const onClick = useCallback(e => {
          e.stopPropagation();
        }, []);

        return (
          <div className="searchWrap">
            <input
              type="text"
              className="search"
              onChange={onChange}
              onClick={onClick}
              placeholder="search post..."
            />
            {filterdData.length !== 0 && search && (
              <div className="searchList">
                <div className="searchArea">
                  {filterdData.map(({ node }, index) => {
                    const {
                      fields: { slug },
                      frontmatter: { title },
                    } = node;

                    return (
                      <SearchItem
                        slug={slug}
                        title={title}
                        key={`searchItem${index}`}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

export default React.memo(Search, (prev, next) => {
  if (prev.length === next.length) return true;
  return false;
});

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200, truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            draft
            tag
          }
        }
      }
    }
  }
`;
