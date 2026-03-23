import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { COLORS } from '../../constants/theme';

export default function SignUpScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContainer}>
        
        {/* LOGO CÀ RỐT - Giữ nguyên tọa độ chuẩn */}
        <Image 
          source={require('../../img_assets/carrot.png')} 
          style={styles.logo}
          resizeMode="contain"
        />

        {/* TIÊU ĐỀ SIGN UP - Copy y hệt thông số trang Login bạn đã yêu cầu */}
        <Text style={styles.title}>Sign Up</Text>
        
        {/* SUBTITLE - Vị trí tương ứng dưới Title */}
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>

        {/* FORM CONTAINER */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Afsar Hossen Shuvo" 
              placeholderTextColor="#7C7C7C"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input} 
              placeholder="imshuvo97@gmail.com" 
              placeholderTextColor="#7C7C7C"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.passwordInput} 
                placeholder="••••••••" 
                secureTextEntry 
              />
              <Text style={styles.eyeIcon}>👁</Text>
            </View>
          </View>

          <Text style={styles.terms}>
            By continuing you agree to our <Text style={{ color: COLORS.primary }}>Terms of Service</Text> and <Text style={{ color: COLORS.primary }}>Privacy Policy</Text>.
          </Text>

          <TouchableOpacity 
            style={styles.mainBtn} 
            onPress={() => navigation.navigate('Location')}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLinkText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  logo: {
    position: 'absolute',
    width: 47.84,
    height: 55.64,
    top: 77.25,
    alignSelf: 'center',
  },
  title: {
    // COPY CHÍNH XÁC TỪ TRANG LOGIN
    position: 'absolute',
    width: 233,    // Theo yêu cầu trang login của bạn
    height: 59,    // Theo yêu cầu trang login của bạn
    top: 233.1,    // Theo yêu cầu trang login của bạn
    left: 25.01,   // Theo yêu cầu trang login của bạn
    fontSize: 26,
    fontWeight: '600',
    color: COLORS.black,
    fontFamily: 'Gilroy-Bold',
  },
  subtitle: {
    position: 'absolute',
    top: 295,      // Đặt dưới Title tương tự trang Login
    left: 25.01,
    fontSize: 16,
    color: '#7C7C7C',
    fontFamily: 'Gilroy-Medium',
  },
  formContainer: {
    // Đẩy Form xuống 360px để không đè lên phần Title tuyệt đối bên trên
    marginTop: 360, 
    paddingHorizontal: 25,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#7C7C7C',
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'Gilroy-SemiBold',
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
    paddingHorizontal: 10,
  },
  terms: {
    color: '#7C7C7C',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 30,
    marginTop: 10,
  },
  mainBtn: {
    backgroundColor: COLORS.primary,
    height: 67,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy-SemiBold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  loginLinkText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});