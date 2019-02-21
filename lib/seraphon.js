const _ = require('lodash')
const clean = require('clean-text-utils')

const from = [
    'the Nightmare War',
    'the Seven Falling Stars',
    'the Celestial Dawn',
    'Azyr',
]

const name_fragments = [
    'kar',
    'toc',
    'te',
    'tok',
    'choa',
    'kro',
    'kur',
    'kori',
    'qul',
    'aqul',
    'krok',
    'tak',
    'yu',
    'yuqal',
    'zec',
    'toka',
    'za',
    'tako',
    'ika',
    'iki',
]

const adjectives = [
    'bringer',
    'dreamer',
    'wrathful',
    'englightened',
    'brutal',
    'unbreakable',
    'celestial',
    'cautious',
    'ceaseless',
    'careful',
    'careless',
]

const punctuation = [
    "'",
    '-',
]

const get_name = () => {
    const num_segments = _.random(2, 4)
    let str = ''
    for (let i = 0; i <= num_segments; i++) {
        // Slightly bias in favor of NO punctuation
        let has_punk = 2 + _.random(0, 10) < 5 && i > 0
        let punk = has_punk ? _.sample(punctuation) : ''
        let sample = _.sample(name_fragments)
        // Capitalize first segment, and randomly capitalize after punctuation
        if (i === 0 || (has_punk && _.random(0, 10) < 3)) {
            sample = clean.get.capitalized(sample)
        }
        str += `${punk}${sample}`
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