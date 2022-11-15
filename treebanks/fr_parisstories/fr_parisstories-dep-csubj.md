---
layout: base
title:  'Statistics of csubj in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `csubj`

This relation is universal.

14 nodes (0%) are attached to their parents as `csubj`.

14 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.28571428571429.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (10; 71% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (2; 14% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 csubj	color:blue
1	donc	donc	ADV	_	_	5	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
6	qu'	que	SCONJ	_	_	10	mark	_	SpaceAfter=No
7	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	_
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
9	toujours	toujours	ADV	_	_	10	advmod	_	_
10	resté	rester	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	csubj	_	_
11	là-dessus	là	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 csubj	color:blue
1	mais	mais	CCONJ	_	_	6	cc	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	aussi	aussi	ADV	_	_	6	advmod	_	_
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	gens	gens	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
7	là-bas	là-bas	ADV	_	_	6	advmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	donc	donc	ADV	_	_	12	cc	_	_
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	expl:subj	_	SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	6	conj	_	_
13	qu'	que	SCONJ	_	_	17	mark	_	SpaceAfter=No
14	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	nsubj	_	_
15	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
16	très	très	ADV	_	_	17	advmod	_	_
17	ouverts	ouvert	ADJ	_	Gender=Masc|Number=Plur	12	csubj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	_
19	très	très	ADV	_	_	20	advmod	_	_
20	gentils	gentil	ADJ	_	Gender=Masc|Number=Plur	17	conj	_	SpaceAfter=No
21	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 csubj	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
3	mettait	mettre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	vraiment	vraiment	ADV	_	_	3	advmod	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	bonne	bon	ADJ	_	Gender=Fem|Number=Sing	7	amod	_	_
7	ambiance	ambiance	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	et	et	CCONJ	_	_	12	cc	_	_
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	expl:subj	_	SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	3	conj	_	_
13	que	que	SCONJ	_	_	17	mark	_	_
14	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj	_	SpaceAfter=No
15	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
16	quelque	quelque	DET	_	Number=Sing|Person=3|PronType=Ind	17	det	_	_
17	chose	chose	NOUN	_	Gender=Fem|Number=Sing	12	csubj	_	_
18	que	que	PRON	_	PronType=Rel	21	obj	_	_
19	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	21	nsubj	_	SpaceAfter=No
20	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	21	aux:tense	_	_
21	adoré	adorer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	17	acl:relcl	_	_
22	là-bas	là-bas	ADV	_	_	21	advmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	_
24	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	25	nsubj	_	SpaceAfter=No
25	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	_	_
26	que	que	SCONJ	_	_	31	mark	_	_
27	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	28	det	_	_
28	gens	gens	NOUN	_	Gender=Masc|Number=Plur	31	nsubj	_	_
29	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	31	aux:pass	_	_
30	vraiment	vraiment	ADV	_	_	31	advmod	_	_
31	ouverts	ouvrir	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	25	ccomp	_	SpaceAfter=No
32	.	.	PUNCT	_	_	3	punct	_	_

~~~


