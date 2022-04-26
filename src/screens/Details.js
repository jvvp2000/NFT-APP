import React from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../../constants";
import {
  CircleButton,
  RectButton,
  Subinfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      // top={StatusBar.currentHeight + 10}
      top={15}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      // top={StatusBar.currentHeight + 10}
      top={15}
    />
  </View>
);
export const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        // renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <Subinfo />
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};
