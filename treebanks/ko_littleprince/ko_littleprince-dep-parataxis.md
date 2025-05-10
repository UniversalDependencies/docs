---
layout: base
title:  'Statistics of parataxis in UD_Korean-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_Korean-LittlePrince: Relations: `parataxis`

This relation is universal.

11 nodes (0%) are attached to their parents as `parataxis`.

10 instances of `parataxis` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 11.7272727272727.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt> (5; 45% instances), <tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_littleprince-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="ko_littleprince-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="ko_littleprince-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ko_littleprince-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_littleprince-pos-ADJ.html">ADJ</a></tt> (1; 9% instances), <tt><a href="ko_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_littleprince-pos-ADV.html">ADV</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 parataxis	color:blue
1	아저씬	_	NOUN	ncn	_	4	nsubj	4:nsubj	Translit=.a.jeo.ssin
2	이제	_	ADV	mag	_	4	advmod	4:advmod	Translit=.i.je
3	집에	집	ADV	ncn+jca	_	4	obl	4:obl	LTranslit=.jib|MSeg=집-에|Translit=.jib.e
4	돌아가게	돌아가	VERB	pvg+ecx+px+ecx	_	11	parataxis	11:parataxis	LTranslit=.dol.a.ga|MSeg=돌아가-게|Translit=.dol.a.ga.ge
5	됐지	되	VERB	px+ep+ef	_	4	compound	4:compound	LTranslit=.doe|MSeg=되-었-지|SpaceAfter=No|Translit=.dwaess.ji
6	......	......	PUNCT	sf	_	4	punct	4:punct	_
7	"	"	PUNCT	sr	_	4	punct	4:punct	_
8	"	"	PUNCT	sr	_	11	punct	11:punct	SpaceAfter=No
9	그걸	그거	PRON	npd+jco	Case=Acc	11	obj	11:obj	LTranslit=.geu.geo|MSeg=그거-ㄹ|Translit=.geu.geol
10	어떻게	어떻	SCONJ	pad+ecs	_	11	xcomp	11:xcomp	LTranslit=.eo.ddeoh|MSeg=어떻-게|Translit=.eo.ddeoh.ge
11	알지	알	VERB	pvg+ef	_	0	root	0:root	LTranslit=.al|MSeg=알-지|SpaceAfter=No|Translit=.al.ji
12	?	?	PUNCT	sf	_	11	punct	11:punct	SpaceAfter=No
13	"	"	PUNCT	sr	_	11	punct	11:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 parataxis	color:blue
1	"	"	PUNCT	sl	_	5	punct	5:punct	SpaceAfter=No
2	그럼	_	ADV	maj	_	5	advmod	5:advmod	Translit=.geu.reom
3	아저씨	아저	NOUN	ncn+xsn	_	5	compound	5:compound	LTranslit=.a.jeo|MSeg=아저-씨|Translit=.a.jeo.ssi
4	생각으로는	생각	NOUN	ncpa+jca+jxt	Case=Nom	5	dislocated	5:dislocated	LTranslit=.saeng.gag|MSeg=생각-으로-는|Translit=.saeng.gag.eu.ro.neun
5	꽃들이	꽃	NOUN	ncn+xsn+jcs	Case=Nom	10	parataxis	10:parataxis	LTranslit=.ggoch|MSeg=꽃-들-이|SpaceAfter=No|Translit=.ggoch.deul.i
6	......	......	PUNCT	sf	_	5	punct	5:punct	_
7	"	"	PUNCT	sr	_	5	punct	5:punct	_
8	"	"	PUNCT	sr	_	10	punct	10:punct	SpaceAfter=No
9	그만해	_	ADP	jcs	_	10	case	10:case	Translit=.geu.man.hae
10	둬	두	VERB	pvg+ef	_	0	root	0:root	LTranslit=.du|MSeg=두-ㄴ|SpaceAfter=No|Translit=.dweo
11	!	!	PUNCT	sf	_	10	punct	10:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 26 parataxis	color:blue
1	너무나	_	ADV	mag	_	2	advmod	2:advmod	Translit=.neo.mu.na
2	순진하고	순진	CCONJ	ncps+xsm+ecc	_	0	root	0:root	LTranslit=.sun.jin|MSeg=순진-하-고|SpaceAfter=No|Translit=.sun.jin.ha.go
3	,	,	PUNCT	sp	_	14	punct	14:punct	_
4	쓸모	_	NOUN	ncn	_	5	dep	5:dep	Translit=.sseul.mo
5	없는	없	ADJ	paa+etm	_	7	amod	7:amod	LTranslit=.eobs|MSeg=없-는|Translit=.eobs.neun
6	네개의	네개	NOUN	ncn+jcm	Case=Gen	7	nmod	7:nmod	LTranslit=.ne.gae|MSeg=네개-의|Translit=.ne.gae.yi
7	가시를	가시	NOUN	ncn+jco	Case=Acc	8	obj	8:obj	LTranslit=.ga.si|MSeg=가시-를|Translit=.ga.si.reul
8	가지고	가지	CCONJ	pvg+ecc	_	14	advcl	14:advcl	LTranslit=.ga.ji|MSeg=가지-고|Translit=.ga.ji.go
9	외부	_	NOUN	ncn	_	10	compound	10:compound	Translit=.oe.bu
10	세계에	세계	ADV	ncn+jca	_	11	obl	11:obl	LTranslit=.se.gye|MSeg=세계-에|Translit=.se.gye.e
11	대해	대하	SCONJ	pvg+ecs	_	14	mark	14:mark	LTranslit=.dae.ha|MSeg=대하-어|Translit=.dae.hae
12	자기	_	PRON	npp	_	13	compound	13:compound	Translit=.ja.gi
13	몸을	몸	NOUN	ncn+jco	Case=Acc	14	obj	14:obj	LTranslit=.mom|MSeg=몸-을|Translit=.mom.eul
14	방어하려고	방어	VERB	ncpa+xsv+ecx	_	2	conj	2:conj	LTranslit=.bang.eo|MSeg=방어-하-려고|Translit=.bang.eo.ha.ryeo.go
15	하고	_	AUX	px+ef	_	14	aux	14:aux	SpaceAfter=No|Translit=.ha.go
16	......	......	PUNCT	sf	_	2	punct	2:punct	_
17	"	"	PUNCT	sr	_	2	punct	2:punct	_
18	나는	나	PRON	npp+jxt	Case=Nom	26	nsubj	26:nsubj	LTranslit=.na|MSeg=나-는|Translit=.na.neun
19	더	_	ADV	mag	_	20	advmod	20:advmod	Translit=.deo
20	이상	_	NOUN	ncn	_	21	dep	21:dep	Translit=.i.sang
21	서	서	VERB	pvg+ecx	_	26	ccomp	26:ccomp	LTranslit=.seo|MSeg=서-어|Translit=.seo
22	있을	_	AUX	px+etm	_	21	aux	21:aux	Translit=.iss.eul
23	수가	수	NOUN	nbn+jcs	Case=Nom|ExtPos=AUX	21	obl	21:obl	LTranslit=.su|MSeg=수-가|Translit=.su.ga
24	없어	없	SCONJ	paa+ecs	_	23	fixed	23:fixed	LTranslit=.eobs|MSeg=없-어|Translit=.eobs.eo
25	주저	_	ADV	mag	_	26	advmod	26:advmod	Translit=.ju.jeo
26	앉았다	앉	VERB	pvg+ep+ef	Mood=Ind|VerbForm=Fin	2	parataxis	2:parataxis	LTranslit=.anj|MSeg=앉-았-다|SpaceAfter=No|Translit=.anj.ass.da
27	.	.	PUNCT	sf	_	26	punct	26:punct	SpaceAfter=No

~~~


