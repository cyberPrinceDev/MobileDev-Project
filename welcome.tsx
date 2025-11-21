import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  const handleGetStarted = () => {
    console.log('Get Started pressed');
  };

  const handleSignUp = () => {
    console.log('Sign Up pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Car Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <View style={styles.carIcon}>
              <View style={styles.carBody} />
              <View style={styles.carWindow} />
            </View>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>E-Transport</Text>
        
        {/* Subtitle */}
        <Text style={styles.subtitle}>Your journey starts here</Text>
        
        {/* Description */}
        <Text style={styles.description}>Eco-friendly rides at your fingertips</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={handleGetStarted}
        >
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={handleSignUp}
        >
          <Text style={styles.secondaryButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BCD4',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 40,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  carIcon: {
    width: 50,
    height: 30,
    position: 'relative',
  },
  carBody: {
    width: 50,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
  },
  carWindow: {
    width: 20,
    height: 12,
    backgroundColor: 'rgba(0, 188, 212, 0.5)',
    borderRadius: 6,
    position: 'absolute',
    top: 0,
    left: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  primaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#00BCD4',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});