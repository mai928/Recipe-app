import React from "react";
import { View , Image,Text ,StyleSheet} from "react-native";
import Spaceing from "../configration/spacing";
import colors from "../configration/colors";
const recipeDetails = ({detail}) => {
	return (
		<View>
			<Image style={styles.img} source={detail.image} />
			<Text style={styles.name}>{detail.name}</Text>
			<Text style={styles.discount}>Today Discount {detail.discount}</Text>
			<Text style={styles.price}>${detail.price}</Text>
		</View>
	);
};

export default recipeDetails;

const styles=StyleSheet.create({
    img: {
		width: 155,
		height: 175,
		borderRadius: Spaceing,
	},
	name: {
		color: colors.dark,
		fontSize: Spaceing * 2,
		fontWeight: "700",
		marginTop: Spaceing,
	},
	discount: {
		fontSize: Spaceing * 1.5,
		color: colors.gray,
	},
	price: {
		fontSize: Spaceing * 2,
		fontWeight: "700",
		color: colors.dark,
	},
})

