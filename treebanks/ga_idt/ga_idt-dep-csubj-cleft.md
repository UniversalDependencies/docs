---
layout: base
title:  'Statistics of csubj:cleft in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `csubj:cleft`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_idt-dep-csubj-cop.html">csubj:cop</a></tt>.

220 nodes (1%) are attached to their parents as `csubj:cleft`.

220 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.27727272727273.

The following 11 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (98; 45% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (40; 18% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (35; 16% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (16; 7% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (15; 7% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:cleft	color:blue
1	Títhe	Títhe	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	lucht	lucht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nmod	_	_
3	oibre	obair	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	ba	is	PART	Sup	PronType=Rel|Tense=Past|VerbForm=Cop	5	mark:prt	_	_
5	mhó	mór	ADJ	Adj	Degree=Pos|Form=Len	1	amod	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	mark:prt	_	_
7	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
8	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	7	xcomp:pred	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj:cleft	color:blue
1	Duradh	dur	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	0	root	_	_
2	gur	is	AUX	Cop	Tense=Past|VerbForm=Cop	3	cop	_	_
3	seo	seo	PRON	Dem	PronType=Dem	1	ccomp	_	_
4	ceann	ceann	NOUN	Noun	Gender=Masc|Number=Sing	3	nmod	_	_
5	dena	de_na	ADP	Art	Number=Plur|PronType=Art	6	case	_	_
6	fadhbanna	fadhb	NOUN	Noun	Gender=Fem|Number=Plur	4	nmod	_	_
7	is	is	PART	Sup	_	8	mark:prt	_	_
8	mó	mór	ADJ	Adj	Degree=Cmp,Sup	6	amod	_	_
9	atá	bí	VERB	VI	Mood=Ind|PronType=Rel|Tense=Pres	3	csubj:cleft	_	_
10	sa	i	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	cheantar	ceantar	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj:cleft	color:blue
1	I	I	ADP	Simp	_	0	root	_	_
2	nDáil	dáil	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	1	nmod	_	_
3	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	bhFlaitheas	flaitheas	NOUN	Noun	Case=Gen|Form=Ecl|Gender=Masc|NounType=Weak|Number=Plur	2	nmod	_	_
5	go	go	PART	Vb	Mood=Sub|PartType=Vb	6	mark:prt	_	_
6	raibh	bí	VERB	VI	Form=Ecl|Mood=Sub|Tense=Pres	1	csubj:cleft	_	_
7	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


