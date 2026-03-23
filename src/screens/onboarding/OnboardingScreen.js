import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { COLORS } from '../../constants/theme';

export default function OnboardingScreen({ navigation }) {
  return (
    <ScreenWrapper>
      {/* Nền Background Onboarding */}
      <ImageBackground 
        source={require('../../img_assets/3.jpg')} 
        style={styles.background}
      >
        {/* NƠI THAY CÀ RỐT TRẮNG TRANG SPLASH */}
        {/* Thay emoji 🥕 bằng Image, dùng chung file ảnh logo trắng của trang Splash */}
        <Image 
          source={require('../../img_assets/2.png')} 
          style={styles.logoCarrotWhite}
          resizeMode="contain"
        />

        {/* Chữ Chào mừng */}
        <Text style={styles.title}>Welcome{"\n"}to our store</Text>
        
        {/* Chữ Slogan phụ */}
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

        {/* NÚT BẤM GET STARTED */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')} // Chuyển sang màn SignIn
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        
      </ImageBackground>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  background: {
    width: 414, // Chiều rộng cố định 414px
    height: 896, // Chiều cao cố định 896px
  },
  
  // STYLE MỚI CHO CÀ RỐT TRẮNG - Đặt chính xác tại Top 485
  logoCarrotWhite: {
    position: 'absolute', // Bắt buộc dùng để đặt tọa độ tuyệt đối
    width: 48.47, // Giữ nguyên chiều rộng của logo từ trang Splash
    height: 56.36, // Giữ nguyên chiều cao của logo từ trang Splash
    top: 485.26, // Vị trí x theo trục tung (Top)
    left: 182.76,
    alignSelf: 'center', // Căn giữa theo trục hoành (Left/Right)
  },

  title: {
    // Layout - Đã sửa lỗi đè chữ và tràn viền
    position: 'absolute',
    width: 253, // Chiều rộng chữ
    height: 86, // Chiều cao chữ (ước lượng)
    top: 577.28, // Top Figma
    left: 80.5, // Left Figma (Căn giữa 414px)
    // Typography
    fontSize: 48,
    lineHeight: 48, // line-height 29px với size 48px sẽ bị đè chữ, tôi để 48px để an toàn
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'Gilroy-SemiBold', // Giả định bạn đã cài font
  },
  subtitle: {
    // Layout
    position: 'absolute',
    width: 295,
    height: 15, // line-height 15px bằng height 15px để không tràn viền dọc
    top: 682.28, // Top Figma
    left: 59.5, // Tính toán left để căn giữa: (414 - 295) / 2
    // Typography
    fontSize: 16,
    lineHeight: 15,
    textAlign: 'center',
    color: '#FCFCFC',
    opacity: 0.7, // Độ mờ của chữ slogan
  },
  button: {
    // Layout - Nút Get Started
    position: 'absolute',
    width: 353, // Chiều rộng nút
    height: 67, // Chiều cao nút
    top: 738.16, // Top Figma
    left: 30.5, // Left Figma (Căn giữa 414px)
    // Style
    backgroundColor: COLORS.primary, // Xanh lá Nectar (#53B175)
    borderRadius: 19, // Bo góc nút
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy-SemiBold',
  },
});