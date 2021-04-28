---
layout: feature
title: 'Clusivity[subj]'
shortdef: 'clusivity agreement with subject'
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

### <a name="In">`In`</a>: inclusive subject

Includes the listener, i.e. _we_ = _I + you_ (+ optionally _they_).

#### Examples

* [gun] _Mba'echa pa ñande <b>jaiko</b>?_ “How do we (I+you) live?” (lit. how Q 1.PL.INCL A1.PL.INCL-live)

### <a name="Ex">`Ex`</a>: exclusive subject

Excludes the listener, i.e. _we_ = _I + they._

#### Examples

* [gun] _Upei <b>roiko</b> upeicha._ “Then we (I+they) lived like this.” (lit. afterwards A1.PL.EXCL-live like.this)

<!-- Interlanguage links updated Čt lis 12 09:42:59 CET 2020 -->
