import { MENU_ITEMS } from "../config";
import Section from "./Section";
import { uniq } from "lodash-es";

const SECTIONS = uniq(MENU_ITEMS.map((item) => item.section));

const Menu = ({ setOrderItems }) => {
  return (
    <div className="flex flex-col gap-4">
      {SECTIONS.map((section, index) => (
        <Section key={index} section={section} setOrderItems={setOrderItems} />
      ))}
    </div>
  );
};

export default Menu;
