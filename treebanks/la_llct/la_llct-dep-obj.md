---
layout: base
title:  'Statistics of obj in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `obj`

This relation is universal.

6563 nodes (3%) are attached to their parents as `obj`.

4600 instances of `obj` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.66295901264666.

The following 8 pairs of parts of speech are connected with `obj`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (4579; 70% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (1579; 24% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (214; 3% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (172; 3% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	Adalbertus	Adalpertus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	dux	dux	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	direxit	dirigo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	missos	missus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
6	suos	suus	DET	a|a|3|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	SpaceAfter=No
7	;	;	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 obj	color:blue
1	petia	petia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	10	dislocated:obj	_	_
2	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	1	det	_	_
3	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	1	punct	_	_
6	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	10	mark	_	_
7	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	9	nmod	_	_
8	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	obl:arg	_	_
9	eas	is	PRON	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	10	obj	_	_
10	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	;	;	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obj	color:blue
1	unam	unus	NUM	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|NumType=Card	2	obj	_	_
2	dedi	do	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	arcivo	archium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	2	obl	_	_
5	episcopali	episcopalis	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	6	amod	_	_
6	domo	domus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	10	punct	_	_
8	aliam	alius	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind	10	obj	_	_
9	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	obl:arg	_	_
10	retenui	retineo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


