import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Gallery.scss';

interface Props {
    autoPlay?: boolean;
    browser: Browser;
    children: React.ReactNode;
    fullScreen: boolean;
}

interface States {
    drag: {
        start: number;
        end: number;
    } | null;
    positionA: number;
    positionB: number;
    size: number;
    status: 'A' | 'B';
    transition: boolean;
    width: {
        click: number;
        drag: number;
    } | null;
}

export default class Gallery extends React.Component<Props, States> {
    private interval: NodeJS.Timer;
    private bullets: React.RefObject<HTMLDivElement>;
    private drag: React.RefObject<HTMLDivElement>;
    private galleryA: React.RefObject<HTMLDivElement>;
    private galleryB: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.bullets = React.createRef();
        this.drag = React.createRef();
        this.galleryA = React.createRef();
        this.galleryB = React.createRef();
        this.state = {
            drag: null,
            size: React.Children.toArray(this.props.children).length,
            width: {
                click: null,
                drag: null
            },
            positionA: 0,
            positionB: 0,
            status: 'A',
            transition: false
        };
    }

    componentDidMount() {
        this.initGallery();
        this.initDrag();
        if (this.props.autoPlay) {
            this.interval = setInterval(() => this.handleChangeImage('Next'), 2500);
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.browser.height !== prevProps.browser.height || this.props.browser.width !== prevProps.browser.width) {
            this.handleChangeImage('Current');
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    private initGallery = () => {
        const position = this.state.status === 'A' ? this.state.positionA : this.state.positionB;
        setTimeout(() => {
            this.handleBullets(position);
            this.handleChangeImage('Current');
        }, 100);
    };

    private initDrag = () => {
        // IF AUTOPLAY IS ENABLED RETURN
        if (this.props.autoPlay) {
            return;
        }
        // DEFINE START
        const start = (position: number) => {
            // IF TRANSITION RETURN
            if (
                this.state.drag ||
                this.state.transition ||
                this.props.browser.mouse.cursor === 'Left' ||
                this.props.browser.mouse.cursor === 'Right'
            ) {
                return;
            }
            // UPDATE STATE
            this.setState({
                drag: {
                    start: position,
                    end: 0
                },
                transition: true
            });
        };
        // DEFINE MOVE
        const move = (position: number) => {
            // IF FALSE RETURN
            if (
                !this.state.drag ||
                !this.state.transition ||
                this.props.browser.mouse.cursor === 'Left' ||
                this.props.browser.mouse.cursor === 'Right'
            ) {
                return;
            }
            // DEFINE VARIABLES
            const gallery = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
            const end = position - this.state.drag.start;
            // UPDATE GALLERY
            gallery.style.transform = `translateX(${-this.getTranslate(this.state.status, 'Current').number + end}px)`;
            // UPDATE STATE
            this.setState({ drag: { ...this.state.drag, end } });
        };
        // DEFINE END
        const end = () => {
            // IF FALSE RETURN
            if (
                !this.state.drag ||
                !this.state.transition ||
                this.props.browser.mouse.cursor === 'Left' ||
                this.props.browser.mouse.cursor === 'Right'
            ) {
                return;
            }
            // DEFINE VARIABLES
            const statusActive = this.state.status === 'A' ? 'A' : 'B';
            const statusInactive = this.state.status === 'B' ? 'A' : 'B';
            const galleryActive = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
            const galleryInactive = this.state.status === 'B' ? this.galleryA.current : this.galleryB.current;
            // GET POSITION
            let position = this.state.status === 'A' ? this.state.positionA : this.state.positionB;
            let direction: 'Previous' | 'Current' | 'Next' = 'Current';
            // IF PREVIOUS IMAGE
            if (this.state.drag.end >= 100) {
                direction = 'Previous';
                position = this.getPosition(position - 1);
            }
            // IF NEXT IMAGE
            else if (this.state.drag.end <= -100) {
                direction = 'Next';
                position = this.getPosition(position + 1);
            }
            // UPDATE STATE
            this.setState({ drag: null });
            // BEFORE TRANSITION
            setTimeout(() => {
                // UPDATE ACTIVE GALLERY
                galleryActive.classList.add('transition');
                galleryActive.style.transform = this.getTranslate(statusActive, direction).string;
                // IF CURRENT IMAGE
                if (direction === 'Current') {
                    return;
                }
                // UPDATE BULLETS
                this.handleBullets(position);
                // UPDATE POSITION
                if (this.state.status === 'A') {
                    this.setState({ positionB: position });
                } else {
                    this.setState({ positionA: position });
                }
                // UPDATE INACTIVE GALLERY
                setTimeout(() => (galleryInactive.style.transform = this.getTranslate(statusInactive, 'Current', true).string), 100);
            });
            // AFTER TRANSITION
            setTimeout(() => {
                // UPDATE ACTIVE GALLERY
                galleryActive.classList.remove('transition');
                // UPDATE STATE
                this.setState({ transition: false });
                // IF CURRENT IMAGE
                if (direction === 'Current') {
                    return;
                }
                // UPDATE POSITION
                if (this.state.status === 'A') {
                    this.setState({ positionA: position, status: statusInactive });
                } else {
                    this.setState({ positionB: position, status: statusInactive });
                }
            }, 500);
        };
        // IF DESKTOP
        if (this.props.browser.device === 'Desktop') {
            this.drag.current.addEventListener('mousedown', event => start(event.clientX));
            this.drag.current.addEventListener('mousemove', event => move(event.clientX));
            this.drag.current.addEventListener('mouseup', () => end());
            this.drag.current.addEventListener('mouseout', () => end());
        }
        // IF MOBILE
        if (this.props.browser.device === 'Mobile') {
            this.drag.current.addEventListener('touchstart', event => start(event.touches[0].clientX));
            this.drag.current.addEventListener('touchend', () => end());
            this.drag.current.addEventListener('touchmove', event => {
                if (this.state.drag) event.preventDefault();
                move(event.touches[0].clientX);
            });
        }
    };

    private getPosition = (position: number) => {
        return (position + this.state.size) % this.state.size;
    };

    private getTranslate = (status: States['status'], direction: 'Previous' | 'Current' | 'Next', update?: boolean) => {
        // GET ELEMENTS
        const gallery = status === 'A' ? this.galleryA.current : this.galleryB.current;
        const images = gallery.children;
        // IF NO GALLERY OR IMAGES RETURN
        if (!gallery || !images || images.length === 0) {
            return;
        }
        // GET PADDING AND WIDTH
        const padding = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-horizontal').split('px').shift());
        const width = gallery.clientWidth - padding * 2;
        // GET POSITION
        let position;
        if (direction === 'Previous') {
            position = 2;
        } else if (direction === 'Current') {
            position = 3;
        } else if (direction === 'Next') {
            position = 4;
        }
        // DEFINE VARIABLES
        let click = padding;
        let drag = width;
        let translate = Array.from(images)
            .slice(0, position)
            .reduce((sum, image) => sum + image.clientWidth, 0);
        // IF CURRENT IMAGE IS SMALLER THAN CONTAINER
        if (!this.props.fullScreen && width !== images[position].clientWidth) {
            click = click + Math.round((width - images[position].clientWidth) / 2);
            drag = images[position].clientWidth;
            translate = translate - Math.round((width - images[position].clientWidth) / 2);
        }
        // IF UPDATE IS TRUE
        if (update) {
            this.setState({ width: !this.props.fullScreen ? { click, drag } : null });
        }
        // RETURN TRANSLATE
        return {
            number: translate,
            string: !this.props.fullScreen ? `translateX(${-translate}px)` : `translateX(-${position * 100}%)`
        };
    };

    private handleBullets = (position: number) => {
        // IF AUTOPLAY IS ENABLED RETURN
        if (this.props.autoPlay) {
            return;
        }
        // DELETE CLASS NAME FOR ALL BULLETS
        for (let index = 0; index < this.state.size; index++) {
            if (index >= Math.floor(position / 10) * 10 && index < Math.floor(position / 10) * 10 + 10) {
                this.bullets.current.children[index].className = 'active';
            } else {
                this.bullets.current.children[index].className = '';
            }
        }
        // UPDATE BULLETS
        this.bullets.current.children[position].classList.add('current');
    };

    private handleChangeImage = (direction: 'Previous' | 'Current' | 'Next') => {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.transition) {
            return;
        }
        // IF DIRECTION IS CURRENT
        if (direction === 'Current') {
            const gallery = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
            gallery.style.transform = this.getTranslate(this.state.status, 'Current', true).string;
            return;
        }
        // UPDATE STATE
        this.setState({ transition: true });
        // DEFINE VARIABLES
        const statusActive = this.state.status === 'A' ? 'A' : 'B';
        const statusInactive = this.state.status === 'B' ? 'A' : 'B';
        const galleryActive = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
        const galleryInactive = this.state.status === 'B' ? this.galleryA.current : this.galleryB.current;
        const position = this.getPosition(
            (this.state.status === 'A' ? this.state.positionA : this.state.positionB) + (direction === 'Previous' ? -1 : 1)
        );
        // BEFORE TRANSITION
        setTimeout(() => {
            // UPDATE ACTIVE GALLERY
            galleryActive.classList.add('transition');
            galleryActive.style.transform = this.getTranslate(statusActive, direction).string;
            // UPDATE BULLETS
            this.handleBullets(position);
            // UPDATE POSITION
            if (this.state.status === 'A') {
                this.setState({ positionB: position });
            } else {
                this.setState({ positionA: position });
            }
            // UPDATE INACTIVE GALLERY
            setTimeout(() => (galleryInactive.style.transform = this.getTranslate(statusInactive, 'Current', true).string), 100);
        });
        // AFTER TRANSITION
        setTimeout(() => {
            // UPDATE ACTIVE GALLERY
            galleryActive.classList.remove('transition');
            // UPDATE POSITION
            if (this.state.status === 'A') {
                this.setState({ positionA: position });
            } else {
                this.setState({ positionB: position });
            }
            // UPDATE STATE
            this.setState({ status: statusInactive, transition: false });
        }, 500);
    };

    private handleClick = (event: any) => {
        const mouse = document.getElementById('mouse');
        if (this.props.browser.mouse.cursor === 'Left' && !event.target.classList.contains('cursorLeft')) {
            this.handleChangeImage('Previous');
        } else if (this.props.browser.mouse.cursor === 'Right' && !event.target.classList.contains('cursorRight')) {
            this.handleChangeImage('Next');
        }
    };

    render() {
        // DEFINE VARIABLES
        const children = this.props.children as React.ReactNode[];
        const positionA = this.state.positionA;
        const positionB = this.state.positionB;
        // RETURN COMPONENT
        return (
            <div className={['gallery', this.props.fullScreen && 'fullScreen'].filter(x => x).join(' ')} onClick={this.handleClick}>
                {!this.props.autoPlay && <div ref={this.drag} className='drag' />}
                {!this.props.autoPlay && !this.state.drag && this.props.browser.device === 'Desktop' && (
                    <div className='click'>
                        <div
                            className='left cursorLeft'
                            onClick={() => this.handleChangeImage('Previous')}
                            style={this.state.width ? { width: `${this.state.width.click}px` } : {}}
                        />
                        <div
                            className='right cursorRight'
                            onClick={() => this.handleChangeImage('Next')}
                            style={this.state.width ? { width: `${this.state.width.click}px` } : {}}
                        />
                    </div>
                )}
                {!this.props.autoPlay && (
                    <div ref={this.bullets} className={'bullets'}>
                        {Array.from(Array(this.state.size).keys(), index => {
                            return <div key={`bullet_${index}`} data-index={index} className='bullet' />;
                        })}
                    </div>
                )}
                <div ref={this.galleryA} className={['galleryA', this.state.status === 'A' && 'active'].filter(x => x).join(' ')}>
                    <React.Fragment key='galleryA_01'>{children[this.getPosition(positionA - 3)]}</React.Fragment>
                    <React.Fragment key='galleryA_02'>{children[this.getPosition(positionA - 2)]}</React.Fragment>
                    <React.Fragment key='galleryA_03'>{children[this.getPosition(positionA - 1)]}</React.Fragment>
                    <React.Fragment key='galleryA_04'>{children[positionA]}</React.Fragment>
                    <React.Fragment key='galleryA_05'>{children[this.getPosition(positionA + 1)]}</React.Fragment>
                    <React.Fragment key='galleryA_06'>{children[this.getPosition(positionA + 2)]}</React.Fragment>
                    <React.Fragment key='galleryA_07'>{children[this.getPosition(positionA + 3)]}</React.Fragment>
                </div>
                <div ref={this.galleryB} className={['galleryB', this.state.status === 'B' && 'active'].filter(x => x).join(' ')}>
                    <React.Fragment key='galleryB_01'>{children[this.getPosition(positionB - 3)]}</React.Fragment>
                    <React.Fragment key='galleryB_02'>{children[this.getPosition(positionB - 2)]}</React.Fragment>
                    <React.Fragment key='galleryB_03'>{children[this.getPosition(positionB - 1)]}</React.Fragment>
                    <React.Fragment key='galleryB_04'>{children[positionB]}</React.Fragment>
                    <React.Fragment key='galleryB_05'>{children[this.getPosition(positionB + 1)]}</React.Fragment>
                    <React.Fragment key='galleryB_06'>{children[this.getPosition(positionB + 2)]}</React.Fragment>
                    <React.Fragment key='galleryB_07'>{children[this.getPosition(positionB + 3)]}</React.Fragment>
                </div>
            </div>
        );
    }
}
