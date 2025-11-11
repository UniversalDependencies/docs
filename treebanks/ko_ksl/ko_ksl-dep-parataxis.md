---
layout: base
title:  'Statistics of parataxis in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `parataxis`

This relation is universal.

45 nodes (0%) are attached to their parents as `parataxis`.

39 instances of `parataxis` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.35555555555556.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (18; 40% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt> (12; 27% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt> (4; 9% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	해양공원은	해양+공원+은	NOUN	NNG+NNG+JX	_	4	dislocated	_	_
2	해양동물도	해양+동물+도	NOUN	NNG+NNG+JX	_	4	nsubj	_	_
3	많이	많이	ADV	MAG	_	4	advmod	_	_
4	있다	있+다	VERB	VV+EC	_	0	root	_	_
5	틀별한	틀별+하+ㄴ	ADJ	NF+XSA+ETM	Typo=Yes	6	amod	_	_
6	물고기	물고기	NOUN	NNG	_	7	nsubj	_	_
7	많고	많+고	ADJ	VA+EC	_	4	parataxis	_	_
8	다른나라	다른+나라	ADJ	MAG+NNG	_	9	amod	_	_
9	동물도	동물+도	NOUN	NNG+JX	_	10	nsubj	_	_
10	많았다	많+았+다	ADJ	VA+EP+EF	_	7	conj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 parataxis	color:blue
1	이	이	DET	MM	_	2	det	_	_
2	영화에서	영화+에서	ADV	NNG+JKB	_	9	obl	_	_
3	사랑들이	사랑+들+이	NOUN	NNG+XSN+JKS	_	9	nsubj	_	_
4	우리보고	우리+보고	PRON	NP+JX	_	9	obl	_	_
5	좋은	좋+은	ADJ	VA+ETM	_	6	amod	_	_
6	때다	때+이+다	ADJ	NNG+VCP+EF	_	8	parataxis	_	_
7	좋을	좋+을	ADJ	VA+ETM	_	8	acl	_	_
8	때다	때+이+다	ADJ	NNG+VCP+EF	_	9	ccomp	_	_
9	그러는데	그러+는데	VERB	VV+EC	_	12	advcl	_	_
10	애매하기	애매+하+기	ADJ	NNG+XSA+ETN	_	12	obl	_	_
11	뭐가	뭐+가	PRON	NP+JKS	_	12	nsubj	_	_
12	없이	없이	ADV	MAG	_	0	root	_	SpaceAfter=No
13	.	.	PUNCT	SF	_	12	punct	_	_

~~~


