from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/reverse', methods=['POST'])
def reverse():
    data = request.json  # assuming JSON data
    print("Received message:", data['text'])  # Log or process the received data
    # You could add logic here to handle the data, then respond accordingly
    return jsonify({"status": "success", "message": "Message received successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
