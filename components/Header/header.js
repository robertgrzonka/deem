const Header = () => (
  <div>
    <div className='container-fluid py-5 mb-5'>
      <div className='row justify-content-center text-center py-5'>
        <h1 className='display-4'>Typography Design System</h1>
        <style jsx>
          {`
      h1 {
        color: #f8f9fa;
        text-shadow: 2px 2px 5px #000000;
        font-weight: 900;
        font-variant: small-caps;
        text-transform: lowercase;
        }
      `}
        </style>
      </div>
    </div>
  </div>
)

export default Header
