---
layout: base
title:  'Statistics of nsubj:pass in UD_Chinese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="zh_gsd-dep-nsubj.html">nsubj</a></tt>.

275 nodes (0%) are attached to their parents as `nsubj:pass`.

275 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.93454545454545.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-NOUN.html">NOUN</a></tt> (157; 57% instances), <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-PROPN.html">PROPN</a></tt> (60; 22% instances), <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (28; 10% instances), <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-PRON.html">PRON</a></tt> (27; 10% instances), <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 10 nsubj:pass	color:blue
1	市內	市內	NOUN	NN	_	4	nsubj	_	SpaceAfter=No|Translit=shìnèi|LTranslit=shìnèi
2	後來	後來	NOUN	NN	_	4	nmod:tmod	_	SpaceAfter=No|Translit=hòulái|LTranslit=hòulái
3	也	也	SCONJ	RB	_	4	mark	_	SpaceAfter=No|Translit=yě|LTranslit=yě
4	鋪設	鋪設	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=pùshè|LTranslit=pùshè
5	了	了	AUX	AS	Aspect=Perf	4	aux	_	SpaceAfter=No|Translit=le|LTranslit=le
6	有軌	有軌	NOUN	NN	_	8	nmod	_	SpaceAfter=No|Translit=yǒuguǐ|LTranslit=yǒuguǐ
7	電車	電車	NOUN	NN	_	8	nmod	_	SpaceAfter=No|Translit=diànchē|LTranslit=diànchē
8	系統	系統	NOUN	NN	_	4	obj	_	SpaceAfter=No|Translit=xìtǒng|LTranslit=xìtǒng
9	，	，	PUNCT	,	_	16	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
10	地段	地段	NOUN	NN	_	16	nsubj:pass	_	SpaceAfter=No|Translit=deduàn|LTranslit=deduàn
11	亦	亦	SCONJ	RB	_	16	mark	_	SpaceAfter=No|Translit=yì|LTranslit=yì
12	被	被	AUX	BB	Voice=Pass	16	aux:pass	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
13	投機	投機	VERB	VV	_	14	compound	_	SpaceAfter=No|Translit=tóujī|LTranslit=tóujī
14	者	者	PART	SFN	_	16	nsubj	_	SpaceAfter=No|Translit=zhě|LTranslit=zhě
15	所	所	SCONJ	RB	_	16	mark	_	SpaceAfter=No|Translit=suǒ|LTranslit=suǒ
16	覬覦	覬覦	VERB	VV	_	4	parataxis	_	SpaceAfter=No|Translit=覬覦|LTranslit=覬覦
17	。	。	PUNCT	.	_	4	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 4 nsubj:pass	color:blue
1	1355	1355	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No|Translit=1355|LTranslit=1355
2	年	年	NOUN	NNB	_	12	nmod:tmod	_	SpaceAfter=No|Translit=nián|LTranslit=nián
3	，	，	PUNCT	,	_	2	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
4	勃蘭登堡	勃蘭登堡	PROPN	NNP	_	12	nsubj:pass	_	SpaceAfter=No|Translit=bólándēngbǎo|LTranslit=bólándēngbǎo
5	被	被	AUX	BB	Voice=Pass	12	aux:pass	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
6	神聖	神聖	ADJ	JJ	_	8	amod	_	SpaceAfter=No|Translit=shénshèng|LTranslit=shénshèng
7	羅馬	羅馬	PROPN	NNP	_	8	nmod	_	SpaceAfter=No|Translit=luómǎ|LTranslit=luómǎ
8	帝國	帝國	NOUN	NN	_	9	nmod	_	SpaceAfter=No|Translit=dìguó|LTranslit=dìguó
9	皇帝	皇帝	NOUN	NN	_	12	nsubj	_	SpaceAfter=No|Translit=huángdì|LTranslit=huángdì
10	查理	查理	PROPN	NNP	_	9	appos	_	SpaceAfter=No|Translit=chálǐ|LTranslit=chálǐ
11	四世	四世	PROPN	NNP	_	10	flat:name	_	SpaceAfter=No|Translit=sìshì|LTranslit=sìshì
12	升	升	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=shēng|LTranslit=shēng
13	為	為	VERB	VC	_	12	mark	_	SpaceAfter=No|Translit=wèi|LTranslit=wèi
14	選侯	選侯	VERB	VV	_	15	compound	_	SpaceAfter=No|Translit=xuǎn侯|LTranslit=xuǎn侯
15	國	國	PART	SFN	_	12	obj	_	SpaceAfter=No|Translit=guó|LTranslit=guó
16	。	。	PUNCT	.	_	12	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj:pass	color:blue
1	數百萬	數百萬	NUM	CD	NumType=Card	4	nummod	_	SpaceAfter=No|Translit=shùbǎiwàn|LTranslit=shùbǎiwàn
2	的	的	PART	DEC	Case=Gen	1	case	_	SpaceAfter=No|Translit=de|LTranslit=de
3	巧克力	巧克力	NOUN	NN	_	4	compound	_	SpaceAfter=No|Translit=qiǎokèlì|LTranslit=qiǎokèlì
4	棒	棒	PART	SFN	_	6	nsubj:pass	_	SpaceAfter=No|Translit=bàng|LTranslit=bàng
5	被	被	AUX	BB	Voice=Pass	6	aux:pass	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
6	撤下	撤下	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=chèxià|LTranslit=chèxià
7	櫃檯	櫃檯	NOUN	NN	_	6	obj	_	SpaceAfter=No|Translit=櫃檯|LTranslit=櫃檯
8	，	，	PUNCT	,	_	12	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
9	而	而	SCONJ	RB	_	12	mark	_	SpaceAfter=No|Translit='ér|LTranslit='ér
10	瑪氏	瑪氏	PROPN	NNP	_	12	nsubj	_	SpaceAfter=No|Translit=mǎshì|LTranslit=mǎshì
11	則	則	SCONJ	RB	_	12	mark	_	SpaceAfter=No|Translit=zé|LTranslit=zé
12	中斷	中斷	VERB	VV	_	6	parataxis	_	SpaceAfter=No|Translit=zhōngduàn|LTranslit=zhōngduàn
13	了	了	AUX	AS	Aspect=Perf	12	aux	_	SpaceAfter=No|Translit=le|LTranslit=le
14	生產	生產	NOUN	NN	_	12	obj	_	SpaceAfter=No|Translit=shēngchǎn|LTranslit=shēngchǎn
15	，	，	PUNCT	,	_	18	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
16	公司	公司	NOUN	NN	_	17	nmod	_	SpaceAfter=No|Translit=gōngsī|LTranslit=gōngsī
17	損失	損失	NOUN	NN	_	18	nsubj	_	SpaceAfter=No|Translit=sǔnshī|LTranslit=sǔnshī
18	達	達	VERB	VV	_	6	parataxis	_	SpaceAfter=No|Translit=dá|LTranslit=dá
19	四百五十萬	四百五十萬	NUM	CD	NumType=Card	21	nummod	_	SpaceAfter=No|Translit=sìbǎiwǔshíwàn|LTranslit=sìbǎiwǔshíwàn
20	美	美	PROPN	NNP	_	21	nmod	_	SpaceAfter=No|Translit=měi|LTranslit=měi
21	元	元	NOUN	NNB	_	18	obj	_	SpaceAfter=No|Translit=yuán|LTranslit=yuán
22	。	。	PUNCT	.	_	6	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


