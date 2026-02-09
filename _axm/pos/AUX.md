---
layout: postag
title: 'AUX'
shortdef: 'auxiliary verb'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "axm/pos/AUX.html"
udver: '2'
---

### Definition

There are several auxiliary verbs in Middle Armenian: _եմ/em_ “be”, and its variant (with separate lemma) _լինիմ (լինիլ)/linim (linil)_ (with its different spellings _լնիլ/lnil, լինենալ/linenal,լնալ/lnal_) “be repeatedly / habitually”, _կամ/kam_ “be, exist”, _ունիմ/ownim_ “have”, _պիտի/piti_ “to by necessary, useful”, and negative copula _ոչ_/oč “not”.

They can be divided into:

- tense auxiliary, used to form compound tenses represented by _եմ/em_ “be” (with its present/past paradigms). It accompanies the lexical verb of a verb phrase and expresses grammatical distinctions not carried by the lexical verb;
- aspectual auxiliary, used to form so-called “secondary compound tenses” represented by _լինիմ/linim_ “be repeatedly / habitually”, _կամ/kam_ “be, exist”, _ունիմ/ownim_ “have”;
- mood auxiliary, used to form periphrastic necessitative mood by _պիտի_ “to by necessary, useful”.


### Examples

- Future and future-in-the-past tensces. Finite present and imperfect forms of _եմ_ and _էի_ are used with future participles of the lexical verbs to form  (present-)future and future-in-the-past tenses. The auxiliaries express aspect, person, number mood and tense (`Tense=Pres` and `Tense=Imp` accordingly), participles express aspect and voice:
_խօսելու <b>եմ</b>_ “I shall speak”,
_խօսելու <b>էի</b>_ “I would (intended to) speak”).

- Present perfect and past perfect tenses. Finite present and imperfect forms of _եմ_ and _էի_ are used with perfect and resultative participals to form  
_բերել <b>է</b>_ “he/she has brought”,
_բերել <b>էր</b>_ “he/she had brought”,
_գնացած <b>եմ</b>_ “I have gone” 
_գնացած <b>էի</b>_ “I had gone”

- Perfect / habitual aspect. The finite form of _լինիմ_ (in various tenses and moods or in the infinitive of _լինիլ/linil_ (_լնիլ/lnil, լինենալ/linenal,լնալ/lnal_)) is combined with processual, resultative and future participles of the lexical verb տօ ֆօռմ “secondary compound tenses”. The auxiliary expresses aspect, person, number, mood, tense and aspect, participles expresse aspect and voice:
  _գնալու <b>լինիմ</b>&nbsp;_ “(If / when) I intent to go.`Sub`”,
  _արգելած <b>լինի</b>_ “it is ('will be/should be) forbidden.`Sub`”,
  _կանգնած <b>լինիս</b>_ “(If / where) you stand.`Sub`”
  _գնալիս <b>լինեմ</b>&nbsp;_ “(If / when) I will be going.`Sub`”,
  _գնալու <b>լինել</b>&nbsp;_ “to intend to go, to be going”,
  _գնացած <b>լինել</b>&nbsp;_ “to be gone”,
  _գնալիս <b>լինել</b>&nbsp;_ “to be in the process of going”.

- Necessitative mood. The mood particle _<b>պիտի</b>_ (with its variant _պիտ/pit_, _տի/ti_) “(it is) necessary” is combined with subjunctive finite form of lexical verb. The auxiliary expresses mood.
_<b>պիտի</b> փախչիմ_ “I <b>must</b> go home”,
_<b>պիտ</b> ըմպէիր_ “you <b>should have</b> drunk”.

Note, that in Middle Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended to location-existentials (_Նա տանն <b>է</b>։ / Նա տանն <b>է լինում</b>։&nbsp;_ “He <b>is</b> at home.”) Hence almost all occurrences of _եմ&nbsp;_ and _լինել (լինեմ)&nbsp;_ should be now tagged `AUX`.
Only pure existentials without location (_Այն <b>եղել</b> է ու <b>կա</b> որպես հուշ։&nbsp;_ “It <b>has been</b> and <b>is</b> as a memory.”) have a non-auxiliary _լինել&nbsp;_ and _կամ&nbsp;_ which should be tagged `VERB`.

### Modal verbs are not auxiliaries

Armenian modal verbs are not considered auxiliary and they are tagged `VERB`. Their behavior is only slightly different from other content verbs.

### Constructions with _կամ&nbsp;_ and _ունեմ&nbsp;_ and resultative participle

Note, that finite form of existentials _կամ&nbsp;_ “be, exist” and _ունեմ&nbsp;_ “have” in combination with resultative participle (_Նա հագած <b>ուներ</b> թեթև վերարկու։_ “He <b>had</b> a light coat dressed.” or _Երեկվանից ոչ մի տող գրած <b>չկամ</b>։_ “I <b>do not have</b> a single line written since yesterday.” (lit: “I <b>do not exist</b> written no any row since yesterday.”) are tagged `AUX` (these so-called “experiential forms”, mainly in negativ or interrogative constructions, are analyzed as auxiliary in the Armenian grammar).
<!-- Interlanguage links updated St 12. listopadu 2025, 09:19:46 CET -->
