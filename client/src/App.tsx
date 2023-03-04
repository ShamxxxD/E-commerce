import './main.scss';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <div className='App'>
            <Routes>
                {publicRoutes.map((route: any, index: any) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
