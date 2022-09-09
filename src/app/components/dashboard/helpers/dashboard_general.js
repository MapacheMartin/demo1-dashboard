import * as moment from "moment";
moment.locale("es-Mx");
var currentTime = moment().format("dddd DD [de] MMMM");
export const dashboard_general = [
  {
    cols: 4,
    rows: 1,
    y: 0,
    x: 0,
    label: "Bienvenido al ERP Erus",
    class: "bg-blue",
    type: "welcome",
    currentTime: currentTime,
    dragEnabled: false,
    resizeEnabled: false,
  },
  {
    cols: 2,
    rows: 2,
    y: 0,
    x: 4,
    type: "profile",
    minItemRows: 2,
  },
  {
    cols: 2,
    rows: 3,
    y: 2,
    x: 4,
    type: "ventas",
    minItemCols: 2,
    show: "ventas",
  },

  {
    cols: 4,
    rows: 2,
    y: 1,
    x: 0,
    type: "achievements",
    minItemRows: 2,
    minItemCols: 3,
    show: "ventas",
  },

  {
    cols: 4,
    rows: 2,
    y: 3,
    x: 0,
    type: "canales",
    minItemRows: 2,
    minItemCols: 2,
    show: "ventas",
  },
];
