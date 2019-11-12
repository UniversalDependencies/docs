---
layout: base
title:  'Statistics of nummod in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `nummod`

This relation is universal.

508 nodes (1%) are attached to their parents as `nummod`.

325 instances of `nummod` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97834645669291.

The following 11 pairs of parts of speech are connected with `nummod`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (406; 80% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (39; 8% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (20; 4% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (19; 4% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (13; 3% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	naoi	naoi	NUM	Num	NumType=Card	4	nummod	_	_
4	mbliana	bliain	NOUN	Noun	Form=Ecl|Gender=Fem	1	xcomp:pred	_	_
5	agus	agus	CCONJ	Coord	_	6	cc	_	_
6	leathchéad	céad	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	(f)	(f)	NUM	Item	_	2	nummod	_	_
2	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
3	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	a	a	PART	Nm	PartType=Num	2	mark:prt	_	_
5	dó	dó	NUM	Num	NumType=Card	8	nummod	_	_
6	dhéag	déag	NOUN	Subst	Form=Len|Number=Sing	5	compound	_	_
7	a	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	chlog	clog	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	2	obl:tmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Duaisdhráma	Duaisdhráma	NOUN	Noun	Gender=Masc|Number=Sing	0	root	_	_
2	ó	ó	ADP	Simp	_	3	case	_	_
3	Oireachtas	oireachtas	PROPN	Noun	Form=Len|Gender=Masc|Number=Sing	1	nmod	_	_
4	1955	1955	NUM	Num	_	3	nummod	_	_
5	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	7	cop	_	_
6	ea	ea	PRON	Pers	Number=Sing|Person=3	7	nmod	_	_
7	Moloney	Moloney	NOUN	Noun	Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


