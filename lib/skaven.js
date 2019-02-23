const _ = require('lodash')
const { get } = require('clean-text-utils')


const secondname_second_fragments = [
    'bold',
    'bright',
    'brutal',
    'chosen',
    'clever',
    'deft',
    'drunk',
    'dry',
    'dull',
    'dust',
    'fat',
    'fierce',
    'filthy',
    'greedy',
    'gut',
    'gutter',
    'harsh',
    'hate',
    'hateful',
    'hideous',
    'horrible',
    'hungry',
    'jealous',
    'jitter',
    'lucky',
    'liar',
    'mad',
    'mal',
    'marked',
    'naughty',
    'nimble',
    'old',
    'quarrelsome',
    'quik',
    'quick',
    'rebel',
    'rich',
    'rough',
    'ruddy',
    'rude',
    'scrawny',
    'spite',
    'storm',
    'ugly',
    'wary',
    'wry',
]

const secondname_first_fragments = [
    'craven',
    'doom',
    'eek',
    'fang',
    'gnash',
    'gnaw',
    'rat',
    'fink',
    'skritch'
]

const name_fragments = [
    'craven',
    'doom',
    'eek',
    'fang',
    'gnash',
    'gnaw',
    'grib',
    'huonq',
    'ikit',
    'ikk',
    'katch',
    'keen',
    'kr',
    'krax',
    'kres',
    'krik',
    'krikch',
    'onq',
    'orn',
    'qelk',
    'qrutch',
    'reek',
    'riek',
    'rot',
    'scweel',
    'shriek',
    'skitter',
    'skree',
    'skri',
    'skrit',
    'skweel',
    'sniek',
    'sniek',
    'snitch',
    'sqee',
    'stritch',
    'tak',
    'verm',
    'vermi',
    'vermin',
    'ves',
    'vurm',
    'worm',
    'wurm',
    'xiz',
    'xol',
    'yiss',
    'zeen',
    'znuc',
]

const get_name = (arr_of_names) => {
    let str = ''
    for (let i = 0; i < 2; i++) {
        let sample = _.sample(arr_of_names)
        // Capitalize first segment
        if (i === 0) {
            sample = get.capitalized(sample)
        }
        str += sample
    }
    return str
}

const generate = () => {
    // Example - Vermskrit Headtaker
    const first_name = get_name(name_fragments)
    const second_first = _.sample(secondname_first_fragments)
    const second_second = _.sample(secondname_second_fragments)
    return `${first_name} ${get.capitalized(second_first)}${second_second}`
}

module.exports = { generate }