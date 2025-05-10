---
layout: base
title:  'Statistics of parataxis in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `parataxis`

This relation is universal.

44 nodes (0%) are attached to their parents as `parataxis`.

39 instances of `parataxis` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.43181818181818.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (27; 61% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (4; 9% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt> (4; 9% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 parataxis	color:blue
1	넌	너+ㄴ	PRON	NP+JX	_	3	nsubj	_	_
2	많이	많이	ADV	MAG	_	3	advmod	_	_
3	걱정하지마	걱정+하+지+말+어	VERB	NNG+XSV+EC+VX+EF	_	6	parataxis	_	_
4	열심히	열심히	ADV	MAG	_	5	advmod	_	_
5	공부하면	공부+하+면	VERB	NNG+XSV+EC	_	6	advcl	_	_
6	돼	되+어	VERB	VX+EF	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	SF	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 parataxis	color:blue
1	불가능한	불+가능+하+ㄴ	VERB	XPN+NNG+XSA+ETM	_	2	acl	_	_
2	것	것	NOUN	NNB	_	3	nsubj	_	_
3	없어	없+어	VERB	VA+EF	_	10	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	SP	_	3	punct	_	_
5	불가능하다고	불+가능+하+다고	VERB	XPN+NNG+XSA+EC	_	6	ccomp	_	_
6	생각해서	생각+하+아서	VERB	NNG+XSV+EC	_	8	advcl	_	_
7	쉽게	쉽+게	ADV	VA+EC	_	8	advmod	_	_
8	포기한	포기+하+ㄴ	VERB	NNG+XSV+ETM	_	9	acl	_	_
9	사람이	사람+이	NOUN	NNG+JKS	_	10	nsubj	_	_
10	있어	있+어	ADJ	VV+EF	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	SF	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 parataxis	color:blue
1	호수에서는	호수+에서+는	ADV	NNG+JKB+JX	_	3	obl	_	_
2	야경이	야경+이	NOUN	NNG+JKS	_	4	nsubj	_	_
3	반쩍반쩍도록	반쩍+반쩍+도록	VERB	NA+NA+EC	Typo=Yes	4	advcl	_	_
4	예뻤다	예쁘+었+다	ADJ	VA+EP+EC	_	10	parataxis	_	_
5	다음날에	다음+날+에	ADV	NNG+NNG+JKB	_	10	obl	_	_
6	우리는	우리+는	PRON	NP+JX	_	10	nsubj	_	_
7	배도	배+도	NOUN	NNG+JX	_	8	obj	_	_
8	타고	타+고	VERB	VV+EC	_	0	root	_	_
9	양숴로	양숴+로	ADV	NNP+JKB	_	10	obl	_	_
10	갔다	가+았+다	VERB	VV+EP+EF	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	SF	_	10	punct	_	_

~~~


