import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { COLORS } from '../../constants/theme';

export default function LoginScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <ScrollView bounces={false} contentContainerStyle={styles.container}>
        
        {/* LOGO CÀ RỐT - Đã sửa theo yêu cầu */}
        <Image 
          source={require('../../img_assets/carrot.png')} // Đảm bảo tên file ảnh trong thư mục img_assets là logo_carrot.png
          style={styles.logo}
          resizeMode="contain"
        />

        {/* TIÊU ĐỀ LOGIN */}
        <Text style={styles.title}>Loging</Text>
        
        {/* SUBTITLE */}
        <Text style={styles.subtitle}>Enter your emails and password</Text>

        {/* FORM CONTAINER */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input} 
              placeholder="example@gmail.com"
              placeholderTextColor="#7C7C7C"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.passwordInput} 
                secureTextEntry
                placeholder="••••••••"
              />
              <Text style={styles.eyeIcon}>👁</Text>
            </View>
          </View>

          {/* NÚT QUÊN MẬT KHẨU - Chuyển về SignIn */}
          <TouchableOpacity 
              style={styles.forgotBtn} 
                onPress={() => navigation.navigate('SignIn')}
>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
  },
  logo: {
    // Layout theo yêu cầu của bạn
    position: 'absolute',
    width: 47.84,
    height: 55.64,
    top: 77.25,
    alignSelf: 'center', // Căn giữa theo trục dọc màn hình
  },
  title: {
    position: 'absolute',
    width: 233,
    height: 59,
    top: 233.1,
    left: 25.01,
    fontFamily: 'Gilroy-Bold', 
    fontSize: 26, 
    fontWeight: '600',
    color: COLORS.black,
  },
  subtitle: {
    position: 'absolute',
    top: 297, // Đặt ngay dưới Title (233.1 + 59 + khoảng cách nhỏ)
    left: 25.01,
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: '#7C7C7C',
  },
  formContainer: {
    marginTop: 360, // Đẩy form xuống để không đè lên Title và Subtitle đang dùng absolute
    width: '100%',
  },
  inputGroup: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#7C7C7C',
    fontFamily: 'Gilroy-SemiBold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingVertical: 10,
    fontSize: 18,
    color: COLORS.black,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 18,
    color: COLORS.black,
  },
  eyeIcon: {
    fontSize: 20,
    color: '#7C7C7C',
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: -10,
    marginBottom: 30,
  },
  forgotText: {
    fontSize: 14,
    color: COLORS.black,
  },
  loginBtn: {
    backgroundColor: COLORS.primary,
    height: 67,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.black,
  },
  signupText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});