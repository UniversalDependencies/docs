---
layout: base
title:  'Statistics of vocative in UD_Korean-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_Korean-LittlePrince: Relations: `vocative`

This relation is universal.

11 nodes (0%) are attached to their parents as `vocative`.

11 instances of `vocative` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.90909090909091.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_littleprince-pos-NOUN.html">NOUN</a></tt> (6; 55% instances), <tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_littleprince-pos-PRON.html">PRON</a></tt> (4; 36% instances), <tt><a href="ko_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	"	"	PUNCT	sl	_	2	punct	2:punct	SpaceAfter=No
2	아	_	NOUN	ncn	_	7	vocative	7:vocative	SpaceAfter=No|Translit=.a
3	!	!	PUNCT	sf	_	2	punct	2:punct	_
4	신하가	신하	NOUN	ncn+jcs	Case=Nom	7	nsubj	7:nsubj	LTranslit=.sin.ha|MSeg=신하-가|Translit=.sin.ha.ga
5	한	_	NUM	nnc	_	6	nummod	6:nummod	Translit=.han
6	명	_	NOUN	nbu	_	7	dep	7:dep	Translit=.myeong
7	왔구나	오	VERB	pvg+ep+ef	_	0	root	0:root	LTranslit=.o|MSeg=오-았-구나|SpaceAfter=No|Translit=.wass.gu.na
8	!	!	PUNCT	sf	_	7	punct	7:punct	SpaceAfter=No
9	"	"	PUNCT	sr	_	7	punct	7:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	"	"	PUNCT	sl	_	2	punct	2:punct	SpaceAfter=No
2	아	_	PRON	npp	_	6	vocative	6:vocative	SpaceAfter=No|Translit=.a
3	!	!	PUNCT	sf	_	2	punct	2:punct	_
4	그럼	_	CCONJ	maj	_	6	cc	6:cc	Translit=.geu.reom
5	잘	_	ADV	mag	_	6	advmod	6:advmod	Translit=.jal
6	됐네	되	VERB	pvg+ep+ef	_	0	root	0:root	LTranslit=.doe|MSeg=되-었-네|SpaceAfter=No|Translit=.dwaess.ne
7	!	!	PUNCT	sf	_	6	punct	6:punct	SpaceAfter=No
8	"	"	PUNCT	sr	_	6	punct	6:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 17 vocative	color:blue
1	나의	나	PRON	npp+jcm	Case=Gen	2	nmod	2:nmod	LTranslit=.na|MSeg=나-의|Translit=.na.yi
2	별이	별	NOUN	ncn+jcs	Case=Nom	13	nsubj	13:nsubj	LTranslit=.byeol|MSeg=별-이|Translit=.byeol.i
3	내가	내	PRON	npp+jcs	Case=Nom	6	nsubj	6:nsubj	LTranslit=.nae|MSeg=내-가|Translit=.nae.ga
4	작년	_	NOUN	ncn	_	5	compound	5:compound	Translit=.jag.nyeon
5	이맘때	_	NOUN	ncn	_	6	compound	6:compound	Translit=.i.mam.ddae
6	떨어져	떨어지	VERB	pvg+ecx	_	7	ccomp	7:ccomp	LTranslit=.ddeol.eo.ji|MSeg=떨어지-어|Translit=.ddeol.eo.jyeo
7	내린	내리	VERB	pvg+etm	_	9	acl	9:acl	LTranslit=.nae.ri|MSeg=내리-ㄴ|Translit=.nae.rin
8	그	_	DET	mmd	_	9	det	9:det	Translit=.geu
9	장소	_	NOUN	ncn	_	11	compound	11:compound	Translit=.jang.so
10	바로	_	ADV	mag	_	12	advmod	12:advmod	Translit=.ba.ro
11	위쪽에	위	ADV	ncn+xsn+jca	_	12	obl	12:obl	LTranslit=.wi|MSeg=위-쪽-에|Translit=.wi.jjog.e
12	있게	있	ADJ	paa+ecx	_	13	ccomp	13:ccomp	LTranslit=.iss|MSeg=있-게|Translit=.iss.ge
13	될거야	되	VERB	px+ef	Tense=Fut	39	parataxis	39:parataxis	LTranslit=.doe|MSeg=되-ㄹ거야|SpaceAfter=No|Translit=.doel.geo.ya
14	......	......	PUNCT	sf	_	13	punct	13:punct	_
15	"	"	PUNCT	sr	_	13	punct	13:punct	_
16	"	"	PUNCT	sr	_	32	punct	32:punct	SpaceAfter=No
17	얘	_	NOUN	ncn	_	32	vocative	32:vocative	SpaceAfter=No|Translit=.yae
18	,	,	PUNCT	sp	_	17	punct	17:punct	_
19	그	_	DET	mmd	_	20	det	20:det	Translit=.geu
20	뱀이니	뱀	SCONJ	ncn+jp+ecs	_	26	ccomp	26:ccomp	LTranslit=.baem|MSeg=뱀-이-니|SpaceAfter=No|Translit=.baem.i.ni
21	,	,	PUNCT	sp	_	20	punct	20:punct	_
22	만날	만나	VERB	pvg+etm	Tense=Fut	23	amod	23:amod	LTranslit=.man.na|MSeg=만나-ㄹ|Translit=.man.nal
23	약속이니	약속	SCONJ	ncn+jp+ecs	_	20	conj	20:conj	LTranslit=.yag.sog|MSeg=약속-이-니|SpaceAfter=No|Translit=.yag.sog.i.ni
24	,	,	PUNCT	sp	_	23	punct	23:punct	_
25	별이니	별	VERB	ncn+jp+ef	_	20	conj	20:conj	LTranslit=.byeol|MSeg=별-이-니|Translit=.byeol.i.ni
26	하는	하	VERB	pvg+etm	_	27	acl	27:acl	LTranslit=.ha|MSeg=하-는|Translit=.ha.neun
27	이야기는	이야기	NOUN	ncpa+jxt	Case=Nom	32	nsubj	32:nsubj	LTranslit=.i.ya.gi|MSeg=이야기-는|Translit=.i.ya.gi.neun
28	모두	_	ADV	mag	_	32	advmod	32:advmod	Translit=.mo.du
29	못된	못되	ADJ	paa+etm	_	31	amod	31:amod	LTranslit=.mos.doe|MSeg=못되-ㄴ|Translit=.mos.doen
30	꿈같은	꿈같	ADJ	paa+etm	_	31	amod	31:amod	LTranslit=.ggum.gat|MSeg=꿈같-ㄴ|Translit=.ggum.gat.eun
31	거	_	NOUN	nbn	_	32	obl	32:obl	Translit=.geo
32	아니니	아니	ADJ	paa+ef	_	39	parataxis	39:parataxis	LTranslit=.a.ni|MSeg=아니-니|SpaceAfter=No|Translit=.a.ni.ni
33	......	......	PUNCT	sf	_	32	punct	32:punct	_
34	"	"	PUNCT	sr	_	32	punct	32:punct	_
35	그러나	_	ADV	maj	_	39	advmod	39:advmod	Translit=.geu.reo.na
36	그는	그	PRON	npp+jxt	Case=Nom	39	dislocated	39:dislocated	LTranslit=.geu|MSeg=그-는|Translit=.geu.neun
37	내	_	PRON	npp	_	38	compound	38:compound	Translit=.nae
38	물음에	물음	ADV	ncn+jca	_	39	obl	39:obl	LTranslit=.mul.eum|MSeg=물음-에|Translit=.mul.eum.e
39	대답하지	대답	VERB	ncpa+xsv+ecx	_	0	root	0:root	LTranslit=.dae.dab|MSeg=대답-하-지|Translit=.dae.dab.ha.ji
40	않았다	_	AUX	px+ep+ef	_	39	aux	39:aux	SpaceAfter=No|Translit=.anh.ass.da
41	.	.	PUNCT	sf	_	40	punct	40:punct	SpaceAfter=No

~~~


