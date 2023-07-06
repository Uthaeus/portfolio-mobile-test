import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import BlogItem from "../components/Blogs/BlogItem";

function BlogsIndex() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.log('blogs index error:', error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Blogs Index</Text>

            <FlatList data={blogs} renderItem={({ item }) => <BlogItem blog={item} />} keyExtractor={item => item.id.toString()} />
        </View>
    );
}

export default BlogsIndex;

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