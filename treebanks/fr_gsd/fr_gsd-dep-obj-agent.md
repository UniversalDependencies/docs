---
layout: base
title:  'Statistics of obj:agent in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obj:agent`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="fr_gsd-dep-obj-lvc.html">obj:lvc</a></tt>.

116 nodes (0%) are attached to their parents as `obj:agent`.

82 instances of `obj:agent` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.38793103448276.

The following 4 pairs of parts of speech are connected with `obj:agent`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (74; 64% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (36; 31% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (5; 4% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obj:agent	color:blue
1	Elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
3	aussi	aussi	ADV	_	_	4	advmod	_	_
4	contribué	contribuer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	à	à	ADP	_	_	7	mark	_	_
6	faire	faire	AUX	_	VerbForm=Inf	7	aux:caus	_	_
7	reculer	reculer	VERB	_	VerbForm=Inf	4	xcomp	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	pauvreté	pauvreté	NOUN	_	Gender=Fem|Number=Sing	7	obj:agent	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obj:agent	color:blue
1	N'	ne	ADV	_	Polarity=Neg	2	advmod	_	SpaceAfter=No
2	hésitez	hésiter	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	-pas	pas	ADV	_	Polarity=Neg	2	advmod	_	_
4	à	à	ADP	_	_	7	mark	_	_
5	la	le	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj:agent	_	_
6	faire	faire	AUX	_	VerbForm=Inf	7	aux:caus	_	_
7	circuler	circuler	VERB	_	VerbForm=Inf	2	xcomp	_	_
8	largement	largement	ADV	_	_	7	advmod	_	_
9	autour	autour	ADV	_	_	7	advmod	_	_
10	de	de	ADP	_	_	11	case	_	_
11	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	9	obl:arg	_	_
12	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 obj:agent	color:blue
1	Maintenant	maintenant	ADV	_	_	29	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	si	si	SCONJ	_	_	6	mark	_	_
4	des	un	DET	_	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	supporters	supporter	NOUN	_	Gender=Masc|Number=Plur	6	nsubj	_	_
6	veulent	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	29	advcl	_	_
7	aider	aider	VERB	_	VerbForm=Inf	6	xcomp	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	club	club	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
10	à	à	ADP	_	_	12	case	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	travers	travers	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	_
13	d'	de	ADP	_	_	15	case	_	SpaceAfter=No
14	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	souscription	souscription	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	_
16	pour	pour	ADP	_	_	18	mark	_	_
17	faire	faire	AUX	_	VerbForm=Inf	18	aux:caus	_	_
18	revenir	revenir	VERB	_	VerbForm=Inf	7	advcl	_	_
19	Djibril	Djibril	PROPN	_	_	18	obj:agent	_	_
20	à	à	ADP	_	_	22	case	_	_
21	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	22	det	_	SpaceAfter=No
22	AJA	AJA	PROPN	_	_	18	obl:arg	_	SpaceAfter=No
23	,	,	PUNCT	_	_	6	punct	_	_
24	qu'	que	SCONJ	_	_	29	mark	_	SpaceAfter=No
25	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	29	nsubj:caus	_	_
26	nous	lui	PRON	_	Number=Plur|Person=1|PronType=Prs	29	iobj:agent	_	_
27	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	29	obj	_	_
28	fassent	faire	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	29	aux:caus	_	_
29	savoir	savoir	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No
30	.	.	PUNCT	_	_	29	punct	_	_
31	"	"	PUNCT	_	_	29	punct	_	_

~~~


