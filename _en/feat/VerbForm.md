---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb'
udver: '2'
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

Participle is a non-finite verb form that shares properties of verbs and adjectives. It is used to form various periphrastic verb forms such as complex tenses and passives. In English, all words with the PTB tag `VBD` have this feature. Further, words with the PTB tag `VBG` can also have this feature (along with [Tense]()`=Pres`) if they are used in the progressive construction (with an [aux]()), or otherwise occur in non-noun-like environments.[^1]

[^1]: The `VBG` policy was refined for the v2.14 release and implemented in GUM and EWT per the rules detailed [here](https://github.com/UniversalDependencies/UD_English-EWT/issues/305). (Coordination adds some complexity to the rules as it needs to be determined whether it is a noun-like coordination.)

#### Examples:

* _He could have <b>been prepared</b> if he had forseen it_.
* _I will be <b>driving</b> home_.
* _They are <b>being</b> nasty_.
* _Rumsfeld initially rejected the proposal, <b>saying</b> there were "no good targets" there._

### <a name="Ger">`Ger`</a>: gerund

Gerund is a non-finite verb form that shares properties of verbs and nouns. In English, the traditional grammar distinction between present participles and gerunds is not made in the Penn Treebank or more modern grammars, which treat *-ing* forms as a single inflection of the verb (CGEL calls it the "gerund-participial" form). UD approximates the traditional grammar distinction, subdividing words with the PTB tag `VBG`: they have this feature (with no [Tense]()) if they occur in noun-like environments and lack an [aux]() dependent.[^1]

Note that some forms derived from *-ing* verbs are tagged as [NOUN]()s; these do not receive verbal features.

#### Examples:

<!-- These are advcl so might actually be labeled as participles per our rules
* _I look forward to <b>seeing</b> you._
* _She turns a blind eye to my <b>being</b> late._
-->
* _I enjoyed <b>working</b> with you._
* _Buffett's usual justification for <b>keeping</b> most of his money_
* cf. _The opening of the store was delayed._: _opening_ is tagged as a [NOUN](), so it has no `VerbForm`

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:12 CET -->
