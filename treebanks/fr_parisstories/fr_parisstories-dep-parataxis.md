---
layout: base
title:  'Statistics of parataxis in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `parataxis`

This relation is universal.
There are 1 language-specific subtypes of `parataxis`: <tt><a href="fr_parisstories-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

14 nodes (0%) are attached to their parents as `parataxis`.

14 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.71428571428571.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (4; 29% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 parataxis	color:blue
1	ouais	ouais	INTJ	_	_	6	discourse	_	AlignBegin=119290|AlignEnd=119608|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=119608|AlignEnd=119608
3	bah	bah	INTJ	_	_	6	discourse	_	AlignBegin=119608|AlignEnd=119925|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=119925|AlignEnd=119925
5	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	AlignBegin=119925|AlignEnd=120243
6	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=120243|AlignEnd=120561|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	AlignBegin=120561|AlignEnd=120561
8	tu	toi	PRON	_	Number=Sing|Person=2|PronType=Prs	9	nsubj	_	AlignBegin=120561|AlignEnd=120878
9	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	parataxis	_	AlignBegin=120878|AlignEnd=121196
10	raison	raison	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	AlignBegin=121196|AlignEnd=121513|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	AlignBegin=121513|AlignEnd=121513
12	sûrement	sûrement	ADV	_	_	6	advmod	_	AlignBegin=121513|AlignEnd=121831|SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	AlignBegin=121831|AlignEnd=121831

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
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	SpaceAfter=No
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	pas	pas	ADV	_	_	11	advmod	_	_
11	possible	possible	ADJ	_	Number=Sing	0	root	_	SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	tu	toi	PRON	_	Number=Sing|Person=2|PronType=Prs	14	nsubj	_	_
14	peux	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	parataxis	_	_
15	pas	pas	ADV	_	_	14	advmod	_	_
16	connaître	connaître	VERB	_	VerbForm=Inf	14	xcomp	_	SpaceAfter=No|Subject=SubjRaising
17	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	lui	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
3	dis	dire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	oui	oui	ADV	_	_	3	obj	_	Reported=Yes
5	pour	pour	ADP	_	_	6	case	_	_
6	preuve	preuve	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	j'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	SpaceAfter=No
9	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
10	ma	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	11	det	_	_
11	sœur	sœur	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	_
12	qui	qui	PRON	_	PronType=Rel	14	reparandum	_	_
13	euh	euh	INTJ	_	_	14	discourse	_	_
14	qui	qui	PRON	_	PronType=Rel	17	nsubj	_	_
15	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
16	plus	plus	ADV	_	_	17	advmod	_	_
17	claire	clair	ADJ	_	Gender=Fem|Number=Sing	27	reparandum	_	_
18	que	que	ADV	_	_	16	advmod	_	Scrap=Yes
19	qui	qui	PRON	_	PronType=Rel	22	nsubj	_	_
20	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	_
21	plus	plus	ADV	_	_	22	advmod	_	_
22	claire	clair	ADJ	_	Gender=Fem|Number=Sing	27	reparandum	_	_
23	que	que	SCONJ	_	_	24	case	_	_
24	moi	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	22	obl:mod	_	_
25	qui	qui	PRON	_	PronType=Rel	27	nsubj	_	_
26	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	_
27	claire	clair	ADJ	_	Gender=Fem|Number=Sing	11	acl:relcl	_	_
28	de	de	ADP	_	_	29	case	_	_
29	peau	peau	NOUN	_	Gender=Fem|Number=Sing	27	obl:mod	_	SpaceAfter=No
30	.	.	PUNCT	_	_	3	punct	_	_

~~~


