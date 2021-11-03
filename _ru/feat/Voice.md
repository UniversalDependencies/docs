---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

Voice is a feature of verbs that helps map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and pacient.

### <a name="Act">`Act`</a>: active voice

Prototypically, the subject of the verb is the doer of the action (agent), the object
is affected by the action (patient).

All active participles (in present and past form) are tagged `Voice=Act`.
By default, the finite forms, ininitives and gerunds of non-reflexive verbs are also labeled `Voice=Act`, except for the cases when they are labeled `Voice=Pass` and `Voice=Mid`, see below.

#### Examples

* _мы <b>атаковали</b> врага.&nbsp;_ “We <b>attacked</b> the enemy”

### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer
(agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed;.

The passive participles (in present and past form) are tagged `Voice=Pass`. The finite non-reflexive forms are labeled `Voice=Pass` in the passive construction; in this case, the form is marked with -sja (but the lemma is tagged as non-reflexive).

#### Examples

* _Мы были <b>атакованы</b> врагом.&nbsp;_ “We were <b>attacked</b> by the enemy”
* _Разработки лекарства <b>ведутся</b> несколькими международными компаниями.&nbsp;_ “Drug development is <b>conducted</b> by several international companies”

### <a name="Mid">`Mid`</a>: middle voice

Between active and passive, needed for the reflexive verbs (in all forms except active participle).

#### Examples

* _Я <b>занялся</b> музыкой.&nbsp;_ “I <b>took up.Refl</b> music”

#### References

Anna Siewierska. 2013. Passive Constructions. In: Dryer, Matthew S. & Haspelmath, Martin (eds.)
The World Atlas of Language Structures Online. Leipzig: Max Planck Institute for Evolutionary Anthropology.
(http://wals.info/chapter/107)
<!-- Interlanguage links updated St lis 3 20:58:32 CET 2021 -->
