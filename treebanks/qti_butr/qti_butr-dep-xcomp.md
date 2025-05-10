---
layout: base
title:  'Statistics of xcomp in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `xcomp`

This relation is universal.

6 nodes (2%) are attached to their parents as `xcomp`.

3 instances of `xcomp` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (5; 83% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADV.html">ADV</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	Hoca	hoca	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	Lang=tr
2	biraz	biraz	ADV	_	_	3	advmod	_	Lang=tr
3	tricky	tricky	ADJ	_	_	4	amod	_	Lang=en
4	şeyler	şey	NOUN	_	Case=Nom|Number=Plur|Person=3	5	obj	_	Lang=tr
5	sormaya	sor	VERB	_	Case=Dat|Polarity=Pos|VerbForm=Vnoun	6	xcomp	_	Lang=tr
6	çalışıyor	çalış	VERB	_	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	8	ccomp	_	Lang=tr
7	gibi	gibi	SCONJ	_	_	6	mark	_	Lang=tr
8	geldi	gel	VERB	_	Aspect=Perf|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	Lang=tr|SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Terapötik	terapötik	ADV	_	_	2	xcomp	_	Lang=tr
2	duyuldu	duy	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	0	root	_	Lang=tr
3	bana	ben	PRON	_	Case=Dat|Number=Sing|Person=1	2	obl	_	Lang=tr|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


