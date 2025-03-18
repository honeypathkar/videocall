import {HMSPrebuilt} from '@100mslive/react-native-room-kit';
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  const [meetingId, setMeetingId] = useState('mki-scw-wnw');
  const [showHMSPreBuilt, setShowHMSPreBuilt] = useState(false);

  const handleJoinMeeting = () => {
    console.log('Joining meeting with ID:', meetingId);
    setShowHMSPreBuilt(true);
  };

  const handleCreateMeeting = () => {
    console.log('Creating an instant meeting...');
    setShowHMSPreBuilt(true);
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={styles.title}>Meeting App</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Meeting ID"
            value={meetingId}
            onChangeText={setMeetingId}
            placeholderTextColor={'black'}
          />
          {showHMSPreBuilt && (
            <HMSPrebuilt
              roomCode="mki-scw-wnw"
              options={{userName: 'Honey Pathkar'}}
            />
          )}
          <Button title="Join with ID" onPress={handleJoinMeeting} />
          <View style={styles.space} />
          <Button
            title="Create an Instant Meeting"
            onPress={handleCreateMeeting}
          />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  space: {
    marginVertical: 10,
  },
});
