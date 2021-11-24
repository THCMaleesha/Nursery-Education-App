import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    illustration:
      'https://image.freepik.com/free-vector/kids-children-boys-girl-abc-school-illustration_215960-53.jpg',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/A%20Lettere%20Adesive%20Occhietti72.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/B%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/C%20Lettere%20Adesive%20Occhietti4.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/D%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/E%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/F%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/G%20Lettere%20Adesive%20Occhietti1.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/H%20Lettere%20Adesive%20Occhietti1.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/I%20Lettere%20Adesive%20Occhietti6.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/J%20Lettere%20Adesive%20Occhietti8.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/K%20Lettere%20Adesive%20Occhietti3.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/L%20Lettere%20Adesive%20Occhietti3.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/M%20Lettere%20Adesive%20Occhietti8.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/N%20Lettere%20Adesive%20Occhietti9.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/O%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/P%20Lettere%20Adesive%20Occhietti9.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/Q%20Lettere%20Adesive%20Occhietti7.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/R%20Lettere%20Adesive%20Occhietti5.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/S%20Lettere%20Adesive%20Occhietti8.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/T%20Lettere%20Adesive%20Occhietti7.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/U%20Lettere%20Adesive%20Occhietti6.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/V%20Lettere%20Adesive%20Occhietti6.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/W%20Lettere%20Adesive%20Occhietti3.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/X%20Lettere%20Adesive%20Occhietti7.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/Y%20Lettere%20Adesive%20Occhietti7.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/Z%20Lettere%20Adesive%20Occhietti8.png',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const Slider_Alp = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  const goBackward = () => {
    carouselRef.current.snapToPrev();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View container>
      <View style={styles.slider}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
      <View style={styles.navigator}>
        <View style={styles.card1}>
          <TouchableOpacity onPress={goBackward}>
            <Text style={styles.slider_text1}>Prev</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card2}>
          <TouchableOpacity onPress={goForward}>
            <Text style={styles.slider_text1}>next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Slider_Alp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0f7e6',
  },
  slider: {
    flex: 1,
    backgroundColor: '#d0f7e6',
    marginTop: 20,
  },
  navigator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0f7e6',
    marginBottom: 15,
  },
  item: {
    width: screenWidth - 55,
    height: screenWidth + 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0f7e6',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 20,
    width: 370,
  },
  image: {
    width: 100,
    height: 200,
  },
  slider_text1: {
    color: '#228257',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 15,
  },
  subtitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'auto',
  },
  card1: {
    width: 100,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#83e6b9',
    borderRadius: 15,
    marginRight: 50,
  },
  card2: {
    width: 100,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#83e6b9',
    borderRadius: 15,
  },
});
