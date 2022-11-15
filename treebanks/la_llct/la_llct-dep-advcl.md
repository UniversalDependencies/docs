---
layout: base
title:  'Statistics of advcl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advcl`

This relation is universal.
There are 4 language-specific subtypes of `advcl`: <tt><a href="la_llct-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_llct-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_llct-dep-advcl-pred.html">advcl:pred</a></tt>, <tt><a href="la_llct-dep-advcl-relcl.html">advcl:relcl</a></tt>.

5629 nodes (2%) are attached to their parents as `advcl`.

3523 instances of `advcl` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.94972464025582.

The following 19 pairs of parts of speech are connected with `advcl`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2966; 53% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1691; 30% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (331; 6% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (231; 4% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (166; 3% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (117; 2% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (87; 2% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (19; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PART.html">PART</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advcl	color:blue
1	+	+	PUNCT	SYM	_	7	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Rachifonsus	Rachifonsus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
4	notarius	notarius	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	post	post	ADP	r|r|-|-|-|-|-|-|-|-	_	6	mark	_	_
6	traditam	trado	VERB	t|t|-|s|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	7	advcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
7	conplevi	compleo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
8	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	9	cc	_	_
9	dedi	do	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
10	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 advcl	color:blue
1	+	+	PUNCT	SYM	_	3	punct	_	_
2	Ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	det	_	_
3	Liutfridi	Liutfridus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	rogatus	rogo	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
6	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
7	Leo	Leo	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	5	obl:arg	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	3	punct	_	_
9	me	ego	PRON	p|p|1|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	teste	testis	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	11	advcl	_	_
11	subscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 22 advcl	color:blue
1	manifestu	manifestus	ADJ	a|a|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	0	root	_	_
2	sum	sum	AUX	v|v|1|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	det	_	_
4	Ardo	Ardus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	6	punct	_	_
6	filio	filius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	_
7	bone	bonus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	8	amod	_	_
8	memorie	memoria	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
9	Taiti	Taitus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	11	punct	_	_
11	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	22	mark	_	_
12	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	13	amod	_	_
13	Sichelmi	Sichelmus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	22	nsubj	_	SpaceAfter=No
14	,	,	PUNCT	Punc	_	15	punct	_	_
15	filio	filius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	13	appos	_	_
16	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	17	amod	_	_
17	Bonici	Bonichis	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
18	clerici	clericus	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	13	punct	_	_
20	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	21	case	_	_
21	cartulam	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Degree=Dim|Gender=Fem|Number=Sing	22	obl	_	_
22	venundavit	uenumdo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
23	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	22	obl:arg	_	_
24	omnibus	omnis	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Tot	25	det	_	_
25	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	22	obl:arg	_	_
26	suis	suus	DET	a|a|3|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	25	det	_	SpaceAfter=No
27	,	,	PUNCT	Punc	_	30	punct	_	_
28	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	30	mark	_	_
29	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	30	advmod	_	_
30	legitur	lego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	22	advcl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
31	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


