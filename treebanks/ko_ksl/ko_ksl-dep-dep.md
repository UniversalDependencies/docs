---
layout: base
title:  'Statistics of dep in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `dep`

This relation is universal.

3 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 33% instances).


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
6	찹은	찹+은	VERB	NV+ETM	_	7	dep	_	_
7	것이	것+이	NOUN	NNB+JKS	_	8	nsubj	_	_
8	여렵다	여렵+다	ADJ	NV+EF	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	SF	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 dep	color:blue
1	한국어를	한국어+를	NOUN	NNG+JKO	_	2	obj	_	_
2	공부하면	공부+하+면	VERB	NNG+XSV+EC	_	5	advcl	_	_
3	처음부터	처음+부터	ADV	NNG+JX	_	5	obl	_	_
4	열심히	열심히	ADV	MAG	_	5	advmod	_	_
5	노력하면	노력+하+면	VERB	NNG+XSV+EC	_	7	advcl	_	_
6	앞으로	앞+으로	ADV	NNG+JKB	_	7	obl	_	_
7	괜찮을	괜찮+을	VERB	VA+ETM	_	8	dep	_	_
8	거야	거+야	VERB	NNB+EF	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	SF	_	8	punct	_	_

~~~


