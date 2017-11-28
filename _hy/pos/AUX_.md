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

- Present tense. Finite present form of _եմ_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses person, number mood and tense:
  _վազում <b>եմ</b>_ “I will do”,
  _վազում <b>ես</b>_ “you will do”,
  _կանգնած <b>են</b>_ “they will do”.
  Note that in Armenian verbs can not form present morphologically, without auxiliaries. 

- Past tense. Finite past form of _էի_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses person, number mood and tense:
  _վազում <b>էի</b>_ “I did”,
  _վազում <b>էի</b>_ “I did”,
  _վազել <b>էի</b>_ “I did”,
  _կանգնած <b>էի</b>_ “we did”.

Note, that fintie present and past forms of _եմ_ and _էի_ also used with the perfect and future participles of the lexical verbs to form periphrastic present perfect (e.g. _վազել <b>եմ</b>_ “I have run”), (present-)future (e.g. _վազելու <b>եմ</b>_ “I shall run”) and future-in-the-past (_վազելու <b>էի</b>_ “I would (intended to) run”). The auxiliaries express person, number mood and tense (`Tense=Pres` and `Tense=Past` accordingly). Participles express aspect.

- Passive voice. A form of _լինեմ (լինել)_ (in various tenses and moods or in the infinitive) is combined with
  passive participle of the lexical verb. The auxiliary expresses person, number, tense and mood,
  the participle expresses gender, number and voice:
  _<b>je</b> udělán_ “he is done”,
  _<b>bude</b> udělán_ “he will be done”,
  _<b>byl</b> udělán_ “he was done”,
  _<b>byl by</b> udělán_ “he would be done”,
  _<b>buď</b> udělán_ “be done”,
  _<b>být</b> udělán_ “to be done”.

### Modal verbs are not auxiliaries

Armenian modal verbs are not considered auxiliary and they are tagged `VERB`. Their behavior is only slightly different from other content verbs.
