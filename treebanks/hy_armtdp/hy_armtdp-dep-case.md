---
layout: base
title:  'Statistics of case in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="hy_armtdp-dep-case-loc.html">case:loc</a></tt>.

633 nodes (3%) are attached to their parents as `case`.

511 instances of `case` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6129541864139.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (440; 70% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (88; 14% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (45; 7% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (42; 7% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-SCONJ.html">SCONJ</a></tt> (9; 1% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hy_armtdp-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-X.html">X</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	Բարեբախտաբար	բարեբախտաբար	PART	_	_	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	7	punct	_	_
3	իմ	ես	DET	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	աշխատանքի	աշխատանք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	obl	_	_
5	հանդեպ	հանդեպ	ADP	_	AdpType=Post	4	case	_	_
6	երբեք	երբեք	ADV	_	_	7	advmod	_	_
7	անտարբեր	անտարբեր	ADJ	_	Degree=Pos	0	root	_	_
8	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	_
9	եղել	լինել	AUX	_	Aspect=Perf|VerbForm=Part	7	aux	_	SpaceAfter=No
10	:	:	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Իսկ	իսկ	CCONJ	_	_	5	cc	_	_
2	մինչ	մինչ	ADP	_	AdpType=Prep	3	case	_	_
3	այդ	այդ	PRON	_	Distance=Med|Number=Sing|PronType=Dem	5	obl	_	_
4	մենք	մենք	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
5	տեսանք	տեսնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	նրանց	նա	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	5	obj	_	SpaceAfter=No
7	։	։	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Պարելուց	պարել	VERB	_	Case=Abl|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	3	obl	_	_
2	հետո	հետո	ADP	_	AdpType=Post	1	case	_	_
3	գնացել	գնալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	_
5	ջրաղաց	ջրաղաց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	քնել	քնել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	3	conj	_	_
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	_
9	ու	ու	CCONJ	_	_	12	cc	_	_
10	էլ	էլ	ADV	_	_	12	advmod	_	_
11	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	արթնացել	արթնանալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	3	conj	_	SpaceAfter=No
13	։	։	PUNCT	_	_	3	punct	_	_

~~~


