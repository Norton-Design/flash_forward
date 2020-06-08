# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# DEVELOPMENT SEEDING
require 'open-uri'

RouteComment.destroy_all
RouteModerator.destroy_all
Route.destroy_all
Area.destroy_all
User.destroy_all

first_names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter", "Emily","Hannah","Madison","Ashley","Sarah","Alexis","Samantha","Jessica","Elizabeth","Taylor","Lauren","Alyssa"]
last_names = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"]

description_blocks = [
    "Etiam non quam lacus suspendisse faucibus interdum. Dictumst quisque sagittis purus sit. Elementum eu facilisis sed odio morbi quis commodo. Maecenas pharetra convallis posuere morbi leo urna. Etiam tempor orci eu lobortis elementum nibh tellus molestie. At auctor urna nunc id cursus metus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Quis lectus nulla at volutpat. Nec nam aliquam sem et tortor. Risus pretium quam vulputate dignissim suspendisse in est ante. Arcu non sodales neque sodales ut. Porta lorem mollis aliquam ut porttitor leo a. At quis risus sed vulputate odio ut enim blandit volutpat. Nisl nunc mi ipsum faucibus vitae aliquet nec. Ultrices dui sapien eget mi proin sed libero enim. Integer malesuada nunc vel risus commodo viverra. Non odio euismod lacinia at quis risus sed. Fames ac turpis egestas integer eget aliquet. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. \n \nSapien pellentesque habitant morbi tristique. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Quis eleifend quam adipiscing vitae proin. Mauris in aliquam sem fringilla ut morbi. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Sed faucibus turpis in eu. Sem fringilla ut morbi tincidunt augue. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Bibendum neque egestas congue quisque egestas diam in arcu. Donec massa sapien faucibus et molestie ac feugiat. Donec ultrices tincidunt arcu non sodales neque sodales. Risus feugiat in ante metus dictum at. Tortor aliquam nulla facilisi cras. Dui accumsan sit amet nulla facilisi morbi. Integer enim neque volutpat ac tincidunt vitae semper. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Eleifend donec pretium vulputate sapien nec.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Faucibus purus in massa tempor nec feugiat. Blandit turpis cursus in hac. Sit amet porttitor eget dolor morbi non arcu risus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Turpis egestas sed tempus urna. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Vestibulum sed arcu non odio euismod lacinia at. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed cras ornare arcu dui vivamus arcu felis. Turpis massa tincidunt dui ut ornare lectus sit. Id cursus metus aliquam eleifend mi in nulla posuere. Etiam tempor orci eu lobortis. Proin libero nunc consequat interdum varius sit amet mattis. \n \nDui sapien eget mi proin sed libero enim sed. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Eget felis eget nunc lobortis mattis aliquam. Mi eget mauris pharetra et. Quis risus sed vulputate odio ut. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Mollis nunc sed id semper risus. Arcu felis bibendum ut tristique. Orci sagittis eu volutpat odio facilisis mauris sit. Neque viverra justo nec ultrices. Amet nulla facilisi morbi tempus iaculis. Non enim praesent elementum facilisis leo. Massa enim nec dui nunc mattis enim ut. \n \nPlatea dictumst quisque sagittis purus. Lacus viverra vitae congue eu consequat ac felis donec. Sapien faucibus et molestie ac. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Tellus pellentesque eu tincidunt tortor aliquam. Gravida neque convallis a cras semper auctor neque vitae. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Quam quisque id diam vel quam elementum pulvinar etiam. Egestas sed tempus urna et pharetra pharetra massa. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vel pretium lectus quam id leo in vitae turpis.",
    "Ornare suspendisse sed nisi lacus sed viverra tellus in. Ultrices eros in cursus turpis massa. Pretium fusce id velit ut tortor pretium. Venenatis tellus in metus vulputate eu scelerisque felis. Vel risus commodo viverra maecenas accumsan. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ornare lectus sit amet est placerat in egestas. Libero id faucibus nisl tincidunt. Felis donec et odio pellentesque diam volutpat commodo. Placerat duis ultricies lacus sed turpis. Arcu vitae elementum curabitur vitae nunc sed. Massa enim nec dui nunc mattis enim ut tellus. Bibendum arcu vitae elementum curabitur vitae. Odio morbi quis commodo odio aenean sed. Sed faucibus turpis in eu mi. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Neque egestas congue quisque egestas diam in.",
    "Dolor sed viverra ipsum nunc aliquet bibendum. Proin nibh nisl condimentum id venenatis a condimentum vitae. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Tellus elementum sagittis vitae et leo duis ut diam quam. Mauris a diam maecenas sed enim ut. Aliquam nulla facilisi cras fermentum odio. Diam quam nulla porttitor massa id neque aliquam vestibulum. Lacus suspendisse faucibus interdum posuere lorem. Platea dictumst vestibulum rhoncus est. Posuere sollicitudin aliquam ultrices sagittis orci a. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Urna molestie at elementum eu facilisis. Id consectetur purus ut faucibus pulvinar. Dapibus ultrices in iaculis nunc sed augue. Ante metus dictum at tempor commodo ullamcorper a. Magna fermentum iaculis eu non diam phasellus vestibulum. Porta lorem mollis aliquam ut porttitor leo a. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. \n \nOrnare suspendisse sed nisi lacus sed viverra tellus in. Ultrices eros in cursus turpis massa. Pretium fusce id velit ut tortor pretium. Venenatis tellus in metus vulputate eu scelerisque felis. Vel risus commodo viverra maecenas accumsan. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ornare lectus sit amet est placerat in egestas. Libero id faucibus nisl tincidunt. Felis donec et odio pellentesque diam volutpat commodo. Placerat duis ultricies lacus sed turpis. Arcu vitae elementum curabitur vitae nunc sed. Massa enim nec dui nunc mattis enim ut tellus. Bibendum arcu vitae elementum curabitur vitae. Odio morbi quis commodo odio aenean sed. Sed faucibus turpis in eu mi. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Neque egestas congue quisque egestas diam in.",
    "Donec et odio pellentesque diam volutpat commodo. Mauris cursus mattis molestie a iaculis at erat pellentesque. Gravida neque convallis a cras semper auctor. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Scelerisque felis imperdiet proin fermentum leo. Vitae elementum curabitur vitae nunc. Quisque id diam vel quam elementum pulvinar. Lobortis mattis aliquam faucibus purus. Donec enim diam vulputate ut pharetra sit. Sed velit dignissim sodales ut eu. Vulputate enim nulla aliquet porttitor lacus luctus. Scelerisque felis imperdiet proin fermentum leo. Aenean pharetra magna ac placerat vestibulum. Eros donec ac odio tempor orci. Nullam eget felis eget nunc lobortis. Maecenas pharetra convallis posuere morbi leo urna molestie. \n \nNam at lectus urna duis convallis convallis. Eu augue ut lectus arcu bibendum. Integer quis auctor elit sed vulputate mi sit amet mauris. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Faucibus turpis in eu mi bibendum neque egestas congue. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Dolor purus non enim praesent elementum. Lectus urna duis convallis convallis tellus id interdum. Magnis dis parturient montes nascetur ridiculus mus mauris. In mollis nunc sed id semper risus in hendrerit gravida. Nibh sed pulvinar proin gravida hendrerit lectus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. \n \nAt quis risus sed vulputate odio ut enim. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Purus in massa tempor nec feugiat nisl. Cursus metus aliquam eleifend mi in. Lectus quam id leo in. Non curabitur gravida arcu ac tortor dignissim convallis. Nisl nisi scelerisque eu ultrices vitae. Nunc faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Justo donec enim diam vulputate. Sed faucibus turpis in eu mi bibendum neque egestas. Commodo elit at imperdiet dui accumsan. Scelerisque varius morbi enim nunc faucibus a pellentesque."
]

