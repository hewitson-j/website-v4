export interface thoughtsProps {
    title: string,
    content: string[],
    copyrightDate: string,
}

const thoughtsArray: thoughtsProps[] = [
    {
        title: 'You', 
        content: [
        "I walked along a path and ran into You.",
        "I looked at You and you at Me,",
        "In an instant we knew that We were We.",
        "",
        "It has been said that in other worlds beyond this,",
        "Different versions of You live unique lives,",
        "Playing unique roles, the same person but different.",
        "",
        `I asked You, "What was your life like?`,
        "What was different? What was the same?",
        "What was your family like? What role did you play?",
        "What was your life’s work? What skills had you learned?",
        `What would you ask yourself if yourself answered in return?"`,
        "",
        `"Did you have moments of joy? Did you have moments of sorrow?`,
        "What had you learned through life? What was important to you?",
        "What were your struggles? Did you have any regrets?",
        "What helps did you need? Had anyone answered your requests?",
        "Why do you think we are? What do you think is our purpose?",
        `Why are you? And why are we?"`,
        "",
        "You sat and pondered for a moment, then shared with me your joys,",
        "Your triumphs, your fears, your hopes, your tears, your pain, your love",
        "Your life, your knowledge, and indeed you shared with me",
        "What I would see from another perspective.",
        "",
        "I also shared my fears and hopes and dreams, ",
        "My joys, my sorrows, my achievements, my struggles,",
        "And it was in that moment when the realization struck",
        "About what the wise one once said",
        `"Do unto others as you would have done unto You."`,
        "I am You, and You are Me, and We are We.",
        "",
        "You saw things differently, but you confirmed we are the same",
        "You showed me that we are truly connected though living different lives",
        "And beyond all, you showed that we need not seek to travel vast distances",
        "To other worlds to see how we live in other lives, we need not travel so far",
        "To see that We are One, no matter who, what, or when we are",
        "When we see things from another’s eyes."
      ], 
      copyrightDate: '7 August 2024'
    },
    // {
    //     title: 'Parable of the Master of the Property', 
    //     content: [
    //         "I give unto you a parable. In a certain land, there was a man who was a Master of a Great Property which spanned thousands of acres. He and his many children lived together in peace and harmony. To another land he was called away on certain business, and so the Master gave commands and counsel to his children that they might live peaceably, and help one another, and prepare the home for his return, so that in the day of his return all would receive a portion of the Property. Before leaving on his business, he provided a medium with which his children could call upon him, and he left unto them the bounties of his Property that none might have want during his time away and all might equally enjoy the blessings he left unto them.",
    //         "",
    //         "For a time, the children lived peaceably and enjoyed the gifts the Master had left for them. They had no want, and they fulfilled their master’s commands and lived in peace and supported each other.",
    //         "",
    //         "However, a certain group of the children, seeing the humility of their siblings, began to exercise dominion over the others. For their blessings and age and learning, they thought themselves more righteous and obedient. However, though they truly were older and learned in the ways of the world, this group understood not the commands of the Master, and abided only in the letter of the law while not understanding the Spirit or intent of the commands the Master left. They said, “Do as we instruct, for we are wise and know Father’s commands. We are older, and we have been blessed for our righteousness. If you follow our guidance, you shall be happy, and you shall make Father happy unto the bringing unto you of your ultimate blessings and inheritance of the Property.”",
    //         "",
    //         "Soon, they began to amass a following of their siblings under their guidance, and they did impose their understanding of the Master’s commands. They did force upon them a requirement strict obedience, with the threat of being cast out upon the Master’s return. They claimed the Master loved them unconditionally but would not tolerate any disobedience, and harsh penalties were required for repentance. When a sibling was found to have disobeyed their understanding of the Master’s commands, the group shunned the disobeyer and cast them out from the Property, claiming it was out of love and a necessary step in repentance, and only allowing return upon contrition and submission to the commands of the Master as the leaders understood them.",
    //         "",
    //         "The leaders claimed that disobedience of love was next to murder, and forced their siblings to assume a façade identity, and instructed them to conform or they would be cast out eternally.",
    //         "",
    //         "The leaders of the group began to put taxing burdens upon the followers, demanding that the Master would need the resources he provided to the children for when he would return, and to use minimally and give back a great portion to the leaders, who would be stewards of the resources. However, the leaders spent this excess donated on improving their own rooms and homes upon the Property and building great ornate houses for the return of the Master. Meanwhile, the children who received the least blessings were left wanting and many starved as they gave unto the leaders what was demanded of them.",
    //         "",
    //         "The leaders would give the same repetitive instructions to the people and would say they would reveal further instructions from the Master when they received his call. They would say, “All is well! We are a happy people and we are doing that which is right, we must continue to give more unto Father, that it will be well with us.”",
    //         "",
    //         "The leaders would also claim that it is only through them that the Master could be called, and only they had the right to call upon the Master for instruction. They said, “While each of us has right to call the Master, only we are authorized to have a direct call upon the Master, and what he instructs us trumps all instructions given to others. We are the only ones who can interpret the will of the Master, and those who do not agree with us shall be cast out.”",
    //         "",
    //         "Due to the burdens and constraint imposed upon the children by the leaders, many of the Master’s children were oppressed, and while the leaders spoke of happiness and prosperity there were many who were truly in pain and unhappy. Indeed, there were many who also did suffer to take their own life, rather than face further isolation and burden imposed. Many others left the Property of their own accord and would suffer to wander the world as vagabonds with want and need to seek the Master themselves rather than be subjected more to this oppression. Soon the inhabitants of the Property were less and less, and all the while the leaders sat in their ornate houses saying, “All is well.”",
    //         "",
    //         "Even with all this, the leaders washed themselves amongst themselves and said “Our hands our clean. Father has given us these commands which we have followed and knows we will not do anything wrong. We are no longer subject to these constraints, for we are righteous and know the Father will pass a pleasing judgment upon us and we will be saved. Indeed, we shall be given the choice Property as our inheritance, and if we do wrong before his return then Father will subject us to the buffetings of this world, but we shall be saved in the day he shall return and given our Birthright.”",
    //         "",
    //         "I say unto you, what will the Master do when he returns to the Property? What will happen to the leaders who by their actions killed and cast out? Verily, I say unto you when he shall return he shall say, “My children, you who have fashioned yourselves leaders of your brothers, sisters, and siblings, you have usurped my authority and caused great destruction and pain among my children. You have allowed my children to go hungry and be burdened by heavy burdens and have enforced this by pain of isolation and exile. Your interpretation of my commands which I left to ensure that all my children might find happiness while I am gone, that they may grow and live together peaceably, and prepare this place to be a happy sanctuary for all my family have bastardized my commands, and despite the pain and burden you have placed upon my children you have made yourselves lives of ease, pretending to be doctors of my word and speaking of me, while ignoring the pain you have brought upon your siblings. Indeed, the blood of your siblings is on your hands, and yet you convince yourselves you have been washed clean from the blood and sins of this generation.",
    //         "",
    //         "“You are also my children, and I shall show mercy unto you, but as it has been said insomuch as you have done this unto the least of these my children you have done it unto me. Indeed, with the same judgment you have inflicted shall you be judged and you, being chief among the children, shall be the last to receive my blessings and the first to serve those whom you have harmed, and those who were the poor and downtrodden and so strived to live by the Spirit of my word shall be the first to receive my blessings and the last I shall call to serve you.”",
    //         "",
    //         "Verily, I say unto you, beware of those who would preach the acceptable Word who do not themselves, and those who draw unto me with their mouths, but their hearts are far from me, and who do not what I would have them do. Indeed, beware that you do not become so yourselves, for in the day you shall be in danger of judgment, for all must be vigilant that they become not so."
    //       ],           
    //     copyrightDate: 'January 2024'
    // }
]

export { thoughtsArray }
