---
layout: base
title:  'Statistics of ccomp in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="la_llct-dep-ccomp-relcl.html">ccomp:relcl</a></tt>.

1300 nodes (1%) are attached to their parents as `ccomp`.

910 instances of `ccomp` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.83076923076923.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1231; 95% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (29; 2% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (14; 1% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 ccomp	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	7	cc	_	_
2	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	3	case	_	_
3	confirmationem	confirmatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	6	obl	_	_
4	Andream	Andreas	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	6	nsubj	_	_
5	notarium	notarius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	_
6	scribere	scribo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	7	ccomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
7	rogavi	rogo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 ccomp	color:blue
1	ut	ut	CCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	2	reparandum	_	_
2	volo	uolo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	13	mark	_	_
4	ipsa	ipse	DET	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
5	alias	alius	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Con	6	det	_	_
6	res	res	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	_
7	mea	meus	DET	a|a|1|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	6	det	_	_
8	dum	dum	SCONJ	c|c|-|-|-|-|-|-|-|-	_	10	mark	_	_
9	atvivere	aduiuo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	10	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	meruero	mereo	VERB	v|v|1|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	13	advcl	_	TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
11	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	14	case	_	_
12	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	14	det	_	_
13	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
14	potestate	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	13	obl	_	_
15	vendendi	uendo	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	14	acl	_	SpaceAfter=No|TraditionalMood=Gerundium
16	,	,	PUNCT	Punc	_	17	punct	_	_
17	iudicandi	iudico	VERB	t|t|-|s|p|d|p|n|g|-	Aspect=Prosp|Case=Gen|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	15	conj	_	TraditionalMood=Gerundium
18	quit	quit	SCONJ	d|d|-|-|-|-|-|-|-|-	_	21	mark	_	_
19	aut	aut	CCONJ	c|c|-|-|-|-|-|-|-|-	_	20	cc	_	_
20	qualiter	qualiter	SCONJ	d|d|-|-|-|-|-|-|-|-	_	18	conj	_	_
21	voluero	uolo	VERB	v|v|1|s|t|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	15	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=FuturumExactum
22	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 ccomp	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	5	cc	_	_
2	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	Eriteo	Eriteus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	nsubj	_	_
4	advocatus	aduocatus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	dedi	do	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
6	eorum	is	PRON	p|p|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	obl:arg	_	_
7	vuadia	wadia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
8	paratus	paro	VERB	t|t|-|s|r|p|p|m|n|-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	7	ccomp	_	TraditionalMood=Participium|TraditionalTense=Perfectum
9	esset	sum	AUX	v|v|-|-|p|n|a|-|-|-	VerbForm=Inf	8	aux:pass	_	_
10	iudicio	iudicium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	13	obj	_	_
11	inter	inter	ADP	r|r|-|-|-|-|-|-|-|-	_	12	case	_	_
12	se	se	PRON	p|p|3|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	13	obl	_	_
13	abendum	habeo	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	8	ccomp	_	SpaceAfter=No|TraditionalMood=Gerundium
14	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