getting_there_blocks = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci porta. Ornare aenean euismod elementum nisi. Turpis egestas pretium aenean pharetra magna. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Rutrum quisque non tellus orci ac auctor augue. In arcu cursus euismod quis viverra nibh. Quis varius quam quisque id diam vel. Tellus orci ac auctor augue mauris augue neque gravida in. Phasellus faucibus scelerisque eleifend donec pretium. In nulla posuere sollicitudin aliquam. Turpis egestas sed tempus urna. Elit ut aliquam purus sit amet luctus venenatis lectus. Id neque aliquam vestibulum morbi blandit cursus risus at. Id aliquet risus feugiat in ante metus dictum at tempor. Nisl vel pretium lectus quam id. Risus ultricies tristique nulla aliquet enim tortor. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Dictum non consectetur a erat nam at lectus urna duis.",
    "Donec et odio pellentesque diam volutpat commodo. Mauris cursus mattis molestie a iaculis at erat pellentesque. Gravida neque convallis a cras semper auctor. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Scelerisque felis imperdiet proin fermentum leo. Vitae elementum curabitur vitae nunc. Quisque id diam vel quam elementum pulvinar. Lobortis mattis aliquam faucibus purus. Donec enim diam vulputate ut pharetra sit. Sed velit dignissim sodales ut eu. Vulputate enim nulla aliquet porttitor lacus luctus. Scelerisque felis imperdiet proin fermentum leo. Aenean pharetra magna ac placerat vestibulum. Eros donec ac odio tempor orci. Nullam eget felis eget nunc lobortis. Maecenas pharetra convallis posuere morbi leo urna molestie.",
    "Nam at lectus urna duis convallis convallis. Eu augue ut lectus arcu bibendum. Integer quis auctor elit sed vulputate mi sit amet mauris. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Faucibus turpis in eu mi bibendum neque egestas congue. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Dolor purus non enim praesent elementum. Lectus urna duis convallis convallis tellus id interdum. Magnis dis parturient montes nascetur ridiculus mus mauris. In mollis nunc sed id semper risus in hendrerit gravida. Nibh sed pulvinar proin gravida hendrerit lectus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.",
    "At quis risus sed vulputate odio ut enim. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Purus in massa tempor nec feugiat nisl. Cursus metus aliquam eleifend mi in. Lectus quam id leo in. Non curabitur gravida arcu ac tortor dignissim convallis. Nisl nisi scelerisque eu ultrices vitae. Nunc faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Justo donec enim diam vulputate. Sed faucibus turpis in eu mi bibendum neque egestas. Commodo elit at imperdiet dui accumsan. Scelerisque varius morbi enim nunc faucibus a pellentesque.",
    "Ornare suspendisse sed nisi lacus sed viverra tellus in. Ultrices eros in cursus turpis massa. Pretium fusce id velit ut tortor pretium. Venenatis tellus in metus vulputate eu scelerisque felis. Vel risus commodo viverra maecenas accumsan. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Ornare lectus sit amet est placerat in egestas. Libero id faucibus nisl tincidunt. Felis donec et odio pellentesque diam volutpat commodo. Placerat duis ultricies lacus sed turpis. Arcu vitae elementum curabitur vitae nunc sed. Massa enim nec dui nunc mattis enim ut tellus. Bibendum arcu vitae elementum curabitur vitae. Odio morbi quis commodo odio aenean sed. Sed faucibus turpis in eu mi. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Neque egestas congue quisque egestas diam in."
]

