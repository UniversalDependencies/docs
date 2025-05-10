---
layout: base
title:  'Statistics of aux in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `aux`

This relation is universal.

2085 nodes (2%) are attached to their parents as `aux`.

2081 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04556354916067.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt> (2017; 97% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt> (45; 2% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt> (19; 1% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	저는	저+는	PRON	NP+JX	_	5	nsubj	_	_
2	6월	6+월	NOUN	SN+NNB	_	5	obl	_	_
3	20일에	20+일+에	NOUN	SN+NNB+JKB	_	2	flat	_	_
4	여행을	여행+을	NOUN	NNG+JKO	_	5	obj	_	_
5	가고	가+고	VERB	VV+EC	_	0	root	_	_
6	싶습니다	싶	AUX	VX+EF	_	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	SF	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	제	저+의	PRON	NP+JKG	_	2	nmod:poss	_	_
2	친구가	친구+가	NOUN	NNG+JKS	_	5	nsubj	_	_
3	어머니에게	어머니+에게	NOUN	NNG+JKB	_	5	obl	_	_
4	선물을	선물+을	NOUN	NNG+JKO	_	5	obj	_	_
5	주가	주+가	NOUN	VV+NA	Typo=Yes	0	root	_	_
6	싶어	싶	AUX	VX+EC+VX+EF	Typo=Yes	5	aux	_	_
7	합니다	_	X	_	_	6	goeswith	_	SpaceAfter=No
8	.	.	PUNCT	SF	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 aux	color:blue
1	저때문에	저+때문+에	ADV	NP+NNB+JKB	_	4	obl	_	_
2	엄마도	엄마+도	NOUN	NNG+JX	_	4	obj	_	_
3	많이	많이	ADV	MAG	_	4	advmod	_	_
4	고생하셨으니까	고생+하+시+었+으니까	VERB	NNG+XSV+EP+EP+EC	_	14	advcl	_	_
5	미래일ㅇ르	미래+일+ㅇ르	NOUN	NNG+NNG+NA	Typo=Yes	6	obj	_	_
6	하기	하+기	NOUN	VV+ETN	_	7	obj	_	_
7	위해서	위하+아서	VERB	VV+EC	_	9	advcl	_	_
8	열심히	열심히	ADV	MAG	_	9	advmod	_	_
9	공부하고	공부+하+고	VERB	NNG+XSV+EC	_	14	ccomp	_	_
10	엄마께	엄마+께	ADV	NNG+JKB	_	11	obl	_	_
11	자랑하게	자랑+하+게	ADV	NNG+XSV+EC	_	9	conj	_	_
12	해	하	AUX	VX+EC	_	11	aux	_	_
13	준다고	주+ㄴ다고	VERB	VX+EC	_	11	advcl	_	_
14	약숙기로했다	약숙+기+로+하+았+다	VERB	NA+ETN+JKB+VV+EP+EF	Typo=Yes	0	root	_	SpaceAfter=No
15	.	.	PUNCT	SF	_	14	punct	_	_

~~~


