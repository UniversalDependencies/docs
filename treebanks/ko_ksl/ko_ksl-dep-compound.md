---
layout: base
title:  'Statistics of compound in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="ko_ksl-dep-compound-lvc.html">compound:lvc</a></tt>.

114 nodes (0%) are attached to their parents as `compound`.

114 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04385964912281.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (69; 61% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (20; 18% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (19; 17% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 1% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	남자	남자	NOUN	NNG	_	2	compound	_	_
2	친구하고	친구+하고	ADV	NNG+JKB	_	5	obl	_	_
3	오랫동안	오래동안	ADV	MAG	_	5	obl	_	_
4	못	못	ADV	MAG	_	5	advmod	_	_
5	만나서	만나+아서	VERB	VV+EC	_	7	advcl	_	_
6	데이트를	데이트+를	NOUN	NNG+JKO	_	7	obj	_	_
7	하고	하+고	VERB	VV+EC	_	10	advcl	_	_
8	싶지만	싶	AUX	VX+EC	_	7	aux	_	_
9	남자친구가	남자+친구+가	NOUN	NNG+NNG+JKS	_	10	nsubj	_	_
10	대학교	대학교	NOUN	NNG	_	11	nmod	_	_
11	4학년입니다	4+학년+이+ㅂ니다	ADJ	SN+NNB+VCP+EF	_	0	root	_	SpaceAfter=No
12	.	.	PUNCT	SF	_	11	punct	_	_

~~~


