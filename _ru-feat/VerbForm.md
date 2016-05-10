---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
---

Even though the name of the feature seems to suggest that it is used
exclusively with [verbs](cs-pos/VERB), it is not the case.
The `Part` value can be used also with [adjectives](cs-pos/ADJ).
It distinguishes participles from other verb forms,
and participial adjectives from other adjectives.

### `Fin`: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite.
In Czech this applies to indicative and imperative forms,
and to the special conditional forms of the [auxiliary verb](cs-pos/AUX) _být_.

#### Examples

- _nesu, neseš, nese, neseme, nesete, nesou_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _nes, nesme, neste_ &nbsp;“carry” (imperative in different persons and numbers)
- _jsem, jsi, je, jsme, jste, jsou_ &nbsp;“I am, you are, he/she/it is, we are, you are, they are”
- _budu, budeš, bude, budeme, budete, budou_ &nbsp;“I will be, you will be, he/she/it will be, we will be, you will be, they will be”
- _bych, bys, by, bychom, byste, by_ &nbsp;“I would, you would, he/she/it would, we would, you would, they would”
- _buď, buďme, buďte_ &nbsp;“be” (imperative in different persons and numbers)

### `Inf`: infinitive

Infinitive is the citation form of verbs.
It is also used with the auxiliary _být&nbsp;_ to form periphrastic future tense,
and it appears as the argument of modal and other verbs.

#### Examples

- _nést_ &nbsp;“to carry”
- _být_ &nbsp;“to be”

### `Part`: participle

Participle is a non-finite verb form that shares properties of verbs
and adjectives. Czech has two types of participles:

- The past participle (also called active participle or l-participle)
  is used to form the past tense, and the conditional mood in present or past tense.
- The passive participle
  is used to form the passive voice (in any tense or mood).

Participles inflect for [Gender]() and [Number]() but not for [Person]().

#### Examples

- _nesl, nesla, neslo, nesli, nesly_ &nbsp;“carried” (past participle in different genders and numbers)
- _nesen, nesena, neseno, neseni, neseny_ &nbsp;“carried” (passive participle in different genders and numbers)
- _byl, byla, bylo, byli, byly_ &nbsp;“was/been” (past participle in different genders and numbers)

### `Trans`: transgressive

The transgressive, also called adverbial participle, is a non-finite
verb form that shares properties of verbs and adverbs.

Imperfective verbs form present transgressive, meaning “while doing”.

Perfective verbs form past transgressive, meaning “having done”.

#### Examples

- _nesa, nesouc, nesouce_ &nbsp;“carrying” (present transgressive in different genders and numbers)
- _přines, přinesši, přinesše_ &nbsp;“having brought” (past transgressive in different genders and numbers)
- _jsa, jsouc, jsouce_ &nbsp;“being” (present transgressive in different genders and numbers)
- _byv, byvši, byvše_ &nbsp;“having been” (past transgressive in different genders and numbers)
- _zírali na mne, pevně <b>svírajíce</b> své zbraně&nbsp;_ “they
  stared at me <b>while gripping</b> their guns firmly”
- _<b>udělavši</b> večeři, zavolala rodinu ke stolu&nbsp;_ “<b>having
  prepared</b> the dinner, she called her family to the table”
