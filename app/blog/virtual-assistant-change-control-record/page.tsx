import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','virtual-assistant-change-control-record');
export default function Page(){return renderAug19Article('blog','virtual-assistant-change-control-record')}
