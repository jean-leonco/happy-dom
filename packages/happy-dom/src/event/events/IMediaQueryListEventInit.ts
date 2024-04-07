import MediaStreamTrack from '../../nodes/html-canvas-element/MediaStreamTrack.js';
import IEventInit from '../IEventInit.js';

export default interface IMediaQueryListEventInit extends IEventInit {
	track?: MediaStreamTrack;
}
