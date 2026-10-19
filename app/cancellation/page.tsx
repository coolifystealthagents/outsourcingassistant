import { permanentRedirect } from 'next/navigation';

export default function CancellationAlias() {
  permanentRedirect('/cancellation-policy');
}
