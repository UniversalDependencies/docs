---
layout: base
title:  'Statistics of det in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `det`

This relation is universal.

2162 nodes (1%) are attached to their parents as `det`.

2155 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0790934320074.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-DET.html">DET</a></tt> (1652; 76% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-DET.html">DET</a></tt> (469; 22% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-DET.html">DET</a></tt> (23; 1% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-DET.html">DET</a></tt> (14; 1% instances), <tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_ksl-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ko_ksl-pos-DET.html">DET</a></tt>-<tt><a href="ko_ksl-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	무슨	무슨	DET	MM	PronType=Dem	2	det	_	_
2	일을	일+을	NOUN	NNG+JKO	_	3	obj	_	_
3	하나요	하+나요	VERB	VV+EF	_	0	root	_	SpaceAfter=No
4	?	?	PUNCT	SF	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	그	그	DET	MM	PronType=Dem	2	det	_	_
2	다음에	다음+에	ADV	NNG+JKB	_	4	obl	_	_
3	닭가슴살을	닭+가슴+살+을	NOUN	NNG+NNG+NNG+JKO	_	4	obj	_	_
4	썬다	썰+ㄴ다	VERB	VV+EF	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	SF	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	친구하고	친구+하고	ADV	NNG+JKB	_	5	obl	_	_
2	같이	같이	ADV	MAG	_	5	advmod	_	_
3	어떤	어떤	DET	MM	PronType=Dem	4	det	_	_
4	어려움을	어렵+ㅁ+을	ADJ	VA+ETN+JKO	_	5	obj	_	_
5	경험할	경험+하+ㄹ	VERB	NNG+XSV+ETM	_	12	advcl	_	_
6	때	때	SCONJ	NNG	_	5	mark	_	_
7	까지	까지	ADP	JX	_	5	case	_	_
8	진짜	진짜	NOUN	NNG	_	9	nmod	_	_
9	친구인	친구+이+ㄴ	ADJ	NNG+VCP+ETM	_	10	acl	_	_
10	줄	줄	NOUN	NNB	_	12	obj	_	_
11	못	못	ADV	MAG	_	12	advmod	_	_
12	압니다	알+ㅂ니다	VERB	VV+EF	_	0	root	_	SpaceAfter=No
13	.	.	PUNCT	SF	_	12	punct	_	_

~~~


