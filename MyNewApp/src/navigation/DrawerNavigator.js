import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Modal, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useTheme } from '../context/ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CompleteProfileScreen from '../screens/CompleteProfileScreen';

// Create stack navigator instance
const Stack = createNativeStackNavigator();

/**
 * Stack navigator for main app screens
 */
const DrawerNavigator = () => {
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [fullName, setFullName] = useState('User');

  // Fetch user's full name from Firestore
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userDoc = await getDoc(doc(db, 'userProfiles', currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setFullName(userData.fullName || 'User');
          }
        }
      } catch (error) {
        console.log('Error fetching user name:', error);
        setFullName('User');
      }
    };

    fetchUserName();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  // Header right component with profile initial
  const headerRight = (navigation) => (
    <TouchableOpacity 
      style={{ padding: 8 }} 
      onPress={() => setModalVisible(true)}
    >
      <View style={{
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#fe6e32',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fe6e32',
      }}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
          {fullName.charAt(0).toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Custom header with gradient
  const CustomHeader = () => (
    <LinearGradient
      colors={['#fe6e32', '#fb8926']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ paddingTop: 70, paddingBottom: 20, paddingHorizontal: 15 }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>Hi, {fullName}!</Text>
          <Text style={{ color: 'white', fontSize: 14, opacity: 0.8 }}>Your predicted colleges</Text>
          </View>
        
        
        {headerRight(navigation)}
      </View>
      
    </LinearGradient>
  );

  // Custom header for Detail screen with back button
  const DetailHeader = ({ navigation: screenNavigation }) => (
    <LinearGradient
      colors={['#fe6e32', '#fb8926']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ paddingTop: 60, paddingBottom: 10, paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => screenNavigation.goBack()} style={{ marginRight: 10 }}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>College Details</Text>
      </View>
      {headerRight(navigation)}
    </LinearGradient>
  );

  // Main render function
  return (
    <>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onPress={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end', paddingTop: 100, paddingRight: 20 }}>
            <TouchableOpacity activeOpacity={1} onPress={() => {}}>
              <LinearGradient
                colors={['#fe6e32', '#fb8926']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  minWidth: 200,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                {/* Profile Option */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('CompleteProfile');
                  }}
                >
                  <Ionicons name="person" size={20} color="white" />
                  <Text style={{ color: 'white', fontSize: 16, fontWeight: '600', marginLeft: 12 }}>Profile</Text>
                </TouchableOpacity>

                {/* Theme Toggle Option */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                  onPress={() => {
                    toggleTheme();
                    setModalVisible(false);
                  }}
                >
                  <Ionicons name={theme.dark ? 'sunny' : 'moon'} size={20} color="white" />
                  <Text style={{ color: 'white', fontSize: 16, fontWeight: '600', marginLeft: 12 }}>
                    {theme.dark ? 'Light Mode' : 'Dark Mode'}
                  </Text>
                </TouchableOpacity>

                {/* Logout Option */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                  }}
                  onPress={() => {
                    setModalVisible(false);
                    handleLogout();
                  }}
                >
                  <Ionicons name="log-out" size={20} color="white" />
                  <Text style={{ color: 'white', fontSize: 16, fontWeight: '600', marginLeft: 12 }}>Logout</Text>
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
        },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Home',
          header: () => <CustomHeader />,
        }}
      />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen}
        options={({ navigation }) => ({
          title: 'College Details',
          header: () => <DetailHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen 
        name="CompleteProfile" 
        component={CompleteProfileScreen}
        options={({ navigation }) => ({
          title: 'Complete Profile',
          header: () => (
            <LinearGradient
              colors={['#fe6e32', '#fb8926']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ paddingTop: 60, paddingBottom: 10, paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
                  <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Your Profile</Text>
              </View>
              {headerRight()}
            </LinearGradient>
          ),
        })}
      />
    </Stack.Navigator>
    </>
  );
};

export default DrawerNavigator;