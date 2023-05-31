---
layout: base
title:  'Statistics of advmod:neg in UD_Kurmanji-MG'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji-MG: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="kmr_mg-dep-advmod.html">advmod</a></tt>.

5 nodes (0%) are attached to their parents as `advmod:neg`.

5 instances of `advmod:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 3 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-ADV.html">ADV</a></tt> (3; 60% instances), <tt><a href="kmr_mg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kmr_mg-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 advmod:neg	color:blue
1	Debara	debar	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
2	me	em	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	1	nmod:poss	_	_
3	û	û	CCONJ	cnjcoo	_	2	cc	_	_
4	ya	yê	ADP	con	AdpType=Post|Gender=Fem|Number=Sing	1	dep	_	_
5	zirbavê	zirbav	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	1	nmod:poss	_	_
6	me	em	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	5	nmod:poss	_	_
7	pê	bi	ADP	pr	AdpType=Prep	8	case	_	_
8	_	ew	PRON	prn	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	9	nmod	_	_
9	çêdibû	çêbûn	VERB	vblex	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	û	û	CCONJ	cnjcoo	_	9	cc	_	_
11	me	em	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	_
12	tengî	tengî	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	14	compound:lvc	_	_
13	ne	ne	ADV	adv	Polarity=Neg	14	advmod:neg	_	_
14	dikişand	kişandin	VERB	vblex	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	conj	_	SpaceAfter=No
15	.	.	PUNCT	sent	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 advmod:neg	color:blue
1	Holmes	Holmes	PROPN	np	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	serê	ser	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	4	obj	_	_
3	xwe	xwe	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	2	nmod:poss	_	_
4	hejand	hejandin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	û	û	CCONJ	cnjcoo	_	4	cc	_	_
6	got	gotin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	conj	_	SpaceAfter=No
7	:	:	PUNCT	sent	_	15	punct	_	_
8	ev	ev	DET	det	Case=Nom|Gender=Fem,Masc|Number=Plur,Sing|PronType=Dem	9	det	_	_
9	nav	nav	NOUN	n	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	15	nsubj	_	_
10	ji	ji	ADP	pr	AdpType=Prep	11	case	_	_
11	min	ez	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	15	nmod	_	_
12	re	re	ADP	post	AdpType=Post	11	case	_	_
13	ne	ne	ADV	adv	Polarity=Neg	15	advmod:neg	_	_
14	jî	jî	PART	emph	_	15	advmod	_	_
15	nenas	nenas	ADJ	adj	Degree=Pos	6	ccomp	_	_
16	e	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	SpaceAfter=No
17	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:neg	color:blue
1	Jê	ji	ADP	pr	AdpType=Prep	2	case	_	_
2	_	ew	PRON	prn	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	5	nmod	_	_
3	re	re	ADP	post	AdpType=Post	2	case	_	_
4	ne	ne	ADV	adv	_	5	advmod:neg	_	_
5	adet	adet	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
6	bû	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	_
7	zû	zû	ADJ	adj	Degree=Pos	9	advmod	_	_
8	hişyar	hişyar	X	x	_	9	dep	_	_
9	be	bûn	VERB	vblex	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	csubj	_	SpaceAfter=No
10	;	;	PUNCT	sent	_	14	punct	_	_
11	heta	heta	ADP	pr	AdpType=Prep	12	case	_	_
12	derengiya	derengî	NOUN	n	Case=Con|Gender=Fem|Number=Sing|PronType=Ind	13	nmod	_	_
13	rojê	roj	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	14	nmod:poss	_	_
14	radiket	raketîn	VERB	vblex	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	parataxis	_	SpaceAfter=No
15	.	.	PUNCT	sent	_	14	punct	_	_

~~~


