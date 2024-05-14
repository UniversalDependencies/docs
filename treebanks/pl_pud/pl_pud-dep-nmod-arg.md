---
layout: base
title:  'Statistics of nmod:arg in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod:arg`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pud-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="pl_pud-dep-nmod-pred.html">nmod:pred</a></tt>.

619 nodes (3%) are attached to their parents as `nmod:arg`.

618 instances of `nmod:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55896607431341.

The following 7 pairs of parts of speech are connected with `nmod:arg`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (525; 85% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (85; 14% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:arg	color:blue
1	Obecny	obecny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	czas	czas	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
3	oczekiwania	oczekiwać	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	2	nmod:arg	2:nmod:arg	_
4	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
5	osiem	osiem	NUM	num:pl:nom:m3:rec:ncol	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	6	nummod:gov	6:nummod:gov	_
6	tygodni	tydzień	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:arg	color:blue
1	Do	do	ADP	prep:gen	AdpType=Prep	3	case	3:case	Case=Gen
2	1563	1563	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	3	amod:flat	3:amod:flat	_
3	r	rok	NOUN	brev:pun	Abbr=Yes	7	obl	7:obl	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_
5	populacja	populacja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	_
6	Wenecji	Wenecja	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	nmod:arg	5:nmod:arg	_
7	spadła	spaść	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	do	do	ADP	prep:gen	AdpType=Prep	11	case	11:case	Case=Gen
9	około	około	PART	part	_	10	advmod:emph	10:advmod:emph	_
10	168000	168000	NUM	num:pl:gen:f:congr	Case=Gen|Gender=Fem|Number=Plur|NumForm=Digit|NumType=Card	11	nummod	11:nummod	_
11	osób	osoba	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	7	obl	7:obl	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nmod:arg	color:blue
1	Yerba	yerba	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj:pass	5:nsubj:pass	_
2	Buena	Buena	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	1	flat	1:flat	_
3	Gardens	Gardens	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	flat	2:flat	_
4	zostały	zostać	AUX	praet:pl:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
5	zbudowane	zbudować	ADJ	ppas:pl:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	na	na	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	początku	początek	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl	_
8	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	nmod:arg	7:nmod:arg	_
9	90	90	ADJ	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Ord	8	amod	8:amod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_
11	na	na	ADP	prep:loc	AdpType=Prep	12	case	12:case	Case=Loc
12	dachu	dach	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl	_
13	Moscone	moscić	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	12	nmod:arg	12:nmod:arg	_
14	North	North	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	flat	13:flat	_
15	Convention	Convention	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	14	flat	14:flat	_
16	Cente	Center	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	15	flat	15:flat	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


