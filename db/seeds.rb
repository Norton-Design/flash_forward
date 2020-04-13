# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# DEVELOPMENT SEEDING
Route.destroy_all
Area.destroy_all
User.destroy_all


# Users
demo_user = User.create!(email: "DemoUser@FlashForward.com", password: "testing", first_name: "Demo User", last_name: "Whatever")
u1 = User.create!(email: "LynnHill@FlashForward.com", password: "testing", first_name: "Lynn", last_name: "Hill")


# Areas
new_york = Area.create!(lat: 41.968, lng: -74.443, name: "New York", description: "Rock Climbing in New York State consists of three main regions: the world-famous Gunks, properly called the Shawangunks; the Adirondacks, a vast state park with dozens of crags scattered across an area the size of Rhode Island; and Moss Island, a small crag near Little Falls. Several other areas exist, e.g. bouldering in Central Park, the Timp in Harriman Park, as well as many places of questionable access and/or worth.")
west_virginia = Area.create!(lat: 38.069, lng: -81.081, name: "West Virginia", description: "West Virginia is full of great climbing destinations, from local crags to Seneca Rocks to the The New River Gorge with 3000+ routes. Excellent sport climbing, bouldering, single and multi-pitch trad climbing can be found in The Mountain State.")
vermont = Area.create!(lat: 44.247, lng: -72.578, name: "Vermont", description: "For those who fall in love with Vermont, it's more than just local climbing. Vermont has long granite slabs, overhanging sport routes, beautiful schist and granite boulders, lakeside limestone, adventurous trad lines, and of course, world-class ice climbing. All in a setting that people drive hundreds of miles just to gawk at and with many cliffs that you will never see another person at. It's our hidden gem of New England and it's hiding in plain sight. Vermont is no longer just a central location to the neighboring rock of the Adirondacks and the White Mountains, it stands proud with its own 5-star lines as good as any in the Northeast.")
kentucky = Area.create!(lat: 37.579, lng: -85.078, name: "Kentucky", description: "From a climbing standpoint, you can define the Bluegrass state with that one word. From Morehead, through the Red River Gorge and the Rockcastle River watershed on down into Tennessee via the Big South Fork (of the Cumberland River) out to the coalfields of Western Kentucky, the dominant exposed rock is sandstone. By far, the best quality rock overall is in the Red River Gorge. That's not to say that the rest of the state is choss, just that the greatest concentration of quality developed climbing happens to be there. ")

a1 = Area.new(lat: 44.742, lng: -72.048, name: "Lake Willoughby", getting_there: "Route 5A about 15 miles North of Lyndonville, VT. Park below the routes and hike in (30-60 minutes).", description: "We're claiming it: This is the largest concentration of hard ice routes in the continental United States. Several committing multipitch grade IV WI5s or harder can be found towering above the lake waiting to test you. Willoughby is also home to the East Coast's first bonafide WI6 ice climb: Call of the Wild II WI6 which was first freed by Jim Shimberg in March of 1996. In summary, you can't throw an ice axe around here without finding WI5. Enjoy.")

a2 = Area.new(lat: 38.072, lng: -81.081, name: "The New River Gorge", getting_there: "Located in and around Fayetteville, WV.", description: "The greater New River Gorge region is one of the East's largest, most diverse, and highest quality climbing areas. Between the three major river gorges- the New, the Gauley/Summersville, and the Meadow- there are over 3,000 established routes on 60+ miles of cliffline, as well as hundreds of established boulder problems. While the moderates at some crags (Bubba City, Summersville) can be extremely crowded on weekends, it is still possible to find solitude and even first ascents, whether you wish to climb sport, trad, or boulder.")
a3 = Area.new(lat: 38.834, lng: -79.366, name: "Seneca Rocks", getting_there: "Seneca Rocks is located at the intersection of Route 33 and 55, east of Elkins, WV.", description: "Located in the Monongahela National Forest, Seneca Rocks is best known for multi-pitch trad climbs and stiff old-school ratings. The rock is formed from white Tuscarora quartzite, which feels much like sandstone. First recorded ascent was in 1939, where the climbing party discovered an inscription on the summit with a date of 1908. In the 1940s the 10th Mountain Division training trained at Seneca Rocks in preparation for deployment in WWII to Italy. Many of the iron pitons they trained with can still be found throughout the established climbs at Seneca Rocks. More history can be found on the Wikipedia article for Seneca. ")
a4 = Area.new(lat: 38.236, lng: -80.855, name: "Summersville Area Rock", getting_there: "See individual crags for directions; all are roughly a half hour north of the NRG on Highway 19.", description: "About a half hour north of the New River Gorge is the Gauley River drainage. The main northern shore of Lake Summersville is home to a host of high quality single-pitch sport routes. Ratings range from 5.easy (slabs left of Orange Oswald) to 5.14+ (in the Coliseum). There are plenty of as-of-yet unsent projects, and lots of new development potential, too. Water levels in the lake vary seasonally, which in turn affects the accessibility of certain routes. During warm months, the reservoir can be a great relief from oppressive summer heat. During colder seasons, the drained lakebed opens up as a treeless landscape that soaks up all the sunlight, making it a great cold-weather destination. ")

