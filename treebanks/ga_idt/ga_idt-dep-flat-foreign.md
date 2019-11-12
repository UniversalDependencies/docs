---
layout: base
title:  'Statistics of flat:foreign in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ga_idt-dep-flat-name.html">flat:name</a></tt>.

50 nodes (0%) are attached to their parents as `flat:foreign`.

50 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16.

The following 8 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (15; 30% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (14; 28% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (8; 16% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (5; 10% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (3; 6% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Treasure	Treasure	X	Foreign	_	0	root	_	_
2	Island	Island	X	Foreign	_	1	flat:foreign	_	_
3	Uncut	Uncut	X	Foreign	_	1	flat:foreign	_	_
4	ar	ar	ADP	Simp	_	5	case	_	_
5	Network	Network	X	Foreign	_	1	nmod	_	_
6	2	2	NUM	Num	_	5	flat	_	_
7	Dé	Dé	NOUN	Subst	_	1	nmod	_	_
8	Luain	Luan	PROPN	Noun	_	7	flat	_	_
9	ag	ag	ADP	Simp	_	10	case	_	_
10	10.30	10.30	NUM	Num	_	1	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:foreign	color:blue
1	Níl	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	glacadh	glacadh	NOUN	Noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	ag	ag	ADP	Simp	_	4	case	_	_
4	formhór	formhór	NOUN	Noun	Gender=Masc|Number=Sing	1	obl	_	_
5	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	phobail	pobal	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
7	náisiúnaigh	náisiúnach	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
8	leis	le	ADP	Simp	_	10	case	_	_
9	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	Royal	Royal	PROPN	Noun	Gender=Masc|Number=Sing	1	obl	_	_
11	Ulster	Ulster	PROPN	Noun	Gender=Masc|Number=Sing	10	flat:foreign	_	_
12	Constabulary	Constabulary	X	Unknown	_	10	flat:foreign	_	SpaceAfter=No
13	,	,	PUNCT	Punct	_	16	punct	_	_
14	agus	agus	CCONJ	Coord	_	16	cc	_	_
15	ní	is	AUX	Cop	Tense=Pres|VerbForm=Cop	16	cop	_	_
16	móide	mór	ADJ	Adj	Degree=Cmp,Sup	2	conj	_	_
17	go	go	PART	Vb	PartType=Cmpl	18	mark:prt	_	_
18	mbeidh	bí	VERB	FutInd	Form=Ecl|Mood=Ind|Tense=Fut	16	ccomp	_	_
19	go	go	ADP	Simp	_	20	case	_	_
20	deo	deo	NOUN	Subst	Number=Sing	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 flat:foreign	color:blue
1	Bhíodh	bí	VERB	PastImp	Form=Len|Mood=Imp|Tense=Past	0	root	_	_
2	colún	colún	NOUN	Noun	Gender=Masc|Number=Sing	1	nsubj	_	_
3	rialta	rialta	ADJ	Adj	Degree=Pos	1	xcomp:pred	_	_
4	ag	ag	ADP	Simp	_	5	case	_	_
5	Máire	Máire	NOUN	Noun	Gender=Fem|Number=Sing	1	obl	_	_
6	dar	dar	ADP	Simp	_	7	case	_	_
7	theideal	teideal	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	1	obl	_	_
8	'	'	PUNCT	Punct	_	10	punct	_	SpaceAfter=No
9	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	appos	_	_
10	Fáinne	fáinne	NOUN	Noun	Definite=Def|Gender=Masc|Number=Sing	9	flat	_	SpaceAfter=No
11	'	'	PUNCT	Punct	_	10	punct	_	_
12	ar	ar	ADP	Simp	_	14	case	_	_
13	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	14	det	_	_
14	Irish	Irish	NOUN	Noun	Gender=Masc|Number=Sing	1	obl	_	_
15	Independent	Independent	NOUN	Noun	Gender=Masc|Number=Sing	14	flat:foreign	_	_
16	sna	i	ADP	Art	Number=Plur|PronType=Art	17	case	_	_
17	blianta	bliain	NOUN	Noun	Gender=Fem|Number=Plur	1	obl:tmod	_	_
18	1927	1927	NUM	Num	_	17	nummod	_	_
19	agus	agus	CCONJ	Coord	_	20	cc	_	_
20	1928	1928	NUM	Num	_	18	conj	_	SpaceAfter=No
21	.	.	PUNCT	.	_	1	punct	_	_

~~~


