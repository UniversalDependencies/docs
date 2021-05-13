---
layout: base
title:  'Statistics of case in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="ga_idt-dep-case-voc.html">case:voc</a></tt>.

15528 nodes (13%) are attached to their parents as `case`.

15497 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41653786707883.

The following 21 pairs of parts of speech are connected with `case`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (13455; 87% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1378; 9% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (307; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (134; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (116; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (34; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (34; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (18; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (15; 0% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (12; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="ga_idt-pos-SYM.html">SYM</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Leaba	leaba	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
2	mhór	mór	ADJ	Adj	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	1	amod	_	_
3	agus	agus	SCONJ	Subord	_	4	mark	_	_
4	í	í	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	advcl	_	_
5	cóirithe	cóirithe	ADJ	Adj	VerbForm=Part	4	xcomp:pred	_	_
6	fé	faoi	ADP	Simp	_	7	case	_	_
7	bhrat	brat	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	4	nmod	_	_
8	buí	buí	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	7	amod	_	_
9	síoda	síoda	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
1	Mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	2	nmod:poss	_	_
2	léan	léan	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	mbeidh	bí	VERB	FutInd	Form=Ecl|Mood=Ind|Tense=Fut	2	acl	_	_
5	ar	ar	ADP	Simp	_	7	case	_	_
6	na	an	DET	Art	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	Gaeil	Gael	PROPN	Noun	Definite=Def|Gender=Masc|Number=Plur	4	obl	_	_
8	luí	luí	NOUN	Noun	VerbForm=Inf	7	xcomp:pred	_	_
9	síos	síos	ADV	Dir	_	8	advmod	_	_
10	arís	arís	ADV	Gn	_	8	advmod	_	_
11	ina	i	ADP	Poss	Number=Plur|Person=3|Poss=Yes	12	case	_	_
12	dtír	tír	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	4	obl	_	_
13	féin	féin	PRON	Ref	Reflex=Yes	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case	color:blue
1	Treasure	Treasure	X	Foreign	Foreign=Yes	0	root	_	_
2	Island	Island	X	Foreign	Foreign=Yes	1	flat:foreign	_	_
3	Uncut	Uncut	X	Foreign	Foreign=Yes	1	flat:foreign	_	_
4	ar	ar	ADP	Simp	_	5	case	_	_
5	Network	Network	X	Foreign	Foreign=Yes	1	nmod	_	NamedEntity=Yes
6	2	2	NUM	Num	_	5	flat	_	NamedEntity=Yes
7	Dé	Dé	PROPN	Subst	Definite=Def|Number=Sing	1	nmod	_	NamedEntity=Yes
8	Luain	Luan	PROPN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	NamedEntity=Yes
9	ag	ag	ADP	Simp	_	10	case	_	_
10	10.30	10.30	NUM	Num	_	1	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


