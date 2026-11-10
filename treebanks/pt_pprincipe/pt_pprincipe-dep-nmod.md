---
layout: base
title:  'Statistics of nmod in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `nmod`

This relation is universal.

472 nodes (3%) are attached to their parents as `nmod`.

463 instances of `nmod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.65466101694915.

The following 12 pairs of parts of speech are connected with `nmod`: <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (347; 74% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt> (38; 8% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (31; 7% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt> (22; 5% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nmod	color:blue
1	Eis	eis	ADV	_	_	3	advmod	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	cópia	cópia	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
4	de	de	ADP	_	_	6	case	_	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	desenho	desenho	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	Capítulo	capítulo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	1	1	NUM	_	NumType=Card	1	nmod	_	SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
1	Era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	para	para	ADP	_	_	4	case	_	_
4	mim	mim	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	6	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	questão	questão	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	8	case	_	_
8	vida	vida	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_
9	ou	ou	CCONJ	_	_	11	cc	_	_
10	de	de	ADP	_	_	11	case	_	_
11	morte	morte	NOUN	_	Gender=Fem|Number=Sing	8	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