a5 = Area.new(lat: 41.744, lng: -74.197, name: "The Gunks", getting_there: "The out-of-state climber may want to fly into Newark Liberty International Airport (EWR), La Guardia Airport (LGA), or Stewart International Airport (SWF), rent a car, and drive to New Paltz.", description: 'The Gunks (short for Shawangunks) is one of the premier climbing areas in the country. Located near New Paltz, NY, the Gunks is about 85 miles from the NYC metropolitan area, making it a popular weekend destination. The rock is quartz conglomerate, solid rock with horizontal rather than vertical cracks. Climbing at the Gunks is characterized by roofs, jugs, traverses, big air, and sometimes "sporty" pro. The Gunks is famous for great one-to-three-pitch climbs of all levels of difficulty. You\'ll find some of the best easy and moderate trad climbs in the country at the Gunks. There are a few bolted climbs at the Gunks, but no sport climbs.')
a6 = Area.new(lat: 43.938, lng: -74.378, name: "Adirondacks", getting_there: "Traveling from the east, there are several ways, all of which offer similar travel time, that get you there. The Charlotte, VT Ferry, The Burlington, VT Ferry, and the Grand Isle, VT Ferry all drop you off along the eastern precipice of the Adirondacks. Once across Lake Champlain, find your way to Route 73, the central corridor through the Park proper.", description: 'The Dacks. An untamed tract of public and private land spanning a topography larger than Vermont. The Park is preserved by legislation from 1885 declaring that the lands of the preserve "be forever kept as wild forest lands." That statement by the Forest Preserve was the formal beginning of what has now become a 6,000,000 acre wilderness--the largest state park in the lower 48. ')
a7 = Area.new(lat: 37.784, lng: -83.682, name: "Red River Gorge", getting_there: "From Lexington, Kentucky take I-64 east about 15 miles to the exit for the Bert T. Combs Mountain Parkway, just past the second Winchester exit. Follow the parkway for 33 miles to the KY 11 exit (exit 33). Miguel's Pizza, the unofficial headquarters for climbing at the Red, is about two miles south on KY 11. Continue south for crags in the southern region, or north on KY 11 for northern region crags.", description: "With its central location in Kentucky and its huge volume of routes, the Red River Gorge is one of the most popular climbing meccas east of the Mississippi. Spread out through a wide expanse of national forest land and privately-owned acreage, the Red's sandstone cliffs offer a lifetime of climbing opportunities at all levels.")

a1.parent_id = vermont.id
a2.parent_id = west_virginia.id
a3.parent_id = west_virginia.id
a4.parent_id = west_virginia.id
a5.parent_id = new_york.id
a6.parent_id = new_york.id
a7.parent_id = kentucky.id

a1.save!
a2.save!
a3.save!
a4.save!
a5.save!
a6.save!
a7.save!

# Routes
r1 = Route.new(pitches: 1, difficulty: "V3", route_type: "Boulder", name: "Cat Rock", elevation: 15, protection: "Has a rough landing.", description: "Cat Rock is located immediately north of the Wollman Skating Rink at the very south end of Central Park, just a short walk from Rat Rock.  Follow paths east from Rat Rock, walking under or over Center Drive.  Cat Rock is the obvious south-facing rock wall.")
r2 = Route.new(pitches: 1, difficulty: "V0", route_type: "Boulder", name: "The Arete", elevation: 25, protection: "Despite being modest in height, it can feel intimidating, especially near the top.  However, good holds are to be found for the exit moves.", description: "Up the left side of the arete to the top.  (If you start on the right side, make an initial hard move to gain the left side of the arete.)")

r1.area_id = new_york.id
r2.area_id = new_york.id
r1.shared_by = u1.id
r2.shared_by = u1.id

r1.save!
r2.save!
