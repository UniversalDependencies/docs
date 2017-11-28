---
layout: postag
title: 'AUX'
shortdef: 'auxiliary verb'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "hy/pos/AUX.html"
udver: '2'
---

### Definition

The only truly auxiliary verb in Armenian is _է_ “to be”,
and its variant (with separate lemma) _լինեմ (լինել)_ “to be habitually”.
It accompanies the lexical verb of a verb phrase and expresses
grammatical distinctions not carried by the lexical verb. The dependency label indicates their use (auxiliary, copula or content verb).

Armenian auxiliary verbs can be divided into:

- tense auxiliaries, used to form compound tenses represented by _եմ_ and _էի_ “to be”;
- aspectual auxiliaries, used to form so-called “secondary compound tenses” represented by _լինեմ (լինել)_ “to be habitually”.

### Examples

- Present tense. Finite present form of _եմ_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses person, number and tense:
  _վազում <b>եմ</b>_ “I will do”,
  _վազում <b>ես</b>_ “you will do”,
  _կանգնած <b>են</b>_ “they will do”.
  Note that in Armenian verbs can not form present morphologically, without auxiliaries. 

- Past tense. Finite past form of _էի_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses person, number and tense:
  _վազում <b>էի</b>_ “I did.`Masc`”,
  _վազում <b>էի</b>_ “I did.`Fem`”,
  _վազել <b>էի</b>_ “I did.`Fem`”,
  _կանգնած <b>էի</b>_ “we did.`Masc`”.

Note, that fintie present and past forms of _եմ_ and _էի_ also used with the perfect and future participles of the lexical verbs to form periphrastic present perfect (e.g. _վազել <b>եմ</b>_ “you did.`Masc`”), (present-)future (e.g. _վազելու <b>եմ</b>_ “you did.`Masc`”) and future-in-the-past (_վազելու <b>էի</b>_ “I would (intended to) run”). The auxiliaries expresse person and number and will have `Tense=Pres` and `Tense=Past` features accordingly. while there will be no tense information at the infinitive.

### Modal verbs are not auxiliaries

Armenian modal verbs are not considered auxiliary and they are tagged `VERB`. Their behavior is only slightly different from other content verbs.
