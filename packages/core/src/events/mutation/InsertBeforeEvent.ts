import { ICustomEvent } from '@clf-master/designable-shared'
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent'

export class InsertBeforeEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent
{
  type = 'insert:before'
}
