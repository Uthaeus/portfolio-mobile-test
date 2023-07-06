import { Text, View, StyleSheet } from "react-native";

function BlogItem({ blog }) {
    function truncate(str) {
        return str.length > 50 ? str.substring(0, 47) + "..." : str;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blog.title}</Text>
            <Text style={styles.body}>{truncate(blog.body)}</Text>
        </View>
    );
}

export default BlogItem;

const styles = StyleSheet.create({
    container: {
        maxHeight: 80,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        padding: 20,
    },
});