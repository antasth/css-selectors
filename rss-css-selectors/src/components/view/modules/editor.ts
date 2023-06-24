import levels from '../../../data/levels';
import { getElement } from '../../../functions/functions';

class Editor {
    private data: string;
    private level: number;

    constructor(level: number) {
        this.level = level;
        this.data = levels[level].htmlContent;
    }
    public drawEditor(): void {
        const editor = getElement('.editor__wrapper');
        editor.append(this.drawCssEditor(), this.drawHtmlEditor());
        this.createHtmlContent(this.level);
    }
    private drawCssEditor(): HTMLDivElement {
        const cssEditor = document.createElement('div');
        cssEditor.classList.add('editor__css');

        const cssEditorHeader = document.createElement('div');
        cssEditorHeader.classList.add('editor__header');
        cssEditorHeader.innerText = 'CSS';

        const cssEditorContent = document.createElement('div');
        cssEditorContent.classList.add('editor__content-css');

        const listNumbers = this.createListNumbers();

        const editorInput = document.createElement('input');
        editorInput.classList.add('editor__input');
        editorInput.setAttribute('placeholder', 'введите CSS селектор');
        editorInput.setAttribute('type', 'text');

        const submitButton = document.createElement('button');
        submitButton.classList.add('editor__button');
        submitButton.textContent = 'Enter';
        const inputContent = document.createElement('div');
        inputContent.classList.add('editor__input__content');
        inputContent.append(editorInput, submitButton);

        cssEditorContent.append(listNumbers, inputContent);
        cssEditor.append(cssEditorHeader, cssEditorContent);
        return cssEditor;
    }
    private drawHtmlEditor(): HTMLDivElement {
        const htmlEditor = document.createElement('div');
        htmlEditor.classList.add('editor__html');

        const cssEditorHeader = document.createElement('div');
        cssEditorHeader.classList.add('editor__header');
        cssEditorHeader.innerText = 'HTML';

        const editorContent = document.createElement('div');
        editorContent.classList.add('editor__content-html');

        const listNumbers = this.createListNumbers();

        editorContent.append(listNumbers);
        htmlEditor.append(cssEditorHeader, editorContent);
        return htmlEditor;
    }
    private createListNumbers(): HTMLUListElement {
        const editorNumbers = document.createElement('ul');
        editorNumbers.classList.add('editor__numbers');
        editorNumbers.innerHTML = [...Array(20)].map((_, i) => `<li>${i + 1}</li>`).join('');
        return editorNumbers;
    }
    public createHtmlContent(level: number): void {
        this.data = levels[level].htmlContent;
        if (document.querySelector('.editor__content')) this.clearHtmlContent();
        const editorHtml = getElement('.editor__content-html');
        const editorHtmlContent = document.createElement('textarea');
        editorHtmlContent.readOnly = true;
        editorHtmlContent.classList.add('editor__content');
        editorHtmlContent.textContent = this.data;
        editorHtml.append(editorHtmlContent);
    }
    private clearHtmlContent(): void {
        const editorHtml = getElement('.editor__content-html');
        const editorContent = getElement('.editor__content');
        if (editorHtml && editorContent) editorHtml.removeChild(editorContent);
    }
}
export default Editor;
