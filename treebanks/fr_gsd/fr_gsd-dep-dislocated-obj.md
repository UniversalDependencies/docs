---
layout: base
title:  'Statistics of dislocated:obj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dislocated:obj`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="fr_gsd-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_gsd-dep-dislocated-subj.html">dislocated:subj</a></tt>.

5 nodes (0%) are attached to their parents as `dislocated:obj`.

4 instances of `dislocated:obj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.4.

The following 4 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 13 dislocated:obj	color:blue
1	«	«	PUNCT	_	_	5	punct	_	_
2	Il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl:subj	_	wordform=il
3	n'	ne	ADV	_	Polarity=Neg	5	advmod	_	SpaceAfter=No
4	y	y	PRON	_	Emph=No|Person=3|PronType=Prs	5	expl:comp	_	_
5	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	pas	pas	ADV	_	Polarity=Neg	5	advmod	_	_
7	de	un	DET	_	Definite=Ind|Number=Sing|PronType=Art	8	det	_	_
8	problème	problème	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	Exponence[Gender]=Inherent
9	de	de	ADP	_	_	10	case	_	_
10	banlieue	banlieue	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	Exponence[Gender]=Inherent
11	et	et	CCONJ	_	_	17	cc	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	banlieue	banlieue	NOUN	_	Gender=Fem|Number=Sing	17	dislocated:obj	_	Exponence[Gender]=Inherent|SpaceAfter=No
14	,	,	PUNCT	_	_	17	punct	_	_
15	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
16	ne	ne	ADV	_	Polarity=Neg	17	advmod	_	_
17	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	conj	_	_
18	pas	pas	ADV	_	Polarity=Neg	17	advmod	_	_
19	ce	ce	PRON	_	Gender=Masc|Person=3|PronType=Dem	17	obj	_	_
20	que	que	PRON	_	PronType=Rel	19	acl:relcl	_	_
21	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	20	nsubj	_	SpaceAfter=No
22	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
23	»	»	PUNCT	_	_	5	punct	_	SpaceAfter=No
24	,	,	PUNCT	_	_	5	punct	_	_
25	n'	ne	ADV	_	Polarity=Neg	27	advmod	_	SpaceAfter=No
26	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	aux:tense	_	_
27	cessé	cesser	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	5	parataxis:insert	_	Tense[denom]=Past
28	de	de	ADP	_	_	29	mark	_	_
29	répéter	répéter	VERB	_	VerbForm=Inf	27	xcomp	_	Subject=SubjRaising
30	cet	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	31	det	_	_
31	animateur	animateur	NOUN	_	Gender=Masc|Number=Sing	27	nsubj	_	Exponence[Gender]=Inherent
32	passé	passer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	31	acl	_	Tense[denom]=Past
33	par	par	ADP	_	_	34	case	_	_
34	Radio	Radio	PROPN	_	_	32	obl:agent	_	_
35	Nova	Nova	PROPN	_	_	34	flat:name	_	SpaceAfter=No
36	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 dislocated:obj	color:blue
1	Qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No|wordform=qu'
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	1	nsubj	_	wordform=ce
4	que	que	SCONJ	_	_	6	case	_	_
5	1.000	1.000	NUM	_	Number=Plur	6	nummod	_	Exponence[Number]=Inherent
6	emplois	emploi	NOUN	_	Gender=Masc|Number=Plur	1	dislocated:obj	_	Exponence[Gender]=Inherent
7	quand	quand	SCONJ	_	_	10	mark	_	_
8	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	_
9	en	en	PRON	_	Emph=No|Person=3|PronType=Prs	10	obj	_	_
10	détruit	détruire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	advcl	_	_
11	et	et	CCONJ	_	_	15	cc	_	_
12	qu'	que	SCONJ	_	_	15	mark	_	SpaceAfter=No
13	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	15	nsubj	_	_
14	en	en	PRON	_	Emph=No|Person=3|PronType=Prs	16	nmod	_	_
15	créé	créer	VERB	_	Gender=Masc|Number=Sing|Typo=Yes|VerbForm=Part|Voice=Pass	10	conj	_	CorrectForm=crée|CorrectMood=Ind|CorrectTense=Pres|CorrectVerbForm=Fin|Tense[denom]=Past
16	20.000	20.000	NUM	_	Number=Plur	15	obj	_	Exponence[Number]=Inherent
17	tous	tout	ADJ	_	Gender=Masc|Number=Plur	19	amod	_	_
18	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	_
19	jours	jour	NOUN	_	Gender=Masc|Number=Plur	10	obl:mod	_	Exponence[Gender]=Inherent
20	en	en	ADP	_	_	21	case	_	_
21	France	France	PROPN	_	_	10	obl:mod	_	_
22	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated:obj	color:blue
1	Mais	mais	CCONJ	_	_	5	cc	_	wordform=mais
2	cela	cela	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	dislocated:obj	_	_
3	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	ne	ne	ADV	_	Polarity=Neg	5	advmod	_	_
5	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	le	lui	PRON	_	Case=Acc|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	réaliser	réaliser	VERB	_	VerbForm=Inf	5	xcomp	_	Subject=SubjRaising
8	que	que	ADV	_	Polarity=Neg	11	advmod	_	_
9	s'	si	SCONJ	_	_	11	mark	_	SpaceAfter=No
10	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
11	entame	entamer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
12	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	dialogue	dialogue	NOUN	_	Gender=Masc|Number=Sing	11	obj	_	Exponence[Gender]=Inherent
14	critique	critique	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	Exponence[Gender]=Absent
15	avec	avec	ADP	_	_	17	case	_	_
16	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	population	population	NOUN	_	Gender=Fem|Number=Sing	11	obl:arg	_	Exponence[Gender]=Inherent|SpaceAfter=No
18	.	.	PUNCT	_	_	5	punct	_	_

~~~


