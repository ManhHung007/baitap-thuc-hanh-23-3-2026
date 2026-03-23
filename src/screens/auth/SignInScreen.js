import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { COLORS } from '../../constants/theme';

export default function SignInScreen({ navigation }) {
  return (
    <ScreenWrapper>
      {/* ẢNH BANNER - Sửa tên file ảnh của bạn ở đây */}
      <Image source={require('../../img_assets/signin.png')} style={styles.banner} />
      
      <View style={styles.container}>
        <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>

        <TouchableOpacity style={styles.phoneInput} onPress={() => navigation.navigate('Number')}>
          <Text style={styles.flag}>🇧🇩</Text>
          <Text style={styles.phoneText}>+880</Text>
        </TouchableOpacity>

        <Text style={styles.socialTitle}>Or connect with social media</Text>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: COLORS.blue }]}
          onPress={() => navigation.navigate('Login')}// Đi đến Login nếu đã có tài khoản
        >
          <Text style={styles.socialBtnText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.socialBtn, { backgroundColor: COLORS.darkBlue, marginTop: 20 }]}
        >
          <Text style={styles.socialBtnText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  banner: { width: '100%', height: 300, resizeMode: 'cover' },
  container: { padding: 25 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 25 },
  phoneInput: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: COLORS.border, paddingBottom: 15, marginBottom: 35 },
  flag: { fontSize: 24, marginRight: 15 },
  phoneText: { fontSize: 18, color: COLORS.black },
  socialTitle: { textAlign: 'center', color: COLORS.grey, marginBottom: 30 },
  socialBtn: { height: 67, borderRadius: 19, justifyContent: 'center', alignItems: 'center' },
  socialBtnText: { color: 'white', fontSize: 18, fontWeight: '600' }
});