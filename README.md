# MeetNexus

MeetNexus is a web application for hosting and joining video call meetings. Users can host their meetings by logging into MeetNexus and share meeting links for others to join. This project is built using React.js, HTML, CSS, JavaScript, Sass, and integrates video call functionality using Zogocloud.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and login
- Host meetings
- Join meetings via shared link
- Video call integration using Zogocloud
- Responsive design

## Technologies Used

- React.js
- HTML
- CSS
- JavaScript
- Sass
- Zogocloud

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/meetnexus.git
    ```

2. Navigate to the project directory:

    ```sh
    cd meetnexus
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and add your Zogocloud API keys:

    ```sh
    REACT_APP_ZOGOCLOUD_API_KEY=your_zogocloud_api_key
    ```

5. Start the development server:

    ```sh
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Login**: Users can log in to MeetNexus to access the meeting features.
2. **Host a Meeting**: After logging in, users can host a meeting and get a unique meeting link.
3. **Join a Meeting**: Users can join a meeting by pasting the meeting link in the join meeting section.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact us at [your-email@example.com].

