import { html, TemplateResult } from "lit-element";

export default {
    title: "Console Theme",
    component: "tk-theme-console",
};

export const examples = (): TemplateResult => html`
    <style>
        .examples {
            display: grid;
            grid-template-columns: [description] auto [content] 1fr;
        }

        .examples_description {
            padding: 1em;
            border-right: 1px solid #bbb;
            grid-column: [description];
        }

        .examples_content {
            padding: 1em;
            grid-column: [content];
        }

        .examples hr {
            grid-column: 1 / -1;
        }
    </style>

    <h2>Font</h2>

    <div class="examples">
        <div class="examples_description">Plain text</div>
        <div class="examples_content">
            <span> The quick brown fox jumped over the lazy dog. </span>
        </div>

        <hr />

        <div class="examples_description">Headers</div>
        <div class="examples_content">
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
        </div>

        <hr />

        <div class="examples_description">Code</div>
        <div class="examples_content">
            <pre>
                <code>
                    if (isCode()) {
                        console.log("Look like this");
                    }
                </code>
            </pre>
        </div>
    </div>

    <table>
        <tbody>
            <tr>
                <td>Code</td>
                <td>
                    <pre>
                        <code>
                            if (isCode()) {
                                console.log("Look like this");
                            }
                        </code>
                    </pre>
                </td>
            </tr>
        </tbody>
    </table>

    <h2>Button</h2>
    <!-- TODO(durandj): button example -->

    <h2>Table</h2>
    <!-- TODO(durandj): table example -->
`;
