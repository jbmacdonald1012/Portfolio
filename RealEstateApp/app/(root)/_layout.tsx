import {useGlobalContext} from "@/lib/globalProvider";
import {ActivityIndicator, SafeAreaView} from "react-native";
import {Navigator, Redirect, Stack} from "expo-router";
import Slot = Navigator.Slot;

export default function Layout() {
    const { loading, isLoggedIn } = useGlobalContext();

    if (loading) {
        return (
            <SafeAreaView className="bg-white h-full flex justify-center items-center">
                <ActivityIndicator className="text-primary-300" size="large" />
            </SafeAreaView>
        )
    }

    if (!isLoggedIn) return <Redirect href="/sign-in" />;

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'fade',
            }}
        />
    );
}