---
layout: base
title:  'Statistics of advmod:emph in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_llct-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_llct-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_llct-dep-advmod-tmod.html">advmod:tmod</a></tt>.

1056 nodes (0%) are attached to their parents as `advmod:emph`.

1030 instances of `advmod:emph` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.09943181818182.

The following 18 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (351; 33% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (327; 31% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (120; 11% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (116; 11% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (63; 6% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (24; 2% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (20; 2% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-PART.html">PART</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-NUM.html">NUM</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advmod:emph	color:blue
1	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	_	4	advmod	_	_
2	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	4	advmod:emph	_	_
3	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	obl:arg	_	_
4	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	advmod:emph	_	_
6	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	fixed	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	duo	duo	NUM	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	8	nummod	_	_
8	petie	petia	NOUN	n|n|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur	4	obj	_	_
9	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_
11	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	12	case	_	_
12	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	8	nmod	_	_
13	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	14	advmod	_	_
14	vocitatur	uocito	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	12	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
15	Sectuia	Sectoria	PROPN	Propn|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	14	xcomp	_	_
16	pertenens	pertineo	VERB	t|t|-|s|p|p|a|f|n|-	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	8	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
17	ipsius	ipse	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	18	det	_	_
18	episcopatui	episcopatus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	16	obl:arg	_	_
19	vestro	uester	DET	a|a|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=2|Poss=Yes|PronType=Prs	18	det	_	SpaceAfter=No
20	;	;	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 advmod:emph	color:blue
1	proinde	proinde	ADV	d|d|-|-|-|-|-|-|-|-	_	7	advmod	_	_
2	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
3	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	ea	is	PRON	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
5	partem	pars	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
6	abere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	7	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
7	debeo	debeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
8	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	9	mark	_	_
9	[verb]	_	VERB	Punc	_	6	advcl	_	_
10	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	9	advmod:emph	_	_
11	isti	iste	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:emph	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	14	cc	_	_
2	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	4	advmod:emph	_	_
3	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	capanna	capanna	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	14	xcomp	_	_
5	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	7	mark	_	_
6	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	7	advmod:emph	_	_
7	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	14	advcl:cmp	_	_
8	bene	bene	ADV	d|d|-|-|-|-|-|-|-|-	_	9	advmod	_	_
9	lavorare	laboro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	4	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	11	cc	_	_
11	gubernare	guberno	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	4	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
12	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
13	meliorare	melioro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Vnoun|Voice=Act	4	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
14	debeamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
15	.	.	PUNCT	Punc	_	14	punct	_	_

~~~


