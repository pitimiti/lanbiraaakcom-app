import React from 'react'

import Box from '../helper/Box'
import Text from '../helper/Text'
import Image from '../helper/Image'
import { API_URL } from '@env'

function PostItem({ data }) {
    const UPLOAD_FOLDER_URL = API_URL + 'uploads/posts/'

    return (
        <Box
            py={15}
            mx={10}
            my={5}
            alignItems="center"
            bg="white"
            border={1}
            borderRadius="normal"
            borderColor="extraLightGray"
            overflow="hidden"
        >
            <Box borderBottomWidth={1} borderBottomColor="extraLightGray" width="100%">
                <Image
                    mb={10}
                    source={require('../../assets/images/logo.png')}
                    style={{ width: '100%', height: 20, resizeMode: 'contain' }}
                ></Image>
            </Box>

            <Image
                source={{
                    uri: UPLOAD_FOLDER_URL + data.photo
                }}
                style={{ width: '100%', height: 140, resizeMode: 'contain' }}
            ></Image>

            <Box borderTopWidth={1} borderTopColor="extraLightGray" width="100%">
                <Text fontSize={14} textAlign="center" mt={10}>
                    lanbiraaak.com
                </Text>
            </Box>
        </Box>
    )
}

export default PostItem
