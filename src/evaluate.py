import tensorflow as tf
from model import create_model

def evaluate_model(model, test_images, test_labels):
    return model.evaluate(test_images, test_labels)

if __name__ == "__main__":
    _, (test_images, test_labels) = datasets.fashion_mnist.load_data()
    test_images = test_images / 255.0
    test_images = test_images.reshape((test_images.shape[0], 28, 28, 1))

    model = tf.keras.models.load_model('fashion_mnist_model.h5')
    results = evaluate_model(model, test_images, test_labels)
    print(f"Test Accuracy: {results[1]:.4f}, Test Loss: {results[0]:.4f}")