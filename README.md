# Real-Time-Tracking-system

A simple real-time tracking application that shows live user locations on a map using WebSockets.

## Features

- Live location tracking
- Real-time updates
- Interactive map
- Multiple users support

## Tech Stack
- Node.js
- Express.js
- Socket.IO

## Installation

### Clone the project

```bash
git clone https://github.com/your-username/realtime-tracking-app.git
cd realtime-tracking-app
```

### Install dependencies

#### Backend

```bash
cd server
npm install
npm start
```


## Environment Variables

Create a `.env` file:

```env
PORT=5000
MAP_API_KEY=your_api_key
```

## How It Works

1. User shares location
2. Backend receives coordinates
3. Socket.IO sends live updates
4. Map updates in real time

## Future Improvements

- Authentication
- Route history
- Geofencing
- Notifications

## License

MIT
