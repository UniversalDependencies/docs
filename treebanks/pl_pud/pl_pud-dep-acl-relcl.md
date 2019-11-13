---
layout: base
title:  'Statistics of acl:relcl in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-acl.html">acl</a></tt>.

179 nodes (1%) are attached to their parents as `acl:relcl`.

178 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.41340782122905.

The following 19 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (108; 60% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (18; 10% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (14; 8% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (14; 8% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Zwykle	zwykle	ADV	adv:pos	Degree=Pos	4	advmod	4:advmod	_
2	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
4	artyści	artysta	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	którzy	który	DET	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	7	nsubj	7:nsubj	_
7	chcą	chcieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	_
8	zrobić	zrobić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	parę	parę	DET	num:pl:acc:f:rec	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	_
10	rzeczy	rzecz	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	8	obj	8:obj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	Tymczasem	tymczasem	CCONJ	conj	_	5	cc	5:cc	_
2	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	nmod	3:nmod	_
3	stanowisko	stanowisko	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	5	obj	5:obj	_
4	trybuna	trybun	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	3	nmod:arg	3:nmod:arg	_
5	zajmował	zajmować	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	Marek	Marek	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
7	Antoniusz	Antoniusz	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	6	flat	6:flat	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
9	który	który	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	10:nsubj	_
10	pozostał	pozostać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	acl:relcl	6:acl:relcl	_
11	na	na	ADP	prep:loc	AdpType=Prep	12	case	12:case	Case=Loc
12	nim	on	PRON	ppron3:sg:loc:m1:ter:akc:praep	Animacy=Hum|Case=Loc|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	10	obl	10:obl	_
13	do	do	ADP	prep:gen	AdpType=Prep	14	case	14:case	Case=Gen
14	grudnia	grudzień	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	obl	10:obl	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 acl:relcl	color:blue
1	Poziom	poziom	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
3	który	który	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	8	nsubj	8:nsubj	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
5	obu	oba	NUM	num:pl:loc:m3:congr:ncol	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|NumForm=Word	6	nummod	6:nummod	_
6	przypadkach	przypadek	NOUN	subst:pl:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	8	obl	8:obl	_
7	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
8	najwyższy	wysoki	ADJ	adj:sg:nom:m3:sup	Animacy=Inan|Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	1	acl:relcl	1:acl:relcl	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
10	UE	UE	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	obl	8:obl	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


