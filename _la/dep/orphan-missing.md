---
layout: relation
title: 'orphan:missing'
shortdef: 'textual gap in the source'
udver: '2'
---

This subrelation of [`orphan`](u-dep/orphan) is used to explicitly mark uncertain dependences originating from physical gaps in the original textual source.

Even when the content of such a gap is, at least from the point of view of its part of speech, predictable, if not completely reconstructible (e.g. in the case of repetitive formulaic expressions), we may refrain to guess the corresponding syntactic relations, and instead report this exceptional case as a relation subtype.

From the LLCT treebank, which contains transcriptions of sometimes corrupt notarial *chartulae* of the Early Middle Ages:

~~~ sdparse
ROOT unde ego qui supra Andriperto presbitero una cum meis heredes tibi qui supra Teudilascio archidiacono vel ad posteris que GAP ut , si nos vobis aliquando tempore in aliquo exinde intentionare aut retolli quesierimus , eam vobis ab omni homines defendere non potuerimus , spondimus componere quas tibi supra in commutationem dedi in duplum , in ferquidem loco , sub estimatione , quales tunc fuerit , quia taliter inter nos convenit .
orphan:missing(GAP,unde)
orphan:missing(GAP,ego)
orphan:missing(GAP,heredes)
orphan:missing(GAP,tibi-12)
orphan:missing(GAP,spondimus)
root(ROOT,GAP)
~~~
<!-- Interlanguage links updated St lis 3 20:59:07 CET 2021 -->
