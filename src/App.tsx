import './App.css'

function App() {

  return (
    <>
      <h1>C-64 Design System</h1>
      <h2>Foundation</h2>
      <h3>Tokens</h3>
      <h4>Colors</h4>
      <ul className='palette'>
        <li><span style={{ background: 'var(--color-base-red-200)' }}></span>Red 200</li>
        <li><span style={{ background: 'var(--color-base-red-500)' }}></span>Red 500</li>
        <li><span style={{ background: 'var(--color-base-orange-200)' }}></span>Orange 200</li>
        <li><span style={{ background: 'var(--color-base-yellow-200)' }}></span>Yellow 200</li>
        <li><span style={{ background: 'var(--color-base-green-200)' }}></span>Green 200</li>
        <li><span style={{ background: 'var(--color-base-green-500)' }}></span>Green 500</li>
        <li><span style={{ background: 'var(--color-base-cyan-200)' }}></span>Cyan 200</li>
        <li><span style={{ background: 'var(--color-base-blue-200)' }}></span>Blue 200</li>
        <li><span style={{ background: 'var(--color-base-blue-500)' }}></span>Blue 500</li>
        <li><span style={{ background: 'var(--color-base-purple-200)' }}></span>Purple 200</li>
        <li><span style={{ background: 'var(--color-base-brown-200)' }}></span>Brown 200</li>
        <li><span style={{ background: 'var(--color-base-grey-200)' }}></span>Grey 200</li>
        <li><span style={{ background: 'var(--color-base-grey-500)' }}></span>Grey 500</li>
        <li><span style={{ background: 'var(--color-base-grey-700)' }}></span>Grey 700</li>
        <li><span style={{ background: 'var(--color-base-white)' }}></span>White</li>
        <li><span style={{ background: 'var(--color-base-black)' }}></span>Black</li>
      </ul>
    </>
  )
}

export default App
