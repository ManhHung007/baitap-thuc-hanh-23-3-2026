import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

export default function ScreenWrapper({ children }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        {children}
        
        {/* THANH HOME BAR GIẢ LẬP (148 x 16) */}
        <View style={styles.homeBarContainer}>
          <View style={styles.homeBar} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Màu nền ngoài màn hình app
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: SIZES.width, // Cố định 414px
    height: SIZES.height, // Cố định 896px
    backgroundColor: COLORS.white,
    borderRadius: 0, // Bo góc màn hình
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  homeBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: SIZES.width,
    height: 34, // Khu vực an toàn dưới đáy
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBar: {
    width: 148, // Chiều rộng 148px theo yêu cầu
    height: 5, // Chiều cao chuẩn thanh ngang iOS
    backgroundColor: COLORS.black,
    borderRadius: 100,
  },
});