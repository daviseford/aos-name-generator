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
    'liar',
    'lucky',
    'mad',
    'mal',
    'marked',
    'naughty',
    'nimble',
    'old',
    'quarrelsome',
    'quick',
    'quik',
    'rebel',
    'rich',
    'ripper',
    'rough',
    'ruddy',
    'rude',
    'scrawny',
    'spite',
    'splitter',
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
    'fink',
    'gnash',
    'gnaw',
    'head',
    'quick',
    'quik',
    'rat',
    'ratt',
    'sewer',
    'skratch',
    'skritch',
    'squeek',
    'stabba',
    'stabber',
    'tail',
    'yiss',
]

const name_fragments = [
    'craven',
    'critt',
    'doom',
    'eek',
    'fang',
    'gnash',
    'gnaw',
    'grib',
    'ikit',
    'ikk',
    'katch',
    'keen',
    'kr',
    'kres',
    'krik',
    'krikch',
    'qelk',
    'qrutch',
    'quee',
    'queek',
    'ratt',
    'reek',
    'riek',
    'rot',
    'scweel',
    'shriek',
    'skittar',
    'skitter',
    'skratch',
    'skree',
    'skri',
    'skrit',
    'skrit',
    'skritter',
    'skweel',
    'snee',
    'sniek',
    'sniek',
    'snitch',
    'sqee',
    'stritch',
    'tak',
    'verm',
    'vermi',
    'vermin',
    'vurm',
    'worm',
    'wurm',
    'yiss',
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

module.exports.generate = () => {
    // Example - Vermskrit Headtaker
    const first_name = get_name(name_fragments)
    const second_first = _.sample(secondname_first_fragments)
    const second_second = _.sample(secondname_second_fragments)
    return `${first_name} ${get.capitalized(second_first)}${second_second}`
}