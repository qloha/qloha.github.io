class SkriptionInterpreter {
    constructor() {
        this.variables = {};
        this.functions = {};
    }

    execute(code) {
        const lines = code.split('\n');
        let i = 0;
        while (i < lines.length) {
            let line = lines[i].trim();
            if (line.startsWith('function')) {
                i = this.handleFunctionDefinition(lines, i);
            } else {
                this.processLine(line);
            }
            i++;
        }
    }

    processLine(line) {
        if (line.startsWith('send')) {
            this.handleSend(line);
        } else if (/\{(\w+)\}\s*=/.test(line)) {
            this.handleAssignment(line);
        } else if (line.startsWith('for every')) {
            this.handleForLoop(line);
        } else if (/\w+\(\)/.test(line)) {
            this.handleFunctionCall(line);
        }
    }

    handleForLoop(line) {
        const match = line.match(/for every \{(\w+)\} in \{(\w+)\}:/);
        if (match) {
            const varName = match[1]; // The variable name (e.g., x)
            const iterableName = match[2]; // The iterable (e.g., list)
            const iterable = this.variables[iterableName];

            if (Array.isArray(iterable)) {
                // Iterate over each item in the iterable
                for (const item of iterable) {
                    this.variables[varName] = item; // Set the loop variable
                    // Execute the next lines in the loop body
                    this.processLoopBody();
                }
            } else {
                this.output(`Error: {${iterableName}} is not iterable.`);
            }
        }
    }

    processLoopBody() {
        // Here you can define what should happen inside the loop body
        // For simplicity, just sending the value of the loop variable
        this.output(`Current value: ${this.variables['x']}`); // Replace 'x' with the loop variable if needed
    }

    handleSend(line) {
        let expression = line.match(/send\s+(.*)/)[1];
        // Replace variables with their values
        expression = expression.replace(/\{(\w+)\}/g, (match, varName) => {
            const value = this.variables[varName];
            return value !== undefined ? value : match;
        });
        const evaluatedOutput = this.evaluateExpression(expression);
        this.output(evaluatedOutput);
    }

    handleAssignment(line) {
        const match = line.match(/\{(\w+)\}\s*=\s*(.*)/);
        const varName = match[1];
        const value = this.evaluateExpression(match[2]);
        this.variables[varName] = value;
    }

    handleFunctionDefinition(lines, startIndex) {
        const match = lines[startIndex].match(/function\s+(\w+)\(\):/);
        const funcName = match[1];
        const funcBody = [];
        let i = startIndex + 1;
        while (i < lines.length && lines[i].startsWith('    ')) {
            funcBody.push(lines[i].trim());
            i++;
        }
        this.functions[funcName] = funcBody;
        return i - 1;
    }

    handleFunctionCall(line) {
        const funcName = line.match(/(\w+)\(\)/)[1];
        const funcBody = this.functions[funcName];
        if (funcBody) {
            funcBody.forEach(funcLine => this.processLine(funcLine));
        }
    }

    evaluateExpression(expression) {
        const varNames = Object.keys(this.variables);
        const varValues = Object.values(this.variables);
        const func = new Function(...varNames, `return ${expression};`);
        return func(...varValues);
    }

    output(message) {
        const outputElement = document.getElementById('output');
        outputElement.textContent += message + '\n';
    }
}

function executeSkription() {
    const skriptionCode = document.getElementById('skriptionCode').value;
    const interpreter = new SkriptionInterpreter();
    interpreter.execute(skriptionCode);
}

function clearOutput() {
    document.getElementById('output').textContent = '';
}

function adjustTextareaHeight() {
    const textarea = document.getElementById('skriptionCode');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Initialize the textarea height adjustment
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('skriptionCode');
    textarea.addEventListener('input', adjustTextareaHeight);
    adjustTextareaHeight(); // Adjust height on page load
});