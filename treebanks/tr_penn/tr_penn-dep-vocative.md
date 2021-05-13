---
layout: base
title:  'Statistics of vocative in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `vocative`

This relation is universal.

4 nodes (0%) are attached to their parents as `vocative`.

2 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `vocative`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (3; 75% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 vocative	color:blue
1	ABBIE	ABBIE	PROPN	_	Case=Nom|Number=Sing	5	nmod	_	_
2	:	:	PUNCT	_	_	5	punct	_	_
3	"	"	PUNCT	_	_	5	punct	_	_
4	ben	ben	PRON	_	PronType=Prs	5	nsubj	_	_
5	iyiyim	iyi	VERB	_	Number=Sing|Person=1|Tense=Pres	0	root	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	Jack	jack	PROPN	_	Case=Nom|Number=Sing	5	vocative	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 vocative	color:blue
1	Bir	bir	DET	_	Definite=Ind	2	compound	_	_
2	kelime	kelime	NOUN	_	Case=Nom|Number=Sing|Person=3	3	compound	_	_
3	daha	daha	ADV	_	Degree=Cmp	8	discourse	_	_
4	ve	ve	CCONJ	_	_	8	cc	_	_
5	dışarı	dışarı	NOUN	_	Case=Nom|Number=Sing|Person=3	6	compound	_	_
6	çıkıp	çık	ADV	_	_	8	advcl	_	_
7	bankta	bank	NOUN	_	Case=Loc|Number=Sing|Person=3	8	obl	_	_
8	yatarsınız	yat	VERB	_	Aspect=Hab|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
9	bayım	bay	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	8	vocative	_	_
10	.	.	PUNCT	_	_	8	punct	_	_
11	"	"	PUNCT	_	_	8	punct	_	_

~~~


