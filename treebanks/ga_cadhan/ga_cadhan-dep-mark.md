---
layout: base
title:  'Statistics of mark in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `mark`

This relation is universal.
There are 1 language-specific subtypes of `mark`: <tt><a href="ga_cadhan-dep-mark-prt.html">mark:prt</a></tt>.

80 nodes (2%) are attached to their parents as `mark`.

80 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3625.

The following 8 pairs of parts of speech are connected with `mark`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (39; 49% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (28; 35% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (7; 9% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (2; 3% instances), <tt><a href="ga_cadhan-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-PART.html">PART</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


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
12	ghéag	géag	NOUN	_	Case=Gen|Form=Len|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
1	Dá	dá	SCONJ	_	_	3	mark	_	_
2	mba	is	AUX	_	Form=Ecl|Tense=Past|VerbForm=Cop	3	cop	_	_
3	rud	rud	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	advcl	_	_
4	é	é	PRON	_	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
5	go	go	PART	_	PartType=Cmpl	6	mark:prt	_	_
6	mbeadh	bí	VERB	_	Form=Ecl|Mood=Cnd	3	ccomp	_	_
7	breac	breac	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
8	beag	beag	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_
9	suaithinseach	suaithinseach	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_
10	éigin	éigin	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_
11	aige	ag	ADP	_	Gender=Masc|Number=Sing|Person=3	6	xcomp:pred	_	_
12	bhídís	bí	VERB	_	Aspect=Imp|Form=Len|Number=Plur|Person=3|Tense=Past	0	root	_	_
13	ag	ag	ADP	_	_	14	case	_	_
14	pléidhe	plé	NOUN	_	VerbForm=Vnoun	12	xcomp	_	_
15	le	le	ADP	_	_	16	case	_	_
16	chéile	céile	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	14	obl	_	_
17	cé	cé	PRON	_	PronType=Int	14	ccomp	_	_
18	aige	ag	ADP	_	Gender=Masc|Number=Sing|Person=3	17	obl:prep	_	_
19	go	go	PART	_	PartType=Cmpl	20	mark:prt	_	_
20	mbeadh	bí	VERB	_	Form=Ecl|Mood=Cnd	17	ccomp	_	_
21	sé	sé	PRON	_	Gender=Masc|Number=Sing|Person=3	20	nsubj	_	SpaceAfter=No
22	.	.	PUNCT	_	_	12	punct	_	SpacesAfter=\n

~~~


