---
layout: base
title:  'Statistics of acl in UD_Polish'
udver: '2'
---

## Treebank Statistics: UD_Polish: Relations: `acl`

This relation is universal.

409 nodes (0%) are attached to their parents as `acl`.

409 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.72371638141809.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="pl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl-pos-VERB.html">VERB</a></tt> (339; 83% instances), <tt><a href="pl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl-pos-VERB.html">VERB</a></tt> (20; 5% instances), <tt><a href="pl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl-pos-NOUN.html">NOUN</a></tt> (18; 4% instances), <tt><a href="pl-pos-PRON.html">PRON</a></tt>-<tt><a href="pl-pos-VERB.html">VERB</a></tt> (14; 3% instances), <tt><a href="pl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="pl-pos-NUM.html">NUM</a></tt>-<tt><a href="pl-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="pl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pl-pos-PRON.html">PRON</a></tt>-<tt><a href="pl-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl	color:blue
1	–	–	PUNCT	interp	_	4	punct	_	_
2	W	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	3	case	_	_
3	Odeonie	odeon	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
4	grają	grać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ten	ten	DET	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	film	film	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	interp	_	10	punct	_	_
8	o	o	ADP	prep:loc	AdpType=Prep|Case=Loc	9	case	_	_
9	którym	który	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|PronType=Int,Rel	10	obl:arg	_	_
10	opowiadają	opowiadać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	_
11	wszyscy	wszystek	DET	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	12	det	_	_
12	Polacy	Polak	PROPN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	interp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	Właścicielką	właścicielka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	0	root	_	_
2	bagażu	bagaż	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	1	cop	_	_
4	Polka	Polka	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	interp	_	7	punct	_	_
6	która	który	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	7	nsubj	_	_
7	wróciła	wrócić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	acl	_	_
8	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	9	case	_	_
9	kraju	kraj	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	obl:arg	_	_
10	z	z	ADP	prep:gen:nwok	AdpType=Prep|Case=Gen|Variant=Short	11	case	_	_
11	USA	USA	PROPN	subst:pl:gen:n	Case=Gen|Gender=Neut|Number=Plur	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	Pewnie	pewnie	ADV	adv:pos	Degree=Pos	2	advmod	_	_
2	doszli	dojść	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	do	do	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	2	obj	_	_
4	wniosku	wniosek	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	interp	_	10	punct	_	_
6	że	że	SCONJ	comp	_	10	case	_	_
7	to	ten	DET	adj:sg:nom:n:pos	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	det	_	_
8	wszystko	wszystko	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	10	nsubj	_	_
9	to	to	AUX	pred	_	10	cop	_	_
10	matrix	matrix	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	acl	_	SpaceAfter=No
11	.	.	PUNCT	interp	_	2	punct	_	_

~~~


