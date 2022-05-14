---
layout: base
title:  'Statistics of parataxis in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `parataxis`

This relation is universal.

108 nodes (1%) are attached to their parents as `parataxis`.

108 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.6574074074074.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (65; 60% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (12; 11% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (10; 9% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	”	”	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No
2	Rakastin	rakastaa	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	trooppisia	trooppinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Inen|Number=Plur	4	amod	4:amod	_
4	värejä	väri	NOUN	_	Case=Par|Number=Plur	2	obj	2:obj	SpaceAfter=No
5	”	”	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	8:punct	_
7	hän	hän	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	8:nsubj	_
8	sanoo	sanoa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	2:parataxis	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 parataxis	color:blue
1	Hän	hän	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	laukonut	laukoa	VERB	_	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	ennätysmäärän	ennätys#määrä	NOUN	_	Case=Gen|Number=Sing	3	obj	3:obj	_
5	maaleja	maali	NOUN	_	Case=Par|Number=Plur	4	nmod	4:nmod	_
6	DFB:lle	DFB	PROPN	_	Case=All|Number=Sing	3	obl	3:obl	SpaceAfter=No
7	:	:	PUNCT	_	_	9	punct	9:punct	_
8	71	71	NUM	_	NumType=Card	9	nummod	9:nummod	_
9	maalia	maali	NOUN	_	Case=Par|Number=Sing	3	parataxis	3:parataxis	_
10	137	137	NUM	_	NumType=Card	12	nummod	12:nummod	_
11	kansainvälisessä	kansain#välinen	ADJ	_	Case=Ine|Degree=Pos|Derivation=Inen|Number=Sing	12	amod	12:amod	_
12	ottelussa	ottelu	NOUN	_	Case=Ine|Derivation=U|Number=Sing	9	nmod	9:nmod	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 parataxis	color:blue
1	Nykyiset	nykyinen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Inen|Number=Plur	2	amod	2:amod	_
2	pidätykset	pidätys	NOUN	_	Case=Nom|Number=Plur	5	nsubj:cop	5:nsubj:cop	_
3	ovat	olla	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	”	”	PUNCT	_	_	5	punct	5:punct	SpaceAfter=No
5	jatkoa	jatko	NOUN	_	Case=Par|Number=Sing	0	root	0:root	_
6	meitä	minä	PRON	_	Case=Par|Number=Plur|Person=1|PronType=Prs	8	obl	8:obl	_
7	vastaan	vastaan	ADP	_	AdpType=Post	6	case	6:case	_
8	kohdistetuille	kohdistaa	VERB	_	Case=All|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Pass	9	acl	9:acl	_
9	kepposille	kepponen	NOUN	_	Case=All|Number=Plur	5	nmod	5:nmod	SpaceAfter=No
10	”	”	PUNCT	_	_	5	punct	5:punct	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	13:punct	_
12	Dündar	Dündar	PROPN	_	Case=Nom|Number=Sing	13	nsubj	13:nsubj	_
13	sanoi	sanoa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	5:parataxis	SpaceAfter=No
14	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


