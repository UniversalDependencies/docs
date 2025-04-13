---
layout: feature
title: 'DeixisRef'
shortdef: 'person to which deixis is relative'
udver: '2'
---

## DeixisRef
<!-- https://github.com/UniversalDependencies/docs/issues/592 -->
<!-- see also Unimorph -->

DeixisRef is a feature of demonstrative [pronouns](../../u/pos/PRON), [determiners](../../u/pos/DET), and [adverbs](../../u/pos/ADV), accompanying [Deixis](Deixis.html) when necessary. [Deixis](Deixis.html) encodes position of an entity relative to either the speaker or the hearer. If it is necessary to distinguish the person whose location is the reference point (speaker or hearer), `DeixisRef` is used. `DeixisRef` is not needed if all deictic expressions in the language are relative to the same person (probably the speaker), or if they do not distinguish the reference point.

Pomak nouns, adjectives, pronouns and adverbs may be tagged with `DeixisRef` along with [Deixis](Deixis.html) when one of the suffixes 
<!--name the suffixes...> is attached to them [Definite]()-->.

### <a name="1">`1`</a>: deixis relative to the first person participant (speaker)

#### Examples

* _górm<b>os</b>_ "the tree [here near me or near both the speaker and the listener - proximal]" 
`Deixis=Prox|DeixisRef=1`

### <a name="2">`2`</a>: deixis relative to the second person participant (listener) 

#### Examples

* _górm<b>ot</b>_ "the tree [there near you or near the listener - proximal]" 
`Deixis=Prox|DeixisRef=2`

### <a name="3">`3`</a>: deixis that marks the distance from both participants (speaker and listener) - distal

#### Examples

* _górm<b>on</b>_ "the tree over there [far away from both the speaker and the listener - distal]" 
`Deixis=Remt'






<!-- Interlanguage links updated Po 11. listopadu 2024, 20:09:38 CET -->
