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
  <td><a href="#CauCauPass">CauCau</a></td>
  <td><a href="#CauPass">CauPass</a></td>
  <td><a href="#CauPassRcp">CauPassRcp</a></td>
  <td><a href="#CauRcp">CauRcp</a></td>
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#PassPass">PassPass</a></td>
  <td><a href="#PassRfl">PassRfl</a></td>
  <td><a href="#PassRcp">PassRcp</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Rfl">Rfl</a></td>
</tr>
</table>

Voice is a feature of verbs that helps map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and patient.

(**This feature, as defined currently, cannot correctly handle voice features on Turkish verbs.**)
The above combinations (of camel-case voice values) are a temporary solution to indicate "multiple
voice" features, but they are certainly not the best way to indicate
these features.
See https://github.com/UniversalDependencies/docs/issues/197 and
[#125](https://github.com/UniversalDependencies/docs/issues/125#issuecomment-112512320)
for the discussion.


### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient).
The doer (agent) is either unexpressed or it appears as a noun phrase marked with postposition _tarafından_ "by" or suffix _-IncA_.

In Turkish, a (transitive) verb may get two passive affixes (see below), and intransitive verb may also be passivized.
These result in a voice that is called [impersonal passive](https://en.wikipedia.org/wiki/Impersonal_passive_voice).
Similarly a single passive affix on an intransitive verb also
indicates impersonal passive.
The verb's valency is reduced to zero with impersonal passives constructions,
the verb cannot have a subject.


#### Examples

* _Ev boy<b>an</b>dı_  "The house was painted"
* _Buradan düş<b>ül</b>ebilir_ "One may fall from here" (impersonal, intransitive verb passivized)

### <a name="PassPass">`PassPass`</a>: double passive voice

When two passive suffixes are attached to a transitive verb, 
typically it indicates an impersonal passive (see the discussion
above). However, in some speakers may also use multiple passives for
stylistic reasons (even for intransitive verbs), e.g.,

#### Examples

* _Böyle lafa kır-<b>ıl</b>-<b>ın</b>ır_ "[One] can be hurt by such words" (Double passive resulting in impersonal. Göksel & Kerslake 2005,p136)
* _Burada uyu-<b>n</b>-<b>ul</b>-abilir_  "One may sleep here / this place is good for sleeping" (stylistic, single passive suffix attached to an intransitive verb is sufficient for impersonal meaning, second one is redundant).

### <a name="PassRfl">`PassRfl`</a>: combination of passive and reflexive voices

This language-specific value indicates that a verb with a reflexive suffix is passivized.

#### Examples

* _Burada yıka-<b>n-ıl</b>-dı_ "[one] washed himself here"

### <a name="PassRcp">`PassRcp`</a>: combination of passive and reciprocal voices

This language-specific value indicates that a verb with a reciprocal suffix is passivized.

#### Examples

* _Burada gör-<b>üş-ül</b>-dü_ "[two or more people] met here" (lit: [two or more people] saw each other here)


### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.

The reciprocal is expressed by the suffix _-Iş_ however,
the verb roots that can become reciprocal is limited.

#### Examples

* _gör<b>üş</b>tüler_ "they meet (lit: they see each other)"

### <a name="Cau">`Cau`</a>: causative voice

In causative constructions the subject is the entity "causing" the action. It generally translate to English as 'cause/make/have/let/allow' someone to perform action described by the main verb.
Many (lexicalized) verbs that have unrelated roots in other languages are formed are related by the causative suffix in Turkish,
e.g., _öl-_ "die" and _öl-<b>dür</b>_ "kill" (to cause someone to die).


#### Examples

* _Evi boya-t-tık_ “We had the house painted”
* _Ali evi Ahmet'e boya<b>t</b>tı_ “Ali caused (paid/convinced/forced) Ahmet to paint the house”
* _Babam arabayı Ali ustaya yap<b>tır</b>mış_ “My father made master Ali fix the car” (lit. father-my car-ACC Ali master-DAT fix-CAUS-PAST.NFH)


### <a name="CauCau">`CauCau`</a>: double causative voice

Causative suffix is quite productive.
Multiple causative suffixes can be attached to a verb,
and the number of causative suffixes are theoretically unbounded.
In practice, however, the cases where more than two causative suffixes attached to a verb is rather rare.
Often, two or more causative suffixes are used for emphasis and do not express multiple levels of causation.

#### Examples

* _Evi boya-<b>t</b>-</b>tır</b>-dık_ “We had someone to have the house painted”


### <a name="CauPass">`CauPass`</a>: passive causative voice

This language-specific value indicates that a verb has been first causativized, then passivized.
The meaning is “the subject was caused (by somebody) to do the action.”


#### Examples

* _Ev Ahmet'e boya<b>-t-ıl-</b>dı_ “Somebody caused Ahmet to paint the house / Ahmet was caused to paint the house”

### <a name="CauCauPass">`CauCauPass`</a>: passive causative causative voice

This language-specific value indicates that a verb has been first causativized twice, then passivized.
The meaning is “the subject was caused (by somebody) to cause (by likely somebody else) do the action.”


#### Examples

* _Ev Ahmet'e boya<b>-t-tır-ıl-</b>dı_ “Somebody caused someone else to cause Ahmet to paint the house (e.g., we asked Ahmet's company to ask Ahmet to paint the house.)"

### <a name="CauRcp">`CauRcp`</a>: causative reciprocal voice

This language-specific value indicates that a verb with a reciprocal suffix is causativized.
The meaning is “the subject was caused (by somebody) to do the action.”

It describes an event in which two agents (or groups of agents) perform the same action upon each other and another entity causes the action.

#### Examples

* _Babaları kardeşleri öp<b>üş-tür</b>dü_ "Their father made the siblings kiss each other"

### <a name="CauPassRcp">`CauPassRcp`</a>: causative reciprocal passive voice

This language-specific value indicates that a verb with a reciprocal suffix is passivized and causativized.
The meaning is “the subject was caused (by somebody) to do the action.”


It describes an event in which two agents (or groups of agents) perform the same action upon each other and another entity causes the action.
#### Examples

* _Onlar gör<b>üş-tür-ül</b>mediler_ "They were not allowed to meet (lit: they were made (by someone) not to see each other)"


### <a name="Rfl">`Rfl`</a>: reflexive voice

(**Currently not in UD**)

A verb in reflexive voice expresses an action that the agent of the action performs on himself/herself.
This should not be confused with reflexive verbs in some languages where the verb requires a reflexive pronoun (often without a clear role) in the sentence.

The reciprocal is expressed by the suffix _-In_.
Like reciprocal, reflexive is rather unproductive, and a very limited set of verbs can take the reflexive suffix.


#### Example

* _yıka<b>n</b>_ "to wash oneself"
* _giy<b>in</b>_ "to dress oneself"

<!-- Interlanguage links updated Čt lis 12 09:43:08 CET 2020 -->
