import { MENU_ITEMS } from "./Menu";

const Section = ({ section, setOrderItems }) => {
  const menuItems = MENU_ITEMS.filter((item) => item.section === section);
  const addToOrder = (item) => {
    setOrderItems((order) => [...order, item]);
  };

  return (
    <div className="flex">
      <div className="w-1/5 flex items-center">
        <h2>{section}</h2>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full">
        {menuItems.map((item, index) => (
          <button
            onClick={() => addToOrder(item)}
            className="border rounded-lg h-24 text-center flex flex-col items-center justify-center hover:bg-slate-200"
            key={index}
          >
            <div>{item.name}</div>
            <div>{item.price} €</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Section;
