---
layout: base
title:  'Statistics of csubj in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `csubj`

This relation is universal.

22 nodes (0%) are attached to their parents as `csubj`.

22 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13636363636364.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (9; 41% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (6; 27% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (4; 18% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	나는	나+는	PRON	NP+JX	_	10	nsubj	_	_
2	한국어를	한국어+를	NOUN	NNG+JKO	_	3	obj	_	_
3	배우고	배우+고	VERB	VV+EC	_	5	acl	_	_
4	싶을	싶	AUX	VX+ETM	_	3	aux	_	_
5	뿐만	뿐+만	NOUN	NNB+JX	_	6	csubj	_	_
6	아니라	아니+라	VERB	VCN+EC	_	10	advcl	_	_
7	한국에	한국+에	ADV	NNP+JKB	_	8	obl	_	_
8	와야	오+아야	VERB	VV+EC	_	10	ccomp	_	_
9	한다고	하	AUX	VX+EC	_	8	aux	_	_
10	생각했다	생각+하+았+다	VERB	NNG+XSV+EP+EF	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	SF	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 csubj	color:blue
1	그냥	그냥	ADV	MAG	_	3	advmod	_	_
2	김치만	김치+만	NOUN	NNG+JX	_	3	obj	_	_
3	먹어도	먹+어도	VERB	VV+EC	_	4	advcl	_	_
4	맛있고	맛+있+고	VERB	NNG+VA+EC	_	0	root	_	_
5	밥의	밥+의	NOUN	NNG+JKG	_	6	nmod:poss	_	_
6	위에	위+에	ADV	NNG+JKB	_	7	obl	_	_
7	놓어	놓+어	VERB	VV+EC	_	8	advcl	_	_
8	먹어도	먹+어도	VERB	VV+EC	_	9	csubj	_	_
9	좋다	좋+다	ADJ	VA+EF	_	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	SF	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 csubj	color:blue
1	그	그	DET	MM	_	2	det	_	_
2	때	때	ADV	NNG	_	9	advmod	_	_
3	우리	우리	PRON	NP	_	4	nmod	_	_
4	선생님께서	선생+님+께서	NOUN	NNG+XSN+JKS	_	6	nsubj	_	_
5	대학	대학	NOUN	NNG	_	6	obj	_	_
6	촐업한지	촐업+하+ㄴ+지	VERB	NF+XSV+ETM+NNB	Typo=Yes	9	csubj	_	_
7	얼마나	얼마나	ADV	MAG	_	9	advmod	_	_
8	안	안	ADV	MAG	_	9	advmod	_	_
9	됐으니까	되+었+으니까	VERB	VV+EP+EC	_	11	advcl	_	_
10	정말	정말	ADV	MAG	_	11	advmod	_	_
11	친하다	친하+다	ADJ	VA+EF	_	0	root	_	SpaceAfter=No
12	.	.	PUNCT	SF	_	11	punct	_	_

~~~


