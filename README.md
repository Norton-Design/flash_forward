
# Flash Forward


[Live Demo](https://flash-forward-app.herokuapp.com/#/)

Flash Forward is a [Mountain Project](https://www.mountainproject.com/) clone that allows users to browse and find rock climbing areas and routes across the US. Currently, only new routes and areas can be added, but the site will eventually support user commenting, photo sharing, and a route searcher. This project utilizes PostgreSQL and Rails for backend support and React/Redux for frontend support.

## Technologies 

- Ruby 2.5.1p57
- Rails 5.2.4.2
- PostgreSQL 10.12
- React 16.13.1
- Redux 4.0.5

## Features

### Homepage

The homepage doubles as the site's primary feature which is the climbing directory, a list of all fifty states broken down into sub-areas for climbing to browse. Each item listing here will eventually have the grand total number of routes found within that area.

![Screenshot_2020-04-17 FlashForward](https://user-images.githubusercontent.com/56661062/79588483-fc58f600-80a1-11ea-896d-b1d1eab04b40.png)

### User Authentication

Modal dropdown forms allow users to interact with the frontend User Auth, which will persist the current user throughout the site, and supply Auth data to the backend Auth created using Rails BCrypt.

### Areas

Area show pages display vital stats about areas, like descriptions, directions, GPS location, and others. It is from this page that users can add other sub-areas or routes, but not both (areas can be only have routes or sub-areas, not both), and are routed to creation forms for that process. Sidebar contains links to sub-areas or routes, depending on what said area has.

Setting the ancestor pathway links was the most difficulty part of this page and required recursion to grab ancestor data to pass to this component:

![Screenshot_2020-04-17 FlashForward(1)](https://user-images.githubusercontent.com/56661062/79588477-fb27c900-80a1-11ea-8d49-3b07b0447ae6.png)

```ruby
    def pathway(parent_id)
        return [] if parent_id == nil 
        area = Area.find(parent_id)

        return pathway(area.parent_id).concat([area])
    end
```

### Routes

Route show page has the routes vitals, route type, elevation, pitch length, the original poster and the post date, as well as the description of the route, and the required protection equipment needed to make climbing the route safe. A sidebar links users to sibling routes within the route's parent area.

Within the new route form, I enjoyed creating components that were added or changed depending of the component state (although it could use refactoring to a be a switch statement):

![Screenshot_2020-04-17 FlashForward(2)](https://user-images.githubusercontent.com/56661062/79588469-f95e0580-80a1-11ea-8fe4-6f1383b94492.png)

```js
    toggleGradeSelection(route_type){
        let difficultyInput;
        const boulder_grades = ["VB", "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"];
        const yds_grades = ["5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c", "5.14d", "5.15a", "5.15b", "5.15c", "5.15d"];
        const mixed_grades = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15"];
        const aid_grades = ['A1', 'A2', 'A3', 'A4', 'A5', 'C1', 'C2', 'C3', 'C4', 'C5'];

        if (route_type === "Boulder"){
            difficultyInput = (
                <div>
                    <select id="grades" name="grades" onChange={this.handleInput('difficulty')}>
                    {boulder_grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                    ))}
                    </select>
                </div>
            )
        } else if (route_type === "Aid"){
            difficultyInput = (
                <div>
                    <select id="grades" name="grades" onClick={this.handleInput('difficulty')}>
                        {aid_grades.map(grade => (
                            <option key={grade} value={grade}>{grade}</option>
                        ))}
                    </select>
                </div>)
        } else if (route_type === "Ice/Mixed"){
            difficultyInput = (
            <div>
                <select id="grades" name="grades" onClick={this.handleInput('difficulty')}>
                    {mixed_grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                    ))}
                </select>
            </div>)
        } else if (route_type === "Trad"){
            difficultyInput = (
            <div>
                <select id="grades" name="grades" onClick={this.handleInput('difficulty')}>
                    {yds_grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                    ))}
                </select>
            </div>)
        } else if (route_type === "Sport"){
            difficultyInput = (
            <div>
                <select id="grades" name="grades" onClick={this.handleInput('difficulty')}>
                    {yds_grades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                    ))}
                </select>
            </div>)
        } else {
            difficultyInput = (
            <p>Please select a route type.</p>
            )
        }
        return difficultyInput;
    }
```

![Screenshot_2020-04-17 FlashForward(3)](https://user-images.githubusercontent.com/56661062/79588465-f82cd880-80a1-11ea-86e9-a0ddef99ff3e.png)

## Future Features

- Users will be able to add photos to routes and areas
- Users will be able to add comments to routes and area
- Route finder
- Add a user dashboard
- Users will be able to add routes to a to-do list (projects)
- Users will be able to rate routes 