---
layout: base
title:  'Statistics of acl in UD_Korean-GSD'
udver: '2'
---

## Treebank Statistics: UD_Korean-GSD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ko_gsd-dep-acl-relcl.html">acl:relcl</a></tt>.

9 nodes (0%) are attached to their parents as `acl`.

5 instances of `acl` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.88888888888889.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="ko_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (6; 67% instances), <tt><a href="ko_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ko_gsd-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="ko_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ko_gsd-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 acl	color:blue
1	'	'	PUNCT	SS	_	3	punct	_	SpaceAfter=No|Translit='|LTranslit='
2	살아있는	살+아+있+는	VERB	VV+EC+VX+ETM	_	3	acl	_	Translit=.sal.a.iss.neun|LTranslit=.sal+.a+.iss+.neun
3	아침	아침	NOUN	NNG	_	0	root	_	SpaceAfter=No|Translit=.a.chim|LTranslit=.a.chim
4	'	'	PUNCT	SS	_	3	punct	_	SpaceAfter=No|Translit='|LTranslit='
5	은	은	ADP	JX	_	3	case	_	Translit=.eun|LTranslit=.eun
6	블루베리맛과	블루베리맛+과	NOUN	NNP+JC	_	3	obl	_	Translit=.beul.ru.be.ri.mas.gwa|LTranslit=.beul.ru.be.ri.mas+.gwa
7	키위맛	키위맛	NOUN	NNP	_	6	conj	_	Translit=.ki.wi.mas|LTranslit=.ki.wi.mas
8	2종으로	2+종+으로	ADV	SN+NNG+JKB	_	6	flat	_	Translit=2.jong.eu.ro|LTranslit=2+.jong+.eu.ro
9	구성돼	구성+되+어	VERB	NNG+XSV+EC	_	3	appos	_	Translit=.gu.seong.dwae|LTranslit=.gu.seong+.doe+.eo
10	있다	있+다	VERB	VX+EF	_	3	flat	_	SpaceAfter=No|Translit=.iss.da|LTranslit=.iss+.da
11	.	.	PUNCT	SF	_	10	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 8 acl	color:blue
1	이	이	DET	MM	_	2	det	_	Translit=.i|LTranslit=.i
2	책에	책+에	ADV	NNG+JKB	_	3	obl	_	Translit=.chaeg.e|LTranslit=.chaeg+.e
3	의하면	의하+면	VERB	VV+EC	_	42	advcl	_	SpaceAfter=No|Translit=.yi.ha.myeon|LTranslit=.yi.ha+.myeon
4	,	,	PUNCT	SP	_	3	punct	_	Translit=,|LTranslit=,
5	이	이	DET	MM	_	6	det	_	Translit=.i|LTranslit=.i
6	세계는	세계+는	NOUN	NNG+JX	_	16	nsubj	_	Translit=.se.gye.neun|LTranslit=.se.gye+.neun
7	''	''	PUNCT	SS	_	6	punct	_	SpaceAfter=No|Translit=''|LTranslit=''
8	태시	태시	PROPN	NNP	_	15	acl	_	SpaceAfter=No|Translit=.tae.si|LTranslit=.tae.si
9	(	(	PUNCT	SS	_	10	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
10	太始	太始	SYM	SH	_	8	appos	_	SpaceAfter=No|Translit=tàishǐ|LTranslit=tàishǐ
11	)	)	PUNCT	SS	_	10	punct	_	SpaceAfter=No|Translit=)|LTranslit=)
12	``	``	PUNCT	SF	_	13	punct	_	SpaceAfter=No|Translit=``|LTranslit=``
13	라는	라+는	PART	JKQ+JX	_	8	case	_	Translit=.ra.neun|LTranslit=.ra+.neun
14	혼돈된	혼돈+되+ㄴ	ADJ	NNG+XSV+ETM	_	15	amod	_	Translit=.hon.don.doen|LTranslit=.hon.don+.doe+ㄴ
15	상태에서	상태+에서	ADV	NNG+JKB	_	16	advmod	_	Translit=.sang.tae.e.seo|LTranslit=.sang.tae+.e.seo
16	시작하여	시작+하+아	VERB	NNG+XSV+EC	_	19	advcl	_	SpaceAfter=No|Translit=.si.jag.ha.yeo|LTranslit=.si.jag+.ha+.a
17	,	,	PUNCT	SP	_	16	punct	_	Translit=,|LTranslit=,
18	변화를	변화+를	NOUN	NNG+JKO	_	19	obj	_	Translit=.byeon.hwa.reul|LTranslit=.byeon.hwa+.reul
19	거쳐	거치+어	VERB	VV+EC	_	21	advcl	_	Translit=.geo.chyeo|LTranslit=.geo.chi+.eo
20	우주가	우주+가	NOUN	NNG+JKS	_	21	nsubj	_	Translit=.u.ju.ga|LTranslit=.u.ju+.ga
21	되었고	되+었+고	VERB	VV+EP+EC	_	42	ccomp	_	Translit=.doe.eoss.go|LTranslit=.doe+.eoss+.go
22	우주는	우주+는	NOUN	NNG+JX	_	28	nsubj	_	Translit=.u.ju.neun|LTranslit=.u.ju+.neun
23	기	기	NOUN	NNG	_	28	obj	_	SpaceAfter=No|Translit=.gi|LTranslit=.gi
24	(	(	PUNCT	SS	_	25	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
25	氣	氣	SYM	SH	_	23	appos	_	SpaceAfter=No|Translit=qì|LTranslit=qì
26	)	)	PUNCT	SS	_	25	punct	_	SpaceAfter=No|Translit=)|LTranslit=)
27	를	를	ADP	JKO	_	23	obj	_	Translit=.reul|LTranslit=.reul
28	낳았으며	낳+았+으며	VERB	VV+EP+EC	_	21	conj	_	SpaceAfter=No|Translit=.nah.ass.eu.myeo|LTranslit=.nah+.ass+.eu.myeo
29	,	,	PUNCT	SP	_	35	punct	_	Translit=,|LTranslit=,
30	기가	기+가	NOUN	NNG+JKS	_	32	nsubj	_	Translit=.gi.ga|LTranslit=.gi+.ga
31	밝고	밝+고	VERB	VA+EC	_	33	acl:relcl	_	Translit=.barg.go|LTranslit=.barg+.go
32	가벼운	가볍+ㄴ	VERB	VA+ETM	_	31	conj	_	Translit=.ga.byeo.un|LTranslit=.ga.byeob+ㄴ
33	것이	것+이	NOUN	NNB+JKS	_	35	nsubj	_	Translit=.geos.i|LTranslit=.geos+.i
34	하늘을	하늘+을	NOUN	NNG+JKO	_	35	obj	_	Translit=.ha.neul.eul|LTranslit=.ha.neul+.eul
35	만들고	만들+고	VERB	VV+EC	_	21	conj	_	SpaceAfter=No|Translit=.man.deul.go|LTranslit=.man.deul+.go
36	,	,	PUNCT	SP	_	35	punct	_	Translit=,|LTranslit=,
37	무겁고	무겁+고	VERB	VA+EC	_	39	acl:relcl	_	Translit=.mu.geob.go|LTranslit=.mu.geob+.go
38	탁한	탁하+ㄴ	VERB	VA+ETM	_	37	conj	_	Translit=.tag.han|LTranslit=.tag.ha+ㄴ
39	것이	것+이	NOUN	NNB+JKS	_	41	nsubj	_	Translit=.geos.i|LTranslit=.geos+.i
40	땅을	땅+을	NOUN	NNG+JKO	_	41	obj	_	Translit=.ddang.eul|LTranslit=.ddang+.eul
41	이룬다고	이루+ㄴ다고	VERB	VV+EC	_	21	conj	_	Translit=.i.run.da.go|LTranslit=.i.ru+ㄴ.da.go
42	보았다	보+았+다	VERB	VX+EP+EF	_	0	root	_	SpaceAfter=No|Translit=.bo.ass.da|LTranslit=.bo+.ass+.da
43	.	.	PUNCT	SF	_	42	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 24 acl	color:blue
1	반면	반면	ADV	NNG	_	33	advmod	_	Translit=.ban.myeon|LTranslit=.ban.myeon
2	이대길	이대길	PROPN	NNP	_	16	nsubj	_	SpaceAfter=No|Translit=.i.dae.gil|LTranslit=.i.dae.gil
3	(	(	PUNCT	SS	_	4	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
4	장혁	장혁	PROPN	NNP	_	2	appos	_	Translit=.jang.hyeog|LTranslit=.jang.hyeog
5	분	분	NOUN	NNB	_	2	appos	_	SpaceAfter=No|Translit=.bun|LTranslit=.bun
6	)	)	PUNCT	SS	_	5	punct	_	SpaceAfter=No|Translit=)|LTranslit=)
7	과	과	CCONJ	JC	_	2	cc	_	Translit=.gwa|LTranslit=.gwa
8	송태하	송태하	PROPN	NNP	_	2	conj	_	SpaceAfter=No|Translit=.song.tae.ha|LTranslit=.song.tae.ha
9	(	(	PUNCT	SS	_	10	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
10	오지호	오지호	PROPN	NNP	_	8	appos	_	Translit=.o.ji.ho|LTranslit=.o.ji.ho
11	분	분	NOUN	NNG	_	8	appos	_	SpaceAfter=No|Translit=.bun|LTranslit=.bun
12	)	)	PUNCT	SS	_	11	punct	_	SpaceAfter=No|Translit=)|LTranslit=)
13	는	는	ADP	JX	_	8	case	_	Translit=.neun|LTranslit=.neun
14	역모죄로	역모+죄+로	ADV	NNG+NNG+JKB	_	16	obl	_	Translit=.yeog.mo.joe.ro|LTranslit=.yeog.mo+.joe+.ro
15	사형을	사형+을	NOUN	NNG+JKO	_	16	obj	_	Translit=.sa.hyeong.eul|LTranslit=.sa.hyeong+.eul
16	선고	선고	VERB	NNG	_	33	advcl	_	Translit=.seon.go|LTranslit=.seon.go
17	받고	받+고	VERB	VV+EC	_	16	flat	_	Translit=.bad.go|LTranslit=.bad+.go
18	원손을	원손+을	NOUN	NNG+JKO	_	19	obj	_	Translit=.weon.son.eul|LTranslit=.weon.son+.eul
19	모시고	모시+고	VERB	VV+EC	_	22	acl:relcl	_	Translit=.mo.si.go|LTranslit=.mo.si+.go
20	도망길에	도망+길+에	ADV	NNG+NNG+JKB	_	21	obl	_	Translit=.do.mang.gil.e|LTranslit=.do.mang+.gil+.e
21	오른	오르+ㄴ	VERB	VV+ETM	_	19	conj	_	Translit=.o.reun|LTranslit=.o.reu+ㄴ
22	혜원	혜원	PROPN	NNP	_	30	nmod	_	SpaceAfter=No|Translit=.hye.weon|LTranslit=.hye.weon
23	(	(	PUNCT	SS	_	24	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
24	이다해	이+다+하+아	VERB	VCP+EC+VX+EC	_	22	acl	_	Translit=.i.da.hae|LTranslit=.i+.da+.ha+.a
25	분	분	NOUN	NNG	_	22	appos	_	SpaceAfter=No|Translit=.bun|LTranslit=.bun
26	)	)	PUNCT	SS	_	25	punct	_	Translit=)|LTranslit=)
27	앞에	앞+에	ADP	NNG+JKB	_	22	case	_	Translit=.ap.e|LTranslit=.ap+.e
28	불안의	불안+의	NOUN	NNG+JKG	_	29	nmod:poss	_	Translit=.bul.an.yi|LTranslit=.bul.an+.yi
29	그림자가	그림자+가	NOUN	NNG+JKS	_	30	nsubj	_	Translit=.geu.rim.ja.ga|LTranslit=.geu.rim.ja+.ga
30	드리워지며	드리우+어+지+며	VERB	VV+EC+VX+EC	_	16	conj	_	Translit=.deu.ri.weo.ji.myeo|LTranslit=.deu.ri.u+.eo+.ji+.myeo
31	시청자들을	시청자+들+을	NOUN	NNG+XSN+JKO	_	33	obj	_	Translit=.si.cheong.ja.deul.eul|LTranslit=.si.cheong.ja+.deul+.eul
32	긴장케	긴장+하+게	ADV	NNG+XSV+EC	_	33	advmod	_	Translit=.gin.jang.ke|LTranslit=.gin.jang+.ha+.ge
33	했다	하+았+다	VERB	VX+EP+EF	_	0	root	_	SpaceAfter=No|Translit=.haess.da|LTranslit=.ha+.ass+.da
34	.	.	PUNCT	SF	_	33	punct	_	Translit=.|LTranslit=.

~~~


