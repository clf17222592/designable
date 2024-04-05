import { GlobalRegistry, IDesignerRegistry } from '@clf-master/designable-core'
import { globalThisPolyfill } from '@clf-master/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
