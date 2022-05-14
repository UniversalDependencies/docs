---
layout: base
title:  'Statistics of parataxis in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `parataxis`

This relation is universal.
There are 1 language-specific subtypes of `parataxis`: <tt><a href="fr_parisstories-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

4 nodes (0%) are attached to their parents as `parataxis`.

4 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 23 parataxis	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
3	avais	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	tout	tout	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	cercle	cercle	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
7	de	de	ADP	_	_	9	case	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	collégiens	collégien	NOUN	_	Gender=Masc|Number=Plur	6	nmod	_	_
10	autour	autour	ADV	_	_	3	advmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	hyper	hyper	ADV	_	_	13	advmod	_	_
13	choqués	choquer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	9	acl	_	SpaceAfter=No
14	,	,	PUNCT	_	_	17	punct	_	_
15	et	et	CCONJ	_	_	17	cc	_	_
16	qui	qui	PRON	_	PronType=Rel	17	nsubj	_	_
17	étaient	être	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	9	acl	_	_
18	genre	genre	INTJ	_	_	23	discourse	_	_
19	là	là	ADV	_	_	17	xcomp	_	SpaceAfter=No
20	,	,	PUNCT	_	_	23	punct	_	_
21	ah	ah	INTJ	_	_	23	discourse	_	_
22	mon	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=1|PronType=Prs	23	det	_	_
23	dieu	dieu	NOUN	_	Gender=Masc|Number=Sing	17	parataxis	_	Reported=Yes
24	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 parataxis	color:blue
1	honnêtement	honnêtement	ADV	_	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	euh	euh	INTJ	_	_	1	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	SpaceAfter=No
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	pas	pas	ADV	_	_	11	advmod	_	_
11	possible	possible	ADJ	_	Number=Sing	6	reparandum	_	SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	14	nsubj	_	_
14	peux	pouvoir	VERB	_	_	11	parataxis	_	_
15	pas	pas	ADV	_	_	14	advmod	_	_
16	connaître	connaître	VERB	_	VerbForm=Inf	14	xcomp	_	SpaceAfter=No
17	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 parataxis	color:blue
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	3	nsubj	_	_
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	là	là	ADV	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	10	punct	_	_
5	non	non	ADV	_	_	10	discourse	_	_
6	mais	mais	CCONJ	_	_	10	cc	_	_
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	Reported=Yes
9	pas	pas	ADV	_	_	10	advmod	_	_
10	possible	possible	ADJ	_	Gender=Masc|Number=Sing	3	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	_
13	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	conj	_	_
14	pas	pas	ADV	_	_	13	advmod	_	_
15	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	16	obj	_	_
16	faire	faire	VERB	_	VerbForm=Inf	13	xcomp	_	SpaceAfter=No
17	.	.	PUNCT	_	_	3	punct	_	_

~~~


