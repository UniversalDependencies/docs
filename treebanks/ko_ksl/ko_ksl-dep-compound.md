---
layout: base
title:  'Statistics of compound in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Relations: `compound`

This relation is universal.

52 nodes (0%) are attached to their parents as `compound`.

52 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09615384615385.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (19; 37% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt> (14; 27% instances), <tt><a href="ko_ksl-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (9; 17% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt> (8; 15% instances), <tt><a href="ko_ksl-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ko_ksl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	칼리드의	칼리드+의	NOUN	NNP+JKG	_	2	nmod:poss	_	_
2	생일	생일	NOUN	NNG	_	3	compound	_	_
3	파티가	파티+가	NOUN	NNG+JKS	_	8	nsubj	_	_
4	1월	1+월	NOUN	SN+NNB	_	8	obl	_	_
5	25일	25+일	NOUN	SN+NNB	_	4	flat	_	_
6	오후	오후	NOUN	NNG	_	4	flat	_	_
7	6시까지	6+시+까지	ADV	SN+NNB+JX	_	4	flat	_	_
8	오세요	오+시+어요	VERB	VV+EP+EF	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	SF	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	내	나+의	PRON	NP+JKG	_	2	nmod:poss	_	_
2	한국	한국	NOUN	NNP	_	3	nmod	_	_
3	친구에게	친구+에게	NOUN	NNG+JKB	_	5	obl	_	_
4	물어	묻+어	VERB	VV+EC	_	5	compound	_	_
5	봐서	보+아서	VERB	VX+EC	_	8	advcl	_	_
6	봄에	봄+에	ADV	NNG+JKB	_	7	obl	_	_
7	가라고	가+라고	VERB	VV+EC	_	8	ccomp	_	_
8	추천했다	추천+하+았+다	VERB	NNG+XSV+EP+EF	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	SF	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	명동에	명동+에	ADV	NNP+JKB	_	9	obl	_	_
2	옷	옷	NOUN	NNG	_	3	compound	_	_
3	가게하고	가게+하고	VERB	NNG+JC	_	9	nsubj	_	_
4	신발	신발	NOUN	NNG	_	5	compound	_	_
5	가게하고	가게+하고	VERB	NNG+JC	_	3	conj	_	_
6	화장품	화장품	NOUN	NNG	_	7	compound	_	_
7	가게하고	가게+하고	VERB	NNG+JC	_	3	conj	_	_
8	식당이	식당+이	NOUN	NNG+JKS	_	3	conj	_	_
9	많았습니다	많+았+습니다	ADJ	VA+EP+EF	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	SF	_	9	punct	_	_

~~~


