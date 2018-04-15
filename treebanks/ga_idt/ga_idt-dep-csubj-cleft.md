---
layout: base
title:  'Statistics of csubj:cleft in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `csubj:cleft`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_idt-dep-csubj-cop.html">csubj:cop</a></tt>.

133 nodes (1%) are attached to their parents as `csubj:cleft`.

132 instances of `csubj:cleft` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.18796992481203.

The following 11 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (43; 32% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (37; 28% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (20; 15% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:cleft	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	3	cop	_	_
2	ag	ag	ADP	Simp	_	3	case	_	_
3	déanamh	déanamh	NOUN	Noun	VerbForm=Vnoun	0	root	_	_
4	cáca	cáca	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	3	obj	_	_
5	atá	bí	VERB	VI	Mood=Ind|PronType=Rel|Tense=Pres	3	csubj:cleft	_	_
6	mé	mé	PRON	Pers	Number=Sing|Person=1	5	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

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
4	bhFlaitheas	flaitheas	NOUN	Noun	Case=Gen|Form=Ecl|Gender=Masc|NounType=Weak|Number=Plur	2	compound	_	_
5	go	go	PART	Vb	Mood=Sub|PartType=Vb	6	mark:prt	_	_
6	raibh	bí	VERB	VI	Form=Ecl|Mood=Sub|Tense=Pres	1	csubj:cleft	_	_
7	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj:cleft	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	eisean	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3|PronType=Emp	0	root	_	_
3	atá	bí	VERB	VI	Mood=Ind|PronType=Rel|Tense=Pres	2	csubj:cleft	_	_
4	ag	ag	ADP	Simp	_	5	case	_	_
5	cabhrú	cabhrú	NOUN	Noun	VerbForm=Vnoun	3	xcomp	_	_
6	liom	le	ADP	Prep	Number=Sing|Person=1	5	obl:prep	_	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


