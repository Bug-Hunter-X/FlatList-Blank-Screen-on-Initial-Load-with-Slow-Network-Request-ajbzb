```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

const MyComponent = () => {
  const [items, setItems] = useState(DATA);

  useEffect(() => {
    // Simulate a slow network request
    const timeoutId = setTimeout(() => {
      setItems(DATA);
    }, 5000); // Simulate a 5-second delay
    return () => clearTimeout(timeoutId);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {items ? (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MyComponent;
```