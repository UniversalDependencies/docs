---
layout: base
title:  'Statistics of expl in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `expl`

This relation is universal.

524 nodes (0%) are attached to their parents as `expl`.

507 instances of `expl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.08778625954198.

The following 6 pairs of parts of speech are connected with `expl`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (452; 86% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (33; 6% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (26; 5% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (11; 2% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 expl	color:blue
1	Turhautuneisuus	turhautuneisuus	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	johtui	johtua	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	siitä	se	PRON	Pron,Dem,Sg,Ela	Case=Ela|Number=Sing|PronType=Dem	6	expl	_	Alt=6_expl|Missed-Rel=phrm
4	,	,	PUNCT	Pun	_	3	punct	_	_
5	ett	että	SCONJ	Pcle,CS	Style=Coll	6	mark	_	Join=Yes
6	eivät	ei	VERB	V,Neg,Act,Pl3	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	2	advcl	_	_
7	--	--	PUNCT	Pun	_	6	punct	_	Missed-SUBCAT=DASH

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 expl	color:blue
1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	7	expl	_	Alt=7_expl|Missed-Rel=phrm
2	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	oma	oma	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	amod	_	_
4	vika	vika	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	ccomp	_	_
5	jos	jos	SCONJ	Pcle,CS	_	7	mark	_	_
6	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	yksinäinen	yksinäinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	csubj:cop	_	_
8	,	,	PUNCT	Pun	_	7	punct	_	_
9	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	sanoo	sanoa	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 expl	color:blue
1	Logistiikan	logistiikka	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
2	hallintaa	hallinta	NOUN	N,Sg,Par	Case=Par|Number=Sing	0	root	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	sitä	se	PRON	Pron,Dem,Sg,Par	Case=Par|Number=Sing|PronType=Dem	2	expl	_	Alt=6_expl|Missed-Rel=phrm
5	se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	2	expl	_	Alt=6_expl|Missed-Rel=phrm
6	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
7	tämä	tämä	DET	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	10	det	_	_
8	tämmöinen	tämmöinen	DET	A,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	9	amod	_	Alt=DET
9	uusi	uusi	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	10	amod	_	_
10	ajattelu	ajattelu	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	nsubj:cop	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_

~~~


