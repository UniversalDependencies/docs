---
layout: base
title:  'Statistics of amod in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `amod`

This relation is universal.

705 nodes (3%) are attached to their parents as `amod`.

687 instances of `amod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.86241134751773.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (606; 86% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (29; 4% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (27; 4% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (17; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	laistigh	laistigh	ADV	Loc	_	0	root	_	_
3	de	de	ADP	Simp	_	4	case	_	_
4	bhliain	bliain	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	2	obl:tmod	_	_
5	o	ó	ADP	Simp	_	6	case	_	_
6	am	am	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	nmod	_	_
7	rithte	rithte	ADJ	Adj	VerbForm=Part	6	amod	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	Achta	acht	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	compound	_	_
10	so	seo	DET	CM	Dialect=Munster|PronType=Dem	9	det	_	_
11	a	a	PART	Vb	PartType=Vb|PronType=Rel	12	mark:prt	_	_
12	déanfar	déan	VERB	VTI	Mood=Ind|Tense=Fut|Voice=Auto	2	csubj:cleft	_	_
13	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 amod	color:blue
1	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	teilifís	teilifís	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nsubj	_	_
4	'	'	PUNCT	Punct	_	5	punct	_	SpaceAfter=No
5	mínádúrtha	mínádúrtha	ADJ	Adj	Degree=Pos	1	amod	_	SpaceAfter=No
6	'	'	PUNCT	Punct	_	5	punct	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 amod	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	mhaide	maide	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nsubj	_	_
4	siúil	siúl	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	3	compound	_	_
5	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	6	case	_	_
6	láimh	lámh	NOUN	Noun	Case=Dat|Gender=Fem|Number=Sing	1	xcomp:pred	_	_
7	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	6	obl:prep	_	SpaceAfter=No
8	...	...	PUNCT	Punct	_	9	punct	_	_
9	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	ccomp	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	áit	áit	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
12	réabtha	réabtha	ADJ	Adj	VerbForm=Part	9	xcomp:pred	_	_
13	dóite	dóite	ADJ	Adj	VerbForm=Part	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


