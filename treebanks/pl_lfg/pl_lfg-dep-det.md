---
layout: base
title:  'Statistics of det in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `det`

This relation is universal.

2732 nodes (2%) are attached to their parents as `det`.

2597 instances of `det` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13945827232796.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (2591; 95% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (53; 2% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (50; 2% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (33; 1% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	Bo	bo	SCONJ	comp	_	3	mark	3:mark|12:mark	_
2	już	już	PART	qub	_	3	advmod	3:advmod	_
3	mamy	mieć	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	wiosnę	wiosna	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	obl	3:obl	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
6	a	a	CCONJ	conj	_	12	cc	12:cc	_
7	dopiero	dopiero	PART	qub	_	12	advmod	12:advmod	_
8	się	się	PRON	qub	PronType=Prs|Reflex=Yes	12	expl:impers	12:expl:impers	_
9	o	o	ADP	prep:loc	AdpType=Prep	11	case	11:case	Case=Loc
10	tym	ten	DET	adj:sg:loc:n:pos	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	11	det	11:det	_
11	wszystkim	wszystko	PRON	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing|PronType=Tot	12	obl	12:obl:o	_
12	mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Był	być	AUX	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
2	pierwszy	pierwszy	ADJ	adj:sg:nom:m1:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
4	bo	bo	SCONJ	comp	_	8	mark	8:mark	_
5	kilku	kilka	DET	num:pl:acc:m1:rec	Case=Acc|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind|SubGender=Masc1	6	det	6:det	DepType=Rec
6	innych	inny	ADJ	adj:pl:gen:m1:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|SubGender=Masc1	8	nsubj	8:nsubj	_
7	także	także	PART	qub	_	8	advmod	8:advmod	_
8	otwierało	otwierać	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	2:advcl:bo	_
9	usta	usta	NOUN	subst:pl:acc:n	Case=Acc|Gender=Neut|Number=Plur	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


