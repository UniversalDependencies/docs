---
layout: base
title:  'Statistics of dep in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `dep`

This relation is universal.

7 nodes (0%) are attached to their parents as `dep`.

6 instances of `dep` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28571428571429.

The following 6 pairs of parts of speech are connected with `dep`: <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-ADP.html">ADP</a></tt> (2; 29% instances), <tt><a href="pt_pprincipe-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pprincipe-pos-DET.html">DET</a></tt> (1; 14% instances), <tt><a href="pt_pprincipe-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pt_pprincipe-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADP.html">ADP</a></tt> (1; 14% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Quinhentos	quinhentos	NUM	_	Gender=Masc|NumType=Card	4	nummod	_	_
2	e	e	CCONJ	_	_	3	cc	_	_
3	um	um	NUM	_	Gender=Masc|NumType=Card	1	conj	_	_
4	milhões	milhão	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
5	de	de	ADP	_	_	4	dep	_	SpaceAfter=No
6	...	...	PUNCT	_	_	9	punct	_	_
7	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
8	não	não	ADV	_	_	9	advmod	_	_
9	sei	saber	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
10	mais	mais	ADV	_	_	9	advmod	_	SpaceAfter=No
11	...	...	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	-	-	PUNCT	_	_	7	punct	_	_
2	De	de	ADP	_	_	7	reparandum	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	dep	_	_
4	...	...	PUNCT	_	_	2	punct	_	_
5	de	de	ADP	_	_	7	case	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	justiça	justiça	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	!	!	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 dep	color:blue
1	Então	então	CCONJ	_	_	6	cc	_	SpaceAfter=No
2	...	...	PUNCT	_	_	3	punct	_	_
3	então	então	CCONJ	_	_	6	cc	_	_
4	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
5	te	te	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	6	obj	_	_
6	ordeno	ordenar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	ora	ora	CCONJ	_	_	8	cc	_	_
8	bocejares	bocejar	VERB	_	Mood=Sub|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	6	xcomp	_	_
9	e	e	CCONJ	_	_	10	dep	_	_
10	ora	ora	CCONJ	_	_	8	dep	_	SpaceAfter=No
11	...	...	PUNCT	_	_	6	punct	_	_

~~~


