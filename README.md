# GATE Calculator

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=sairajB.gateCalculatorExtension)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive scientific calculator browser extension designed specifically for engineering students and professionals preparing for GATE (Graduate Aptitude Test in Engineering) examinations. The calculator provides an overlay interface that can be accessed on any webpage without interrupting your study session.

## Features

### Core Mathematical Operations

- **Basic Arithmetic**: Addition, subtraction, multiplication, division
- **Advanced Operations**: Modulus, percentage calculations, exponentiation
- **Memory Functions**: Store, recall, add to memory, subtract from memory, clear memory

### Scientific Functions

- **Trigonometric Functions**: sin, cos, tan, cot, sec, cosec
- **Inverse Trigonometric Functions**: sin⁻¹, cos⁻¹, tan⁻¹
- **Hyperbolic Functions**: sinh, cosh, tanh, sech, cosech
- **Inverse Hyperbolic Functions**: sinh⁻¹, cosh⁻¹, tanh⁻¹
- **Logarithmic Functions**: ln (natural log), log (base 10), log₂ (base 2), logᵧx (arbitrary base)
- **Exponential Functions**: eˣ, 10ˣ, xʸ, x², x³
- **Root Functions**: √x, ∛x, ʸ√x (nth root)

### Special Mathematical Constants

