---
layout: base
title:  'Statistics of nsubj:pass in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="tr_tuecl-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="tr_tuecl-dep-nsubj-outer.html">nsubj:outer</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:pass`.

4 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (3; 75% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Sonuçlar	sonuç	NOUN	_	Case=Nom|Number=Plur	2	nsubj:pass	_	_
2	açıklanmış	açıkla	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	değil	değil	AUX	_	Polarity=Neg	2	aux	_	_
5	mi	mi	AUX	_	Number=Sing|Person=3|Tense=Pres	2	aux:q	_	SpaceAfter=No
6	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	2	nsubj:pass	_	_
2	uyutuldu	uyu	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=CauPass	0	root	_	SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	_

~~~


