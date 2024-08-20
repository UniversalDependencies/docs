---
layout: base
title:  'Statistics of nsubj:pass in UD_Paumari-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Paumari-TueCL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pad_tuecl-dep-nsubj.html">nsubj</a></tt>.

3 nodes (1%) are attached to their parents as `nsubj:pass`.

2 instances of `nsubj:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pad_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="pad_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="pad_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="pad_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Hirari	_	NOUN	_	_	2	nsubj:pass	_	Gloss=pig
2	kara'ohi	_	VERB	_	_	0	root	_	Gloss=shoot:with:gun-NOMLZR
3	hiki	_	AUX	_	_	2	aux:pass	_	Gloss=AUX-NONTHEME
4	sipatihira	_	NOUN	_	_	5	obj	_	Gloss=bananas-OBJ
5	havini	_	VERB	_	_	6	ccomp	_	Gloss=eat-DEP:TRANS
6	biosanivini	_	VERB	_	_	2	advcl	_	Gloss=3SG-blame-DEP:TRANS|SpaceAfter=No
7	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:pass	color:blue
1	Obahi	_	VERB	_	_	0	root	_	Gloss=shock-NOMLZR
2	hi'ianahi	_	AUX	_	_	1	aux:pass	_	Gloss=AUX-again-THEME
3	ida	_	DET	_	_	4	det	_	Gloss=DEM,f
4	Kasai	_	PROPN	_	_	1	nsubj:pass	_	Gloss=Kasai
5	mina'dia	_	NOUN	_	_	1	obl:agent	_	Gloss=eel-by|SpaceAfter=No
6	.	_	PUNCT	_	_	1	punct	_	_

~~~


