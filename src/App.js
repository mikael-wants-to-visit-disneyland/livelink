import logo from './logo.svg';
import './App.css';

const cardDetails = [
  {name: 'Justin Sullivan', summary: 'UUUUUUU', description: 'dkjekdj djkdjk', imgUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg' },
  {name: 'Golgotha Mendoza', summary: 'huu oooioio i', description: 'dkjekdj iii i i i ', imgUrl: 'https://www.biography.com/.image/t_share/MTgwODMyMDU3NjQ2MTMwNTM2/gettyimages-1035119724.jpg' },
  {name: 'Sweet Feelin', summary: 'fff iioio', description: 'fff fufiufif uiofu  djkdjk', imgUrl: 'https://wegotthiscovered.com/wp-content/uploads/2021/06/The-Little-Mermaid-Ursula-e1624283086989-1200x900.jpg' },
  {name: 'Greg Thierry', summary: 'weee hustbung su', description: 'dkjekdj fofofofofof f f f', imgUrl: 'https://media.newyorker.com/photos/62ffb1b51dbd52803e01d208/master/w_2240,c_limit/220829_r40915illu.jpg' },
  {name: 'Mike', summary: 'UUUssUUUU', description: 'dkjeakdj djkdjk', imgUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMjk1MjE2NDUwMzQ5MDAz/gettyimages-1170417494.jpg' },
  {name: 'Amanda Algae', summary: 'UUUssUUUU', description: 'dkjeakdj djkdjk', imgUrl: 'https://i2-prod.walesonline.co.uk/incoming/article22003703.ece/ALTERNATES/s1200b/0_Amanda-Holden-in-Neighbours.jpg' }
]

function App() {
  return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#FDEFE6', paddingTop: '50px' }}>
          <img src={logo} className="logo" alt="logo" />
          <div style={{ display: 'flex', flexDirection: 'column', width: '77%' }}>
            {cardDetails.map((details, i) => <div key={i} style={{ background: 'white', marginBottom: '15px', borderRadius: '8px', border: '2px solid grey', padding: '10px' }}>
              <div style={{ display: 'flex' }}>
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
