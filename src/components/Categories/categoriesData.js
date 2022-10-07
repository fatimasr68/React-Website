import { faObjectGroup } from "@fortawesome/free-regular-svg-icons";

import {
  faLaptopCode,
  faServer,
  faMobileScreen,
  faDatabase,
  faGlobe,
  faBrain,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

const categoriesData = [
  {
    _id: "1",
    title: "طراحی UX / UI",
    count: 35,
    icon: faObjectGroup,
  },
  {
    _id: "2",
    title: "برنامه نویسی وب",
    count: 45,
    icon: faLaptopCode,
  },
  {
    _id: "3",
    title: "تحت ویندوز",
    count: 32,
    icon: faServer,
  },
  {
    _id: "4",
    title: "برنامه نویسی موبایل",
    count: 24,
    icon: faMobileScreen,
  },
  {
    _id: "5",
    title: "بانک اطلاعاتی",
    count: 26,
    icon: faDatabase,
  },
  {
    _id: "6",
    title: "شبکه و امنیت",
    count: 15,
    icon: faGlobe,
  },
  {
    _id: "7",
    title: "هوش مصنوعی",
    count: 10,
    icon: "fluent:brain-circuit-20-filled",
  },
  {
    _id: "8",
    title: "دیتاساینس",
    count: 15,
    icon: faChartPie,
  },
];

export default categoriesData;
