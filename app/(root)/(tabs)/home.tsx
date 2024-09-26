import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-500">Welcome Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
