import React, { useEffect, useState } from "react";
import { phone } from "../shared/restaurantInfo";
import { Checkbox } from "semantic-ui-react";

import styled from "styled-components";

const Td = styled.td`
  padding: 20px;
`;
const Th = styled.th`
  padding: 20px;
`;

const subMenu = (title, items) => {
  console.log("received items: ", { title, items });
  return (
    <div>
      <h1>{title || "title"}</h1>
      <table style={{ textAlign: "left", width: "100%" }}>
        <tbody>
          <tr
            style={{ backgroundColor: "red", textAlign: "left", width: "100%" }}
          >
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Active</Th>
            <Th>Delete</Th>
          </tr>
          {items.map(item => {
            const { desc, title, active, subMenu, price } = item;
            console.log("item:", item);
            return (
              <tr key={title}>
                <Td>
                  <input
                    style={{ width: "100%", border: "none" }}
                    value={title}
                  ></input>
                </Td>
                <Td>
                  <input style={{ width: "100%" }} value={desc}></input>
                </Td>
                <Td>
                  <p>{price || " - "}</p>
                </Td>
                <Td>
                  <Checkbox className="toggle" type="radio"></Checkbox>
                </Td>
                <Td>
                  <button>Delete</button>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const MenuEdit = () => {
  const [fullMenu, setFullMenu] = useState(null);

  useEffect(() => {
    console.log(" in useEffect");
    fetch("/menuitems")
      .then(async res => {
        try {
          return await res.json();
        } catch (e) {
          console.error("error parsing json: ", e);
        }
      })
      .then(res => setFullMenu([...res.fullMenu]));

    return () => {};
  }, []);

  useEffect(() => {
    console.log("full menu updated: ", fullMenu);
  }, [fullMenu]);

  return (
    <div>
      <h1>Fuck a CMS</h1>
      <div>
        {fullMenu &&
          subMenu(
            "Antipasti",
            fullMenu.filter(item => {
              console.log("ITEM:", item);
              return item.subMenu === "antipasti";
            })
          )}
      </div>
      <div>
        {fullMenu &&
          subMenu(
            "Insalata",
            fullMenu.filter(item => {
              console.log("ITEM:", item);
              return item.subMenu === "insalata";
            })
          )}
      </div>
      <div>
        {fullMenu &&
          subMenu(
            "Pasta",
            fullMenu.filter(item => {
              console.log("ITEM:", item);
              return item.subMenu === "pasta";
            })
          )}
      </div>
      <div>
        {fullMenu &&
          subMenu(
            "pizza",
            fullMenu.filter(item => {
              console.log("ITEM:", item);
              return item.subMenu === "pizza";
            })
          )}
      </div>
      <div>
        {fullMenu &&
          subMenu(
            "Secondi",
            fullMenu.filter(item => {
              console.log("ITEM:", item);
              return item.subMenu === "secondi";
            })
          )}
      </div>
      <div>
        {fullMenu &&
          subMenu(
            "Contorni",
            fullMenu.filter(item => {
              console.log("ITEM:", item);
              return item.subMenu === "contorni";
            })
          )}
      </div>
    </div>
  );
};
