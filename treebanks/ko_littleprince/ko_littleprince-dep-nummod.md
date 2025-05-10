---
layout: base
title:  'Statistics of nummod in UD_Korean-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_Korean-LittlePrince: Relations: `nummod`

This relation is universal.

152 nodes (1%) are attached to their parents as `nummod`.

151 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15131578947368.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="ko_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_littleprince-pos-NUM.html">NUM</a></tt> (99; 65% instances), <tt><a href="ko_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_littleprince-pos-NUM.html">NUM</a></tt> (33; 22% instances), <tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_littleprince-pos-NUM.html">NUM</a></tt> (15; 10% instances), <tt><a href="ko_littleprince-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ko_littleprince-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ko_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_littleprince-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ko_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="ko_littleprince-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ko_littleprince-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ko_littleprince-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	내	_	PRON	npp	_	2	compound	2:compound	Translit=.nae
2	나이	_	NOUN	ncn	_	4	compound	4:compound	Translit=.na.i
3	여섯	_	NUM	nnc	_	4	nummod	4:nummod	Translit=.yeo.seos
4	살	_	NOUN	nbu	_	5	compound	5:compound	Translit=.sal
5	적에	적	ADV	ncn+jca	_	15	advmod	15:advmod	LTranslit=.jeog|MSeg=적-에|SpaceAfter=No|Translit=.jeog.e
6	,	,	PUNCT	sp	_	5	punct	5:punct	_
7	한번은	번	NUM	nnc+nbu	_	8	compound	8:compound	LTranslit=.beon|MSeg=한-번-은|Translit=.han.beon.eun
8	체험담이라는	체험담	VERB	ncn+jp+etm	Mood=Imp|VerbForm=Fin	9	acl	9:acl	LTranslit=.che.heom.dam|MSeg=체험담-이-라는|Translit=.che.heom.dam.i.ra.neun
9	처녀림에	처녀림	ADV	ncn+jca	_	10	obl	10:obl	LTranslit=.cheo.nyeo.rim|MSeg=처녀림-에|Translit=.cheo.nyeo.rim.e
10	관한	관하	VERB	pvg+etm	_	11	acl	11:acl	LTranslit=.gwan.ha|MSeg=관하-ㄴ|Translit=.gwan.han
11	책에서	책	ADV	ncn+jca	_	15	advcl	15:advcl	LTranslit=.chaeg|MSeg=책-에서|Translit=.chaeg.e.seo
12	멋있는	멋있	ADJ	paa+etm	_	13	amod	13:amod	LTranslit=.meos.iss|MSeg=멋있-는|Translit=.meos.iss.neun
13	그림	_	NOUN	ncn	_	14	compound	14:compound	Translit=.geu.rim
14	하나를	하나	NUM	nnc+jco	_	15	obj	15:obj	LTranslit=.ha.na|MSeg=하나-를|Translit=.ha.na.reul
15	보았다	보	VERB	pvg+ep+ef	Mood=Ind|VerbForm=Fin	0	root	0:root	LTranslit=.bo|MSeg=보-았-다|SpaceAfter=No|Translit=.bo.ass.da
16	.	.	PUNCT	sf	_	15	punct	15:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	나는	나	PRON	npp+jxt	Case=Nom	12	dislocated	12:dislocated	LTranslit=.na|MSeg=나-는|Translit=.na.neun
2	이렇게	이렇	SCONJ	pad+ecs	_	3	xcomp	3:xcomp	LTranslit=.i.reoh|MSeg=이렇-게|Translit=.i.reoh.ge
3	해서	하	SCONJ	pvg+ecs	_	12	ccomp	12:ccomp	LTranslit=.ha|MSeg=하-어서|Translit=.hae.seo
4	내	_	PRON	npp	_	5	compound	5:compound	Translit=.nae
5	나이	_	NOUN	ncn	_	7	compound	7:compound	Translit=.na.i
6	여섯	_	NUM	nnc	_	7	nummod	7:nummod	Translit=.yeo.seos
7	살적에	살적	ADV	ncn+jca+jca	_	9	obl	9:obl	LTranslit=.sal.jeog|MSeg=살적-에|Translit=.sal.jeog.e
8	화가라고	화가	VERB	ncn+jp+ef+jcr	Mood=Imp|VerbForm=Fin	11	acl	11:acl	LTranslit=.hwa.ga|MSeg=화가-이-라-고|Translit=.hwa.ga.ra.go
9	하는	하	VERB	pvg+etm	_	8	conj	8:conj	LTranslit=.ha|MSeg=하-는|Translit=.ha.neun
10	멋있는	멋있	ADJ	paa+etm	_	11	amod	11:amod	LTranslit=.meos.iss|MSeg=멋있-는|Translit=.meos.iss.neun
11	작업을	작업	NOUN	ncpa+jco	Case=Acc	12	obj	12:obj	LTranslit=.jag.eob|MSeg=작업-을|Translit=.jag.eob.eul
12	포기했다	포기	VERB	ncpa+xsv+ep+ef	Mood=Ind|VerbForm=Fin	0	root	0:root	LTranslit=.po.gi|MSeg=포기-하-었-다|SpaceAfter=No|Translit=.po.gi.haess.da
13	.	.	PUNCT	sf	_	12	punct	12:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 nummod	color:blue
1	그는	그	PRON	npp+jxt	Case=Nom	16	dislocated	16:dislocated	LTranslit=.geu|MSeg=그-는|Translit=.geu.neun
2	조심스럽게	조심	SCONJ	ncps+xsm+ecs	_	3	xcomp	3:xcomp	LTranslit=.jo.sim|MSeg=조심-스럽-게|Translit=.jo.sim.seu.reob.ge
3	살펴보더니	살피	SCONJ	pvg+ecx+px+ecs	_	16	ccomp	16:ccomp	LTranslit=.sal.pi|MSeg=살피-어-보-더니|Translit=.sal.pyeo.bo.deo.ni
4	"	"	PUNCT	sl	_	5	punct	5:punct	SpaceAfter=No
5	아냐	알	VERB	pvg+jp+ef	_	16	ccomp	16:ccomp	LTranslit=.al|MSeg=알-냐|SpaceAfter=No|Translit=.a.nya
6	!	!	PUNCT	sf	_	5	punct	5:punct	_
7	이건	이거	PRON	npd+jxt	Case=Nom	16	dislocated	16:dislocated	LTranslit=.i.geo|MSeg=이거-ㄴ|Translit=.i.geon
8	벌써	_	ADV	mag	_	10	advmod	10:advmod	Translit=.beol.sseo
9	몹시	_	ADV	mag	_	8	advmod	8:advmod	Translit=.mob.si
10	병들었는	병색	VERB	pvg+ep+etm	_	11	acl	11:acl	LTranslit=.byeong.saeg|MSeg=병색-었-는|Translit=.byeong.deul.eoss.neun
11	걸	것	NOUN	nbn+jco	Case=Acc	16	obl	16:obl	LTranslit=.geos|MSeg=것-을|SpaceAfter=No|Translit=.geol
12	.	.	PUNCT	sf	_	11	punct	11:punct	_
13	다른	다르	ADJ	paa+etm	_	14	amod	14:amod	LTranslit=.da.reu|MSeg=다르-ㄴ|Translit=.da.reun
14	걸로	것	ADV	ncn+jca	_	16	advcl	16:advcl	LTranslit=.geos|MSeg=것-으로|Translit=.geol.ro
15	하나	_	NUM	nnc	_	16	nummod	16:nummod	Translit=.ha.na
16	그려	그리	VERB	pvg+ecx	_	0	root	0:root	LTranslit=.geu.ri|MSeg=그리-어|Translit=.geu.ryeo
17	줘	주	VERB	px+ef	_	16	compound	16:compound	LTranslit=.ju|MSeg=주-어|SpaceAfter=No|Translit=.jweo
18	!"	!"	PUNCT	sf	_	17	punct	17:punct	SpaceAfter=No

~~~


