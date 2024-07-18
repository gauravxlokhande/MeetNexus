# MeetNexus

MeetNexus is a web application for hosting and joining video call meetings. Users can host their meetings by logging into MeetNexus and share meeting links for others to join. This project is built using React.js, HTML, CSS, JavaScript, Sass, and integrates video call functionality using Zogocloud.

![Screenshot 2024-07-18 122959](https://github.com/user-attachments/assets/2f1f42ed-5c05-4bf1-95a2-2f14169d025a)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
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
    git clone https://github.com/gauravxlokhande/meetnexus.git
    ```

2. Navigate to the project directory:

    ```sh
    cd meetnexus
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Replace your Zogocloud API keys In Meet.jsx:

    ```sh
   const appID = 1828215307;
   const serverSecret = "adf03c2edb7f07f2b4305e443b103f7c";
    ```

5. Start the development server:

    ```sh
    npm run dev
    ```

6. Open your browser and navigate to your localhost `http://localhost:3000`.

## Usage

1. **Login**: Users can log in to MeetNexus to access the meeting features.
2. **Host a Meeting**: After logging in, users can host a meeting and get a unique meeting link.
3. **Join a Meeting**: Users can join a meeting by pasting the meeting link in the join meeting section.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact me at [gaurravlokhande@gmail.com].

