---
layout: postag
title: 'AUX_'
shortdef: 'auxiliary verb'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
udver: '2'
---

### Definition
The auxiliary verb accompanies the lexical verb of a verb phrase and expresses grammatical distinctions not carried by the lexical verb.
Middle Armenian has the following auxiliary verbs: _եմ/em_ “be”, _լինիմ (լինալ)/linim (linal)_ “be repeatedly / habitually”, _ունիմ/ownim_ “have”, _կամ/kam_ “exist”, _պիտի/piti_ “must/will”, _կու (կոյ, կ-)/kow (koy, k-)_ “do/will” and the negative auxiliaries _չի (չ-)/či (č-)_ “do/es not”, _ոչ/oč_ “do/es not”. The most commonly used auxiliary is _եմ/em_ with its conjugation paragigms in present and imperfect. 
Auxiliaries can be divided into:
- tense auxiliaries, used to form compound tenses represented by _եմ/em_ and _էի/ēi_ “be”;
- aspectual auxiliaries, used to form so-called “secondary compound tenses” represented by _լինիմ/linim, կամ/kam, ունիմ/ownim_ “be repeatedly / habitually”,
- mood auxiliary, used to form periphrastic indicative / conditional mood by _կու (կոյ, կ-)/kow (koy, k-)_ “do/will”, and necessitative mood by _պիտի/piti_ “to be necessary, useful”,
- negative auxiliaries used to negate verbs in the (older forms of the) present and imperfect tenses of the indicative and subjunctive moods, which share the same form. Note that negative auxiliaries are not the same as the negated forms of the auxiliaries _եմ/em_ and _էի/ēi_, which can take the bound morpheme of negation _չ-/č-_ and have the feature of [Polarity]().

### Examples

- Present tense. Finite present form of _եմ_ is combined with the resultative, past, perfect, future and in later stages also with the imperfective participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
  * _Ոչ <b>եմք մեռած</b>/Oč emk’ meṙaç_ “we are not dead”,
  * _<b>լոկցեալ է</b> ի թթու ջուր/lokc’eal ē i t’t’ow ǰowr_ “lit: he has bathed in sour water”
  * _<b>տաքցեր է</b>/tak’c’er ē_ “It has heated up”
  *  _խօսելոց <b>եմք</b>_ “we shall speak”
  * _Է՞ր <b>ես</b> ինձնէ <b>հեռանալիս</b>, սիրտս <b>է դողալիս</b>/Ēr es injnē heṙanalis, sirts ē doġalis_ “Why do you leave me? My heart is trembling”.

  Note that a limited set of verbs can form present morphologically, without the auxiliary.

- Imperfect tense. Finite imperfect form _էի_ is combined with  resultative, past, perfect and future of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
  * _անսիւն <b>շինած էր</b>_ “it was <b>built</b> without columns”,
  * _գրեալ էր ի մէջ թխտին/greal ēr i mēǰ t’xtin_ “It was written on the paper”,
  * _հնազանդել էր/hnazandel ēr_ “he had obeyed”,
  * _առնելոց <b>էր</b>&_ “he/she would (intended to) buy”.
 

- Durative / habitual aspect. The finite form of _լինիմ/linim_ “be repeatedly / habitually”_, _ունիմ/ownim_ “have”, _կամ/kam_ “exist”  (in various tenses and moods) are combined with resultative, perfect and past participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
   * _եղկ ջուր, յոր <b>եփած լինի</b> չոր մանուշակն եւ վարդ/eġk ǰowr, yor ep’aç lini čor manowšakn ew vard_ “Lukewarm water, in which dried violet and rose have been boiled”
   * _Եւ թէ որդիքն <b>մեռել լինին</b> թագաւորին/Ew t’ē ordik’n meṙel linin t’agaworin_ “And if the king's sons have died”
   * _զքաղաքն <b>առած ունէին</b>/zk’aġak’n aṙaç ownēin_ “They had captured the city”
   * _Ոմանք չեն արժանի ի յիւր տեսոյն, <b>կան հալածել</b>/Omank’ čen aržani i yiwr tesoyn, kan halaçel_ “Some are not worthy of his sight; they persist in persecuting”

 
- Indiactive / conditional mood. The mood particle _կու (կոյ, կ-)/kow (koy, k-)_ “do/will” is combined with the older the present and imperfect forms (present/imperfect subjunctive) of lexical verb to form the present/imperfect indicative or the present/imperfect conditional, which share the same form.
   * _Քաղցր խօսքով <b>կու ծիծաղիս</b>/K’aġc’r xòsk’ov kow çiçaġis_ “With sweet speech, you smile / you are smiling / you will smile”,
   * _<b>կ</b>խմէր/kxmēr_ “He used to drink / He was drinking / he would drink”.

  
- Necessitative mood. The mood particle _<b>պիտի</b>_ “to be necessary, useful” is combined with subjunctive finite form of lexical verb. The auxiliary expresses mood.
  * _Զիմ գըլուխս ու զարիւնըս վարձ <b>պիտի տամ</b>/Zim gëlowxs ow zariwnës varj piti tam_ “I must give my head and my blood as the price”,
  * _գիշերս ինչ <b>տի լինայ</b>_ “What will happen tonight?”.

Note, that in Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended
to location-existentials (_Նա տանն <b>է</b>։ / Նա տանն <b>է լինում</b>։&nbsp;_ “He <b>is</b> at home.”) Hence almost all occurrences of _եմ&nbsp;_ and _լինել (լինեմ)&nbsp;_ should be now tagged `AUX`.
Only pure existentials without location (_Այն <b>եղել</b> է ու <b>կա</b> որպես հուշ։&nbsp;_ “It <b>has been</b> and <b>is</b> as a memory.”) have a non-auxiliary _լինել&nbsp;_ and _կամ&nbsp;_ which should be tagged `VERB`.

### Modal verbs are not auxiliaries

Armenian modal verbs are not considered auxiliary and they are tagged `VERB`. Their behavior is only slightly different from other content verbs.

### Constructions with _կամ&nbsp;_ and _ունեմ&nbsp;_ and resultative participle

Note, that finite form of existentials _կամ&nbsp;_ “be, exist” and _ունեմ&nbsp;_ “have” in combination with resultative participle (_Նա հագած <b>ուներ</b> թեթև վերարկու։_ “He <b>had</b> a light coat dressed.” or _Երեկվանից ոչ մի տող գրած <b>չկամ</b>։_ “I <b>do not have</b> a single line written since yesterday.” (lit: “I <b>do not exist</b> written no any row since yesterday.”) are tagged `AUX` (these so-called “experiential forms”, mainly in negativ or interrogative constructions, are analyzed as auxiliary in the Armenian grammar).
<!-- Interlanguage links updated St 12. listopadu 2025, 09:19:46 CET -->
