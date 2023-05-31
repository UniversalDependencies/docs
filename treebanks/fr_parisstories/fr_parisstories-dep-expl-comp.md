---
layout: base
title:  'Statistics of expl:comp in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `expl:comp`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_parisstories-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_parisstories-dep-expl-pv.html">expl:pv</a></tt>, <tt><a href="fr_parisstories-dep-expl-subj.html">expl:subj</a></tt>.

293 nodes (1%) are attached to their parents as `expl:comp`.

293 instances of `expl:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22525597269625.

The following 2 pairs of parts of speech are connected with `expl:comp`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (292; 100% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl:comp	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	me	se	PRON	_	_	4	expl:comp	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	aperçue	apercevoir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
7	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	ccomp	_	_
9	qui	qui	PRON	_	_	11	nsubj	_	_
10	les	le	PRON	_	Number=Plur|Person=3|PronType=Prs	11	obj	_	_
11	empêchait	empêcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	advcl:cleft	_	_
12	de	de	ADP	_	_	13	mark	_	_
13	gonfler	gonfler	VERB	_	VerbForm=Inf	11	xcomp	_	SpaceAfter=No|Subject=ObjRaising
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:comp	color:blue
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	_
2	n'	ne	ADV	_	_	4	advmod	_	SpaceAfter=No
3	y	y	PRON	_	Person=3|PronType=Prs	4	expl:comp	_	_
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	tellement	tellement	ADV	_	_	6	advmod	_	_
6	rien	rien	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Neg	4	obj	_	_
7	autour	autour	ADV	_	_	6	advmod	_	_
8	que	que	SCONJ	_	_	13	mark	_	_
9	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	11	reparandum	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
12	me	se	PRON	_	Number=Sing|Person=1|PronType=Prs	13	expl:comp	_	_
13	voyais	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	5	ccomp	_	_
14	déjà	déjà	ADV	_	_	13	advmod	_	_
15	rentrer	rentrer	VERB	_	VerbForm=Inf	13	xcomp	_	Subject=SubjRaising
16	en	en	ADP	_	_	17	case	_	_
17	taxi	taxi	NOUN	_	Gender=Masc|Number=Sing	15	obl:mod	_	_
18	toute	tout	ADV	_	_	19	advmod	_	_
19	seule	seul	ADJ	_	Gender=Fem|Number=Sing	15	advcl	_	_
20	juste	juste	ADV	_	_	23	advmod	_	_
21	dans	dans	ADP	_	_	23	case	_	_
22	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	village	village	NOUN	_	Gender=Masc|Number=Sing	15	obl:mod	_	_
24	pommé	pommé	ADJ	_	Gender=Masc|Number=Sing	23	amod	_	_
25	de	de	ADP	_	_	27	case	_	_
26	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	27	det	_	_
27	grands-parents	grand-parent	NOUN	_	Gender=Masc|Number=Plur	24	obl:arg	_	_
28	et	et	CCONJ	_	_	32	cc	_	_
29	que	que	SCONJ	_	_	32	mark	_	_
30	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	31	det	_	_
31	grands-parents	grands-parent	NOUN	_	Gender=Masc|Number=Plur	32	nsubj	_	_
32	doivent	devoir	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	conj	_	_
33	payer	payer	VERB	_	VerbForm=Inf	32	xcomp	_	Subject=SubjRaising
34	cent	cent	NUM	_	Number=Plur	36	nummod	_	_
35	soixante	soixante	NUM	_	Number=Plur	34	flat	_	_
36	euros	euro	NOUN	_	Gender=Masc|Number=Plur	33	obj	_	_
37	de	de	ADP	_	_	38	case	_	_
38	taxi	taxi	NOUN	_	Gender=Masc|Number=Sing	36	nmod	_	SpaceAfter=No
39	.	.	PUNCT	_	_	4	punct	_	_

~~~


