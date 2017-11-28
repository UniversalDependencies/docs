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
grammatical distinctions not carried by the lexical verb.

Armenian auxiliary verbs can be divided into:

- tense auxiliaries, used to form compound tenses represented by _եմ_ and _էի_ “to be”;
- aspectual auxiliaries, used to form so-called “secondary compound tenses” represented by _լինեմ (լինել)_ “to be habitually”.

### Examples

- Present tense. Finite present form of _եմ_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses person, number, mood and tense, participles expresse tense, aspect and voice:
  _վազում <b>եմ</b>_ “I will do”,
  _վազում <b>ես</b>_ “you will do”,
  _կանգնած <b>են</b>_ “they will do”.
  Note that in Armenian verbs can not form present morphologically, without auxiliaries. 

- Past tense. Finite past form of _էի_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses person, number, mood and tense, participles expresse tense, aspect and voice:
  _վազում <b>էի</b>_ “I did”,
  _վազում <b>էի</b>_ “I did”,
  _վազել <b>էի</b>_ “I did”,
  _կանգնած <b>էի</b>_ “we did”.

Note, that fintie present and past forms of _եմ_ and _էի_ also used with the perfect and future participles of the lexical verbs to form periphrastic present perfect (e.g. _վազել <b>եմ</b>_ “I have run”), (present-)future (e.g. _վազելու <b>եմ</b>_ “I shall run”) and future-in-the-past (_վազելու <b>էի</b>_ “I would (intended to) run”). The auxiliaries express person, number mood and tense (`Tense=Pres` and `Tense=Past` accordingly). Participles express tense, aspect and voice.

- Progressive aspect. The finite form of _լինեմ (լինել)_ (in various tenses and moods or in the infinitive) is combined with
  processual, resultative and future participles of the lexical verb. The auxiliary expresses person, number, tense, aspect and mood, participles expresse tense, aspect and voice:
  _գնալու<b>լինեմ</b> udělán_ “he is done”,
  _գնացած<b>լինեմ</b> udělán_ “he will be done”,
  _գնալիս<b>լինեմ</b> udělán_ “he was done”,
  _գնալու<b>լինել</b> udělán_ “he is done”,
  _գնացած<b>լինել</b> udělán_ “he will be done”,
  _գնալիս<b>լինել</b> udělán_ “he was done”.

Note, that in Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended
to location-existentials (_V&nbsp;Praze <b>je</b> nové divadlo._ “There <b>is</b> a new theatre in Prague.”)
Hence almost all occurrences of _být_ should be now tagged `AUX`.

Pure existentials _կամ_ and _ունեմ_ without location (_Vůle <b>je</b> a vždycky <b>byla</b>._ “There <b>is</b> and always <b>was</b> the will.”)
have a non-auxiliary _být,_ which should be tagged `VERB`.


In UD v1, where copulas were not tagged `AUX`, many instances of _být_ were tagged `VERB`.
In UD v2, copulas are tagged `AUX` and the definition of copula sentences has been extended
to location-existentials (_V&nbsp;Praze <b>je</b> nové divadlo._ “There <b>is</b> a new theatre in Prague.”)
Hence almost all occurrences of _být_ should be now tagged `AUX`.
Only pure existentials without location (_Vůle <b>je</b> a vždycky <b>byla</b>._ “There <b>is</b> and always <b>was</b> the will.”)
have a non-auxiliary _být,_ which should be tagged `VERB`.



### Modal verbs are not auxiliaries

Armenian modal verbs are not considered auxiliary and they are tagged `VERB`. Their behavior is only slightly different from other content verbs.
