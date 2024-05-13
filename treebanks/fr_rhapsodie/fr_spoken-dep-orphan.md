---
layout: base
title:  'Statistics of orphan in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `orphan`

This relation is universal.

2 nodes (0%) are attached to their parents as `orphan`.

2 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `orphan`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 17 orphan	color:blue
1	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	LKP	LKP	PROPN	_	_	3	nsubj	_	_
3	lance	lancer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	appel	appel	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	à	à	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	calme	calme	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	et	et	CCONJ	_	_	11	cc	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	maire	maire	NOUN	_	Gender=Masc|Number=Sing	3	conj	_	_
12	de	de	ADP	_	_	13	case	_	_
13	Pointe-à-Pitre	Pointe-à-Pitre	PROPN	_	_	11	nmod	_	_
14	Jacques	Jacques	PROPN	_	_	11	appos	_	_
15	Bangou	Bangou	PROPN	_	_	14	flat	_	_
16	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	cri	cri	NOUN	_	Gender=Masc|Number=Sing	11	orphan	_	_
18	d'	de	ADP	_	_	19	case	_	_
19	alarme	alarme	NOUN	_	Gender=Fem|Number=Sing	17	nmod	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 orphan	color:blue
1	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	été	être	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	an	an	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_
6	à	à	ADP	_	_	7	case	_	_
7	Lisbonne	Lisbonne	PROPN	_	_	3	obl:arg	_	_
8	et	et	CCONJ	_	_	10	cc	_	_
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	an	an	NOUN	_	Gender=Masc|Number=Sing	3	conj	_	_
11	à	à	ADP	_	_	12	case	_	_
12	Porto	Porto	PROPN	_	_	10	orphan	_	_
13	dans	dans	ADP	_	_	14	dep:comp	_	_
14	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	dep	_	_
15	dans	dans	ADP	_	_	17	case	_	_
16	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	17	det	_	_
17	collèges	collège	NOUN	_	Gender=Masc|Number=Plur	14	reparandum	_	_
18	et	et	CCONJ	_	_	20	cc	_	_
19	dans	dans	ADP	_	_	20	dep:comp	_	_
20	des	un	DET	de	Definite=Ind|Number=Plur|PronType=Art	17	conj	_	_
21	dans	dans	ADP	_	_	23	case	_	_
22	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	23	det	_	_
23	primaires	primaire	NOUN	_	Gender=Fem|Number=Plur	20	reparandum	_	_
24	portu~	portu~	ADJ	_	_	23	amod	_	_
25	euh	euh	INTJ	_	_	24	discourse	_	_
26	enfin	enfin	ADV	_	_	24	discourse	_	_
27	françaises	français	ADJ	conj:reform	Gender=Fem|Number=Plur	24	reparandum	_	_

~~~


