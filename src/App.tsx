import logo from './logo.svg';
import './App.css';
import cardDetails from './dummyData.json';

function App() {
  return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#FDEFE6', paddingTop: '50px' }}>
          <img src={logo} className="logo" alt="logo" />
          <div style={{ display: 'flex', flexDirection: 'column', width: '77%' }}>
            {cardDetails.map((details, i) => <div key={i} style={{ background: 'white', marginBottom: '15px', borderRadius: '8px', border: '2px solid grey', padding: '10px' }}>
              <div style={{ display: 'flex' }} onClick={(e) => console.log(e.currentTarget, e.currentTarget.id)}>
                <div className='profile-picture'>
              <img src={details.imgUrl} style={{ height: '100%', width: 'auto' }} alt="logo" />
              </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '16px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'black' }}>{details.name}</span>
                  <span style={{ fontSize: '14px', color: 'black', marginTop: '5px' }}>{details.summary}</span>
                </div>
              </div>
            </div>)
}
          </div>
        </div>
  );
}

export default App;
