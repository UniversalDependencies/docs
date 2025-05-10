---
layout: base
title:  'Statistics of dep in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

5 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	그러한	그러하+ㄴ	ADJ	VA+ETM	_	3	amod	_	_
2	세가지	세+가지	VERB	MM+NNB	_	3	dep	_	_
3	이유로	이유+로	ADV	NNG+JKB	_	5	obl	_	_
4	사형제도는	사형+제도+는	NOUN	NNG+NNG+JX	_	5	obj	_	_
5	유지해야	유지+하+아야	VERB	NNG+XSV+EC	_	0	root	_	_
6	한다	하	AUX	VX+EF	_	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	SF	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 dep	color:blue
1	그	그	DET	MM	_	2	det	_	_
2	영화의	영화+의	NOUN	NNG+JKG	_	3	nmod:poss	_	_
3	주제는	주제+는	NOUN	NNG+JX	_	8	dislocated	_	_
4	어떤	어떤	DET	MM	_	5	det	_	_
5	살인자가	살인자+가	NOUN	NNG+JKS	_	6	nsubj	_	_
6	찹은	찹+은	VERB	NV+ETM	Typo=Yes	7	dep	_	_
7	것이	것+이	NOUN	NNB+JKS	_	8	nsubj	_	_
8	여렵다	여렵+다	ADJ	NV+EF	Typo=Yes	0	root	_	SpaceAfter=No
9	.	.	PUNCT	SF	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 dep	color:blue
1	(	(	PUNCT	SS	_	2	punct	_	SpaceAfter=No
2	저는	저+는	PRON	NP+JX	_	3	nsubj	_	_
3	모르겠지만	모르+겠+지만	VERB	VV+EP+EC	_	7	advcl	_	_
4	^^	^+^	ADV	SW+SW	_	7	dep	_	SpaceAfter=No
5	)	)	PUNCT	SS	_	4	punct	_	_
6	아무튼	아무튼	ADV	MAG	_	7	advmod	_	_
7	추천합니다	추천+하+ㅂ니다	VERB	NNG+XSV+EF	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	SF	_	7	punct	_	_

~~~