states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
route_names = ["Farewell to Arms", "Full Moon, Good Drugs", "Apes of Wrath", "Climb and Punishment", "Astro Dog", "Boogie til you Shit", "Finger of Fate", "Epinephrine", "Jumar of Flesh", "Pervertical Sanctuary", "The Zen and Art of Masturbation", "Ten Sleep", "The Dentist's Chair", "Summer of our Discount Tent", "Buster Cattlefield", "Bitch Muscle", "Billie Bear Cranks the Rad", "Blotter is my Spotter", "Dead Children's Glee Club", "Spotted Owl Sandwich", "Goats in the Machine", "Rookie Hook", "Crash Position", "The Professor Falls", "Armed dangerous and off my medication", "Wild Woman", "Full Monty", "Lick Tickel and a Spank", "Celibacy", "Science Friction", "The hardest climb in the world", 'Float Like a Butterfly, Land Like a Tomato', "You have been nothing but trouble", "Passport To Insanity", "Tomb of the Unknown", "Cophrolagia", "Drop, Fly, or Die", "Spanky's Quest", "Big Wall Greg's Chicken Shack", "To Bolt or Not to Be", "Fact or Friction", "All Chalk, No Action", "Night of the Climbing Dead", "Geologic time includes now", "Hardcore Thrash", "Crossing the Delaware With No Pants On", "The Official Route of the 1984 Olympics", "The Hardest 5.8 in the Rockies", "Offwidth Your Head", "Jesus Built My Tricam", "Cary Granite", "Cunning Stunt", "Belly Full of Bad Berries", "That 10d", "Dangerous Lesion", "Bottle in Front of Me", "Caught Inside on a Big Set", "Figures on a Landscape", "Boogers on a Lampshade", "Room to Shroom", "She Lives", "Bowels of the Owls", "Filibuster", "Smoke and Mirrors", "Pan Handling", "Unimpeachable Groping", "Magical Chrome Plated Semi-Automatic Syringe", "Butter my Butt and Call it a Biscuit", "The Boy Scout Leader Likes Me", "Senior citizens in outer space", "Lets get drunk and think about it", "I'm Pro Choss and I Bolt", "Thugged out Since Cub Scouts", "Ick! Theology! (I'd rather study cod.)", "Booby Trap", "Unsuspecting Remora", "Full Metal Jackfish", "Getting Lucky in Kentucky", "Tufa King Pumped", "Steep Climb Named Desire", "Beyond a Shadow of a Route", "The Boltzmann Constant", "Big G", "The Uncertainty Principle", "the Becky Route", "Doug Reed Route", "Hot Venom Injection Arete", "The Compactor on the Trash Can", "Tough Schist", "The Young and the Rackless", "The Vulgar Goatman", "Speed of Life", "The Jane Fonda Workout for Pregnant Women", "Hexentric", "They Died Laughing", "A Dare By The Sea", "No Mistake, Big Pancake", "Cranking Skills or Hospital Bills", "Finger Locks or Cedar Box", "Lactic Acid Bath", "Premarital bliss", "Freak Gasoline Fight Accident", "When in Doubt, Run it Out", "Make that move or six-foot groove", "Chocolate Doobie", "Casual Route", "Persistent Vegetative State", "Edge of Time", "Airation", "More Hustle Than Muscle", "Heart of Darkness, and Bearded cabbage", "Fote Hog", "A Bolt, A Bashie & A Bold Mantle", "Darshan - AKA Rip-off", "Jesus H Christ On a Bicycle", "The Sword of Damocles", "Static Cling", "Astrologger", "Malt Therapy", "Reelin' in the Fears", "Footsy Quence", "Slip o' Fools", "Way Radical", "Black Flies Consume Jim Dunn", "Stretched on Your Grave"]
boulder_grades = ["VB", "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"]
yds_grades = ["5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c", "5.14d", "5.15a", "5.15b", "5.15c", "5.15d"]
mixed_grades = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15"]
aid_grades = ['A1', 'A2', 'A3', 'A4', 'A5', 'C1', 'C2', 'C3', 'C4', 'C5']
protection_grades = ["G", "PG", "PG13", "R", "X"]
climbing_types = ["Boulder", "Aid", "Ice/Mixed", "Trad", "Sport"]

