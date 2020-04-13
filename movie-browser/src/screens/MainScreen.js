import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
} from 'react-native';

import * as mockList from '../../mockData';

//create an key.js file with your api key
import apiKey from '../../key';

const BASE_URL = `http://www.omdbapi.com/?apikey=${apiKey}&s=`;

export default class MainScreen extends React.Component {
  state = {
    movies: [mockList.search],
    query: '',
  };

  render() {
    const fetchMovies = async (search) => {
      const url = `${BASE_URL}${search}`;
      let response = await fetch(url);
      const json = await response.json();
      this.setState({ movies: json.Search });
    };

    const movies = this.state.movies;
    const query = this.state.query;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movie Browser</Text>
        <TextInput
          style={styles.input}
          placeholder='Type to search, eg: Back to the future...'
          onSubmitEditing={() => fetchMovies(query)}
          onChangeText={(value) => this.setState({ query: value })}
        />

        {movies.length > 0 ? (
          <FlatList
            style={styles.movieList}
            showsVerticalScrollIndicator={false}
            data={movies}
            keyExtractor={(item) => item.ImdbID}
            renderItem={({ item: movie }) => (
              <View style={styles.movieContainer}>
                <Image
                  style={styles.movieImage}
                  source={{ uri: movie.Poster }}
                />
                <View style={{ width: '60%', alignSelf: 'stretch' }}>
                  <Text style={styles.movieTitle}>{console.log()}</Text>
                  <Text style={styles.movieYear}>{`Year: ${movie.Year}`}</Text>
                  <Text style={styles.movieCategory}>
                    {`Category: ${movie.Type}`}
                  </Text>
                </View>
              </View>
            )}
          />
        ) : (
          <View>
            <Text style={styles.noResultsText}>No search results</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: 12,
    marginTop: 16,
    paddingStart: 8,
    paddingVertical: 4,
    alignSelf: 'stretch',
    borderWidth: 2,
    borderColor: 'grey',
  },
  noResultsText: { fontSize: 20, textAlign: 'center' },
  movieList: { marginHorizontal: 12 },
  movieContainer: {
    borderRadius: 10,
    padding: 8,
    backgroundColor: 'rgba(200,200,200,0.25)',
    flexDirection: 'row',
    marginVertical: 16,
  },
  movieTitle: {
    marginTop: 4,
    fontSize: 22,
    fontFamily: 'bold',
    flexWrap: 'wrap',
  },
  movieImage: {
    borderRadius: 10,
    backgroundColor: 'rgba(200,200,200,0.25)',
    width: 80,
    height: 120,
    marginRight: 16,
  },
  movieYear: { fontSize: 14 },
  movieCategory: { fontSize: 14 },
});
