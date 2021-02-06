import { html, TemplateResult } from "lit-element";

import "./button";

export default {
    title: "Button",
    component: "tk-button",
};

export const testStory = (): TemplateResult => html` <tk-button>Test</tk-button> `;
