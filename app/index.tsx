import { Link, router, useRouter } from "expo-router";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/welcome.png')} style={styles.image}/>
      <View>
        <Text style={styles.subtitle}> Discover Your Dream Job here</Text>
        <Text style={styles.mytext}>Explore all the existing job roles based on your interest and study major</Text>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.button1} onPress={()=>router.push("/login")}>
          <Text style={styles.buttonText2}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=>router.push("/register")}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    paddingVertical:50,
    alignContent: "center",
    justifyContent: "space-around",
  },
  subtitle: {
    fontSize: 36,
    color: "#1F41BB",
    textAlign: "center",
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
  },
  mytext: {
    fontSize: 15,
    paddingVertical: 10,
    textAlign: "center",
  },
  btncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button1: {
    backgroundColor: "blue",
    borderColor: "blue",

    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 15,
  },
  button2: {
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 15,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal:10,
  },
  buttonText2: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal:10,
  },
});
