---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb'
---

In English, `VerbForm` is a feature of [verbs](en-pos/VERB).

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](Mood), it is finite. English verbs with the PTB tag `VBZ`, `VBD` or `VBP` and modals with the PTB tag `MD` have this feature. Further, verbs with the PTB tag `VB` have this feature if they don't have an auxiliary or modal verb attached to it. 

#### Examples:

* _I <b>do</b>, she <b>has</b>_
* _<b>Read</b> the book!_

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs in many languages. Infinitives may be used together with auxiliaries to form periphrastic [tenses](Tense) (e.g. future tense _I will <b>sit</b> in a plane_), they appear as arguments of modal verbs etc. English verbs with the PTB tag `VB` have this feature if they have an auxiliary or modal verb or the inifinitval _to_ attached to it. 

#### Examples:

* _I have to <b>leave</b>_.

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form that shares properties of verbs and adjectives. It is used to form various periphrastic verb forms such as complex tenses and passives. In English, all words with the PTB tag `VBD` have this feature. Further, words with the PTB tag `VBG` can also have this feature if they are preceded by an inflection of _to be_.

#### Examples:

* _He could have <b>been prepared</b> if he had forseen it_.
* _I will be <b>driving</b> home_.


### <a name="Ger">`Ger`</a>: gerund

Gerund is a non-finite verb form that shares properties of verbs and nouns. In English, all words with the PTB tag `VBG` have this feature if they are not preceded by an inflection of _to be_.

#### Examples:

* _I look forward to <b>seeing</b> you._ 
* _She turns a blind eye to my <b>being</b> late._

<!-- Interlanguage links updated Čt lis 12 09:43:07 CET 2020 -->
