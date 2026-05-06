---
layout: base
title:  'Statistics of iobj in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_sequoia-dep-iobj-agent.html">iobj:agent</a></tt>.

134 nodes (0%) are attached to their parents as `iobj`.

130 instances of `iobj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63432835820896.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (131; 98% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 iobj	color:blue
1	Il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	_
2	n'	ne	ADV	_	Polarity=Neg	4	advmod	_	SpaceAfter=No
3	y	y	PRON	_	Person=3|PronType=Prs	4	expl:comp	_	_
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	aucun	aucun	DET	_	Gender=Masc|Number=Sing|PronType=Neg	6	det	_	_
6	motif	motif	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	Exponence[Gender]=Inherent
7	pour	pour	ADP	_	_	11	mark	_	_
8	qu'	que	SCONJ	_	_	11	mark	_	SpaceAfter=No
9	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	_
10	y	y	PRON	_	Person=3|PronType=Prs	11	iobj	_	_
11	soient	être	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	J'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	SpaceAfter=No
2	en	en	PRON	_	Person=3|PronType=Prs	4	iobj	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	satisfait	satisfait	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	pour	pour	ADP	_	_	7	case	_	_
6	deux	deux	NUM	_	Number=Plur|NumType=Card	7	nummod	_	Exponence[Number]=Inherent
7	raisons	raison	NOUN	_	Gender=Fem|Number=Plur	4	obl:mod	_	Exponence[Gender]=Inherent|SpaceAfter=No
8	,	,	PUNCT	_	_	16	punct	_	_
9	tout	tout	ADV	_	_	10	advmod	_	_
10	d'	de	ADP	_	ExtPos=ADV	16	advmod	_	Idiom=Yes|SpaceAfter=No
11	abord	abord	NOUN	_	Gender=Masc|Number=Sing	10	fixed	_	Exponence[Gender]=Inherent|InIdiom=Yes
12	parce	parce	ADV	_	ExtPos=SCONJ	16	mark	_	Idiom=Yes
13	que	que	SCONJ	_	_	12	fixed	_	InIdiom=Yes
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	Commission	commission	NOUN	_	Gender=Fem|Number=Sing	16	nsubj	_	Exponence[Gender]=Inherent
16	relie	relier	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	Charte	charte	NOUN	_	Gender=Fem|Number=Sing	16	obj	_	Exponence[Gender]=Inherent
19	de	de	ADP	_	_	21	case	_	_
20	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	21	det	_	_
21	droits	droit	NOUN	_	Gender=Masc|Number=Plur	18	nmod	_	Exponence[Gender]=Inherent
22	fondamentaux	fondamental	ADJ	_	Gender=Masc|Number=Plur	21	amod	_	_
23	à	à	ADP	_	_	25	case	_	_
24	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	_	_
25	conférence	conférence	NOUN	_	Gender=Fem|Number=Sing	16	obl:arg	_	Exponence[Gender]=Inherent
26	intergouvernementale	intergouvernemental	ADJ	_	Gender=Fem|Number=Sing	25	amod	_	_
27	-	-	PUNCT	_	_	16	punct	_	SpaceAfter=No
28	et	et	CCONJ	_	_	32	cc	_	_
29	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	32	nsubj	_	SpaceAfter=No
30	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	_	_
31	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	Exponence[Gender]=Absent|SpaceAfter=No
32	objectif	objectif	NOUN	_	Gender=Masc|Number=Sing	16	conj	_	Exponence[Gender]=Inherent
33	politique	politique	ADJ	_	Gender=Masc|Number=Sing	32	amod	_	Exponence[Gender]=Absent
34	de	de	ADP	_	_	36	case	_	_
35	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	36	det	_	_
36	Parlement	parlement	NOUN	_	Gender=Masc|Number=Sing	32	nmod	_	Exponence[Gender]=Inherent
37	dans	dans	ADP	_	_	39	case	_	_
38	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	39	det	_	_
39	rapport	rapport	NOUN	_	Gender=Masc|Number=Sing	32	nmod	_	Exponence[Gender]=Inherent
40	de	de	ADP	_	_	41	case	_	_
41	MM.	monsieur	NOUN	_	Gender=Masc|Number=Plur	39	nmod	_	Exponence[Gender]=Inherent
42	Duff	Duff	PROPN	_	Gender=Masc|Number=Sing	41	flat:name	_	Exponence[Gender]=Inherent
43	et	et	CCONJ	_	_	44	cc	_	_
44	Voggenhuber	Voggenhuber	PROPN	_	_	41	conj	_	SpaceAfter=No
45	-	-	PUNCT	_	_	16	punct	_	SpaceAfter=No
46	,	,	PUNCT	_	_	51	punct	_	_
47	ensuite	ensuite	ADV	_	_	51	advmod	_	_
48	parce	parce	SCONJ	_	ExtPos=SCONJ	51	mark	_	Idiom=Yes
49	qu'	que	SCONJ	_	_	48	fixed	_	InIdiom=Yes|SpaceAfter=No
50	elle	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	51	nsubj	_	_
51	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
52	l'	lui	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=3|PronType=Prs	53	obj	_	SpaceAfter=No
53	intégrer	intégrer	VERB	_	VerbForm=Inf	51	xcomp	_	Subject=SubjRaising
54	dans	dans	ADP	_	_	56	case	_	_
55	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	56	det	_	_
56	campagne	campagne	NOUN	_	Gender=Fem|Number=Sing	53	obl:arg	_	Exponence[Gender]=Inherent|SpaceAfter=No
57	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 iobj	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	recommandation	recommandation	NOUN	_	Gender=Fem|Number=Sing	11	nsubj	_	Exponence[Gender]=Inherent
3	pour	pour	ADP	_	_	6	case	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	deuxième	deuxième	ADJ	_	Gender=Fem|Number=Sing|NumType=Ord	6	amod	_	Exponence[Gender]=Absent
6	lecture	lecture	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	Exponence[Gender]=Inherent
7	dont	dont	PRON	_	PronType=Rel	10	iobj	_	_
8	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	expl:subj	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	question	question	NOUN	_	Gender=Fem|Number=Sing	6	acl:relcl	_	Exponence[Gender]=Inherent
11	constitue	constituer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	acte	acte	NOUN	_	Gender=Masc|Number=Sing	11	obj	_	Exponence[Gender]=Inherent
14	législatif	législatif	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
15	très	très	ADV	_	_	16	advmod	_	_
16	important	important	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
17	pour	pour	ADP	_	_	19	case	_	_
18	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	Exponence[Gender]=Absent|SpaceAfter=No
19	environnement	environnement	NOUN	_	Gender=Masc|Number=Sing	16	obl:mod	_	Exponence[Gender]=Inherent|SpaceAfter=No
20	,	,	PUNCT	_	_	25	punct	_	_
21	mais	mais	CCONJ	_	_	25	cc	_	_
22	également	également	ADV	_	_	25	advmod	_	_
23	pour	pour	ADP	_	_	25	case	_	_
24	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	_	Exponence[Gender]=Absent|SpaceAfter=No
25	économie	économie	NOUN	_	Gender=Fem|Number=Sing	19	conj	_	Exponence[Gender]=Inherent
26	à	à	ADP	_	_	28	case	_	_
27	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	_	_
28	sein	sein	NOUN	_	Gender=Masc|Number=Sing	25	nmod	_	Exponence[Gender]=Inherent
29	de	de	ADP	_	_	31	case	_	_
30	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	31	det	_	Exponence[Gender]=Absent|SpaceAfter=No
31	Union	union	NOUN	_	Gender=Fem|Number=Sing	28	nmod	_	Exponence[Gender]=Inherent
32	européenne	européen	ADJ	_	Gender=Fem|Number=Sing	31	amod	_	SpaceAfter=No
33	.	.	PUNCT	_	_	11	punct	_	_

~~~


