import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Box from '../components/helper/Box'
import Header from '../components/Header'
import Image from '../components/helper/Image'
import LoaderText from '../components/helper/LoaderText'
import PostList from '../components/post/List'
import { GetPosts } from '../services/Post'

function HomeView() {
    const [postLoadingRefresh, setPostLoadingRefresh] = useState(false)
    const [postLoadingMore, setPostLoadingMore] = useState(false)
    const [postLoadingMoreStatus, setPostLoadingMoreStatus] = useState(true)
    const [postList, setPostList] = useState(null)
    const [postPageCurrent, setPostPageCurrent] = useState(1)
    const limit = 5
    const [pagesCount, setPagesCount] = useState(0)

    useFocusEffect(
        useCallback(() => {
            StatusBar.setBarStyle('dark-content')
        }, [])
    )

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        setPostLoadingRefresh(true)

        const data = await GetPosts({ page: 1, limit: limit })

        if (data.success) {
            setPostList([...data.result.items])
            setPagesCount(Math.ceil(data.result.total_count / data.result.num_items_per_page))
            setPostPageCurrent(2)
            setPostLoadingMoreStatus(true)
        }

        setPostLoadingRefresh(false)
    }

    const postOnEndReached = async () => {
        if (postPageCurrent <= pagesCount) {
            if (postLoadingMoreStatus) {
                setPostLoadingMore(true)

                const data = await GetPosts({ page: postPageCurrent, limit: limit })

                if (data.success) {
                    setPostList([...postList, ...data.result.items])
                    setPostLoadingMoreStatus(true)
                } else {
                    setPostLoadingMoreStatus(false)
                }

                setPostPageCurrent(postPageCurrent + 1)
                setPostLoadingMore(false)
            }
        }
    }

    return (
        <Box as={SafeAreaView} bg="white">
            <Header bg="white">
                <Image
                    source={require('../assets/images/logo.png')}
                    style={{ width: '100%', height: 30, resizeMode: 'contain' }}
                ></Image>
            </Header>

            <Box bg="lightGray" height="100%" pb={152}>
                {postList ? (
                    <PostList
                        data={postList}
                        loading={postLoadingRefresh}
                        onRefresh={() => getPosts()}
                        onEndReached={postOnEndReached}
                        loadingMore={postLoadingMore}
                    />
                ) : (
                    [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <Box key={index} py={5} mx={15}>
                            <LoaderText
                                width="100%"
                                height={160}
                                bg="extraLightGray"
                                mt={10}
                                border={1}
                                borderRadius="normal"
                                borderColor="extraLightGray"
                            />
                        </Box>
                    ))
                )}
            </Box>
        </Box>
    )
}

export default HomeView
