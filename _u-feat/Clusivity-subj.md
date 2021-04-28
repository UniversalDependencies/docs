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
As such, it can also be reflected by inflection of [verbs](u-pos/VERB), e.g. in Plains Cree (Wolvengrey 2011 p. 66).

Some languages are head-marking, which means that the verbal morphology can cross-reference
multiple core arguments, not just the subject. If the cross-reference involves the `Clusivity` of the argument,
we have two layers of `Clusivity` on the verb: `Clusivity[subj]`, and (for transitive verbs) `Clusivity[obj]`.
While it would be possible to make the subject layer the default and use just `Clusivity` for it,
the explicit labeling of both layers is probably more helpful in such languages, as it can reduce confusion.

### <a name="In">`In`</a>: inclusive

Includes the listener, i.e. _we_ = _I + you_ (+ optionally _they_).

#### Examples

* [crk] _<b>kiwīcihānaw</b>_ “we (I+you) help him”

### <a name="Ex">`Ex`</a>: exclusive

Excludes the listener, i.e. _we_ = _I + they._

#### Examples

* [crk] _<b>niwīcihānān</b>_ “we (I+they) help him”

## References

* Arok Elessar Wolvengrey. 2011. _Semantic and pragmatic functions in Plains Cree syntax_ (PhD thesis). LOT, Utrecht, Netherlands. ISBN 978-94-6093-051-5.

<!-- Interlanguage links updated Čt lis 12 09:42:59 CET 2020 -->
