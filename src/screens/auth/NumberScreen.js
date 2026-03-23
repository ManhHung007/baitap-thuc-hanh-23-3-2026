import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { COLORS } from '../../constants/theme';

export default function NumberScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>‹</Text> 
        </TouchableOpacity>

        <Text style={styles.title}>Enter your mobile number</Text>
        <Text style={styles.label}>Mobile Number</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.flag}>🇧🇩</Text>
          <TextInput 
            style={styles.input} 
            keyboardType="phone-pad" 
            autoFocus={true}
            placeholder="+880"
          />
        </View>

        {/* NÚT NEXT TRÒN */}
        <TouchableOpacity 
          style={styles.nextBtn}
          onPress={() => navigation.navigate('Verification')}
        >
          <Text style={{ color: 'white', fontSize: 24 }}>›</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 25, paddingTop: 20 },
  backIcon: { fontSize: 40, color: '#181725', marginBottom: 20 },
  title: { fontSize: 26, fontWeight: '600', marginBottom: 30 },
  label: { color: '#7C7C7C', fontSize: 16, marginBottom: 10 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10 },
  flag: { fontSize: 24, marginRight: 10 },
  input: { flex: 1, fontSize: 18 },
  nextBtn: { 
    position: 'absolute', 
    right: 25, 
    bottom: 80, 
    width: 67, 
    height: 67, 
    borderRadius: 35, 
    backgroundColor: COLORS.primary, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});