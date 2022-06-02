import Search from './components/Search';
import sampleResponse from './sampleResponse.json';

function App() {
  return (
    <div className='bg-gradient-to-r from-purple-900 to-purple-300 h-[100vh] font-kanit'>
      <Search
        placeholder={'Enter a Country Name...'}
        response={sampleResponse}
      />
    </div>
  );
}

export default App;
