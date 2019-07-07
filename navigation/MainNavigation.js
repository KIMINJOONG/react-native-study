import {createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import UserJoinScreen from '../screens/UserJoin';
import { headerStyles } from "./config";
import UserLoginScreen from "../screens/UserLogin";

const MainNavigation = createStackNavigator(
    {   
        UserLogin: {
            screen: UserLoginScreen,
            navigationOptions: {
                ...headerStyles,
                title: '로그인',
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-man" : "md-man"}
                    />
                )
            }
        },
        Tabs:{
            screen: TabNavigation, navigationOptions: {header: null},
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