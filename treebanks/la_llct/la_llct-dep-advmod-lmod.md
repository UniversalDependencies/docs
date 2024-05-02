---
layout: base
title:  'Statistics of advmod:lmod in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_llct-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_llct-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_llct-dep-advmod-tmod.html">advmod:tmod</a></tt>.

1222 nodes (1%) are attached to their parents as `advmod:lmod`.

1015 instances of `advmod:lmod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.4860883797054.

The following 6 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1134; 93% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (39; 3% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (30; 2% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (10; 1% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 advmod:lmod	color:blue
1	unde	unde	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	9	advmod:lmod	_	_
2	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	3	case	_	_
3	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Number=Plur|Person=1|PronType=Prs	8	obl	_	_
4	duas	duo	NUM	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	5	nummod	_	_
5	cartulas	chartula	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Plur	8	obj	_	_
6	Lopo	lupus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	8	nsubj	_	_
7	notarium	notarius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	6	appos	_	_
8	scribere	scribo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	9	ccomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	rogavimus	rogo	VERB	v|v|1|p|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 advmod:lmod	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	6	cc	_	_
2	ipsi	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	nmod	_	_
3	virgario	uirgareum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
4	uno	unus	DET	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	5	det	_	_
5	lato	latus	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
6	tene	teneo	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	8	case	_	_
8	silva	silua	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	6	obl	_	_
9	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	10	cc	_	_
10	virgario	uirgareum	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	8	conj	_	_
11	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
12	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	13	amod	_	_
13	Salvatoris	saluator	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	,	,	PUNCT	Punc	_	20	punct	_	_
15	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	18	advmod:lmod	_	_
16	Aufridi	Aufridus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	20	nsubj:pass	_	_
17	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	16	appos	_	_
18	rector	rector	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	20	xcomp	_	_
19	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf	18	cop	_	_
20	videtur	uideo	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	11	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
21	;	;	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:lmod	color:blue
1	signum	signum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	+	+	PUNCT	SYM	_	3	punct	_	_
3	manus	manus	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	Adalprandi	Adalprandus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj	_	_
6	ibidem	ibidem	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc	7	advmod:lmod	_	_
7	fui	sum	AUX	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


