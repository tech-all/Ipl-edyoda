$(function () {

    const teams = [
        {
            id: "0",
            classlogo: "csklogo",
            teamname: "chennai super kings",
            classtext: "csktext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368389.cms",
            teamlogo: "https://www.eventstodayz.com/wp-content/uploads/2019/03/csk-hd-logo-2020.png"

        },
        {
            id: "1",
            teamname: "delhi capitals",
            classlogo: "delhilogo",
            classtext: "delhitext",
            teamurl: "https://timesofindia.indiatimes.com/photo/68405443.cms",
            teamlogo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"

        },
        {
            id: "2",
            teamname: "kolkata night riders",
            classlogo: "kolkatalogo",
            classtext: "kolkatatext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368434.cms",
            teamlogo: "https://i.pinimg.com/originals/24/ac/85/24ac856684a5edacdbe58914839c8215.png"

        },
        {
            id: "3",
            teamname: "punjab kings",
            classlogo: "punjablogo",
            classtext: "punjabtext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368442.cms",
            teamlogo: "https://sportstar.thehindu.com/cricket/article33860703.ece/ALTERNATES/LANDSCAPE_1200/17-Kingsjpg"

        },
        {
            id: "4",
            teamname: "mumbai indians",
            classlogo: "mumbailogo",
            classtext: "mumbaitext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368446.cms",
            teamlogo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"

        },
        {
            id: "5",
            teamname: "sunrisers hyderabad",
            classlogo: "sunriserslogo",
            classtext: "sunriserstext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368457.cms",
            teamlogo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"

        },
        {
            id: "6",
            teamname: "rajhastan royals",
            classlogo: "rajhastanlogo",
            classtext: "rajhastantext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368466.cms",
            teamlogo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png"

        },
        {
            id: "7",
            teamname: "royal challegers bengulur",
            classlogo: "bengulurlogo",
            classtext: "bengulurtext",
            teamurl: "https://timesofindia.indiatimes.com/photo/63368476.cms",
            teamlogo: "https://www.deccanherald.com/sites/dh/files/articleimages/2020/10/20/eqtmn0fucaancyu-804484-1603180070.jpg"

        }]

    const teamdetails = [

        {
            id: "0",
            classname: "cskclass",
            teamname: 'chennai super kings',
            teamicon: "https://www.eventstodayz.com/wp-content/uploads/2019/03/csk-hd-logo-2020.png",
            players: [{
                playername: "Ravindra Jadeja",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3850.png",
                team: "csk",
                price: "16Cr",
                isplaying: "true",
                description: "All-Rounder"
            },
            {
                playername: "Ms Dhoni",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3676.png",
                team: "csk",
                price: "12Cr",
                isplaying: "true",
                description: "Batsman/Wicket-keeper"
            },
            {
                playername: "Moeen Ali",
                team: "csk",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4688.png",
                price: "8Cr",
                isplaying: "true",
                description: "All-Rounder"
            },
            {
                playername: "Ruturaj Gaikwad",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66584.png",
                team: "csk",
                price: "6Cr",
                isplaying: "true",
                description: "Batsman"
            },
            {
                playername: "Dwayne Bravo",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3556.png",
                team: "csk",
                price: "4.4 Cr",
                isplaying: "true",
                description: "Bowler"
            },
            {
                playername: "Ambati Rayadu",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4176.png",
                team: "csk",
                price: "6.75 Cr",
                isplaying: "true",
                description: "Batsman/Wicket-keeper"
            },
            {
                playername: "KM Asif",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67709.png",
                team: "csk",
                price: "20 lakh",
                isplaying: "true",
                description: "Bowler"
            },
            {
                playername: "Tushar Deshpande",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                team: "csk",
                price: "20 lakh",
                isplaying: "true",
                description: "Bowler"
            },
            {
                playername: "Mitchell Santar",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/57903.png",
                team: "csk",
                price: "14 Cr",
                isplaying: "true",
                description: "Bowler"
            },
            {
                playername: "Shivam Dube",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66044.png",
                team: "csk",
                price: "4 Cr",
                isplaying: "true",
                description: "All-Rounder"
            },
            {
                playername: "Maheesh Theeksna",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                team: "csk",
                price: "70 lakh",
                isplaying: "true",
                description: "Bowler"
            },
            {
                playername: "Devan Conway",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                team: "csk",
                price: "1 Cr",
                isplaying: "false",
                description: "Batsman"
            },
            {
                playername: "Chris Jordan",
                image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/26718.png",
                team: "csk",
                price: "2 Cr",
                isplaying: "false",
                description: "Bowler"
            }],
        },


        {
            id: "1",
            classname: "delhiclass",
            teamname: 'delhi capitals',
            teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png",
            players: [
                {
                    playername: "Rishabh Pant",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65756.png",
                    team: "delhi capitals",
                    price: "16Cr",
                    isplaying: "true",
                    description: "Batsman/Wicket-keeper"

                },
                {
                    playername: "Axar Patel",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/62576.png",
                    team: "delhi capitals",
                    price: "9Cr",
                    isplaying: "true",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Prithvi Shaw",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66812.png",
                    team: "delhi capitals",
                    price: "7.5Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Anrich Nortje",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63641.png",
                    team: "delhi capitals",
                    price: "6.5Cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "David Warner",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5380.png",
                    team: "delhi capitals",
                    price: "6.25Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Mitchell Marsh",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10094.png",
                    team: "delhi capitals",
                    price: "6.5Cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Ashwin Hebbar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "delhi capitals",
                    price: "20lakh",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Shardul Thakur",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63345.png",
                    team: "delhi capitals",
                    price: "10.75Cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Kamlesh Nagarkoti",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66807.png",
                    team: "delhi capitals",
                    price: "1.1Cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Mustafizur Rehman",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63881.png",
                    team: "delhi capitals",
                    price: "2.0cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Kuldeep Yadav",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63187.png",
                    team: "delhi capitals",
                    price: "2Cr",
                    isplaying: "true",
                    description: "Bowler"
                }, 
                {
                    playername: "Mandeep Singh",    
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10114.png",
                    team: "delhi capitals",
                    price: "1.1Cr",
                    isplaying: "false",
                    description: "All-Rounder"
                }],


        },


        {
            id: "2",
            classname: "kolkataclass",
            teamname: 'KOLKATA KNIGHT RIDERS',
            teamicon: "https://i.pinimg.com/originals/24/ac/85/24ac856684a5edacdbe58914839c8215.png",
            players: [
                {
                    playername: "Shreyas Iyer",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63961.png",
                    team: "kolkata knight riders",
                    price: "12.25Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Ajinke Rahane",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3991.png",
                    team: "kolkata knight riders",
                    price: "1Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Pat Cummins",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/56964.png",
                    team: "kolkata knight riders",
                    price: "7.25cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Nitish Rana",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63649.png",
                    team: "kolkata knight riders",
                    price: "8Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Sheldon Jackson",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/37338.png",
                    team: "kolkata knight riders",
                    price: "60lacs",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Shubman Gill",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "kolkata knight riders",
                    price: "95lacs",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Andre Russell",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/12047.png",
                    team: "kolkata knight riders",
                    price: "12Cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Ankul Roy",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66983.png",
                    team: "kolkata knight riders",
                    price: "20lacs",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Sunil Narine",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/11229.png",
                    team: "kolkata knight riders",
                    price: "6cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Tim Southee",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4235.png",
                    team: "kolkata knight riders",
                    price: "1.5cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Varun Chakravarthy",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67469.png",
                    team: "kolkata knight riders",
                    price: "8cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Shivam Mavi",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66984.png",
                    team: "kolkata knight riders",
                    price: "7.25Cr",
                    isplaying: "false",
                    description: "All-Rounder"
                }],

        },

        {
            id: "3",
            classname: "punjabclass",
            teamname: 'PUNJAB KINGS',
            teamicon: "https://sportstar.thehindu.com/cricket/article33860703.ece/ALTERNATES/LANDSCAPE_1200/17-Kingsjpg",
            players: [

                {
                    playername: "Shikar Dhawan",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3722.png",
                    team: "punjab kings",
                    price: "8.25Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Johny Bairstow",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/19394.png",
                    team: "punjab kings",
                    price: "6.75Cr",
                    isplaying: "true",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Hrpeet Brar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "punjab kings",
                    price: "3.1cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Mayank Agarwal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10115.png",
                    team: "punjab kings",
                    price: "12Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Sharukh Khan",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "punjab kings",
                    price: "9Cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Rahul Chahar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66823.png",
                    team: "punjab kings",
                    price: "5.5Cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Vaibhav Arora",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "punjab kings",
                    price: "2Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Nathan Ellis",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "punjab kings",
                    price: "75lacs",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Athrava Taide",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67910.png",
                    team: "punjab kings",
                    price: "20lacs",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Liam Livingstone",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63940.png",
                    team: "punjab kings",
                    price: "11.5Cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "PrabhSimran Singh",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/70222.png",
                    team: "punjab kings",
                    price: "60lcs",
                    isplaying: "true",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Sandeep Sharma",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10116.png",
                    team: "punjab kings",
                    price: "1.9cr",
                    isplaying: "false",
                    description: "Bowler"
                }],

        },
        {
            id: "4",
            classname: "mumbaiclass",
            teamname: 'MUMBAI INDIANS',
            teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
            players: [
                {
                    playername: "Ishan Kishan",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64712.png",
                    team: "mumbai indians",
                    price: "15.25cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Dewaid Brewis",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "mumbai indians",
                    price: "3Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Rohit Sharma",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3852.png",
                    team: "mumbai indians",
                    price: "16Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Mayank Markande",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67126.png",
                    team: "mumbai indians",
                    price: "65lacs",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Suryakumar Yadav",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/11803.png",
                    team: "mumbai indians",
                    price: "8cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Tim David",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "mumbai indians",
                    price: "8.25Cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Jofra Archer",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64254.png",
                    team: "mumbai indians",
                    price: "10.0cr",
                    isplaying: "true",
                    description: "Bowler"
                },

                {
                    playername: "Arjun Tendulkar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "mumbai indians",
                    isplaying: "30lacs",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Fabian Allen",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "mumbai indians",
                    isplaying: "1.72cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Kieron Pollard",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3910.png",
                    team: "mumbai indians",
                    price: "5.9cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Rahul Buddhi",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "mumbai indians",
                    price: "90lacs",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Anmolpreet Singh",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65438.png",
                    team: "mumbai indians",
                    price: "2.1cr",
                    isplaying: "false",
                    description: "Batsman"
                },
                {
                    playername: "Jasprit Bumrah",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63755.png",
                    team: "mumbai indians",
                    price: "8.0cr",
                    isplaying: "false",
                    description: "Bowler"
                }],



        },
        {
            id: "5",
            classname: "sunrisersclass",
            teamname: 'SUNRISERS HYDERABAD',
            teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
            players: [

                {
                    playername: "Abdul Samad",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "sunrisershyderabad",
                    price: "90lacs",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Umran Malik",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "sunrisershyderabad",
                    price: "1.0cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Kane Williamson",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4330.png",
                    team: "sunrisershyderabad",
                    price: "14cr",
                    isplaying: "true",
                    description: "Batsman"
                },

                {
                    playername: "Washington Sundar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65859.png",
                    team: "sunrisershyderabad",
                    price: "13cr",
                    isplaying: "true",
                    description: "Batsman/Wicket-keeper"
                },

                {
                    playername: "Nicholas Pooran",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/63726.png",
                    team: "sunrisershyderabad",
                    price: "12.1cr",
                    isplaying: "true",
                    description: "Batsman"
                },

                {
                    playername: "Priyam Garg",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66803.png",
                    team: "sunrisershyderabad",
                    price: "20.5lacs",
                    isplaying: "true",
                    description: "Batsman"
                },

                {
                    playername: "Rahul Tripathi",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/41229.png",
                    team: "sunrisershyderabad",
                    price: "8.1cr",
                    isplaying: "true",
                    description: "Batsman"
                },

                {
                    playername: "Abhishek Sharma",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/66799.png",
                    team: "sunrisershyderabad",
                    price: "9.8cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },

                {
                    playername: "Bhuvneshwar Kumar",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5132.png",
                    team: "sunrisershyderabad",
                    price: "4.3cr",
                    isplaying: "true",
                    description: "Bowler"
                },

                {
                    playername: "Shreyas Gopal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/58155.png",
                    team: "sunrisershyderabad",
                    price: "2.1cr",
                    isplaying: "true",
                    description: "Bowler"
                },


                {
                    playername: "T Natarajan",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65160.png",
                    team: "sunrisershyderabad",
                    price: "4.0cr",
                    isplaying: "true",
                    description: "Bowler"
                }],
        },


        {
            id: "6",
            classname: "rajasthanclass",
            teamname: 'RAJASTHAN ROYALS',
            teamicon: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png",
            players: [
                {
                    playername: "Yashasvi Jaiswal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Rjasthan royals",
                    price: "4.2cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "R. Ashwin",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4555.png",
                    team: "Rjasthan royals",
                    price: "5Cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Trent Boult",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4338.png",
                    team: "Rjasthan royals",
                    price: "5.1cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Shimron Hetmyer",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/64861.png",
                    team: "Rjasthan royals",
                    price: "8.2cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Devdutt Padikkal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67589.png",
                    team: "Rjasthan royals",
                    price: "7.75cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Rahul Tewatia",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Rjasthan royals",
                    price: "1.2lacs",
                    isplaying: "true",
                    description: "Bowler"
                }, 
                {
                    playername: "Riyan Parag",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67589.png",
                    team: "Rjasthan royals",
                    price: "5Cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Shreyas Gopal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Rjasthan royals",
                    price: "1.3cr",
                    isplaying: "true",
                    description: "All-Rounder"
                },
                {
                    playername: "Joseph Buttler",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/9782.png",
                    team: "Rjasthan royals",
                    price: "10.5cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Chetan Sakariya",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "Rjasthan royals",
                    price: "1.1cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Sanju Samson",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/61837.png",
                    team: "Rjasthan royals",
                    price: "12.1cr",
                    isplaying: "true",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Konganda Cariappa",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65367.png",
                    team: "Rjasthan royals",
                    price: "30lacs",
                    isplaying: "false",
                    description: "Bowler"
                },
                {
                    playername: "Yuzvendra Chahal",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/9844.png",
                    team: "Rjasthan royals",
                    price: "5.9cr",
                    isplaying: "false",
                    description: "Bowler"
                },
                {
                    playername: "Karun Nair	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/62297.png",
                    team: "Rjasthan royals",
                    price: "2cr",
                    isplaying: "true",
                    description: "Bowler"
                }],

        },

        {
            id: "7",
            classname: "royalclass",
            teamname: ' ROYAL CHALLENGERS BANGALORE',
            teamicon: "https://www.deccanherald.com/sites/dh/files/articleimages/2020/10/20/eqtmn0fucaancyu-804484-1603180070.jpg",
            players: [
                {
                    playername: "Faf Du Plessis	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/28891.png",
                    team: "royal challegers bangalore",
                    price: "12cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Wanindu Hasaranga",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65027.png",
                    team: "royal challegers bangalore",
                    price: "10.1cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Dinesh Karthik	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3632.png",
                    team: "royal challegers bangalore",
                    price: "12.1cr",
                    isplaying: "true",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Virat Kohli",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/3993.png",
                    team: "royal challegers bangalore",
                    price: "15.2cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Anuj Rawat	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "royal challegers bangalore",
                    price: "3.4cr",
                    isplaying: "true",
                    description: "Batsman/Wicket-keeper"
                },
                {
                    playername: "Josh Hazlewood",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/4255.png",
                    team: "royal challegers bangalore",
                    price: "8.2cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Glenn Maxwell",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/10085.png",
                    team: "royal challegers bangalore",
                    price: "11Cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Mohammad Siraj	",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/65799.png",
                    team: "royal challegers bangalore",
                    price: "7.0cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "David Wiley",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/35128.png",
                    team: "royal challegers bangalore",
                    price: "2Cr",
                    isplaying: "true",
                    description: "Bowler"
                },
                {
                    playername: "Sherfane Rutherford",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/67285.png",
                    team: "royal challegers bangalore",
                    price: "92lacs",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Aneeshwar Gautam",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "royal challegers bangalore",
                    price: "1.2cr",
                    isplaying: "true",
                    description: "Batsman"
                },
                {
                    playername: "Siddharth Kaul",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/61693.png",
                    team: "royal challegers bangalore",
                    price: "2cr",
                    isplaying: "false",
                    description: "Batsman"
                },
                {
                    playername: "Harshal Patel",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/players/128X128/5407.png",
                    team: "royal challegers bangalore",
                    price: "12.1cr",
                    isplaying: "false",
                    description: "Bowler"
                },
                {
                    playername: "Mohammed Azharuddeen",
                    image: "https://xmlns.cricketnext.com/cktnxt/scorecard/crk_player_images/DefaultFlag-90x50-new.png",
                    team: "royal challegers bangalore",
                    price: "1.8cr",
                    isplaying: "false",
                    description: "All-Rounder"
                }],

        }]

    for (var i = 0; i < teams.length; i++) {

        renderteams(teams[i])
    }



    function renderteams(teams) {
        var card = $("<div>").addClass('card').attr('id', teams.id)
        var cardimage = $("<img>").attr({
            "src": teams.teamurl
        }).addClass("cardimage")
        card.append(cardimage)
        var logocard = $("<div>").addClass("logocard position-absolute top-50 start-50 translate-middle");
        var logoimage = $("<img>").attr("src", teams.teamlogo).addClass("logoimage")
        logocard.append(logoimage)
        card.append(logocard)
        var text = $("<h1>").addClass(`text position-absolute bottom-0 start-50 translate-middle`).text(teams.teamname)
        card.append(text)
        $(".teams").append(card)
        card.click(function (event) {
            localStorage.setItem('id', JSON.stringify(event.currentTarget.id))
            window.location.href = './teamDetailsPage.html'

        })
    }


    $(".formData").submit(function (event) {
        event.preventDefault()
        var getvalue = $(".input").val()
        var getlowervalue = getvalue.toLowerCase()
        for (var i = 0; i < teams.length; i++) {
            if (teams[i].teamname == getlowervalue) {
                localStorage.setItem('id', teams[i].id)
                window.location.href = './teamDetailsPage.html'
                $('.input').val("").attr('placeholder', "enter team name or player name")

            }
        }
        var getuppervalue = getvalue.toUpperCase()
        for (var i = 0; i < teamdetails.length; i++) {
            for (var j = 0; j < teamdetails[i].players.length; j++) {
                if ((teamdetails[i].players[j].playername).toUpperCase() == (getuppervalue)) {
                    localStorage.setItem('playername', getuppervalue)
                    window.location.href = "./playerDetails.html"
                    $('.input').val("").attr('placeholder', "enter team name or playername")
                }
            }
        }

    })
})