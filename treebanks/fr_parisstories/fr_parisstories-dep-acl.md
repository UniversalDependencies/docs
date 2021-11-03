---
layout: base
title:  'Statistics of acl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_parisstories-dep-acl-relcl.html">acl:relcl</a></tt>.

124 nodes (0%) are attached to their parents as `acl`.

122 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.75806451612903.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (104; 84% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (7; 6% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	là	là	ADV	_	_	4	advmod	_	_
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
4	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	7	cop	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	galère	galère	NOUN	_	Gender=Fem|Number=Sing	4	xcomp	_	_
8	pour	pour	ADP	_	_	9	mark	_	_
9	mélanger	mélanger	VERB	_	VerbForm=Inf	7	acl	_	_
10	et	et	CCONJ	_	_	12	cc	_	_
11	tout	tout	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
12	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 acl	color:blue
1	dégouté	dégouter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	_
4	dégouté	dégouter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	reparandum	_	_
5	de	de	ADP	_	_	7	case	_	_
6	son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	7	det	_	_
7	métier	métier	NOUN	_	Gender=Masc|Number=Sing	4	obl:mod	_	_
8	parce	parce	SCONJ	_	_	11	mark	_	ExtPos=SCONJ|Idiom=Yes
9	qu'	que	SCONJ	_	_	8	fixed	_	InIdiom=Yes|SpaceAfter=No
10	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
11	aime	aimer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
12	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	obj	_	_
13	qu'	que	PRON	_	PronType=Rel	15	obj	_	SpaceAfter=No
14	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
15	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	acl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 acl	color:blue
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	3	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	essayé	essayer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	rendre	rendre	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	classes	classe	NOUN	_	Gender=Fem|Number=Plur	5	obj	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	advmod	_	ExtPos=ADV|Idiom=Yes
9	petit	petit	ADJ	_	Gender=Masc|Number=Sing	8	fixed	_	InIdiom=Yes
10	peu	peu	NOUN	_	Gender=Masc|Number=Sing	8	fixed	_	InIdiom=Yes
11	plus	plus	ADV	_	_	12	advmod	_	_
12	jolies	joli	ADJ	_	Gender=Fem|Number=Plur	7	amod	_	_
13	que	que	SCONJ	_	_	14	case	_	_
14	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	obj	_	_
15	qu'	que	PRON	_	PronType=Rel	14	acl	_	SpaceAfter=No
16	elles	il	PRON	_	Gender=Fem|Number=Plur|Person=3|PronType=Prs	15	nsubj	_	_
17	n'	ne	ADV	_	_	15	advmod	_	SpaceAfter=No
18	étaient	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	SpaceAfter=No
19	.	.	PUNCT	_	_	3	punct	_	_

~~~


