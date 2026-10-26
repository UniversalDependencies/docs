---
layout: base
title:  'Statistics of goeswith in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `goeswith`

This relation is universal.

287 nodes (0%) are attached to their parents as `goeswith`.

287 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04529616724739.

The following 11 pairs of parts of speech are connected with `goeswith`: <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (120; 42% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (76; 26% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (35; 12% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (29; 10% instances), <tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (13; 5% instances), <tt><a href="ko_ksl-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="ko_ksl-pos-ADP.html">ADP</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="ko_ksl-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="ko_ksl-pos-NUM.html">NUM</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ko_ksl-pos-DET.html">DET</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_ksl-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	나도	나+도	PRON	NP+JX	PronType=Prs	10	nsubj	_	_
2	환경	환경	NOUN	NNG	_	3	nmod	_	_
3	보고를	보고+를	NOUN	NNG+JKO	_	4	obj	_	_
4	위해	위하+아	VERB	VV+EC	_	6	advcl	_	_
5	무엇을	무엇+을	PRON	NP+JKO	PronType=Int	6	obj	_	_
6	해야하는	하+아야+하+는+지	VERB	VV+EC+VX+ETM+NA	Typo=Yes	9	ccomp	_	_
7	지	_	X	_	_	6	goeswith	_	_
8	잘	잘	ADV	MAG	_	9	advmod	_	_
9	모르는	모르+는	VERB	VV+ETM	_	10	acl	_	_
10	편이다	편+이+다	ADJ	NNB+VCP+EF	_	0	root	_	SpaceAfter=No
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
3	한국롯뎃월드	한국+롯뎃월드	NOUN	NNP+NNP	_	4	nmod	_	_
4	처럼공원	처럼+공원+이+다	NOUN	JKB+NNG+VCP+EF	Typo=Yes	0	root	_	_
5	이다	_	X	_	_	4	goeswith	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	우리	우리	NOUN	NNG	_	2	nmod	_	_
2	사회가	사회+가	NOUN	NNG+JKS	_	3	nsubj	_	_
3	원벽하지않	원벽+하+지+않+지만	ADJ	NF+XSA+EC+VX+EC	Typo=Yes	13	advcl	_	_
4	지만	_	X	_	_	3	goeswith	_	_
5	지금	지금	ADV	MAG	_	6	nsubj	_	_
6	21세기	21+세기	NOUN	SN+NNG	_	13	advcl	_	_
7	이고	이+고	ADP	VCP+EC	_	6	case	_	_
8	우리가	우리+가	PRON	NP+JKS	PronType=Prs	13	nsubj	_	_
9	이런	이런	DET	MM	PronType=Dem	11	det	_	_
10	옛날	옛날	NOUN	NNG	_	11	nmod	_	_
11	제도들이	제도+들+이	NOUN	NNG+XSN+JKS	_	12	nsubj	_	_
12	폐지하고	폐지+하+고	VERB	NNG+XSV+EC	_	0	root	_	_
13	행복합시다	행복+하+ㅂ시다	ADJ	NNG+XSA+EF	_	12	conj	_	SpaceAfter=No
14	.	.	PUNCT	SF	_	13	punct	_	_

~~~


