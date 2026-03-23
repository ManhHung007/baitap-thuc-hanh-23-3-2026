import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { COLORS } from '../../constants/theme';

export default function VerificationScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Nút quay lại */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Enter your 4-digit code</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Code</Text>
          <TextInput 
            style={styles.input} 
            placeholder="- - - -" 
            keyboardType="number-pad"
            maxLength={4}
            autoFocus={true}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
          
          {/* Nút Next tròn màu xanh */}
          <TouchableOpacity 
            style={styles.nextBtn}
            onPress={() => navigation.navigate('Location')}
          >
            <Text style={styles.nextIcon}>›</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 25, paddingTop: 20 },
  backBtn: { width: 40, height: 40, justifyContent: 'center' },
  backIcon: { fontSize: 40, color: COLORS.black },
  title: { fontSize: 26, fontWeight: '600', marginTop: 20, marginBottom: 40 },
  inputGroup: { marginBottom: 20 },
  label: { color: COLORS.grey, fontSize: 16, marginBottom: 10 },
  input: { borderBottomWidth: 1, borderBottomColor: COLORS.border, fontSize: 18, paddingVertical: 10, letterSpacing: 5 },
  footer: { flex: 1, justifyContent: 'flex-end', marginBottom: 60 },
  resendText: { color: COLORS.primary, fontSize: 18, fontWeight: '500' },
  nextBtn: { 
    position: 'absolute', right: 0, bottom: 0,
    width: 67, height: 67, borderRadius: 35, 
    backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center',
    shadowColor: COLORS.primary, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5
  },
  nextIcon: { color: 'white', fontSize: 30, fontWeight: '300' }
});