import gameData from '../../../data/gamedata';
import levels from '../../../data/levels';
import { getElement } from '../../../functions/functions';
import AppView from '../../view/appview';
import HelpListener from './help';
import HoverListeners from './hoverListeners';
import Submit from './submit';

class Listeners {
    private view: AppView;
    private submit: Submit;
    private hover: HoverListeners;
    private help: HelpListener;
    private level: number;
    private isHelpUsed = false;

    constructor(level: number) {
        this.level = level;
        this.view = new AppView(0);
        this.submit = new Submit();
        this.hover = new HoverListeners();
        this.help = new HelpListener();
    }
    private redrawContent(): void {
        this.view.drawBoard(this.level);
        this.view.drawMenu(this.level);
        this.view.drawHelpButton();
        this.view.createHtmlContent(this.level);
        this.addListenersToButtons();
        this.hover.addHoverListeners();
    }
    public addHoverListeners() {
        this.hover.addHoverListeners();
    }
    public nextLevel(level: number): void {
        this.level = level;
        if (this.level < levels.length - 1) {
            this.level += 1;
            this.redrawContent();
        }
    }
    public prevLevel(level: number): void {
        this.level = level;
        if (this.level > 0) {
            this.level -= 1;
            this.redrawContent();
        }
    }
    public addListenersToButtons(): void {
        const buttonLeft: HTMLButtonElement = getElement('.menu__button-left');
        const buttonRight: HTMLButtonElement = getElement('.menu__button-right');
        buttonLeft.addEventListener('click', () => {
            this.prevLevel(this.level);
        });
        buttonRight.addEventListener('click', () => {
            this.nextLevel(this.level);
        });
        const submitButton: HTMLButtonElement = getElement('.editor__button');
        submitButton.addEventListener('click', () => {
            if (this.submit.checkAnswer(this.level)) {
                this.nextLevel(this.level);
                this.submit.clearInput();
                gameData.completedLevels.push([this.level, this.isHelpUsed]);
                this.isHelpUsed = false;
            }
        });
        const helpButton: HTMLButtonElement = getElement('.help__button');
        helpButton.addEventListener('click', () => {
            this.submit.clearInput();
            this.isHelpUsed = true;
            this.help.showAnswer(levels[this.level].answer);
        });
        const input: HTMLInputElement = getElement('.editor__input');
        input.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                if (this.submit.checkAnswer(this.level)) {
                    this.nextLevel(this.level);
                    this.submit.clearInput();
                }
            }
        });
        const levelButtons: HTMLDivElement = getElement('.levels__content');
        levelButtons.addEventListener('click', (e: Event) => {
            if (e.target && e.target instanceof HTMLElement) {
                if (e.target.className === 'levels__button') {
                    this.level = Number(e.target.id.slice(3)) - 1;
                    this.redrawContent();
                }
            }
        });
    }
}
export default Listeners;