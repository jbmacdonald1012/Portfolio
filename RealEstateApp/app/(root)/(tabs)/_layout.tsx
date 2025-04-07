import {View, Text, Image} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";

import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, title }:
                 {focused: boolean, icon: any, title: string}) => (
    <View className="flex-1 mt-3 flex flex-col items-center">
        <Image
            source={icon}
            tintColor={focused ? '#0061ff' : '#666876'}
            resizeMode="contain"
            className="size-7"
        />
        <Text className={`${focused ? 
            "text-primary-300 font-rubik-medium" : "text-black-200 font-rubik"} text-[10px] text-center mt-0.5`}>
            {title}
        </Text>
    </View>
)

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopColor: '#0061FF1A',
                    borderTopWidth: 1,
                    minHeight: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }: {focused: boolean}) => (
                        <TabIcon focused={focused} icon={icons.home} title="Home" />
                    )
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    headerShown: false,
                    tabBarIcon: ({ focused }: {focused: boolean}) => (
                        <TabIcon focused={focused} icon={icons.search} title="Explore" />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }: {focused: boolean}) => (
                        <TabIcon focused={focused} icon={icons.person} title="Profile" />
                    )
                }}
            />
        </Tabs>
    )
}
export default TabsLayout
