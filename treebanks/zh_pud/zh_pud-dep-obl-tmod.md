---
layout: base
title:  'Statistics of obl:tmod in UD_Chinese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="zh_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="zh_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="zh_pud-dep-obl-patient.html">obl:patient</a></tt>.

214 nodes (1%) are attached to their parents as `obl:tmod`.

202 instances of `obl:tmod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.10280373831776.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt> (194; 91% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt> (9; 4% instances), <tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="zh_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:tmod	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 obl:tmod	color:blue
1	她	_	PRON	PRP	Person=3	4	nsubj:pass	_	SpaceAfter=No|Translit=tā
2	還	_	ADV	RB	_	4	advmod	_	SpaceAfter=No|Translit=hái
3	被	_	AUX	BB	Voice=Pass	4	aux:pass	_	SpaceAfter=No|Translit=bèi
4	指控	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=zhǐkòng
5	試圖	_	VERB	VV	_	4	xcomp	_	SpaceAfter=No|Translit=shìtú
6	殺死	_	VERB	VV	_	5	xcomp	_	SpaceAfter=No|Translit=shāsǐ
7	她	_	PRON	PRP	Person=3	12	compound	_	SpaceAfter=No|Translit=tā
8	兩	_	NUM	CD	NumType=Card	9	nummod	_	SpaceAfter=No|Translit=liǎng
9	歲	_	NOUN	NNB	_	10	obl:tmod	_	SpaceAfter=No|Translit=suì
10	大	_	ADJ	JJ	_	12	acl:relcl	_	SpaceAfter=No|Translit=dà
11	的	_	PART	DEC	_	10	mark:rel	_	SpaceAfter=No|Translit=de
12	女兒	_	NOUN	NN	_	6	obj	_	SpaceAfter=No|Translit=nǚr
13	。	_	PUNCT	.	_	4	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 2 obl:tmod	color:blue
1	2007	_	NUM	CD	NumType=Card	2	nummod	_	SpaceAfter=No|Translit=2007
2	年	_	NOUN	NNB	_	15	obl:tmod	_	SpaceAfter=No|Translit=nián
3	最	_	ADV	RB	_	4	advmod	_	SpaceAfter=No|Translit=zuì
4	成功	_	ADJ	JJ	_	6	amod	_	SpaceAfter=No|Translit=chénggōng
5	的	_	PART	DEC	_	4	mark:rel	_	SpaceAfter=No|Translit=de
6	電影	_	NOUN	NN	_	15	nsubj	_	SpaceAfter=No|Translit=diànyǐng
7	是	_	AUX	VC	_	15	cop	_	SpaceAfter=No|Translit=shì
8	由	_	VERB	VV	_	15	acl:relcl	_	SpaceAfter=No|Translit=yóu
9	亞尼斯	_	PROPN	NNP	_	12	nsubj	_	SpaceAfter=No|Translit=yà尼sī
10	·	_	PUNCT	/	_	11	punct	_	Proper=True|SpaceAfter=No|Translit=·
11	斯瑪拉迪斯	_	PROPN	NNP	_	9	flat:name	_	SpaceAfter=No|Translit=sī瑪lā迪sī
12	導演	_	VERB	VV	_	8	ccomp	_	SpaceAfter=No|Translit=dǎoyǎn
13	的	_	PART	DEC	_	8	mark:rel	_	SpaceAfter=No|Translit=de
14	《	_	PUNCT	(	_	15	punct	_	SpaceAfter=No|Translit=《
15	葛雷柯	_	PROPN	NNP	_	0	root	_	SpaceAfter=No|Translit=葛léi柯
16	》	_	PUNCT	)	_	15	punct	_	SpaceAfter=No|Translit=》
17	。	_	PUNCT	.	_	15	punct	_	Translit=。

~~~


