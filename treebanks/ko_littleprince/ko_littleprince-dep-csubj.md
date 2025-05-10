---
layout: base
title:  'Statistics of csubj in UD_Korean-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_Korean-LittlePrince: Relations: `csubj`

This relation is universal.

26 nodes (0%) are attached to their parents as `csubj`.

26 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07692307692308.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_littleprince-pos-NOUN.html">NOUN</a></tt> (13; 50% instances), <tt><a href="ko_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_littleprince-pos-NOUN.html">NOUN</a></tt> (6; 23% instances), <tt><a href="ko_littleprince-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ko_littleprince-pos-NOUN.html">NOUN</a></tt> (6; 23% instances), <tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_littleprince-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 csubj	color:blue
1	내	_	PRON	npp	_	2	compound	2:compound	Translit=.nae
2	친구가	친구	NOUN	ncn+jcs	Case=Nom	5	nsubj	5:nsubj	LTranslit=.chin.gu|MSeg=친구-가|Translit=.chin.gu.ga
3	양을	양	NOUN	ncn+jco	Case=Acc	4	obj	4:obj	LTranslit=.yang|MSeg=양-을|Translit=.yang.eul
4	가지고	가지	CCONJ	pvg+ecc	_	6	acl	6:acl	LTranslit=.ga.ji|MSeg=가지-고|Translit=.ga.ji.go
5	떠난	떠나	VERB	pvg+etm	_	4	conj	4:conj	LTranslit=.ddeo.na|MSeg=떠나-ㄴ|Translit=.ddeo.nan
6	지도	_	NOUN	ncn	_	7	compound	7:compound	Translit=.ji.do
7	어언	_	NOUN	ncn	_	10	obl	10:obl	Translit=.eo.eon
8	육	_	NUM	nnc	_	9	nummod	9:nummod	Translit=.yug
9	년이	년	NOUN	nbu+jcs	Case=Nom	10	csubj	10:csubj	LTranslit=.nyeon|MSeg=년-이|Translit=.nyeon.i
10	되었다	되	VERB	pvg+ep+ef	Mood=Ind|VerbForm=Fin	0	root	0:root	LTranslit=.doe|MSeg=되-었-다|SpaceAfter=No|Translit=.doe.eoss.da
11	.	.	PUNCT	sf	_	10	punct	10:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	그렇다고	그렇	VERB	pad+ef+jcr	Mood=Ind|VerbForm=Fin	0	root	0:root	LTranslit=.geu.reoh|MSeg=그렇-다-고|Translit=.geu.reoh.da.go
2	내	_	PRON	npp	_	3	compound	3:compound	Translit=.nae
3	잘못이	잘못	NOUN	ncpa+jcc	_	4	csubj	4:csubj	LTranslit=.jal.mos|MSeg=잘못-이|Translit=.jal.mos.i
4	아니다	아니	ADJ	paa+ef	_	1	conj	1:conj	LTranslit=.a.ni|MSeg=아니-다|SpaceAfter=No|Translit=.a.ni.da
5	.	.	PUNCT	sf	_	4	punct	4:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	게다가	_	ADV	mag	_	4	advmod	4:advmod	Translit=.ge.da.ga
2	별이	별	NOUN	ncn+jcs	Case=Nom	4	csubj	4:csubj	LTranslit=.byeol|MSeg=별-이|Translit=.byeol.i
3	너무	_	ADV	mag	_	4	advmod	4:advmod	Translit=.neo.mu
4	작은데	작	SCONJ	paa+ecs	_	7	xcomp	7:xcomp	LTranslit=.jag|MSeg=작-ㄴ데|Translit=.jag.eun.de
5	바오밥나무가	바오밥나무	NOUN	ncn+jcs	Case=Nom	7	csubj	7:csubj	LTranslit=.ba.o.bab.na.mu|MSeg=바오밥나무-가|Translit=.ba.o.bab.na.mu.ga
6	너무	_	ADV	mag	_	7	advmod	7:advmod	Translit=.neo.mu
7	많으면	많	SCONJ	paa+ecs	_	10	xcomp	10:xcomp	LTranslit=.manh|MSeg=많-으면|Translit=.manh.eu.myeon
8	별이	별	NOUN	ncn+jcs	Case=Nom	10	nsubj	10:nsubj	LTranslit=.byeol|MSeg=별-이|Translit=.byeol.i
9	산산조각이	산산조각	ADV	ncn+ncn+jcs	_	10	compound:lvc	10:compound:lvc	LTranslit=.san.san.jo.gag|MSeg=산산조각-이|Translit=.san.san.jo.gag.i
10	나버리고	나버리	VERB	pvg+ecx+px+ecx	_	0	root	0:root	LTranslit=.na.beo.ri|MSeg=나버리-고|Translit=.na.beo.ri.go
11	마는	말	VERB	px+etm	_	10	compound	10:compound	LTranslit=.mal|MSeg=말-는|Translit=.ma.neun
12	것이다	것	VERB	nbn+jp+ef	Mood=Ind|VerbForm=Fin	10	advcl	10:advcl	LTranslit=.geos|MSeg=것-이-다|SpaceAfter=No|Translit=.geos.i.da
13	.	.	PUNCT	sf	_	12	punct	12:punct	SpaceAfter=No

~~~


