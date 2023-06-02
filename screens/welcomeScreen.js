import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
	SafeAreaView,
	Text,
	Image,
	TouchableOpacity,
	View,
	StyleSheet,
	TextInput,
	ScrollView,
	StatusBar
} from "react-native";
import Spaceing from "../configration/spacing";
import colors from "../configration/colors";
import DATA from "../configration/DATA";
import RecipeDetails from "../components/recipeDetails";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';

const WelcomeScreen = () => {
	const navigation = useNavigation();

	const [ActiveCatagory, setActiveCatagory] = useState(0);

	
	useFocusEffect(() => {
		// This will run when component is `focused` or mounted.
		// StatusBar.setHidden(true);
	  
		// This will run when component is `blured` or unmounted.
		return () => {
		  StatusBar.setHidden(false);
		}
	  });
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={{ marginTop: 50, marginHorizontal: Spaceing + 10 }}>
					<View style={styles.container}>
						<View style={styles.profileContainer}>
							<Image
								style={styles.profileImage}
								source={require("../assets/restaurant/avatar.jpg")}
							/>
							<Text style={styles.profileText}>Erikaasav</Text>
						</View>
						<View style={styles.IconsContainer}>
							<TouchableOpacity style={{ marginEnd: Spaceing }}>
								<Ionicons
									style={styles.profileIcon}
									name="notifications-outline"
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Ionicons style={styles.profileIcon} name="menu" />
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.searchContainer}>
						<Text style={styles.headlineText}>
							What would you {`\n`}like to order?
						</Text>

						<View style={styles.inpt}>
							<Ionicons style={styles.inptIcon} name="search" />
							<TextInput
								style={styles.inptText}
								placeholderTextColor={colors.gray}
								placeholder="Want to .."
							/>
						</View>
					</View>
					<ScrollView
						contentContainerStyle={styles.CatagoryContainer}
						horizontal
					>
						{DATA.map((catagory, index) => (
							<TouchableOpacity
								onPress={() => {
									setActiveCatagory(index);
								}}
								key={index}
							>
								<Text
									style={[
										styles.catagoryInactive,
										ActiveCatagory === index && styles.catagoryActive,
									]}
								>
									{catagory.title}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>

					<ScrollView contentContainerStyle={styles.recipeContainer}>
						{DATA[ActiveCatagory].recipes.map((item) => (
							<TouchableOpacity
								onPress={() => {
									navigation.navigate("RecipeDetailsScreen", {
										id: item.id,
										image: item.image,
										name: item.name,
                                        rating:item.rating,
                                        time:item.time,
                                        delTime:item.del_time,
                                        cookTime:item.cooking_time,
										price:item.price,
										description :item.description
									});
								}}
								style={{ marginHorizontal: Spaceing, marginVertical: Spaceing }}
								key={item.id}
							>
								<RecipeDetails detail={item} />
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	profileContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileImage: {
		width: Spaceing * 4.5,
		height: Spaceing * 4.5,
		borderRadius: Spaceing * 3,
		marginEnd: Spaceing,
	},
	profileText: {
		fontSize: Spaceing * 1.7,
		fontWeight: "800",
		color: colors.dark,
	},
	IconsContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileIcon: {
		fontSize: Spaceing * 3.5,
		color: colors.dark,
	},
	inpt: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.light,
		padding: Spaceing * 2,
		borderRadius: Spaceing,
		marginTop: Spaceing * 1.2,
		marginBottom: Spaceing * 3.5,
	},
	inptIcon: {
		color: colors.gray,
		fontSize: Spaceing * 2,
		marginEnd: Spaceing,
	},
	inptText: {},
	searchContainer: {
		paddingTop: Spaceing + 5,
		marginVertical: Spaceing,
	},
	headlineText: {
		fontSize: Spaceing * 3,
		fontWeight: "700",
	},
	CatagoryContainer: {
		flexGrow: 1,
		justifyContent: "center",
	},

	catagoryInactive: {
		fontSize: Spaceing * 1.5,
		fontWeight: "700",
		marginHorizontal: Spaceing,
		color: colors.gray,
	},
	catagoryActive: {
		color: colors.black,
		fontSize: Spaceing * 1.6,
	},

	recipeContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		marginVertical: Spaceing * 3,
	},
});
