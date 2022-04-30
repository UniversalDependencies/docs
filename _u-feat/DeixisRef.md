---
layout: feature
title: 'DeixisRef'
shortdef: 'person to which deixis is relative'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#1">1</a></td>
  <td><a href="#2">2</a></td>
</tr>
</table>

<!-- https://github.com/UniversalDependencies/docs/issues/592 -->
<!-- see also Unimorph -->

DeixisRef is a feature of demonstrative [pronouns](u-pos/PRON), [determiners](u-pos/DET),
and [adverbs](u-pos/ADV), accompanying [Deixis]() when necessary. `Deixis` encodes position of
an entity relative to either the speaker or the hearer. If it is necessary to distinguish
the person whose location is the reference point (speaker or hearer), `DeixisRef` is used.
`DeixisRef` is not needed if all deictic expressions in the language are relative to the same
person (probably the speaker), or if they do not distinguish the reference point.

### <a name="1">`1`</a>: deixis relative to the first person participant (speaker)

#### Examples

* [wo] _xaj <b>bii</b>_ “<b>this</b> dog” (close to me, wherever you may be) `Deixis=Prox|DeixisRef=1`
* [wo] _xaj <b>bale</b>_ “<b>that</b> dog” (far away from me, wherever you may be) `Deixis=Remt|DeixisRef=1`

### <a name="2">`2`</a>: deixis relative to the second person participant (hearer)

#### Examples

* [wo] _xaj <b>boobu</b>_ “<b>that</b> dog / the dog in question” (close to you, far from me) `Deixis=Prox|DeixisRef=2`
* [wo] _xaj <b>boobale</b>_ “<b>that</b> dog” (far away from both of us, but closer to you than to me) `Deixis=Med|DeixisRef=2`

<!-- Interlanguage links updated St lis 3 20:58:20 CET 2021 -->
