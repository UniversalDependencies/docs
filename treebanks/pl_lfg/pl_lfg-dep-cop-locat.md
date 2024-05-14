---
layout: base
title:  'Statistics of cop:locat in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `cop:locat`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-cop.html">cop</a></tt>.

208 nodes (0%) are attached to their parents as `cop:locat`.

110 instances of `cop:locat` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92788461538462.

The following 5 pairs of parts of speech are connected with `cop:locat`: <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (79; 38% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (79; 38% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (26; 13% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (20; 10% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-AUX.html">AUX</a></tt> (4; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop:locat	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	3	punct	3:punct	_
2	A	a	CCONJ	conj	_	3	cc	3:cc	_
3	gdzie	gdzie	ADV	adv	PronType=Int	0	root	0:root	_
4	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop:locat	3:cop:locat	SpaceAfter=No
5	?	?	PUNCT	interp	PunctType=Qest	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cop:locat	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	7	punct	7:punct	_
2	ale	ale	CCONJ	conj	_	7	cc	7:cc	_
3	on	on	PRON	ppron3:sg:nom:m1:ter:akc:npraep	Case=Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|SubGender=Masc1|Variant=Long	7	nsubj	7:nsubj	_
4	był	być	AUX	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	7	cop:locat	7:cop:locat	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
6	jakim	jaki	DET	adj:sg:loc:n:pos	Case=Loc|Gender=Neut|Number=Sing|PronType=Int	7	det	7:det	_
7	miejscu	miejsce	NOUN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
8	?	?	PUNCT	interp	PunctType=Qest	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop:locat	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	5	punct	5:punct	_
2	byli	być	AUX	praet:pl:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	5	cop:locat	5:cop:locat	SpaceAfter=No
3	ście	być	AUX	aglt:pl:sec:imperf:nwok	Aspect=Imp|Number=Plur|Person=2|Variant=Short	5	aux:clitic	5:aux:clitic	_
4	u	u	ADP	prep:gen	AdpType=Prep	5	case	5:case	Case=Gen
5	Azy	Aza	PROPN	subst:sg:gen:m1	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc1	0	root	0:root	SpaceAfter=No
6	?	?	PUNCT	interp	PunctType=Qest	5	punct	5:punct	_

~~~


