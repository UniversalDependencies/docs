---
layout: base
title:  'Statistics of nsubj:outer in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_gsd-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_gsd-dep-nsubj-pass.html">nsubj:pass</a></tt>.

23 nodes (0%) are attached to their parents as `nsubj:outer`.

23 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.60869565217391.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (13; 57% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (7; 30% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	question	question	NOUN	_	Gender=Fem|Number=Sing	6	nsubj:outer	_	_
3	suivante	suivant	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	:	:	PUNCT	_	_	6	punct	_	_
6	Peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Cxn=Interrogative-Polar-Direct|CxnElt=6:Interrogative-Polar-Direct.Clause|SpaceAfter=No|wordform=peut
7	-on	on	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	6	nsubj	_	wordform=on
8	y	y	PRON	_	Emph=No|Person=3|PronType=Prs	9	obl:mod	_	_
9	prendre	prendre	VERB	_	VerbForm=Inf	6	xcomp	_	Subject=SubjRaising
10	épouse	épouse	NOUN	_	Gender=Fem|Number=Sing	9	obj:lvc	_	_
11	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:outer	color:blue
1	Est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No|wordform=est
2	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj:outer	_	wordform=ce
3	parce	parce	ADV	_	ExtPos=SCONJ	7	mark	_	Idiom=Yes
4	que	que	SCONJ	_	_	3	fixed	_	InIdiom=Yes
5	vous	vous	PRON	_	Emph=No|Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
6	ne	ne	ADV	_	Polarity=Neg	7	advmod	_	_
7	prenez	prendre	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Cxn=Interrogative-Polar-Direct|CxnElt=7:Interrogative-Polar-Direct.Clause
8	pas	pas	ADV	_	Polarity=Neg	7	advmod	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	choses	chose	NOUN	_	Gender=Fem|Number=Plur	7	obj	_	_
11	à	à	ADP	_	_	13	case	_	_
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	sérieux	sérieux	NOUN	_	Gender=Masc|Number=Sing	7	obl:mod	_	_
14	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 nsubj:outer	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	wordform=le
2	plus	plus	ADV	_	_	3	advmod	_	_
3	cool	cool	ADJ	_	Gender=Masc|Number=Sing	12	dislocated	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj:outer	_	SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
7	que	que	SCONJ	_	_	12	mark	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	piste	piste	NOUN	_	Gender=Fem|Number=Sing	12	nsubj	_	_
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	vraiment	vraiment	ADV	_	_	12	advmod	_	_
12	adhérente	adhérent	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
13	:	:	PUNCT	_	_	14	punct	_	_
14	rien	rien	PRON	_	Gender=Masc|Number=Sing|PronType=Neg	12	parataxis	_	_
15	à	à	ADP	_	_	16	mark	_	_
16	voir	voir	VERB	_	VerbForm=Inf	14	acl	_	Subject=Generic
17	avec	avec	ADP	_	_	19	case	_	_
18	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	_
19	pistes	piste	NOUN	_	Gender=Fem|Number=Plur	16	obl:arg	_	_
20	de	de	ADP	_	_	21	case	_	_
21	kart	kart	NOUN	_	Gender=Masc|Number=Sing	19	nmod	_	_
22	en	en	ADP	_	_	23	case	_	_
23	béton	béton	NOUN	_	Gender=Masc|Number=Sing	19	nmod	_	_
24	que	que	PRON	_	PronType=Rel	27	obj	_	_
25	j'	moi	PRON	_	Emph=No|Number=Sing|Person=1|PronType=Prs	27	nsubj	_	SpaceAfter=No
26	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	27	aux:tense	_	_
27	vues	voir	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	19	acl:relcl	_	_
28	partout	partout	ADV	_	_	27	advmod	_	_
29	!	!	PUNCT	_	_	12	punct	_	_

~~~


