/* blog-details.js — Dynamic blog article rendering (single details page for all posts) */
(function () {
  'use strict';

  var BLOG_POSTS = [
    {
      id: 'football-tactics',
      title: '10 Football Tactics Every Amateur Team Must Know in 2026',
      excerpt: 'From high-press formations to counter-attack strategies — these tactical frameworks have transformed amateur football teams from regional underdogs to local champions.',
      category: 'Football',
      icon: 'football',
      featured: true,
      date: 'August 15, 2026',
      readTime: '12 min read',
      views: '2,431 views',
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1200&q=80',
      imageAlt: 'Football team tactical discussion on the pitch',
      author: {
        initials: 'RK',
        name: 'Raj Kumar',
        role: 'CEO & Sports Strategist',
        gradient: 'linear-gradient(135deg,var(--electric-lime),var(--stadium-green))',
        color: 'var(--midnight-navy)',
        bio: 'Raj has played football at the state level and has been coaching amateur teams for 8 years. His tactical analysis pieces have been read by over 50,000 athletes across India.'
      },
      tags: ['Football', 'Tactics', 'Amateur Football', 'Coaching', 'Strategy', '5-a-side'],
      cta: { icon: 'football', text: 'Book a premium football turf and put these tactics into practice!' },
      related: ['chennai-turfs', 'pre-match-nutrition', 'badminton-footwork'],
      comments: [
        { name: 'Arjun R.', initials: 'AR', gradient: 'linear-gradient(135deg,var(--electric-lime),#8aaa1a)', color: 'var(--midnight-navy)', time: '2 days ago', rating: 5, text: 'Excellent breakdown! We implemented the high press last Saturday and won 3-1. The key insight about pressing in groups, not individually, was a game changer.' },
        { name: 'Kavitha S.', initials: 'KS', gradient: 'linear-gradient(135deg,var(--stadium-green),#0d5a3e)', color: 'white', time: '1 day ago', rating: 5, text: 'The section on set-pieces is gold. We\'ve been neglecting this aspect completely. Going to dedicate our next training session to set-piece routines.' },
        { name: 'Mithun P.', initials: 'MP', gradient: 'linear-gradient(135deg,#3B82F6,#1D4ED8)', color: 'white', time: '5 hours ago', rating: 5, text: 'Great article! One addition — in humid Chennai weather, energy management (point 10) is even more critical. We rotate our pressing intensity every 15 minutes.' }
      ],
      content: `<p>In the rapidly evolving landscape of amateur football, the gap between organized tactical thinking and raw athletic talent is narrowing. Teams that once relied solely on individual brilliance are now discovering that structured tactical frameworks can level the playing field — even against more physically gifted opponents.</p>
<div class="article-highlight">"Tactics without talent can beat talent without tactics. Every game is won twice — first on the tactics board, then on the pitch."</div>
<h2>1. The High Press (Gegenpressing)</h2>
<p>Popularized by Jurgen Klopp at Liverpool, the high press involves immediately pressing the opposition after losing the ball, typically within 5-6 seconds. For amateur teams, this requires exceptional fitness and organized communication but can yield devastating results in the final third.</p>
<ul><li>Trigger the press when the opponent receives the ball with their back to goal</li><li>Press in groups of 2-3, never individually</li><li>Maintain compactness — gaps behind the press can be exploited</li></ul>
<h2>2. Counter-Attack (Direct Transition)</h2>
<p>When your team has less technical quality but superior pace, counter-attacking is your best tactical weapon. The key is winning the ball deep and transitioning to attack within 3-4 passes before the opposition reorganizes.</p>
<h2>3. Compact 4-4-2 Defensive Block</h2>
<p>The classic 4-4-2 remains the most reliable defensive structure for amateur football. By maintaining two tight lines of four, you reduce space in central areas where most attacks originate.</p>
<h2>4. Overloading Wide Areas</h2>
<p>Most amateur teams are vulnerable in wide defensive positions. Create 2v1 situations on the wings by positioning your full-backs high and using your widest midfielder to combine.</p>
<h2>5. False Nine Movement</h2>
<p>Rather than a traditional center-forward, use a technically gifted player who drops deep to receive and combine, pulling center-backs out of position and creating space for overlapping midfielders.</p>
<div class="article-highlight">Amateur football is won in the spaces between organized positions. Understanding when to press and when to hold your shape separates good teams from great ones.</div>
<h2>6. Set-Piece Organization</h2>
<p>Up to 30% of goals in amateur football come from set-pieces. Investing 15 minutes per training session on corner routines, free-kick variations, and defensive set-piece organization pays enormous dividends.</p>
<h2>7. Pressing Triggers &amp; Release</h2>
<p>Define clear triggers for when to press (e.g., back pass to goalkeeper, long ball situation) and when to release the press and reorganize. Undisciplined pressing creates dangerous transitions against you.</p>
<h2>8. Building from the Back</h2>
<p>Train your goalkeeper and center-backs to play out confidently under pressure. Teams that can build from the back maintain possession longer and control game tempo more effectively.</p>
<h2>9. Half-Space Exploitation</h2>
<p>The "half-spaces" — areas between the wide and central channels — are the most dangerous in football. Position your number 8s and 10s to attack these zones consistently.</p>
<h2>10. Energy Management &amp; Substitution Strategy</h2>
<p>Tactical substitutions can completely change a game's trajectory. Have pre-planned substitution scenarios: leading 1-0 with 20 minutes left? Bring on a defensive midfielder. Chasing the game? Switch to 3-4-3.</p>`
    },
    {
      id: 'batting-drills',
      title: '5 Batting Drills to Improve Your Strike Rate Before Your Next Match',
      excerpt: 'Focused training sessions that build muscle memory and reaction time for batsmen at every level.',
      category: 'Cricket',
      icon: 'cricket',
      featured: false,
      date: 'August 12, 2026',
      readTime: '8 min read',
      views: '1,845 views',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80',
      imageAlt: 'Cricket batsman practising batting drills at the nets',
      author: {
        initials: 'VK',
        name: 'Vikram K.',
        role: 'Cricket Analyst & Former Ranji Player',
        gradient: 'linear-gradient(135deg,var(--stadium-green),#0D4F3A)',
        color: 'white',
        bio: 'Vikram played Ranji Trophy cricket for 6 seasons before moving into coaching and analysis. He has worked with 200+ amateur batsmen across Chennai and Bangalore on strike-rate improvement.'
      },
      tags: ['Cricket', 'Batting', 'Drills', 'Nets', 'Strike Rate'],
      cta: { icon: 'cricket', text: 'Book a premium cricket ground and put these drills into practice!' },
      related: ['reading-cricket-pitch', 'pre-match-nutrition', 'football-tactics'],
      comments: [
        { name: 'Suresh K.', initials: 'SK', gradient: 'linear-gradient(135deg,#22C55E,#15803D)', color: 'white', time: '3 days ago', rating: 5, text: 'The Gate Drill completely changed my defence. Used to nick everything on the 5th stump line — now I leave or play it with a straight bat.' },
        { name: 'Divya M.', initials: 'DM', gradient: 'linear-gradient(135deg,#F472B6,#BE185D)', color: 'white', time: '1 day ago', rating: 4, text: 'Loved the pressure simulation drill. Practising with run targets in the nets feels completely different from free-flow batting.' }
      ],
      content: `<p>Strike rate is the currency of modern cricket. Whether you play weekend league matches or office tournaments, the difference between a match-winner and a passenger is often built in the nets — not on match day. These five drills target the specific skills that translate directly into faster scoring.</p>
<div class="article-highlight">"Your strike rate is a habit, not a talent. Drill it daily and it becomes your identity at the crease."</div>
<h2>1. The Gate Drill</h2>
<p>Place two cones just outside off stump, wide enough for the ball to pass through. Your aim is to only play shots through the gate. This enforces a tight bat path, eliminates the gap between bat and pad, and stops the repeat nick to the keeper.</p>
<ul><li>Start with throwdowns, then move to a bowling machine</li><li>20 balls per set, 3 sets — focus on crisp contact, not power</li><li>Only play if the ball is genuinely through the gate</li></ul>
<h2>2. Front-Foot Power Hitting</h2>
<p>Set a target 20-30 metres straight down the ground. Step forward decisively and drive with a full base — front knee bent, head still, high elbow. This drill builds the muscle memory for clearing the infield against both pace and spin.</p>
<h2>3. The Throwdown Pyramid</h2>
<p>Throwdowns come at varied lengths, angles, and speeds in a fixed pattern you memorize. As you progress, the pattern becomes random. This trains reaction time and shot selection under pressure, the two attributes that decide your strike rate against quick bowlers.</p>
<h2>4. Pressure Simulation</h2>
<p>Net sessions with consequences. Bat for 6 overs against 3 bowlers with a run target, and lose a strike for every dot ball in the final over. Amateur batsmen routinely add 15-20 runs to their match scores after 4 weeks of pressure simulation.</p>
<h2>5. Video Analysis Loop</h2>
<p>Record 10 minutes of your nets every week. Review your head position at contact, backlift direction, and where you lose balance. Most amateur batsmen discover their biggest leak — usually the same dismissal — within two sessions of honest review.</p>
<div class="article-highlight">The nets are where matches are won. Twenty focused minutes of these drills beat two hours of aimless batting every single week.</div>`
    },
    {
      id: 'badminton-footwork',
      title: 'Mastering Footwork: The Secret to Winning Badminton Rallies',
      excerpt: 'Footwork is 70% of badminton. Here\'s a complete guide with drills to transform your court coverage.',
      category: 'Badminton',
      icon: 'badminton',
      featured: false,
      date: 'August 10, 2026',
      readTime: '6 min read',
      views: '1,234 views',
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=1200&q=80',
      imageAlt: 'Badminton player practising footwork on court',
      author: {
        initials: 'AP',
        name: 'Ananya P.',
        role: 'Badminton Coach & National-Level Player',
        gradient: 'linear-gradient(135deg,#3B82F6,#1D4ED8)',
        color: 'white',
        bio: 'Ananya is a national-level badminton player and a certified coach with 9 years of experience. She has trained over 500 junior and amateur players in Chennai on movement and court coverage.'
      },
      tags: ['Badminton', 'Footwork', 'Drills', 'Court Coverage', 'Singles'],
      cta: { icon: 'badminton', text: 'Book an air-conditioned badminton court and practise these footwork drills!' },
      related: ['pre-match-nutrition', 'football-tactics', 'chennai-turfs'],
      comments: [
        { name: 'Rahul V.', initials: 'RV', gradient: 'linear-gradient(135deg,#8B5CF6,#6D28D9)', color: 'white', time: '2 days ago', rating: 5, text: 'The split step timing tip fixed my recovery completely. I was landing late on every return — now the rallies last twice as long.' },
        { name: 'Neha S.', initials: 'NS', gradient: 'linear-gradient(135deg,#EC4899,#BE185D)', color: 'white', time: '6 hours ago', rating: 5, text: 'Shadow drills are so underrated. Did the corner-pattern routine for a week and my court coverage feels effortless now.' }
      ],
      content: `<p>Badminton is often called the fastest racket sport in the world, and the secret to keeping up is not in your racket — it's in your feet. Elite players win points with movement, not power. Here is a complete footwork framework that works for players of every level.</p>
<div class="article-highlight">"In badminton, the shuttle doesn't beat you. Late movement does. Fix your feet and everything else follows."</div>
<h2>1. The Split Step</h2>
<p>The split step is a small hop you take the moment your opponent strikes the shuttle. It primes your legs to push off in any direction. Time it with their racket contact — not before, not after — and you will arrive at the shuttle one full stride earlier.</p>
<ul><li>Keep your weight on the balls of your feet between shots</li><li>The hop should be tiny — barely leaving the ground</li><li>Land with knees bent, ready to push off</li></ul>
<h2>2. Base Position &amp; Recovery</h2>
<p>After every shot, return to your base — the centre of your half-court. The common amateur mistake is watching your shot land instead of recovering. Train yourself to recover on the shuttle's flight, not after it lands.</p>
<h2>3. Shadow Drills</h2>
<p>Shadow footwork means moving through shot patterns without a shuttle. The classic six-corner pattern (four corners plus two mid-court spots) builds the exact steps you use in a rally. Two rounds a day beats an hour of unstructured rallying.</p>
<h2>4. The Lunge &amp; Push-Off</h2>
<p>The lunge is your reach weapon at the front and sides of the court. Step with the racket foot, keep the back foot grounded for balance, and push off hard to recover. Practise lunges until they feel like a bounce, not a squat.</p>
<h2>5. Court-Coverage Patterns</h2>
<p>Play sets against a wall or a partner using only three corners — forcing yourself into repeat movement. Singles players should also drill the "base-to-net-to-base" pattern, the highest-scoring movement in the sport.</p>
<div class="article-highlight">Footwork is the one skill you can train without a partner. Twenty minutes of deliberate movement practice will add more points to your game than a month of rally practice.</div>`
    },
    {
      id: 'pre-match-nutrition',
      title: 'The Ultimate Pre-Match Nutrition Guide for Team Sports Athletes',
      excerpt: 'What you eat 2 hours before your game can make or break your performance. Science-backed nutrition plan.',
      category: 'Fitness',
      icon: 'fitness',
      featured: false,
      date: 'August 8, 2026',
      readTime: '10 min read',
      views: '1,812 views',
      image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=1200&q=80',
      imageAlt: 'Healthy pre-match meal with balanced nutrition for athletes',
      author: {
        initials: 'DR',
        name: 'Dr. Ravi',
        role: 'Sports Nutritionist',
        gradient: 'linear-gradient(135deg,#F59E0B,#D97706)',
        color: 'white',
        bio: 'Dr. Ravi is a certified sports nutritionist who has advised state-level teams and 1,000+ amateur athletes on match-day nutrition and recovery plans.'
      },
      tags: ['Nutrition', 'Fitness', 'Pre-Match', 'Hydration', 'Recovery'],
      cta: { icon: 'fitness', text: 'Book a turf near you and put the right fuel in your tank before your next game!' },
      related: ['football-tactics', 'badminton-footwork', 'team-cohesion'],
      comments: [
        { name: 'Arun T.', initials: 'AT', gradient: 'linear-gradient(135deg,#22C55E,#15803D)', color: 'white', time: '4 days ago', rating: 5, text: 'Followed the 3-hour rule before our weekend match and felt the difference in the last 15 minutes. No more energy crashes.' },
        { name: 'Lakshmi R.', initials: 'LR', gradient: 'linear-gradient(135deg,#F472B6,#BE185D)', color: 'white', time: '1 day ago', rating: 4, text: 'Great guide, wish there was a breakfast plan too. The hydration strategy alone was worth the read.' }
      ],
      content: `<p>You can train for months, but a match can still be decided in the 2 hours before kick-off — at the dinner table. What you eat and drink before a game directly controls your energy, focus, and recovery. This science-backed plan is built for team sport athletes playing evening and weekend matches.</p>
<div class="article-highlight">"A match is won in the first hour by preparation, and in the last 15 minutes by fuel. Both start the night before."</div>
<h2>1. The 3-Hour Rule</h2>
<p>Finish your main pre-match meal 3 hours before warm-up. This gives your stomach time to empty while keeping blood sugar steady. Eating closer to kick-off diverts blood to digestion — exactly where your muscles need it least.</p>
<ul><li>Large, balanced meal: 3 hours before</li><li>Light snack (banana, toast with jam): 60-90 minutes before</li><li>Nothing heavy in the final hour</li></ul>
<h2>2. Carbs: Your Fuel</h2>
<p>Your muscles run on glycogen, and glycogen comes from carbohydrates. Load up on rice, chapati, pasta, or oats in the 24 hours before a match. For a 90-minute game, aim for 1-2g of carbs per kg of body weight at your pre-match meal.</p>
<h2>3. Protein Timing</h2>
<p>Protein isn't for pre-match energy — it's for post-match repair. A moderate portion (chicken, dal, paneer, or eggs) at your 3-hour meal is enough. Save the heavy protein for within 45 minutes after the final whistle.</p>
<h2>4. Hydration Strategy</h2>
<p>Start sipping water 2 hours before warm-up and aim for 500ml in the hour before play. In humid conditions, add an electrolyte drink to your bag for half-time. By the time you feel thirsty on the pitch, you are already 2% dehydrated — enough to drop reaction speed.</p>
<h2>5. What to Avoid</h2>
<p>Skip fried foods, heavy curries, sugary energy drinks, and alcohol in the 24 hours before play. They spike insulin, slow digestion, and dehydrate you. Caffeine is fine — a single coffee 60 minutes before kick-off can sharpen focus without the crash.</p>
<div class="article-highlight">Match-day nutrition is boring on purpose. Familiar foods, proven timing, steady hydration — that's the entire winning formula.</div>`
    },
    {
      id: 'chennai-turfs',
      title: 'Top 10 Football Turfs in Chennai You Need to Book This Weekend',
      excerpt: 'Our curated list of the best-rated football turfs across Chennai — reviewed by 1,000+ players.',
      category: 'Venues',
      icon: 'stadium',
      featured: false,
      date: 'August 5, 2026',
      readTime: '5 min read',
      views: '2,431 views',
      image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1200&q=80',
      imageAlt: 'Floodlit football turf in Chennai at night',
      author: {
        initials: 'RK',
        name: 'Raj Kumar',
        role: 'CEO & Sports Strategist',
        gradient: 'linear-gradient(135deg,var(--electric-lime),var(--stadium-green))',
        color: 'var(--midnight-navy)',
        bio: 'Raj has played football at the state level and has been coaching amateur teams for 8 years. His venue reviews have been read by over 50,000 athletes across India.'
      },
      tags: ['Venues', 'Football', 'Chennai', 'Turf Booking', 'Weekend'],
      cta: { icon: 'stadium', text: 'Browse Chennai\'s best-rated football turfs and book your weekend slot now!' },
      related: ['football-tactics', 'pre-match-nutrition', 'team-cohesion'],
      comments: [
        { name: 'Karthik J.', initials: 'KJ', gradient: 'linear-gradient(135deg,#22C55E,#15803D)', color: 'white', time: '2 days ago', rating: 5, text: 'Booked the Anna Nagar turf from this list — exactly as described. Floodlights, clean changing rooms, and the booking took 30 seconds.' },
        { name: 'Farhan A.', initials: 'FA', gradient: 'linear-gradient(135deg,#3B82F6,#1D4ED8)', color: 'white', time: '12 hours ago', rating: 5, text: 'The OMR night slots are amazing. Started a weekly 5-a-side group with my office team — best decision of the season.' }
      ],
      content: `<p>Chennai's football scene has exploded over the past two years, and so has the number of turfs. With so many options, picking the right one for your group can be overwhelming. We reviewed 1,000+ player ratings to bring you the turfs that consistently deliver.</p>
<div class="article-highlight">"A great turf is 10% astroturf and 90% everything else — lights, changing rooms, parking, and a booking system that works."</div>
<h2>1. Anna Nagar — The Urban Classic</h2>
<p>The most consistent turf in the city. FIFA-approved surface, powerful floodlights, and ample parking make it the default choice for serious weekly groups. Weekend slots fill up by Wednesday — book early.</p>
<h2>2. OMR Corridor — Late-Night Football</h2>
<p>Perfect for IT professionals. Multiple turfs along OMR stay open past 11 PM, and most offer 5-a-side and 7-a-side configurations. Night rates are competitive and the surface quality is excellent.</p>
<h2>3. T. Nagar — Roofed Turfs</h2>
<p>Chennai's heat doesn't take breaks, and neither should your game. The roofed turfs in T. Nagar let you play in the afternoon sun comfortably. Ideal for weekend daytime matches with family groups.</p>
<h2>4. Velachery — The Budget Pick</h2>
<p>Well-maintained turfs at the city's most affordable rates. Slightly smaller playing area, but perfect for casual kickabouts and beginner groups. Early morning slots here are a hidden gem.</p>
<h2>5. What to Check Before Booking</h2>
<p>Before you confirm any turf: verify the surface age (newer surfaces feel softer and safer), confirm floodlights are included in the price, check changing room availability, and read recent reviews for crowd behaviour. The SportifyTurf booking page shows all of this upfront.</p>
<div class="article-highlight">The best turf is the one you can book reliably, reach easily, and play on safely — every single weekend.</div>`
    },
    {
      id: 'reading-cricket-pitch',
      title: 'How to Read a Cricket Pitch: A Guide for Amateur Captains',
      excerpt: 'Pitch reading is an art. Learn to identify pitch conditions and adjust your team selection accordingly.',
      category: 'Cricket',
      icon: 'cricket',
      featured: false,
      date: 'August 2, 2026',
      readTime: '7 min read',
      views: '1,102 views',
      image: 'https://images.unsplash.com/photo-1714425340532-bf62553cb288?w=1200&q=80',
      imageAlt: 'Cricket pitch with bowler preparing to bowl',
      author: {
        initials: 'MS',
        name: 'Murali S.',
        role: 'Cricket Captain & Pitch Specialist',
        gradient: 'linear-gradient(135deg,#8B5CF6,#6D28D9)',
        color: 'white',
        bio: 'Murali has captained amateur teams for 12 years and studies pitch behaviour professionally. He consults for clubs across Tamil Nadu on team selection and match strategy.'
      },
      tags: ['Cricket', 'Pitch', 'Captaincy', 'Team Selection', 'Strategy'],
      cta: { icon: 'cricket', text: 'Book a well-maintained cricket ground and test your pitch-reading skills!' },
      related: ['batting-drills', 'football-tactics', 'pre-match-nutrition'],
      comments: [
        { name: 'Venkat G.', initials: 'VG', gradient: 'linear-gradient(135deg,#22C55E,#15803D)', color: 'white', time: '3 days ago', rating: 5, text: 'The footmarks section saved our weekend match. Identified the dry, cracked pitch and picked three spinners — won by 40 runs.' },
        { name: 'Ramesh B.', initials: 'RB', gradient: 'linear-gradient(135deg,#F59E0B,#D97706)', color: 'white', time: '1 day ago', rating: 4, text: 'Wish there were photos of each pitch type, but the descriptions are accurate enough to spot the signs at your local ground.' }
      ],
      content: `<p>At the toss, a captain has one question to answer: what kind of pitch are we playing on? Get it right and you win the toss twice over. Get it wrong and your best XI plays the wrong game. Here is how amateur captains can read a pitch in 5 minutes.</p>
<div class="article-highlight">"The pitch tells you what to do at the toss. Most captains fail to listen because they decide before they look."</div>
<h2>1. Dry, Cracked, and Bare</h2>
<p>A pitch with visible cracks and loose surface promises turn and variable bounce from day one. Bat first, load your side with spinners, and keep two seamers for the uneven patches. Batsmen must defend late and score square of the wicket.</p>
<h2>2. Green Tops</h2>
<p>Live grass means seam movement and swing in the first session. Bowl first and pick your fastest bowlers — the ball will do the talking. Batting gets easier as the grass wears, so the toss decision here is simple.</p>
<ul><li>Pick an extra seamer, drop a spinner</li><li>Tell batsmen to play close to the body early</li><li>Set aggressive catching fields for edges</li></ul>
<h2>3. Dusty &amp; Crumbling</h2>
<p>This is the spin minefield. The surface will break up within 15 overs, producing sharp turn and occasional shooters. Bat first, bowl spinners from both ends, and squeeze the scoring rate through mid-overs.</p>
<h2>4. Worn Footmarks</h2>
<p>Look for worn patches at both ends — the bowlers' follow-through areas. Even on a flat deck, footmarks create the classic rough that gives left-arm spinners and off-spinners extra purchase late in the innings.</p>
<h2>5. Adjusting Your Team Selection</h2>
<p>Your bench matters as much as your pitch read. Carry one extra spinner and one extra seamer to every game. The team that adapts its XI to the surface wins more often than the team with the best players.</p>
<div class="article-highlight">Read the pitch at the toss, adjust at the team meeting, and win at the death. That's the captain's complete checklist.</div>`
    },
    {
      id: 'team-cohesion',
      title: 'Building Team Cohesion: Why Sports Outings Transform Workplace Teams',
      excerpt: 'Corporate sports bookings are rising 40% year-on-year. Here\'s the science behind sports and team building.',
      category: 'Team Sports',
      icon: 'users',
      featured: false,
      date: 'July 28, 2026',
      readTime: '9 min read',
      views: '968 views',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&q=80',
      imageAlt: 'Corporate team playing sports together for team building',
      author: {
        initials: 'PN',
        name: 'Priya N.',
        role: 'HR Strategist & Sports Enthusiast',
        gradient: 'linear-gradient(135deg,#EC4899,#BE185D)',
        color: 'white',
        bio: 'Priya designs team-building programmes for startups and enterprises across India. Her work combines sports science with HR research to build high-trust teams.'
      },
      tags: ['Team Building', 'Corporate', 'Sports', 'Workplace', 'Cohesion'],
      cta: { icon: 'users', text: 'Book a group package and turn your team outing into a winning tradition!' },
      related: ['football-tactics', 'pre-match-nutrition', 'chennai-turfs'],
      comments: [
        { name: 'Nithya C.', initials: 'NC', gradient: 'linear-gradient(135deg,#8B5CF6,#6D28D9)', color: 'white', time: '5 days ago', rating: 5, text: 'We ran this for our office team last month. The mixed-team rule got people talking to colleagues they never speak to. Booking again next quarter!' },
        { name: 'Imran S.', initials: 'IS', gradient: 'linear-gradient(135deg,#22C55E,#15803D)', color: 'white', time: '2 days ago', rating: 5, text: 'The post-game debrief template is gold. Our team\'s retro after the match was the most honest meeting we have had all year.' }
      ],
      content: `<p>Corporate sports bookings have risen 40% year-on-year, and for good reason. Games do something workshops can't: they reveal how people behave under pressure, reward collaboration, and create shared stories. Here's how to turn a sports outing into genuine team cohesion.</p>
<div class="article-highlight">"You learn more about a colleague in one game of football than in a year of meetings."</div>
<h2>1. The Science of Shared Wins</h2>
<p>Shared success releases oxytocin — the bonding hormone. Teams that win together once trust each other measurably more in the following month. The goal isn't the trophy; it's the shared story of how you got it.</p>
<h2>2. Structured Formats Beat Free Play</h2>
<p>Free-form kickabouts create cliques. Structured formats — 5-a-side tournaments, round-robin matches, time-capped games — force everyone to participate and give quieter employees a clear role. Structure is what turns a crowd into a team.</p>
<h2>3. Mix Teams Deliberately</h2>
<p>Split departments across teams. Put the designer with the accountant, the manager with the intern. Deliberate mixing breaks down the silos that office seating plans accidentally build.</p>
<ul><li>Draw team names from a hat — no self-selection</li><li>Rotate captains every match</li><li>Balance skill levels so every game is competitive</li></ul>
<h2>4. The Post-Game Debrief</h2>
<p>Spend 15 minutes after the game on a structured debrief: one highlight, one lowlight, one thing you'd do differently. This mirrors the team's work retro and builds the honest-communication muscle that carries into Monday.</p>
<h2>5. Making It a Habit</h2>
<p>One outing a year builds memories; a monthly slot builds a culture. Teams that play monthly report higher morale, lower attrition, and better cross-team collaboration — measurable within two quarters.</p>
<div class="article-highlight">Cohesion isn't built in one grand event. It's built in the habit of showing up, playing fair, and celebrating together — month after month.</div>`
    }
  ];

  function getPost(id) {
    for (var i = 0; i < BLOG_POSTS.length; i++) {
      if (BLOG_POSTS[i].id === id) return BLOG_POSTS[i];
    }
    return BLOG_POSTS[0];
  }

  function getRelated(post) {
    var related = [];
    for (var i = 0; i < post.related.length; i++) {
      related.push(getPost(post.related[i]));
    }
    return related;
  }

  function buildStars(rating) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
      stars += '<svg class="icon-star" viewBox="0 0 24 24" fill="currentColor"' + (i < rating ? '' : ' style="opacity:0.25"') + '><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    }
    return stars;
  }

  function buildComments(post) {
    var html = '';
    for (var i = 0; i < post.comments.length; i++) {
      var c = post.comments[i];
      html += '<div class="comment-item reveal' + (i > 0 ? ' delay-' + (i * 100) : '') + '">' +
        '<div class="avatar avatar-lg" style="background:' + c.gradient + ';color:' + c.color + ';font-weight:900;flex-shrink:0;font-size:14px">' + c.initials + '</div>' +
        '<div style="flex:1">' +
          '<div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-2)">' +
            '<strong style="font-size:var(--text-sm)">' + c.name + '</strong>' +
            '<span style="font-size:var(--text-xs);color:var(--text-muted)">' + c.time + '</span>' +
            '<div class="stars-vector" style="margin-left:auto">' + buildStars(c.rating) + '</div>' +
          '</div>' +
          '<p style="font-size:var(--text-sm);color:var(--text-secondary);line-height:var(--lh-relaxed);margin-bottom:var(--space-3)">' + c.text + '</p>' +
          '<button class="btn btn-secondary btn-sm" onclick="window.SportifyApp.showToast(\'Reply posted!\',\'success\')">\u21A9 Reply</button>' +
        '</div>' +
      '</div>';
    }
    return html;
  }

  function buildRelated(post) {
    var html = '';
    var related = getRelated(post);
    for (var i = 0; i < related.length; i++) {
      var r = related[i];
      html += '<a href="blog-details.html?id=' + r.id + '" style="display:flex;gap:var(--space-3);align-items:flex-start;text-decoration:none">' +
        '<img src="' + r.image.replace('w=1200', 'w=200') + '" alt="' + r.title + '" style="width:60px;height:50px;object-fit:cover;border-radius:var(--radius-md);flex-shrink:0" loading="lazy">' +
        '<div style="font-size:var(--text-sm);font-weight:600;color:var(--text-primary);line-height:var(--lh-snug)">' + r.title + '</div>' +
      '</a>';
    }
    return html;
  }

  function buildTags(post) {
    var html = '';
    for (var i = 0; i < post.tags.length; i++) {
      html += '<a href="blog.html" class="chip" style="text-decoration:none">' + post.tags[i] + '</a>';
    }
    return html;
  }

  function render(post) {
    document.title = post.title + ' \u2014 SportifyTurf Blog';
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', post.excerpt);

    var el;
    if ((el = document.getElementById('breadcrumb-title'))) el.textContent = post.category + ' Articles';
    if ((el = document.getElementById('article-badges'))) {
      el.innerHTML =
        '<span class="badge badge-lime" style="display:inline-flex;align-items:center;gap:4px"><span data-icon="' + post.icon + '" data-icon-class="v-icon icon-xs"></span> ' + post.category + '</span>' +
        (post.featured ? '<span class="badge badge-navy" style="display:inline-flex;align-items:center;gap:4px"><span data-icon="zap" data-icon-class="v-icon icon-xs"></span> Featured</span>' : '');
    }
    if ((el = document.getElementById('article-heading'))) el.textContent = post.title;
    if ((el = document.getElementById('article-excerpt'))) el.textContent = post.excerpt;
    if ((el = document.getElementById('author-avatar'))) el.textContent = post.author.initials;
    if ((el = document.getElementById('author-name'))) el.textContent = post.author.name;
    if ((el = document.getElementById('author-role'))) el.textContent = post.author.role;
    if ((el = document.getElementById('article-date-text'))) el.textContent = post.date;
    if ((el = document.getElementById('article-read-time-text'))) el.textContent = post.readTime;
    if ((el = document.getElementById('article-views-text'))) el.textContent = post.views;
    if ((el = document.getElementById('article-hero-img'))) { el.src = post.image; el.alt = post.imageAlt; }
    if ((el = document.getElementById('article-body'))) el.innerHTML = post.content;
    if ((el = document.getElementById('author-card-avatar'))) el.textContent = post.author.initials;
    if ((el = document.getElementById('author-card-name'))) el.textContent = post.author.name;
    if ((el = document.getElementById('author-card-role'))) el.textContent = post.author.role;
    if ((el = document.getElementById('author-card-bio'))) el.textContent = post.author.bio;
    if ((el = document.getElementById('article-tags'))) el.innerHTML = buildTags(post);
    if ((el = document.getElementById('comments-heading'))) el.textContent = 'Comments (' + post.comments.length + ')';
    if ((el = document.getElementById('comments-list'))) el.innerHTML = buildComments(post);
    if ((el = document.getElementById('cta-widget'))) {
      el.innerHTML =
        '<div class="icon-circle icon-circle--lime" style="margin:0 auto var(--space-3);width:48px;height:48px"><span data-icon="' + post.cta.icon + '" data-icon-class="v-icon icon-md v-icon-navy"></span></div>' +
        '<h3 style="color:white;margin-bottom:var(--space-2)">Ready to Play?</h3>' +
        '<p style="color:rgba(255,255,255,0.75);font-size:var(--text-sm);margin-bottom:var(--space-4)">' + post.cta.text + '</p>' +
        '<a href="dashboard.html" class="btn btn-primary" style="width:100%;justify-content:center">Book Now \u2192</a>';
    }
    if ((el = document.getElementById('related-posts'))) el.innerHTML = buildRelated(post);

    if (window.SportifyIcons && typeof window.SportifyIcons.replaceIcons === 'function') {
      window.SportifyIcons.replaceIcons();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var id = params.get('id') || BLOG_POSTS[0].id;
    render(getPost(id));
  });
})();