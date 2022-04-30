---
layout: base
title:  'Statistics of nsubj:pass in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_rhapsodie-dep-nsubj-caus.html">nsubj:caus</a></tt>.

136 nodes (0%) are attached to their parents as `nsubj:pass`.

132 instances of `nsubj:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.33088235294118.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (94; 69% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (40; 29% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj:pass	_	_
3	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	_	_
4	pas	pas	ADV	_	Polarity=Neg	5	advmod	_	_
5	payé	payer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	en	en	ADP	_	_	7	case	_	_
7	plus	plus	ADV	_	_	5	advmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 nsubj:pass	color:blue
1	peu	peu	ADV	_	_	2	advmod	_	_
2	importe	importer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	advmod	_	ExtPos=ADV|Idiom=Yes
4	peu	peu	NOUN	_	_	3	fixed	_	InIdiom=Yes|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	euh	euh	INTJ	_	_	3	discourse	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	aspects	aspect	NOUN	_	Gender=Masc|Number=Plur	2	nsubj:pass	_	_
10	dont	dont	PRON	_	PronType=Rel	14	obj	_	_
11	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
12	vous	lui	PRON	_	Number=Plur|Person=2|PronType=Prs	14	iobj	_	_
13	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	parlé	parler	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	acl:relcl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	Overlap=Rhap_D2010-52|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Overlap=Rhap_D2010-52|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	Overlap=Rhap_D2010-52
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj:pass	_	Overlap=Rhap_D2010-52|SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	reparandum	_	Overlap=Rhap_D2010-52|SpaceAfter=No
6	…	…	PUNCT	_	_	2	punct	_	Overlap=Rhap_D2010-52

~~~


