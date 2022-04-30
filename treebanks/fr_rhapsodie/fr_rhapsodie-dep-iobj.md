---
layout: base
title:  'Statistics of iobj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `iobj`

This relation is universal.

559 nodes (1%) are attached to their parents as `iobj`.

379 instances of `iobj` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.59391771019678.

The following 14 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (383; 69% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (103; 18% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (30; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (25; 4% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 iobj	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	vois	voir	VERB	DISCOURSE	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	euh	euh	INTJ	_	_	2	discourse	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	14	dislocated	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated	_	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
12	m'	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	14	iobj	_	SpaceAfter=No
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	_
16	de	de	ADP	_	_	17	case	_	_
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 iobj	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	fais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	5	det	_	_
4	petits	petit	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	_
5	boulots	boulot	NOUN	_	Gender=Masc|Number=Plur	2	iobj	_	_
6	en	en	ADP	_	_	7	case	_	_
7	plus	plus	ADV	_	_	2	advmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 iobj	color:blue
1	bon	bon	INTJ	_	_	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	euh	euh	INTJ	_	_	7	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	7	nsubj	_	_
6	y	y	PRON	_	Person=3|PronType=Prs	7	iobj	_	_
7	reviendra	revenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
10	ailleurs	ailleurs	ADV	_	_	7	advmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	sur	sur	ADP	_	_	7	iobj	_	Overlap=Rhap_D2010-18bis|SpaceAfter=No
13	,	,	PUNCT	_	_	16	punct	_	_
14	sur	sur	ADP	conj:reform	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	style	style	NOUN	_	Gender=Masc|Number=Sing	12	reparandum	_	SpaceAfter=No
17	.	.	PUNCT	_	_	7	punct	_	_

~~~


