import { ReactElement } from "react";

export type RouteDetailsT = {
  name: string;
  icon: ReactElement;
  path: string;
  component: ReactElement;
  section: string;
};

export type ModalContainerPropsT = {
  action?: string;
  open: boolean;
  handleCancel: any;
};
