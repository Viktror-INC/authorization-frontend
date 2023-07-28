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

interface IMainPageView {
  allUsers: IUserSlice;
  coins: ICoinsSlice;
  getAllUsers: () => void;
}

const MainPageView: React.FC<IMainPageView> = (props) => {
  const { allUsers, coins, getAllUsers } = props;
  const { users } = allUsers;
  const { coinsList } = coins;

  console.log("coins", coins);

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

        {coinsList && <SwapWindow coinsList={coinsList} />}
      </div>
    </MainMainPage>
  );
};

export default MainPageView;
