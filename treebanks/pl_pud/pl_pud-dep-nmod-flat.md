---
layout: base
title:  'Statistics of nmod:flat in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nmod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="pl_pud-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="pl_pud-dep-nmod-pred.html">nmod:pred</a></tt>.

157 nodes (1%) are attached to their parents as `nmod:flat`.

120 instances of `nmod:flat` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15286624203822.

The following 6 pairs of parts of speech are connected with `nmod:flat`: <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (115; 73% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (24; 15% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (11; 7% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:flat	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Loc
2	1975	1975	X	dig	NumForm=Digit	3	nmod:flat	3:nmod:flat	_
3	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	6	obl	6:obl	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_
5	została	zostać	AUX	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	_
6	uznana	uznać	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
7	za	za	ADP	prep:acc	AdpType=Prep	8	case	8:case	Case=Acc
8	rezerwat	rezerwat	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obl	6:obl	_
9	dzikiej	dziki	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	amod	10:amod	_
10	przyrody	przyroda	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	nmod:arg	8:nmod:arg	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:flat	color:blue
1	Ukończył	ukończyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	uczelnię	uczelnia	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	_
3	i	i	CCONJ	conj	_	4	cc	4:cc	_
4	uzyskał	uzyskać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
5	tytuł	tytuł	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	_
6	magistra	magister	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod	_
7	21	21	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	4	obl	4:obl	_
8	kwietnia	kwiecień	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod:flat	7:nmod:flat	_
9	1882	1882	X	dig	NumForm=Digit	10	nmod:flat	10:nmod:flat	_
10	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	8	nmod:flat	8:nmod:flat	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:flat	color:blue
1	Ukończył	ukończyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	uczelnię	uczelnia	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	_
3	i	i	CCONJ	conj	_	4	cc	4:cc	_
4	uzyskał	uzyskać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
5	tytuł	tytuł	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	_
6	magistra	magister	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod	_
7	21	21	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	4	obl	4:obl	_
8	kwietnia	kwiecień	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod:flat	7:nmod:flat	_
9	1882	1882	X	dig	NumForm=Digit	10	nmod:flat	10:nmod:flat	_
10	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	8	nmod:flat	8:nmod:flat	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


