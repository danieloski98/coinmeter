import { View, Text, Modal } from 'react-native'
import React from 'react'
import Box from '../Box'
import { useAtomValue } from 'jotai'
import { currenciesAtom } from '@/state/currencies'
import { getImage } from '@/utils/utils'
import { Image } from 'expo-image';

const CurrencyList = ({
    visible,
    onClose,
    setValue
}: {
    visible: boolean;
    onClose: () => void;
    setValue: (value: string) => void;
}) => {
    const currencies = useAtomValue(currenciesAtom);
  return (
    <Modal visible={visible} transparent style={{ flex: 1 }} animationType='slide'>
        <Box flex={1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} justifyContent={'flex-end'}>
            <Box width={'100%'} height={350} borderTopRightRadius={40} borderTopLeftRadius={40} backgroundColor={'secondaryBackgroundColor'} alignItems={'center'} paddingHorizontal={'m'}>
                <Box width={100} height={6} borderRadius={20} backgroundColor={'primaryColor'} marginTop={'m'} marginBottom={'l'}  />
                {currencies.map((currency) => (
                    <Box key={currency.id} width={'100%'} height={60} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'row'}>
                        <Image source={getImage(currency.name as any)} contentFit='cover' style={{ width: 30, height: 30, borderRadius: 20 }} /> 
                        <Text onPress={() => {setValue(currency.name); onClose()}} style={{ fontFamily: 'SF_Medium', fontSize: 18, color: 'white', marginLeft: 20 }}>{currency.name.toUpperCase()}</Text>
                    </Box>
                ))}
            </Box>
        </Box>
    </Modal>
  )
}

export default CurrencyList