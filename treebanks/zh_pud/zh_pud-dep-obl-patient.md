---
layout: base
title:  'Statistics of obl:patient in UD_Chinese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PUD: Relations: `obl:patient`

This relation is a language-specific subtype of <tt><a href="zh_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="zh_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="zh_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

39 nodes (0%) are attached to their parents as `obl:patient`.

38 instances of `obl:patient` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8974358974359.

The following 4 pairs of parts of speech are connected with `obl:patient`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt> (29; 74% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-PRON.html">PRON</a></tt> (6; 15% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-VERB.html">VERB</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:patient	color:blue
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


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 obl:patient	color:blue
1	我	_	PRON	PRP	Person=1	6	nsubj	_	SpaceAfter=No|Translit=wǒ
2	想	_	AUX	MD	_	6	aux	_	SpaceAfter=No|Translit=xiǎng
3	和	_	ADP	IN	_	4	case	_	SpaceAfter=No|Translit=hé
4	他們	_	PRON	PRP	Number=Plur|Person=3	6	obl	_	SpaceAfter=No|Translit=tāmen
5	一起	_	NOUN	NN	_	6	advmod	_	SpaceAfter=No|Translit=yīqǐ
6	看	_	VERB	VV	_	20	dep	_	SpaceAfter=No|Translit=kàn
7	，	_	PUNCT	,	_	6	punct	_	SpaceAfter=No|Translit=，
8	但	_	ADV	RB	_	20	advmod	_	SpaceAfter=No|Translit=dàn
9	他們	_	PRON	PRP	Number=Plur|Person=3	20	nsubj	_	SpaceAfter=No|Translit=tāmen
10	最後	_	NOUN	NN	_	20	obl:tmod	_	SpaceAfter=No|Translit=zuì後
11	還是	_	ADV	RB	_	20	advmod	_	SpaceAfter=No|Translit=háishì
12	決定	_	VERB	VV	_	20	advcl	_	SpaceAfter=No|Translit=juédìng
13	把	_	ADP	BB	Voice=Cau	14	case	_	SpaceAfter=No|Translit=bǎ
14	我	_	PRON	PRP	Person=1	15	obl:patient	_	SpaceAfter=No|Translit=wǒ
15	排除	_	VERB	VV	_	12	xcomp	_	SpaceAfter=No|Translit=páichú
16	在	_	VERB	VV	_	15	mark:prt	_	SpaceAfter=No|Translit=zài
17	外	_	NOUN	NN	_	16	obj	_	SpaceAfter=No|Translit=wài
18	，	_	PUNCT	,	_	12	punct	_	SpaceAfter=No|Translit=，
19	自己	_	PRON	PRD	_	20	advmod	_	SpaceAfter=No|Translit=zìjǐ
20	看	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=kàn
21	了	_	PART	UH	_	20	discourse:sp	_	SpaceAfter=No|Translit=le
22	。	_	PUNCT	.	_	20	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:patient	color:blue
1	後來	_	NOUN	NN	_	3	obl:tmod	_	SpaceAfter=No|Translit=後lái
2	奧古斯塔斯	_	PROPN	NNP	_	3	nsubj	_	SpaceAfter=No|Translit=奧gǔsītǎsī
3	建立	_	VERB	VV	_	11	dep	_	SpaceAfter=No|Translit=jiànlì
4	了	_	PART	AS	Aspect=Perf	3	aux	_	SpaceAfter=No|Translit=le
5	羅馬	_	PROPN	NNP	_	6	compound	_	SpaceAfter=No|Translit=羅mǎ
6	帝國	_	NOUN	NN	_	3	obj	_	Proper=True|SpaceAfter=No|Translit=dìguó
7	，	_	PUNCT	,	_	3	punct	_	SpaceAfter=No|Translit=，
8	羅馬人	_	PROPN	NNP	_	11	nsubj	_	SpaceAfter=No|Translit=羅mǎrén
9	把	_	ADP	BB	Voice=Cau	10	case	_	SpaceAfter=No|Translit=bǎ
10	地中海	_	PROPN	NNP	_	11	obl:patient	_	SpaceAfter=No|Translit=dezhōnghǎi
11	稱	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=chēng
12	為	_	VERB	VC	_	11	mark:prt	_	SpaceAfter=No|Translit=wèi
13	“	_	PUNCT	``	_	16	punct	_	SpaceAfter=No|Translit=“
14	我們	_	PRON	PRP	Number=Plur|Person=1	16	nmod	_	Proper=True|SpaceAfter=No|Translit=wǒmen
15	的	_	PART	DEC	Case=Gen	14	case	_	Proper=True|SpaceAfter=No|Translit=de
16	海	_	NOUN	NN	_	12	obj	_	Proper=True|SpaceAfter=No|Translit=hǎi
17	”	_	PUNCT	''	_	16	punct	_	SpaceAfter=No|Translit=”
18	(	_	PUNCT	(	_	19	punct	_	SpaceAfter=No|Translit=(
19	Mare	_	X	FW	_	16	appos	_	Proper=True|Translit=Mare
20	Nostrum	_	X	FW	Foreign=Yes	19	flat	_	Proper=True|SpaceAfter=No|Translit=Nostrum
21	)	_	PUNCT	)	_	19	punct	_	SpaceAfter=No|Translit=)
22	。	_	PUNCT	.	_	11	punct	_	Translit=。

~~~