- **π (Pi)**: 3.14159...
- **e (Euler's number)**: 2.71828...
- **Mathematical fractions**: π/2, π/3, π/4, π/6
- **Square roots**: √2, √3
- **Cube root**: ∛2
- **Logarithmic constants**: ln(10), log(e)

### Engineering-Specific Features

- **Factorial Function**: n! with support for large numbers
- **Absolute Value**: |x|
- **Sigma Values**: Statistical probability values for quality control (1σ, 3σ, 6σ)
- **Angle Mode Selection**: Degree and Radian modes for trigonometric calculations
- **Scientific Notation**: EXP function for exponential notation
- **Precision Control**: Automatic precision adjustment for different operation types

### User Interface Features

- **Draggable Interface**: Move calculator anywhere on the page by dragging the header bar
- **Overlay Design**: Non-intrusive calculator that overlays on any webpage
- **Multiple Access Methods**: Click toolbar icon or use optional keyboard shortcut (Ctrl+Shift+Y)
- **Expression Display**: Shows complete mathematical expressions with intermediate steps
- **Parentheses Support**: Complex expression evaluation with proper operator precedence
- **Memory Indicator**: Visual indication when values are stored in memory
- **Minimizable Interface**: Compact mode for reduced screen space usage
- **Built-in Help**: Comprehensive instructions and usage guidelines

## Installation

### Manual Installation (Developer Mode)

1. **Download the Extension Files**:
   - Go to the [GitHub repository](https://github.com/sairajB/gateCalculatorExtension)
   - Click the green "Code" button
   - Select "Download ZIP"
   - Extract the downloaded ZIP file to a folder on your computer

2. **Load Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the extracted extension folder
   - The calculator icon should appear in your browser toolbar

## Usage

### Accessing the Calculator

The calculator provides a draggable overlay that injects directly into any webpage:

**Two ways to open:**

- **Click the calculator icon** in the toolbar (instant access)
- **Keyboard shortcut**: Press `Ctrl+Shift+Y` (optional, requires one-time setup)

**Features:**

- **Draggable**: Click and drag the blue "Scientific Calculator" header bar to reposition anywhere on the page
- Stays in position while you browse and study
- Non-intrusive overlay that doesn't block content
- Works on any webpage

**To close:**

- Click the X button in the calculator, OR
- Click the toolbar icon again to toggle it off, OR
- Press `Ctrl+Shift+Y` again (if using keyboard shortcut)

### Setting Up the Keyboard Shortcut (Optional)

For keyboard access, manually assign the shortcut (one-time setup):

1. Open Chrome and go to `chrome://extensions/shortcuts`
2. Scroll down to find "GATE Calculator"
3. Click in the empty field next to "Toggle GATE Calculator on page"
4. Press `Ctrl+Shift+Y` (or your preferred key combination)
5. The shortcut is now active!

**Note**: Chrome doesn't auto-assign keyboard shortcuts. This is optional but recommended for faster access.

### Basic Operations

1. **Open the calculator**: Click the icon in the toolbar (or press `Ctrl+Shift+Y` if set up)
2. The calculator will appear on the current webpage
3. **Move the calculator**:
   - Hover over the blue "Scientific Calculator" header bar
   - Click and drag to reposition anywhere on the page
4. Use mouse clicks to input numbers and operations
5. Press `=` to calculate results
6. Press `C` to clear current input or `AC` to clear all
7. **Close the calculator**: Click the X button, click the toolbar icon again, or press `Ctrl+Shift+Y` again

### Memory Functions

- **MS**: Store current display value in memory
- **MR**: Recall value from memory
- **M+**: Add current display value to memory
- **M-**: Subtract current display value from memory
- **MC**: Clear memory

### Angle Modes

- **Degree Mode**: Default mode for trigonometric calculations
- **Radian Mode**: Alternative angle measurement for advanced calculations
- Toggle between modes using the Deg/Rad radio buttons

### Advanced Features

- **Parentheses**: Use `(` and `)` for complex expressions
- **Scientific Notation**: Use `Exp` for exponential notation (e.g., 1.5e+10)
- **Constants**: Quick access to mathematical constants like π and e
- **Function Chaining**: Combine multiple operations in sequence

## Mathematical Accuracy and Limitations

### Precision Guidelines

- **General Calculations**: Accurate up to 8 decimal places
- **Factorial Operations**: Precise up to 14 digits (maximum n = 170)
- **Logarithmic Functions**: Precise up to 5 decimal places
- **Hyperbolic Functions**: Precise up to 5 decimal places
- **Modulus Operations**: Best results with numbers less than 15 digits

### Supported Range

- **Minimum Value**: 10⁻³²³
- **Maximum Value**: 10³⁰⁸
- **Overflow Handling**: Displays "Infinity" for values exceeding range
- **Error Handling**: Displays "Math Error" for undefined operations

### Special Cases

- **Division by Zero**: Returns "Math Error"
- **Invalid Trigonometric Inputs**: Returns "Math Error" for out-of-domain values
- **Negative Factorials**: Returns "Math Error"
- **Complex Number Results**: Not supported (returns "Math Error")

## Best Practices

### Calculation Guidelines

- Always press `C` before starting new calculations
- Use parentheses to ensure proper order of operations
- Select appropriate angle mode (Deg/Rad) before trigonometric calculations
- Avoid changing angle mode during active calculations
- Use memory functions for intermediate results in complex calculations

### Performance Optimization

- Close calculator when not in use to free system resources
- Use the minimize function for long-term availability
- Clear memory periodically to prevent accumulation of old values

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The MIT License is a permissive license that allows for reuse within proprietary software provided that all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

## Troubleshooting

### Common Issues

**Calculator not appearing**: Check if the extension is enabled in Chrome extensions page

**Keyboard shortcut not working**:

- Go to `chrome://extensions/shortcuts` and verify the shortcut is set
- If it shows "Not set", manually assign `Ctrl+Shift+Y`
- Check for conflicts with other extensions using the same shortcut

**Cannot drag the calculator**:

- Make sure you're clicking and dragging the blue header bar (with "Scientific Calculator" text)
- Don't click on the Help, Minimize, or Close buttons
- Ensure the calculator has fully loaded before attempting to drag

**Calculation errors**: Ensure inputs are within supported ranges and formats

**Memory issues**: Clear memory and restart calculation sequence

### Browser Compatibility

- **Supported**: Chrome 88+, Edge 88+, Opera 74+
- **Manifest Version**: V3 (latest Chrome extension standards)
- **Required Permissions**: Script injection for draggable overlay functionality
