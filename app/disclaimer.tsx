import { View, Text } from 'react-native'
import React from 'react'
import Box from '@/components/Box'
import NavigationHeader from '@/components/general/NavigationHeader'
import CustomText from '@/components/CustomText'
import { ScrollView } from 'react-native-gesture-handler'

const Disclaimer = () => {
    return (
        <Box flex={1} backgroundColor={'mainBackgroundColor'}>
            <NavigationHeader />
            <Box flex={1} paddingTop={'m'} paddingHorizontal={'m'}>
                <ScrollView>
                    <CustomText variant='subheader' textAlign='center'>Understanding Our Rates and Information</CustomText>

                    <CustomText variant='body' marginTop='m'>At Emmi Exchange, we strive for transparency in our data and operations.*</CustomText>

                    <CustomText variant='subheader' textAlign='left' marginTop='m'>Data Sources:</CustomText>

                    <CustomText variant='body' marginTop='s'>
                        * {" "} Our exchange rates are derived from various financial institutions and currency exchange services.
                    </CustomText>

                    <CustomText variant='body' marginVertical='m'>
                        * {" "} Rates are adjusted to include our service fees and may not reflect real-time market rates.
                    </CustomText>

                    <CustomText variant='subheader' textAlign='left' marginTop='m'>Disclaimer:</CustomText>

                    <CustomText variant='body' marginTop='s'>
                        1 {" "} Indicative Rates: All rates shown are for informational purposes only and include our service fees.
                    </CustomText>

                    <CustomText variant='body' marginVertical='m'>
                        2 {" "} No Real-Time Data: Rates are not updated in real-time and may not reflect current market conditions.
                    </CustomText>

                    <CustomText variant='body' marginVertical='m'>
                        3 {" "} No Transactions: Emmi Exchange does not facilitate actual currency exchanges through this app.
                    </CustomText>

                    <CustomText variant='body' marginVertical='m'>
                        4 {" "} Not Financial Advice: The information provided should not be considered as financial or investment advice.
                    </CustomText>

                    <CustomText variant='body' marginVertical='m'>
                        5 {" "} Use at Own Risk: Users should verify rates and information before making financial decisions.
                    </CustomText>

                    <CustomText variant='body' marginTop='s'>
                        We update our rates [insert frequency, e.g., "daily" or "periodically"] to provide the most relevant information possible, subject to our internal policies and market conditions.
                    </CustomText>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default Disclaimer