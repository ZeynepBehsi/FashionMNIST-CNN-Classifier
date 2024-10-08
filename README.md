# FashionMNIST CNN Classifier
This project is developed to perform image classification on the Fashion MNIST dataset using a Convolutional Neural Network (CNN) model. It leverages TensorFlow and Keras libraries to provide a simple and effective model training and evaluation process.

# Project Structure
fashion_mnist_cnn_classifier.py: Python script defining, training, and testing the CNN model.
requirements.txt: File listing the Python libraries used in the project.
model.h5: File containing the saved trained CNN model.
notebooks/: Contains Jupyter Notebook files related to the model training process and evaluation.
data/: Contains raw and processed data related to the Fashion MNIST dataset.
Requirements
To run the project, you will need the following Python libraries, which are listed in the requirements.txt file:

- TensorFlow
- Keras
- NumPy
- Matplotlib

## Example part of Dataset:

![Data Image](https://github.com/ZeynepBehsi/FashionMNIST-CNN-Classifier/blob/main/assets/dataimages.png))

# Usage
1. **Load the Dataset:** Ensure that the Fashion MNIST dataset is available before starting the project. This is necessary for the model's training and testing phases.
2. **Train the Model:** Run the fashion_mnist_cnn_classifier.py script to train your CNN model. The training process enables the model to learn from the images in the dataset.
   To install the requirements, use the `python fashion_mnist_cnn_classifier.py` command.
   
3. **Evaluate Results:** After training is complete, evaluate the model's performance and review the results in the Jupyter Notebook files located in the notebooks/ directory.
4. **Save and Load the Model:** Save the trained model in the model.h5 file and reload it later for making predictions.
   `from tensorflow.keras.models import load_model `
   `model = load_model('model.h5')`

# Version History
**Version 2.0 - [02.09.2024]**

**Model Improvements:**

- Used the Adam optimizer without specifying an initial learning rate.
- Defined an object within a class for early stopping, configured to halt training when the accuracy reaches or exceeds 98%.
- Reduced the number of CNN layers from 2 to 1 and decreased the number of filters from 64 to 32.
- Reduced the number of Dense layers from 3 to 2.

**Performance Evaluation:**

- Training accuracy increased from 88% to 97%.
- Test accuracy improved from 86% to 91%.

**Code Changes:**
- Adjustments made to the CNN architecture, including layer and filter reductions.


# Contributing
If you would like to contribute to this project, please submit a pull request and explain the changes you have made. We welcome all feedback and suggestions!
