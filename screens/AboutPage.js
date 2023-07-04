
import { View, Text, StyleSheet } from "react-native"
// import { useRoute } from "@react-navigation/native"; << using hook instead of props

function AboutPage({ route, navigation }) {
    // const route = useRoute(); << using hook instead of props

    // const catId = route.params.categoryId; <<<< example getting data from the previous screen - HomePage.js << only usable with screen components when using stack navigator

    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Page</Text>
        </View>
    )
}

export default AboutPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
    },
});