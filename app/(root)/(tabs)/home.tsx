import ArrowDown from "@/assets/icons/ArrowDown";
import Filter from "@/assets/icons/Filters";
import Location from "@/assets/icons/Location";
import Notification from "@/assets/icons/Notification";
import Search from "@/assets/icons/Search";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { images } from "@/constants";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView className="p-4 bg-[#f6f6f6]">
      <View className="flex-row items-center justify-between">
        <Image source={images.profile} className="w-10 h-10" />
        <View className="flex-row items-center justify-center">
          <Location className="mr-1"/>
          <Text>Lalitpur</Text>
          <ArrowDown className="ml-1"/>
        </View>
        <Notification />
      </View>
      <View className=" -mt-6">
      <InputField
      iconLeft={<Search/>}
            placeholder="Search Your Food"
            textContentType="emailAddress"
            className="rounded-[40px] bg-[#fff]"
            iconRight={<Filter/>}
          />
      </View>
      <View className="bg-[#323232] w-full rounded-2xl h-[162px] mt-4 px-8 py-4 flex-row ">
       <View className="w-[50%] justify-center">
           <Text className="text-white font-roboto text-base font-medium leading-6 tracking-[0.08px]">Special Deals</Text>
           <Text className="font-roboto text-2xl font-semibold leading-8 text-white">50% OFF</Text>
           <Text className="font-roboto text-xs font-normal leading-4 tracking-[0.048px] text-[#bfbfbf]">and get free delivery.</Text>
           <Button className="mt-4 " title="Order Now"/>
       </View>
       <View className="w-[50%] items-center justify-center">
           <Image source={images.chicken} className="object-cover  w-28 h-28"/>
       </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
