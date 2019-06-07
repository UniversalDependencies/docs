---
layout: base
title:  'Statistics of cop in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `cop`

This relation is universal.

379 nodes (2%) are attached to their parents as `cop`.

374 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26121372031662.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (156; 41% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (129; 34% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (43; 11% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (34; 9% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Daoine	duine	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	0	root	_	_
2	nach	is	AUX	Cop	Polarity=Neg|PronType=Rel|Tense=Pres|VerbForm=Cop	1	cop	_	_
3	iad	iad	PRON	Pers	Number=Plur|Person=3	1	nsubj	_	SpaceAfter=No
4	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	B'	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	2	cop	_	SpaceAfter=No
2	fhearr	maith	ADJ	Adj	Degree=Cmp,Sup	0	root	_	_
3	dúinn	do	ADP	Prep	Number=Plur|Person=1	2	obl:prep	_	_
4	imeacht	imeacht	NOUN	Noun	VerbForm=Inf	2	nsubj	_	_
5	isteach	isteach	ADV	Dir	_	4	advmod	_	_
6	a	a	PART	Voc	PartType=Voc	7	case:voc	_	_
7	Tom	Tom	PROPN	Noun	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	An	is	AUX	Cop	Mood=Int|Tense=Pres|VerbForm=Cop	2	cop	_	_
2	leatsa	le	ADP	Prep	Number=Sing|Person=2|PronType=Emp	0	root	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	teach	teach	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
5	?	?	PUNCT	?	_	2	punct	_	_

~~~


