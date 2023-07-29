import dynamic from "next/dynamic";

//components

const SwapWindow = dynamic(() => import("./components/swap-window"));

//styles
import Button from "@mui/material/Button";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MainMainPage } from "./styles";

import { IUserSlice } from "@/store/slices/all-users-slice";
import { ICoinsSlice } from "@/store/slices/coins-slice";
import { useReducer } from "react";

interface IMainPageView {
  allUsers: IUserSlice;
  coins: ICoinsSlice;
  getAllUsers: () => void;
}

// const initialInputsData = [
//   {
//     id: 1,
//     value: "",
//   },
//   {
//     id: 2,
//     value: "",
//   },
// ];

const initialInputsData = {
  input1:{
    id: 1,
    value: "",
  },

  input2:{
    id: 1,
    value: "",
  }
}


interface IAction { type: keyof typeof initialInputsData; id: number, value:string }


const reducer = (state: typeof initialInputsData, action:IAction) => {
  return {...state, [action.type]: action.value}
};

const MainPageView: React.FC<IMainPageView> = (props) => {
  const { allUsers, coins, getAllUsers } = props;
  const { users } = allUsers;
  const { coinsList } = coins;
  const [inputsData, dispatch] = useReducer(reducer, initialInputsData);

  console.log("coins", coins);

  const swapInputs = [
    {stateValue: inputsData.input1.value, onValueChange: (value:string) =>  dispatch({ type: "input1", id: inputsData.input1.id, value })}
  ]

  return (
    <MainMainPage>
      <div className=" m-10 flex flex-col items-center justify-center gap-y-3 max-w-[1200px] w-full h-full mx-auto">
        <Button className="mt-10" variant="outlined" onClick={getAllUsers}>
          Get All users
        </Button>

        {users && (
          <List dense={false}>
            {users.map((user, index) => (
              <ListItem key={`${user.id}_${index}`}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={user.email} />
              </ListItem>
            ))}
          </List>
        )}

        {coinsList && <SwapWindow coinsList={coinsList} swapInputs={swapInputs}/>}
      </div>
    </MainMainPage>
  );
};

export default MainPageView;
