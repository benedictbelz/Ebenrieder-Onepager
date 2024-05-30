import * as React from 'react';
import queryString from 'query-string';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import Parallax from '../Parallax/Parallax';
import { PropsWithRouter, withRouter } from '../../Router/Router';
import { getFeatureImage, getRooms } from '../../@presets/rooms';
import { getFilter, getLanguage, getFeature } from '../../@presets/language';
import { Room, FilterRoom, availableFilters } from '../../@types/rooms';
import { Browser } from '../../@types/browser';
import './Rooms.scss';

interface Props extends PropsWithRouter {
    browser: Browser;
    filters: FilterRoom[];
}

interface States {
    room: Room | null;
    filter: FilterRoom;
}

class Rooms extends React.Component<Props, States> {
    private rooms: React.RefObject<HTMLDivElement>;
    private timeout: any = [];

    constructor(props: Props) {
        super(props);
        this.rooms = React.createRef();
        this.state = {
            room: null,
            filter: this.props.filters[0]
        };
    }

    componentDidMount() {
        // CHECK QUERY PARAMS
        let params = queryString.parse(this.props.router.location.search);
        let room = params.event ? getRooms().find(item => item.link === params.event) : null;
        // IF EVENT
        if (room && this.rooms.current) {
            const scroll = Math.round(this.rooms.current.getBoundingClientRect().top) + this.props.browser.scroll;
            setTimeout(() => (document.documentElement.scrollTop = scroll), 25);
            setTimeout(() => this.setState({ room }), 50);
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.browser.media !== prevProps.browser.media && (this.props.browser.media === 'Medium' || prevProps.browser.media === 'Medium')) {
            this.animateRooms();
        }
    }

    private animateRooms = () => {
        // DEFINE VARIABELS
        let index = 0;
        let rooms = document.querySelectorAll('.room') as unknown as HTMLElement[];
        // RESET TIMEOUT
        this.timeout.forEach((timeout: any) => clearTimeout(timeout));
        // RESET PROJECTS
        rooms.forEach(room => {
            room.classList.add('opacity');
            room.classList.remove('animation');
        });
        // RECURSIVE FUNCTION
        let animation = () => {
            rooms[index].classList.remove('opacity');
            rooms[index].offsetWidth;
            rooms[index].classList.add('animation');
            rooms[index].style.animationPlayState = 'paused';
            rooms[index].style.animationPlayState = 'running';
            index++;
            if (index < rooms.length) {
                this.timeout.push(setTimeout(() => animation(), 100));
            }
        };
        // ANIMATE EVENTS
        if (rooms.length !== 0) {
            animation();
        }
    };

    private handleChangeFilter = (filter: FilterRoom) => {
        // UPDATE STATE
        this.setState({ filter }, () => this.animateRooms());
    };

    private handleClickRoom = (room: Room) => {
        this.setState({ room });
    };

    private renderModal = () => {
        // GET WRAPPER
        const wrapper = document.getElementById('app');
        // IF NO EVENT OR WRAPPER
        if (!this.state.room || !wrapper) {
            return null;
        }
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        const media = this.props.browser.media;
        const room = this.state.room;
        const features = room.features;
        const description = room.descriptionLong;
        const title = room.title;
        // RETURN MODAL
        return (
            <Modal className='modalRoom' browser={this.props.browser} handleClose={() => this.setState({ room: null })}>
                {(height, scroll) => (
                    <>
                        <Gallery
                            browser={this.props.browser}
                            loadingScreen={true}
                            modus={this.props.browser.width <= this.props.browser.variables.mediaS ? 'Expansion' : 'Variable'}
                            parallax={{
                                height,
                                scroll,
                                factor: media === 'Extra Small' ? 15 : 20,
                                modus: 'Simple'
                            }}
                        >
                            {room.gallery.map((item, index) => (
                                <img key={index} src={item} />
                            ))}
                        </Gallery>
                        <div className='modalContent'>
                            <div className='modalLeft'>
                                <div className='modalTitle'>
                                    <h1>{title[language]}</h1>
                                </div>
                                <div className='modalDescription'>{description[language]}</div>
                            </div>
                            <div className='modalRight'>
                                <div className='modalFeatures'>
                                    {Object.keys(features).map((key: keyof Room['features'], index) => (
                                        <div className='modalFeature' key={`feature_${index}`}>
                                            <img src={`assets/svg/${getFeatureImage(key)}.svg`} />
                                            <p>
                                                {key === 'squareMeter' ? (
                                                    <span>
                                                        {`${features[key]} m`}
                                                        <sup>2</sup>
                                                    </span>
                                                ) : (
                                                    getFeature(language, key)
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Modal>
        );
    };

    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        const media = this.props.browser.media;
        // GET CURRENT EVENTS
        const rooms = getRooms().filter(item => item.type === this.state.filter);
        // GET FILTERS
        const filters = availableFilters
            .filter(item => this.props.filters.includes(item))
            .sort((a, b) => this.props.filters.indexOf(a) - this.props.filters.indexOf(b))
            .map(item => ({
                label: getFilter(language, item),
                value: item
            }));
        // RETURN COMPONENT
        return (
            <div ref={this.rooms} id='rooms'>
                {this.state.room && this.renderModal()}
                <div id='roomsFilters'>
                    {filters.map((item, index) => (
                        <div
                            key={`filter_${index}`}
                            className={['filter', this.state.filter === item.value && 'active'].filter(x => x).join(' ')}
                            onClick={() => this.handleChangeFilter(item.value)}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
                <div id='roomsGrid'>
                    {rooms.map((room: Room, index: number) => {
                        const title = room.title;
                        const description = room.descriptionShort;
                        const previewImage = room.previewImage;
                        return (
                            <div className='room' key={`room_${room.link}`}>
                                <div className='roomImage'>
                                    <Parallax
                                        height={this.props.browser.height}
                                        scroll={this.props.browser.scroll}
                                        factor={media === 'Extra Small' ? 15 : 20}
                                        modus={'Complex'}
                                    >
                                        <img src={previewImage} onLoad={event => (event.currentTarget.style.opacity = '1')} />
                                    </Parallax>
                                </div>
                                <div className='roomContent'>
                                    <div className='roomTitle'>
                                        <h3>{title[language]}</h3>
                                    </div>
                                    <div className='roomDescription'>{description[language]}</div>
                                    <div className='roomButton underlineLink' onClick={() => this.handleClickRoom(room)}>
                                        {getLanguage(language, 'learnMore')}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default withRouter(Rooms);
