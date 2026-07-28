---
layout: base
title:  'Statistics of discourse in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `discourse`

This relation is universal.

7 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71428571428571.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-ADP.html">ADP</a></tt> (3; 43% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-ADP.html">ADP</a></tt> (1; 14% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-INTJ.html">INTJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 discourse	color:blue
1	모하메드	모하메드	NOUN	NNP	_	15	nsubj	_	_
2	씨는	씨+는	NOUN	NNB+JX	_	1	flat	_	_
3	이야기를	이야기+를	NOUN	NNG+JKO	_	4	obj	_	_
4	들어서	듣+어서	VERB	VV+EC	_	15	advcl	_	_
5	"	"	PUNCT	SS	_	10	punct	_	SpaceAfter=No
6	"	"	PUNCT	SS	_	10	punct	_	SpaceAfter=No
7	내일	내일	NOUN	NNG	_	10	nmod	_	_
8	제가	제+가	PRON	NP+JKS	PronType=Prs	10	nsubj	_	_
9	사진기를	사진기+를	NOUN	NNG+JKO	_	10	obj	_	_
10	가지고	가지+고	VERB	VV+EC	_	15	ccomp	_	_
11	올게요	오+ㄹ게요	VERB	VX+EF	_	10	advcl	_	SpaceAfter=No
12	"	"	PUNCT	SS	_	10	punct	_	SpaceAfter=No
13	"	"	PUNCT	SS	_	10	punct	_	SpaceAfter=No
14	하고	하고	ADP	JKQ	_	10	discourse	_	_
15	약속했습니다	약속+하+았+습니다	VERB	NNG+XSV+EP+EF	_	0	root	_	SpaceAfter=No
16	.	.	PUNCT	SF	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 discourse	color:blue
1	그래서	그래서	CCONJ	MAJ	_	9	cc	_	_
2	빌리	빌리	NOUN	NNP	_	15	nsubj	_	_
3	씨가	씨+가	NOUN	NNB+JKS	_	2	flat	_	_
4	모하메드	모하메드	NOUN	NNP	_	15	obl	_	_
5	씨에게	씨+에게	ADV	NNB+JKB	_	4	flat	_	_
6	"	"	PUNCT	SS	_	9	punct	_	SpaceAfter=No
7	"	"	PUNCT	SS	_	9	punct	_	SpaceAfter=No
8	사진기를	사진기+를	NOUN	NNG+JKO	_	9	obj	_	_
9	비려	비리+어	ADJ	VA+EC	_	15	ccomp	_	_
10	주세요	주+시+어요	VERB	VX+EP+EF	_	9	advcl	_	SpaceAfter=No
11	.	.	PUNCT	SF	_	10	punct	_	SpaceAfter=No
12	"	"	PUNCT	SS	_	9	punct	_	SpaceAfter=No
13	"	"	PUNCT	SS	_	9	punct	_	SpaceAfter=No
14	하고	하고	ADP	JKQ	_	9	discourse	_	_
15	이야기했습니다	이야기+하+았+습니다	VERB	NNG+XSV+EP+EF	_	0	root	_	SpaceAfter=No
16	.	.	PUNCT	SF	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	또한	또한	CCONJ	MAJ	_	12	cc	_	_
2	경쟁하면서	경쟁+하+면서	VERB	NNG+XSV+EC	_	11	advcl	_	_
3	사람들은	사람+들+은	NOUN	NNG+XSN+JX	_	9	dislocated	_	_
4	더	더	ADV	MAG	_	5	discourse	_	_
5	금정적이고	금정+적+이+고	ADJ	NF+XSN+VCP+EC	Typo=Yes	8	amod	_	_
6	더	더	ADV	MAG	_	7	advmod	_	_
7	좋은	좋+은	ADJ	VA+ETM	_	5	conj	_	_
8	사람이	사람+이	NOUN	NNG+JKS	_	9	nsubj	_	_
9	될	되+ㄹ	VERB	VV+ETM	_	10	acl	_	_
10	수	수	NOUN	NNB	_	11	nsubj	_	_
11	있다고	있	AUX	VX+EC	_	12	ccomp	_	_
12	생각합니다	생각+하+ㅂ니다	VERB	NNG+XSV+EF	_	0	root	_	SpaceAfter=No
13	.	.	PUNCT	SF	_	12	punct	_	_

~~~