areaCollection = []

area_names = ["ADAK","ALAKANUK","ALATNA","ALCAN BORDER","ALENEVA","ALLAKAKET","ALPINE","AMBLER","ANAKTUVUK PASS","ANCHORAGE","ANCHOR POINT","ANDERSON","ANGOON","ANVIK","ARCTIC VILLAGE","ATTU STATION","BEAR CREEK","BEAVER","BETHEL","BETTLES","BIG DELTA","BIG LAKE","BIRCH CREEK","BUCKLAND","CANTWELL","CHASE","CHENEGA","CHIGNIK LAGOON","CHISANA","CLAM GULCH","CLARK'S POINT","COFFMAN COVE","COLD BAY","COOPER LANDING","COPPER CENTER","COPPERVILLE","CORDOVA","CROOKED CREEK","CROWN POINT","CUBE COVE","DEERING","DELTA JUNCTION","DIAMOND RIDGE","DOT LAKE","DRY CREEK","EAGLE VILLAGE","EDNA BAY","ELFIN COVE","EVANSVILLE","EXCURSION INLET","FAIRBANKS","FALSE PASS","FARM LOOP","FORT GREELY","FORT YUKON","FOX RIVER","FRITZ CREEK","FUNNY RIVER","GAME CREEK","GOODNEWS BAY","GRAYLING","GUSTAVUS","HALIBUT COVE","HARDING-BIRCH LAKES","HEALY LAKE","HOBART BAY","HOOPER BAY","IVANOF BAY","KENNY LAKE","KING COVE","KNIK RIVER","KODIAK STATION","LAKE LOUISE","LAKE MINCHUMINA","LARSEN BAY","LAZY MOUNTAIN","LIME VILLAGE","LOWELL POINT","LOWER KALSKAG","MCKINLEY PARK","MANLEY HOT SPRINGS","MEADOW LAKES","MILLER LANDING","MOOSE CREEK","MOOSE PASS","MOSQUITO LAKE","MOUNTAIN VILLAGE","MUD BAY","NELSON LAGOON","NORTHWAY JUNCTION","OLD HARBOR","OSCARVILLE","PETERSBURG","PETERSVILLE","PILOT POINT","PLEASANT VALLEY","POINT LAY","POINT MACKENZIE","POPE-VANNOY LANDING","PORTAGE CREEK","PORT ALEXANDER","PORT ALSWORTH","PORT CLARENCE","PORT GRAHAM","PORT HEIDEN","PORT LIONS","PRUDHOE BAY","RED DOG MINE","SCAMMON BAY","SELDOVIA VILLAGE","SILVER SPRINGS","STEVENS VILLAGE","STONY RIVER","THOMS PLACE","THORNE BAY","TRAPPER CREEK","TWIN HILLS","TWO RIVERS","WHALE PASS","WHITE MOUNTAIN","WHITESTONE LOGGING CAMP","WILLOW CREEK","WOMENS BAY",'MONTGOMERY','MONTROSE','MOOREFIELD','MORGANTOWN','MOUNDSVILLE','MOUNT GAY-SHAMROCK','MOUNT HOPE','MULLENS','NEWBURG','NEW CUMBERLAND','NEWELL','NEW HAVEN','NEW MARTINSVILLE','NITRO','NORTHFORK','NORTH HILLS','NUTTER FORT','OAK HILL','OAKVALE','OCEANA','PADEN CITY','PARKERSBURG','PARSONS','PAW PAW','PAX','PEA RIDGE','PENNSBORO','PETERSBURG','PETERSTOWN','PHILIPPI','PIEDMONT','PINCH','PINE GROVE','PINEVILLE','PINEY VIEW','PLEASANT VALLEY','POCA','POINT PLEASANT','POWELLTON','PRATT','PRINCETON','PROSPERITY','PULLMAN','QUINWOOD','RAINELLE','RAVENSWOOD','RED JACKET','REEDSVILLE','REEDY','RHODELL','RICHWOOD','RIDGELEY','RIPLEY','RIVESVILLE','ROMNEY','RONCEVERTE','ROWLESBURG','RUPERT','ST. ALBANS','ST. MARYS','SALEM','SAND FORK','SHADY SPRING','SHEPHERDSTOWN','SHINNSTON','SISSONVILLE','SISTERSVILLE','SMITHERS','SMITHFIELD','SOPHIA','SOUTH CHARLESTON','SPENCER','STANAFORD','STAR CITY','STONEWOOD','SUMMERSVILLE','SUTTON','SWITZER','SYLVESTER','TEAYS VALLEY','TERRA ALTA','THOMAS','THURMOND','TORNADO','TRIADELPHIA','TUNNELTON','UNION','VALLEY GROVE','VIENNA','WAR','WARDENSVILLE','WASHINGTON','WAYNE','WEIRTON','WELCH','WELLSBURG','WEST HAMLIN','WEST LIBERTY','WEST LOGAN','WEST MILFORD','WESTON','WESTOVER','WEST UNION','WHEELING','WHITEHALL','WHITE SULPHUR SPRINGS','WHITESVILLE','WILEY FORD','WILLIAMSON','WILLIAMSTOWN','WINDSOR HEIGHTS','WINFIELD','WOMELSDORF (COALTON)','WORTHINGTON']

