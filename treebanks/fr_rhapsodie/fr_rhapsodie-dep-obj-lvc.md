---
layout: base
title:  'Statistics of obj:lvc in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-obj.html">obj</a></tt>.

33 nodes (0%) are attached to their parents as `obj:lvc`.

33 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81818181818182.

The following 2 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (31; 94% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (2; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj:lvc	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
3	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	du	du	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	bien	bien	NOUN	_	Gender=Masc|Number=Sing	3	obj:lvc	_	_
6	de	de	ADP	_	_	7	mark	_	_
7	sortir	sortir	VERB	ETRE	VerbForm=Inf	5	xcomp	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	advmod	_	ExtPos=ADV|Idiom=Yes
9	peu	peu	NOUN	_	_	8	fixed	_	InIdiom=Yes|SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj:lvc	color:blue
1	parce	parce	SCONJ	_	_	8	mark	_	ExtPos=SCONJ|Idiom=Yes
2	que	que	SCONJ	_	_	1	fixed	_	InIdiom=Yes
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	mamans	maman	NOUN	_	Gender=Fem|Number=Plur	8	dislocated	_	_
5	africaines	africain	ADJ	_	Gender=Fem|Number=Plur	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	_
7	elles	il	PRON	_	Gender=Fem|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	_
8	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	beaucoup	beaucoup	ADV	_	_	8	obj:lvc	_	ExtPos=PRON
10	de	de	ADP	_	_	11	case	_	_
11	mal	mal	NOUN	_	Gender=Masc|Number=Sing	9	obl:arg	_	_
12	à	à	ADP	_	_	14	mark	_	_
13	se	se	PRON	_	Person=3|PronType=Prs	14	dep:comp	_	_
14	séparer	séparer	VERB	_	VerbForm=Inf	11	ccomp	_	_
15	de	de	ADP	_	_	17	case	_	_
16	leurs	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=3|PronType=Prs	17	det	_	_
17	petits	petit	NOUN	_	Gender=Masc|Number=Plur	14	obl:arg	_	SpaceAfter=No
18	.	.	PUNCT	_	_	8	punct	_	_

~~~


