---
layout: base
title:  'Statistics of acl:relcl in UD_Korean-GSD'
udver: '2'
---

## Treebank Statistics: UD_Korean-GSD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ko_gsd-dep-acl.html">acl</a></tt>.

3194 nodes (4%) are attached to their parents as `acl:relcl`.

3187 instances of `acl:relcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62711333750783.

The following 21 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (2297; 72% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (379; 12% instances), <tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (315; 10% instances), <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (108; 3% instances), <tt><a href="ko_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (34; 1% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (18; 1% instances), <tt><a href="ko_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="ko_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ko_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ko_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-DET.html">DET</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ko_gsd-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 acl:relcl	color:blue
1	특히	특히	ADV	MAG	_	14	advmod	_	_
2	크리스탈의	크리스탈+의	NOUN	NNG+JKG	_	9	det:poss	_	_
3	화장기	화장기	NOUN	NNG	_	4	nsubj	_	_
4	없는	없+는	VERB	VA+ETM	_	6	acl:relcl	_	_
5	수수한	수수+하+ㄴ	ADJ	XR+XSA+ETM	_	6	amod	_	_
6	얼굴빛과	얼굴빛+과	NOUN	NNG+JC	_	12	nsubj	_	_
7	하늘하늘거리는	하늘+하늘거리+는	ADJ	NNG+VV+ETM	_	9	amod	_	_
8	긴	길+ㄴ	ADJ	VA+ETM	_	9	amod	_	_
9	생머리는	생+머리+는	NOUN	XPN+NNG+JX	_	6	conj	_	_
10	남성들의	남성+들+의	NOUN	NNG+XSN+JKG	_	11	det:poss	_	_
11	보호본능을	보호+본능+을	NOUN	NNG+NNG+JKO	_	12	obj	_	_
12	자극해	자극+하+아	VERB	NNG+XSV+EC	_	14	advcl	_	_
13	시선이	시선+이	NOUN	NNG+JKS	_	14	nsubj:pass	_	_
14	집중됐다	집중+되+었+다	VERB	NNG+XSV+EP+EF	_	0	root	_	SpaceAfter=No
15	.	.	PUNCT	SF	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl:relcl	color:blue
1	이	이	DET	MM	_	2	det	_	_
2	아파트는	아파트+는	NOUN	NNG+JX	_	6	nsubj	_	_
3	골목에	골목+에	ADV	NNG+JKB	_	4	obl	_	_
4	있는	있+는	VERB	VV+ETM	_	5	acl:relcl	_	_
5	아파트치고	아파트+치고	ADV	NNG+JX	_	6	advmod	_	_
6	커서	크+어서	VERB	VA+EC	_	8	advcl	_	_
7	찾기도	찾+기+도	NOUN	VV+ETN+JX	_	8	nsubj	_	_
8	쉽다	쉽+다	ADJ	VA+EC	_	0	root	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 acl:relcl	color:blue
1	몇	몇	DET	MM	_	2	det	_	_
2	년	년	NOUN	NNB	_	4	nmod	_	_
3	전	전	ADP	NNG	_	2	case	_	_
4	고시	고시	NOUN	NNG	_	6	acl:relcl	_	_
5	공부하던	공부+하+던	VERB	NNG+XSV+ETM	_	4	flat	_	_
6	시절에	시절+에	ADV	NNG+JKB	_	9	obl	_	_
7	선후배들과	선후배+들+과	ADV	NNG+XSN+JKB	_	9	advmod	_	_
8	자주	자주	ADV	MAG	_	9	advmod	_	_
9	갔던	가+았+던	VERB	VV+EP+ETM	_	10	acl:relcl	_	_
10	곳인데	곳+이+ㄴ데	VERB	NNG+VCP+EC	_	14	advcl	_	_
11	여전히	여전히	ADV	MAG	_	14	advmod	_	_
12	사장님의	사장+님+의	NOUN	NNG+XSN+JKG	_	13	det:poss	_	_
13	친절은	친절+은	NOUN	NNG+JX	_	14	nsubj	_	_
14	최고더군요	최고+이+더군요	VERB	NNG+VCP+EC	_	0	root	_	_

~~~


