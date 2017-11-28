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

The only truly auxiliary verb in Armenian is _եմ&nbsp;_ “to be”,
and its variant (with separate lemma) _լինեմ (լինել)&nbsp;_ “to be habitually”.
It accompanies the lexical verb of a verb phrase and expresses
grammatical distinctions not carried by the lexical verb.

Armenian auxiliary verbs can be divided into:

- tense auxiliaries, used to form compound tenses represented by _եմ&nbsp;_ and _էի&nbsp;_ “to be”;
- aspectual auxiliaries, used to form so-called “secondary compound tenses” represented by _լինեմ (լինել)&nbsp;_ “to be habitually”.

### Examples

- Present tense. Finite present form of _եմ&nbsp;_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses person, number, mood and tense, participles expresse tense, aspect and voice:
  _վազում <b>եմ</b>&nbsp;_ “I will do”,
  _վազում <b>ես</b>&nbsp;_ “you will do”,
  _կանգնած <b>են</b>&nbsp;_ “they will do”.
  Note that in Armenian verbs can not form present morphologically, without auxiliaries. 

- Past tense. Finite past form of _էի&nbsp;_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses person, number, mood and tense, participles expresse tense, aspect and voice:
  _վազում <b>էի</b>&nbsp;_ “I did”,
  _վազում <b>էի</b>&nbsp;_ “I did”,
  _վազել <b>էի</b>&nbsp;_ “I did”,
  _կանգնած <b>էի</b>&nbsp;_ “we did”.

Note, that fintie present and past forms of _եմ_ and _էի_ also used with the perfect and future participles of the lexical verbs to form periphrastic present perfect (e.g. _վազել <b>եմ</b>&nbsp;_ “I have run”), (present-)future (e.g. _վազելու <b>եմ</b>&nbsp;_ “I shall run”) and future-in-the-past (_վազելու <b>էի</b>&nbsp;_ “I would (intended to) run”). The auxiliaries express person, number mood and tense (`Tense=Pres` and `Tense=Past` accordingly). Participles express tense, aspect and voice.

- Progressive aspect. The finite form of _լինեմ (լինել)&nbsp;_ (in various tenses and moods or in the infinitive) is combined with
  processual, resultative and future participles of the lexical verb. The auxiliary expresses person, number, tense, aspect and mood, participles expresse tense, aspect and voice:
  _գնալու<b>լինեմ</b>&nbsp;_ “he is done”,
  _գնացած<b>լինեմ</b>&nbsp;_ “he will be done”,
  _գնալիս<b>լինեմ</b>&nbsp;_ “he was done”,
  _գնալու<b>լինել</b>&nbsp;_ “he is done”,
  _գնացած<b>լինել</b>&nbsp;_ “he will be done”,
  _գնալիս<b>լինել</b>&nbsp;_ “he was done”.

Note, that in Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended
to location-existentials (_Նա տանն <b>է (լինում)</b>։&nbsp;_ “He <b>is</b> at home.”) Hence almost all occurrences of _եմ&nbsp;_ and _լինեմ (լինել)&nbsp;_ should be now tagged `AUX`.
Pure existentials _կամ&nbsp;_ and _ունեմ&nbsp;_ in combination with resultative participle (_Նա հագած <b>ուներ</b> թեթև զգեստ։_ “He <b>had</b> a light coat dressed.”) are also tagged `AUX`. Non-auxiliary _být,_ which should be tagged `VERB`.
Only pure existentials without location (_Այն <b>եղել</b> է ու </b>կա</b> որպես հուշ։_ “It <b>was</b> and <b>is</b> as a memory.”)
have a non-auxiliary _լինել&nbsp;_ and _կամ&nbsp;_ which should be tagged `VERB`.



have also auxiliary _být,_ which should be tagged `VERB`.

&nbsp;

In UD v1, where copulas were not tagged `AUX`, many instances of _být_ were tagged `VERB`.
In UD v2, copulas are tagged `AUX` and the definition of copula sentences has been extended
to location-existentials (_V&nbsp;Praze <b>je</b> nové divadlo._ “There <b>is</b> a new theatre in Prague.”)
Hence almost all occurrences of _být_ should be now tagged `AUX`.
Only pure existentials without location (_Vůle <b>je</b> a vždycky <b>byla</b>._ “There <b>is</b> and always <b>was</b> the will.”)
have a non-auxiliary _být,_ which should be tagged `VERB`.


### Modal verbs are not auxiliaries

Armenian modal verbs are not considered auxiliary and they are tagged `VERB`. Their behavior is only slightly different from other content verbs.
