---
layout: base
title:  'Statistics of dep in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dep`

This relation is universal.

186 nodes (0%) are attached to their parents as `dep`.

124 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.76881720430108.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (57; 31% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (55; 30% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (25; 13% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (13; 7% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (13; 7% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (12; 6% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (9; 5% instances), <tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="la_llct-pos-NUM.html">NUM</a></tt>-<tt><a href="la_llct-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	[--]	_	X	Punc	_	3	dep	_	_
3	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	4	obl:arg	_	_
4	offerrimus	offero	VERB	v|v|1|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
6	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 dep	color:blue
1	[--]	_	X	Punc	_	9	dep	_	_
2	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	9	nsubj	_	_
3	hanc	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	cartulam	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Sing	8	nsubj:pass	_	_
5	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	7	mark	_	_
6	superius	superius	ADV	d|d|-|-|-|-|-|-|-|c	Degree=Cmp	7	advmod	_	_
7	legitur	lego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	advcl:cmp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
8	fieri	fio	VERB	v|v|-|-|p|n|p|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Pass	9	ccomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	rogavit	rogo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
10	,	,	PUNCT	Punc	_	9	punct	_	_
11	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	advmod:emph	_	_
12	eis	is	PRON	p|p|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obl:arg	_	_
13	relecta	relego	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
14	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
15	.	.	PUNCT	Punc	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dep	color:blue
1	+	+	PUNCT	SYM	_	3	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Petrus	Petrus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	[--]	_	X	Punc	_	3	dep	_	_
5	missus	missus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	fui	sum	AUX	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	5	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


