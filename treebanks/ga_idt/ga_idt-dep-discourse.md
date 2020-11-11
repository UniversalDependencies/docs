---
layout: base
title:  'Statistics of discourse in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `discourse`

This relation is universal.

37 nodes (0%) are attached to their parents as `discourse`.

21 instances of `discourse` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.86486486486486.

The following 16 pairs of parts of speech are connected with `discourse`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt> (12; 32% instances), <tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt> (5; 14% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 discourse	color:blue
1	'	'	PUNCT	Punct	_	5	punct	_	SpaceAfter=No
2	'	'	PUNCT	Punct	_	5	punct	_	_
3	Á	á	INTJ	Itj	_	5	discourse	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	3	punct	_	_
5	níl	bí	VERB	PresInd	Mood=Ind|Polarity=Neg|Tense=Pres	0	root	_	_
6	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
7	chomh	chomh	ADV	Its	_	8	advmod	_	_
8	holc	olc	ADJ	Adj	Degree=Pos	5	xcomp:pred	_	_
9	san	sin	DET	Det	Dialect=Munster|PronType=Dem	8	det	_	_
10	ar	ar	ADP	Simp	_	11	case	_	_
11	fad	fad	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Búm	Búm	INTJ	Itj	_	0	root	_	_
2	bí	bí	INTJ	Itj	_	1	discourse	_	_
3	á	á	INTJ	Itj	_	1	discourse	_	_
4	de	de	INTJ	Itj	_	1	discourse	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 discourse	color:blue
1	NIALL	Niall	PROPN	Noun	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	Punct	_	3	punct	_	_
3	Bhal	Bal	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	5	discourse	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	3	punct	_	_
5	stróc	stróc	VERB	VTI	Mood=Imp|Number=Sing|Person=2	1	parataxis	_	_
6	leat	le	ADP	Prep	Number=Sing|Person=2	5	obl:prep	_	SpaceAfter=No
7	!	!	PUNCT	!	_	1	punct	_	_

~~~


