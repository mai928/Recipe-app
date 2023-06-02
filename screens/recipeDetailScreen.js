import React from "react";
import {
	StyleSheet,
	ScrollView,
	Text,
	ImageBackground,
	View,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Spaceing from "../configration/spacing";
import colors from "../configration/colors";
import { useFocusEffect } from "@react-navigation/native";
import recipes from "../configration/Recipes";
import DATA from "../configration/DATA";
const RecipeDetailsScreen = ({ route,navigation }) => {
	const {
		id,
		price,
		image,
		name,
		rating,
		delTime,
		cookTime,
		time,
		description,
	} = route.params;

	console.log(DATA[0].recipes[1]);

	useFocusEffect(() => {
		// This will run when component is `focused` or mounted.
		// StatusBar.setHidden(true);

		// This will run when component is `blured` or unmounted.
		return () => {
			StatusBar.setHidden(false);
		};
	});

	return (
		<ScrollView>
			<View>
				{/* <Text>{route.params.id}</Text> */}
				<ImageBackground style={styles.img} source={image}>
					<View
						style={[
							styles.flexRow,
							{ marginVertical: Spaceing * 5, marginHorizontal: Spaceing * 2 },
						]}

					>
						<TouchableOpacity onPress={()=>{navigation.goBack()}}>
							<Ionicons
							style={{
								color: colors.gray,
								fontSize: 20,
								backgroundColor: colors.white,
								borderRadius: Spaceing * 2.5,
								padding: Spaceing / 2,
							}}
							name="arrow-back"
						/>
						</TouchableOpacity>
						

						<TouchableOpacity>
							<Ionicons
							style={{
								color: colors.gray,
								fontSize: 20,
								backgroundColor: colors.white,
								borderRadius: Spaceing * 2.5,
								padding: Spaceing / 2,
							}}
							name="md-share-social"
						/>
						</TouchableOpacity>
						
					</View>
				</ImageBackground>
				<View style={styles.innerContainer}>
					<View style={styles.flexRow}>
						<Text style={styles.name}>{name}</Text>
						<View style={[styles.flexRow, styles.star]}>
							<Ionicons name="star" />
							<Text style={styles.rate}>{rating}</Text>
						</View>
					</View>

					<View style={[styles.flexRow, styles.timeouter]}>
						<View style={[styles.flexRow, styles.timeInner]}>
							<Ionicons name="time-outline" />
							<Text>{time}</Text>
						</View>

						<View style={[styles.flexRow, styles.timeInner]}>
							<Ionicons name="bicycle" />
							<Text>{delTime}</Text>
						</View>

						<View style={[styles.flexRow, styles.timeInner]}>
							<Ionicons name="restaurant-outline" />
							<Text>{cookTime}</Text>
						</View>
					</View>

					<View>
						<Text style={styles.ingredients}>Ingredients</Text>
						{recipes[5].ingredients.map((item) => (
							<View key={item.id}>
								<Text
									style={{
										fontSize: Spaceing * 1.7,
										fontWeight: "600",
										color: colors.gray,
										alignItems: "center",
										marginStart: Spaceing * 2,
										marginVertical: Spaceing / 1.5,
									}}
								>
									{" "}
									{item.title}
								</Text>
							</View>
						))}
					</View>
					<View>
						<Text style={styles.ingredients}>Description</Text>
						<Text
							style={{
								fontSize: Spaceing * 1.7,
								fontWeight: "500",
								color: colors.gray,
							}}
						>
							{description}
						</Text>
					</View>

					<TouchableOpacity style={styles.btn}>
						<Text style={styles.btnText}>Choose this for </Text>
						<Text style={styles.btnprice}> ${price}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
	img: {
		width: "100%",
		height: 350,
		resizeMode: "cover",
	},
	innerContainer: {
		backgroundColor: colors.white,
		borderTopStartRadius: Spaceing * 3,
		borderTopEndRadius: Spaceing * 3,
		marginTop: -Spaceing * 3,
		padding: Spaceing * 2,
		paddingTop: Spaceing * 3,
	},
	flexRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	name: {
		fontSize: Spaceing * 3,
		fontWeight: "700",
		color: colors.black,
	},
	rate: {
		fontSize: Spaceing * 1.6,
		fontWeight: "600",
	},
	star: {
		alignItems: "center",
		backgroundColor: colors.yellow,
		borderRadius: Spaceing / 2,
		paddingHorizontal: Spaceing,
		height: Spaceing * 2,
	},
	timeouter: {
		marginVertical: Spaceing * 2,
		marginHorizontal: Spaceing / 5,
	},
	timeInner: {
		backgroundColor: colors.light,
		paddingHorizontal: Spaceing * 2,
		paddingVertical: Spaceing / 1.2,
		borderRadius: Spaceing,
		marginHorizontal: Spaceing / 10,
		alignItems: "center",
	},
	ingredients: {
		fontSize: Spaceing * 2,
		fontWeight: "700",
		color: colors.dark,
	},
	btn: {
		backgroundColor: colors.black,
		flexDirection: "row",
		justifyContent: "center",
		padding: Spaceing *1.7,
		borderRadius: Spaceing,
		marginVertical: Spaceing * 2,
	},
	btnText: {
		fontSize: Spaceing*1.7,
		color: colors.white,
		fontWeight: "700",
	},
	btnprice: {
		color: colors.yellow,
		fontSize: Spaceing*1.7,
		fontWeight: "700",

	},
});
