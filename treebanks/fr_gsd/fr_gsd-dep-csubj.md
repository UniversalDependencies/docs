---
layout: base
title:  'Statistics of csubj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_gsd-dep-csubj-pass.html">csubj:pass</a></tt>.

166 nodes (0%) are attached to their parents as `csubj`.

138 instances of `csubj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.90361445783132.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (92; 55% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (45; 27% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (18; 11% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 csubj	color:blue
1	Seul	seul	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	wordform=seul
2	bémol	bémol	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	trouver	trouver	VERB	_	VerbForm=Inf	11	csubj	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	place	place	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	_
7	de	de	ADP	_	_	8	case	_	_
8	parking	parking	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	très	très	ADV	_	_	11	advmod	_	_
11	difficile	difficile	ADJ	_	Gender=Masc|Number=Sing	2	parataxis	_	_
12	!	!	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	2	expl:subj	_	SpaceAfter=No|wordform=c'
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	à	à	ADP	_	_	4	mark	_	_
4	croire	croire	VERB	_	VerbForm=Inf	2	ccomp	_	_
5	qu'	que	SCONJ	_	_	9	mark	_	SpaceAfter=No
6	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	9	nsubj	_	_
7	se	se	PRON	_	Person=3|PronType=Prs	9	obj	_	_
8	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux:tense	_	_
9	consultés	consulter	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	csubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 csubj	color:blue
1	Aller	aller	VERB	_	VerbForm=Inf	10	csubj	_	wordform=aller
2	dans	dans	ADP	_	_	4	case	_	_
3	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	restaurant	restaurant	NOUN	_	Gender=Masc|Number=Sing	1	obl:arg	_	_
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
6	tout	tout	ADV	_	_	7	advmod	_	_
7	simplement	simplement	ADV	_	_	10	advmod	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	grand	grand	ADJ	_	Gender=Masc|Number=Sing	10	amod	_	_
10	plaisir	plaisir	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
11	!	!	PUNCT	_	_	10	punct	_	_

~~~


