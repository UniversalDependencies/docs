---
layout: base
title:  'Statistics of root in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `root`

This relation is universal.

18723 nodes (12%) are attached to their parents as `root`.

18723 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.46344068792394.

The following 11 pairs of parts of speech are connected with `root`: -<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (14255; 76% instances), -<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (2392; 13% instances), -<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (1516; 8% instances), -<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (158; 1% instances), -<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (156; 1% instances), -<tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt> (91; 0% instances), -<tt><a href="fi_ftb-pos-PART.html">PART</a></tt> (42; 0% instances), -<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (37; 0% instances), -<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (36; 0% instances), -<tt><a href="fi_ftb-pos-X.html">X</a></tt> (33; 0% instances), -<tt><a href="fi_ftb-pos-SCONJ.html">SCONJ</a></tt> (7; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	ei	ei	AUX	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	voi	voida	AUX	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	ajatellakhaa	ajatella	VERB	V,Act,InfA,Lat,Kaan	Case=Lat|Clitic=Kaan|InfForm=1|Style=Coll|VerbForm=Inf|Voice=Act	0	root	_	_
4	varhmaan	varmaan	PART	Pcle	Style=Coll	3	advmod	_	_
5	että	että	SCONJ	Pcle,CS	_	9	mark	_	_
6	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	9	nsubj:cop	_	_
7	ikinä	ikinä	ADV	Adv	_	9	advmod	_	_
8	olis	olla	AUX	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	9	cop	_	_
9	vakinaisia	vakinainen	ADJ	A,Pl,Par	Case=Par|Number=Plur	3	ccomp	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	noo	noo	INTJ	Pcle,Interj	_	6	discourse	_	Alt=6_discourse
2	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	6	nsubj:cop	_	_
3	o	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
4	jottais	jokin	DET	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind|Style=Coll	6	det	_	_
5	semssi	semmoinen	DET	A,Dem,Pl,Par	Case=Par|Number=Plur|PronType=Dem|Style=Coll	6	amod	_	Alt=DET
6	sukulaissi	sukulainen	NOUN	N,Pl,Par	Case=Par|Number=Plur|Style=Coll	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Vanhojen	vanha	ADJ	A,Pl,Gen	Case=Gen|Number=Plur	2	amod	_	_
2	dna-näytteiden	dna-näyte	NOUN	N,Pl,Gen	Case=Gen|Number=Plur	3	obj	_	_
3	käsittely	käsittely	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj:cop	_	_
4	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	äärimmäisen	äärimmäinen	ADJ	A,Sg,Gen	Case=Gen|Number=Sing	6	amod	_	_
6	vaikeata	vaikea	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


