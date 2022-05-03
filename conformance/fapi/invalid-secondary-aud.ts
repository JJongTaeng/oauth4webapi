import { test, red, modules } from '../runner'

for (const module of modules('invalid-secondary-aud')) {
  test.serial(
    red,
    module,
    'unexpected ID Token "azp" (authorized party)',
    'OperationProcessingError',
  )
}
