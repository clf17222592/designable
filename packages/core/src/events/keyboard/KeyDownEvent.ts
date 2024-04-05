import { ICustomEvent } from '@clf-master/designable-shared'
import { AbstractKeyboardEvent } from './AbstractKeyboardEvent'

export class KeyDownEvent
  extends AbstractKeyboardEvent
  implements ICustomEvent
{
  type = 'key:down'
}
