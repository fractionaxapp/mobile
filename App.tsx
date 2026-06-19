import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { money } from '@fractionax/core';

const MIN_INVESTMENT = money(10_000, 'USD');

export default function App() {
  const minDollars = MIN_INVESTMENT.amount / 100;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FractionAX</Text>
      <Text>
        Fractional ownership from ${minDollars.toLocaleString()} {MIN_INVESTMENT.currency}.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
});
