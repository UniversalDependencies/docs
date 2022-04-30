---
layout: base
title:  'Statistics of csubj:cop in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `csubj:cop`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_idt-dep-csubj-cleft.html">csubj:cleft</a></tt>.

613 nodes (1%) are attached to their parents as `csubj:cop`.

613 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44535073409462.

The following 18 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (266; 43% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (150; 24% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (88; 14% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (66; 11% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj:cop	color:blue
1	Shíl	síl	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	siad	siad	PRON	Pers	Number=Plur|Person=3	1	nsubj	_	_
3	gur	is	AUX	Cop	Tense=Pres|VerbForm=Cop	4	cop	_	_
4	chóir	cóir	NOUN	Noun	Case=Nom|Form=Len|Gender=Fem|Number=Sing	1	ccomp	_	_
5	daobhtha	do	ADP	Pron	Number=Plur|Person=3	4	obl:prep	_	_
6	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	obj	_	_
7	a	a	PART	Inf	PartType=Inf	8	mark	_	_
8	phógadh	pógadh	NOUN	Noun	Form=Len|VerbForm=Inf	4	csubj:cop	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 csubj:cop	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	piseog	piseog	NOUN	Noun	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
3	ag	ag	ADP	Simp	_	4	case	_	_
4	baint	baint	NOUN	Noun	VerbForm=Vnoun	1	xcomp	_	_
5	leis	le	ADP	Prep	Gender=Masc|Number=Sing|Person=3	4	obl:prep	_	_
6	nach	is	AUX	Cop	Polarity=Neg|PronType=Rel|Tense=Pres|VerbForm=Cop	7	cop	_	_
7	cóir	cóir	ADJ	Adj	Degree=Pos	2	acl:relcl	_	_
8	duit	do	ADP	Prep	Number=Sing|Person=2	7	obl:prep	_	_
9	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	11	obj	_	_
10	a	a	PART	Inf	PartType=Inf	11	mark	_	_
11	bhaint	baint	NOUN	Noun	Form=Len|VerbForm=Inf	7	csubj:cop	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cop	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	gnách	gnách	ADJ	Adj	Degree=Pos	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	mbíonn	bí	VERB	PresImp	Aspect=Hab|Form=Ecl|Mood=Ind|Tense=Pres	2	csubj:cop	_	_
5	teocht	teocht	NOUN	Noun	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
6	ard	ard	ADJ	Adj	Case=Nom|Gender=Fem|Number=Sing	5	amod	_	_
7	iontu	i	ADP	Prep	Number=Plur|Person=3	4	obl:prep	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


