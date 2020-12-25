---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Cau">Cau</a></td>
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Trans">Trans</a></td>
</tr>
</table>

Voice is a morphological feature of [verbs](u-pos/VERB), describing alternations in valency and
mapping between syntactic arguments and semantic roles. In Amharic UD, voice is treated as
derivational morphology, meaning that different voice forms of one verb stem have different
lemmas; `Voice` is thus a lexical feature.

The basic active voice is currently not annotated: instead of having `Voice=Act`, the verb omits
the `Voice` feature completely.

<!-- We have to comment the heading out if the value is not used. -->
<!-- ### <a name="Act">`Act`</a>: active voice -->

#### Examples

* <b>መጣች</b> ። / _<b>mäţačə</b> ._ “She came.”

### <a name="Trans">`Trans`</a>: transitive causative voice

An originally intransitive verb with a causative prefix becomes transitive. The morphology is
different from how causatives are formed from transitive verbs, therefore we use a separate,
language-specific value of `Voice`. Verbs that are naturally transitive (without the causative
prefix) are not annotated with `Voice=Trans`.

#### Examples

* አልማዝ ወተት <b>አመጣች</b> ። / _'äləmazə wätätə <b>'ämäţačə</b> ._ “Elmaz brought milk.” (lit. brought = caused to come)

### <a name="Cau">`Cau`</a>: causative voice

An originally transitive verb with a causative prefix becomes ditransitive. The morphology is
different from how causatives are formed from intransitive verbs, therefore we use different
`Voice` values for the two types. Even transitive verbs that have been derived as causatives
from intransitive verbs can be further causativized.

#### Examples

* ከበደን እንጀራ <b>አስበላሁት</b> ። / _käbädänə 'ənədžära <b>'äsəbälahutə</b> ._ “I made Kebede eat bread.” (lit. Kebede-ACC bread CAU-eat-I-him)
* አልማዝ ወተት <b>አስመጣችኝ</b> ። / _'äləmazə wätätə <b>'äsəmäţačəňə</b> ._ “Elmaz made me bring milk.” (lit. Elmaz milk CAU-come-she-me)

### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer
(agent) is either unexpressed or it appears as an oblique dependent of the verb.
Some passive verbs are semantically reflexive, e.g., _taţţäbä_ “he washed himself”
(from _aţţäbä_ “he washed”).

#### Examples

* በዝናቡ ምክንያት ጨዋታው <b>ተላለፈ</b> ። / _bäzənabu məkənəjatə ćäwatawə <b>tälaläfä</b> ._
  “Due to the rain, the game was postponed.” (lit. in-the-rain due-to the-game PASS-postponed-he)

### <a name="Rcp">`Rcp`</a>: reciprocal voice

In a plural subject, all members are doers and undergoers, acting upon each other.

#### Examples

* እህትና ወንድም <b>ተደባደቡ</b> ። / _'əhətəna wänədəmə <b>tädäbadäbu</b> ._
  “Sister and brother fought.” (lit. sister-and brother RCP-fought-they)
* አንበሳዎቹ <b>ተገዳደሉ</b> ። / _'änəbäsawoču <b>tägädadälu</b> ._
  “The lions killed each other.” (lit. the-lions RCP-killed-they)

<!-- Interlanguage links updated Čt lis 12 09:43:08 CET 2020 -->
