---
layout: feature
title: 'Gender'
shortdef: 'gender'
---

All Hebrew [nouns](he-pos/NOUN) and [pronouns](he-pos/PRON) are assigned a grammatical `Gender`. As a result, the associated [adjectives](he-pos/ADJ), [auxiliaries](he-pos/AUX), [numbers](he-pos/NUM) and [verbs](he-pos/VERB) agree with the marking on the noun/pronoun.

In some cases, where gender is morphologically ambiguous, it may receive both values (separated by a comma in annotation).

### `Fem`: feminine

Feminine gender is assigned to nouns denoting female persons, specific female animate non-human objects, the feminine pronouns (singular and plural), arbitrary nouns assigned the feminine gender, and the feminine forms of adjectives, numbers and verbs associated with such nouns/pronouns.

#### Examples:

* הילדה הלכה _ha-yalda halxa_ "the girl walked" (both words marked `Fem`)
* הנמלים הולכות _ha-nemalim holxot_ "the ants are walking" (group may also include male ants)
* היא מטיילת _hi' metayyelet_ "she is going on a walk" (both words marked `Fem`)
* שלוש קופסאות ריקות _šaloš qufsa'ot reiqot_ "three empty boxes" (all words marked `Fem`)

### `Masc`: masculine

Masculine gender is assigned to nouns denoting male persons, specific male animate non-human objects, the masculine pronouns (singular and plural), arbitrary nouns assigned the masculine gender, and the masculine forms of adjectives, numbers and verbs associated with such nouns/pronouns.

Some [determiners](he-pos/DET), namely מספיק and שאר, also carry the `Masc` gender, regardless of the modified noun.

#### Examples:

* הילד הלך _ha-yeled halax_ "the boy walked" (both words marked `Masc`)
* הנמלים שובתים _ha-nemelim šovtim_ "the ports are striking" (both words marked `Masc`)
* הם מטיילים _hem metayylim_ "they(m) are going on a walk" (group may also contain females)
* ארבעה כסאות קלים _arba'a kisa'ot qalim_ "four light chairs" (all words marked `Masc`)
* שאר המסיבות נגמרו _š'ar-`Masc` ha-mesibot-`Fem` nigmeru-`Masc,Fem`_ "the rest of the parties ended"
