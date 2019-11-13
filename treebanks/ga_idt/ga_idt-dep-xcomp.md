---
layout: base
title:  'Statistics of xcomp in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="ga_idt-dep-xcomp-pred.html">xcomp:pred</a></tt>.

999 nodes (2%) are attached to their parents as `xcomp`.

979 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.41641641641642.

The following 17 pairs of parts of speech are connected with `xcomp`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (655; 66% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (216; 22% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (37; 4% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (27; 3% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (24; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Caithfidh	caith	VERB	VTI	Mood=Ind|Tense=Fut	0	root	_	_
2	foirne	foireann	NOUN	Noun	Gender=Fem|Number=Plur	5	nsubj	_	_
3	úsáid	úsáid	NOUN	Noun	Gender=Fem|Number=Sing	5	obj	_	_
4	a	a	PART	Inf	PartType=Inf	5	mark	_	_
5	bhaint	baint	NOUN	Noun	Form=Len|VerbForm=Inf	1	xcomp	_	_
6	as	as	ADP	Simp	_	8	case	_	_
7	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	huimhreacha	uimhir	NOUN	Noun	Definite=Def|Gender=Fem|Number=Plur	5	nmod	_	_
9	4-15	4-15	NUM	Num	_	8	nummod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	DAOINE	duine	NOUN	Noun	_	0	root	_	_
2	AG	ag	ADP	Simp	_	3	case	_	_
3	GLUAISEACHT	gluaiseacht	NOUN	Noun	VerbForm=Vnoun	1	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Ba	is	AUX	Cop	Mood=Cnd|VerbForm=Cop	2	cop	_	_
2	mhaith	maith	ADJ	Adj	Degree=Pos|Form=Len	0	root	_	_
3	liom	le	ADP	Prep	Number=Sing|Person=1	2	nsubj	_	_
4	fanacht	fanacht	NOUN	Noun	VerbForm=Inf	2	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	.	_	2	punct	_	_

~~~


