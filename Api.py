# Import the necessary library → import requests
# Set up the API URL → Define url
# Create a function to handle the API request → fetch_user_data()
# Set up try/except for error handling: HTTP status code: If 200, print the response data, else print error message.
# Handle exceptions properly to prevent crashes.
# Call the function and test in the terminal using: python3 script_name.py


import requests  

url = "https://jsonplaceholder.typicode.com/posts/1"  # posts api.

def fetch_data():
    try:
        response = requests.get(url)  

        if response.status_code == 200:
            print(response.json())
        else:
            print("Error:", response.status_code)

    except requests.exceptions.RequestException as err:
        print("Error fetching data:", err)

fetch_data()

