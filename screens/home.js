import React from "react";
import {
	Text,
	View,
	Image,
	ImageBackground,
	StyleSheet,
	Touchable,
	TouchableOpacity,
} from "react-native";
import colors from "../configration/colors";
import Spaceing from "../configration/spacing";

const Home = ({navigation}) => {
	return (
		<ImageBackground
			style={styles.imgBackground}
			source={require("../assets/pexels-william-choquette-2641886.jpeg")}
		>
			<View style={styles.overlay} />
			<View style={styles.innerContainer}>
				<Text style={styles.headline}>
					Let Your favorite Food Find You
				</Text>
				<Text style={styles.description}>
					Dolore reprehenderit id ea eu voluptate deserunt occaecat .
				</Text>
				<TouchableOpacity 
				    onPress={()=>{navigation.navigate('WelcomeScreen')}}
				style={styles.btnBackground}>
					<Text style={styles.btnText}>Exploreer Now</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
};

export default Home;

const styles = StyleSheet.create({
	imgBackground: {
		width: "100%",
		height: "100%",
	},
	overlay: {
		backgroundColor: "black",
		flex: 1,
		opacity: 0.3,
	},
	headline: {    
	fontSize:Spaceing*4.5,
    color:colors.white,
    fontWeight:"800",
    textTransform:'capitalize'
},
    description:{
    color:colors.white,  
    fontSize:Spaceing*1.7,
    fontWeight:'600'

    },
    btnText:{
        color:colors.black,
         textAlign:'center',
         fontWeight:'700',
         fontSize:Spaceing*2
    },
    btnBackground:{
        marginTop:Spaceing*3,
        backgroundColor:colors.white,
        padding:Spaceing*1.5,
        borderRadius:Spaceing*1.5
    },
	innerContainer: {
		position: "absolute",
		height: "100%",
		justifyContent: "flex-end",
        paddingHorizontal:20,
        paddingBottom:Spaceing*5
	},
});
