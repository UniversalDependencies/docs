---
layout: base
title:  'Statistics of nmod:arg in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod:arg`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nmod.html">nmod</a></tt>.
There are also 4 other language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-cmp.html">nmod:cmp</a></tt>, <tt><a href="pl_pud-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pud-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="pl_pud-dep-nmod-pred.html">nmod:pred</a></tt>.

660 nodes (4%) are attached to their parents as `nmod:arg`.

659 instances of `nmod:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66212121212121.

The following 9 pairs of parts of speech are connected with `nmod:arg`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (553; 84% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (91; 14% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 0% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 nmod:arg	color:blue
1	Analitycy	analityk	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	4:nsubj	_
2	na	na	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc
3	razie	raz	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	4:obl	_
4	wstrzymują	wstrzymywać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
6	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Ins
7	uznaniem	uznać	NOUN	ger:sg:inst:n:perf:aff	Aspect=Perf|Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	4	obl:arg	4:obl:arg	_
8	usługi	usługa	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	obj	7:obj	_
9	za	za	ADP	prep:acc	AdpType=Prep	10	case	10:case	Case=Acc
10	martwą	martwy	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	nmod:arg	7:nmod:arg	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


