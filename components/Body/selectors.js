import Select from './select'

const Selectors = () => (
  <div className='justify-content-center d-flex align-items-center text-center py-3'>
    <Select htmlFor='color-picker' name='Colors' />
    <Select htmlFor='size-picker' name='Sizes' />
    <Select htmlFor='weight-picker' name='Weights' />
    <Select htmlFor='font-picker' name='Fonts' />
  </div>
)

export default Selectors
