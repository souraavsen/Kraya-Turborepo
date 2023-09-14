export type RoleBasedUserDetailsT = {
  role_name: string;
  permissions: string;
  status: number;
};

export type ModulePermissionsDataT = {
  module_name: string;
  create: boolean | number;
  read: boolean | number;
  update: boolean | number;
  delete: boolean | number;
};

export type RoleBasedUsersPropsT = {
  setIsEditUserRoleOpen: any;
  setIsDeleteModuleOpen: any;
};