lats = [34.155834, 42.933334, 42.095554, 38.846668, 41.392502, 27.192223, 31.442778, 40.560001, 33.193611, 41.676388]
lngs = [-86.250275, -90.590836, -119.735558, -88.015831, -122.313057, -76.566666, -91.948059, -80.064163, -79.997498, -83.383331]

# Users
demo_user = User.create!(email: "DemoUser@FlashForward.com", password: "testing", first_name: "Demo User", last_name: "Demo User")

mods = []
users = []
i = 0

255.times do
    email = SecureRandom.base64(4)
    user = User.create!(
        email: email, 
        password: "starwars", 
        first_name: first_names.sample, 
        last_name: last_names.sample
    )
    i += 1

    mods << user if i % 10 == 0
    users << user
end

states.each do |state|
    new_state = Area.create!(lat: lats.sample, lng: lngs.sample, name: state, description: description_blocks.sample)
    areaCollection << new_state
end

area_names.each do |area_name|
    new_area = Area.new(lat: lats.sample, lng: lngs.sample, name: area_name.titleize, description: description_blocks.sample, parent_id: areaCollection.sample.id, getting_there: getting_there_blocks.sample)
    new_area.save!
    areaCollection << new_area
end

route_names.each do |name|
    route_type = climbing_types.sample
    if route_type == "Boulder"
        pitches = 1
    else 
        pitches = rand(20)
    end

    if route_type == "Boulder"
        grade = boulder_grades.sample
    elsif route_type == "Aid"
        grade = aid_grades.sample
    elsif route_type == "Ice/Mixed"
        grade = mixed_grades.sample
    elsif route_type == "Trad"
        grade = yds_grades.sample
    elsif route_type == "Sport"
        grade = yds_grades.sample
    end

    area = areaCollection.sample
    until area.child_areas.length == 0
        area = areaCollection.sample
    end

    Route.create!(
        name: name.titleize, 
        route_type: route_type, 
        pitches: pitches, 
        difficulty: grade, 
        elevation: rand(10..500), 
        description: description_blocks.sample, 
        protection: getting_there_blocks.sample, 
        shared_by: mods.sample.id, 
        area_id: area.id
    )
