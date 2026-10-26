---
layout: base
title:  'Statistics of nsubj:pass in UD_Chinese-GSDSimp'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSDSimp: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="zh_gsdsimp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="zh_gsdsimp-dep-nsubj-outer.html">nsubj:outer</a></tt>.

277 nodes (0%) are attached to their parents as `nsubj:pass`.

277 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.92057761732852.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt> (159; 57% instances), <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-PROPN.html">PROPN</a></tt> (60; 22% instances), <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-PRON.html">PRON</a></tt> (29; 10% instances), <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt> (26; 9% instances), <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 10 nsubj:pass	color:blue
1	市内	市内	NOUN	NN	_	4	nsubj	_	SpaceAfter=No|Translit=shìnèi|LTranslit=shìnèi
2	后来	后来	NOUN	NN	_	4	nmod:tmod	_	SpaceAfter=No|Translit=hòulái|LTranslit=hòulái
3	也	也	SCONJ	RB	_	4	mark	_	SpaceAfter=No|Translit=yě|LTranslit=yě
4	铺设	铺设	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=pùshè|LTranslit=pùshè
5	了	了	AUX	AS	Aspect=Perf	4	aux	_	SpaceAfter=No|Translit=le|LTranslit=le
6	有轨	有轨	NOUN	NN	_	8	nmod	_	SpaceAfter=No|Translit=yǒuguǐ|LTranslit=yǒuguǐ
7	电车	电车	NOUN	NN	_	8	nmod	_	SpaceAfter=No|Translit=diànchē|LTranslit=diànchē
8	系统	系统	NOUN	NN	_	4	obj	_	SpaceAfter=No|Translit=xìtǒng|LTranslit=xìtǒng
9	，	，	PUNCT	,	_	16	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
10	地段	地段	NOUN	NN	_	16	nsubj:pass	_	SpaceAfter=No|Translit=deduàn|LTranslit=deduàn
11	亦	亦	SCONJ	RB	_	16	mark	_	SpaceAfter=No|Translit=yì|LTranslit=yì
12	被	被	AUX	BB	Voice=Pass	16	aux:pass	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
13	投机	投机	VERB	VV	_	14	compound	_	SpaceAfter=No|Translit=tóujī|LTranslit=tóujī
14	者	者	PART	SFN	_	16	obl:agent	_	SpaceAfter=No|Translit=zhě|LTranslit=zhě
15	所	所	SCONJ	RB	_	16	mark	_	SpaceAfter=No|Translit=suǒ|LTranslit=suǒ
16	觊觎	觊觎	VERB	VV	_	4	parataxis	_	SpaceAfter=No|Translit=觊觎|LTranslit=觊觎
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
4	勃兰登堡	勃兰登堡	PROPN	NNP	_	12	nsubj:pass	_	SpaceAfter=No|Translit=bólándēngbǎo|LTranslit=bólándēngbǎo
5	被	被	AUX	BB	Voice=Pass	12	aux:pass	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
6	神圣	神圣	ADJ	JJ	_	8	amod	_	SpaceAfter=No|Translit=shénshèng|LTranslit=shénshèng
7	罗马	罗马	PROPN	NNP	_	8	nmod	_	SpaceAfter=No|Translit=luōmǎ|LTranslit=luōmǎ
8	帝国	帝国	NOUN	NN	_	9	nmod	_	SpaceAfter=No|Translit=dìguó|LTranslit=dìguó
9	皇帝	皇帝	NOUN	NN	_	12	obl:agent	_	SpaceAfter=No|Translit=huángdì|LTranslit=huángdì
10	查理	查理	PROPN	NNP	_	9	appos	_	SpaceAfter=No|Translit=chálǐ|LTranslit=chálǐ
11	四世	四世	PROPN	NNP	_	10	flat:name	_	SpaceAfter=No|Translit=sìshì|LTranslit=sìshì
12	升	升	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=shēng|LTranslit=shēng
13	为	为	VERB	VC	_	12	mark	_	SpaceAfter=No|Translit=wèi|LTranslit=wèi
14	选侯	选侯	VERB	VV	_	15	compound	_	SpaceAfter=No|Translit=xuǎn侯|LTranslit=xuǎn侯
15	国	国	PART	SFN	_	12	obj	_	SpaceAfter=No|Translit=guó|LTranslit=guó
16	。	。	PUNCT	.	_	12	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 14 nsubj:pass	color:blue
1	吴	吴	PROPN	NNP	_	3	nmod	_	SpaceAfter=No|Translit=吴|LTranslit=吴
2	之	之	PART	DEC	Case=Gen	1	case	_	SpaceAfter=No|Translit=zhī|LTranslit=zhī
3	父亲	父亲	NOUN	NN	_	6	nsubj	_	SpaceAfter=No|Translit=fùqīn|LTranslit=fùqīn
4	将	将	ADP	BB	_	5	case	_	SpaceAfter=No|Translit=jiāng|LTranslit=jiāng
5	其	其	PRON	PRP	Person=3	6	obl:patient	_	SpaceAfter=No|Translit=qí|LTranslit=qí
6	送往	送往	VERB	VV	_	10	advcl	_	SpaceAfter=No|Translit=sòngwǎng|LTranslit=sòngwǎng
7	英国	英国	PROPN	NNP	_	9	nmod	_	SpaceAfter=No|Translit=yīngguó|LTranslit=yīngguó
8	寄宿	寄宿	NOUN	NN	_	9	nmod	_	SpaceAfter=No|Translit=jìsù|LTranslit=jìsù
9	学校	学校	NOUN	NN	_	6	iobj	_	SpaceAfter=No|Translit=xuéxiào|LTranslit=xuéxiào
10	读	读	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=dú|LTranslit=dú
11	高中	高中	NOUN	NN	_	10	obj	_	SpaceAfter=No|Translit=gāozhōng|LTranslit=gāozhōng
12	，	，	PUNCT	,	_	21	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
13	但	但	SCONJ	RB	_	21	mark	_	SpaceAfter=No|Translit=dàn|LTranslit=dàn
14	他	他	PRON	PRP	Person=3	21	nsubj:pass	_	SpaceAfter=No|Translit=tā|LTranslit=tā
15	又	又	SCONJ	RB	_	21	mark	_	SpaceAfter=No|Translit=yòu|LTranslit=yòu
16	因	因	ADP	IN	_	17	case	_	SpaceAfter=No|Translit=yīn|LTranslit=yīn
17	偷窃	偷窃	VERB	VV	_	21	xcomp	_	SpaceAfter=No|Translit=tōuqiè|LTranslit=tōuqiè
18	而	而	SCONJ	RB	_	21	mark	_	SpaceAfter=No|Translit='ér|LTranslit='ér
19	被	被	AUX	BB	Voice=Pass	21	aux:pass	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
20	学校	学校	NOUN	NN	_	21	obl:agent	_	SpaceAfter=No|Translit=xuéxiào|LTranslit=xuéxiào
21	开除	开除	VERB	VV	_	10	parataxis	_	SpaceAfter=No|Translit=kāichú|LTranslit=kāichú
22	。	。	PUNCT	.	_	10	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


