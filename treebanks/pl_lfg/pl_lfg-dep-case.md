---
layout: base
title:  'Statistics of case in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `case`

This relation is universal.

11106 nodes (8%) are attached to their parents as `case`.

11077 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27174500270124.

The following 6 pairs of parts of speech are connected with `case`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-ADP.html">ADP</a></tt> (8536; 77% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-ADP.html">ADP</a></tt> (1260; 11% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-ADP.html">ADP</a></tt> (1038; 9% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-ADP.html">ADP</a></tt> (200; 2% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-ADP.html">ADP</a></tt> (60; 1% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-ADP.html">ADP</a></tt> (12; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
1	A	a	CCONJ	conj	_	4	cc	4:cc	_
2	Janio	Janio	PROPN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	4	nsubj	4:nsubj	_
3	tymczasem	tymczasem	ADV	adv	_	4	advmod	4:advmod	_
4	pracował	pracować	VERB	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
6	swoim	swój	DET	adj:sg:loc:m3:pos	Case=Loc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes|SubGender=Masc3	7	det	7:det	_
7	gabinecie	gabinet	NOUN	subst:sg:loc:m3	Case=Loc|Gender=Masc|Number=Sing|SubGender=Masc3	4	obl	4:obl:w	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Ale	ale	CCONJ	conj	_	2	cc	2:cc	_
2	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	mu	on	PRON	ppron3:sg:dat:m1:ter:nakc:npraep	Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|SubGender=Masc1|Variant=Short	2	iobj	2:iobj	_
4	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Ins
5	tym	to	PRON	subst:sg:inst:n	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	2	obl	2:obl:z	_
6	dobrze	dobrze	ADV	adv:pos	Degree=Pos	2	advmod	2:advmod	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Bandyci	bandyta	NOUN	subst:pl:nom:m1	Case=Nom|Gender=Masc|Number=Plur|SubGender=Masc1	2	nsubj	2:nsubj	_
2	wsadzili	wsadzić	VERB	praet:pl:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	ją	on	PRON	ppron3:sg:acc:f:ter:akc:npraep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	obj	2:obj	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Loc
5	Szczecinku	Szczecinek	PROPN	subst:sg:loc:m3	Case=Loc|Gender=Masc|Number=Sing|SubGender=Masc3	2	obl	2:obl:w	_
6	do	do	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen
7	pociągu	pociąg	NOUN	subst:sg:gen:m3	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc3	2	obl	2:obl:do	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


