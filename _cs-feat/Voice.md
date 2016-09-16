---
layout: feature
title: 'Voice'
shortdef: 'voice'
---

Voice is a feature of verbs that helps map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and pacient.

### `Act`: active voice

The subject of the verb is the doer of the action (agent), the object
is affected by the action (pacient).

All finite verb forms and the active/past participles are tagged `Voice=Act`.

#### Examples

* _<b>Napadli</b> jsme nepřítele.&nbsp;_ “We <b>attacked</b> the enemy”
  (the active participle _napadli&nbsp;_ can be used to form either past
  tense or conditional mood; here it forms the past tense.)

### `Pass`: passive voice

The subject of the verb is affected by the action (patient). The doer
(agent) is either unexpressed or it appears as an object of the verb.

Only the passive participle is tagged `Voice=Pass`.

#### Examples

* _Jsme <b>napadeni</b> nepřítelem.&nbsp;_ “We are <b>attacked</b> by
  the enemy” (the passive participle _napadeni&nbsp;_ is used to form
  passive in all tenses; here it forms the present passive.)
