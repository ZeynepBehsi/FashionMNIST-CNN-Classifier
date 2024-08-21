
import tensorflow as tf
from tensorflow.keras import datasets
from model import create_model

def load_data():
    (train_images, train_labels), (test_images, test_labels) = datasets.fashion_mnist.load_data()
    train_images, test_images = train_images / 255.0, test_images / 255.0
    train_images = train_images.reshape((train_images.shape[0], 28, 28, 1))
    test_images = test_images.reshape((test_images.shape[0], 28, 28, 1))
    return (train_images, train_labels), (test_images, test_labels)

def train_model(model, train_images, train_labels):
    model.fit(train_images, train_labels, epochs=10, validation_split=0.1)
    model.save('fashion_mnist_model.h5')

if __name__ == "__main__":
    (train_images, train_labels), (test_images, test_labels) = load_data()
    model = create_model()
    train_model(model, train_images, train_labels)