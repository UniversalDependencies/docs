---
layout: base
title:  'Statistics of goeswith in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `goeswith`

This relation is universal.

202 nodes (0%) are attached to their parents as `goeswith`.

202 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0049504950495.

The following 8 pairs of parts of speech are connected with `goeswith`: <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (83; 41% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (64; 32% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (28; 14% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (15; 7% instances), <tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (8; 4% instances), <tt><a href="ko_ksl-pos-ADP.html">ADP</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ko_ksl-pos-DET.html">DET</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ko_ksl-pos-NUM.html">NUM</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	나도	나+도	PRON	NP+JX	_	10	nsubj	_	_
2	환경	환경	NOUN	NNG	_	3	nmod	_	_
3	보고를	보고+를	NOUN	NNG+JKO	_	4	obj	_	_
4	위해	위하+아	VERB	VV+EC	_	6	advcl	_	_
5	무엇을	무엇+을	NOUN	NP+JKO	_	6	obj	_	_
6	해야하는	하+아야+하+는+지	VERB	VV+EC+VX+ETM+NA	Typo=Yes	9	ccomp	_	_
7	지	_	X	_	_	6	goeswith	_	_
8	잘	잘	ADV	MAG	_	9	advmod	_	_
9	모르는	모르+는	VERB	VV+ETM	_	10	acl	_	_
10	편이다	편+이+다	VERB	NNB+VCP+EF	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	SF	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	홍콩	홍콩	NOUN	NNP	_	2	nmod	_	_
2	해영공원은	해영+공원+은	NOUN	NNG+NNG+JX	_	4	nsubj	_	_
3	한국롯뎃월드	한국+롯뎃월드	NOUN	NNP+NNP	_	4	obl	_	_
4	처럼공원	처럼+공원+이다	NOUN	NNP+NNG+VCP+EF	Typo=Yes	0	root	_	_
5	이다	_	X	_	_	4	goeswith	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	우리는	우리+는	PRON	NP+JX	_	5	nsubj	_	_
2	제주도	제주도	NOUN	NNP	_	3	obl	_	_
3	안	안+지	ADV	NA+NA	Typo=Yes	5	advcl	_	_
4	지	_	X	_	_	3	goeswith	_	_
5	가서	가+아서	VERB	VV+EC	_	9	advcl	_	_
6	다음	다음	NOUN	NNG	_	7	nmod	_	_
7	주에	주+에	ADV	NNB+JKB	_	9	obl	_	_
8	제주도에	제주도+에	ADV	NNP+JKB	_	9	obl	_	_
9	가고	가+고	VERB	VV+EC	_	0	root	_	_
10	싶습니다	싶	AUX	VX+EF	_	9	aux	_	SpaceAfter=No
11	.	.	PUNCT	SF	_	9	punct	_	_

~~~


