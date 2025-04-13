---
layout: base
title:  'Statistics of obj in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `obj`

This relation is universal.

3012 nodes (4%) are attached to their parents as `obj`.

2825 instances of `obj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.92961487383798.

The following 19 pairs of parts of speech are connected with `obj`: <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (1930; 64% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (567; 19% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (250; 8% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (181; 6% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (51; 2% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (14; 0% instances), <tt><a href="pt_dantestocks-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-X.html">X</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	#embr3	#embr3	PROPN	_	_	2	obj	_	_
2	dando	dar	VERB	_	VerbForm=Ger	0	root	_	_
3	show	show	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
4	desde	desde	ADP	_	_	5	case	_	_
5	dia	dia	NOUN	_	Gender=Masc|Number=Sing	2	obl	_	_
6	20	20	NUM	_	NumType=Card	5	nmod	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obj	color:blue
1	#voa	voar	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	#goll4	#goll4	PROPN	_	_	1	vocative	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	se	se	SCONJ	_	_	5	mark	_	_
5	fechar	fechar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	advcl	_	_
6	15	15	NUM	_	NumType=Card	5	obj	_	_
7	acima	acima	ADV	_	_	6	advmod	_	_
8	10,55	10,55	NUM	_	NumType=Card	7	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	5	punct	_	_
10	rompento	rompendo	VERB	_	Typo=Yes|VerbForm=Ger	1	parataxis	_	CorrectForm=rompendo
11	'	'	PUNCT	_	_	12	punct	_	SpaceAfter=No
12	Take	Take	PROPN	_	_	10	obj	_	_
13	Off	Off	PROPN	_	_	12	flat:name	_	SpaceAfter=No
14	'	'	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj	color:blue
1	@topBovespa	@topBovespa	PROPN	_	_	5	vocative	_	_
2	...	...	PUNCT	_	_	1	punct	_	_
3	e	e	CCONJ	_	_	5	cc	_	_
4	BBAS3	BBAS3	PROPN	_	_	5	nsubj	_	_
5	sobe	subir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	3	3	NUM	_	NumType=Card	7	nummod	_	SpaceAfter=No
7	%	%	SYM	_	_	5	obj	_	SpaceAfter=No
8	!	!	PUNCT	_	_	5	punct	_	_
9	Faz	fazer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	_
10	sentido	sentido	NOUN	_	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
11	...	...	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


