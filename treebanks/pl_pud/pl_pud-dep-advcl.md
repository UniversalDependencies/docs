---
layout: base
title:  'Statistics of advcl in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="pl_pud-dep-advcl-relcl.html">advcl:relcl</a></tt>.

176 nodes (1%) are attached to their parents as `advcl`.

109 instances of `advcl` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.83522727272727.

The following 12 pairs of parts of speech are connected with `advcl`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (136; 77% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (16; 9% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (7; 4% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Bouchard	Bouchard	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	doznała	doznać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	szokującej	szokujący	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	porażki	porażka	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	obj	2:obj	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	tracąc	tracić	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	2	advcl	2:advcl	_
7	trzy	trzy	NUM	num:pl:acc:m3:congr:ncol	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Word	8	nummod	8:nummod	_
8	sety	set	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 advcl	color:blue
1	Proces	proces	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	5:nsubj:pass	_
2	ten	ten	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	1	det	1:det	_
3	został	zostać	AUX	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
4	jednak	jednak	PART	part	_	5	advmod:emph	5:advmod:emph	_
5	odwrócony	odwrócić	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
7	kiedy	kiedy	ADV	adv	PronType=Int	9	advmod	9:advmod	_
8	Julian	Julian	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	9:nsubj	_
9	zginął	zginąć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	5:advcl	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Loc
11	bitwie	bitwa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	9	obl:arg	9:obl:arg	_
12	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	14	case	14:case	Case=Loc
13	363	363	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	14	amod:flat	14:amod:flat	_
14	r	rok	NOUN	brev:pun	Abbr=Yes	9	obl	9:obl	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 advcl	color:blue
1	Jeśli	jeśli	SCONJ	comp	_	2	mark	2:mark	_
2	chcecie	chcieć	VERB	fin:pl:sec:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	12:advcl	_
3	zobaczyć	zobaczyć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	stolicę	stolica	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
6	całej	cały	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	okazałości	okazałość	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
9	listopad	listopad	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	_
10	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
11	świetnym	świetny	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	12	amod	12:amod	_
12	czasem	czas	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
13	na	na	ADP	prep:acc	AdpType=Prep	14	case	14:case	Case=Acc
14	wycieczkę	wycieczka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	12	nmod:arg	12:nmod:arg	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


