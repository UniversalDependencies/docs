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

The The most commonly used auxiliary verb in Armenian is _եմ_/_em_ “be”, and its variant (with separate lemma) _լինեմ (լինել)_/_linem_ “be repeatedly / habitually”.
It accompanies the lexical verb of a verb phrase and expresses grammatical distinctions not carried by the lexical verb.

Armenian auxiliary verbs can be divided into:

- tense auxiliary, used to form compound tenses represented by _եմ_/_em_ and _էի_/_ēi_ “be”;
- aspectual auxiliary, used to form so-called “secondary compound tenses” represented by _լինեմ (լինել)_/_linem (linel)_ “be repeatedly / habitually”,
- voice auxiliary, used to form periphrastic causatives represented by _տալ_/_tal_ “cause / make someone perform action” (lit. give),
- mood auxiliary, used to form periphrastic necessitative mood by _պիտի_/_piti_ “to be necessary, useful” or _պետք է_/_petk’ ē_ lit. is needed.

### Examples

- Present tense. Finite present form of _եմ_/_em_ is combined with imperfective and resultative participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
 * _վազում <b>եմ</b>_/_vazowm <b>em</b>_ “I run / I am running”,
 * _կանգնած <b>են</b>_/_kangnaç <b>en</b>_ “they are standing”.

Note that a limited set of verbs can form present morphologically, without the auxiliary.

- Imperfect tense. Finite imperfect form of _էի_/_ēi_ is combined with imperfective, perfect and resultative participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
 * _վազում <b>էի</b>_/_vazowm <b>ēi</b>_ “I was running”,
 * _վազել <b>էիր</b>_/_vazel <b>ēir</b>_ “you had run”,
 * _կանգնած <b>էին</b>_/_kangnaç <b>ēin</b>_ “they were standing”.

Note, that finite present and imperfect forms of _եմ_/_em_ and _էի_/_ēi_ are also used with the perfect and future participles of the lexical verbs to form periphrastic present perfect (e.g. _վազել <b>եմ</b>_/_vazel <b>em</b>_ “I have run”), (present-)future (e.g. _վազելու <b>եմ</b>_/_vazelow em_ “I shall run”) and future-in-the-past (_վազելու <b>էի</b>_/_vazelow ēi_  “I would (intended to) run”). The auxiliaries express aspect, person, number, mood and tense (`Tense=Pres` and `Tense=Imp` accordingly), participles express aspect and voice.

- Durative / habitual aspect. The finite form of _լինեմ_/_linem_ (in various tenses and moods or in the infinitive _լինել_/_linel_) is combined with processual, resultative and future participles of the lexical verb. The auxiliary expresses aspect, person, number, mood and tense, participles express aspect and voice:
  _գնալու <b>լինեմ</b>_/_gnalow <b>linem</b>_ “(If / when) I intend to go.`Sub`”,
  _գնացած <b>լինեմ</b>_/_gnac’aç <b>linem</b>_ “(If / when) I will be gone.`Sub`”,
  _գնալիս <b>լինեմ</b>_/_gnalis <b>linem</b>_ “(If / when) I will be going.`Sub`”,
  _գնալու <b>լինել</b>_/_gnalow <b>linel</b>_ “to intend to go, to be going”,
  _գնացած <b>լինել</b>_/_gnac’aç <b>linel</b>_ “to be gone”,
  _գնալիս <b>լինել</b>_/_gnalis <b>linel</b>_ “to be in the process of going”.

- Causative voice. The finite form of _տալ_/_tal_ (in various tenses and moods) is combined with the infinitive of the content verb. The auxiliary expresses aspect, person, number, tense and mood. Only the auxiliary is annotated with `Voice=Cau`; the infinitive retains its own voice annotation:
  _հասկանալ_ `Act` _<b>տալ</b>_.`Cau` “to <b>make</b> somebody understand”,
  _<b>հասկացնել</b>_ `Cau` “lit: to <b>make</b> somebody understand” (morphological causative),
  _<b>հասկացնել</b>_ `Cau` _<b>տալ</b>_ `Cau` “to <b>make</b> someone <b>make</b> someone understand”.

