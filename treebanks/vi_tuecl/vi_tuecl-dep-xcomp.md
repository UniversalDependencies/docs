---
layout: base
title:  'Statistics of xcomp in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `xcomp`

This relation is universal.

60 nodes (3%) are attached to their parents as `xcomp`.

60 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58333333333333.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (41; 68% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt> (8; 13% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (6; 10% instances), <tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Mày	mày	PRON	_	Number=Sing|Person=2|Polite=Infm|PronType=Prs	3	nsubj	_	_
2	đang	đang	ADV	_	AdvType=Tim|Tense=Pres	3	advmod	_	_
3	thắc mắc	thắc mắc	VERB	_	_	0	root	_	_
4	không	không	ADV	_	Polarity=Neg	5	advmod	_	_
5	biết	biết	VERB	_	_	3	xcomp	_	_
6	tụi	tụi	PART	_	Number=Plur	7	compound	_	_
7	tao	tao	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	10	nsubj	_	_
8	từ	từ	ADP	_	_	9	case	_	_
9	đâu	đâu	PRON	_	PronType=Int	10	obl	_	_
10	tới	tới	VERB	_	_	3	ccomp	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	phải	phải	ADJ	_	_	10	conj	_	_
13	không	không	ADV	_	Polarity=Neg	12	advmod	_	_
14	?	?	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Gerda	Gerda	PROPN	_	NameType=Giv	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	thấy	thấy	VERB	_	_	0	root	_	_
5	không	không	ADV	_	Polarity=Neg	6	advmod	_	_
6	khỏe	khỏe	ADJ	_	_	4	xcomp	_	_
7	...	...	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Ống	ống	NOUN	_	_	7	nsubj	_	_
2	truyền dịch	truyền dịch	NOUN	_	_	1	compound	_	_
3	Levothyroxin	Levothyroxin	PROPN	_	_	2	compound	_	_
4	là	là	AUX	_	VerbType=Cop	7	cop	_	_
5	một	một	NUM	_	NumType=Card	7	nummod	_	_
6	loại	loại	NOUN	_	_	7	compound	_	_
7	thuốc	thuốc	NOUN	_	_	0	root	_	_
8	tác động	tác động	VERB	_	_	7	xcomp	_	_
9	lên	lên	ADP	_	_	10	case	_	_
10	tuyến giáp	tuyến giáp	NOUN	_	_	8	obj	_	_
11	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


