---
layout: base
title:  'Statistics of cop in UD_Basque-BDT'
udver: '2'
---

## Treebank Statistics: UD_Basque-BDT: Relations: `cop`

This relation is universal.

2420 nodes (2%) are attached to their parents as `cop`.

1951 instances of `cop` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71694214876033.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (1085; 45% instances), <tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (715; 30% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (442; 18% instances), <tt><a href="eu_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (76; 3% instances), <tt><a href="eu_bdt-pos-DET.html">DET</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (49; 2% instances), <tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (24; 1% instances), <tt><a href="eu_bdt-pos-NUM.html">NUM</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (20; 1% instances), <tt><a href="eu_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-X.html">X</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	292	292	NUM	_	NumType=Card	2	nummod	_	_
2	kiloko	kilo	NOUN	_	Animacy=Inan	3	nmod	_	_
3	harria	harri	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	0	root	_	_
4	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	eta	eta	CCONJ	_	_	10	cc	_	_
7	harrezkero	harrezkero	ADV	_	_	10	advmod	_	_
8	harri	harri	NOUN	_	_	10	obj	_	_
9	bera	bera	DET	_	Case=Abs|Definite=Def|Number=Sing	8	det	_	_
10	darabilgu	erabili	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1|VerbForm=Fin	4	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Hurrengo	hurrengo	ADJ	_	_	2	amod	_	_
2	orrialdeko	orrialde	NOUN	_	Animacy=Inan|Case=Loc|Definite=Def|Number=Sing	3	nmod	_	_
3	mapa	mapa	NOUN	_	Case=Abs|Definite=Def|Number=Sing	4	nsubj	_	_
4	baliagarria	baliagarri	ADJ	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	_
5	izan	izan	AUX	_	VerbForm=Inf	4	cop	_	_
6	dakizuke	edin	AUX	_	Mood=Pot|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=2|VerbForm=Fin	4	aux	_	ReconstructedLemma=Yes|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Kartzelak	kartzela	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	4	nsubj	_	_
2	gure	gu	PRON	_	PronType=Prs	3	nmod	_	_
3	ezagunez	ezagun	NOUN	_	Case=Ins|Definite=Def|Number=Plur	4	obl	_	_
4	beteta	bete	VERB	_	VerbForm=Part	0	root	_	_
5	daude	egon	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3|VerbForm=Fin	4	cop	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


