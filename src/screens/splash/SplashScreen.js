import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { COLORS } from '../../constants/theme';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image 
          source={require('../../img_assets/1.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  logo: {
    position: 'absolute', // Để dùng tọa độ chính xác
    width: 267.42, 
    height: 68.61,
    top: 413.7,    // Figma Top
    left: 73.29,   // Figma Left (đã sửa lỗi viết hoa)
  },
});