end

def create_comments(route, users)
    comment_bodies = [
        "Sed semper nisi ac orci fringilla faucibus. Vestibulum sed nisi lacinia enim bibendum elementum et sed diam. Pellentesque non condimentum dolor. Nam est metus, pulvinar a nunc non, accumsan porttitor velit. Duis aliquet orci nisl, et congue odio sagittis ac. Sed et feugiat elit. Quisque suscipit aliquam neque, non molestie erat convallis ac. Vestibulum fermentum eros nec lacus convallis, quis sodales diam pulvinar. Nullam in pulvinar lectus. Sed eleifend urna sed nibh dapibus consequat.",
        "Integer in accumsan sapien. Suspendisse auctor ex ac metus hendrerit, sit amet rutrum nisl posuere. Fusce a leo leo. Praesent sagittis vel diam eu pellentesque. Praesent varius lorem augue, a hendrerit massa ullamcorper id. Integer quis bibendum quam. Fusce eget erat quis arcu mattis mattis",
        "Nunc placerat turpis in ultrices tristique. Nunc nunc orci, porta id tempor sit amet, pellentesque ut mauris. Donec tincidunt nibh vitae elit rhoncus, eget consectetur lorem luctus. Suspendisse potenti. In feugiat arcu volutpat mattis dignissim. Morbi ut erat et sapien ultrices iaculis. Suspendisse potenti. Suspendisse gravida odio vel ex sollicitudin, vel fermentum nisl mattis. Aenean mi massa, rhoncus in maximus eget, iaculis at sapien. Cras a mauris risus.",
        "In erat nibh, lacinia ac scelerisque et, volutpat a enim. Donec tristique tellus sed efficitur vehicula. Quisque odio erat, lobortis eu volutpat id, ultricies at massa. Praesent aliquam malesuada nibh eget accumsan. Vestibulum elementum justo lorem, sit amet lacinia justo hendrerit ac.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra, justo vitae feugiat faucibus, nibh nisl tempus enim, et congue elit dolor ac massa."
    ]
    comment_types = ['BETA', 'TEMP', 'ITEM']

    [3,4,5,6].sample.times do 
        comment = RouteComment.new(body: comment_bodies.sample, comment_type: comment_types.sample)
        comment.user_id = users.sample.id
        comment.route_id = route.id

        comment.save!
    end 
