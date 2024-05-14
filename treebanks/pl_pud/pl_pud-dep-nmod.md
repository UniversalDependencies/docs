---
layout: base
title:  'Statistics of nmod in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod`

This relation is universal.
There are 4 language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pud-dep-nmod-flat.html">nmod:flat</a></tt>, <tt><a href="pl_pud-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="pl_pud-dep-nmod-pred.html">nmod:pred</a></tt>.

922 nodes (5%) are attached to their parents as `nmod`.

868 instances of `nmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.42516268980477.

The following 19 pairs of parts of speech are connected with `nmod`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (518; 56% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (268; 29% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (34; 4% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (34; 4% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (18; 2% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (6; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	5	5	NUM	num:pl:nom:m3:congr	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
2	tys	tysiąc	NOUN	brev:pun	Abbr=Yes	1	flat	1:flat	SpaceAfter=No
3	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_
4	dolarów	dolar	NOUN	subst:pl:gen:m2	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur	0	root	0:root	_
5	na	na	ADP	prep:acc	AdpType=Prep	6	case	6:case	Case=Acc
6	osobę	osoba	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	dopuszczalne	dopuszczalny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
9	maksimum	maksimum	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	4	appos	4:appos	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	8	punct	8:punct	_
2	Jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	nmod	3:nmod	_
3	głos	głos	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
4	dosłownie	dosłownie	PART	part	_	5	advmod:emph	5:advmod:emph	_
5	okrążył	okrążyć	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	parataxis:obj	8:parataxis:obj	_
6	świat	świat	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	5:obj	_
7	–	–	PUNCT	interp	PunctType=Dash	8	punct	8:punct	_
8	powiedziała	powiedzieć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	Leive	Leive	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


