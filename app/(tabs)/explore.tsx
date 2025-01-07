import {StyleSheet, Text, View} from "react-native";

const Explore = () =>
    <View style={styles.container}>
        <Text style={styles.text}>
            Central Perk
        </Text>
        <Text style={styles.text}>
            Address: 123 Main St, New York, USA
        </Text>
        <Text style={styles.text}>
            Hours: Monday to Friday, 9am to 5pm
        </Text>
    </View>

export default Explore;

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginLeft: 16
    },
    text: {
        color: 'white'
    }
});