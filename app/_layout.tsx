import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='login' />
        <Stack.Screen name='register' />

    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})