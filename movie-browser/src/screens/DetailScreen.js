import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { movie } from '../../mockData';
import apiKey from '../../key';
const BASE_URL = `http://www.omdbapi.com/?apikey=${apiKey}&i=`;

export default class DetailScreen extends React.Component {
  state = { movie: movie };

  render() {
    const { route } = this.props;
    const { movie: params } = route.params;
    const movie = this.state.movie;

    const handleGetDetails = async (id) => {
      console.log(`called: ${id}`);
      const response = await fetch(`${BASE_URL}${id}`);
      const json = await response.json();
      this.setState({ movie: json });
    };

    if (this.state.movie.imdbID === 0) {
      handleGetDetails(params.imdbID);
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <StatusBar barStyle='light-content' />
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {params.Title}</Text>
        </View>
        <ScrollView>
          <View style={styles.movieContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.movieImage}
                source={{ uri: params.Poster }}
              />
            </View>
            <Text style={styles.plotTitle}>Details</Text>
            <View style={styles.movieDetailsContainer}>
              <Text style={styles.detailsText}>{`Rated: ${movie.Rated}`}</Text>
              <Text
                style={styles.detailsText}
              >{`Released: ${params.Year}`}</Text>
              <Text style={styles.detailsText}>{`Genre: ${movie.Genre}`}</Text>
              <Text
                style={styles.detailsText}
              >{`Director: ${movie.Director}`}</Text>
              <Text
                style={styles.detailsText}
              >{`Main Actors: ${movie.Actors}`}</Text>
              <Text
                style={styles.detailsText}
              >{`MetaScore: ${movie.Metascore}`}</Text>
              <Text
                style={styles.detailsText}
              >{`Imdb Rating: ${movie.imdbRating}`}</Text>
            </View>
            <Text style={styles.plotTitle}>Plot</Text>
            <Text style={styles.plotText}>{movie.Plot}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  movieContainer: { flex: 1 },
  titleContainer: { backgroundColor: 'rgba(150,150,150,0.1)', marginTop: 24 },
  title: {
    alignSelf: 'stretch',
    padding: 8,
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  movieImage: {
    resizeMode: 'cover',
    height: 600,
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  movieDetailsContainer: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: 'center',
    marginTop: 8,
  },
  detailsText: { color: 'white', fontSize: 22, marginVertical: 4 },
  plotTitle: {
    marginTop: 24,
    alignSelf: 'stretch',
    color: 'white',
    fontSize: 26,
    paddingLeft: 8,
    paddingVertical: 4,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  plotText: {
    paddingHorizontal: 12,
    marginTop: 8,
    alignSelf: 'stretch',
    color: 'white',
    fontSize: 18,
    lineHeight: 30,
    paddingBottom: 50,
  },
});
