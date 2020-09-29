---
layout: feature
title: 'Tense'
shortdef: 'tense'
---

Tense is an inflectional feature of [nouns](NOUN) and [auxiliaries](AUX) that specifies the time when the action took / takes / will take place, in relation to the current moment or to another action in the utterance. In Slovenian, only `Present` tense and `Future` tense can be expressed morphologically, while past tense is formed syntactically, by a combination of a present auxiliary verb _biti_ "to be" and past participle (l-participle), e.g. _sem šel_ "I went". 

### `Pres`: present tense

The present tense denotes actions that are happening right now or that usually happen.

#### Examples

* _<b>vem</b>_ "I know", _<b>veš</b>_ "you know", _<b>ve</b>_ "he/she/it knows" etc.
* _<b>Študiram</b> jezike._ "I study languages."

### `Fut`: future tense

The future tense denotes actions that will happen after the current moment. Simmilarly to past tense, future tense for most Slovenian verbs is formed by a combination of future auxiliary verb _biti_ "to be " and l-participle (_bom hodil_ "I will walk"). Thus, the `Tense=Fut` feature is only to _biti_ that can either be used as a content or auxiliary verb.

Examples:

* _<b>bom</b>_ "I will", _<b>boš</b>_ "you will", _<b>bo</b>_ "he/she/it will" etc.
* _Sestanek <b>bo</b> jutri._ "The meeting will be held tomorrow".
* _Vrnila se <b>bo</b> čez en teden._ "She will come back in a week."

### Conversion from JOS

All verbs with VForm=present are converted to UD `Tense=Pres` and all verbs with VForm=future are converted to UD `Ťense=Fut`. We do not assign tense to other verb forms, such as participle, infinitive, supine, conditional and imperative. 

<!-- Interlanguage links updated Út zář 29 20:31:39 CEST 2020 -->
