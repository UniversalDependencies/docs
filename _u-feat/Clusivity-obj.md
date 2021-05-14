---
layout: feature
title: 'Clusivity[obj]'
shortdef: 'clusivity agreement with object'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Ex">Ex</a></td>
  <td><a href="#In">In</a></td>
</tr>
</table>

Clusivity is a feature of first-person plural personal [pronouns](u-pos/PRON).
As such, it can also be reflected by inflection of [verbs](u-pos/VERB), e.g. in Mbyá Guaraní.

Some languages are head-marking, which means that the verbal morphology can cross-reference
multiple core arguments, not just the subject. If the cross-reference involves the `Clusivity` of the argument,
we have two layers of `Clusivity` on the verb: `Clusivity[subj]`, and (for transitive verbs) `Clusivity[obj]`.
While it would be possible to make the subject layer the default and use just `Clusivity` for it,
the explicit labeling of both layers is probably more helpful in such languages, as it can reduce confusion.

### <a name="In">`In`</a>: inclusive object

Includes the listener, i.e. _we_ = _I + you_ (+ optionally _they_).

#### Examples

* [gun] _Ñande, <b>ñanderayvu</b> ra'e, añete'i po ra'e, chejaryi._ “She truly loves us (me+you), my grandmother.” (lit. 1.PL.INCL, B1.PL.INCL-R-love MIR, truth=DIM EPIS MIR, B1.SG-grandmother)

### <a name="Ex">`Ex`</a>: exclusive object

Excludes the listener, i.e. _we_ = _I + they._

#### Examples

* [gun] _Ore upecha orejaryi <b>orereroayvu</b>._ “Our grandmothers advised us (me+them) like this.” (lit. 1.PL.EXCL like.this B1.PL.EXCL-grandmother B1.PL.EXCL-R-COM-speak)

<!-- Interlanguage links updated Pá kvě 14 11:08:29 CEST 2021 -->
