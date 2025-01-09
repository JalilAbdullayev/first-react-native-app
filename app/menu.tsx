import {Appearance, FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Colors} from "@/constants/Colors";
import {menu_items, MenuItem} from "@/constants/MenuItems";
import menu_images from "@/constants/MenuImages";

const MenuScreen = () => {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const separatorComponent = <View style={styles.separator}/>
    const headerComponent = <Text>
        Top of Menu
    </Text>
    const footerComponent = <Text style={{color: theme.text}}>
        End of Menu
    </Text>

    return (
        <Container>
            <FlatList data={menu_items} keyExtractor={(item: MenuItem) => item.id.toString()}
                      showsVerticalScrollIndicator={false} contentContainerStyle={styles.cotentContainer}
                      ItemSeparatorComponent={separatorComponent} ListHeaderComponent={headerComponent}
                      ListFooterComponent={footerComponent} ListFooterComponentStyle={styles.footerComponent}
                      ListEmptyComponent={<Text>
                          No Items
                      </Text>}
                      renderItem={({item}) => <View style={styles.row}>
                          <View style={styles.menuTextRow}>
                              <Text style={[styles.menuItemText, styles.menuItemTitle]}>
                                  {item.title}
                              </Text>
                              <Text style={styles.menuItemText}>
                                  {item.description}
                              </Text>
                          </View>
                          <Image source={menu_images[item.id - 1]} style={styles.menuImage}/>
                      </View>}/>
        </Container>
    );
};

const createStyles = (theme, colorScheme) => StyleSheet.create({
    cotentContainer: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 12,
        backgroundColor: theme.background
    },
    separator: {
        height: 1,
        backgroundColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
        width: '50%',
        maxWidth: 300,
        marginHorizontal: 'auto',
        marginBottom: 10
    },
    footerComponent: {
        marginHorizontal: 'auto'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        maxWidth: 600,
        height: 100,
        marginBottom: 10,
        borderStyle: 'solid',
        borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
        borderWidth: 1,
        borderRadius: 20,
        overflow: "hidden",
        marginHorizontal: 'auto'
    },
    menuTextRow: {
        width: '65%',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 5,
        flexGrow: 1
    },
    menuItemTitle: {
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    menuItemText: {
        color: theme.text
    },
    menuImage: {
        width: 100,
        height: 100
    }
});

export default MenuScreen;