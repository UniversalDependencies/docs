---
layout: base
title:  'Statistics of iobj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `iobj`

This relation is universal.

327 nodes (1%) are attached to their parents as `iobj`.

173 instances of `iobj` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08868501529052.

The following 14 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (177; 54% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (100; 31% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (24; 7% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (12; 4% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 0% instances).


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
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	_
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	Overlap=Rhap_D2007-69|SpaceAfter=No
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Overlap=Rhap_D2007-69
3	là	là	ADV	_	_	2	iobj	_	Overlap=Rhap_D2007-69|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	entre	entre	ADP	_	_	2	dep	_	Overlap=Rhap_D2007-72
6	XXX	XXX	X	_	_	1	dep	_	Overlap=Rhap_D2007-72|Scrap=Yes|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	Overlap=Rhap_D2007-72

~~~


