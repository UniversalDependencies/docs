---
layout: feature
title: 'Deixis'
shortdef: 'relative location encoded in demonstratives'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Abv">Abv</a></td>
  <td><a href="#Bel">Bel</a></td>
  <td><a href="#Even">Even</a></td>
  <td><a href="#Med">Med</a></td>
  <td><a href="#Nvis">Nvis</a></td>
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
* [es] _<b>aquí</b>_ “here”
* [eu] _<b>hau</b>_ “he/she (nearby)”
* [wo] _xaj <b>bii</b>_ “this dog” (close to me, wherever you may be) `Deixis=Prox|DeixisRef=1`
* [wo] _xaj <b>boobu</b>_ “that dog / the dog in question” (close to you, far from me) `Deixis=Prox|DeixisRef=2`
* [kha] _<b>u-ne</b>_ “he (near)”

### <a name="Med">`Med`</a>: medial

The entity is neither close nor far away from the reference point (e.g., from the speaker).

#### Examples

* [es] _<b>ahí</b>_ “there”
* [eu] _<b>hori</b>_ “he/she (not close)”
* [wo] _xaj <b>boobale</b>_ “that dog” (far away from both of us, but closer to you than to me) `Deixis=Med|DeixisRef=2`
* [kha] _<b>u-to</b>_ “he (not near, not far)”

### <a name="Remt">`Remt`</a>: remote, distal

The entity is far away from the reference point (e.g., from the speaker).

#### Examples

* [en] _<b>that</b> dog_
* [en] _<b>there</b>_
* [es] _<b>allí</b>_ “there”
* [eu] _<b>hura</b>_ “he/she (over there, yonder)”
* [wo] _xaj <b>bale</b>_ “that dog” (far away from me, wherever you may be) `Deixis=Remt|DeixisRef=1`
* [kha] _<b>u-tay</b>_ “he (far away, visible)”

### <a name="Nvis">`Nvis`</a>: not visible

The entity is remote and not visible. In Khasi, where this distinction is made, the `Remt` value
can be used to annotate “remote but visible”.

#### Examples

* [kha] _<b>u-to</b>_ “he (far away, not visible)”

### <a name="Abv">`Abv`</a>: above the reference point

Occurs e.g. in Aghul [agx], Lak [lbe], and Khasi [kha]. The entity is both remote from the speaker and above them.

#### Examples

* [agx] _te_ “that” (remote, elevation-neutral)
* [agx] _<b>le</b>_ “that (above)”
* [lbe] _<b>k'a</b>_ “that (above speaker)”
* [kha] _<b>u-tey</b>_ “he (above)”

### <a name="Even">`Even`</a>: at the same level as the reference point

Occurs e.g. in Lak [lbe]. The entity is both remote and at the same level as the speaker.

#### Examples

* [lbe] _ga_ “that” (Elevation neutral in current usage. In older usage, this pronoun pointed below the reference point.)
* [lbe] _<b>ta</b>_ “that (same level)” (In older usage, _ta_ was the pronoun unmarked for elevation, but in current usage it denotes the same level as the reference point.)

### <a name="Bel">`Bel`</a>: below the reference point

Occurs e.g. in Aghul [agx] and Khasi [kha]. The entity is both remote from the speaker and below them.

#### Examples

* [agx] _te_ “that” (remote, elevation-neutral)
* [agx] _<b>ge</b>_ “that (below)”
* [kha] _<b>u-thie</b>_ “he (below)”

<!-- Interlanguage links updated St lis 3 20:58:20 CET 2021 -->
