const _ = require('lodash')
const adjectives = require('./adjectives')
const clean = require('clean-text-utils')

const from = [
    'Azyr',
    'Azyrheim',
    'Chotec\'s Feather',
    'Chupayotl',
    'Dracothian\'s Tail',
    'Hexoatl',
    'Huatl',
    'Lustria',
    'Omek\'s Tears',
    'Oyxl',
    'Pahuax',
    'Skeggi',
    'the Azure City',
    'the Blessed Coatl',
    'the Breath of Dracothion',
    'the Celestial Dawn',
    'the Cursed Jungle',
    'the Emerald Pools',
    'the Forbidden Jungle',
    'the Great Jungle',
    'the Island of Sacrifices',
    'the Jungle of Webs',
    'the Mud Isles',
    'the Night Forest',
    'the Nightmare War',
    'the Obsidian Face',
    'the Sentinels of Xeti',
    'the Seven Falling Stars',
    'the Seventh Star',
    'the Star Tower',
    'the Swirling Swamps',
    'the Talon of Quelec',
    'the Temple of Kara',
    'Tlanxla',
    'Tlazcotl\'s Gaze',
    'Xahutec',
    'Xlanzec',
    'Yutlpoc\'s Quill',
    'Yutua\'s Wings',
]

const name_fragments = [
    'aqul',
    'ata',
    'ataxa',
    'ax',
    'ax',
    'boq',
    'cho',
    'choa',
    'hex',
    'ika',
    'iki',
    'itza',
    'kai',
    'kar',
    'ke',
    'kha',
    'kor',
    'kori',
    'kro',
    'krok',
    'kur',
    'loq',
    'nka',
    'qe',
    'qual',
    'qul',
    'tak',
    'tako',
    'te',
    'tehe',
    'tek',
    'toc',
    'tok',
    'toka',
    'tox',
    'uax',
    'xa',
    'xili',
    'xla',
    'xoat',
    'yu',
    'yuqal',
    'za',
    'zec',
    'zec',
    'zlat',
]

const punctuation = [
    "'",
    '-',
]

const get_name = () => {
    const num_segments = _.random(1, 2)
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
    const adjective = clean.get.capitalized(_.sample(adjectives.seraphon))
    return `${name} the ${adjective} of ${_.sample(from)}`
}

module.exports = {
    generate
}