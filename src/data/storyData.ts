export interface IChoice {
    text: string;
    nextId: number;
}

export interface IScene {
    id: number;
    title?: string;
    text: string;
    text2?: string;
    text3?: string;
    choices: IChoice[]
}

export const storyData: IScene[] = [
    {
        id: 0,
        text: "Your name is Beefcake. You are a two year old Staffordshire Bullterrier.",
        text2: "You live with your mum in a small apartment in Malmö, Sweden. You are sleeping on the couch, dreaming about chasing wild rabbits and playing with all the kids in the neighbourhood.",
        text3: "You should probably wake up soon.",
        choices: [
            { text: "Wake up", nextId: 38 },
        ],
    },
    {
        id: 1,
        title: "OH MY DOG",
        text: "Your ball is gone!",
        text2: "What can you do to find it?",
        choices: [
            { text: "Look around at home", nextId: 2 },
            { text: "Go somewhere else to look", nextId: 6 }
        ],
    },
    {
        id: 2,
        title: "Home",
        text: "Mum is sitting at the table and staring into her grey foldable rectangle again.",
        text2: "Perhaps it's in your toy box with the barely-held-together badger stuffy you got for christmas, your lifebuoy toy, and that really boring chewing stick?",
        text3: "Or it could be with all your cool toys with squeakers. (You don't understand why they aren't in the toy box with your other toys)",
        choices: [
            { text: "Toy box", nextId:  3 },
            { text: "The place where mum hides all the cool stuff", nextId: 3 },
            { text: "Ask mum", nextId: 4 }
        ]
    },
    {
        id: 3,
        title: "No ball",
        text: "You looked, but the ball is not there.",
        choices: [
            { text: "Damn, okay", nextId: 1 }
        ]
    },
    {
        id: 4,
        title: "Aw yiss!",
        text: "Mum looks up from her rectangle. She gives you scratchies and kisses and says you are the bestest dog.",
        text2: "She even scratches that hard-to-reach place behind your ears!",
        choices: [
            { text: "What about my ball though", nextId: 5 }
        ]
    },
    {
        id: 5,
        title: "No ball",
        text: "Mum says she doesn't know.",
        choices: [
            { text: "Damn, okay", nextId: 1 }
        ]
    },
    {
        id: 6,
        title: "Where do you want to go?",
        text: "You remember playing with the ball at the dog park the other day. Perhaps it's still there?",
        text2: "Izi is one of the coolest and bestest dogs you know. She probably knows what to do!",
        text3: "Auntie's house is the best place in the world because she has kids that likes to play, lots of treats, and lives next to a forest, but she lives far away.",
        choices: [
            { text: "The dog park", nextId: 7 },
            { text: "Izi's house", nextId: 16 },
            { text: "Auntie's house", nextId: 26 }
        ]
    },
    {
        id: 7,
        text: "The dog park is on the other side of the big road with all the scary cars.",
        choices: [
            { text: "Damn", nextId: 8 }
        ]
    },
    {
        id: 8,
        text: "How do you cross the road?",
        choices: [
            { text: "Soldier through like a brave boi", nextId: 9 },
            { text: "Run like the wind!", nextId: 10 }
        ]
    },
    {
        id: 9,
        title: "Braveheart",
        text: "You feel an odd sense of accomplishment.",
        choices: [
            { text: "Great!", nextId: 10 }
        ]
    },
    {
        id: 10,
        title: "The dog park",
        text: "The dog park is a bit muddy from the rain, but you still feel your tail wagging from happiness of being here.",
        choices: [
            { text: "Finally!", nextId: 11 }
        ]
    },
    {
        id: 11,
        title: "Intruder!",
        text: "While you are looking for your ball, another dog is approaching the dog park. He looks old and a little scruffy.",
        choices: [
            { text: "Bark to scare it away", nextId: 12 },
            { text: "Wag your tail and say hi", nextId: 13 }
        ]
    },
    {
        id: 12,
        text: "Sniff around the park to search for the ball.",
        choices: [
            { text: "Sniff sniff!", nextId: 15 }
        ]
    },
    {
        id: 13,
        title: "Uhm, okay",
        text: "The dog looks at you with cloudy eyes and says:",
        text2: "I had a favourite ball once, too... I ate its squeaker with some fava beans and a nice Chianti.",
        choices: [
            { text: "You don't trust this dog at all", nextId: 15 }
        ]
    },
    {
        id: 14,
        text: "",
        choices: [
            { text: "", nextId: 1 }
        ]
    },
    {
        id: 15,
        title: "No ball",
        text: "The ball is not at the dog park.",
        choices: [
            { text: "Damn, okay", nextId: 1 }
        ]
    },
    {
        id: 16,
        title: "Walking to Izi's place",
        text: "Izi lives on the other side of the big intersection with all the scary cars.",
        choices: [
            { text: "Walk!", nextId: 17 },
            { text: "Nevermind!", nextId: 1 }
        ]
    },
    {
        id: 17,
        title: "The bravest boy",
        text: "It's scary, but you've walked here before.",
        choices: [
            { text: "I am a very very brave pup", nextId: 18 }
        ]
    },
    {
        id: 18,
        title: "Izi's house",
        text: "Izi lives in an apartment a few floors up, but you can't see her from here.",
        choices: [
            { text: "Howl to make your presence known", nextId: 19 }
        ]
    },
    {
        id: 19,
        title: "Where are you?",
        text: "Izi doesn't seem to be home.",
        choices: [
            { text: "Wait a little bit", nextId: 20 },
            { text: "Forget about it", nextId: 21 }
        ]
    },
    {
        id: 20,
        title: "No show",
        text: "Izi doesn't show up.",
        choices: [
            { text: "Damn, okay", nextId: 21 }
        ]
    },
    {
        id: 21,
        title: "Where should you go next?",
        text: "Folkets park is close by, but you don't know why the ball would be there",
        choices: [
            { text: "Go to Folkets park", nextId: 22 },
            { text: "Go somewhere else", nextId: 1 }
        ]
    },
    {
        id: 22,
        title: "Folkets park",
        text: "You have fond memories of being here as a little pup.",
        choices: [
            { text: "Let's see what the park has to offer!", nextId: 23 }
        ]
    },
    {
        id: 23,
        text: "What do you want to do?",
        choices: [
            { text: "Say hi to strangers", nextId: 24 },
            { text: "Cool off your paws in the kiddie pool", nextId: 24 },
            { text: "Sunbathe on the grass", nextId: 25 }
        ]
    },
    {
        id: 24,
        title: "No ball",
        text: "The ball is not at Folkets park",
        choices: [
            { text: "Damn, okay", nextId: 1 }
        ]
    },
    {
        id: 25,
        title: "Killjoy",
        text: "Someone yells at you, pointing to a sign that says something, but you can't read.",
        choices: [
            { text: "There is a picture of a dog with a red line over them.", nextId: 24 }
        ]
    },
    {
        id: 26,
        title: "Jetset dog",
        text: "Auntie doens't live in Malmö where you live",
        choices: [
            { text: "Damn, you almost forgot about that part", nextId: 27 }
        ]
    },
    {
        id: 27,
        text: "You have to take the bus or the train",
        choices: [
            { text: "The bus", nextId: 28 },
            { text: "The train", nextId: 29 }
        ]
    },
    {
        id: 28,
        text: "The engine is way to loud in the back of the bus.",
        choices: [
            { text: "Where is the mute button on this thing?", nextId: 30 }
        ]
    },
    {
        id: 29,
        text: "You hate this, but the woman who checks tickets gives you scratchies",
        choices: [
            { text: "Aw yiss, scratchies!", nextId: 30 }
        ]
    },
    {
        id: 30,
        text: "Auntie's house",
        choices: [
            { text: "Finally!", nextId: 31 }
        ]
    },
    {
        id: 31,
        text: "Where to?",
        choices: [
            { text: "Garden", nextId: 32 },
            { text: "The front door", nextId: 33 },
            { text: "The nice forest", nextId: 37 }
        ]
    },
    {
        id: 32,
        text: "Sniff sniff!",
        choices: [
            { text: "Smells like fertilizer. Yum!", nextId: 33 }
        ]
    },
    {
        id: 33,
        text: "Oh Beefcake, what are you doing here?",
        choices: [
            { text: "Hello Auntie!", nextId: 34 }
        ]
    },
    {
        id: 34,
        text: "You get scratchies and she shows you the doggy drawer - she has bought lots of treats for you!",
        choices: [
            { text: "Cuddle up with Auntie", nextId: 35 },
            { text: "Play with her kids", nextId: 35 }
        ]
    },
    {
        id: 35,
        text: "Auntie's baby suddenly appears, holding your missing ball!",
        choices: [
            { text: "That mischievous baby!", nextId: 36 }
        ]
    },
    {
        id: 36,
        text: "You found the ball!",
        choices: [
            { text: "OH MY DOG IT'S HERE!", nextId: 38 }
        ]
    },
    {
        id: 37,
        text: "So relaxing!",
        choices: [
            { text: "The forest is so nice", nextId: 31 }
        ]
    },
    {
        id: 38,
        title: "Biiig stretch",
        text: "You do the downward dog and stretch out your paws. It feels really good.",
        text2: "You look around for your ball, but it's nowhere to be found.",
        text3: "You feel a sense of panic rise inside your chest.",
        choices: [
            { text: "Wasn't the ball here, just now?", nextId: 1 }
        ]
    },
    {
        id: 39,
        text: "The end",
        choices: [
            { text: "Ball ball ball BALL", nextId: 0 }
        ]
    },
    {
        id: 40,
        text: "The end",
        choices: [
            { text: "Ball ball ball BALL", nextId: 0 }
        ]
    },
]

export default storyData;