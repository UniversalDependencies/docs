---
layout: base
title:  'Statistics of obl:agent in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_rhapsodie-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_rhapsodie-dep-obl-mod.html">obl:mod</a></tt>.

3 nodes (0%) are attached to their parents as `obl:agent`.

3 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:agent	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	sûr	sûr	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
4	que	que	SCONJ	_	_	6	mark	_	_
5	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	6	nsubj	_	_
6	allez	aller	VERB	ETRE	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
7	être	être	AUX	DoubleAux	VerbForm=Inf	8	aux:pass	_	_
8	convaincus	convaincre	VERB	DoubleAux	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	6	xcomp	_	_
9	par	par	ADP	_	_	11	case	_	_
10	notre	son	DET	_	Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1|PronType=Prs	11	det	_	_
11	boule	boule	NOUN	_	Gender=Fem|Number=Sing	8	obl:agent	_	_
12	magique	magique	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	_
13	tout	tout	ADV	_	_	15	advmod	_	_
14	comme	comme	ADP	_	_	15	case	_	_
15	Magalie	Magalie	PROPN	_	_	8	obl:mod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 26 obl:agent	color:blue
1	donc	donc	ADV	_	_	14	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	euh	euh	INTJ	_	_	1	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	bon	bon	INTJ	_	_	1	discourse	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	ben	ben	INTJ	_	_	1	discourse	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	là	là	ADV	_	_	1	discourse	_	SpaceAfter=No
10	,	,	PUNCT	_	_	1	punct	_	_
11	maintenant	maintenant	ADV	_	_	14	advmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
14	s~	s~	VERB	_	_	0	root	_	SpaceAfter=No
15	,	,	PUNCT	_	_	21	punct	_	_
16	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	21	nsubj:pass	_	_
17	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	21	aux:pass	_	_
18	plus	plus	ADV	_	_	21	advmod	_	_
19	ou	ou	CCONJ	_	_	20	cc	_	_
20	moins	moins	ADV	_	_	18	conj	_	_
21	aidé	aider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	reparandum	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	euh	euh	INTJ	_	_	21	discourse	_	SpaceAfter=No
24	,	,	PUNCT	_	_	26	punct	_	_
25	par	par	ADP	_	_	26	case	_	_
26	quelqu'un	quelqu'un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	21	obl:agent	_	_
27	à	à	ADP	_	_	28	case	_	_
28	mi-temps	mi-temps	NOUN	_	Gender=Masc|Number=Sing	26	obl:arg	_	_
29	heureusement	heureusement	ADV	_	_	21	advmod	_	SpaceAfter=No
30	.	.	PUNCT	_	_	14	punct	_	_

~~~


