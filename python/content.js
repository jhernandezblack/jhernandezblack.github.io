// content.js

// Function to return content for *args
function argsContent() {
    return `
        <h1>1.1 Usage of *args</h1>
        <p>*args allows you to pass a non-keyworded variable-length argument list to a function.</p>
        <pre class="code-block">
            <code>
                def test_var_args(f_arg, *argv):
                    print("first normal arg:", f_arg)
                    for arg in argv:
                        print("another arg through *argv:", arg)

                    test_var_args('yasoob', 'python', 'eggs', 'test')
            </code>
        </pre>
    `;
}

// Function to return content for **kwargs
function kwargsContent() {
    return `
        <h1>1.2 Usage of **kwargs</h1>
        <p>**kwargs allows you to pass keyworded variable-length arguments to a function.</p>
        <pre class="code-block">
            <code>def test_kwargs(**kwargs):
for key, value in kwargs.items():
    print(f"{key} = {value}")

test_kwargs(name="Python", age=3, topic="Tips")</code>
        </pre>
    `;
}

// Function to return content for Debugging
function debuggingContent() {
    return `
        <h1>2. Debugging</h1>
        <p>Debugging involves identifying and fixing errors in your code. Common tools include print statements, logging, and debugging libraries like pdb.</p>
    `;
}

// Function to return content for Generators
function generatorsContent() {
    return `
        <h1>3. Generators</h1>
        <p>Generators allow lazy iteration using the 'yield' keyword.</p>
        <pre class="code-block">
            <code>def simple_generator():
for i in range(5):
    yield i

for value in simple_generator():
    print(value)</code>
        </pre>
    `;
}
