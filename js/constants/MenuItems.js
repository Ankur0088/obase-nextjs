import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";

export const MenuItems = [
  {
    label: "Metric Builder",
    key: "/metric-builder",
    icon: <MailOutlined />,
    children: [
      {
        label: <Link href="/metric-builder/metric-template">Metric Templates</Link>,
        key: "/metric-builder/metric-template",
      },
      { label: <Link href="/metric-builder/groups">Groups</Link>, key: "/metric-builder/groups" },
      { label: <Link href="/metric-builder/tags">Tags</Link>, key: "/metric-builder/tags" },
    ],
  },
  {
    label: "Conductor Service",
    key: "/conductor-service",
    icon: <AppstoreOutlined />,
    children: [
      { label: "Scheduler", key: "/conductor-service/schedular" },
      { label: "Worker Nodes", key: "/conductor-service/worker-nodes" },
    ],
  },
];
