import { LightningElement, track } from "lwc";
export default class ZodiacSignGenerator extends LightningElement {
    userName;
    userBirthDate;
    @track userProfile = {};
    zodiacSigns = [
        {
            sign: 'Aries',
            from: '03-21',
            to: '04-19',
            emoji: '♈️',
            element: 'Fire',
            planet: 'Mars',
            luckyColor: 'Red',
            luckyNumber: 9,
            trait: "You're fearless, energetic, and always ready to take on a challenge. Your confidence inspires others, but patience is one of your greatest lessons."
        },
        {
            sign: 'Taurus',
            from: '04-20',
            to: '05-20',
            emoji: '♉️',
            element: 'Earth',
            planet: 'Venus',
            luckyColor: 'Green',
            luckyNumber: 6,
            trait: "You're dependable, loyal, and love comfort and stability. Once you set your mind on something, nothing can easily move you."
        },
        {
            sign: 'Gemini',
            from: '05-21',
            to: '06-20',
            emoji: '♊️',
            element: 'Air',
            planet: 'Mercury',
            luckyColor: 'Yellow',
            luckyNumber: 5,
            trait: "Your curiosity knows no limits. You're witty, adaptable, and can light up any conversation with your intelligence and humor."
        },
        {
            sign: 'Cancer',
            from: '06-21',
            to: '07-22',
            emoji: '♋️',
            element: 'Water',
            planet: 'Moon',
            luckyColor: 'White',
            luckyNumber: 2,
            trait: "You're deeply caring and emotionally intelligent. Your biggest strength is making people feel safe, loved, and understood."
        },
        {
            sign: 'Leo',
            from: '07-23',
            to: '08-22',
            emoji: '♌️',
            element: 'Fire',
            planet: 'Sun',
            luckyColor: 'Gold',
            luckyNumber: 1,
            trait: "You were born to shine. Your confidence, creativity, and generosity naturally attract people and inspire those around you."
        },
        {
            sign: 'Virgo',
            from: '08-23',
            to: '09-22',
            emoji: '♍️',
            element: 'Earth',
            planet: 'Mercury',
            luckyColor: 'Navy Blue',
            luckyNumber: 5,
            trait: "You're practical, organized, and always looking for ways to improve yourself and help others. Details are your superpower."
        },
        {
            sign: 'Libra',
            from: '09-23',
            to: '10-22',
            emoji: '♎️',
            element: 'Air',
            planet: 'Venus',
            luckyColor: 'Pink',
            luckyNumber: 6,
            trait: "Harmony is your language. You value fairness, beauty, and meaningful relationships while bringing balance wherever you go."
        },
        {
            sign: 'Scorpio',
            from: '10-23',
            to: '11-21',
            emoji: '♏️',
            element: 'Water',
            planet: 'Pluto',
            luckyColor: 'Black',
            luckyNumber: 8,
            trait: "You're passionate, determined, and emotionally powerful. Few people can match your loyalty or your ability to overcome challenges."
        },
        {
            sign: 'Sagittarius',
            from: '11-22',
            to: '12-21',
            emoji: '♐️',
            element: 'Fire',
            planet: 'Jupiter',
            luckyColor: 'Purple',
            luckyNumber: 3,
            trait: "Adventure fuels your soul. You're optimistic, honest, and always searching for new experiences and bigger dreams."
        },
        {
            sign: 'Capricorn',
            from: '12-22',
            to: '01-19',
            emoji: '♑️',
            element: 'Earth',
            planet: 'Saturn',
            luckyColor: 'Brown',
            luckyNumber: 8,
            trait: "Your determination and discipline set you apart. You believe success is earned through consistency, patience, and hard work."
        },
        {
            sign: 'Aquarius',
            from: '01-20',
            to: '02-18',
            emoji: '♒️',
            element: 'Air',
            planet: 'Uranus',
            luckyColor: 'Blue',
            luckyNumber: 4,
            trait: "You're a thinker, a dreamer, and often the most original person in the room. Rules were made to be rewritten by you."
        },
        {
            sign: 'Pisces',
            from: '02-19',
            to: '03-20',
            emoji: '♓️',
            element: 'Water',
            planet: 'Neptune',
            luckyColor: 'Sea Green',
            luckyNumber: 7,
            trait: "Your heart is a sponge for the world's emotions, and your imagination could paint entire galaxies. You give endlessly and inspire through kindness."
        }
    ];
    // For Name Change
    handleNameChange(event) {
        this.userName = event.target.value;
    }

    // For Date Of Birth Change
    handleBirthDateChange(event) {
        this.userBirthDate = event.target.value;
    }

    //handling Submit Button
    handleSubmitButton() {
        let userDOB = new Date(this.userBirthDate);
        const userMonth = userDOB.getMonth() + 1; // Adding 1 because getMonth() returns 0-11
        const userDate = userDOB.getDate();
        this.userProfile = this.checkZodiacSign(userMonth, userDate);
    }

    checkZodiacSign(month, day) {
        console.log('Month received : ' + month + ' Day received : ' + day);
        for (let sign of this.zodiacSigns) {
            const [fromMonth, fromDay] = sign.from.split('-').map(Number);
            const [toMonth, toDay] = sign.to.split('-').map(Number);

            if((month === fromMonth && day >= fromDay) || (month === toMonth && day <= toDay)) {
                console.log('Zodiac Sign Found: ' + JSON.stringify(sign));
                return sign;
            }
        }
    }
}

