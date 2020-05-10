---
layout: base
title:  'Statistics of det in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `det`

This relation is universal.

17372 nodes (7%) are attached to their parents as `det`.

11396 instances of `det` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28488372093023.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (15334; 88% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1501; 9% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (206; 1% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (171; 1% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (90; 1% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (32; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (28; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 det	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	Adalbertus	Adalpertus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	dux	dux	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	direxit	dirigo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	missos	missus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
6	suos	suus	DET	a|a|3|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	SpaceAfter=No
7	;	;	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	dicebat	dico	VERB	v|v|3|s|i|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	Eriteo	Eriteus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	1	nsubj	_	_
4	advocatus	aduocatus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No
5	:	:	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	hec	hic	DET	p|p|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	2	det	_	_
2	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	8	dislocated:nmod	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	mihi	ego	PRON	p|p|1|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|Person=1|PronType=Prs	8	obl:arg	_	_
5	eas	is	PRON	p|p|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Dem,Prs	8	obj	_	_
6	livellario	libellarius	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	7	amod	_	_
7	nomine	nomen	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	8	obl	_	_
8	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


