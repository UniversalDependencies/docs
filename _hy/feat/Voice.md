---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Act">Act</a></td>
  <td><a href="#Cau">Cau</a></td>
  <td><a href="#Mid">Mid</a></td>
  <td><a href="#Pass">Pass</a></td>
</tr>
</table>

Voice is a feature of verbs that helps map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and patient.

### <a name="Act">`Act`</a>: active voice

The subject of the verb is the doer of the action (agent), the object
is affected by the action (patient).

All finite verb forms and the active participles are tagged `Voice=Act`.

#### Examples

* _<b>Napadli</b> jsme nepřítele.&nbsp;_ “We <b>attacked</b> the enemy”
  (the active participle _napadli&nbsp;_ can be used to form either past
  tense or conditional mood; here it forms the past tense.)

### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer
(agent) is either unexpressed or it appears as an object of the verb.

Only the passive participle is tagged `Voice=Pass`.

#### Examples

* _Jsme <b>napadeni</b> nepřítelem.&nbsp;_ “We are <b>attacked</b> by
  the enemy” (the passive participle _napadeni&nbsp;_ is used to form
  passive in all tenses; here it forms the present passive.)

### <a name="Mid">`Mid`</a>: middle voice

Between active and passive, needed for the reflexive verbs (in all forms except active participle).

#### Examples

* _Я <b>занялся</b> музыкой.&nbsp;_ “I <b>took up.Refl</b> music” 

### <a name="Cau">`Cau`</a>: causative voice

Note, that in Armenian this is a feature of verbs.

Not to be caused with causative case of nouns in some languages.

In causative constructions the subject is the entity “causing” the action. It generally translate to English as ‘cause/make/have/let/allow’ someone to perform action described by the main verb. Many (lexicalized) verbs that have unrelated roots in other languages are formed are related by the causative suffix in Turkish, e.g., öl- “die” and öl-dür “kill” (to cause someone to die). Causative suffix is quite productive. Multiple causative suffixes can be attached to a verb, and the number of causative suffixes are theoretically unbounded. In practice, however, the cases where more than two causative suffixes attached to a verb is rather rare. Often, two or more causative suffixes are used for emphasis and do not express multiple levels of causation.

(TODO: multiple causatives need a solution. See this issue for details.)

Examples

Evi boya-t-tık “We had the house painted”
Evi boya-t-tır-tık “We had someone to have the house painted”
