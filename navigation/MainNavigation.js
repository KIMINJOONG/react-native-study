import {createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import UserJoinScreen from '../screens/UserJoin';
import UserDetailScreen from '../screens/UserDetail';
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
    {
        Tabs:{
            screen: TabNavigation, navigationOptions: {header: null},
        },
        UserDetail: {
            screen: UserDetailScreen,
            navigationOptions: {
                ...headerStyles,
            }
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                ...headerStyles,
            }
        },
        UserJoin: {
            screen: UserJoinScreen,
            navigationOptions: {
                ...headerStyles,
            }
        }
    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
);

export default createAppContainer(MainNavigation);