import * as React from 'react';
import './Welcome.scss';

interface Props {

}

interface States {

}

export default class Main extends React.Component<Props, States> {

    render() {
        return (
            <div id='overview'>
                <div className='header'>
                    <div 
                        id='welcome'
                        className={[
                            
                        ].filter(x => x).join(' ')}
                    >
                        <div id='logo'>
                            <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 59.5 75.5' preserveAspectRatio='none' id='picture'>
                                <mask id='welcomeLogo' maskUnits='userSpaceOnUse'>
                                    <path className='brush_01' d='m.8,23.49C4.02,20.01,33.08,1.52,40.99.86'/>
                                    <path className='brush_02' d='m57.19,3.8C53.58,5.81,6.83,30.73,1.2,34.61'/>
                                    <path className='brush_03' d='m55.72,16.8c-6.16,4.96-20.12,13.82-27.06,19.15'/>
                                    <path className='brush_04' d='m59.07,25.1c-2.14,1.88-11.79,13.53-16.21,20.49'/>
                                    <path className='brush_05' d='m11.12,35.68c0,3.88-3.62,32.42-3.08,39.25'/>
                                </mask>
                                <g mask='url(#welcomeLogo)'>
                                    <path d='m10.05,39.88c-2.04.19-3.9.45-5.75.51-.75.02-1.63-.2-2.26-.61-1.27-.82-1.17-1.39.11-2.21,1.58-1.01,3.15-2.03,4.71-3.07.28-.19.53-.44.88-.75-1.62-1.53-3.17-3.03-4.94-4.88-.29-.31-.35-1.06.42-.93,2.06.35,5.65,1.02,7.92,1.44-2.57-7.77.1-14.16,5.1-19.95C21.62,3.2,28.5.21,36.85.52c.41.01.87-.06,1.21.1.51.25,1.21.59,1.33,1.03.11.41-.31,1.09-.69,1.48-2.3,2.33-4.72,4.54-6.98,6.91-1.59,1.68-2.81,3.63-3.48,6.36,1-.74,1.64-1.21,2.28-1.67,3.27-2.4,6.95-3.74,11.02-4.03.65-.05,1.34-.04,1.97.11,1.78.43,2.32,2.14,1.03,3.39-1.7,1.66-3.52,3.18-5.25,4.81-.94.89-2.43,2.39-3.25,3.25,1.1-.17,3.03-.36,4.14-.52,3.22-.48,6.44-1.01,9.67-1.4,1.03-.12,2.16,0,3.16.31.57.17,1.2.86,1.33,1.42.09.38-.51,1.14-.99,1.41-1.99,1.1-4.06,2.08-6.1,3.1-.4.2-.9.46-1.43.84,1.45-.18,3.22-.43,4.69-.52,1.27-.08,2.56-.08,3.81.08,4.24.53,5.92,4.01,3.66,7.57-1.57,2.46-3.29,4.82-4.88,7.26-.98,1.5-2.16,3.17-3.2,4.92-.26-.61-.39-.88-.54-1.26-.78-1.93-2.31-3.15-4.04-4.16-6.93-4.03-14.41-6.74-22.16-8.82-1.12-.3-1.99-.38-2.63.89-.24.49-.96,1.07-1.71.91-.69-.15-1.02-.97-1.11-1.62-.04-.32-.16-.84-.56-.89-2.86-.38-2.37-.73-3.35,2.44-.17.55-.3,1.11-.4,1.51-1.12,4.35.15,7.43,1.74,11.34,2.19,5.35,3.6,10.9,2.54,16.68-.42,2.31-1.34,4.62-2.48,6.7-1.85,3.37-5.29,5.04-8.15,4.4-3.37-.75-6.12-3.97-6.45-7.74-.44-5.1.6-9.97,2.86-14.55,1.84-3.73,3.87-7.37,5.81-11.06.25-.48.46-.98.77-1.64h0Z'/>
                                </g>
                            </svg>
                            <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 334.06 63.37' preserveAspectRatio='none' id='fontHorizontal'>
                                <mask id='welcomeFont_01' maskUnits='userSpaceOnUse'>
                                    <path className='brush_01' d='M13.3,1.9c0,2.6-7.7,45.1-9.8,49.9'/>
                                    <path className='brush_02' d='M3.3,10.2c2.3-0.2,28-3,31.4-2.4'/>
                                    <path className='brush_03' d='M1.5,26.4c3-0.2,24.1,2,28.2,1.5'/>
                                    <path className='brush_04' d='M-0.4,38.8c3,4.9,19.4,9.8,26.2,9.8'/>
                                </mask>
                                <mask id='welcomeFont_02' maskUnits='userSpaceOnUse'>
                                    <path className='brush_05' d='M51.2,58.4C47.4,54.6,39.3,47.7,38,40.5c-1.3-7.2-1.7-22-1.7-27.7'/>
                                    <path className='brush_06' d='M34.5,35.4c18.7-6.5,22.1-0.6,23.1,3.2c1.3,5.1-10.4,14.5-18.6,18.3'/>
                                    <path className='brush_07' d='M31.6,28.9c4.5-4.5,10.5-14.7,16.6-13.4s10,6,5.3,10.4c-3,2.8-14.4,8.6-19.9,12.2'/>
                                </mask>
                                <mask id='welcomeFont_03' maskUnits='userSpaceOnUse'>
                                    <path className='brush_08' d='M69.8,0.6c0.8,6.4,0,38.4,0,45.4'/>
                                    <path className='brush_09' d='M62.1,11c4.5-0.6,21.8-2.6,25-1.7'/>
                                    <path className='brush_10' d='M61.1,23.6c2.6,0,20.1-0.6,24.8,1.3'/>
                                    <path className='brush_11' d='M61.9,36.6c2.8,0.2,22.6,2.6,29.6-0.8'/>
                                </mask>
                                <mask id='welcomeFont_04' maskUnits='userSpaceOnUse'>
                                    <path className='brush_12' d='M95.8,52.9c0.3-4,7.3-42.2,8.3-46.7'/>
                                    <path className='brush_13' d='M95.6,6.6c3.2,6.6,17.9,40.5,22.2,44.6'/>
                                    <path className='brush_14' d='M124,4c-0.6,5.5-13.4,44.8-12.8,48.8'/>
                                </mask>
                                <mask id='welcomeFont_05' maskUnits='userSpaceOnUse'>
                                    <path className='brush_15' d='M127,46c2.3-4.1,12.6-33.9,12-38.4'/>
                                    <path className='brush_16' d='M129.8,16.2c5.3,1.5,20.5-3.4,20,4.1c-0.6,7.5-15.8,10-22.8,10.5'/>
                                    <path className='brush_17' d='M127.4,22.5c3,3.7,21.6,24.7,28,29.6'/>
                                </mask>
                                <mask id='welcomeFont_06' maskUnits='userSpaceOnUse'>
                                    <path className='brush_18' d='M168.1,55.8c-2.1-7.5-6-39.9-7.2-43.5'/>
                                </mask>
                                <mask id='welcomeFont_07' maskUnits='userSpaceOnUse'>
                                    <path className='brush_19' d='M173.7,3.4c-6.6,2.6-9.8,5.8-12.8,8.8'/>
                                </mask>
                                <mask id='welcomeFont_08' maskUnits='userSpaceOnUse'>
                                    <path className='brush_20' d='M189.7,6.8c-1.5,3.8-12.6,36.7-10.2,45.4'/>
                                    <path className='brush_21' d='M179,14.2c7.9,1.1,27.5,2.4,32.6,0.4'/>
                                    <path className='brush_22' d='M173.7,26.4c5.5,4.3,17.5,9.2,26.5,7'/>
                                    <path className='brush_23' d='M172.2,36.2c8.3,9.8,25.6,11.6,37.8,8.4'/>
                                </mask>
                                <mask id='welcomeFont_09' maskUnits='userSpaceOnUse'>
                                    <path className='brush_24' d='M229.2-4.5c-1.9,6.4-13.6,40.5-13,48.9'/>
                                    <path className='brush_25' d='M216.4,3.1c5.6,2.6,28,7.5,24.3,23.9s-21.1,11.5-29.2,8.1'/>
                                </mask>
                                <mask id='welcomeFont_10' maskUnits='userSpaceOnUse'>
                                    <path className='brush_26' d='M256.1,5.7c-0.6,5.6-4.1,39.5,1.7,48.6'/>
                                    <path className='brush_27' d='M247.5,22.6c6-2.1,20.1-7.3,27.5-12.2'/>
                                    <path className='brush_28' d='M246.5,36.4c5.1-0.8,21.5-4.5,23.2-6.2'/>
                                    <path className='brush_29' d='M246.7,49.4c5.6-0.4,28.4-5.6,31.1-9'/>
                                </mask>
                                <mask id='welcomeFont_11' maskUnits='userSpaceOnUse'>
                                    <path className='brush_30' d='M288.5,51.1c0.4-5.6-2.8-39.5-6.2-43.7'/>
                                    <path className='brush_31' d='M278.4,23.2c2-3.3,22.4-26.7,29-18.1c5.8,7.7-14.1,19.6-25.6,25.2'/>
                                    <path className='brush_32' d='M278.7,14.4c3,1.7,41.4,25.6,54.4,27.7'/>
                                </mask>
                                <g mask='url(#welcomeFont_01)'>
                                    <path d='m31.27,26.71c-.41.43-.91.8-1.21,1.29-.81,1.36-1.58,2.74-2.27,4.16-.59,1.22-1.58,1.97-2.77,2.46-1.98.83-3.98,1.58-5.97,2.36-1.68.65-3.37.47-5.07.08-.32-.07-.64-.15-1.07-.26-.1.49-.21.95-.27,1.41-.31,2.29-.55,4.6-.93,6.88-.1.59-.04.84.52.95,1.77.35,3.54.74,5.32,1.03,1.01.16,2.05.22,3.07.2.57,0,1.14-.29,1.71-.36.35-.04.89-.01,1.06.2.66.86,1.3,1.77,1.76,2.75.18.39.08,1.18-.22,1.48-.69.71-.73,1.54-.85,2.38-.1.7-.38,1.36-1.11,1.48-1.21.2-2.45.35-3.67.28-1.77-.11-3.55-.32-5.28-.69-2.79-.6-5.51-1.63-8.32-2-2.31-.3-3.46-1.66-4.5-3.31-.31-.5-.46-1.29-.31-1.85.78-2.92,1.65-5.83,2.56-8.71.97-3.08,1.68-6.2,1.97-9.41.33-3.63.65-7.27,1.09-10.89.33-2.7,1.17-5.23,2.62-7.62.66-1.09,1.27-1.74,2.55-1.65.32.02.71.06.95.24.81.61,1.62.41,2.51.25,1.53-.28,3.09-.45,4.64-.64,1.61-.2,3.23-.37,4.84-.53,2.24-.23,4.32.22,6.27,1.36,1.52.89,1.59,1.22.15,2.28-.11.08-.27.17-.3.29-.27.95-1.2,1.56-1.5,2.4-.89,2.49-3.15,2.53-5.13,2.98-1.81.41-3.68.64-5.53.83-1.02.1-1.52.58-1.75,1.49-.54,2.17-1.1,4.33-1.66,6.49-.2.77.06,1.03.85.96,1.74-.17,3.5-.18,5.21-.49,2.76-.49,5.53-.46,8.31-.5.53,0,1.05-.25,1.58-.39.05.11.1.21.15.32h0Z'/>
                                </g>
                                <g mask='url(#welcomeFont_02)'>
                                    <path d='m52.8,36.59c1.14.35,2.16.67,3.19.99,3.98,1.21,6.45,3.87,7.32,7.81.51,2.33-.01,4.51-2.11,6.17-1.61,1.27-3.34,2.19-5.26,2.92-1.24.47-2.37,1.31-3.4,2.17-1.8,1.5-3.46,3.17-5.22,4.72-.39.34-.95.53-1.47.68-.68.19-1.26.01-1.78-.57-.37-.42-.93-.7-1.46-.93-.48-.21-.82-.41-.85-1-.03-.41-.32-.81-.36-1.23-.11-1.04-.88-1.16-1.7-1.36-2.47-.61-4.09-2.18-4.96-4.5-.1-.27-.09-.59-.08-.88.05-1.37.15-2.73.17-4.1.07-3.97.01-7.95.23-11.92.08-1.55-.25-2.75-1.27-3.87-2.22-2.46-1.47-3.83.37-6.52.29-.42.44-.93.67-1.4.1-.2.18-.47.36-.58,1.61-.99,3.25-1.93,4.86-2.93,3.63-2.27,7.57-3.15,11.82-2.48,1.93.31,3.42,1.41,4.69,2.86,1.19,1.36,2.05,2.81,2.39,4.62.53,2.82-.34,5.19-2.11,7.29-1,1.18-2.2,2.21-3.31,3.31-.21.21-.4.43-.7.76h0Zm-9.01,4.24l-.26.11c.07.86.12,1.73.23,2.59.21,1.53.42,3.05.72,4.56.07.34.39.78.71.91,1.24.5,2.53.9,3.8,1.31.22.07.49.13.71.07,2-.51,3.98-1.06,5.66-2.31.29-.22.58-.59.63-.92.17-1.15-.14-2.16-1.04-3-1.21-1.13-2.79-1.51-4.27-2.1-.78-.31-1.49-.3-2.27-.01-1.03.37-2.08.35-3.06-.25-.52-.32-1.04-.64-1.57-.96h0Zm-1.3-9.35c1.59-.7,3.07-.62,4.61-.2.91.25,1.83-.1,2.6-.71,1.46-1.16,2.21-2.74,2.62-4.48.17-.7.14-1.49-.6-1.93-1.11-.66-2.33-1.18-3.57-.41-2.03,1.24-3.94,2.66-5.39,4.57-.71.94-.47,2-.27,3.17h0Z'/>
                                </g>
                                <g mask='url(#welcomeFont_03)'>
                                    <path d='m86.7,25.75c-.58.71-1.04,1.27-1.5,1.83-.21.25-.36.58-.62.76-.92.63-1.12,1.65-1.32,2.57-.28,1.3-1.08,2.06-2.18,2.55-1.51.68-3.08.77-4.69.2-.7-.25-1.44-.39-2.4-.65.14,2.23.26,4.28.4,6.45h1.78c2.02,0,4.04.03,6.06-.01.93-.02,1.87-.14,2.78-.34.5-.11.99-.41,1.39-.74.69-.56,1.29-.56,1.97.05.26.24.59.41.9.59.56.33.85.75.89,1.44.03.52.33,1.03.47,1.55.06.23.11.49.04.71-.22.74-.51,1.46-.74,2.19-.26.83-1.12,1.49-2.25,1.46-1.35-.04-2.71-.18-4.05-.34-2.62-.32-5.24-.57-7.83.07-2.37.58-4.71.27-6.92-.46-1.94-.64-2.99-2.18-3.31-4.3-.49-3.23-.59-6.47-.49-9.71.11-3.54.29-7.08.54-10.62.11-1.53.51-3.03.67-4.56.06-.63-.08-1.34-.32-1.94-.4-1.02-.94-1.86-.39-3.11.48-1.1,1.42-1.16,2.21-1.46,2.48-.93,5.07-.8,7.67-.6,1.84.14,3.69.22,5.53.2,1.33-.01,2.27.72,3.31,1.32.03.01.04.04.06.07.83.92,1.24,4.03.71,5.16-1.16,2.46-.94,2.26-3.66,2.25-1.16,0-2.31.03-3.47.03-.79,0-1.12.34-1.19,1.13-.03.4-.37.82-.65,1.15-.61.72-1.4,1.32-1.87,2.11-.49.83-.12,1.32.86,1.28,1.6-.07,3.2-.17,4.78-.38,1.43-.19,2.78-.09,4.05.58,1,.52,1.99,1.08,2.78,1.51h0Z'/>
                                </g>
                                <g mask='url(#welcomeFont_04)'>
                                    <path d='m104.07,38.32c-.18.94-.35,1.79-.49,2.65-.48,3.01-.94,6.03-1.42,9.04-.06.4-.11.96-.39,1.14-.5.33-1.18.66-1.73.58-.73-.1-.9.28-1.14.72-.11.21-.18.44-.28.66-.34.75-.82,1.3-1.68.43-.54-.54-1.2-.98-1.87-1.35-1.7-.94-1.5-2.49-1.24-3.93.66-3.62,1.43-7.21,1.51-10.93.06-3.11.5-6.21.8-9.32.35-3.63,1.34-7.12,2.67-10.51.32-.82.81-1.62,1.42-2.26.29-.31,1.11-.43,1.55-.26,1.99.78,3.53,2.19,4.87,3.79.88,1.05.82,2.47.5,3.62-.44,1.57-.06,3.03.13,4.5.45,3.5,1.79,6.72,3.49,9.81.1.18.25.33.47.64.29-.74.47-1.41.8-2.02.85-1.59,1.33-3.23,1.21-5.06-.06-.86.18-1.76.36-2.63.24-1.1.82-1.94,1.93-2.43.36-.16.66-.6.82-.99.81-1.95,1.03-4.02,1.19-6.11.13-1.74.79-3.16,2.6-3.85,1.39-.53,2.92-.14,3.64,1.13,1.02,1.8,2.04,3.61,2.35,5.69.25,1.68-.05,3.35-.65,4.92-.81,2.15-1.79,4.23-2.65,6.36-.64,1.61-1.21,3.24-1.76,4.88-.5,1.49-1.04,2.97-1.35,4.5-.4,1.97-.53,4-.88,5.99-.19,1.11-.56,2.19-.91,3.27-.13.38-.35.83-.67,1.04-.73.48-1.44.89-1.85,1.74-.1.22-.94.32-1.29.15-1.29-.6-2.41-1.43-3.09-2.76-.26-.52-.68-.99-1.09-1.41-.51-.53-.71-1.09-.64-1.82.16-1.53-.71-2.72-1.47-3.93-1.14-1.8-2.24-3.61-3.37-5.41-.04-.07-.14-.1-.4-.26h0Z'/>
                                </g>
                                <g mask='url(#welcomeFont_05)'>
                                    <path d='m143.05,36.81c.65.76,1.25,1.58,1.97,2.29,2.75,2.69,5.57,5.31,8.29,8.03,1.03,1.03,1.96,2.2,2.71,3.44.8,1.32.45,2.68-.57,3.69-.82.82-1.88.77-2.88.75-1.94-.03-3.52-1.02-5-2.14-3.42-2.58-6-5.85-8.03-9.58-.51-.94-1.05-1.86-1.69-3-.37.77-.74,1.32-.91,1.93-.45,1.64-1.81,2.64-2.85,3.83-1.04,1.18-2.54.78-3.89.45-1.44-.35-2.08-1.64-3.04-2.56-1.22-1.16-.89-2.3-.28-3.54,1.55-3.16,3.34-6.22,4.3-9.65.58-2.07,1.28-4.1,1.87-6.16.09-.31-.02-.74-.18-1.05-.26-.49-.17-.77.22-1.16.46-.46.79-1.06,1.16-1.62.44-.66.78-1.4,1.31-1.98.3-.32.96-.61,1.36-.52,2.15.47,4.14-.22,6.18-.64,2-.41,4.01-.4,5.89.39,2.57,1.07,3.97,3.11,4.23,5.8.22,2.41.17,4.82-1.08,7.05-1.28,2.27-3.05,3.85-5.73,4.44-1.15.25-2.19.95-3.37,1.49h0Zm-1.95-5.93c2.18,1.03,3.69.67,5.03-1.11.11-.14.25-.26.36-.4.99-1.39,1.45-2.94,1.26-4.63-.11-.94-.63-1.35-1.44-1.22-.71.12-1.41.31-2.11.49-1.06.27-1.74.96-1.99,1.99-.4,1.63-.75,3.28-1.11,4.88Z'/>
                                </g>
                                <g mask='url(#welcomeFont_06)'>
                                    <path d='m167.69,26.89c0,2.47-.1,4.55.03,6.62.12,1.95.46,3.88.72,5.82.21,1.62.44,3.23.67,4.84.31,2.23.69,4.46.9,6.7.12,1.32.02,2.67-.07,4.01-.12,1.76-1.49,2.04-3.39,1.82-1.52-.18-2.76-.97-3.6-2.32-.41-.66-.96-1.22-1.42-1.85-.16-.23-.31-.53-.31-.8-.02-2.2,0-4.4,0-6.6,0-4.03.08-8.07-.04-12.1-.07-2.28-.42-4.55-.75-6.81-.28-1.92-.72-3.82-1.05-5.74-.12-.69.21-1.07.95-1.24,2.34-.52,4.07.27,5.58,2.06,1.51,1.78,2.06,3.73,1.79,5.58h0Z'/>
                                </g>
                                <g mask='url(#welcomeFont_07)'>
                                    <path d='m162.59,12.77c0-1.07.94-2.16,2.13-2.47,1.13-.3,2.37.21,2.98,1.33.54.99.96,2.04,1.44,3.06.3.64.26,1.34-.31,1.69-.47.28-1.17.25-1.77.27-.43.01-.88-.06-1.29-.19-.47-.16-.92-.4-1.35-.65-.79-.47-1.84-2.23-1.83-3.03h0Z'/>
                                </g>
                                <g mask='url(#welcomeFont_08)'>
                                    <path d='m193.11,55.57c-3.08.04-6.1-.39-9.01-1.34-1.08-.35-2.06-1.09-3-1.78-1.38-1.01-2.78-2.04-3.96-3.25-.83-.86-1.36-2.03-1.92-3.1-.14-.28.06-.74.13-1.11.3-1.48.83-2.95.9-4.44.15-3.33,1.33-6.37,2.39-9.47,1.16-3.4,3.13-6.36,5.01-9.37.53-.85.84-1.62.88-2.62.02-.51.43-1.16.87-1.47,1.59-1.12,3.34-1.66,5.37-1.31,1.01.17,2.08-.05,3.13-.09,2.13-.07,4.27-.27,6.4-.17,1.73.08,3.44.5,5.15.83.43.08.85.33,1.2.6.56.44.45,1.03-.07,1.62-.29.32-.39.81-.6,1.2-.17.31-.31.73-.59.87-.8.42-1.68.69-2.5,1.08-1.19.57-2.35,1.15-3.36,2.09-1.27,1.19-2.94,1.86-4.72,1.85-4.04-.01-3.43.11-5.52,3.27-.6.91-.65,2.19-.9,3.32-.13.6.19.85.83.84,1.28-.03,2.57-.12,3.83.02,1.21.13,2.44.41,3.58.84,1.32.5,1.54,1.56,1.04,2.86-.26.66-.23,1.45-.22,2.18,0,.7-.26,1.23-.89,1.4-1.38.38-2.78.77-4.2.94-1.06.13-2.17-.06-3.25-.15-1.06-.08-1.23.03-1.24,1.1-.01,1.23.04,2.45-.02,3.68-.04.86.41,1.06,1.12.97,1.98-.23,3.96-.43,5.93-.75,3.12-.5,6.2-1.2,9.33-1.57,1.64-.19,3.38-.37,4.98.56,1.46.85,1.96,1.83,1.65,3.48-.13.7.14,1.53-.16,2.12-.36.72-1.04,1.65-1.73,1.79-4.45.93-8.93,1.68-13.41,2.44-.8.13-1.64.02-2.46.02h0Z'/>
                                </g>
                                <g mask='url(#welcomeFont_09)'>
                                    <path d='m242.21,37.67c.74,1.22,1.41,2.1,1.84,3.08.65,1.49.07,3.11-1.33,3.99-.58.37-1.21.71-1.86.92-.98.31-1.67.9-2.3,1.67-1.06,1.3-2.29,2.39-3.96,2.88-1.12.33-1.84-.09-2.63-.89-.82-.84-1.83-1.51-2.84-2.13-.3-.18-.87.11-1.32.1-2.85-.05-5.71-.17-8.38-1.23-.88-.35-1.75-.97-2.37-1.68-2.18-2.45-2.61-5.44-2.37-8.56.06-.78.34-1.57,1.35-1.81.6-.14.92-.63.73-1.24-.36-1.17.07-2.23.45-3.27,1.91-5.18,3.81-10.35,4.97-15.75.1-.47.44-.9.69-1.4-.75-.7-1.58-1.4-2.32-2.18-.91-.95-1.58-2.03-1.55-3.41.02-.72.34-1.15,1.07-1.32,1.67-.39,3.28-.47,4.97.15,2.24.81,4.61,1.25,6.83,2.09,4.67,1.77,8.76,4.35,10.79,9.13.6,1.4.9,2.96,1.11,4.47.26,1.82.39,3.67.35,5.5-.04,1.63-.33,3.28-.64,4.89-.22,1.13-.56,2.19-.5,3.4.05.96-.58,1.96-.8,2.62h0Zm-7.49-1.07c1.05.26,1.8-.24,2.35-1,1.56-2.14,2.32-4.5,1.71-7.13-.75-3.24-2.33-6.11-4.15-8.87-.73-1.1-1.73-1.91-2.92-2.47-.61-.29-1.09-.18-1.25.52-.32,1.39-.54,2.8-.91,4.17-.48,1.8-1,3.6-1.63,5.35-.66,1.82-1.47,3.59-2.22,5.37-.15.36-.25.76-.49,1.04-.73.85-1.53,1.63-2.26,2.48-.97,1.13-.64,2.85.69,3.57.25.14.57.21.86.21.48,0,.96-.08,1.43-.13.96-.09,1.93-.13,2.52-1.09.12-.19.34-.35.55-.45,1.8-.9,3.71-1.41,5.73-1.56Z'/>
                                </g>
                                <g mask='url(#welcomeFont_10)'>
                                    <path d='m261.13,47.88c3.42-1.04,6.67-2.01,9.91-3.02.44-.14.8-.52,1.24-.69,1.28-.51,3.38.01,4,1.2.36.68.21,1.62.27,2.45.01.14-.08.3-.05.43.39,1.37.08,2.43-1.18,3.1-1.81.95-3.67,1.85-5.57,2.6-2.36.92-4.75,1.78-7.19,2.47-2.74.77-5.58.68-8.38.33-1.27-.16-2.35-.89-3.26-1.84-.85-.89-.76-3.08.59-3.74.21-.1.44-.45.41-.65-.11-.99-.31-1.98-.47-2.96-.3-1.87-.58-3.74-.91-5.61-.06-.32-.32-.62-.51-.92-.26-.4-.6-.76-.78-1.2-.45-1.08-.74-2.2.4-3.05.69-.52.81-1.24.88-1.96.17-1.86.32-3.73.38-5.6.04-1.35-.23-2.72-.11-4.05.14-1.54-.19-3.31,1.5-4.34.6-.37,1.25-.76,1.93-.92,3-.69,5.79-1.9,8.58-3.15,2.04-.92,4.08-1.85,6.17-2.65.65-.25,1.55-.29,2.18-.04,1.13.44,2.36.99,3.13,1.85.58.64,1.18,1.64.94,2.75-.05.23.03.56.18.74.64.76.32,1.42-.32,1.84-1.18.77-2.4,1.51-3.7,2.08-2.29,1.01-4.68,1.81-6.96,2.84-2.1.95-2.18,1.35-1.72,3.58.15.72.21,1.52.04,2.21-.23.9.16,1.24.86,1.59,1.58.78,3.01,1.74,4.09,3.17.91,1.21.62,2.6.67,3.93.01.3-.51.82-.87.91-1.98.5-3.99.92-6,1.31-.52.1-.85.15-.77.8.16,1.35.26,2.71.4,4.24h0Z'/>
                                </g>
                                <g mask='url(#welcomeFont_11)'>
                                    <path d='m300.81,25.73c.56.27,1.02.46,1.45.7,3.44,1.91,6.84,3.91,10.33,5.73,2.04,1.07,4.19,2.01,6.38,2.72,2.59.84,5.3,1.31,7.93,2.04,1.38.38,2.27,1.52,3.21,2.51.6.64,1.1,1.36,1.73,2.15,0,.83.01,1.87,0,2.91,0,.24-.06.49-.17.7-.37.7-.77,1.39-1.18,2.07-.34.58-.61,1.25-1.1,1.69-.29.27-.93.3-1.38.23-.89-.13-1.78-.33-2.62-.63-3.43-1.23-6.92-2.35-10.24-3.83-2.91-1.3-5.67-2.94-8.39-4.61-2.36-1.46-4.34-3.39-6.22-5.43-1.19-1.28-2.48-2.61-4.47-2.84-.98-.11-1.44.18-1.21,1.15.46,1.92,1.03,3.82,1.46,5.75.51,2.29,1.07,4.61.72,6.96-.13.88-.64,1.83-1.26,2.47-.86.88-1.96,1.57-3.05,2.2-.43.25-1.13.25-1.65.12-1.53-.37-2.94-1.01-4.06-2.19-.45-.47-1.14-.73-1.53-1.22-.4-.51-.75-1.19-.79-1.81-.06-1.1,0-2.25.26-3.33.76-3.24.59-6.35-.75-9.44-.53-1.22-1.19-2.31-2.01-3.35-1.07-1.36-1.44-3.01-1.05-4.65.65-2.73,1.48-5.42,2.34-8.1.24-.74.74-1.45,1.29-2.03,1.28-1.36,2.64-2.65,4.01-3.92.46-.42,1.05-.71,1.61-1,1.47-.76,2.91-1.58,4.45-2.19,1.82-.73,3.68-1.44,5.59-1.83,1.73-.35,3.56-.38,5.33-.3,2.01.09,3.36,1.15,4.19,3.07.57,1.31.89,2.68.8,3.97-.11,1.45-.73,2.93-1.39,4.27-.73,1.49-1.73,2.87-2.68,4.26-1.02,1.49-2.23,2.78-3.96,3.56-.68.31-1.21.91-1.92,1.47h0Zm-4.76-10.7c-.63.31-1.19.62-1.77.86-2.09.85-3.68,2.32-5.16,3.94-.47.52-.35,1.08.21,1.43.83.52,1.64,1.08,2.47,1.61.19.12.45.27.64.23,1.28-.27,2.58-.5,3.81-.93,1.75-.6,3.49-1.29,5.17-2.08,2.6-1.22,4.57-3.15,5.96-5.63.15-.28.2-.71.11-1.02-.46-1.56-2.13-2.26-3.51-1.01-1.32,1.19-2.83,2.19-4.32,3.2-1.14.77-2.68.47-3.6-.61h0Z'/>
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.34 148.36" preserveAspectRatio='none' id='fontVertical'>
                                <mask id='welcomeFont_01' maskUnits='userSpaceOnUse'>
                                    <path className='brush_01' d="m24.22.64c-.64,2.55-7.23,44.43-8.93,49.95"/>
                                    <path className='brush_02' d="m45.27,5.95c-5.74.43-28.48,2.34-31.46,2.34"/>
                                    <path className='brush_03' d="m41.23,24.44c-4.04,0-25.93.21-29.33-.43"/>
                                    <path className='brush_04' d="m38.47,46.76c-4.68-1.28-29.33-6.8-31.25-9.14"/>
                                </mask>
                                <mask id='welcomeFont_02' maskUnits='userSpaceOnUse'>
                                    <path className='brush_05' d="m44.84,11.48c.43,4.04,5.95,44.21,9.57,48.46"/>
                                    <path className='brush_06' d="m41.23,27.63c2.06-.84,17.86-18.71,23.17-10.2s-10.2,16.58-18.28,19.13"/>
                                    <path className='brush_07' d="m45.06,32.95c5.74-.21,21.12-.54,23.38,6.59s-13.82,12.97-20.62,14.03"/>
                                </mask>
                                <mask id='welcomeFont_03' maskUnits='userSpaceOnUse'>
                                    <path className='brush_08' d="m78.85,0c0,6.16-1.49,37.2-.21,43.36"/>
                                    <path className='brush_09' d="m97.35,8.08c-8.5.21-21.04,1.06-25.3,1.06"/>
                                    <path className='brush_10' d="m97.35,24.23c-4.46-.43-22.96-2.13-27.42-3.19"/>
                                    <path className='brush_11' d="m101.6,37.62c-5.31,0-27.21-1.7-30.61-2.76"/>
                                </mask>
                                <mask id='welcomeFont_04' maskUnits='userSpaceOnUse'>
                                    <path className='brush_12' d="m106.91,50.8c.64-5.53,7.01-39.32,7.65-44.64"/>
                                    <path className='brush_13' d="m105.21,9.35c3.19,4.68,21.04,39.32,24.02,42.3"/>
                                    <path className='brush_14' d="m131.78,4.25c0,4.89-6.8,44.64-8.5,46.76"/>
                                </mask>
                                <mask id='welcomeFont_05' maskUnits='userSpaceOnUse'>
                                    <path className='brush_15' d="m38.25,56.97c-1.7,6.59-10.42,32.52-12.12,35.5"/>
                                    <path className='brush_16' d="m28.9,63.13c7.44.43,21.26-2.55,20.19,5.31s-17.01,10.42-22.11,8.29"/>
                                    <path className='brush_17' d="m35.28,72.48c3.4,5.95,8.23,19.01,19.77,25.93"/>
                                </mask>
                                <mask id='welcomeFont_06' maskUnits='userSpaceOnUse'>
                                    <path className='brush_18' d="m60.15,56.75c.64,4.89,2.76,40.17,4.04,44.21"/>
                                </mask>
                                <mask id='welcomeFont_07' maskUnits='userSpaceOnUse'>
                                    <path className='brush_19' d="m70.99,51.02c-3.19,3.19-10.2,6.16-13.18,8.5"/>
                                </mask>
                                <mask id='welcomeFont_08' maskUnits='userSpaceOnUse'>
                                    <path className='brush_20' d="m89.48,54.63c-2.55,6.38-10.42,34.65-12.12,43.79"/>
                                    <path className='brush_21' d="m111.16,61.86c-8.5,0-26.78,2.13-31.67.21"/>
                                    <path className='brush_22' d="m103.08,79.71c-4.46,0-27-2.34-29.76-5.31"/>
                                    <path className='brush_23' d="m115.84,91.83c-26.15,3.19-37.84-.21-42.94-5.74"/>
                                </mask>
                                <mask id='welcomeFont_09' maskUnits='userSpaceOnUse'>
                                    <path className='brush_24' d="m13.81,91.83c-.85,6.38-8.29,40.81-10.84,47.61"/>
                                    <path className='brush_25' d="m2.76,98.42c8.29,2.76,31.93,7.14,23.81,27.85-4.25,10.84-14.67,7.44-25.3,1.28"/>
                                </mask>
                                <mask id='welcomeFont_10' maskUnits='userSpaceOnUse'>
                                    <path className='brush_26' d="m42.29,103.09c0,5.95,0,38.05,3.19,45.06"/>
                                    <path className='brush_27' d="m65.04,106.49c-5.1,1.28-24.44,9.35-29.33,11.27"/>
                                    <path className='brush_28' d="m59.3,129.03c-6.38,0-22.96,0-26.57-.43"/>
                                    <path className='brush_29' d="m66.95,135.19c-4.25,2.13-21.04,9.78-31.46,8.5"/>
                                </mask>
                                <mask id='welcomeFont_11' maskUnits='userSpaceOnUse'>
                                    <path className='brush_30' d="m72.26,103.52c1.04,7.05,7.57,36.78,8.99,43.05"/>
                                    <path className='brush_31' d="m68.86,113.08c4.45-2.52,26.78-14.24,28.48-5.95s-12.33,15.3-24.02,17.86"/>
                                    <path className='brush_32' d="m80.33,119.07c5.11,3.58,25.95,22.29,42.95,22.93"/>
                                </mask>
                                <g mask='url(#welcomeFont_01)'>
                                    <path d="m41.14,20.58c-.41.43-.91.8-1.21,1.29-.81,1.36-1.58,2.74-2.27,4.16-.59,1.22-1.58,1.97-2.77,2.46-1.98.83-3.98,1.58-5.97,2.36-1.68.65-3.37.47-5.07.08-.32-.07-.64-.15-1.07-.26-.1.49-.21.95-.27,1.41-.31,2.29-.55,4.6-.93,6.88-.1.59-.04.84.52.95,1.77.35,3.54.74,5.32,1.03,1.01.16,2.05.22,3.07.2.57,0,1.14-.29,1.71-.36.35-.04.89,0,1.06.2.66.86,1.3,1.77,1.76,2.75.18.39.08,1.18-.22,1.48-.69.71-.73,1.54-.85,2.38-.1.7-.38,1.36-1.11,1.48-1.21.2-2.45.35-3.67.28-1.77-.11-3.55-.32-5.28-.69-2.79-.6-5.51-1.63-8.32-2-2.31-.3-3.46-1.66-4.5-3.31-.31-.5-.46-1.29-.31-1.85.78-2.92,1.65-5.83,2.56-8.71.97-3.08,1.68-6.2,1.97-9.41.33-3.63.65-7.27,1.09-10.89.33-2.7,1.17-5.23,2.62-7.62.66-1.09,1.27-1.74,2.55-1.65.32.02.71.06.95.24.81.61,1.62.41,2.51.25,1.53-.28,3.09-.45,4.64-.64,1.61-.2,3.23-.37,4.84-.53,2.24-.23,4.32.22,6.27,1.36,1.52.89,1.59,1.22.15,2.28-.11.08-.27.17-.3.29-.27.95-1.2,1.56-1.5,2.4-.89,2.49-3.15,2.53-5.13,2.98-1.81.41-3.68.64-5.53.83-1.02.1-1.52.58-1.75,1.49-.54,2.17-1.1,4.33-1.66,6.49-.2.77.06,1.03.85.96,1.74-.17,3.5-.18,5.21-.49,2.76-.49,5.53-.46,8.31-.5.53,0,1.05-.25,1.58-.39.05.11.1.21.15.32h0v.02Z"/>
                                </g>
                                <g mask='url(#welcomeFont_02)'>
                                    <path d="m62.3,31.69c1.14.35,2.16.67,3.19.99,3.98,1.21,6.45,3.87,7.32,7.81.51,2.33,0,4.51-2.11,6.17-1.61,1.27-3.34,2.19-5.26,2.92-1.24.47-2.37,1.31-3.4,2.17-1.8,1.5-3.46,3.17-5.22,4.72-.39.34-.95.53-1.47.68-.68.19-1.26,0-1.78-.57-.37-.42-.93-.7-1.46-.93-.48-.21-.82-.41-.85-1-.03-.41-.32-.81-.36-1.23-.11-1.04-.88-1.16-1.7-1.36-2.47-.61-4.09-2.18-4.96-4.5-.1-.27-.09-.59-.08-.88.05-1.37.15-2.73.17-4.1.07-3.97,0-7.95.23-11.92.08-1.55-.25-2.75-1.27-3.87-2.22-2.46-1.47-3.83.37-6.52.29-.42.44-.93.67-1.4.1-.2.18-.47.36-.58,1.61-.99,3.25-1.93,4.86-2.93,3.63-2.27,7.57-3.15,11.82-2.48,1.93.31,3.42,1.41,4.69,2.86,1.19,1.36,2.05,2.81,2.39,4.62.53,2.82-.34,5.19-2.11,7.29-1,1.18-2.2,2.21-3.31,3.31-.21.21-.4.43-.7.76h0l-.03-.03Zm-9.01,4.24l-.26.11c.07.86.12,1.73.23,2.59.21,1.53.42,3.05.72,4.56.07.34.39.78.71.91,1.24.5,2.53.9,3.8,1.31.22.07.49.13.71.07,2-.51,3.98-1.06,5.66-2.31.29-.22.58-.59.63-.92.17-1.15-.14-2.16-1.04-3-1.21-1.13-2.79-1.51-4.27-2.1-.78-.31-1.49-.3-2.27,0-1.03.37-2.08.35-3.06-.25-.52-.32-1.04-.64-1.57-.96h.01Zm-1.3-9.35c1.59-.7,3.07-.62,4.61-.2.91.25,1.83-.1,2.6-.71,1.46-1.16,2.21-2.74,2.62-4.48.17-.7.14-1.49-.6-1.93-1.11-.66-2.33-1.18-3.57-.41-2.03,1.24-3.94,2.66-5.39,4.57-.71.94-.47,2-.27,3.17h0Z"/>
                                </g>
                                <g mask='url(#welcomeFont_03)'>
                                    <path d="m95.09,20.24c-.58.71-1.04,1.27-1.5,1.83-.21.25-.36.58-.62.76-.92.63-1.12,1.65-1.32,2.57-.28,1.3-1.08,2.06-2.18,2.55-1.51.68-3.08.77-4.69.2-.7-.25-1.44-.39-2.4-.65.14,2.23.26,4.28.4,6.45h1.78c2.02,0,4.04.03,6.06,0,.93-.02,1.87-.14,2.78-.34.5-.11.99-.41,1.39-.74.69-.56,1.29-.56,1.97.05.26.24.59.41.9.59.56.33.85.75.89,1.44.03.52.33,1.03.47,1.55.06.23.11.49.04.71-.22.74-.51,1.46-.74,2.19-.26.83-1.12,1.49-2.25,1.46-1.35-.04-2.71-.18-4.05-.34-2.62-.32-5.24-.57-7.83.07-2.37.58-4.71.27-6.92-.46-1.94-.64-2.99-2.18-3.31-4.3-.49-3.23-.59-6.47-.49-9.71.11-3.54.29-7.08.54-10.62.11-1.53.51-3.03.67-4.56.06-.63-.08-1.34-.32-1.94-.4-1.02-.94-1.86-.39-3.11.48-1.1,1.42-1.16,2.21-1.46,2.48-.93,5.07-.8,7.67-.6,1.84.14,3.69.22,5.53.2,1.33-.01,2.27.72,3.31,1.32.03.01.04.04.06.07.83.92,1.24,4.03.71,5.16-1.16,2.46-.94,2.26-3.66,2.25-1.16,0-2.31.03-3.47.03-.79,0-1.12.34-1.19,1.13-.03.4-.37.82-.65,1.15-.61.72-1.4,1.32-1.87,2.11-.49.83-.12,1.32.86,1.28,1.6-.07,3.2-.17,4.78-.38,1.43-.19,2.78-.09,4.05.58,1,.52,1.99,1.08,2.78,1.51h0Z"/>
                                </g>
                                <g mask='url(#welcomeFont_04)'>
                                    <path d="m114.68,33.05c-.18.94-.35,1.79-.49,2.65-.48,3.01-.94,6.03-1.42,9.04-.06.4-.11.96-.39,1.14-.5.33-1.18.66-1.73.58-.73-.1-.9.28-1.14.72-.11.21-.18.44-.28.66-.34.75-.82,1.3-1.68.43-.54-.54-1.2-.98-1.87-1.35-1.7-.94-1.5-2.49-1.24-3.93.66-3.62,1.43-7.21,1.51-10.93.06-3.11.5-6.21.8-9.32.35-3.63,1.34-7.12,2.67-10.51.32-.82.81-1.62,1.42-2.26.29-.31,1.11-.43,1.55-.26,1.99.78,3.53,2.19,4.87,3.79.88,1.05.82,2.47.5,3.62-.44,1.57-.06,3.03.13,4.5.45,3.5,1.79,6.72,3.49,9.81.1.18.25.33.47.64.29-.74.47-1.41.8-2.02.85-1.59,1.33-3.23,1.21-5.06-.06-.86.18-1.76.36-2.63.24-1.1.82-1.94,1.93-2.43.36-.16.66-.6.82-.99.81-1.95,1.03-4.02,1.19-6.11.13-1.74.79-3.16,2.6-3.85,1.39-.53,2.92-.14,3.64,1.13,1.02,1.8,2.04,3.61,2.35,5.69.25,1.68-.05,3.35-.65,4.92-.81,2.15-1.79,4.23-2.65,6.36-.64,1.61-1.21,3.24-1.76,4.88-.5,1.49-1.04,2.97-1.35,4.5-.4,1.97-.53,4-.88,5.99-.19,1.11-.56,2.19-.91,3.27-.13.38-.35.83-.67,1.04-.73.48-1.44.89-1.85,1.74-.1.22-.94.32-1.29.15-1.29-.6-2.41-1.43-3.09-2.76-.26-.52-.68-.99-1.09-1.41-.51-.53-.71-1.09-.64-1.82.16-1.53-.71-2.72-1.47-3.93-1.14-1.8-2.24-3.61-3.37-5.41-.04-.07-.14-.1-.4-.26h0Z"/>
                                </g>
                                <g mask='url(#welcomeFont_05)'>
                                    <path d="m41.3,78.96c.65.76,1.25,1.58,1.97,2.29,2.75,2.69,5.57,5.31,8.29,8.03,1.03,1.03,1.96,2.2,2.71,3.44.8,1.32.45,2.68-.57,3.69-.82.82-1.88.77-2.88.75-1.94-.03-3.52-1.02-5-2.14-3.42-2.58-6-5.85-8.03-9.58-.51-.94-1.05-1.86-1.69-3-.37.77-.74,1.32-.91,1.93-.45,1.64-1.81,2.64-2.85,3.83-1.04,1.18-2.54.78-3.89.45-1.44-.35-2.08-1.64-3.04-2.56-1.22-1.16-.89-2.3-.28-3.54,1.55-3.16,3.34-6.22,4.3-9.65.58-2.07,1.28-4.1,1.87-6.16.09-.31-.02-.74-.18-1.05-.26-.49-.17-.77.22-1.16.46-.46.79-1.06,1.16-1.62.44-.66.78-1.4,1.31-1.98.3-.32.96-.61,1.36-.52,2.15.47,4.14-.22,6.18-.64,2-.41,4.01-.4,5.89.39,2.57,1.07,3.97,3.11,4.23,5.8.22,2.41.17,4.82-1.08,7.05-1.28,2.27-3.05,3.85-5.73,4.44-1.15.25-2.19.95-3.37,1.49h0v.02Zm-1.95-5.93c2.18,1.03,3.69.67,5.03-1.11.11-.14.25-.26.36-.4.99-1.39,1.45-2.94,1.26-4.63-.11-.94-.63-1.35-1.44-1.22-.71.12-1.41.31-2.11.49-1.06.27-1.74.96-1.99,1.99-.4,1.63-.75,3.28-1.11,4.88h0Z"/>
                                </g>
                                <g mask='url(#welcomeFont_06)'>
                                    <path d="m66.52,69c0,2.47-.1,4.55.03,6.62.12,1.95.46,3.88.72,5.82.21,1.62.44,3.23.67,4.84.31,2.23.69,4.46.9,6.7.12,1.32.02,2.67-.07,4.01-.12,1.76-1.49,2.04-3.39,1.82-1.52-.18-2.76-.97-3.6-2.32-.41-.66-.96-1.22-1.42-1.85-.16-.23-.31-.53-.31-.8-.02-2.2,0-4.4,0-6.6,0-4.03.08-8.07-.04-12.1-.07-2.28-.42-4.55-.75-6.81-.28-1.92-.72-3.82-1.05-5.74-.12-.69.21-1.07.95-1.24,2.34-.52,4.07.27,5.58,2.06,1.51,1.78,2.06,3.73,1.79,5.58h0Z"/>
                                </g>
                                <g mask='url(#welcomeFont_07)'>
                                    <path d="m61.42,54.88c0-1.07.94-2.16,2.13-2.47,1.13-.3,2.37.21,2.98,1.33.54.99.96,2.04,1.44,3.06.3.64.26,1.34-.31,1.69-.47.28-1.17.25-1.77.27-.43.01-.88-.06-1.29-.19-.47-.16-.92-.4-1.35-.65-.79-.47-1.84-2.23-1.83-3.03h0Z"/>
                                </g>
                                <g mask='url(#welcomeFont_08)'>
                                    <path d="m92.19,98.05c-3.08.04-6.1-.39-9.01-1.34-1.08-.35-2.06-1.09-3-1.78-1.38-1.01-2.78-2.04-3.96-3.25-.83-.86-1.36-2.03-1.92-3.1-.14-.28.06-.74.13-1.11.3-1.48.83-2.95.9-4.44.15-3.33,1.33-6.37,2.39-9.47,1.16-3.4,3.13-6.36,5.01-9.37.53-.85.84-1.62.88-2.62.02-.51.43-1.16.87-1.47,1.59-1.12,3.34-1.66,5.37-1.31,1.01.17,2.08-.05,3.13-.09,2.13-.07,4.27-.27,6.4-.17,1.73.08,3.44.5,5.15.83.43.08.85.33,1.2.6.56.44.45,1.03-.07,1.62-.29.32-.39.81-.6,1.2-.17.31-.31.73-.59.87-.8.42-1.68.69-2.5,1.08-1.19.57-2.35,1.15-3.36,2.09-1.27,1.19-2.94,1.86-4.72,1.85-4.04-.01-3.43.11-5.52,3.27-.6.91-.65,2.19-.9,3.32-.13.6.19.85.83.84,1.28-.03,2.57-.12,3.83.02,1.21.13,2.44.41,3.58.84,1.32.5,1.54,1.56,1.04,2.86-.26.66-.23,1.45-.22,2.18,0,.7-.26,1.23-.89,1.4-1.38.38-2.78.77-4.2.94-1.06.13-2.17-.06-3.25-.15-1.06-.08-1.23.03-1.24,1.1,0,1.23.04,2.45-.02,3.68-.04.86.41,1.06,1.12.97,1.98-.23,3.96-.43,5.93-.75,3.12-.5,6.2-1.2,9.33-1.57,1.64-.19,3.38-.37,4.98.56,1.46.85,1.96,1.83,1.65,3.48-.13.7.14,1.53-.16,2.12-.36.72-1.04,1.65-1.73,1.79-4.45.93-8.93,1.68-13.41,2.44-.8.13-1.64.02-2.46.02h0v.02Z"/>
                                </g>
                                <g mask='url(#welcomeFont_09)'>
                                    <path d="m28.08,127.71c.74,1.22,1.41,2.1,1.84,3.08.65,1.49.07,3.11-1.33,3.99-.58.37-1.21.71-1.86.92-.98.31-1.67.9-2.3,1.67-1.06,1.3-2.29,2.39-3.96,2.88-1.12.33-1.84-.09-2.63-.89-.82-.84-1.83-1.51-2.84-2.13-.3-.18-.87.11-1.32.1-2.85-.05-5.71-.17-8.38-1.23-.88-.35-1.75-.97-2.37-1.68-2.18-2.45-2.61-5.44-2.37-8.56.06-.78.34-1.57,1.35-1.81.6-.14.92-.63.73-1.24-.36-1.17.07-2.23.45-3.27,1.91-5.18,3.81-10.35,4.97-15.75.1-.47.44-.9.69-1.4-.75-.7-1.58-1.4-2.32-2.18-.91-.95-1.58-2.03-1.55-3.41.02-.72.34-1.15,1.07-1.32,1.67-.39,3.28-.47,4.97.15,2.24.81,4.61,1.25,6.83,2.09,4.67,1.77,8.76,4.35,10.79,9.13.6,1.4.9,2.96,1.11,4.47.26,1.82.39,3.67.35,5.5-.04,1.63-.33,3.28-.64,4.89-.22,1.13-.56,2.19-.5,3.4.05.96-.58,1.96-.8,2.62h0l.02-.02Zm-7.49-1.07c1.05.26,1.8-.24,2.35-1,1.56-2.14,2.32-4.5,1.71-7.13-.75-3.24-2.33-6.11-4.15-8.87-.73-1.1-1.73-1.91-2.92-2.47-.61-.29-1.09-.18-1.25.52-.32,1.39-.54,2.8-.91,4.17-.48,1.8-1,3.6-1.63,5.35-.66,1.82-1.47,3.59-2.22,5.37-.15.36-.25.76-.49,1.04-.73.85-1.53,1.63-2.26,2.48-.97,1.13-.64,2.85.69,3.57.25.14.57.21.86.21.48,0,.96-.08,1.43-.13.96-.09,1.93-.13,2.52-1.09.12-.19.34-.35.55-.45,1.8-.9,3.71-1.41,5.73-1.56h-.01Z"/>
                                </g>
                                <g mask='url(#welcomeFont_10)'>
                                    <path d="m47.96,138.25c3.42-1.04,6.67-2.01,9.91-3.02.44-.14.8-.52,1.24-.69,1.28-.51,3.38,0,4,1.2.36.68.21,1.62.27,2.45.01.14-.08.3-.05.43.39,1.37.08,2.43-1.18,3.1-1.81.95-3.67,1.85-5.57,2.6-2.36.92-4.75,1.78-7.19,2.47-2.74.77-5.58.68-8.38.33-1.27-.16-2.35-.89-3.26-1.84-.85-.89-.76-3.08.59-3.74.21-.1.44-.45.41-.65-.11-.99-.31-1.98-.47-2.96-.3-1.87-.58-3.74-.91-5.61-.06-.32-.32-.62-.51-.92-.26-.4-.6-.76-.78-1.2-.45-1.08-.74-2.2.4-3.05.69-.52.81-1.24.88-1.96.17-1.86.32-3.73.38-5.6.04-1.35-.23-2.72-.11-4.05.14-1.54-.19-3.31,1.5-4.34.6-.37,1.25-.76,1.93-.92,3-.69,5.79-1.9,8.58-3.15,2.04-.92,4.08-1.85,6.17-2.65.65-.25,1.55-.29,2.18-.04,1.13.44,2.36.99,3.13,1.85.58.64,1.18,1.64.94,2.75-.05.23.03.56.18.74.64.76.32,1.42-.32,1.84-1.18.77-2.4,1.51-3.7,2.08-2.29,1.01-4.68,1.81-6.96,2.84-2.1.95-2.18,1.35-1.72,3.58.15.72.21,1.52.04,2.21-.23.9.16,1.24.86,1.59,1.58.78,3.01,1.74,4.09,3.17.91,1.21.62,2.6.67,3.93.01.3-.51.82-.87.91-1.98.5-3.99.92-6,1.31-.52.1-.85.15-.77.8.16,1.35.26,2.71.4,4.24h0v-.03Z"/>
                                </g>
                                <g mask='url(#welcomeFont_11)'>
                                    <path d="m89.34,121.93c.56.27,1.02.46,1.45.7,3.44,1.91,6.84,3.91,10.33,5.73,2.04,1.07,4.19,2.01,6.38,2.72,2.59.84,5.3,1.31,7.93,2.04,1.38.38,2.27,1.52,3.21,2.51.6.64,1.1,1.36,1.73,2.15,0,.83.01,1.87,0,2.91,0,.24-.06.49-.17.7-.37.7-.77,1.39-1.18,2.07-.34.58-.61,1.25-1.1,1.69-.29.27-.93.3-1.38.23-.89-.13-1.78-.33-2.62-.63-3.43-1.23-6.92-2.35-10.24-3.83-2.91-1.3-5.67-2.94-8.39-4.61-2.36-1.46-4.34-3.39-6.22-5.43-1.19-1.28-2.48-2.61-4.47-2.84-.98-.11-1.44.18-1.21,1.15.46,1.92,1.03,3.82,1.46,5.75.51,2.29,1.07,4.61.72,6.96-.13.88-.64,1.83-1.26,2.47-.86.88-1.96,1.57-3.05,2.2-.43.25-1.13.25-1.65.12-1.53-.37-2.94-1.01-4.06-2.19-.45-.47-1.14-.73-1.53-1.22-.4-.51-.75-1.19-.79-1.81-.06-1.1,0-2.25.26-3.33.76-3.24.59-6.35-.75-9.44-.53-1.22-1.19-2.31-2.01-3.35-1.07-1.36-1.44-3.01-1.05-4.65.65-2.73,1.48-5.42,2.34-8.1.24-.74.74-1.45,1.29-2.03,1.28-1.36,2.64-2.65,4.01-3.92.46-.42,1.05-.71,1.61-1,1.47-.76,2.91-1.58,4.45-2.19,1.82-.73,3.68-1.44,5.59-1.83,1.73-.35,3.56-.38,5.33-.3,2.01.09,3.36,1.15,4.19,3.07.57,1.31.89,2.68.8,3.97-.11,1.45-.73,2.93-1.39,4.27-.73,1.49-1.73,2.87-2.68,4.26-1.02,1.49-2.23,2.78-3.96,3.56-.68.31-1.21.91-1.92,1.47h0Zm-4.76-10.7c-.63.31-1.19.62-1.77.86-2.09.85-3.68,2.32-5.16,3.94-.47.52-.35,1.08.21,1.43.83.52,1.64,1.08,2.47,1.61.19.12.45.27.64.23,1.28-.27,2.58-.5,3.81-.93,1.75-.6,3.49-1.29,5.17-2.08,2.6-1.22,4.57-3.15,5.96-5.63.15-.28.2-.71.11-1.02-.46-1.56-2.13-2.26-3.51-1.01-1.32,1.19-2.83,2.19-4.32,3.2-1.14.77-2.68.47-3.6-.61h0Z"/>
                                </g>
                            </svg>
                        </div>
                        <div id='mouse' />
                    </div>
                    <video src='assets/montage.mov' autoPlay loop muted playsInline />
                </div>
                <div className='section'>

                </div>
            </div>
        )
    }
}