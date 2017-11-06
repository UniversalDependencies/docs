---
layout: base
title:  'Statistics of mark in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `mark`

This relation is universal.

313 nodes (2%) are attached to their parents as `mark`.

313 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.30990415335463.

The following 11 pairs of parts of speech are connected with `mark`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (219; 70% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (51; 16% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (19; 6% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (6; 2% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Luulen	luulla	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	_
3	että	että	SCONJ	_	_	6	mark	_	_
4	he	hän	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
5	siksi	siksi	ADV	_	_	6	advmod	_	_
6	uppoutuvat	uppoutua	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
7	kuvioihin	kuvio	NOUN	_	Case=Ill|Number=Plur	6	obl	_	_
8	ja	ja	CCONJ	_	_	9	cc	_	_
9	väreihin	väre	NOUN	_	Case=Ill|Number=Plur	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Joskus	joskus	ADV	_	_	5	advmod	_	_
2	se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	5	nsubj:cop	_	_
3	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	kuin	kuin	SCONJ	_	_	5	mark	_	_
5	supervoima	super#voima	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 mark	color:blue
1	Ehkäpä	ehkäpä	ADV	_	_	4	advmod	_	_
2	se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	_	_
3	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	4	aux	_	_
4	haittaa	haitata	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	koska	koska	SCONJ	_	_	10	mark	_	_
7	en	ei	AUX	_	Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin|Voice=Act	10	aux	_	_
8	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	kauaa	kauaa	ADV	_	_	10	advmod	_	_
10	levoton	levoton	ADJ	_	Case=Nom|Degree=Pos|Derivation=Ton|Number=Sing	4	advcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


