export type UserDetailsT = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone_no: string;
  role: string;
  user_group: string;
  status: number;
  avatar: string;
};

export type SearchBoxPropsT = {
  placeholder: string;
  name: string;
  id: string;
  onChange: any;
};

// export type AddUserPropsT = {
//   action: string;
//   open: boolean;
//   handleCancel: any;
// };

export type UserDetailsPropsT = {
  setIsEditUserOpen: any;
  setIsDeleteUserOpen: any;
};
