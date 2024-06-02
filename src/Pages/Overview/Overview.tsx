import * as React from 'react';
import Logo from '../../Components/Logo/Logo';
import Events from '../../Components/Events/Events';
import Footer from '../../Components/Footer/Footer';
import Gallery from '../../Components/Gallery/Gallery';
import Information from '../../Components/Information/Information';
import Menu from '../../Components/Menu/Menu';
import Rooms from '../../Components/Rooms/Rooms';
import Title from '../../Components/Title/Title';
import { PropsWithRouter, withRouter } from '../../Router/Router';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Overview.scss';

interface Props extends PropsWithRouter {
    browser: Browser;
}

class Overview extends React.Component<Props> {
    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // RETURN COMPONENT
        return (
            <div id='overview' className='page'>
                <Menu browser={this.props.browser} behaviour={'Dynamic'} />
                <div
                    id='overviewWelcome'
                    className={[this.props.browser.status === 'Welcome' && 'active'].filter(x => x).join(' ')}
                    style={this.props.browser.type === 'Safari' && this.props.browser.device === 'Mobile' ? { maxHeight: '-webkit-fill-available' } : {}}
                >
                    <Information type='Scroll' />
                    <Logo fullScreen={true} />
                    <Gallery
                        autoPlay={true}
                        browser={this.props.browser}
                        fullScreen={true}
                        hideControls={true}
                        modus={'Expansion'}
                        parallax={{
                            deactivate:
                                this.props.browser.device === 'Mobile' &&
                                (this.props.browser.width <= this.props.browser.variables.mediaS ||
                                    this.props.browser.height <= this.props.browser.variables.mediaS),
                            factor: 200,
                            modus: 'Simple',
                            height: this.props.browser.height,
                            scroll: this.props.browser.scroll
                        }}
                    >
                        <img src='assets/media/gallery/welcome_01.jpg' />
                        <img src='assets/media/gallery/welcome_02.jpg' />
                        <img src='assets/media/gallery/welcome_03.jpg' />
                        <img src='assets/media/gallery/welcome_04.jpg' />
                        <img src='assets/media/gallery/welcome_05.jpg' />
                        <img src='assets/media/gallery/welcome_06.jpg' />
                        <img src='assets/media/gallery/welcome_07.jpg' />
                        <img src='assets/media/gallery/welcome_08.jpg' />
                    </Gallery>
                </div>
                <div id='overviewContent'>
                    <article data-name={getLanguage(language, 'titleLocation')}>
                        <Title
                            browser={this.props.browser}
                            backgroundX={this.props.browser.width <= this.props.browser.variables.mediaS ? -7.5 : -15}
                            backgroundY={0}
                            backgroundImage={'assets/media/watercolor/watercolor_01.jpg'}
                            foregroundImage={`assets/svg/location_${language}.svg`}
                        />
                        <div>
                            {language === 'de' && (
                                <p className='text'>
                                    Der Ebenrieder ist ein Ort wie kein anderer. Mit Liebe und Fleiß restauriert und erbaut, liegt unser Gästehaus
                                    eingebettet in der malerischen Landschaft des Allgäus. Mit seinen lichtdurchfluteten Räumen und der idyllischen
                                    Dorfatmosphäre am Fuße des Auerbergs bietet der Ebenrieder Zurückgezogenheit und Inspiration. Hier lassen sich die
                                    Gedanken frei entfalten, während der unverstellte Blick ins weite Land zur Ruhe einlädt. Bei uns finden Visionen ihren
                                    Platz, kehrt Entspannung ein, wird Genuss gelebt. Willkommen in unserem Refugium.
                                </p>
                            )}
                            {language === 'en' && (
                                <p className='text'>
                                    The Ebenrieder is a place like no other. Restored and built with love and diligence, our guesthouse is nestled in the
                                    picturesque landscape of the Allgäu. With its light-flooded rooms and idyllic village atmosphere at the foot of the
                                    Auerberg, the Ebenrieder offers seclusion and inspiration. Here you can let your thoughts unfold freely, while the
                                    unobstructed view of the countryside invites you to rest. Here, visions find their place, relaxation returns, enjoyment
                                    is lived. Welcome to our refuge.
                                </p>
                            )}
                        </div>
                        <Gallery
                            browser={this.props.browser}
                            loadingScreen={true}
                            modus={this.props.browser.width <= this.props.browser.variables.mediaM ? 'Expansion' : 'Variable'}
                        >
                            <img src='assets/media/gallery/location_01.jpg' />
                            <img src='assets/media/gallery/location_02.jpg' />
                            <img src='assets/media/gallery/location_03.jpg' />
                            <img src='assets/media/gallery/location_04.jpg' />
                            <img src='assets/media/gallery/location_05.jpg' />
                            <img src='assets/media/gallery/location_06.jpg' />
                            <img src='assets/media/gallery/location_07.jpg' />
                            <img src='assets/media/gallery/location_08.jpg' />
                        </Gallery>
                    </article>
                    <article data-name={getLanguage(language, 'titleSleep')}>
                        <Title
                            browser={this.props.browser}
                            backgroundX={this.props.browser.width <= this.props.browser.variables.mediaS ? 10 : 15}
                            backgroundY={0}
                            backgroundImage={'assets/media/watercolor/watercolor_02.jpg'}
                            foregroundImage={`assets/svg/sleep_${language}.svg`}
                            foregroundScale={0.9}
                        />
                        <div>
                            {language === 'de' && (
                                <p className='text'>
                                    Mit viel Liebe zum Detail haben wir Alt und Neu respektvoll miteinander vereint, um ein außergewöhnliches Innendesign
                                    zu schaffen. In unseren fünf individuell eingerichteten, geräumigen Studios mit je zwei Schlafzimmern und Küche sowie
                                    unseren vier Gästezimmern kannst du zur Ruhe kommen und Behaglichkeit genießen. Alle Zimmer und Apartments sind mit
                                    eigenem Badezimmer ausgestattet und bieten dir einen Blick in die Landschaft oder den Garten. Wir möchten, dass du dich
                                    rundum wohl fühlst und haben großen Wert auf natürliche Stoffe, Materialien und Pflegeprodukte gelegt.
                                </p>
                            )}
                            {language === 'en' && (
                                <p className='text'>
                                    With great attention to detail, we have respectfully combined old and new to create an extraordinary interior design.
                                    In our five individually furnished, spacious studios, each with two bedrooms and a kitchen, as well as our four guest
                                    rooms, you can find peace and comfort. All rooms and apartments are equipped with private bathrooms and offer views of
                                    the countryside or garden. We want you to feel completely at ease, and have placed great emphasis on natural fabrics,
                                    materials, and care products.
                                </p>
                            )}
                            <Rooms browser={this.props.browser} filters={['Room', 'Apartment']} />
                        </div>
                    </article>
                    <article data-name={getLanguage(language, 'titleCalendar')}>
                        <Title
                            browser={this.props.browser}
                            backgroundX={this.props.browser.width <= this.props.browser.variables.mediaS ? 10 : 15}
                            backgroundY={this.props.browser.width <= this.props.browser.variables.mediaS ? -10 : -20}
                            backgroundImage={'assets/media/watercolor/watercolor_04.jpg'}
                            foregroundImage={`assets/svg/calendar_${language}.svg`}
                            foregroundScale={0.9}
                        />
                        <div>
                            {language === 'de' && (
                                <p className='text'>
                                    Licht, Duft, Klang, Geschmack, Bewegung: Unsere Yoga-Retreats, Fermentations- und Koch-Workshops, Wildkräuter-Führungen
                                    oder Keramik-Kurse bieten dir für alle Sinne genau das Richtige. Mit unseren Partnerinnen und Partnern entwicklen und
                                    realisieren wir kleine und große Events. Entdecke unsere bevorstehenden Veranstaltungen und lass uns zusammen
                                    großartige Dinge erleben!
                                </p>
                            )}
                            {language === 'en' && (
                                <p className='text'>
                                    Light, scent, sound, taste, movement: Our yoga retreats, fermentation and cooking workshops, wild herb tours, and
                                    pottery classes offer just the right thing for all your senses. Together with our partners, we develop and host both
                                    small and large events. Discover our upcoming events and let's experience great things together!
                                </p>
                            )}
                            <Events browser={this.props.browser} />
                        </div>
                    </article>
                    <article data-name={getLanguage(language, 'titlePossibilities')}>
                        <Title
                            browser={this.props.browser}
                            backgroundX={language === 'en' ? (this.props.browser.width <= this.props.browser.variables.mediaS ? -7.5 : -15) : 0}
                            backgroundY={this.props.browser.width <= this.props.browser.variables.mediaS ? -10 : -20}
                            backgroundImage={'assets/media/watercolor/watercolor_05.jpg'}
                            foregroundImage={`assets/svg/possibilities_${language}.svg`}
                            foregroundScale={0.9}
                        />
                        <div>
                            {language === 'de' && (
                                <p className='text'>
                                    Ein Aufenthalt im Ebenrieder ist mehr als nur Frieden für deine Seele und ein Schmaus für deinen Gaumen. Du kannst
                                    Retreats, Workshops und Seminare ausrichten und buchen, Natur,- Kunst- und Kulturangebote genießen oder deiner
                                    Schöpferkraft im Atelier freien Lauf lassen. Unser Spa mit Sauna und Außenpool ist Selbstfürsorge pur, was sowohl die
                                    Architektur und Ausstattung als auch die Qualität der Produkte einschließt. Hier darf die Zeit still stehen. Du
                                    möchtest mit deinem Team mal genussvoll aus dem alten Workflow ausbrechen und etwas Außergewöhnliches erleben? Dann
                                    bist du bei uns an der richtigen Adresse. Ein Incentive oder die nächste Weihnachtsfeier im Ebenrieder weckt
                                    schlummernde Potentiale und stärkt den Zusammenhalt. Schreib uns einfach an und gemeinsam entwickeln wir ein
                                    maßgeschneidertes Konzept.
                                </p>
                            )}
                            {language === 'en' && (
                                <p className='text'>
                                    A stay at Ebenrieder is more than just peace for your soul and a feast for your taste buds. You can host and book
                                    retreats, workshops, and seminars, enjoy nature, art, and cultural offerings, or unleash your creativity in the studio.
                                    Our spa, complete with a sauna and outdoor pool, epitomizes self-care, from the architecture and furnishings to the
                                    quality of the products. Here, time can stand still. Do you want to break away from the old workflow with your team and
                                    experience something extraordinary? Then you've come to the right place. An incentive event or your next Christmas
                                    party at Ebenrieder awakens dormant potential and strengthens team cohesion. Just contact us, and together we will
                                    develop a tailored concept.
                                </p>
                            )}
                            <Rooms browser={this.props.browser} filters={['Seminar Room', 'Wellness']} />
                        </div>
                        <Gallery
                            browser={this.props.browser}
                            loadingScreen={true}
                            modus={this.props.browser.width <= this.props.browser.variables.mediaM ? 'Expansion' : 'Variable'}
                            style={this.props.browser.width >= this.props.browser.variables.mediaS ? { marginTop: 25 } : {}}
                        >
                            <img src='assets/media/gallery/possibilities_01.jpg' />
                            <img src='assets/media/gallery/possibilities_02.jpg' />
                            <img src='assets/media/gallery/possibilities_03.jpg' />
                            <img src='assets/media/gallery/possibilities_04.jpg' />
                            <img src='assets/media/gallery/possibilities_05.jpg' />
                            <img src='assets/media/gallery/possibilities_06.jpg' />
                            <img src='assets/media/gallery/possibilities_07.jpg' />
                            <img src='assets/media/gallery/possibilities_08.jpg' />
                            <img src='assets/media/gallery/possibilities_09.jpg' />
                            <img src='assets/media/gallery/possibilities_10.jpg' />
                        </Gallery>
                    </article>
                </div>
                <Footer browser={this.props.browser} />
            </div>
        );
    }
}

export default withRouter(Overview);
