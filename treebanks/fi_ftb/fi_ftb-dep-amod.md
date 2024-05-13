---
layout: base
title:  'Statistics of amod in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `amod`

This relation is universal.

6894 nodes (4%) are attached to their parents as `amod`.

6793 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17565999419785.

The following 21 pairs of parts of speech are connected with `amod`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (5802; 84% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (454; 7% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (204; 3% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (137; 2% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (79; 1% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (72; 1% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (33; 0% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (31; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (25; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (21; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (11; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="fi_ftb-pos-DET.html">DET</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-PART.html">PART</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	aurinko	aurinko	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
2	armas	armas	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	1	amod	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	kuivas	kuivata	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	satehen	sade	NOUN	N,Sg,Gen	Case=Gen|Number=Sing|Style=Coll	4	obj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Vanhojen	vanha	ADJ	A,Pl,Gen	Case=Gen|Number=Plur	2	amod	_	_
2	dna-näytteiden	dna-näyte	NOUN	N,Pl,Gen	Case=Gen|Number=Plur	3	obj	_	_
3	käsittely	käsittely	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj:cop	_	_
4	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	äärimmäisen	äärimmäinen	ADJ	A,Sg,Gen	Case=Gen|Number=Sing	6	amod	_	_
6	vaikeata	vaikea	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	noo	noo	INTJ	Pcle,Interj	_	6	discourse	_	Alt=6_discourse
2	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	6	nsubj:cop	_	_
3	o	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
4	jottais	jokin	DET	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind|Style=Coll	6	det	_	_
5	semssi	semmoinen	DET	A,Dem,Pl,Par	Case=Par|Number=Plur|PronType=Dem|Style=Coll	6	amod	_	Alt=DET
6	sukulaissi	sukulainen	NOUN	N,Pl,Par	Case=Par|Number=Plur|Style=Coll	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


