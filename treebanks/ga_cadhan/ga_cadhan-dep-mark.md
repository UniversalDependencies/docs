---
layout: base
title:  'Statistics of mark in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `mark`

This relation is universal.
There are 1 language-specific subtypes of `mark`: <tt><a href="ga_cadhan-dep-mark-prt.html">mark:prt</a></tt>.

104 nodes (2%) are attached to their parents as `mark`.

104 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32692307692308.

The following 8 pairs of parts of speech are connected with `mark`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (49; 47% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (36; 35% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (10; 10% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (5; 5% instances), <tt><a href="ga_cadhan-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-PART.html">PART</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 mark	color:blue
1	Ní	ní	PART	_	PartType=Vb|Polarity=Neg	2	advmod	_	_
2	bheadh	bí	VERB	_	Form=Len|Mood=Cnd|Polarity=Neg	0	root	_	_
3	acht	ach	ADV	_	_	2	advmod	_	_
4	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	5	nmod:poss	_	_
5	leath	leath	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	_
6	agam	ag	ADP	_	Number=Sing|Person=1	2	xcomp:pred	_	_
7	marach	murach	SCONJ	_	_	9	mark	_	_
8	gur	gur	PART	_	PartType=Vb|Tense=Past	9	mark:prt	_	_
9	chailleas	caill	VERB	_	Form=Len|Mood=Ind|Number=Sing|Person=1|Tense=Past	2	advcl	_	_
10	lúth	lúth	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	obj	_	_
11	mo	mo	DET	_	Number=Sing|Person=1|Poss=Yes	12	nmod:poss	_	_
12	ghéag	géag	NOUN	_	Case=Gen|Definite=Def|Form=Len|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 mark	color:blue
1	Choimhéad	coimhéad	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sé	sé	PRON	_	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	seans	seans	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	obj	_	_
5	leis	le	ADP	_	_	7	case	_	_
6	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	rása	rás	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	10	obj	_	_
8	deireannach	deireanach	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_
9	a	a	PART	_	PartType=Inf	10	mark	_	_
10	thabhairt	tabhairt	NOUN	_	Form=Len|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 mark	color:blue
1	Bíodh	bí	VERB	_	Mood=Imp|Number=Sing|Person=3	14	advcl	_	_
2	nar	is	AUX	_	Polarity=Neg|PronType=Rel|Tense=Past|VerbForm=Cop	3	cop	_	_
3	dhiongmhála	diongbháil	ADJ	_	Degree=Pos|Form=Len	1	ccomp	_	_
4	lat-sa	le	ADP	_	Number=Sing|Person=2|PronType=Emp	3	obl:prep	_	_
5	ar	ar	ADP	_	_	6	case	_	_
6	ttecht	teacht	NOUN	_	Form=Ecl|VerbForm=Inf	3	parataxis	_	_
7	go	go	ADP	_	_	8	case	_	_
8	háois	aois	NOUN	_	Case=Nom|Form=HPref|Gender=Fem|Number=Sing	6	obl	_	_
9	ársachta	ársaíocht	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	beatha	beatha	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nsubj	_	_
11	mesardha	measartha	ADJ	_	Case=Gen|Gender=Fem|Number=Sing	10	amod	_	_
12	denas	denus	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	obl:tmod	_	_
13	dob	is	PART	_	Form=VF|PartType=Sup|Tense=Past|VerbForm=Cop	14	mark:prt	_	_
14	fheárr	maith	ADJ	_	Degree=Cmp,Sup|Form=Len	0	root	_	_
15	í	í	PRON	_	Gender=Fem|Number=Sing|Person=3	14	nsubj	_	_
16	na	ná	SCONJ	_	_	17	mark	_	_
17	braighdenas	braighdeanas	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	advcl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	_

~~~


