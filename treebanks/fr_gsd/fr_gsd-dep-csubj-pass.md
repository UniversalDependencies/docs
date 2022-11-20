---
layout: base
title:  'Statistics of csubj:pass in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-csubj.html">csubj</a></tt>.

32 nodes (0%) are attached to their parents as `csubj:pass`.

32 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 5 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (26; 81% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	wordform=il
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	interdit	interdire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	d'	de	ADP	_	_	5	mark	_	SpaceAfter=No
5	écrire	écrire	VERB	_	VerbForm=Inf	3	csubj:pass	_	Subject=Generic
6	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	7	det	_	_
7	commentaires	commentaire	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	_
8	contraires	contraire	ADJ	_	Gender=Masc|Number=Plur	7	amod	_	_
9	à	à	ADP	_	_	11	case	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	lois	loi	NOUN	_	Gender=Fem|Number=Plur	8	obl:arg	_	_
12	françaises	français	ADJ	_	Gender=Fem|Number=Plur	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 csubj:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	wordform=il
2	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
3	alors	alors	ADV	_	_	4	advmod	_	_
4	décidé	décider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	qu'	que	SCONJ	_	_	13	mark	_	SpaceAfter=No
6	à	à	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	avenir	avenir	NOUN	_	Gender=Masc|Number=Sing	13	obl:mod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	ce	ce	PRON	_	Gender=Masc|Person=3|PronType=Dem	13	expl:subj	_	_
11	serait	être	AUX	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	trompette	trompette	NOUN	_	Gender=Fem|Number=Sing	4	csubj:pass	_	_
14	qui	qui	PRON	_	PronType=Rel	15	nsubj	_	_
15	convoquerait	convoquer	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	advcl:cleft	_	_
16	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	compétiteurs	compétiteur	NOUN	_	Gender=Masc|Number=Plur	15	obj	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 csubj:pass	color:blue
1	Dimanche	dimanche	NOUN	_	Gender=Masc|Number=Sing	13	obl:mod	_	wordform=dimanche
2	matin	matin	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	5	det	_	_
5	personnes	personne	NOUN	_	Gender=Fem|Number=Plur	13	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	certaines	certain	PRON	_	Gender=Fem|Number=Plur|Person=3|PronType=Ind	5	nmod	_	_
8	accompagnées	accompagner	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	7	csubj:pass	_	_
9	de	de	ADP	_	_	11	case	_	_
10	leurs	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=3|Poss=Yes|PronType=Prs	11	det	_	_
11	enfants	enfant	NOUN	_	Number=Plur	8	obl:agent	_	SpaceAfter=No
12	,	,	PUNCT	_	_	7	punct	_	_
13	venaient	venir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
14	encore	encore	ADV	_	_	13	advmod	_	_
15	déposer	déposer	VERB	_	VerbForm=Inf	13	xcomp	_	Subject=SubjRaising
16	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	17	det	_	_
17	fleurs	fleur	NOUN	_	Gender=Fem|Number=Plur	15	obj	_	_
18	dans	dans	ADP	_	_	20	case	_	_
19	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	silence	silence	NOUN	_	Gender=Masc|Number=Sing	13	obl:mod	_	SpaceAfter=No
21	,	,	PUNCT	_	_	24	punct	_	_
22	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	aux:tense	_	SpaceAfter=No
23	-ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	24	nsubj	_	wordform=ils
24	rapporté	rapporter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	parataxis	_	SpaceAfter=No
25	.	.	PUNCT	_	_	13	punct	_	_

~~~


