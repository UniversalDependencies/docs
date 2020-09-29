---
layout: feature
title: 'Voice'
shortdef: 'voice'
---

(**This feature, as defined currently, cannot correctly handle voice features on Turkish verbs.**) See https://github.com/UniversalDependencies/docs/issues/197 for the discussion.



### `Pass`: passive voice

The subject of the verb is affected by the action (patient).
The doer (agent) is either unexpressed or it appears as a noun phrase marked with postposition _tarafından_ "by" or suffix _-IncA_.

In Turkish, a passive verb may get double passive suffixes, and intransitive verb may also be passivized.
These result in a voice that is called [impersonal passive](https://en.wikipedia.org/wiki/Impersonal_passive_voice).
The verb's valency is reduced to zero with impersonal passives constructions,
the verb cannot have a subject.
(**TODO** We probably need a different label for impersonal passives)

#### Examples

* _Ev boy<b>an</b>dı_  "The house was painted"
* _Buradan düş<b>ül</b>ebilir_ "One may fall from here" (impersonal, intransitive verb passivized)
* _Böyle lafa kır-<b>ıl</b>-<b>ın</b>ır_ "[One] can be hurt by such words" (Double passive resulting in impersonal. Göksel & Kerslake 2005,p136)

### `Rcp`: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.

The reciprocal is expressed by the suffix _-Iş_ however,
the verb roots that can become reciprocal is limited.

#### Examples

* _gör<b>üş</b>tüler_ "they meet (lit: they see each other)"

### `Cau`: causative voice


In Turkish, that this is a feature of verbs.
Not to be caused with causative case of nouns in some languages.

In causative constructions the subject is the entity "causing" the action. It generally translate to English as 'cause/make/have/let/allow' someone to perform action described by the main verb.
Many (lexicalized) verbs that have unrelated roots in other languages are formed are related by the causative suffix in Turkish, 
e.g., _öl-_ "die" and _öl-<b>dür</b>_ "kill" (to cause someone to die). 
Causative suffix is quite productive.
Multiple causative suffixes can be attached to a verb,
and the number of causative suffixes are theoretically unbounded.
In practice, however, the cases where more than two causative suffixes attached to a verb is rather rare.
Often, two or more causative suffixes are used for emphasis and do not express multiple levels of causation.

(**TODO:** multiple causatives need a solution.  See this [issue](https://github.com/UniversalDependencies/docs/issues/197) for details.)

#### Examples

* _Evi boya-t-tık_ "We had the house painted"
* _Evi boya-t-tır-tık_ "We had someone to have the house painted"

### `Rfl`: reflexive voice

(**Currently not in UD**)

A verb in reflexive voice expresses an action that the agent of the action performs on himself/herself.
This should not be confused with reflexive verbs in some languages where the verb requires a reflexive pronoun (often without a clear role) in the sentence.

The reciprocal is expressed by the suffix _-In_.
Like reciprocal, reflexive is rather unproductive, and a very limited set of verbs can take the reflexive suffix.


#### Example

* _yıka<b>n</b>_ "to wash oneself"
* _giy<b>in</b>_ "to dress oneself"
<!-- Interlanguage links updated Út zář 29 20:43:06 CEST 2020 -->
