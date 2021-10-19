import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contuct from './components/Contuct/Contuct';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import SeeDetails from './components/SeeDetails/SeeDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Header></Header>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>

						<Route path="/home">
							<Home></Home>
						</Route>
						<Route path="/about">
							<About></About>
						</Route>
						<Route exact path="/service">
							<Services></Services>
						</Route>
						<Route path="/contact">
							<Contuct></Contuct>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/register">
							<Register></Register>
						</Route>
						<PrivateRoute exact path="/service/:id">
							<SeeDetails></SeeDetails>
						</PrivateRoute>

						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
