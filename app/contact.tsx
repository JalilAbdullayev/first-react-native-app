import {StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {IconSymbol} from '@/components/ui/IconSymbol';

const Contact = () =>
    <ParallaxScrollView headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
                        headerImage={<IconSymbol size={310} color="#808080" style={styles.headerImage}
                                                 name="coffee"/>}>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">
                Coffee Shop
            </ThemedText>
        </ThemedView>
        <ThemedText>
            555 Coffee Lane
        </ThemedText>
        <ThemedText>
            Kansas City, KS 55555-1234
        </ThemedText>
        <ThemedText>
            Phone:
        </ThemedText>
        <ThemedText>
            555-555-5555
        </ThemedText>
        <ThemedText>
            or Click Here to Text
        </ThemedText>
        <ThemedText>
            Hours:
        </ThemedText>
        <ThemedText>
            Open 6:00 to 16:00 daily
        </ThemedText>
    </ParallaxScrollView>

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});

export default Contact;