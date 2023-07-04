import { Text, View, StyleSheet, Pressable } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function HomePage({ navigation }) {
    // const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Page</Text>

            <Pressable style={styles.aboutButton} onPress={() => navigation.navigate('AboutPage')}>
                <Text>Go to About Page</Text>
            </Pressable>
        </View>
    );
}

export default HomePage;

// navigation.navigate('AboutPage', { categoryId: itemData.item.id }) <<<<<<< example passing data to the next screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
    },
    aboutButton: {
        backgroundColor: "blue",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        color: "white",
    },
});