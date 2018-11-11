---
layout: base
title:  'Statistics of advcl:cleft in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `advcl:cleft`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-advcl.html">advcl</a></tt>.

108 nodes (0%) are attached to their parents as `advcl:cleft`.

107 instances of `advcl:cleft` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.68518518518519.

The following 9 pairs of parts of speech are connected with `advcl:cleft`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (58; 54% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (16; 15% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (13; 12% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (8; 7% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 advcl:cleft	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	troisième	troisième	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
5	fois	fois	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
8	venons	venir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	advcl:cleft	_	SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	_
10	avec	avec	ADP	_	_	13	case	_	_
11	et	et	CCONJ	_	_	12	cc	_	_
12	sans	sans	ADP	_	_	10	conj	_	_
13	enfants	enfant	NOUN	_	Gender=Masc|Number=Plur	8	obl:mod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl:cleft	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	3	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ainsi	ainsi	ADV	_	_	0	root	_	_
4	que	que	SCONJ	_	_	6	mark	_	_
5	se	se	PRON	_	Person=3|PronType=Prs	6	expl:pass	_	_
6	développe	développer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:cleft	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	nouveau	nouveau	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
9	quartier	quartier	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No
10	--	--	PUNCT	_	_	12	punct	_	SpaceAfter=No
11	ou	ou	CCONJ	_	_	12	cc	_	_
12	ensanche	ensanche	NOUN	_	_	9	appos	_	SpaceAfter=No
13	--	--	PUNCT	_	_	12	punct	_	SpaceAfter=No
14	de	de	ADP	_	_	15	case	_	_
15	Amara	Amara	PROPN	_	_	9	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 advcl:cleft	color:blue
1	Qu'	que	PRON	_	_	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	1	nsubj	_	_
4	qui	qui	PRON	_	_	5	nsubj	_	_
5	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	advcl:cleft	_	_
6	augmenter	augmenter	VERB	_	VerbForm=Inf	5	xcomp	_	_
7	?	?	PUNCT	_	_	1	punct	_	_

~~~