end

def attach_seed_photos(obj)
    photo_urls = [
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock1.jpg', 'rock1.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock2.jpg', 'rock2.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock3.jpg', 'rock3.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock4.jpg', 'rock4.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock5.jpg', 'rock5.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock6.jpg', 'rock6.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock7.jpg', 'rock7.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock8.jpg', 'rock8.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock9.jpg', 'rock9.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock10.jpg', 'rock10.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock11.jpg', 'rock11.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock12.jpg', 'rock12.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock13.jpg', 'rock13.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock14.jpg', 'rock14.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock15.jpg', 'rock15.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock16.jpg', 'rock16.jpg'],
        ['https://flash-forward-pro.s3.amazonaws.com/seeds/rock17.jpg', 'rock17.jpg']
    ]
    i = 0

    [3,4,5,6].sample.times do
        url = photo_urls.sample
        file = open(url)
        photo_urls.delete(url)

        obj.photos.attach(io: file, filename: `page_photo#{i}.jpg`)
        i += 1
    end
end

Route.all.each do |route|
    mod = RouteModerator.new(route_id: route.id, mod_id: mods.sample.id)
    mod.save!

    create_comments(route, users)
    attach_seed_photos(route)
end

areas = Area.all
  
def count_routes(area)
    return 0 if (area.routes.length == 0 && area.child_areas.length == 0)
    return area.routes.length if area.routes.length > 0

    counts = area.child_areas.map do |child_area|
      count_routes(child_area)
    end
    
    return counts.sum
end

areas.each do |area|
    new_route_count = count_routes(area)
    edit_area = Area.find(area.id)

    edit_area.update({route_count: new_route_count})
    attach_seed_photos(area)
end



