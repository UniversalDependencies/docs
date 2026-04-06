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

Middle Armenian has the following auxiliary verbs: _եմ/em_ “to be”, its variant (with separate lemma) _լինիմ/linim_ “be repeatedly / habitually”, the existentials _կամ/kam_ “be, exist” and _ունիմ/ownim_ “have”, the mood auxiliaries _կու (կ, կոյ)/kow (k, koy)_ “be, will”,  _պիտի/piti_ “to be necessary, useful”, the negated auxiliaries _չի/či_, _ոչ/oč_ “don't”.
The main auxiliary verb _եմ/em_. It accompanies the lexical verb of a verb phrase and expresses grammatical distinctions not carried by the lexical verb.

Armenian auxiliary verbs can be divided into:

- tense auxiliary, used to form compound tenses represented by _եմ_ and _էի_ “be”
- aspectual auxiliary, used to form so-called “secondary compound tenses” represented by _լինիմ/linim_ “be repeatedly / habitually”, _կամ/kam_ “be, exist” and _ունիմ/ownim_ “have”,
- mood auxiliary, used to form periphrastic necessitative mood by  _կու/kow_ “be, will”, _պիտի_ “to be necessary, useful” or its reduced forms _<b>պիտ/pit, տի</b>/ti_.


### Examples

- Present tense. Finite present form of _եմ_ is combined with future, perfect and resultative participles of lexical verbs. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
  * _գրելոյ (գրելու) <b>եմ</b>/greloy (grelow) em_ “I shall write”,
  * _խօսել(ր) <b>եմ</b>/xòsel(r) em_ “I have spoken”,
  * _գնացած <b>եմ</b>/gnac’aç em_ “I am gone”.
 
 Note that a limited set of verbs can form present morphologically, without the auxiliary.

- Imperfect tense. Finite imperfect form of _էի_ is combined with future, perfect and resultative participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
  * _գրելոյ (գրելու) <b>էի</b>/greloy (grelow) ēi_ “I should write”,
  * _խօսել(ր) <b>էի</b>/xòsel(r) ēi_ “I had spoken”,
  * _գնացած <b>էի<b>/gnac’aç ēi_ “I was gone”.


- Durative / habitual aspect. The finite form of _լինիմ/linim_ (in various tenses and moods) is combined with, perfect and resultative participles of the lexical verb. The auxiliary expresses aspect, person, number, mood, tense and aspect, participles express aspect and voice:
  * _Եւ թէ որդիքն մեռել <b>լինին</b> թագաւորին/Ew t’ē ordik’n meṙel linin t’agaworin_ “And if the king's sons have died...”,
  * _եղկ ջուր, յոր եփած <b>լինի</b> չոր մանուշակն եւ վարդ/eġk ǰowr, yor ep’aç lini čor manowšakn ew vard_ “lukewarm water, in which dried violet and rose have been boiled”,
  * _Ոմանք չեն արժանի ի յիւր տեսոյն, <b>կան</b> հալածել/Omank’ čen aržani i yiwr tesoyn, kan halaçel_ “Some are not worthy of his sight; they remain persecuted”,
  * _զամենայն անդամս պինտ <b>ունին</b> բռնած/zamenayn andams pint ownin bṙnaç_ “hold all the limbs firmly gripped”.


- Conditional mood. The mood particle  _կու (կ, կոյ)/kow (k, koy)_ “be, will”, is combined with subjunctive (present and imperfect tense forms of indicative mood of Classical Armenian) finite form of lexical verb. The auxiliary expresses mood.
  * _<b>կու</b> երթանք/kow ert’ank’_ “we <b>will</b> go/we <b>go</b>”,
  * _<b>կ</b>ելանեմ</b>/kelanem_ “<b>I will come out/I come out</b>”,
  * _<b>կոյ</b> մտանեմ</b>/koy mtanem_ “<b>I will enter/I enter</b>”,

- Necessitative mood. The mood particle _<b>պիտի</b>_ “to be necessary, useful” (or its reduced forms _<b>պիտ/pit, տի</b>/ti_) is combined with subjunctive finite form (present/imperfect tense forms of indicative mood in Classical Armenian) of lexical verb. The auxiliary expresses mood.
  * _ես <b>պիտի</b> փախչիմ/es piti p’axčim_ “I <b>must/will</b> flee”,
  * _<b>պիտ</b> ապաշխարէ/pit apašxarē_ “he/she must/will repent”,
  * _ինչ <b>տի</b> լինայ/inč ti linay_ “what <b>must/will</b> happen”.

Note, that in Middle Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended
to location-existentials (_Նա տանն <b>է</b>։ / Նա տանն <b>է լինում</b>։&nbsp;_ “He <b>is</b> at home.”) Hence almost all occurrences of _եմ&nbsp;_ and _լինել (լինեմ)&nbsp;_ should be now tagged `AUX`.
Only pure existentials without location (_Այն <b>եղել</b> է ու <b>կա</b> որպես հուշ։&nbsp;_ “It <b>has been</b> and <b>is</b> as a memory.”) have a non-auxiliary _լինել&nbsp;_ and _կամ&nbsp;_ which should be tagged `VERB`.

### Modal verbs are not auxiliaries

Armenian modal verbs are not considered auxiliary and they are tagged `VERB`. Their behavior is only slightly different from other content verbs.

### Constructions with _կամ&nbsp;_ and _ունեմ&nbsp;_ and resultative participle

Note, that finite form of existentials _կամ&nbsp;_ “be, exist” and _ունեմ&nbsp;_ “have” in combination with resultative participle (_Նա հագած <b>ուներ</b> թեթև վերարկու։_ “He <b>had</b> a light coat dressed.” or _Երեկվանից ոչ մի տող գրած <b>չկամ</b>։_ “I <b>do not have</b> a single line written since yesterday.” (lit: “I <b>do not exist</b> written no any row since yesterday.”) are tagged `AUX` (these so-called “experiential forms”, mainly in negativ or interrogative constructions, are analyzed as auxiliary in the Armenian grammar).
<!-- Interlanguage links updated St 12. listopadu 2025, 09:19:46 CET -->
