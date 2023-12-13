// ProductList.js
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { URL } from '../helpers';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const List = () => {
  const [products, setProducts] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get(`${URL}products`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditModalVisible(true);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setDeleteModalVisible(true);
  };

  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 10 }}>List of Products</Text>
      </View>
    {products.map((product) => (
      <View key={product.id} style={styles.cardContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text>{product.description}</Text>
          <Text>Price: ${product.price}</Text>
          <Text>Quantity: {product.quantity}</Text>
          <Text>Status: {product.status}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'green' }]}
            onPress={() => handleEdit(product)}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'red' }]}
            onPress={() => handleDelete(product)}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    ))}
     <EditModal
      visible={editModalVisible}
      product={selectedProduct}
      updateProducts={getProducts}
      onClose={() => setEditModalVisible(false)}
    />
    <DeleteModal
      visible={deleteModalVisible}
      product={selectedProduct}
      updateProducts={getProducts}
      onClose={() => setDeleteModalVisible(false)}
    /> 
  </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default List;
