import { ModulePermissionsDataT, RoleBasedUserDetailsT } from "../types";

export const RoleBasedUserData: RoleBasedUserDetailsT[] = [
  {
    role_name: "Super Admin",
    permissions: "All ModulesAll Permissions",
    status: 1,
  },
  {
    role_name: "Admin",
    permissions:
      "Module 1, Module 2, Module 3, Module 4, Module 5, Module 6, Module 7, Module 8, Module 9, Module 10, Module 11, Module 12",
    status: 0,
  },
  {
    role_name: "Moderator",
    permissions:
      "Module 1, Module 2, Module 3, Module 4, Module 5, Module 6, Module 7",
    status: 0,
  },
  {
    role_name: "Stuff",
    permissions:
      "Module 7, Module 8, Module 9, Module 10, Module 11, Module 12",
    status: 1,
  },
  {
    role_name: "Super Admin",
    permissions: "All ModulesAll Permissions",
    status: 1,
  },
  {
    role_name: "Admin",
    permissions:
      "Module 1, Module 2, Module 3, Module 4, Module 5, Module 6, Module 7, Module 8, Module 9, Module 10, Module 11, Module 12",
    status: 0,
  },
  {
    role_name: "Moderator",
    permissions:
      "Module 1, Module 2, Module 3, Module 4, Module 5, Module 6, Module 7",
    status: 1,
  },
  {
    role_name: "Stuff",
    permissions:
      "Module 7, Module 8, Module 9, Module 10, Module 11, Module 12",
    status: 1,
  },
];

export const modulePersmisisonData: ModulePermissionsDataT[] = [
  {
    module_name: "All Modules",
    create: 1,
    read: 1,
    update: 1,
    delete: 1,
  },
  {
    module_name: "Modules 1",
    create: 0,
    read: 1,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 2",
    create: 1,
    read: 1,
    update: 0,
    delete: 1,
  },
  {
    module_name: "Modules 3",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 4",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 5",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 6",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 7",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 8",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 9",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 10",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 11",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
  {
    module_name: "Modules 12",
    create: 0,
    read: 0,
    update: 0,
    delete: 0,
  },
];
