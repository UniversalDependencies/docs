---
layout: base
title:  'Statistics of acl in UD_Korean-GSD'
udver: '2'
---

## Treebank Statistics: UD_Korean-GSD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ko_gsd-dep-acl-relcl.html">acl:relcl</a></tt>.

4 nodes (0%) are attached to their parents as `acl`.

3 instances of `acl` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 acl	color:blue
1	따라서	따라서	ADV	MAJ	_	9	advmod	_	_
2	강서구는	강서구+는	NOUN	NNP+JX	_	6	nsubj	_	_
3	비류백제의	비류+백제+의	NOUN	NNP+NNP+JKG	_	4	det:poss	_	_
4	미추홀에서부터	미추홀+에서부터	ADV	NNP+JKB	_	6	advmod	_	_
5	역사가	역사+가	NOUN	NNG+JKS	_	6	nsubj	_	_
6	시작된다고	시작+되+ㄴ다고	VERB	NNG+XSV+EC	_	7	ccomp	_	_
7	볼	보+ㄹ	VERB	VX+ETM	_	8	dep	_	_
8	수	수	NOUN	NNB	_	9	nsubj	_	_
9	있으며	있+으며	VERB	VV+EC	_	0	root	_	_
10	최초의	최초+의	NOUN	NNG+JKG	_	11	det:poss	_	_
11	지명이	지명+이	NOUN	NNG+JKS	_	13	nsubj	_	_
12	''	''	PUNCT	SS	_	13	punct	_	SpaceAfter=No
13	제차파의	제+차파+의	VERB	XPN+NNG+JKG	_	16	acl	_	SpaceAfter=No
14	’	’	PUNCT	SP	_	13	punct	_	SpaceAfter=No
15	라는	라+는	VERB	NNP+JX	_	13	acl	_	_
16	것을	것+을	NOUN	NNB+JKO	_	17	obj	_	_
17	알	알+ㄹ	VERB	VV+ETM	_	18	dep	_	_
18	수	수	NOUN	NNB	_	19	nsubj	_	_
19	있다	있+다	ADJ	VV+EF	_	9	conj	_	SpaceAfter=No
20	.	.	PUNCT	SF	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 8 acl	color:blue
1	이	이	DET	MM	_	2	det	_	_
2	책에	책+에	ADV	NNG+JKB	_	3	obl	_	_
3	의하면	의하+면	VERB	VV+EC	_	42	advcl	_	SpaceAfter=No
4	,	,	PUNCT	SP	_	3	punct	_	_
5	이	이	DET	MM	_	6	det	_	_
6	세계는	세계+는	NOUN	NNG+JX	_	16	nsubj	_	_
7	''	''	PUNCT	SS	_	8	punct	_	SpaceAfter=No
8	태시	태시	PROPN	NNP	_	15	acl	_	SpaceAfter=No
9	(	(	PUNCT	SS	_	10	punct	_	SpaceAfter=No
10	太始	太始	SYM	SH	_	8	appos	_	SpaceAfter=No
11	)	)	PUNCT	SS	_	10	punct	_	SpaceAfter=No
12	``	``	PUNCT	SF	_	8	punct	_	SpaceAfter=No
13	라는	라+는	PART	JKQ+JX	_	8	case	_	_
14	혼돈된	혼돈+되+ㄴ	ADJ	NNG+XSV+ETM	_	15	amod	_	_
15	상태에서	상태+에서	ADV	NNG+JKB	_	16	advmod	_	_
16	시작하여	시작+하+아	VERB	NNG+XSV+EC	_	19	advcl	_	SpaceAfter=No
17	,	,	PUNCT	SP	_	16	punct	_	_
18	변화를	변화+를	NOUN	NNG+JKO	_	19	obj	_	_
19	거쳐	거치+어	VERB	VV+EC	_	21	advcl	_	_
20	우주가	우주+가	NOUN	NNG+JKS	_	21	nsubj	_	_
21	되었고	되+었+고	VERB	VV+EP+EC	_	42	ccomp	_	_
22	우주는	우주+는	NOUN	NNG+JX	_	28	nsubj	_	_
23	기	기	NOUN	NNG	_	28	obj	_	SpaceAfter=No
24	(	(	PUNCT	SS	_	25	punct	_	SpaceAfter=No
25	氣	氣	SYM	SH	_	23	appos	_	SpaceAfter=No
26	)	)	PUNCT	SS	_	25	punct	_	SpaceAfter=No
27	를	를	ADP	JKO	_	23	obj	_	_
28	낳았으며	낳+았+으며	VERB	VV+EP+EC	_	21	conj	_	SpaceAfter=No
29	,	,	PUNCT	SP	_	28	punct	_	_
30	기가	기+가	NOUN	NNG+JKS	_	32	nsubj	_	_
31	밝고	밝+고	VERB	VA+EC	_	33	acl:relcl	_	_
32	가벼운	가볍+ㄴ	VERB	VA+ETM	_	31	conj	_	_
33	것이	것+이	NOUN	NNB+JKS	_	35	nsubj	_	_
34	하늘을	하늘+을	NOUN	NNG+JKO	_	35	obj	_	_
35	만들고	만들+고	VERB	VV+EC	_	21	conj	_	SpaceAfter=No
36	,	,	PUNCT	SP	_	35	punct	_	_
37	무겁고	무겁+고	VERB	VA+EC	_	39	acl:relcl	_	_
38	탁한	탁하+ㄴ	VERB	VA+ETM	_	37	conj	_	_
39	것이	것+이	NOUN	NNB+JKS	_	41	nsubj	_	_
40	땅을	땅+을	NOUN	NNG+JKO	_	41	obj	_	_
41	이룬다고	이루+ㄴ다고	VERB	VV+EC	_	21	conj	_	_
42	보았다	보+았+다	VERB	VX+EP+EF	_	0	root	_	SpaceAfter=No
43	.	.	PUNCT	SF	_	42	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 acl	color:blue
1	따라서	따라서	ADV	MAJ	_	9	advmod	_	_
2	강서구는	강서구+는	NOUN	NNP+JX	_	6	nsubj	_	_
3	비류백제의	비류+백제+의	NOUN	NNP+NNP+JKG	_	4	det:poss	_	_
4	미추홀에서부터	미추홀+에서부터	ADV	NNP+JKB	_	6	advmod	_	_
5	역사가	역사+가	NOUN	NNG+JKS	_	6	nsubj	_	_
6	시작된다고	시작+되+ㄴ다고	VERB	NNG+XSV+EC	_	7	ccomp	_	_
7	볼	보+ㄹ	VERB	VX+ETM	_	8	dep	_	_
8	수	수	NOUN	NNB	_	9	nsubj	_	_
9	있으며	있+으며	VERB	VV+EC	_	0	root	_	_
10	최초의	최초+의	NOUN	NNG+JKG	_	11	det:poss	_	_
11	지명이	지명+이	NOUN	NNG+JKS	_	13	nsubj	_	_
12	''	''	PUNCT	SS	_	13	punct	_	SpaceAfter=No
13	제차파의	제+차파+의	VERB	XPN+NNG+JKG	_	16	acl	_	SpaceAfter=No
14	’	’	PUNCT	SP	_	13	punct	_	SpaceAfter=No
15	라는	라+는	VERB	NNP+JX	_	13	acl	_	_
16	것을	것+을	NOUN	NNB+JKO	_	17	obj	_	_
17	알	알+ㄹ	VERB	VV+ETM	_	18	dep	_	_
18	수	수	NOUN	NNB	_	19	nsubj	_	_
19	있다	있+다	ADJ	VV+EF	_	9	conj	_	SpaceAfter=No
20	.	.	PUNCT	SF	_	19	punct	_	_

~~~


