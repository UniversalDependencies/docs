---
layout: base
title:  'Statistics of xcomp in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="ga_idt-dep-xcomp-pred.html">xcomp:pred</a></tt>.

607 nodes (3%) are attached to their parents as `xcomp`.

594 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.55848434925865.

The following 15 pairs of parts of speech are connected with `xcomp`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (398; 66% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (131; 22% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (19; 3% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (16; 3% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (13; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Chonaic	feic	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	Máire	Máire	PROPN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nsubj	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	fear	fear	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obj	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	nsubj	_	_
6	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	4	acl:relcl	_	_
7	ag	ag	ADP	Simp	_	8	case	_	_
8	iascaireacht	iascaireacht	NOUN	Noun	VerbForm=Vnoun	6	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 xcomp	color:blue
1	Bhain	Bain	PROPN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	0	root	_	_
2	sin	sin	PRON	Dem	PronType=Dem	1	nsubj	_	_
3	preab	preab	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	obj	_	_
4	asainn	as	ADP	Prep	Number=Plur|Person=1	1	obl:prep	_	_
5	agus	agus	SCONJ	Subord	_	7	mark	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	bheirt	beirt	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	1	advcl	_	_
8	againn	ag	ADP	Prep	Number=Plur|Person=1	7	compound	_	_
9	i	i	ADP	Simp	_	10	case	_	_
10	ndíg	díog	NOUN	Noun	Case=Dat|Form=Ecl|Gender=Fem|Number=Sing	7	nmod	_	_
11	ag	ag	ADP	Simp	_	12	case	_	_
12	faire	faire	NOUN	Noun	VerbForm=Vnoun	7	xcomp	_	_
13	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	12	obl:prep	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 xcomp	color:blue
1	Ba	is	AUX	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	léir	léir	ADJ	Adj	Degree=Pos	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	2	csubj:cop	_	_
5	fhios	fios	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	4	nsubj	_	_
6	acu	ag	ADP	Prep	Number=Plur|Person=3	4	obl:prep	_	_
7	cad	cad	PRON	Q	PronType=Int	10	nsubj	_	_
8	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	7	nmod	_	_
9	a	a	PART	Vb	PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	tharla	tarlaigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	4	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


