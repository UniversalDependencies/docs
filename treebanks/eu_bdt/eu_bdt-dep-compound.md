---
layout: base
title:  'Statistics of compound in UD_Basque-BDT'
udver: '2'
---

## Treebank Statistics: UD_Basque-BDT: Relations: `compound`

This relation is universal.

1894 nodes (2%) are attached to their parents as `compound`.

1613 instances of `compound` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04329461457233.

The following 22 pairs of parts of speech are connected with `compound`: <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (959; 51% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (286; 15% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (281; 15% instances), <tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (94; 5% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt> (81; 4% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (49; 3% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (40; 2% instances), <tt><a href="eu_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (29; 2% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-ADV.html">ADV</a></tt> (20; 1% instances), <tt><a href="eu_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="eu_bdt-pos-DET.html">DET</a></tt> (10; 1% instances), <tt><a href="eu_bdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-CCONJ.html">CCONJ</a></tt> (10; 1% instances), <tt><a href="eu_bdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu_bdt-pos-PART.html">PART</a></tt> (6; 0% instances), <tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="eu_bdt-pos-DET.html">DET</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="eu_bdt-pos-NUM.html">NUM</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	Susanari	Susana	PROPN	_	Case=Dat|Definite=Def|Number=Sing	7	iobj	_	_
2	ere	ere	CCONJ	_	_	4	advmod	_	_
3	ez	ez	PART	_	Polarity=Neg	4	advmod	_	_
4	zirudien	iruditu	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3|VerbForm=Fin	0	root	_	_
5	asko	asko	ADV	_	_	7	advmod	_	_
6	axola	axola	NOUN	_	Case=Abs|Definite=Ind	7	compound	_	_
7	zitzaionik	izan	VERB	_	VerbForm=Fin	4	ccomp	_	SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Euskal	euskal	NOUN	_	_	3	compound	_	_
3	Herrian	herri	NOUN	_	Case=Ine|Definite=Def|Number=Sing	4	obl	_	_
4	jaio	jaio	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
5	dira	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3|VerbForm=Fin	4	aux	_	_
6	eta	eta	CCONJ	_	_	9	cc	_	_
7	guraso	guraso	NOUN	_	_	9	obj	_	_
8	euskaldunak	euskaldun	ADJ	_	Case=Abs|Definite=Def|Number=Plur	7	amod	_	_
9	dituzte	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=3|Person[erg]=3|VerbForm=Fin	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Ruandan	Ruanda	PROPN	_	Case=Ine|Definite=Def|Number=Sing	3	obl	_	_
3	hil	hil	VERB	_	VerbForm=Part	0	root	_	_
4	egingo	egin	VERB	_	Aspect=Prosp|VerbForm=Part	3	compound	_	_
5	gaituzte	edun	AUX	_	Mood=Ind|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=1|Person[erg]=3|VerbForm=Fin	3	aux	_	ReconstructedLemma=Yes|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	abereak	abere	NOUN	_	Animacy=Anim|Case=Abs|Definite=Def|Number=Plur	8	nsubj	_	_
8	bagina	izan	VERB	_	Aspect=Prog|Mood=Cnd|Number[abs]=Plur|Person[abs]=1|VerbForm=Fin	3	advcl	_	_
9	bezala	bezala	ADV	_	_	8	mark	_	SpaceAfter=No
10	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


