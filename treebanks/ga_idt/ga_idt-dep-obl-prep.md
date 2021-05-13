---
layout: base
title:  'Statistics of obl:prep in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `obl:prep`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ga_idt-dep-obl-tmod.html">obl:tmod</a></tt>.

1976 nodes (2%) are attached to their parents as `obl:prep`.

1944 instances of `obl:prep` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.54504048582996.

The following 11 pairs of parts of speech are connected with `obl:prep`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1139; 58% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (617; 31% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (172; 9% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (18; 1% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (13; 1% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:prep	color:blue
1	Cé	cé	SCONJ	Subord	_	3	mark	_	_
2	nár	nár	PART	Vb	PartType=Cmpl|Polarity=Neg|Tense=Past	3	mark:prt	_	_
3	dhúirt	abair	VERB	VTI	Form=Len|Mood=Ind|Polarity=Neg|Tense=Past	6	advcl	_	_
4	tú	tú	PRON	Pers	Number=Sing|Person=2	3	nsubj	_	_
5	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	obj	_	_
6	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
7	'	'	PUNCT	Punct	_	8	punct	_	SpaceAfter=No
8	fhios	fios	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	6	nsubj	_	_
9	agam	ag	ADP	Prep	Number=Sing|Person=1	6	obl:prep	_	_
10	gur	gur	PART	Vb	PartType=Vb|Tense=Past	11	mark:prt	_	_
11	thuig	tuig	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	6	ccomp	_	_
12	tú	tú	PRON	Pers	Number=Sing|Person=2	11	nsubj	_	_
13	sin	sin	PRON	Dem	PronType=Dem	11	obj	_	_
14	i	i	ADP	Simp	_	16	case	_	_
15	do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	16	nmod:poss	_	_
16	chroí	croí	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:prep	color:blue
1	''	''	PUNCT	Punct	_	3	punct	_	_
2	Ní	is	AUX	Cop	Polarity=Neg|Tense=Pres|VerbForm=Cop	3	cop	_	_
3	dóigh	dóigh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
4	liom	le	ADP	Prep	Number=Sing|Person=1	3	obl:prep	_	_
5	go	go	PART	Vb	PartType=Cmpl	6	mark:prt	_	_
6	n-oirfeadh	oir	VERB	VI	Form=Ecl|Mood=Cnd	3	csubj:cop	_	_
7	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
8	duit	do	ADP	Prep	Number=Sing|Person=2	6	obl:prep	_	SpaceAfter=No
9	!	!	PUNCT	!	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obl:prep	color:blue
1	D'	do	PART	Vb	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	inis	inis	VERB	VTI	Mood=Ind|Tense=Past	0	root	_	_
3	mé	mé	PRON	Pers	Number=Sing|Person=1	2	nsubj	_	_
4	féin	féin	PRON	Ref	Reflex=Yes	3	nmod	_	_
5	dhó	do	ADP	Prep	Form=Len|Gender=Masc|Number=Sing|Person=3	2	obl:prep	_	_
6	céard	cé	PRON	Q	PronType=Int	2	ccomp	_	_
7	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	6	acl:relcl	_	_
9	déanta	déanta	ADJ	Adj	VerbForm=Part	8	xcomp:pred	_	_
10	againn	ag	ADP	Prep	Number=Plur|Person=1	9	obl:prep	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


