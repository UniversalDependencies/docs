---
layout: base
title:  'Statistics of nummod in UD_Korean-GSD'
udver: '2'
---

## Treebank Statistics: UD_Korean-GSD: Relations: `nummod`

This relation is universal.

490 nodes (1%) are attached to their parents as `nummod`.

379 instances of `nummod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.56326530612245.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt> (327; 67% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt> (85; 17% instances), <tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt> (31; 6% instances), <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (23; 5% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="ko_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="ko_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ko_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nummod	color:blue
1	그리고	그리고	ADV	MAJ	_	13	advmod	_	_
2	그리스에는	그리스+에+는	ADV	NNP+JKB+JX	_	13	advmod	_	_
3	산이	산+이	NOUN	NNG+JKS	_	4	nsubj	_	_
4	많고	많+고	VERB	VA+EC	_	13	advcl	_	_
5	평야가	평야+가	NOUN	NNG+JKS	_	6	nsubj	_	_
6	적어	적+어	VERB	VV+EC	_	4	conj	_	_
7	각	각	DET	MM	_	9	det	_	_
8	골짜기나	골짜기+나	NOUN	NNG+JC	_	13	nsubj	_	_
9	평지가	평지+가	NOUN	NNG+JKS	_	8	conj	_	_
10	하나의	하나+의	NUM	NR+JKG	NumType=Card	12	nummod	_	_
11	지리적	지리+적	ADJ	NNG+XSN	_	12	amod	_	_
12	단위를	단위+를	NOUN	NNG+JKO	_	13	obj	_	_
13	이룬다	이루+ㄴ다	VERB	VV+EF	_	0	root	_	SpaceAfter=No
14	.	.	PUNCT	SF	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	여기에	여기+에	ADV	NP+JKB	_	11	obl	_	_
2	286개	286+개	NOUN	SN+NNB	_	5	nsubj	_	_
3	공기업과	공기업+과	NOUN	NNG+JC	_	2	flat	_	_
4	공공기관들이	공공+기관+들+이	NOUN	NNG+NNG+XSN+JKS	_	2	conj	_	_
5	안고	안+고	VERB	VV+EC	_	7	acl:relcl	_	_
6	있는	있+는	VERB	VX+ETM	_	5	flat	_	_
7	부채가	부채+가	NOUN	NNG+JKS	_	11	nsubj	_	_
8	무려	무려	ADV	MAG	_	11	advmod	_	_
9	388조6000억	388+조+6000+억	NUM	SN+NR+SN+NR	NumType=Card	10	nummod	_	_
10	원에	원+에	ADV	NNB+JKB	_	11	obl	_	_
11	달한다	달하+ㄴ다	VERB	VV+EF	_	0	root	_	SpaceAfter=No
12	.	.	PUNCT	SF	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 nummod	color:blue
1	총	총	NOUN	NNG	_	2	advmod	_	_
2	연장길이는	연장+길이+는	NOUN	NNG+NNG+JX	_	3	nsubj	_	_
3	14.3	14.3	NUM	SN	_	11	nummod	_	SpaceAfter=No
4	㎞	㎞	PUNCT	SW	_	3	punct	_	SpaceAfter=No
5	로	로	ADP	JKB	_	11	case	_	SpaceAfter=No
6	,	,	PUNCT	SP	_	5	punct	_	_
7	영동고속도로	영동고속도로	NOUN	NNP	_	11	advmod	_	SpaceAfter=No
8	,	,	PUNCT	SP	_	7	punct	_	_
9	서울외곽순환고속도로	서울+외곽+순환+고속도로	ADV	NNP+NNG+NNG+NNG	_	7	conj	_	_
10	등과	등+과	ADV	NNB+JKB	_	9	dep	_	_
11	연결된다	연결+되+ㄴ다	VERB	NNG+XSV+EF	_	0	root	_	SpaceAfter=No
12	.	.	PUNCT	SF	_	11	punct	_	_

~~~


