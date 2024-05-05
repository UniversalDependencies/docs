---
layout: base
title:  'Statistics of obl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="fr_parisstories-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_parisstories-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_parisstories-dep-obl-mod.html">obl:mod</a></tt>.

11 nodes (0%) are attached to their parents as `obl`.

10 instances of `obl` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.81818181818182.

The following 4 pairs of parts of speech are connected with `obl`: <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (6; 55% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (3; 27% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 obl	color:blue
1	donc	donc	ADV	_	_	3	advmod	_	_
2	j'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	SpaceAfter=No
3	avais	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
4	énormément	énormément	ADV	_	_	3	obj	_	_
5	de	de	ADP	_	_	8	reparandum	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	de	de	ADP	_	_	8	case	_	_
8	lacunes	lacune	NOUN	_	Gender=Fem|Number=Plur	4	obl:arg	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	dans	dans	ADP	_	_	12	case	_	_
11	pas	pas	ADV	_	_	12	advmod	_	_
12	mal	mal	ADV	_	Gender=Masc|Number=Sing	8	advmod	_	_
13	de	de	ADP	_	_	14	case	_	_
14	matières	matières	NOUN	_	Gender=Fem|Number=Plur	12	obl	_	_
15	littéraires	littéraires	ADJ	_	Number=Plur	14	amod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 obl	color:blue
1	hein	hein	INTJ	_	_	11	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	euh	euh	INTJ	_	_	11	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	comme	comme	ADP	_	_	7	case	_	_
6	d'	de	ADP	_	_	7	case	_	SpaceAfter=No
7	habitude	habitude	NOUN	_	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	tu	toi	PRON	_	Number=Sing|Person=2|PronType=Prs	11	nsubj	_	_
10	la	lui	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
11	connais	connaître	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
12	!	!	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 19 obl	color:blue
1	donc	donc	ADV	_	_	6	advmod	_	_
2	que	que	SCONJ	_	_	1	dep	_	Scrap=Yes
3	ouais	ouais	INTJ	_	_	6	discourse	_	_
4	euh	euh	INTJ	_	_	6	discourse	_	_
5	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	que	que	SCONJ	_	_	12	mark	_	_
8	euh	euh	INTJ	_	_	12	discourse	_	_
9	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	SpaceAfter=No
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	truc	truc	NOUN	_	Gender=Masc|Number=Sing	6	ccomp	_	_
13	sympa	sympa	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
14	à	à	ADP	_	_	15	reparandum	_	_
15	à	à	ADP	_	ExtPos=ADV	12	advmod	_	Idiom=Yes
16	côté	côté	NOUN	_	Gender=Masc|Number=Sing	15	fixed	_	InIdiom=Yes
17	de	de	ADP	_	_	19	case	_	_
18	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	19	det	_	SpaceAfter=No
19	enseignement	enseignement	NOUN	_	Gender=Masc|Number=Sing	15	obl	_	SpaceAfter=No
20	.	.	PUNCT	_	_	6	punct	_	_

~~~


