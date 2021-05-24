import React from 'react'
import {StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    text: {fontSize: 72}
})

const Count = props => (
    <Text style={styles.text}>{props.count}</Text>
)

Count.propTypes = {
    count: PropTypes.number.isRequired
}

export default Count