import Section from "./Section";
import { uniq } from "lodash-es";

export const MENU_ITEMS = [
  { section: "Burger", name: "Le Suricate", price: 8 },
  { section: "Burger", name: "L'Original", price: 8 },
  { section: "Burger", name: "Le Pouli", price: 8 },
  { section: "Burger", name: "Burger du Moment", price: 8 },
  { section: "Accompagnements", name: "Frites Maison", price: 3 },
  { section: "Boissons", name: "Coca Cola 33 Cl", price: 2 },
  { section: "Boissons", name: "Coca Zero 33 Cl", price: 2 },
  { section: "Boissons", name: "Orangina 33 Cl", price: 2 },
  { section: "Boissons", name: "Sprite 33 Cl", price: 2 },
  { section: "Boissons", name: "Oasis Orange 33 Cl", price: 2 },
  { section: "Boissons", name: "Lipton Ice Tea 33 Cl", price: 2 },
  { section: "Boissons", name: "Eau Minérale 50 Cl", price: 1.5 },
  { section: "Boissons", name: "Eau Pétillante 50 Cl", price: 1.5 },
  { section: "Desserts", name: "Cookies", price: 2 },
  { section: "Desserts", name: "Moelleux Chocolat", price: 2 },
  { section: "Desserts", name: "Panacotta", price: 2 },
  { section: "Desserts", name: "Salade de Fruits", price: 2 },
  { section: "Café", name: "Café", price: 1.5 },
];

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