- Necessitative mood. The mood particle _<b>պիտի</b>_/_piti_ “to be necessary, useful” and the impersonal predicative _<b>պետք է</b>_/_petk’ ē_ lit. is needed, are combined with subjunctive finite form of lexical verb. The auxiliary expresses mood.
_<b>պիտի (պետք է)</b> գնա_/_<b>piti (petk’ ē)</b> gna_ “he/she <b>must</b> go home”,
_<b>պիտի (պետք է)</b> գնար_/_<b>piti (petk’ ē)</b> gnar_ “he/she <b>had</b> to go”.

Note, that in Armenian copulas are also tagged `AUX` and the definition of copula sentences has been extended to location-existentials (_Նա տանն <b>է</b> / Նա տանն <b>է լինում</b>_/_Na tann <b>ē</b> / Na tann <b>ē linowm</b>_ “He <b>is</b> at home.”) Hence almost all occurrences of _եմ_/_em_ and _լինել (լինեմ)_/_linel (linem)_ should be now tagged `AUX`.
Only pure existentials without location (_Այն <b>եղել</b> է ու <b>կա</b> որպես հուշ։_/_Ayn <b>eġel</b> ē ow <b>ka</b> orpes howš_ “It <b>has been</b> and <b>is</b> as a memory.”) have a non-auxiliary _լինել_/_linel_ and _կամ_/_kam_ which should be tagged `VERB`.

Since there is no generally accepted approach in Armenian grammar to the analysis of finite forms of the verb _լինել_/_linel_ “be” as either auxiliary or lexical verbs, the Armenian UD treebank adopts the following principle. The forms _եղավ_/_eġav_, _լինի_/_lini_, _լիներ_/_liner_, _կլինի_/_klini_, and _կլիներ_/_kliner_ are analyzed as lexical verbs whenever they occur with nominal predicates, and as auxiliaries only when they combine with participles.
In compound forms consisting of _եմ_/_em_ “be” and _լինել_/_linel_ used with nominal predicates, both components are analyzed as auxiliaries: _եմ_ receives the relation `cop`, while _լինել_ receives the relation  `aux`.

### Modal verbs are not auxiliaries

Armenian modal verbs are not considered auxiliary and they are tagged `VERB`. Their behavior is only slightly different from other content verbs.

### Constructions with _կամ&nbsp;_ and _ունեմ&nbsp;_ and resultative participle

Finite forms of the existential verbs _կամ_/_kam_ “be, exist” and _ունեմ_/_ownem_ “have” when combined with a resultative participle are tagged `AUX`.
* _Նա հագած <b>ուներ</b> թեթև վերարկու։_/_Na hagaç <b>owner</b> t’et’ew verarkow_ “He <b>had</b> a light coat dressed.”
* _Երեկվանից ոչ մի տող գրած <b>չկամ</b>։_/_Erekvanic’ oč mi toġ graç <b>čkam</b>_ “I <b>haven't written</b> a single line since yesterday.” (lit. “I <b>do not exist</b> written not any line since yesterday.”)

Although _կամ_/_kam_ and _ունեմ_/_ownem_ are not traditionally classified as auxiliary verbs in Armenian grammar, they are analyzed here as auxiliaries when used in these resultative or experiential (mainly in negative or interrogative) constructions.

Note that the verb _ունեմ_/_ownem_, combined with the infinitive of a limited set of coordinate compounds, forms the habitual present and the past imperfect֊
* _Նրանք իրար տուն գնալ-գալ ունեն։_/_Nrank’ irar town gnal-gal ownen_ “They are in the habit of visiting each other's homes.” (lit. They have going-and-coming to each other's homes);
* _Առաջ իրար հետ առնել-տալ ունեին։_/_Aṙaǰ irar het aṙnel-tal ownein._ “They used to have dealings with each other.” (lit. They used to give-and-take with each other).
<!-- Interlanguage links updated St 6. května 2026, 20:41:56 CEST -->
