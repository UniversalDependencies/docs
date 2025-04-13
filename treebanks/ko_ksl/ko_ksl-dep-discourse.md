---
layout: base
title:  'Statistics of discourse in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `discourse`

This relation is universal.

6 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (4; 67% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 discourse	color:blue
1	빌리	빌리	NOUN	NNP	_	14	nsubj	_	_
2	씨는	씨+는	NOUN	NNB+JX	_	1	flat	_	_
3	머하메드	머하메드	NOUN	NNP	_	14	obl	_	_
4	씨에	씨+에	ADV	NNB+JKB	_	3	flat	_	_
5	"	"	PUNCT	SS	_	9	punct	_	SpaceAfter=No
6	"	"	PUNCT	SS	_	9	punct	_	SpaceAfter=No
7	주말에	주말+에	ADV	NNG+JKB	_	9	obl	_	_
8	사진기를	사진기+를	NOUN	NNG+JKO	_	9	obj	_	_
9	빌려	빌리+어	VERB	VV+EC	_	14	compound	_	_
10	주세요	주+시+어요	VERB	VX+EP+EF	_	13	advcl	_	SpaceAfter=No
11	"	"	PUNCT	SS	_	13	punct	_	SpaceAfter=No
12	"	"	PUNCT	SS	_	13	punct	_	SpaceAfter=No
13	하고	하고	VERB	JKQ	_	14	discourse	_	_
14	이야기했습니다	이야기+하+았+습니다	VERB	NNG+XSV+EP+EF	_	0	root	_	SpaceAfter=No
15	.	.	PUNCT	SF	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 discourse	color:blue
1	그냥	그냥	ADV	MAG	_	3	advmod	_	_
2	한국친구랑	한국+친구+랑	ADV	NNP+NNG+JKB	_	3	obl	_	_
3	창피하지	창피+하+지	VERB	NNG+XSA+EC	_	7	advcl	_	_
4	말고	말+고	VERB	VX+EC	_	3	advcl	_	_
5	많이	많이	ADV	MAG	_	7	advmod	_	_
6	대화를	대화+를	NOUN	NNG+JKO	_	7	obj	_	_
7	해야지	하+아야지	VERB	VV+EF	_	0	root	_	SpaceAfter=No
8	,	,	PUNCT	SP	_	7	punct	_	_
9	뭘	뭘	ADJ	IC	_	7	discourse	_	SpaceAfter=No
10	.	.	PUNCT	SF	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	참	참	ADV	MAG	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	SP	_	1	punct	_	_
3	넌	너+ㄴ	DET	NP+JX	_	5	nsubj	_	_
4	한국영화를	한국+영화+를	NOUN	NNP+NNG+JKO	_	5	obj	_	_
5	좋아하잖아	좋아하+잖아	VERB	VV+EF	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	SF	_	5	punct	_	_

~~~


