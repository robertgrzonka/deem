const Container = ({ children }) => (
  <div>
    <div className='container py-3'>
      <div className='row justify-content-center align-items-center text-center d-flex py-3'>
        <div className='row'>
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default Container
