---
layout: base
title:  'Statistics of parataxis in UD_Basque-BDT'
udver: '2'
---

## Treebank Statistics: UD_Basque-BDT: Relations: `parataxis`

This relation is universal.

57 nodes (0%) are attached to their parents as `parataxis`.

55 instances of `parataxis` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.19298245614035.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-NUM.html">NUM</a></tt> (23; 40% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (12; 21% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (10; 18% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-SYM.html">SYM</a></tt> (2; 4% instances), <tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu_bdt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 parataxis	color:blue
1	Baigorri	Baigorri	PROPN	_	Case=Abs|Definite=Def|Number=Sing	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	berriz	berriz	CCONJ	_	_	6	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Orthezen	Orthez	PROPN	_	Case=Ine|Definite=Def|Number=Sing	6	obl	_	_
6	ariko	ari_izan	VERB	_	VerbForm=Fin	0	root	_	_
7	da	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	6	aux	_	_
8	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	17:30	17:30	NUM	_	NumType=Card	6	parataxis	_	SpaceAfter=No
10	)	)	PUNCT	_	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Baina	baina	CCONJ	_	_	4	cc	_	SpaceAfter=No
2	...	...	PUNCT	_	_	1	punct	_	_
3	ura	ur	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	4	obj	_	_
4	hastiatzen	hastiatu	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
5	(	(	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	gorrotatzen	gorrotatu	VERB	_	Aspect=Imp|VerbForm=Inf	4	parataxis	_	SpaceAfter=No
7	)	)	PUNCT	_	_	6	punct	_	_
8	dut	edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=1|VerbForm=Fin	4	aux	_	ReconstructedLemma=Yes|SpaceAfter=No
9	!	!	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	Iaz	iaz	ADV	_	_	4	advmod	_	_
2	8.950	8.950	NUM	_	NumType=Card	3	nummod	_	_
3	kilo	kilo	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	4	obj	_	_
4	leporatu	leporatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
5	zituen	edun	AUX	_	Mood=Ind|Number[abs]=Plur|Number[erg]=Sing|Person[abs]=3|Person[erg]=3|VerbForm=Fin	4	aux	_	ReconstructedLemma=Yes
6	(	(	PUNCT	_	_	8	punct	_	SpaceAfter=No
7	57	57	NUM	_	NumType=Card	8	nummod	_	_
8	jasoaldi	jasoaldi	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	4	parataxis	_	SpaceAfter=No
9	)	)	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


