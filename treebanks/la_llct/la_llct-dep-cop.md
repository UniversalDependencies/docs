---
layout: base
title:  'Statistics of cop in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `cop`

This relation is universal.

1593 nodes (1%) are attached to their parents as `cop`.

834 instances of `cop` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.43879472693032.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (466; 29% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (430; 27% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (408; 26% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (176; 11% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (109; 7% instances), <tt><a href="la_llct-pos-NUM.html">NUM</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-X.html">X</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 cop	color:blue
1	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
2	is	hic	DET	p|p|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|PronType=Dem	4	det	_	_
3	duobus	duo	NUM	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|NumType=Card	4	nummod	_	_
4	germanis	germanus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	6	obl	_	_
5	nihil	nihil	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind,Neg	6	obj	_	_
6	abeo	habeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	8	obj	_	_
8	contradiceret	contradico	VERB	v|v|1|s|i|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin|Voice=Act	5	acl:relcl	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	11	punct	_	_
10	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	11	mark	_	_
11	receptibilis	receptibilis	ADJ	a|a|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	6	advcl	_	_
12	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	11	advmod	_	_
13	sint	sum	AUX	v|v|3|p|p|s|a|-|-|-	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	SpaceAfter=No
14	;	;	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	3	cc	_	_
2	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	tenentem	teneo	VERB	t|t|-|s|p|p|a|m|a|-	Aspect=Imp|Case=Acc|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
4	ipsum	ipse	DET	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	det	_	_
5	gahagium	gahagium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	3	obj	_	SpaceAfter=No
6	;	;	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 cop	color:blue
1	+	+	PUNCT	SYM	_	2	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
3	Viventius	Viuentius	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	2	punct	_	_
6	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	8	mark	_	_
7	supra	supra	ADV	d|d|-|-|-|-|-|-|-|-	_	8	advmod	_	_
8	legitur	lego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	10	advcl	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	8	punct	_	_
10	missus	missus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
11	fui	sum	AUX	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	10	cop	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


