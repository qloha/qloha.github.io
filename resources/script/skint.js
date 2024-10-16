console.log("Hello. If you are reading this, you have inspected this page.")
console.log("I should also let you know that the Skription compiler is not complete at all, and is just another side project.")
console.log("I wish I could continue making this language, but there are too many bugs for me to fix right now, so I have to put this project aside.")
console.log("I hope this finds you well, and have a good day.")

class SkriptionInterpreter {
    constructor() {
        this.variables = {}; // Store variables here
        this.functions = {};
        this.outputElement = document.getElementById('output');
    }

    execute(code) {
        this.clearOutput(); // Clear previous output before execution
        const lines = code.split('\n');
        let i = 0;
        while (i < lines.length) {
            const line = lines[i].trim();
            if (line.startsWith('function')) {
                this.handleFunctionDefinition(line);
            } else if (line.startsWith('send')) {
                this.handleSend(line);
            } else if (/\{(\w+)\}\s*=/.test(line)) {
                this.handleAssignment(line);
            } else if (line.startsWith('for every')) {
                this.handleForLoop(line);
            } else if (this.isCondition(line)) {
                this.handleCondition(line);
            } else if (this.isFunctionCall(line)) {
                this.handleFunctionCall(line);
            } else if (line.startsWith('#')) {
                // Single-line comment: Do nothing
            } else if (line.startsWith('```')) {
                // Multi-line comment: Skip until the next ```
                while (++i < lines.length && !lines[i].trim().startsWith('```'));
            } else if (line) { // Check if line is not empty
                this.output(`Unrecognized command: ${line}`);
            }
            i++;
        }
    }

    handleFunctionDefinition(line) {
        const match = line.match(/function\s+(\w+)\s*{([\s\S]*?)}/);
        if (!match) {
            this.output('Error: Invalid function definition syntax.');
            return;
        }

        const funcName = match[1];
        const body = match[2].split('\n').map(l => l.trim()).filter(l => l);
        this.functions[funcName] = body;
    }

    handleSend(line) {
        const match = line.match(/send\s+"(.*)"/);
        if (!match) {
            this.output('Error: Invalid send syntax.');
            return;
        }

        // Get the content inside the quotes
        let expression = match[1];

        // Replace variables with their values
        expression = this.replaceVariables(expression);

        // Output the evaluated expression without percentage signs
        this.output(expression);
    }

    handleAssignment(line) {
        const match = line.match(/\{(.*?)\} = (.*)/);
        if (!match) {
            this.output('Error: Invalid assignment syntax.');
            return;
        }

        const variableName = match[1].trim();
        const value = match[2].trim();

        // Assign the value to the variables, removing surrounding quotes if necessary
        this.variables[variableName] = value.replace(/^"|"$/g, '');

        this.output(`Assigned {${variableName}} = ${this.variables[variableName]}`);
    }

    isFunctionCall(line) {
        return /^\w+\s+\{(\w+)\}$/.test(line);
    }

    handleFunctionCall(line) {
        const match = line.match(/^(\w+)\s+\{(\w+)\}$/);
        if (!match || !this.functions[match[1]]) {
            this.output('Error: Function not defined.');
            return;
        }

        const funcName = match[1];
        const paramVarName = match[2].replace(/[{}]/g, ''); // Strip curly brackets

        if (this.variables[paramVarName] !== undefined) {
            const paramValue = this.variables[paramVarName];
            this.functions[funcName].forEach(line => {
                this.processLine(line.replace(/{(\w+)}/g, paramValue)); // Replace variable in function body
            });
        } else {
            this.output(`Warning: Variable {${paramVarName}} is undefined.`);
        }
    }

    isCondition(line) {
        return /^(if|otherwise if|otherwise)\s+\{(\w+)\}\s*>\s*(\d+)/.test(line);
    }

    handleCondition(line) {
        const match = line.match(/^(if|otherwise if)\s+\{(\w+)\}\s*>\s*(\d+)/);
        if (!match) {
            this.output('Error: Invalid condition syntax.');
            return;
        }

        const conditionType = match[1];
        const varName = match[2];
        const threshold = parseInt(match[3], 10);

        if (conditionType === 'if' && this.variables[varName] > threshold) {
            this.output(`Condition met: {${varName}} is greater than ${threshold}`);
        } else if (conditionType === 'otherwise if' && this.variables[varName] <= threshold) {
            this.output(`Condition not met: {${varName}} is less than or equal to ${threshold}`);
        }
        // Handle "otherwise" as a separate case if needed
    }

    evaluateExpression(expression) {
        const replacedExpression = this.replaceVariables(expression);
        try {
            return eval(replacedExpression); // Be cautious with eval in real apps
        } catch (error) {
            this.output(`Error evaluating expression: ${error.message}`);
            return '';
        }
    }

    replaceVariables(expression) {
        // Replace curly bracketed variables with their values
        return expression.replace(/\{(.*?)\}/g, (match, p1) => {
            // Check if the variable exists in the variables
            if (this.variables[p1] !== undefined) {
                return this.variables[p1];
            }
            return match; // Return the original match if the variable doesn't exist
        });
    }

    output(message) {
        this.outputElement.textContent += `${message}\n`;
    }

    clearOutput() {
        this.outputElement.textContent = '';
    }
}

function executeSkription() {
    const code = document.getElementById('skriptionCode').value;
    const interpreter = new SkriptionInterpreter();
    interpreter.execute(code);
}

function clearOutput() {
    const interpreter = new SkriptionInterpreter();
    interpreter.clearOutput();
}