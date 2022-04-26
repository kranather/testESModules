
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const grid = new Grid({
    columns: ["Name", "Email", "Phone Number", "Thumbnail"],
    data: [
      ["John", "john@example.com", "(353) 01 222 3333", "https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444", "https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png"],
      ["Eoin", "eoin@gmail.com", "0097 22 654 00033", "https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png"],
      ["Sarah", "sarahcdd@gmail.com", "+322 876 1233", "https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png"],
      ["Afshin", "afshin@mail.com", "(353) 22 87 8356", "https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png"]
    ]
  }).render(document.getElementById("wrapper"));