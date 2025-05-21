# Color Palette Generator

---

## Overview

This project is a simple yet elegant **Color Palette Generator**. It allows users to instantly generate a set of five random, visually appealing color hex codes. Each color is displayed in a dedicated box, making it easy to preview and copy the hex value with a single click. The application is built using **HTML**, **CSS**, and **JavaScript**, demonstrating a clean and responsive design.

---

## Website

<img width="1440" alt="Screenshot 2025-05-22 at 12 52 34 AM" src="https://github.com/user-attachments/assets/59a7b91a-7fd6-4eda-b8ab-88afac17e118" />

---
## Features

* **Random Color Generation**: Generates five unique random hexadecimal color codes with a single click.
* **Instant Preview**: Displays each generated color visually in a dedicated box.
* **Copy to Clipboard**: Easily copy the hex code of any color to your clipboard by clicking on the hex value or the copy icon.
* **Responsive Design**: Adapts seamlessly to different screen sizes, providing a consistent user experience on desktops, tablets, and mobile devices.
* **Modern UI**: Features a clean and attractive user interface with smooth transitions and subtle animations.

---

## Technologies Used

* **HTML5**: For the basic structure of the web page.
* **CSS3**: For styling and layout, including a responsive design.
* **JavaScript**: For dynamic functionality, such as color generation and copy-to-clipboard features.
* **Font Awesome**: Used for the copy icon and generate button icon.
* **Google Fonts (Poppins)**: For a modern and readable typeface.

---

## Setup and Installation

To run this project locally, follow these simple steps:

1.  **Clone the repository (or download the files):**
    ```bash
    git clone [https://github.com/your-username/color-palette-generator.git](https://github.com/your-username/color-palette-generator.git)
    ```
    (Replace `your-username` with the actual GitHub username if this is hosted on GitHub, otherwise, instruct them to download the zip.)

2.  **Navigate to the project directory:**
    ```bash
    cd color-palette-generator
    ```

3.  **Open `index.html` in your web browser.** That's it! The application is entirely client-side and requires no server setup.

---

## Usage

1.  **Generate a new palette**: Click the "**Generate Palette**" button to create a new set of five random colors.
2.  **Copy a color hex code**:
    * Click directly on the **hex value** (e.g., `#E1F5FE`).
    * Click the **copy icon** (clipboard icon) next to the hex value.
    * A small checkmark will briefly appear, indicating that the color has been successfully copied to your clipboard.

---

## Project Structure

This project is organized into three main files:

* **`index.html`**: This is the **main HTML file** that lays out the structure and content of the web page. It's the blueprint for what you see in your browser.
* **`style.css`**: This file contains all the **CSS rules** that dictate the visual presentation of the project. It controls things like colors, fonts, spacing, and how elements are arranged on the page.
* **`script.js`**: This JavaScript file handles the **dynamic functionality** of the application. It's where the logic for generating colors, handling user interactions, and updating the display resides.

---

## Customization

* **Change the number of colors**: Modify the `for` loop condition in the `generatePalette()` function in `script.js` to generate more or fewer colors. Remember to adjust the `palette-container` grid in `style.css` if you significantly change the number of boxes.
* **Modify styling**: All visual aspects can be customized through the `style.css` file. Feel free to change fonts, colors, spacing, and animations to match your preferences.
* **Integrate into another project**: The core JavaScript functions (`generateRandomColor`, `generatePalette`, `updatePaletteDisplay`, `showCopySuccess`) can be easily adapted and integrated into other web projects requiring color generation capabilities.

---

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Any contributions are welcome!
