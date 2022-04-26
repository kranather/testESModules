
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const grid = new Grid({
    columns: ['Name', 'Email', 'Phone Number'],
    search: true,
    data: [
      ['John', 'john@example.com', '(353) 01 222 3333'],
      ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
      ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
      ['Nisen', 'nis900@gmail.com',   '313 333 1923']
    ]
  });