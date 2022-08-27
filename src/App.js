import logo from './logo.svg';
import './App.css';

const cardDetails = [
  {name: 'Buu', summary: 'UUUUUUU', description: 'dkjekdj djkdjk' },
  {name: 'Ahuu', summary: 'huu oooioio i', description: 'dkjekdj iii i i i ' },
  {name: 'uiuidl fd', summary: 'fff', description: 'fff fufiufif uiofu  djkdjk' },
  {name: 'Ah uh uh uh i', summary: 'weee', description: 'dkjekdj fofofofofof f f f' },
  {name: 'sss', summary: 'UUUssUUUU', description: 'dkjeakdj djkdjk' }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fffacc' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
            {cardDetails.map((details, i) => <div key={i} style={{ height: '50px', background: 'white', marginBottom: '10px', borderRadius: '8px', border: '1.5px solid grey' }}></div>)
}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
