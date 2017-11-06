---
layout: base
title:  'Statistics of parataxis in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `parataxis`

This relation is universal.

108 nodes (1%) are attached to their parents as `parataxis`.

108 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.5925925925926.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (63; 58% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (12; 11% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (11; 10% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	”	”	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Rakastin	rakastaa	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	trooppisia	trooppinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Inen|Number=Plur	4	amod	_	_
4	värejä	väri	NOUN	_	Case=Par|Number=Plur	2	obj	_	SpaceAfter=No
5	”	”	PUNCT	_	_	2	punct	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	hän	hän	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	sanoo	sanoa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 parataxis	color:blue
1	Hän	hän	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	laukonut	laukoa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	ennätysmäärän	ennätys#määrä	NOUN	_	Case=Gen|Number=Sing	3	obj	_	_
5	maaleja	maali	NOUN	_	Case=Par|Number=Plur	4	nmod	_	_
6	DFB:lle	DFB	PROPN	_	Case=All|Number=Sing	3	obl	_	SpaceAfter=No
7	:	:	PUNCT	_	_	3	punct	_	_
8	71	71	NUM	_	NumType=Card	9	nummod	_	_
9	maalia	maali	NOUN	_	Case=Par|Number=Sing	3	parataxis	_	_
10	137	137	NUM	_	NumType=Card	12	nummod	_	_
11	kansainvälisessä	kansain#välinen	ADJ	_	Case=Ine|Degree=Pos|Derivation=Inen|Number=Sing	12	amod	_	_
12	ottelussa	ottelu	NOUN	_	Case=Ine|Derivation=U|Number=Sing	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 parataxis	color:blue
1	Nykyiset	nykyinen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Inen|Number=Plur	2	amod	_	_
2	pidätykset	pidätys	NOUN	_	Case=Nom|Number=Plur	5	nsubj:cop	_	_
3	ovat	olla	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	”	”	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	jatkoa	jatko	NOUN	_	Case=Par|Number=Sing	0	root	_	_
6	meitä	minä	PRON	_	Case=Par|Number=Plur|Person=1|PronType=Prs	8	obl	_	_
7	vastaan	vastaan	ADP	_	AdpType=Post	6	case	_	_
8	kohdistetuille	kohdistaa	VERB	_	Case=All|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Pass	9	acl	_	_
9	kepposille	kepponen	NOUN	_	Case=All|Number=Plur	5	nmod	_	SpaceAfter=No
10	”	”	PUNCT	_	_	5	punct	_	SpaceAfter=No
11	,	,	PUNCT	_	_	5	punct	_	_
12	Dündar	Dündar	PROPN	_	Case=Nom|Number=Sing	13	nsubj	_	_
13	sanoi	sanoa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	_	_	5	punct	_	_

~~~


