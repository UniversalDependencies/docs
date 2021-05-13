---
layout: base
title:  'Statistics of advmod:emph in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advmod.html">advmod</a></tt>.

765 nodes (0%) are attached to their parents as `advmod:emph`.

742 instances of `advmod:emph` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.63006535947712.

The following 9 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (388; 51% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (351; 46% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (14; 2% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="la_llct-pos-PART.html">PART</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 advmod:emph	color:blue
1	proinde	proinde	ADV	d|d|-|-|-|-|-|-|-|-	_	7	advmod	_	_
2	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
3	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	ea	is	PRON	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Person=3|PronType=Dem,Prs	6	obl	_	_
5	partem	pars	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
6	abere	habeo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	7	xcomp	_	_
7	debeo	debeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	0	root	_	_
8	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	9	mark	_	_
9	[verb]	missing^token	VERB	Punc	_	6	advcl	_	_
10	et	et	ADV	d|d|-|-|-|-|-|-|-|-	_	9	advmod:emph	_	_
11	isti	iste	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advmod:emph	color:blue
1	simul	simul	ADV	d|d|-|-|-|-|-|-|-|-	_	4	advmod	_	_
2	et	et	ADV	d|d|-|-|-|-|-|-|-|-	_	4	advmod:emph	_	_
3	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	obl:arg	_	_
4	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem,Prs	8	advmod:emph	_	_
6	est	sum	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	fixed	_	_
7	duo	duo	NUM	a|a|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	8	nummod	_	_
8	petie	petia	NOUN	n|n|-|p|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Plur	4	obj	_	_
9	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	vinea	uinea	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_
11	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	12	case	_	_
12	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	8	nmod	_	_
13	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	14	advmod	_	_
14	vocitatur	uocito	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	12	acl:relcl	_	_
15	Sectuia	Sectoria	PROPN	Propn|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	14	xcomp	_	_
16	pertenens	pertineo	VERB	t|t|-|s|p|p|a|f|n|-	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	8	acl	_	_
17	ipsius	ipse	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	18	det	_	_
18	episcopatui	episcopatus	NOUN	n|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	16	obl:arg	_	_
19	vestro	uester	DET	a|a|2|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=2|Poss=Yes|PronType=Prs	18	det	_	SpaceAfter=No
20	;	;	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:emph	color:blue
1	ecce	ecce	ADV	e|e|-|-|-|-|-|-|-|-	PronType=Dem	2	advmod:emph	_	_
2	autorem	auctor	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	parataxis	_	_
3	nostrum	noster	DET	a|a|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	2	det	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	2	punct	_	_
5	age	ago	VERB	v|v|2|s|p|m|a|-|-|-	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
7	eo	is	PRON	p|p|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=3|PronType=Dem,Prs	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


