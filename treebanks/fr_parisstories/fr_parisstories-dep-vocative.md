---
layout: base
title:  'Statistics of vocative in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `vocative`

This relation is universal.

16 nodes (0%) are attached to their parents as `vocative`.

8 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8125.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (7; 44% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (3; 19% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (2; 13% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 vocative	color:blue
1	cauchemar	cauchemar	NOUN	_	Gender=Masc|Number=Sing	6	dislocated	_	AlignBegin=75156|AlignEnd=75415|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	AlignBegin=75415|AlignEnd=75415
3	meuf	meuf	NOUN	_	Gender=Fem|Number=Sing	6	vocative	_	AlignBegin=75415|AlignEnd=75674|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=75674|AlignEnd=75674
5	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	AlignBegin=75674|AlignEnd=75933
6	peux	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=75933|AlignEnd=76193
7	même	même	ADV	_	_	6	advmod	_	AlignBegin=76193|AlignEnd=76452
8	pas	pas	ADV	_	_	6	advmod	_	AlignBegin=76452|AlignEnd=76711
9	savoir	savoir	VERB	_	VerbForm=Inf	6	xcomp	_	AlignBegin=76711|AlignEnd=76970|SpaceAfter=No|Subject=SubjRaising
10	.	.	PUNCT	_	_	6	punct	_	AlignBegin=76970|AlignEnd=76970

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 vocative	color:blue
1	et	et	CCONJ	_	_	5	cc	_	AlignBegin=120176|AlignEnd=120295
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	AlignBegin=120295|AlignEnd=120414
3	lui	lui	PRON	_	_	5	iobj	_	AlignBegin=120414|AlignEnd=120533
4	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux:tense	_	AlignBegin=120533|AlignEnd=120652
5	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=120652|AlignEnd=120771
6	bon	bon	INTJ	_	_	11	discourse	_	AlignBegin=120771|AlignEnd=120967|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	AlignBegin=120967|AlignEnd=120967
8	XXX	XXX	X	_	_	11	vocative	_	AlignBegin=120967|AlignEnd=121163|ExtPos=PROPN|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	AlignBegin=121163|AlignEnd=121163
10	euh	euh	INTJ	_	_	11	discourse	_	AlignBegin=121163|AlignEnd=121359
11	dis	dire	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	ccomp	_	AlignBegin=121359|AlignEnd=121555|Reported=Yes|SpaceAfter=No
12	-moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	5	obj	_	AlignBegin=121359|AlignEnd=121555|Reported=Yes
13	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	obj	_	AlignBegin=121555|AlignEnd=121752
14	que	que	PRON	_	_	19	obj	_	AlignBegin=121752|AlignEnd=121948
15	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	16	nsubj	_	AlignBegin=121948|AlignEnd=122144
16	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	AlignBegin=122144|AlignEnd=122340
17	à	à	ADP	_	_	19	mark	_	AlignBegin=122340|AlignEnd=122340
18	me	le	PRON	_	Number=Sing|Person=1|PronType=Prs	19	iobj	_	AlignBegin=122340|AlignEnd=122536
19	dire	dire	VERB	_	VerbForm=Inf	16	xcomp	_	AlignBegin=122536|AlignEnd=122732|SpaceAfter=No|Subject=SubjRaising
20	.	.	PUNCT	_	_	5	punct	_	AlignBegin=122732|AlignEnd=122732

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 vocative	color:blue
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	là	là	ADV	_	_	0	root	_	_
4	en	en	ADP	_	_	9	mark	_	ExtPos=ADP|Idiom=Yes
5	mode	mode	NOUN	_	Number=Sing	4	fixed	_	InIdiom=Yes
6	mais	mais	CCONJ	_	_	9	cc	_	_
7	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	9	nsubj	_	_
8	êtes	être	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	cop	_	Reported=Yes
9	sûre	sûr	ADJ	_	Gender=Fem|Number=Sing	3	advcl	_	_
10	madame	madame	NOUN	_	Gender=Fem|Number=Sing	9	vocative	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	euh	euh	INTJ	_	_	9	discourse	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


