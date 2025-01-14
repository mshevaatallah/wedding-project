import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import cocok1 from "../../../../assets/images/cocok4.jpeg";
import * as SplashScreen from "expo-splash-screen";
import { Context } from "../../../navigation";

const MakeUpFour = ({ navigation }) => {
  const { likes, setLikes, setID } = useContext(Context);
  function addTask() {
    const newLikes = {
      id: 4,
      date: new Date().toDateString(),
      toko: "Ameera Beauty",
      judul: "1 set paket make up",
      price: "Rp.400.000",
      completed: false,
    };
    setLikes([...likes, newLikes]);
  }
  const [fontsLoaded] = useFonts({
    JakartaRegular: require("../../../../assets/fonts/JakartaRegular.ttf"),
    JakartaExtraB: require("../../../../assets/fonts/JakartaExtraB.ttf"),
    JakartaMedium: require("../../../../assets/fonts/JakartaMedium.ttf"),
    JakartaBold: require("../../../../assets/fonts/Jakarta_Bold.ttf"),
  });
  const [color, setColor] = useState(false);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  function HandlePress() {
    setColor(true);
    if (color != true) {
      addTask();
      return;
    }
  }
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.main_container}>
      <StatusBar style="dark" />

      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            marginHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={35}
            suppressHighlighting={true}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 20,

              color: "#24282c",
              letterSpacing: 1,
            }}
          >
            Detail
          </Text>
          <Ionicons
            name={color ? "heart" : "heart-outline"}
            size={35}
            suppressHighlighting={true}
            onPress={HandlePress}
          />
        </View>
        <ScrollView>
          <View
            style={{
              paddingBottom: 200,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 300,

                backgroundColor: "#E5E5E5",
              }}
            >
              <Image
                source={cocok1}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 25 }}>
              <View>
                <Text
                  style={{
                    fontFamily: "JakartaExtraB",
                    fontSize: 10,
                    color: "#FF4F6F",
                    letterSpacing: 1,

                    textDecorationLine: "line-through",
                  }}
                >
                  Rp.599.000
                </Text>
                <Text
                  style={{
                    fontFamily: "JakartaBold",
                    fontSize: 20,
                    color: "#24282c",
                    letterSpacing: 1,
                    lineHeight: 25,
                  }}
                >
                  Rp.400.000
                </Text>
                <Text
                  style={{
                    fontFamily: "JakartaExtraB",
                    fontSize: 21,
                    color: "#24282c",
                    letterSpacing: 0.4,
                    lineHeight: 30,
                    marginTop: 15,
                  }}
                >
                  Paket Lengkap Make Up Artist By Ameera Beauty
                </Text>
                <Text
                  style={{
                    fontFamily: "JakartaMedium",
                    fontSize: 12,
                    color: "#808080",
                    letterSpacing: 0.2,
                    lineHeight: 15,
                    marginTop: 10,
                  }}
                >
                  Merupakan paket make up murah dan lenglap yang paling terbaik
                  untuk anda{" "}
                </Text>
                <View
                  style={{
                    borderBottomColor: "grey",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 20,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "JakartaExtraB",
                    fontSize: 15,
                    color: "#24282c",
                    letterSpacing: 1,
                    lineHeight: 25,
                    marginTop: 18,
                  }}
                >
                  Deskripsi Produk
                </Text>
                <Text
                  style={{
                    fontFamily: "JakartaMedium",
                    fontSize: 12,
                    color: "#808080",
                    letterSpacing: 0.2,
                    lineHeight: 15,
                    marginTop: 10,
                  }}
                >
                  "Paket Lengkap Make Up Artist" oleh Ameera Beauty bukan hanya
                  sekadar layanan kecantikan, tetapi juga perjalanan eksplorasi
                  dan penerimaan diri. Jadikan setiap momen istimewa dengan
                  tampilan make-up yang mencerminkan keunikan dan kecantikan
                  Anda. Hubungi kami hari ini untuk membuat janji dan mulailah
                  perjalanan kecantikan Anda yang tak terlupakan bersama Ameera
                  Beauty.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottom_bar}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            borderColor: "#FF4F6F",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="chatbubble-outline"
            size={30}
            color={"#FF4F6F"}
            suppressHighlighting={true}
            onPress={() => navigation.navigate("SellerChat")}
          />
        </View>

        <View style={styles.button_beli}>
          <Text
            style={{
              fontFamily: "JakartaExtraB",
              fontSize: 18,
              color: "#fff",
            }}
          >
            Beli sekarang
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MakeUpFour;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  bottom_bar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,

    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    backgroundColor: "#fff",
  },
  button_beli: {
    width: "70%",
    height: 60,
    backgroundColor: "#FF4F6F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
});
