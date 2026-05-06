---
layout: base
title:  'Statistics of parataxis in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `parataxis`

This relation is universal.

48 nodes (0%) are attached to their parents as `parataxis`.

39 instances of `parataxis` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.14583333333333.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (20; 42% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt> (12; 25% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (5; 10% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt> (4; 8% instances), <tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 parataxis	color:blue
1	넌	너+ㄴ	PRON	NP+JX	PronType=Prs	3	nsubj	_	_
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 parataxis	color:blue
1	나의	나+의	PRON	NP+JKG	PronType=Prs	2	nmod:poss	_	_
2	취미는	취미+는	NOUN	NNG+JX	_	3	nsubj	_	_
3	노래방	노래방	NOUN	NNG	_	13	parataxis	_	_
4	이다	이+다	ADP	VCP+EF	_	3	case	_	_
5	취미가	취미+가	NOUN	NNG+JKS	_	6	nsubj	_	_
6	노래방이지만	노래방+이+지만	ADJ	NNG+VCP+EC	_	13	advcl	_	_
7	옛날에는	옛날+에+는	ADV	NNG+JKB+JX	_	13	obl	_	_
8	노래를	노래+를	NOUN	NNG+JKO	_	9	obj	_	_
9	부르는	부르+는	VERB	VV+ETM	_	10	acl	_	_
10	것을	것+을	NOUN	NNB+JKO	_	13	obj	_	_
11	잘	잘	ADV	MAG	_	13	advmod	_	_
12	못	못	ADV	MAG	_	13	advmod	_	_
13	했다	하+았+다	VERB	VV+EP+EF	_	0	root	_	SpaceAfter=No
14	.	.	PUNCT	SF	_	13	punct	_	_

~~~


