---
layout: base
title:  'Statistics of goeswith in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `goeswith`

This relation is universal.

7 nodes (0%) are attached to their parents as `goeswith`.

7 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `goeswith`: <tt><a href="fr_parisstories-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (3; 43% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (1; 14% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 14% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (1; 14% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 goeswith	color:blue
1	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	4	dislocated	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	restais	rester	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
5	avec	avec	ADP	_	_	8	case	_	_
6	d'	d'	ADP	_	_	8	case	_	SpaceAfter=No
7	autres	autre	ADJ	_	Number=Plur	8	amod	_	_
8	personnes	personne	NOUN	_	Gender=Fem|Number=Plur	4	obl:arg	_	_
9	dans	dans	ADP	_	_	11	case	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	classe	classe	NOUN	_	Gender=Fem|Number=Sing	4	obl:mod	_	_
12	et	et	CCONJ	_	_	11	conj	_	_
13	cetera	cetera	ADV	_	_	12	goeswith	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 goeswith	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	SpaceAfter=No
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	marrant	marrant	ADJ	_	Gender=Masc|Number=Sing	7	discourse	_	_
4	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	l'	le	PRON	_	Number=Sing|Person=3|PronType=Prs	7	obj	_	SpaceAfter=No
6	ai	avoir	AUX	_	_	7	aux	_	_
7	vue	voir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	de	de	ADP	_	_	7	dep	_	_
9	d~	de	ADP	_	_	8	reparandum	_	_
10	~	~	X	_	_	9	goeswith	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	toute	tout	ADJ	_	Gender=Fem|Number=Sing	13	advcl	_	_
13	de	de	ADP	_	_	9	reparandum	_	SpaceAfter=No
14	,	,	PUNCT	_	_	18	punct	_	_
15	de	de	ADP	_	_	18	case	_	_
16	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	18	det	_	SpaceAfter=No
17	autre	autre	ADJ	_	Number=Sing	18	amod	_	_
18	côté	côté	NOUN	_	Gender=Masc|Number=Sing	13	reparandum	_	_
19	de	de	ADP	_	_	21	case	_	_
20	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	cour	cour	NOUN	_	Gender=Fem|Number=Sing	18	nmod	_	_
22	carrément	carrément	ADV	_	_	18	advmod	_	SpaceAfter=No
23	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 goeswith	color:blue
1	donc	donc	ADV	_	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	SpaceAfter=No
4	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	première	premier	ADJ	_	Gender=Fem|Number=Sing	7	amod	_	_
7	fois	fois	NOUN	_	Gender=Fem	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	pas	pas	ADV	_	_	12	advmod	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
11	première	premier	ADJ	_	Gender=Fem|Number=Sing	12	amod	_	_
12	fois	fois	NOUN	_	Gender=Fem	7	reparandum	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	mais	mais	CCONJ	_	_	18	cc	_	_
15	peut	peut	ADV	_	_	18	advmod	_	_
16	être	être	AUX	_	_	15	goeswith	_	_
17	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	18	det	_	SpaceAfter=No
18	une	une	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Ind	12	reparandum	_	_
19	des	des	ADP	_	_	21	case	_	_
20	premières	premier	ADJ	_	Gender=Fem|Number=Plur	21	amod	_	_
21	fois	fois	NOUN	_	Gender=Fem	18	nmod	_	_
22	où	où	PRON	_	PronType=Rel	26	advcl	_	SpaceAfter=No
23	,	,	PUNCT	_	_	24	punct	_	_
24	où	où	PRON	_	PronType=Rel	22	reparandum	_	_
25	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	26	nsubj	_	SpaceAfter=No
26	arrivais	arriver	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	21	acl:relcl	_	_
27	à	à	ADP	_	_	28	case	_	_
28	Paris	Paris	PROPN	_	_	26	obl:arg	_	SpaceAfter=No
29	.	.	PUNCT	_	_	7	punct	_	_

~~~


