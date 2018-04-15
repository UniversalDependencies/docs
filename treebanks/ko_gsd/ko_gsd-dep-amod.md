---
layout: base
title:  'Statistics of amod in UD_Korean-GSD'
udver: '2'
---

## Treebank Statistics: UD_Korean-GSD: Relations: `amod`

This relation is universal.

1566 nodes (2%) are attached to their parents as `amod`.

1531 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35376756066411.

The following 17 pairs of parts of speech are connected with `amod`: <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (1071; 68% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (287; 18% instances), <tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (137; 9% instances), <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (39; 2% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ko_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-DET.html">DET</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	제일	제일	ADV	NNG	_	2	advmod	_	_
2	가까운	가깝+ㄴ	ADJ	VA+ETM	_	3	amod	_	_
3	스타벅스가	스타벅스+가	NOUN	NNG+JKS	_	5	nsubj	_	_
4	어디	어디	ADV	NP	_	5	advmod	_	_
5	있지	있+지	ADJ	VV+EC	_	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	'	'	PUNCT	SS	_	2	punct	_	SpaceAfter=No
2	하녀	하녀	NOUN	NNG	_	7	appos	_	SpaceAfter=No
3	'	'	PUNCT	SS	_	2	punct	_	SpaceAfter=No
4	와	와	CCONJ	JC	_	2	cc	_	_
5	같은	같+은	ADJ	VA+ETM	_	6	amod	_	_
6	날	날	ADV	NNG	_	7	advmod	_	_
7	개봉한	개봉+하+ㄴ	VERB	NNG+XSV+ETM	_	9	acl:relcl	_	_
8	이	이	DET	MM	_	9	det	_	_
9	영화의	영화+의	NOUN	NNG+JKG	_	10	det:poss	_	_
10	누적	누적	NOUN	NNG	_	12	nsubj	_	_
11	관객은	관객+은	NOUN	NNG+JX	_	10	flat	_	_
12	54만5천366명이다	54+만+5+천+366+명+이+다	VERB	SN+NR+SN+NR+SN+NNB+VCP+EF	_	0	root	_	SpaceAfter=No
13	.	.	PUNCT	SF	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	환자	환자	NOUN	NNG	_	4	obj	_	_
2	입장은	입장+은	NOUN	NNG+JX	_	1	flat	_	_
3	생각	생각	NOUN	NNG	_	4	obj	_	_
4	안하고	안+하+고	VERB	MAG+VV+EC	_	0	root	_	_
5	이상한	이상+하+ㄴ	ADJ	XR+XSA+ETM	_	6	amod	_	_
6	소리합니다	소리+하+ㅂ니다	VERB	NNG+XSA+EF	_	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	SF	_	6	punct	_	_

~~~


