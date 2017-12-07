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

The only truly auxiliary verb in Armenian is _եմ&nbsp;_ “be”,
and its variants (with separate lemma) _լինեմ (լինել)&nbsp;_ “be repeatedly / habitually” and _կամ&nbsp;_ “be, exist”.
It accompanies the lexical verb of a verb phrase and expresses
grammatical distinctions not carried by the lexical verb.

Armenian auxiliary verbs can be divided into:

- tense auxiliaries, used to form compound tenses represented by _եմ&nbsp;_ and _էի&nbsp;_ “be”;
- aspectual auxiliaries, used to form so-called “secondary compound tenses” represented by _լինեմ (լինել)&nbsp;_ “be repeatedly / habitually”,
- voice auxiliary, used to form periphrastic causative represented by _տալ&nbsp;_ “cause / make someone to perform action”.

### Examples

- Present tense. Finite present form of _եմ&nbsp;_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses person, number, mood and tense, participles expresse tense / aspect and voice:
  _վազում <b>եմ</b>&nbsp;_ “I run / I am running”,
  _վազում <b>ես</b>&nbsp;_ “you run / you are running”,
  _կանգնած <b>են</b>&nbsp;_ “they are standing”.
  Note that a limited set of verbs can form present morphologically, without the auxiliary.

- Imperfect tense. Finite imperfect form of _էի&nbsp;_ is combined with imperfective, perfect and resultative participles of the lexical verb. The auxiliary expresses person, number, mood and tense, participles expresse tense / aspect and voice:
  _վազում <b>էի</b>&nbsp;_ “I was running”,
  _վազել <b>էիր</b>&nbsp;_ “you were running”,
  _կանգնած <b>էին</b>&nbsp;_ “they were standing”.

Note, that fintie present and imperfect forms of _եմ&nbsp;_ and _էի&nbsp;_ are also used with the perfect and future participles of the lexical verbs to form periphrastic present perfect (e.g. _վազել <b>եմ</b>&nbsp;_ “I have run”), (present-)future (e.g. _վազելու <b>եմ</b>&nbsp;_ “I shall run”) and future-in-the-past (_վազելու <b>էի</b>&nbsp;_ “I would (intended to) run”). The auxiliaries express person, number mood and tense (`Tense=Pres` and `Tense=Imp` accordingly), participles express tense / aspect and voice.

- Durative / habitual aspect. The finite form of _լինեմ&nbsp;_ (in various tenses and moods or in the infinitive _լինել&nbsp;_) is combined with processual, resultative and future participles of the lexical verb. The auxiliary expresses person, number, mood, tense and aspect, participles expresse tense / aspect and voice:
  _գնալու <b>լինեմ</b>&nbsp;_ “(If / when) I intent to go.`Sub`”,
  _գնացած <b>լինեմ</b>&nbsp;_ “(If / when) I will be gone.`Sub`”,
  _գնալիս <b>լինեմ</b>&nbsp;_ “(If / when) I will be going.`Sub`”,
  _գնալու <b>լինել</b>&nbsp;_ “to intend to go, to be going”,
  _գնացած <b>լինել</b>&nbsp;_ “to be gone”,
  _գնալիս <b>լինել</b>&nbsp;_ “to be in the process of going”.

- Causative voice. The finite form of _տալ&nbsp;_ (in various tenses and moods) is combined with infinitve of the content verb. The auxiliary expresses person, number, tense and mood. The auxiliary will have `Voice=Cau`. There will be also voice information at the infinitive:
  _հասկանալ_.`Act` _<b>տալ</b>&nbsp;_.`Cau` “lit: to <b>make</b> somebody understand”,
  _<b>հասկացնել</b>&nbsp;_.`Cau` “lit: to <b>make</b> somebody understand” (morphological causative),
  _<b>հասկացնել</b>_.`Cau` _<b>տալ</b>&nbsp;_.`Cau` “lit: to <b>make</b> someone <b>make</b> someone understand”.

Note, that in Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended
to location-existentials (_Նա տանն <b>է</b>։ / Նա տանն է <b>լինում</b>։&nbsp;_ “He <b>is</b> at home.”) Hence almost all occurrences of _եմ&nbsp;_ and _լինեմ (լինել)&nbsp;_ should be now tagged `AUX`.
Only pure existentials without location (_Այն <b>եղել</b> է ու </b>կա</b> որպես հուշ։&nbsp;_ “It <b>has been</b> and <b>is</b> as a memory.”) have a non-auxiliary _լինել&nbsp;_ and _կամ&nbsp;_ which should be tagged `VERB`.

Note, that finite form of existentials _կամ&nbsp;_ and _ունեմ&nbsp;_ in combination with resultative participle (_Նա հագած <b>ուներ</b> թեթև վերարկու։_ “He <b>had</b> a light coat dressed.” or _Երեկվանից ոչ մի տող գրած <b>չկամ</b>։_ “I <b>do not have</b> a single line written since yesterday.” (lit: “I <b>do not exist</b> written a single row since yesterday.”) are also tagged `AUX` (so-called “experiential forms”, mainly negativ or interrogative).

### Modal verbs are not auxiliaries

Armenian modal verbs are not considered auxiliaries and they are tagged `VERB`. Their behavior is only slightly different from other content verbs.
