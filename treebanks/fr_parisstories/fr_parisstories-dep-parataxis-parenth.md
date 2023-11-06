---
layout: base
title:  'Statistics of parataxis:parenth in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `parataxis:parenth`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-parataxis.html">parataxis</a></tt>.

26 nodes (0%) are attached to their parents as `parataxis:parenth`.

16 instances of `parataxis:parenth` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.92307692307692.

The following 11 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (10; 38% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (7; 27% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis:parenth	color:blue
1	mais	mais	CCONJ	_	_	4	cc	_	AlignBegin=88171|AlignEnd=88323
2	il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	AlignBegin=88323|AlignEnd=88474
3	y	y	PRON	_	Person=3|PronType=Prs	4	expl:comp	_	AlignBegin=88474|AlignEnd=88625
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	reparandum	_	AlignBegin=88625|AlignEnd=88776|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	AlignBegin=88776|AlignEnd=88776
6	euh	euh	INTJ	_	_	4	discourse	_	AlignBegin=88776|AlignEnd=88927|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	AlignBegin=88927|AlignEnd=88927
8	tu	toi	PRON	_	Number=Sing|Person=2|PronType=Prs	9	nsubj	_	AlignBegin=88927|AlignEnd=89068
9	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	parataxis:parenth	_	AlignBegin=89068|AlignEnd=89210
10	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	obj	_	AlignBegin=89210|AlignEnd=89351
11	que	que	PRON	_	PronType=Rel	10	acl:relcl	_	AlignBegin=89351|AlignEnd=89492
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	AlignBegin=89492|AlignEnd=89634|SpaceAfter=No
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	AlignBegin=89634|AlignEnd=89775|SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	AlignBegin=89775|AlignEnd=89775
15	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	16	det	_	AlignBegin=89775|AlignEnd=89916
16	génération	génération	NOUN	_	Gender=Fem|Number=Sing	0	root	_	AlignBegin=89916|AlignEnd=90058|SpaceAfter=No
17	.	.	PUNCT	_	_	16	punct	_	AlignBegin=90058|AlignEnd=90058

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 parataxis:parenth	color:blue
1	et	et	CCONJ	_	_	15	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	15	punct	_	_
3	euh	euh	INTJ	_	_	15	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	jour	jour	NOUN	_	Gender=Masc|Number=Sing	15	obl:mod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	9	nsubj	_	_
9	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	parataxis:parenth	_	_
10	pas	pas	ADV	_	_	9	advmod	_	_
11	pourquoi	pourquoi	ADV	_	_	9	obj	_	SpaceAfter=No
12	,	,	PUNCT	_	_	6	punct	_	_
13	il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
14	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux:tense	_	_
15	commencé	commencer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
16	à	à	ADP	_	_	17	mark	_	_
17	péter	péter	VERB	_	VerbForm=Inf	15	xcomp	_	Subject=SubjRaising
18	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	câble	câble	NOUN	_	Gender=Masc|Number=Sing	17	obj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 16 parataxis:parenth	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	_
4	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	reparandum	_	_
5	tellement	tellement	ADV	_	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	12	punct	_	_
7	euh	euh	INTJ	_	_	12	discourse	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	nsubj	_	_
10	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	12	iobj	_	SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	_
12	dit	dire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
13	,	,	PUNCT	_	_	20	punct	_	_
14	mais	mais	CCONJ	_	_	20	cc	_	_
15	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	16	nsubj	_	_
16	se	soi	PRON	_	ExtPos=VERB|Person=3|PronType=Prs	20	parataxis:parenth	_	Idiom=Yes
17	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	fixed	_	InIdiom=Yes
18	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	20	nsubj	_	SpaceAfter=No
19	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	Reported=Yes
20	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	12	ccomp	_	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	quoi	quoi	INTJ	_	_	20	discourse	_	SpaceAfter=No
23	.	.	PUNCT	_	_	12	punct	_	_

~~~


