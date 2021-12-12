import React from 'react'
import { FlatList, ActivityIndicator } from 'react-native'

import PostItem from './Item'

function PostList({ data, loading, onRefresh, onEndReached, loadingMore }) {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <PostItem data={item} />}
            keyExtractor={(item) => item.id}
            onRefresh={onRefresh}
            refreshing={loading}
            onEndReached={onEndReached}
            onEndReachedThreshold={0}
            ListFooterComponent={() => loadingMore && <ActivityIndicator size="large" />}
            contentContainerStyle={{ paddingTop: 5, paddingBottom: 5 }}
        />
    )
}

export default PostList
