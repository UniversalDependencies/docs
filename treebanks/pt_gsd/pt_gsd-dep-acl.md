---
layout: base
title:  'Statistics of acl in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="pt_gsd-dep-acl-inf.html">acl:inf</a></tt>, <tt><a href="pt_gsd-dep-acl-relcl.html">acl:relcl</a></tt>.

2950 nodes (1%) are attached to their parents as `acl`.

2761 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.90915254237288.

The following 19 pairs of parts of speech are connected with `acl`: <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (1989; 67% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (653; 22% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (200; 7% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (52; 2% instances), <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="pt_gsd-pos-PART.html">PART</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="pt_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="pt_gsd-pos-X.html">X</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Tome	tomar	VERB	VERB	_	0	root	_	_
2	cuidado	cuidado	NOUN	NOUN	_	1	obj	_	_
3	com	com	ADP	ADP	_	4	case	_	_
4	inimigos	inimigo	NOUN	NOUN	_	2	nmod	_	_
5	declarados	declarar	VERB	VERB	_	4	acl	_	SpaceAfter=No
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	Muitos	_	PRON	PRON	_	2	nsubj	_	_
2	aprendem	aprender	VERB	VERB	_	0	root	_	_
3	errando	errar	VERB	VERB	_	2	acl	_	SpaceAfter=No
4	,	,	PUNCT	.	_	5	punct	_	_
5	infelizmente	infelizmente	ADV	ADV	_	2	advmod	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Foi	_	AUX	AUX	_	4	cop	_	_
2	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	primeiro	primeiro	ADJ	ADJ	_	4	amod	_	_
4	RPG	_	PROPN	PNOUN	_	0	root	_	_
5	baseado	basear	VERB	VERB	_	4	acl	_	_
6	em	em	ADP	ADP	_	7	case	_	_
7	sistema	sistema	NOUN	NOUN	_	5	nmod	_	_
8	de	de	ADP	ADP	_	9	case	_	_
9	perícias	perícia	NOUN	NOUN	_	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


