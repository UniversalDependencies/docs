---
layout: base
title:  'Statistics of csubj:cleft in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `csubj:cleft`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_idt-dep-csubj-cop.html">csubj:cop</a></tt>.

366 nodes (0%) are attached to their parents as `csubj:cleft`.

366 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.05737704918033.

The following 18 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (209; 57% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (40; 11% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (36; 10% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (33; 9% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (15; 4% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (10; 3% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:cleft	color:blue
1	Títhe	teach	NOUN	Noun	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
2	lucht	lucht	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	oibre	obair	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	ba	is	PART	Sup	PartType=Sup|Tense=Past|VerbForm=Cop	5	mark:prt	_	_
5	mhó	mór	ADJ	Adj	Degree=Cmp,Sup|Form=Len	1	amod	_	_
6	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	7	mark:prt	_	_
7	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
8	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	7	xcomp:pred	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:cleft	color:blue
1	Arbh	is	AUX	Cop	Form=VF|Mood=Int|Tense=Past|VerbForm=Cop	3	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	3	nmod	_	_
3	Seán	Seán	PROPN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	5	mark:prt	_	_
5	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	3	csubj:cleft	_	_
6	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	xcomp:pred	_	SpaceAfter=No
7	?	?	PUNCT	?	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj:cleft	color:blue
1	Mise	mise	PRON	Pers	Number=Sing|Person=1|PronType=Emp	0	root	_	_
2	amháin	amháin	ADJ	Adj	Degree=Pos	1	amod	_	_
3	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	4	mark:prt	_	_
4	thabharfas	tabhair	VERB	VTI	Form=Len|Mood=Ind|PronType=Rel|Tense=Fut	1	csubj:cleft	_	_
5	aire	aire	NOUN	Noun	Case=Nom|Gender=Fem|Number=Sing	4	obj	_	_
6	dó	do	ADP	Prep	Gender=Masc|Number=Sing|Person=3	4	obl:prep	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


