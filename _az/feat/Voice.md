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
  <td><a href="#CauCau">CauCau</a></td>
  <td><a href="#CauPass">CauPass</a></td>
  <td><a href="#CauCauPass">CauCauPass</a></td>
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#Rcp">Rcp</a></td>
</tr>
</table>

Voice is a feature of verbs that helps map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and patient.

(**This feature, as defined currently, cannot correctly handle voice features on Turkic verbs.**)
The above combinations (of camel-case voice values) are a temporary solution to indicate "multiple
voice" features, but they are certainly not the best way to indicate
these features.
See [#197](https://github.com/UniversalDependencies/docs/issues/197) and
[#125](https://github.com/UniversalDependencies/docs/issues/125#issuecomment-112512320)
for the discussion.


### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient).
The doer (agent) is either unexpressed or it appears as a noun phrase marked with postposition _tarafından_ "by" or suffix _-IncA_.

#### Examples
* _Xəstəxana xalqın xidmətinə verildi._ "The hospital was made available to the public."

### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.

#### Examples
* _Peterinәn Mary qucaxlaşdılar vә sonra otaqdan çıxdılar._ "Peter and Mary hugged each other and then left the room."

### <a name="Cau">`Cau`</a>: causative voice

In causative constructions the subject is the entity "causing" the action. It generally translate to English as 'cause/make/have/let/allow' someone to perform action described by the main verb.

#### Examples

* _Cəvanlara əlçatmaz hədəflərini tərk etdirməliyik._ "We must make the young abandon unattainable goals."

### <a name="CauCauPass">`CauCauPass`</a>: double causative and passive voice

#### Examples

* _Kitab tamam mədrəsələrdə oxutdurulacax._ "The book will be made to be made to be read in all schools."


### <a name="CauCau">`CauCau`</a>: double causative voice

Causative suffix is quite productive.
Multiple causative suffixes can be attached to a verb,
and the number of causative suffixes are theoretically unbounded.
In practice, however, the cases where more than two causative suffixes attached to a verb is rather rare.
Often, two or more causative suffixes are used for emphasis and do not express multiple levels of causation.

#### Examples

* _Әrinә maşını yudur-<b>t</b>-<b>du</b>._ “She made her husband wash the car.”


### <a name="CauPass">`CauPass`</a>: passive causative voice

This language-specific value indicates that a verb has been first causativized, then passivized.
The meaning is “the subject was caused (by somebody) to do the action.”


#### Examples

* _Deniz yoxla-<b>d</b>-<b>ıl</b>-dı._ “Deniz was made to sleep.”


<!-- Interlanguage links updated So 10. května 2025, 18:14:41 CEST -->
