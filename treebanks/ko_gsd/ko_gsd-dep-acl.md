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
1	'	'	PUNCT	SS	_	3	punct	_	LTranslit='|SpaceAfter=No|Translit='
2	살아있는	살+아+있+는	VERB	VV+EC+VX+ETM	_	3	acl	_	LTranslit=.sal+.a+.iss+.neun|Translit=.sal.a.iss.neun
3	아침	아침	NOUN	NNG	_	0	root	_	LTranslit=.a.chim|SpaceAfter=No|Translit=.a.chim
4	'	'	PUNCT	SS	_	3	punct	_	LTranslit='|SpaceAfter=No|Translit='
5	은	은	ADP	JX	_	3	case	_	LTranslit=.eun|Translit=.eun
6	블루베리맛과	블루베리맛+과	NOUN	NNP+JC	_	3	obl	_	LTranslit=.beul.ru.be.ri.mas+.gwa|Translit=.beul.ru.be.ri.mas.gwa
7	키위맛	키위맛	NOUN	NNP	_	6	conj	_	LTranslit=.ki.wi.mas|Translit=.ki.wi.mas
8	2종으로	2+종+으로	ADV	SN+NNG+JKB	_	6	flat	_	LTranslit=2+.jong+.eu.ro|Translit=2.jong.eu.ro
9	구성돼	구성+되+어	VERB	NNG+XSV+EC	_	3	appos	_	LTranslit=.gu.seong+.doe+.eo|Translit=.gu.seong.dwae
10	있다	있+다	VERB	VX+EF	_	3	flat	_	LTranslit=.iss+.da|SpaceAfter=No|Translit=.iss.da
11	.	.	PUNCT	SF	_	10	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 8 acl	color:blue
1	이	이	DET	MM	PronType=Dem	2	det	_	LTranslit=.i|Translit=.i
2	책에	책+에	ADV	NNG+JKB	_	3	obl	_	LTranslit=.chaeg+.e|Translit=.chaeg.e
3	의하면	의하+면	VERB	VV+EC	_	42	advcl	_	LTranslit=.yi.ha+.myeon|SpaceAfter=No|Translit=.yi.ha.myeon
4	,	,	PUNCT	SP	_	3	punct	_	LTranslit=,|Translit=,
5	이	이	DET	MM	PronType=Dem	6	det	_	LTranslit=.i|Translit=.i
6	세계는	세계+는	NOUN	NNG+JX	_	16	nsubj	_	LTranslit=.se.gye+.neun|Translit=.se.gye.neun
7	''	''	PUNCT	SS	_	6	punct	_	LTranslit=''|SpaceAfter=No|Translit=''
8	태시	태시	PROPN	NNP	_	15	acl	_	LTranslit=.tae.si|SpaceAfter=No|Translit=.tae.si
9	(	(	PUNCT	SS	_	10	punct	_	LTranslit=(|SpaceAfter=No|Translit=(
10	太始	太始	SYM	SH	_	8	appos	_	LTranslit=tàishǐ|SpaceAfter=No|Translit=tàishǐ
11	)	)	PUNCT	SS	_	10	punct	_	LTranslit=)|SpaceAfter=No|Translit=)
12	``	``	PUNCT	SF	_	13	punct	_	LTranslit=``|SpaceAfter=No|Translit=``
13	라는	라+는	PART	JKQ+JX	_	8	case	_	LTranslit=.ra+.neun|Translit=.ra.neun
14	혼돈된	혼돈+되+ㄴ	ADJ	NNG+XSV+ETM	_	15	amod	_	LTranslit=.hon.don+.doe+ㄴ|Translit=.hon.don.doen
15	상태에서	상태+에서	ADV	NNG+JKB	_	16	advmod	_	LTranslit=.sang.tae+.e.seo|Translit=.sang.tae.e.seo
16	시작하여	시작+하+아	VERB	NNG+XSV+EC	_	19	advcl	_	LTranslit=.si.jag+.ha+.a|SpaceAfter=No|Translit=.si.jag.ha.yeo
17	,	,	PUNCT	SP	_	16	punct	_	LTranslit=,|Translit=,
18	변화를	변화+를	NOUN	NNG+JKO	_	19	obj	_	LTranslit=.byeon.hwa+.reul|Translit=.byeon.hwa.reul
19	거쳐	거치+어	VERB	VV+EC	_	21	advcl	_	LTranslit=.geo.chi+.eo|Translit=.geo.chyeo
20	우주가	우주+가	NOUN	NNG+JKS	_	21	nsubj	_	LTranslit=.u.ju+.ga|Translit=.u.ju.ga
21	되었고	되+었+고	VERB	VV+EP+EC	_	42	ccomp	_	LTranslit=.doe+.eoss+.go|Translit=.doe.eoss.go
22	우주는	우주+는	NOUN	NNG+JX	_	28	nsubj	_	LTranslit=.u.ju+.neun|Translit=.u.ju.neun
23	기	기	NOUN	NNG	_	28	obj	_	LTranslit=.gi|SpaceAfter=No|Translit=.gi
24	(	(	PUNCT	SS	_	25	punct	_	LTranslit=(|SpaceAfter=No|Translit=(
25	氣	氣	SYM	SH	_	23	appos	_	LTranslit=qì|SpaceAfter=No|Translit=qì
26	)	)	PUNCT	SS	_	25	punct	_	LTranslit=)|SpaceAfter=No|Translit=)
27	를	를	ADP	JKO	_	23	obj	_	LTranslit=.reul|Translit=.reul
28	낳았으며	낳+았+으며	VERB	VV+EP+EC	_	21	conj	_	LTranslit=.nah+.ass+.eu.myeo|SpaceAfter=No|Translit=.nah.ass.eu.myeo
29	,	,	PUNCT	SP	_	35	punct	_	LTranslit=,|Translit=,
30	기가	기+가	NOUN	NNG+JKS	_	32	nsubj	_	LTranslit=.gi+.ga|Translit=.gi.ga
31	밝고	밝+고	VERB	VA+EC	_	33	acl:relcl	_	LTranslit=.barg+.go|Translit=.barg.go
32	가벼운	가볍+ㄴ	VERB	VA+ETM	_	31	conj	_	LTranslit=.ga.byeob+ㄴ|Translit=.ga.byeo.un
33	것이	것+이	NOUN	NNB+JKS	_	35	nsubj	_	LTranslit=.geos+.i|Translit=.geos.i
34	하늘을	하늘+을	NOUN	NNG+JKO	_	35	obj	_	LTranslit=.ha.neul+.eul|Translit=.ha.neul.eul
35	만들고	만들+고	VERB	VV+EC	_	21	conj	_	LTranslit=.man.deul+.go|SpaceAfter=No|Translit=.man.deul.go
36	,	,	PUNCT	SP	_	35	punct	_	LTranslit=,|Translit=,
37	무겁고	무겁+고	VERB	VA+EC	_	39	acl:relcl	_	LTranslit=.mu.geob+.go|Translit=.mu.geob.go
38	탁한	탁하+ㄴ	VERB	VA+ETM	_	37	conj	_	LTranslit=.tag.ha+ㄴ|Translit=.tag.han
39	것이	것+이	NOUN	NNB+JKS	_	41	nsubj	_	LTranslit=.geos+.i|Translit=.geos.i
40	땅을	땅+을	NOUN	NNG+JKO	_	41	obj	_	LTranslit=.ddang+.eul|Translit=.ddang.eul
41	이룬다고	이루+ㄴ다고	VERB	VV+EC	_	21	conj	_	LTranslit=.i.ru+ㄴ.da.go|Translit=.i.run.da.go
42	보았다	보+았+다	VERB	VX+EP+EF	_	0	root	_	LTranslit=.bo+.ass+.da|SpaceAfter=No|Translit=.bo.ass.da
43	.	.	PUNCT	SF	_	42	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 24 acl	color:blue
1	반면	반면	ADV	NNG	_	33	advmod	_	LTranslit=.ban.myeon|Translit=.ban.myeon
2	이대길	이대길	PROPN	NNP	_	16	nsubj	_	LTranslit=.i.dae.gil|SpaceAfter=No|Translit=.i.dae.gil
3	(	(	PUNCT	SS	_	4	punct	_	LTranslit=(|SpaceAfter=No|Translit=(
4	장혁	장혁	PROPN	NNP	_	2	appos	_	LTranslit=.jang.hyeog|Translit=.jang.hyeog
5	분	분	NOUN	NNB	_	2	appos	_	LTranslit=.bun|SpaceAfter=No|Translit=.bun
6	)	)	PUNCT	SS	_	5	punct	_	LTranslit=)|SpaceAfter=No|Translit=)
7	과	과	CCONJ	JC	_	2	cc	_	LTranslit=.gwa|Translit=.gwa
8	송태하	송태하	PROPN	NNP	_	2	conj	_	LTranslit=.song.tae.ha|SpaceAfter=No|Translit=.song.tae.ha
9	(	(	PUNCT	SS	_	10	punct	_	LTranslit=(|SpaceAfter=No|Translit=(
10	오지호	오지호	PROPN	NNP	_	8	appos	_	LTranslit=.o.ji.ho|Translit=.o.ji.ho
11	분	분	NOUN	NNG	_	8	appos	_	LTranslit=.bun|SpaceAfter=No|Translit=.bun
12	)	)	PUNCT	SS	_	11	punct	_	LTranslit=)|SpaceAfter=No|Translit=)
13	는	는	ADP	JX	_	8	case	_	LTranslit=.neun|Translit=.neun
14	역모죄로	역모+죄+로	ADV	NNG+NNG+JKB	_	16	obl	_	LTranslit=.yeog.mo+.joe+.ro|Translit=.yeog.mo.joe.ro
15	사형을	사형+을	NOUN	NNG+JKO	_	16	obj	_	LTranslit=.sa.hyeong+.eul|Translit=.sa.hyeong.eul
16	선고	선고	VERB	NNG	_	33	advcl	_	LTranslit=.seon.go|Translit=.seon.go
17	받고	받+고	VERB	VV+EC	_	16	flat	_	LTranslit=.bad+.go|Translit=.bad.go
18	원손을	원손+을	NOUN	NNG+JKO	_	19	obj	_	LTranslit=.weon.son+.eul|Translit=.weon.son.eul
19	모시고	모시+고	VERB	VV+EC	_	22	acl:relcl	_	LTranslit=.mo.si+.go|Translit=.mo.si.go
20	도망길에	도망+길+에	ADV	NNG+NNG+JKB	_	21	obl	_	LTranslit=.do.mang+.gil+.e|Translit=.do.mang.gil.e
21	오른	오르+ㄴ	VERB	VV+ETM	_	19	conj	_	LTranslit=.o.reu+ㄴ|Translit=.o.reun
22	혜원	혜원	PROPN	NNP	_	30	nmod	_	LTranslit=.hye.weon|SpaceAfter=No|Translit=.hye.weon
23	(	(	PUNCT	SS	_	24	punct	_	LTranslit=(|SpaceAfter=No|Translit=(
24	이다해	이+다+하+아	VERB	VCP+EC+VX+EC	_	22	acl	_	LTranslit=.i+.da+.ha+.a|Translit=.i.da.hae
25	분	분	NOUN	NNG	_	22	appos	_	LTranslit=.bun|SpaceAfter=No|Translit=.bun
26	)	)	PUNCT	SS	_	25	punct	_	LTranslit=)|Translit=)
27	앞에	앞+에	ADP	NNG+JKB	_	22	case	_	LTranslit=.ap+.e|Translit=.ap.e
28	불안의	불안+의	NOUN	NNG+JKG	_	29	nmod:poss	_	LTranslit=.bul.an+.yi|Translit=.bul.an.yi
29	그림자가	그림자+가	NOUN	NNG+JKS	_	30	nsubj	_	LTranslit=.geu.rim.ja+.ga|Translit=.geu.rim.ja.ga
30	드리워지며	드리우+어+지+며	VERB	VV+EC+VX+EC	_	16	conj	_	LTranslit=.deu.ri.u+.eo+.ji+.myeo|Translit=.deu.ri.weo.ji.myeo
31	시청자들을	시청자+들+을	NOUN	NNG+XSN+JKO	_	33	obj	_	LTranslit=.si.cheong.ja+.deul+.eul|Translit=.si.cheong.ja.deul.eul
32	긴장케	긴장+하+게	ADV	NNG+XSV+EC	_	33	advmod	_	LTranslit=.gin.jang+.ha+.ge|Translit=.gin.jang.ke
33	했다	하+았+다	VERB	VX+EP+EF	_	0	root	_	LTranslit=.ha+.ass+.da|SpaceAfter=No|Translit=.haess.da
34	.	.	PUNCT	SF	_	33	punct	_	LTranslit=.|Translit=.

~~~


