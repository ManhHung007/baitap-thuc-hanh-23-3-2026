import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { COLORS } from '../../constants/theme';

export default function LocationScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image 
          source={require('../../img_assets/map.png')} 
          style={styles.image} 
          resizeMode="contain"
        />
        
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>Switch on your location to stay in tune with what’s happening in your area</Text>

        <View style={styles.dropdownGroup}>
          <Text style={styles.label}>Your Zone</Text>
          <View style={styles.dropdown}><Text>Banasree</Text></View>
        </View>

        <View style={styles.dropdownGroup}>
          <Text style={styles.label}>Your Area</Text>
          <View style={styles.dropdown}><Text>Types of your area</Text></View>
        </View>

        <TouchableOpacity 
          style={styles.submitBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 25, alignItems: 'center', paddingTop: 50 },
  image: { width: 220, height: 170, marginBottom: 40 },
  title: { fontSize: 26, fontWeight: '600', textAlign: 'center' },
  subtitle: { color: '#7C7C7C', textAlign: 'center', marginTop: 15, marginBottom: 40 },
  dropdownGroup: { width: '100%', marginBottom: 30 },
  label: { color: '#7C7C7C', marginBottom: 10 },
  dropdown: { borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 15 },
  submitBtn: { backgroundColor: COLORS.primary, width: '100%', height: 67, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  submitText: { color: 'white', fontSize: 18, fontWeight: '600' }
});