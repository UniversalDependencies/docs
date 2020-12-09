---
layout: feature
title: 'Deixis'
shortdef: 'relative location encoded in demonstratives'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Med">Med</a></td>
  <td><a href="#Prox">Prox</a></td>
  <td><a href="#Remt">Remt</a></td>
</tr>
</table>

<!-- https://github.com/UniversalDependencies/docs/issues/592 -->
<!-- see also Unimorph -->

Deixis is typically a feature of demonstrative [pronouns](u-pos/PRON), [determiners](u-pos/DET), and [adverbs](u-pos/ADV).
Its value classifies the location of the referred entity with respect to the location
of the speaker or of the hearer. The common distinction is distance (proximate vs.
remote entities); in some languages, elevation is distinguished as well (e.g., the
entity is located higher or lower than the speaker).

If it is necessary to distinguish the person whose location is the reference point (speaker or hearer),
the feature [DeixisRef]() can be used in addition to `Deixis`. See also the Wolof examples below.
`DeixisRef` is not needed if all deictic expressions in the language are relative to the same person
(probably the speaker).

### <a name="Prox">`Prox`</a>: proximate

The entity is close to the reference point (e.g., to the speaker).

#### Examples

* [en] _<b>this</b> dog_
* [en] _<b>here</b>_
* [es] _<b>aquí</b>_ “<b>here</b>”
* [wo] _xaj <b>bii</b>_ “<b>this</b> dog” (close to me, wherever you may be) `Deixis=Prox|DeixisRef=1`
* [wo] _xaj <b>boobu</b>_ “<b>that</b> dog / the dog in question” (close to you, far from me) `Deixis=Prox|DeixisRef=2`

### <a name="Med">`Med`</a>: medial

The entity is neither close nor far away from the reference point (e.g., from the speaker).

#### Examples

* [es] _<b>ahí</b>_ “there”
* [wo] _xaj <b>boobale</b>_ “<b>that</b> dog” (far away from both of us, but closer to you than to me) `Deixis=Med|DeixisRef=2`

### <a name="Remt">`Remt`</a>: remote, distal

The entity is far away from the reference point (e.g., from the speaker).

#### Examples

* [en] _<b>that</b> dog_
* [en] _<b>there</b>_
* [es] _<b>allí</b>_ “<b>there</b>”
* [wo] _xaj <b>bale</b>_ “<b>that</b> dog” (far away from me, wherever you may be) `Deixis=Remt|DeixisRef=1`

<!-- Interlanguage links updated Čt lis 12 09:43:01 CET 2020 -->
