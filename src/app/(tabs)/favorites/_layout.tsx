import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'
import { colors } from '@/constants/tokens'

const FavoritesScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Favorites',
						headerStyle: {
							backgroundColor: colors.background,
						},
						headerTintColor: "#fff",
					}}
				/>
			</Stack>
		</View>
	)
}

export default FavoritesScreenLayout
