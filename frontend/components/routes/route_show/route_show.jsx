import React from 'react';
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

class RouteShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            route: "",
            currentUserId: props.currentUserId
        }
        this.openModal = props.openModal;
        this.currentUserId = props.currentUserId;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleNotLoggedIn = this.handleNotLoggedIn.bind(this);
    }

    componentDidMount(){
        this.props.fetchRoute(this.props.match.params.routeId).then(route => {
            this.setState({route: route.route})
        });
    }

    componentDidUpdate(prevProps){
        const currentRouteId = this.props.match.params.routeId;
        const prevRouteId = prevProps.match.params.routeId;
        const currentUserId = this.props.currentUserId;
        const prevUserId = prevProps.currentUserId;
        if (currentRouteId !== prevRouteId){
            this.props.fetchRoute(currentRouteId).then(route => {
                this.setState({route: route.route})
            });
        }
        if (prevUserId !== currentUserId){
            this.setState({currentUserId: this.props.currentUserId})
        }
    }

    getTime(timestamp){
        const timeCut = timestamp.slice(0,10).split("-");
        const newTime = [];
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        newTime.push(months[parseInt(timeCut[1])]);
        newTime.push(" ");
        if (parseInt(timeCut[2]) < 10){
            newTime.push(timeCut[2].slice(1));
            newTime.push(', ')
        } else {
            newTime.push(timeCut[2]);
            newTime.push(', ')
        }
        newTime.push(timeCut[0]);

        return newTime.join('');
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        let stateDup = {...this.state}

        delete stateDup.route;

        let formData = new FormData();
        Object.keys(stateDup).forEach(attribute => {
            formData.append(`comment[${attribute}]`, stateDup[attribute]);
        });

        formData.append(`comment[user_id]`, this.props.currentUserId);
        formData.append(`comment[route_id]`, this.state.route.id)

        this.props.createComment(formData)
            .then(() => this.props.fetchRoute(this.props.match.params.routeId))
            .then(route => {
                this.setState({route: route.route, body: undefined, comment_type: undefined});
                const commentInput = document.getElementById('comment-input');
                const radioInputs = document.getElementsByClassName('comment-radio-input');
                commentInput.value = '';
                return radioInputs;
            }).then(radioInputs => {
                for(let i = 0; i < radioInputs.length; i++){
                    radioInputs[i].checked = false;
                }
            })
    }

    handleNotLoggedIn(e) {
        e.preventDefault();
        this.openModal('login');
    }

    render(){
        if (this.state.route === ""){
            return (
                null
            )
        }

        let { 
            name, 
            routeType, 
            difficulty, 
            pitches, 
            elevation, 
            description, 
            protection, 
            sharer, 
            area, 
            pathway,
            createdAt,
            photo_urls,
            mods,
            comments
        } = this.state.route;

        const pathwayFill = [<Link key={0} className="show-pathway" to="/">All Areas</Link>];
        const profilePhoto = photo_urls.length > 0 ? <img src={photo_urls[0]}></img> : null;
        const photosSection = photo_urls.length > 0 ? 
        <>
            <h2>Photos</h2>
            <div className="show-photos-container">
                {photo_urls.map(photoUrl => {
                    return (
                        <div className="show-photo" onClick={() => this.openModal('showPhoto', photoUrl)}>
                            <img src={photoUrl} />
                        </div>
                    )
                })}
            </div>
        </> : null;
        const modFill = mods.length > 0 ? <td>{mods[0].first_name} {mods[0].last_name}</td> : <td>No Moderation</td>
        const addPhotosFill = this.props.currentUserId ? <button className="dropdown-button" onClick={() => this.openModal('addRoutePhotos')}>Add Photo</button> : 
            <button className="dropdown-button" onClick={() => this.openModal('login')}>Add Photo</button>;
        const commentsHeader = comments.length === 1 ? <h2>{comments.length} Comment</h2> : <h2>{comments.length} Comments</h2>
        let commentsFill = comments.length > 0 ? <div>
            {
                comments.map(comment => (
                    <div className="comment">
                        <div className="comment-username-container">
                            <p>{ comment.user_id }</p>
                        </div>
                        <div className="comment-body-container">
                            <p>{ comment.body }</p>
                        </div>
                    </div>
                ))
            }
        </div> : null;
        const addComment = 
        <form>
            <textarea
                id='comment-input'
                value={this.state.body}
                onChange={this.handleInput('body')}
                placeholder=" Write a comment"
                required
            />
            <br />
            <label>Comment Type:</label>
                <div>
                    <input 
                        type="radio" 
                        value="ITEM" 
                        name="comment_type" 
                        id="ITEM" 
                        onChange={this.handleInput('comment_type')}
                        className='comment-radio-input'
                    />
                    <label>Lost or Found Item</label>
                </div>

                <div>
                    <input 
                        type="radio" 
                        value="TEMP" 
                        name="comment_type" 
                        id="TEMP" 
                        onChange={this.handleInput('comment_type')}
                        className='comment-radio-input'
                    />
                    <label>Temporary (Condition Report, Upcoming Event, etc)</label>
                </div>

                <div>
                    <input 
                        type="radio" 
                        value="BETA" 
                        name="comment_type" 
                        id="BETA" 
                        onChange={this.handleInput('comment_type')}
                        className='comment-radio-input'
                    />
                    <label>Beta for this Route or Personal Opinion</label>
                </div>
            <br />
            {
            this.state.currentUserId ? 
                <input type="submit" onClick={this.handleSubmit} value="Post Comment" /> : 
                <input type="submit" onClick={this.handleNotLoggedIn} value="Post Comment" />
            }
        </form>;
        let dropdownCard;

        if (this.props.currentUserId === sharer.id){
            dropdownCard = (
            <div className="dropdown-content">
                <Link>Edit Route</Link>
                <br />
                <button className="dropdown-button" onClick={() => this.openModal('addRoutePhotos')}>Add Photo</button>
            </div>)
        } else {
            dropdownCard = (
            <div className="dropdown-content">
                { addPhotosFill }
            </div>)
        }

        pathway.forEach(area => {
            pathwayFill.push(" > ");
            pathwayFill.push(<Link key={area.id} className="show-pathway" to={`/areas/${area.id}`}>{area.name}</Link>);
        })

        if (pitches === 1){
            pitches = "1 pitch";
        }   else {
            pitches = pitches.toString().concat(" pitches");
        }

        const otherRoutes = [];
        this.state.route.siblingRoutes.forEach(route => {
            if (route.id !== this.state.route.id){
                let link = <Link to={`/routes/${route.id}`}>{route.name} {route.difficulty}</Link>
                otherRoutes.push(link);
            }
        })

        return (
            <div className="showpage-main">
                <div className="sidebar">
                    <h3>Routes in { area.name }</h3>
                    { otherRoutes }
                </div>

                <div className="showpage-body">
                    <div className="show-pathway">{ pathwayFill }
                        <div className="dropdown">
                            <a>Add to Page<FaAngleDown /></a>
                            { dropdownCard }
                        </div>
                    </div>

                    <div className="sub-header">
                        <h1>{ name }</h1>
                        <h2>{ difficulty }</h2>
                        <table className="description-details"> 
                        <tbody>
                            <tr>
                                <td className="description-details-left">Type:</td>
                                <td>{ routeType }, { elevation }ft, { pitches }</td>
                            </tr>
                            <tr>
                                <td className="description-details-left">Shared By:</td>
                                <td>{ sharer.firstName } { sharer.lastName } on { this.getTime(createdAt) }</td>
                            </tr>
                            <tr>
                                <td className="description-details-left">Admins:</td>
                                { modFill }
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="slideshow-show">
                        { profilePhoto }
                    </div>
                    <div className="description-body">
                        <h2>Description</h2>
                        <p>{ description }</p>
                        <h2>Protection</h2>
                        <p>{ protection }</p>
                        { photosSection }
                        { commentsHeader }
                        { addComment }
                        { commentsFill }
                    </div>
                </div>
            </div>
        )
    }
}

export default RouteShow;