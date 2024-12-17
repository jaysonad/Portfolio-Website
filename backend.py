from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow communication between frontend and backend

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    print(f"Name: {name}, Email: {email}, Message: {message}")
    return jsonify({'status': 'success', 'message': 'Form submitted successfully!'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
