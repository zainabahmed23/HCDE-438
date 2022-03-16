import { useMemo, useState } from "react";  
import { DropDownList } from "@progress/kendo-react-dropdowns";  
  
// Dropdown categories  
const categories = ["Suzallo", "HUB", "HUB Ground Floor", "Oddegard"];  
  
  
// Results data filtered using categories  
const data = [  
  {  
    id: 1,  
    label: "HUB Ground Floor Machine",  
    type: "vendingmachine",  
  },  
  {  
    id: 2,  
    label: "HUB Main Floor Machines",  
    type: "vendingmachine",  
  },  
  {  
    id: 3,  
    label: "Odegaard Library Central Machines",  
    type: "vendingmachine",  
  },  
  {  
    id: 4,  
    label: "Paul G. Allen Machines",  
    type: "vendingmachine",  
  },  
  {  
    id: 5,  
    label: "Denny Hall Machines",  
    type: "vendingmachine",  
  },  
];  
  
export const UWDropDownList = () => {  
  // Store currently selected category  
  const [category, setCategory] = useState("");  
  
  // Memoized results. Will re-evaluate any time selected  
  // category changes  
  const filteredData = useMemo(() => {  
    if (!category || category === "all") return data;  
  
    return data.filter(item => item.type === category);  
}, [category]);  
  

  return (
    <section className="k-my-8">
      <form className="k-form k-mb-4">
        <label className="k-label k-mb-3">Category</label>
        <DropDownList data={categories} onChange={e => setCategory(e.value)} />
      </form>

      <section className="k-listgroup">
        <ul>
          {filteredData.map(item => {
            return (
              <li key={item.id} className="k-listgroup-item">
                {item.label}
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

