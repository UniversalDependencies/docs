---
layout: base
title:  'Statistics of flat:name in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-flat.html">flat</a></tt>.

31 nodes (0%) are attached to their parents as `flat:name`.

31 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16129032258065.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (28; 90% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	euh	euh	INTJ	_	_	3	discourse	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	plus	plus	ADV	_	_	3	advmod	_	_
5	si	si	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
7	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	France	France	PROPN	_	_	3	ccomp	_	_
9	Inter	Inter	PROPN	_	_	8	flat:name	_	_
10	ou	ou	CCONJ	_	_	11	cc	_	_
11	RMC	RMC	PROPN	_	_	8	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	justement	justement	ADV	_	_	4	advmod	_	_
2	avec	avec	ADP	_	_	4	case	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	drags	drag	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
5	queens	queen	NOUN	_	Gender=Fem|Number=Plur	4	flat:name	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	qui	qui	PRON	_	PronType=Rel	8	nsubj	_	_
8	sont	être	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
9	dans	dans	ADP	_	_	11	case	_	_
10	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	11	det	_	_
11	émission	émission	NOUN	_	Gender=Fem|Number=Sing	8	obl:arg	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 flat:name	color:blue
1	euh	euh	INTJ	_	_	12	discourse	_	_
2	à	à	ADP	_	_	3	case	_	_
3	Roissy	Roissy	PROPN	_	_	12	obl:mod	_	_
4	Charles	Charles	PROPN	_	_	3	flat:name	_	_
5	de	de	ADP	_	_	3	flat:name	_	_
6	Gaulle	Gaulle	PROPN	_	_	3	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	_
8	et	et	CCONJ	_	_	12	cc	_	_
9	euh	euh	INTJ	_	_	12	discourse	_	_
10	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	nsubj	_	_
11	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	aux:tense	_	_
12	attendu	attendre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
13	une	un	NUM	_	Number=Sing	16	nummod	_	_
14	ou	ou	CCONJ	_	_	15	cc	_	_
15	deux	deux	NUM	_	Number=Plur	13	conj	_	_
16	heures	heure	NOUN	_	Gender=Fem|Number=Plur	12	obj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	12	punct	_	_

~~~


