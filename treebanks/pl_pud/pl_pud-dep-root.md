---
layout: base
title:  'Statistics of root in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `root`

This relation is universal.

1000 nodes (5%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.189.

The following 8 pairs of parts of speech are connected with `root`: -<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (773; 77% instances), -<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (142; 14% instances), -<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (75; 8% instances), -<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (3; 0% instances), -<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), -<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (2; 0% instances), -<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), -<tt><a href="pl_pud-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Można	można	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
2	wskazać	wskazać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	_
3	paralele	paralela	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	_
4	między	między	ADP	prep:inst	AdpType=Prep	5	case	5:case|9:case	Case=Ins
5	grami	gra	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	3	nmod	3:nmod	_
6	a	a	CCONJ	conj	_	9	cc	9:cc	_
7	naszym	nasz	DET	adj:sg:inst:n:pos	Case=Ins|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	9	det:poss	9:det:poss	_
8	codziennym	codzienny	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	życiem	życie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	5	conj	3:nmod|5:conj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Nowe	nowy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
2	wydatki	wydatek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj:pass	3:nsubj:pass	_
3	finansowane	finansować	ADJ	ppas:pl:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Gen
6	zasobnego	zasobny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	amod	7:amod	_
7	konta	konto	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	obl:arg	3:obl:arg	_
8	Clinton	Clinton	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	5	5	NUM	num:pl:nom:m3:congr	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
2	tys	tysiąc	X	brev:pun	Abbr=Yes|Pun=Yes	1	flat	1:flat	SpaceAfter=No
3	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_
4	dolarów	dolar	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	_
5	na	na	ADP	prep:acc	AdpType=Prep	6	case	6:case	Case=Acc
6	osobę	osoba	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	dopuszczalne	dopuszczalny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	maksimum	maksimum	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	4	appos	4:appos	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


