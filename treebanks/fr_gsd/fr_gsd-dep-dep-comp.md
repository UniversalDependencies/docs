---
layout: base
title:  'Statistics of dep:comp in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-dep.html">dep</a></tt>.

16 nodes (0%) are attached to their parents as `dep:comp`.

12 instances of `dep:comp` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.1875.

The following 5 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (11; 69% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (2; 13% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dep:comp	color:blue
1	Pourquoi	pourquoi	ADV	_	PronType=Int	4	advmod	_	CxnElt=4:Interrogative-WHInfo-Direct.WHWord|wordform=pourquoi
2	ne	ne	ADV	_	Polarity=Neg	4	advmod	_	_
3	lui	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	dep:comp	_	_
4	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Cxn=Interrogative-WHInfo-Direct|CxnElt=4:Interrogative-WHInfo-Direct.Clause|SpaceAfter=No
5	-on	on	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	wordform=on
6	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	_
7	confiance	confiance	NOUN	_	Gender=Fem|Number=Sing	4	obj:lvc	_	_
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 dep:comp	color:blue
1	À	à	ADP	_	_	3	case	_	wordform=à
2	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	occasion	occasion	NOUN	_	Gender=Fem|Number=Sing	13	obl:mod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	François	François	PROPN	_	_	13	nsubj	_	_
6	Fillon	Fillon	PROPN	_	_	5	flat:name	_	_
7	alors	alors	ADV	_	_	8	advmod	_	_
8	ministre	ministre	NOUN	_	Gender=Masc|Number=Sing	5	appos	_	_
9	de	de	ADP	_	_	11	case	_	_
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	SpaceAfter=No
11	Éducation	éducation	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	wordform=éducation
12	nationale	national	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	_
13	déclare	déclarer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	que	que	SCONJ	_	_	13	dep:comp	_	SpaceAfter=No
15	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 dep:comp	color:blue
1	Cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	wordform=cette
2	motorisation	motorisation	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
3	n'	ne	ADV	_	Polarity=Neg	6	advmod	_	SpaceAfter=No
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
5	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	_
6	eu	avoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	succès	succès	NOUN	_	Gender=Masc|Number=Sing	6	obj	_	_
9	escompté	escompter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	_
10	et	et	CCONJ	_	_	15	cc	_	_
11	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	15	aux:pass	_	_
12	à	à	ADP	_	_	14	case	_	_
13	son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	14	det	_	_
14	tour	tour	NOUN	_	Gender=Masc|Number=Sing	15	obl:mod	_	_
15	remplacée	remplacer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	conj	_	_
16	par	par	ADP	_	_	18	case	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	Lycoming	Lycoming	PROPN	_	_	15	obl:agent	_	_
19	O-360-A4J	O-360-A4J	PROPN	_	_	18	flat:name	_	_
20	de	de	ADP	_	_	22	dep:comp	_	_
21	180	180	NUM	_	Number=Plur	22	dep	_	_
22	ch	ch	ADP	_	_	18	dep	_	_
23	débutant	débuter	VERB	_	Tense=Pres|VerbForm=Part	22	advcl	_	_
24	avec	avec	ADP	_	_	26	case	_	_
25	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	B23	B23	PROPN	_	Gender=Masc|Number=Sing	23	obl	_	_
27	Musketeer	Musketeer	PROPN	_	_	26	flat:name	_	_
28	Custom	Custom	PROPN	_	_	26	flat:name	_	_
29	de	de	ADP	_	_	30	case	_	_
30	1968	1968	NUM	_	Number=Plur	26	nmod	_	SpaceAfter=No
31	.	.	PUNCT	_	_	6	punct	_	_

~~~


