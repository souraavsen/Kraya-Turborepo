// import React from "react";
// import { InputPropsT } from "../lib/types";

// const Input: React.FC<InputPropsT> = ({
//   id,
//   extraClassName,
//   name,
//   placeholder,
//   icon,
//   onChange,
//   ...rest
// }) => {
//   return (
//     <div className='w-auto flex items-center xl:border rounded-md font-Inter'>
//       {/* className='xl:w-[20rem] 3xl:w-[28rem] flex items-center xl:my-2 3xl:ml-4 px-2 xl:px-4 xl:border rounded-md font-Inter'> */}
//       {icon}
//       <input
//         className={`${
//           extraClassName
//             ? extraClassName
//             : "w-0 xl:w-auto focus:w-72 focus:xl:w-64"
//         } py-2 3xl:py-3 px-2 3xl:px-4 bg-bkg-primary text-content-primary rounded-lg border-none focus:border-none outline-none focus:outline-none text-sm 3xl:text-base font-normal`}
//         // className='w-0 xl:w-auto focus:w-72 focus:xl:w-64 py-2 3xl:py-3 pl-2 pr-3 3xl:px-4 bg-bkg-primary text-content-primary rounded-lg border-none focus:border-none outline-none focus:outline-none text-sm 3xl:text-base font-normal'
//         placeholder={placeholder}
//         type='text'
//         // onKeyUp={onChange}
//         name={name}
//         id={id}
//         {...rest}
//       />
//     </div>
//   );
// };

// export default Input;
