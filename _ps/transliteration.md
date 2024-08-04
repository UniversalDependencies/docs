---
layout: base
title:  'Transliteration'
udver: '2'
---

# Transliteration

* All pashto texts in UD are transliterated to capture their pronounciation.
* The transliteration used here is strictly phonemic: it aims on including all pronounced sounds, although they are not expressed in writing and on the contrary, it omits all unpronounced orthographic letters.
* The transliteration of each sentence is written on a line beginning with `# translit =`.
* The transliteration of word is given in the MISC column under the [Translit]() attribute.
* The transliteration of each lemma is shown in the MISC column under the [LTranslit]() attribute, but only if it differs from `Translit`.
 
## Vowels
* _i_ - closed front vowel [i]
* _e_ - mid front vowel [ɛ]
* _a_ - open front vowel [a]
* _ë_ - mid central vowel (shwa) [ə]
* _u_ - closed back rounded vowel [u]
* _o_ - mid back rounded vowel [o]
* _â_ - open back rounded vowel [ɒ]

## Consonants

### Nasals
* _m_ - bilabial nasal [m]
* _n_ - alveolar nasal [n]
* _ṇ_ - retroflex nasal [ɳ]

### Plosives
* _b_ - voiced bilabial plosive [b]
* _p_ - unvoiced bilabial plosive [p]
* _d_ - voiced alveolar plosive [d]
* _t_ - unvoiced alveolar plosive [t]
* _ḍ_ - voiced retroflex plosive [ɖ]
* _ṭ_ - unvoiced retroflex plosive [ʈ]
* _g_ - voiced velar plosive [g]
* _k_ - unvoiced velar plosive [k]
* _q_ - unvoiced uvular plosive [q]

### Fricatives
* _f_ - unvoiced labiodental fricative [f]
* _z_ - voiced alveolar fricative [z]
* _s_ - unvoiced alveolar fricative [s]
* _ž_ - voiced post-alveolar fricative [ʒ]
* _š_ - unvoiced post-alveolar fricative [ʃ]
* _ǧ_ - the local realization of this voiced fricative spans from post-alveolar [ʒ] through retroflex [ʐ] and palatal [ʑ] to velar [ɣ] depending on dialect
* _x̌_ - the local realization of this unvoiced fricative spans from post-alveolar [ʃ] through retroflex [ʂ] and palatal [ɕ] to velar [x] depending on dialect
* _ġ_ - voiced velar or uvular fricative [ɣ ~ ʁ]
* _x_ - unvoiced velar or uvular fricative [x ~ χ]
* _h_ - glottal fricative [h]

### Affricates
* _ż_ - voiced alveolar affricate [d͡z]
* _c_ - unvoiced alveolar affricate [t͡s]
* _ǰ_ - voiced post-alveolar affricate [d͡ʒ]
* _č_ - voiced alveolar affricate [t͡ʃ]

### Taps and Approximants
* _r_ - alveolar tap [ɾ]
* _ṛ_ - retroflex tap [ɽ]
* _l_ - alveolar lateral approximant [l]
* _w_ - bilabial approximant [w]
* _y_ - palatal approximant [j]

## Stress
* Pashto has a phonemic stress that can fall on any syllable (but mostly falls on the last one).
* The stress should be marked with an accent mark (´) above the vowel of the stressed syllable in every word that includes two or more syllables.
* If such a word does not bear a stress, it indicates that it forms a stress group with another word, which is stressed (نه کوم _në́ kawëm_ “I do not do”)
