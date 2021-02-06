import {
    css,
    CSSResult,
    customElement,
    html,
    LitElement,
    TemplateResult,
    property,
} from "lit-element";

export enum ButtonAppearance {
    default = "default",
}

@customElement("tk-button")
export default class Button extends LitElement {
    static get styles(): CSSResult {
        return css`
            :host {
                font-size: 1rem;
            }

            button {
                padding: var(--tk_button_padding);
                margin: var(--tk_button_margin);
            }

            button.appearance-default {
                border-width: var(--tk_button_default_border_width);
                border-style: var(--tk_button_default_border_style);
                border-color: var(--tk_button_default_border_color);
                background-color: var(--tk_button_default_background);
                font-family: var(--tk_button_default_font_family);
                color: var(--tk_button_default_font_color);
            }
        `;
    }

    @property({
        type: String,
    })
    appearance: ButtonAppearance = ButtonAppearance.default;

    render(): TemplateResult {
        return html`
            <button class="appearance-${this.appearance}">
                <slot></slot>
            </button>
        `;
    }
}
