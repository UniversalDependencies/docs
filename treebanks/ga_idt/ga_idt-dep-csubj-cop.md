---
layout: base
title:  'Statistics of csubj:cop in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `csubj:cop`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_idt-dep-csubj-cleft.html">csubj:cleft</a></tt>.

93 nodes (0%) are attached to their parents as `csubj:cop`.

93 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.20430107526882.

The following 14 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (37; 40% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (23; 25% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (9; 10% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (8; 9% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cop	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	gnách	gnách	ADJ	Adj	Degree=Pos	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	mbíonn	bí	VERB	PresImp	Form=Ecl|Mood=Int	2	csubj:cop	_	_
5	teocht	teocht	NOUN	Noun	Gender=Fem|Number=Sing	4	nsubj	_	_
6	ard	ard	ADJ	Adj	Gender=Fem|Number=Sing	5	amod	_	_
7	iontu	i	ADP	Prep	Number=Plur|Person=3	4	obl:prep	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:cop	color:blue
1	''	''	PUNCT	Punct	_	3	punct	_	_
2	Ní	is	AUX	Cop	Tense=Pres|VerbForm=Cop	3	cop	_	_
3	dóigh	dóigh	NOUN	Noun	Gender=Fem|Number=Sing	0	root	_	_
4	liom	le	ADP	Prep	Number=Sing|Person=1	3	obl:prep	_	_
5	go	go	PART	Vb	PartType=Cmpl	6	mark:prt	_	_
6	n-oirfeadh	oir	VERB	VI	Form=Ecl|Mood=Cnd	3	csubj:cop	_	_
7	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
8	duit	do	ADP	Prep	Number=Sing|Person=2	6	obl:prep	_	SpaceAfter=No
9	!	!	PUNCT	!	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:cop	color:blue
1	Ba	is	AUX	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	bhreá	breá	ADJ	Adj	Degree=Pos|Form=Len	0	root	_	_
3	leis	le	ADP	Prep	Gender=Masc|Number=Sing|Person=3	2	obl:prep	_	_
4	a	a	PART	Inf	PartType=Inf	5	mark:prt	_	_
5	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	2	csubj:cop	_	_
6	in	in	ADP	Cmpd	PrepForm=Cmpd	5	xcomp:pred	_	_
7	ann	ann	ADP	Cmpd	_	6	fixed	_	_
8	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	9	nmod:poss	_	_
9	cheann	ceann	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	11	obj	_	_
10	a	a	PART	Inf	PartType=Inf	11	mark:prt	_	_
11	ardú	ardú	NOUN	Noun	VerbForm=Inf	5	xcomp	_	_
12	agus	agus	CCONJ	Coord	_	14	cc	_	_
13	a	a	PART	Inf	PartType=Inf	14	mark:prt	_	_
14	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	5	conj	_	_
15	saor	saor	ADJ	Adj	Degree=Pos	14	xcomp:pred	_	_
16	ó	ó	ADP	Simp	_	17	case	_	_
17	bholadh	boladh	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	15	obl	_	_
18	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	créafóige	créafóg	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	.	_	2	punct	_	_

~~~


