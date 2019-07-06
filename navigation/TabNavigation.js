import React from "react";
import { Platform } from "react-native";
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import MoviesScreen from "../screens/Movie";
import TVScreen from "../screens/TV";
import Location from '../screens/Location';
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import { createStack } from "./config";



const TabNavigation = createBottomTabNavigator(
    {
        Movie: { 
            screen : createStack(MoviesScreen, "Movies"), 
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon 
                        focused={focused} 
                        name={Platform.OS === "ios" ? "ios-film" : "md-film"} 
                    />
                )
            }
        },
        TV: { 
            screen : createStack(TVScreen, "TV"),
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon 
                        focused={focused} 
                        name={Platform.OS === "ios" ? "ios-tv" : "md-tv"} 
                    />
                ) 
            }
        },
        Location: {
            screen: createStack(Location, "지역 선택"),
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-map" : "md-map"}
                    />
                )
            }
        },
        Search: { 
            screen : createStack(SearchScreen, "Search"),
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon 
                        focused={focused} 
                        name={Platform.OS === "ios" ? "ios-search" : "md-search"} 
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }

);

export default createAppContainer(TabNavigation);