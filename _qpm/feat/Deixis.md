---
layout: feature
title: 'Deixis'
shortdef: 'relative location encoded in demonstratives'
udver: '2'
---

<!-- https://github.com/UniversalDependencies/docs/issues/592 -->
<!-- see also Unimorph -->

## Deixis

Deixis is typically a feature of demonstrative [pronouns](../../u/pos/PRON), [determiners](../../u/pos/DET), and [adverbs](../../u/pos/ADV).
It serves to indicate the location of the referred entity with respect to the location of the speaker or of the listener. The common distinction is distance (proximate vs. remote entities); in some languages, elevation is distinguished as well (e.g., the entity is located higher or lower than the speaker).

If it is necessary to distinguish the person whose location is the reference point (speaker or listener), the feature [DeixisRef](DeixisRef.html) can be used in addition to `Deixis`. [DeixisRef](DeixisRef.html) is not needed if all deictic expressions in the language are relative to the same person (probably the speaker).

In Pomak the `Deixis` feature is applied in combination with the [DeixisRef](DeixisRef.html) feature, in order to mark the triple definite article. 



### <a name="Prox">`Prox`</a>: proximate

The entity is close to the reference point (e.g., to the speaker) - proximal or medial.

#### Examples

* [qpm] _górm<b>os</b>_"the tree [here near me or near both the speaker and the listener - proximal]" 
`Deixis=Prox|DeixisRef=1`
* [qpm] _górm<b>ot</b>_ "the tree [there near you or near the listener - proximal]" 
`Deixis=Prox|DeixisRef=2`


### <a name="Remt">`Remt`</a>: remote

The entity is far away from the reference point (e.g., from the speaker) - distal.

#### Examples

* [qpm] _górm<b>on</b>_ "the tree over there [far away from both the speaker and the listener - distal]" 
-->

<!-- Interlanguage links updated So kvě 14 19:02:11 CEST 2022 -->
