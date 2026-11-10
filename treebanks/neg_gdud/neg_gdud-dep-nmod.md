---
layout: base
title:  'Statistics of nmod in UD_Negidal-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Negidal-GDUD: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="neg_gdud-dep-nmod-poss.html">nmod:poss</a></tt>.

4 nodes (1%) are attached to their parents as `nmod`.

4 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75.

The following 2 pairs of parts of speech are connected with `nmod`: <tt><a href="neg_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="neg_gdud-pos-NOUN.html">NOUN</a></tt> (3; 75% instances), <tt><a href="neg_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="neg_gdud-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	siŋəjə	siŋəjə	NOUN	_	_	2	obj	_	_
2	gun-mi	gun	VERB	_	Mood=Cnd|VerbForm=Conv	4	advcl	_	_
3	oʁaːβi	oʁaːβi	NOUN	_	_	4	obj	_	_
4	gun-ŋati-s	gun	VERB	_	Mood=Nec|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
5	ʧoː	ʧoː	NOUN	_	_	6	nmod	_	_
6	bəjŋaː-nin	bəjŋaː	NOUN	_	Number=Sing|Person=3	3	nmod:poss	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Taj	Taj	ADV	_	_	2	advmod	_	Gloss=that
2	Čukčagir	Čukčagir	PROPN	_	_	3	nmod	_	Gloss=Chukchagir
3	boγa-dū-n	boγa	NOUN	_	Case=Dat|Person=3	4	obl	_	Gloss=land-Dat-3Sg
4	bi-čā-n	bi	VERB	_	Number=Sing|Person=3|Tense=Past	0	root	_	Gloss=be-Praet-3Sg
5	omən	omən	NUM	_	_	6	nummod	_	Gloss=one
6	asī	asī	NOUN	_	_	4	nsubj	_	SpaceAfter=No|Gloss=woman
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


