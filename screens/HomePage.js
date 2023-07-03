import { Text, View, StyleSheet, Pressable } from "react-native";

function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Page</Text>

            <Pressable style={styles.aboutButton}>
                <Text>Go to About Page</Text>
            </Pressable>
        </View>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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