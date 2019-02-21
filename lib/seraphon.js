const _ = require('lodash')
const adjectives = require('./adjectives')
const clean = require('clean-text-utils')

const from = [
    'the Nightmare War',
    'the Seven Falling Stars',
    'the Celestial Dawn',
    'Azyr',
    'the Seventh Star',
    'the Azure City',
    'Azyrheim',
    'Chotec\'s Feather',
    'Tlazcotl\'s Gaze',
    'Yutlpoc\'s Quill',
    'Yutua\'s Wings',
    'the Talon of Quelec',
    'Omek\'s Tears',
    'the Blessed Coatl',
    'the Breath of Dracothion',
    'Dracothian\'s Tail',
]

const name_fragments = [
    'aqul',
    'ax',
    'choa',
    'ika',
    'iki',
    'kar',
    'ke',
    'kori',
    'kro',
    'krok',
    'kur',
    'qe',
    'qual',
    'qul',
    'tak',
    'tako',
    'te',
    'tek',
    'toc',
    'tok',
    'toka',
    'tox',
    'xa',
    'xoat',
    'yu',
    'yuqal',
    'za',
    'zec',
]

const punctuation = [
    "'",
    '-',
]

const get_name = () => {
    const num_segments = _.random(2, 4)
    let str = ''
    let bias = 2
    for (let i = 0; i <= num_segments; i++) {
        // Slightly bias in favor of NO punctuation
        let has_punk = bias + _.random(0, 10) < 5 && i > 0
        let punk = has_punk ? _.sample(punctuation) : ''
        let sample = _.sample(name_fragments)
        // Capitalize first segment, and randomly capitalize after punctuation
        if (i === 0 || (has_punk && _.random(0, 10) < 3)) {
            sample = clean.get.capitalized(sample)
        }
        str += `${punk}${sample}`
        bias = has_punk ? 2 : bias - 1
    }
    return str
}

const generate = () => {
    // Example - Kro'tako the Careless of the Nightmare Wars
    const name = get_name()
    const adjective = clean.get.capitalized(_.sample(adjectives))
    return `${name} the ${adjective} of ${_.sample(from)}`
}

module.exports = {
    generate
}