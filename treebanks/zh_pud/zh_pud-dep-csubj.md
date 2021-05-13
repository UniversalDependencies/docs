---
layout: base
title:  'Statistics of csubj in UD_Chinese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PUD: Relations: `csubj`

This relation is universal.

72 nodes (0%) are attached to their parents as `csubj`.

72 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.41666666666667.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-VERB.html">VERB</a></tt> (35; 49% instances), <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-VERB.html">VERB</a></tt> (17; 24% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-VERB.html">VERB</a></tt> (10; 14% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt> (5; 7% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 csubj	color:blue
1	希拉里	_	PROPN	NNP	_	5	nmod	_	SpaceAfter=No|Translit=xīlālǐ
2	的	_	PART	DEC	Case=Gen	1	case	_	SpaceAfter=No|Translit=de
3	巨額	_	NOUN	NN	_	5	compound	_	SpaceAfter=No|Translit=jù'é
4	銀行	_	NOUN	NN	_	5	compound	_	SpaceAfter=No|Translit=yínxíng
5	帳戶	_	NOUN	NN	_	6	nsubj	_	SpaceAfter=No|Translit=zhànghù
6	使	_	VERB	VV	Voice=Cau	0	root	_	SpaceAfter=No|Translit=shǐ
7	政府	_	NOUN	NN	_	8	nsubj	_	SpaceAfter=No|Translit=zhèngfǔ
8	支出	_	VERB	VV	_	10	csubj	_	SpaceAfter=No|Translit=zhīchū
9	的	_	PART	DEC	_	8	mark:rel	_	SpaceAfter=No|Translit=de
10	突破	_	VERB	VV	_	6	ccomp	_	SpaceAfter=No|Translit=tūpò
11	了	_	PART	AS	Aspect=Perf	10	aux	_	SpaceAfter=No|Translit=le
12	新上限	_	NOUN	NN	_	10	obj	_	SpaceAfter=No|Translit=xīnshàngxiàn
13	。	_	PUNCT	.	_	6	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 csubj	color:blue
1	這	_	DET	DT	_	2	det	_	SpaceAfter=No|Translit=zhè
2	家	_	NOUN	NNB	_	4	clf	_	SpaceAfter=No|Translit=jiā
3	韓國	_	PROPN	NNP	_	4	compound	_	SpaceAfter=No|Translit=韓guó
4	公司	_	NOUN	NN	_	18	nsubj	_	SpaceAfter=No|Translit=gōngsī
5	最初	_	NOUN	NN	_	6	obl:tmod	_	SpaceAfter=No|Translit=zuìchū
6	以為	_	VERB	VV	_	18	advcl	_	SpaceAfter=No|Translit=yǐwèi
7	電池	_	NOUN	NN	_	8	nsubj	_	SpaceAfter=No|Translit=diànchí
8	故障	_	VERB	VV	_	11	csubj	_	SpaceAfter=No|Translit=gùzhàng
9	是	_	AUX	VC	_	11	cop	_	SpaceAfter=No|Translit=shì
10	罪魁	_	NOUN	NN	_	11	compound	_	SpaceAfter=No|Translit=zuì魁
11	禍首	_	NOUN	NN	_	6	ccomp	_	SpaceAfter=No|Translit=huòshǒu
12	，	_	PUNCT	,	_	6	punct	_	SpaceAfter=No|Translit=，
13	因而	_	ADV	RB	_	18	advmod	_	SpaceAfter=No|Translit=yīn'ér
14	替代	_	VERB	VV	_	18	advcl	_	SpaceAfter=No|Translit=tìdài
15	自己	_	PRON	PRD	_	17	nmod	_	SpaceAfter=No|Translit=zìjǐ
16	的	_	PART	DEC	Case=Gen	15	case	_	SpaceAfter=No|Translit=de
17	組件	_	NOUN	NN	_	14	obj	_	SpaceAfter=No|Translit=zǔjiàn
18	改用	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=gǎiyòng
19	第三	_	ADJ	CD	NumType=Ord	20	amod	_	SpaceAfter=No|Translit=dìsān
20	方	_	NOUN	NN	_	22	compound	_	SpaceAfter=No|Translit=fāng
21	電源	_	NOUN	NN	_	22	compound	_	SpaceAfter=No|Translit=diànyuán
22	單元	_	NOUN	NN	_	18	obj	_	SpaceAfter=No|Translit=dānyuán
23	。	_	PUNCT	.	_	18	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 6 csubj	color:blue
1	柏拉圖	_	PROPN	NNP	_	2	nsubj	_	SpaceAfter=No|Translit=bǎilātú
2	認為	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=rènwèi
3	，	_	PUNCT	,	_	13	punct	_	SpaceAfter=No|Translit=，
4	將	_	ADP	BB	Voice=Cau	5	case	_	SpaceAfter=No|Translit=jiāng
5	權力	_	NOUN	NN	_	6	obl:patient	_	SpaceAfter=No|Translit=quánlì
6	授予	_	VERB	VV	_	13	csubj	_	SpaceAfter=No|Translit=shòuyǔ
7	精心	_	ADV	RB	_	8	advmod	_	SpaceAfter=No|Translit=jīngxīn
8	培育	_	VERB	VV	_	10	acl:relcl	_	SpaceAfter=No|Translit=péiyù
9	的	_	PART	DEC	_	8	mark:rel	_	SpaceAfter=No|Translit=de
10	守護者們	_	VERB	VV	_	6	iobj	_	SpaceAfter=No|Translit=shǒuhùzhěmen
11	安全	_	AUX	JJ	_	13	cop	_	SpaceAfter=No|Translit='ānquán
12	得	_	PART	DEV	_	13	mark:prt	_	SpaceAfter=No|Translit=de
13	多	_	ADJ	JJ	_	2	ccomp	_	SpaceAfter=No|Translit=duō
14	。	_	PUNCT	.	_	2	punct	_	Translit=。

~~~


