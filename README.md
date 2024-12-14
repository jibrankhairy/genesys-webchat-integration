# Genesys WebChat Integration

This repository contains the implementation code for integrating Genesys WebChat widgets into a web application. The integration leverages Genesys Cloud's `purecloud-v2-sockets` transport for real-time communication. 

## Features
- **WebChat Button**: A styled button that triggers the WebChat widget.
- **Customizable Form**: Pre-configured form fields for capturing user data such as first name, last name, email, and subject.
- **Routing Configuration**: Supports queue-based routing for interaction prioritization.
- **Easy Deployment**: Includes a simple HTML structure and JavaScript logic for seamless integration.

## File Structure
- **`index.html`**: The main HTML file embedding the Genesys WebChat widget and custom chat button.
- **`css/style.css`**: Styling for the WebChat button and other UI elements.
- **`script/index.js`**: Contains JavaScript for configuring the Genesys WebChat plugin.

## How It Works
1. The WebChat widget is initialized using Genesys Cloud's `CXBus` library.
2. A button (`Start Chat`) allows users to open the chat interface with a customized form.
3. Interaction routing is set up to target a specific queue (`Support-(Jibran)`) with a predefined priority.

## Getting Started
### Prerequisites
- A Genesys Cloud account with WebChat services enabled.
- Deployment key, organization GUID, and queue configuration.

### Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/genesys-webchat-integration.git
   cd genesys-webchat-integration
