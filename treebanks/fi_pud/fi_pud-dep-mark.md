---
layout: base
title:  'Statistics of mark in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `mark`

This relation is universal.

313 nodes (2%) are attached to their parents as `mark`.

313 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.3258785942492.

The following 8 pairs of parts of speech are connected with `mark`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (224; 72% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (50; 16% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (19; 6% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (6; 2% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (5; 2% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Luulen	luulla	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	6:punct	_
3	että	että	SCONJ	_	_	6	mark	6:mark	_
4	he	hän	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
5	siksi	siksi	ADV	_	_	6	advmod	6:advmod	_
6	uppoutuvat	uppoutua	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	1:ccomp	_
7	kuvioihin	kuvio	NOUN	_	Case=Ill|Number=Plur	6	obl	6:obl	_
8	ja	ja	CCONJ	_	_	9	cc	9:cc	_
9	väreihin	väre	NOUN	_	Case=Ill|Number=Plur	7	conj	7:conj	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Joskus	joskus	ADV	_	_	5	advmod	5:advmod	_
2	se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	5	nsubj:cop	5:nsubj:cop	_
3	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	kuin	kuin	SCONJ	_	_	5	mark	5:mark	_
5	supervoima	super#voima	NOUN	_	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 mark	color:blue
1	Ehkäpä	ehkäpä	ADV	_	_	4	advmod	4:advmod	_
2	se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	_
3	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	haittaa	haitata	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	10:punct	_
6	koska	koska	SCONJ	_	_	10	mark	10:mark	_
7	en	ei	AUX	_	Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
8	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
9	kauaa	kauaa	ADV	_	_	10	advmod	10:advmod	_
10	levoton	levoton	ADJ	_	Case=Nom|Degree=Pos|Derivation=Ton|Number=Sing	4	advcl	4:advcl	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


