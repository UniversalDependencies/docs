---
layout: base
title:  'Statistics of discourse in UD_Korean-Kaist'
udver: '2'
---

## Treebank Statistics: UD_Korean-Kaist: Relations: `discourse`

This relation is universal.

47 nodes (0%) are attached to their parents as `discourse`.

27 instances of `discourse` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.12765957446809.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="ko_kaist-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_kaist-pos-INTJ.html">INTJ</a></tt> (26; 55% instances), <tt><a href="ko_kaist-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ko_kaist-pos-INTJ.html">INTJ</a></tt> (8; 17% instances), <tt><a href="ko_kaist-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_kaist-pos-INTJ.html">INTJ</a></tt> (4; 9% instances), <tt><a href="ko_kaist-pos-AUX.html">AUX</a></tt>-<tt><a href="ko_kaist-pos-INTJ.html">INTJ</a></tt> (3; 6% instances), <tt><a href="ko_kaist-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_kaist-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="ko_kaist-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ko_kaist-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="ko_kaist-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_kaist-pos-INTJ.html">INTJ</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	여보게	여보게	INTJ	ii	_	7	discourse	_	_
2	산초	산초	PROPN	nq	_	1	dep	_	_
3	판자	판자	PROPN	nq	_	1	dep	_	SpaceAfter=No
4	,	,	PUNCT	sp	_	1	punct	_	_
5	저기를	저기+를	PRON	npd+jco	_	7	obj	_	_
6	좀	좀	ADV	mag	_	7	advmod	_	_
7	보게나	보+게나	VERB	pvg+ef	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sf	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	너무	너무	ADV	mag	_	2	advmod	_	_
2	착하다보니	착하+다+보+니	SCONJ	paa+ecx+px+ecs	_	0	root	_	_
3	말입니다	말입니다	INTJ	ii	_	2	discourse	_	SpaceAfter=No
4	.	.	PUNCT	sf	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 discourse	color:blue
1	마치	마치	ADV	mag	_	10	advmod	_	_
2	바람이	바람+이	NOUN	ncn+jcs	_	3	nsubj	_	_
3	잔잔한	잔잔+하+ㄴ	VERB	ncps+xsm+etm	_	4	amod	_	_
4	날	날	NOUN	ncn	_	10	advmod	_	_
5	한껏	한껏	ADV	mag	_	7	advmod	_	_
6	날개를	날개+를	NOUN	ncn+jco	_	7	obj	_	_
7	펴고	펴+고	CCONJ	pvg+ecc	_	12	acl	_	_
8	높푸른	높푸르+ㄴ	ADJ	paa+etm	_	9	amod	_	_
9	하늘을	하늘+을	NOUN	ncn+jco	_	10	obj	_	_
10	날고	날+고	VERB	pvg+ecx	_	7	conj	_	_
11	있는	있+는	AUX	px+etm	_	10	aux	_	_
12	독수리처럼	독수리+처럼	ADV	ncn+jca	_	0	root	_	_
13	말입니다	말입니다	INTJ	ii	_	12	discourse	_	SpaceAfter=No
14	.	.	PUNCT	sf	_	13	punct	_	_

~~~


