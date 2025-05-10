---
layout: base
title:  'Statistics of compound in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `compound`

This relation is universal.

112 nodes (0%) are attached to their parents as `compound`.

112 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04464285714286.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (63; 56% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (21; 19% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (13; 12% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (13; 12% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	동대문	동대문	NOUN	NNP	_	2	nmod	_	_
2	근처에	근처+에	ADV	NNG+JKB	_	7	obl	_	_
3	식당에서	식당+에서	ADV	NNG+JKB	_	7	obl	_	_
4	제	저+의	PRON	NP+JKG	_	6	nmod:poss	_	_
5	생일	생일	NOUN	NNG	_	6	compound	_	_
6	파티를	파티+를	NOUN	NNG+JKO	_	7	obj	_	_
7	합니다	하+ㅂ니다	VERB	VV+EF	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	SF	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	남자에	남자+에	ADV	NNG+JKB	_	5	obl	_	_
2	우체국에	우체국+에	ADV	NNG+JKB	_	3	obl	_	_
3	가는	가+는	VERB	VV+ETM	_	4	acl	_	_
4	길을	길+을	NOUN	NNG+JKO	_	5	obj	_	_
5	물어	묻+어	VERB	VV+EC	_	6	compound	_	_
6	봤습니다	보+았+습니다	VERB	VX+EP+EF	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	SF	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound	color:blue
1	아침에	아침+에	ADV	NNG+JKB	_	4	obl	_	_
2	공기가	공기+가	NOUN	NNG+JKS	_	4	nsubj	_	_
3	더	더	ADV	MAG	_	4	advmod	_	_
4	맑고	맑+고	VERB	VA+EC	_	14	advcl	_	_
5	하루의	하루+의	NOUN	NNG+JKG	_	6	nmod:poss	_	_
6	시작이라서	시작+이+라서	VERB	NNG+VCP+EC	_	4	conj	_	_
7	아침에	아침+에	ADV	NNG+JKB	_	8	obl	_	_
8	운동하면	운동+하+면	VERB	NNG+XSV+EC	_	14	advcl	_	_
9	하루	하루	NOUN	NNG	_	10	compound	_	_
10	종일	종일	ADV	MAG	_	12	advmod	_	_
11	활기있게	활기+있+게	ADV	NNG+VV+EC	_	12	advmod	_	_
12	일할	일+하+ㄹ	VERB	NNG+XSV+ETM	_	13	acl	_	_
13	수	수	NOUN	NNB	_	14	nsubj	_	_
14	있습니다	있+습니다	ADJ	VX+EF	_	0	root	_	SpaceAfter=No
15	.	.	PUNCT	SF	_	14	punct	_	_

~~~


