---
layout: base
title:  'Statistics of nummod in UD_Chinese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PUD: Relations: `nummod`

This relation is universal.

809 nodes (4%) are attached to their parents as `nummod`.

792 instances of `nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14709517923362.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-NUM.html">NUM</a></tt> (791; 98% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="zh_pud-pos-X.html">X</a></tt>-<tt><a href="zh_pud-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="zh_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="zh_pud-pos-PART.html">PART</a></tt>-<tt><a href="zh_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="zh_pud-pos-PART.html">PART</a></tt>-<tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nummod	color:blue
1	最高	_	ADJ	JJ	_	2	amod	_	SpaceAfter=No|Translit=zuìgāo
2	限額	_	NOUN	NN	_	7	nsubj	_	SpaceAfter=No|Translit=xiàn'é
3	為	_	AUX	VC	_	7	cop	_	SpaceAfter=No|Translit=wèi
4	每人	_	NOUN	NN	_	7	compound	_	SpaceAfter=No|Translit=měirén
5	5,000	_	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No|Translit=5,000
6	美	_	PROPN	NNP	_	7	compound	_	SpaceAfter=No|Translit=měi
7	元	_	NOUN	NNB	_	0	root	_	Proper=True|SpaceAfter=No|Translit=yuán
8	。	_	PUNCT	.	_	7	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 nummod	color:blue
1	這	_	PRON	PRD	_	2	nsubj	_	SpaceAfter=No|Translit=zhè
2	意味	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=yìwèi
3	著	_	PART	AS	Aspect=Prog	2	aux	_	SpaceAfter=No|Translit=zhe
4	他們	_	PRON	PRP	Number=Plur|Person=3	18	nsubj	_	SpaceAfter=No|Translit=tāmen
5	不能	_	AUX	MD	_	18	aux	_	SpaceAfter=No|Translit=bùnéng
6	像	_	ADP	IN	_	8	case	_	SpaceAfter=No|Translit=xiàng
7	海外	_	NOUN	NN	_	8	compound	_	SpaceAfter=No|Translit=hǎiwài
8	資產	_	NOUN	NN	_	9	nmod	_	SpaceAfter=No|Translit=zīchǎn
9	一樣	_	ADJ	JJ	_	18	advcl	_	SpaceAfter=No|Translit=yīyàng
10	從	_	ADP	IN	_	13	mark	_	SpaceAfter=No|Translit=cóng
11	英	_	PROPN	NNP	_	12	nummod	_	SpaceAfter=No|Translit=yīng
12	鎊	_	PART	SFN	_	13	compound	_	Proper=True|SpaceAfter=No|Translit=鎊
13	貶值	_	VERB	VV	_	18	obl	_	SpaceAfter=No|Translit=貶zhí
14	這	_	DET	DT	_	13	det	_	SpaceAfter=No|Translit=zhè
15	一	_	NUM	CD	NumType=Card	13	nummod	_	SpaceAfter=No|Translit=yī
16	事件	_	NOUN	NN	_	13	appos	_	SpaceAfter=No|Translit=shìjiàn
17	中	_	ADP	IN	_	13	case:loc	_	SpaceAfter=No|Translit=zhōng
18	獲利	_	VERB	VV	_	2	ccomp	_	SpaceAfter=No|Translit=huòlì
19	。	_	PUNCT	.	_	2	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Mate	_	X	FW	_	3	compound	_	Proper=True|Translit=Mate
2	9	_	NUM	CD	NumType=Card	1	nummod	_	Proper=True|SpaceAfter=No|Translit=9
3	手機	_	NOUN	NN	_	4	nsubj	_	SpaceAfter=No|Translit=shǒujī
4	缺少	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=quēshǎo
5	一	_	NUM	CD	NumType=Card	6	nummod	_	SpaceAfter=No|Translit=yī
6	個	_	NOUN	NNB	_	18	clf	_	SpaceAfter=No|Translit=gè
7	像	_	VERB	VV	_	18	amod	_	SpaceAfter=No|Translit=xiàng
8	谷歌	_	PROPN	NNP	_	9	compound	_	SpaceAfter=No|Translit=gǔgē
9	助手	_	NOUN	NN	_	7	obl	_	Proper=True|SpaceAfter=No|Translit=zhùshǒu
10	或	_	CCONJ	CC	_	13	cc	_	SpaceAfter=No|Translit=huò
11	蘋果	_	NOUN	NN	_	13	nmod	_	Proper=True|SpaceAfter=No|Translit=píngguǒ
12	的	_	PART	DEC	Case=Gen	11	case	_	SpaceAfter=No|Translit=de
13	Siri	_	X	FW	_	9	conj	_	Proper=True|SpaceAfter=No|Translit=Siri
14	那樣	_	PRON	PRD	_	18	nmod	_	SpaceAfter=No|Translit=nàyàng
15	的	_	PART	DEC	Case=Gen	14	case	_	SpaceAfter=No|Translit=de
16	人工	_	NOUN	NN	_	18	compound	_	SpaceAfter=No|Translit=réngōng
17	智能	_	NOUN	NN	_	18	compound	_	SpaceAfter=No|Translit=zhìnéng
18	界面	_	NOUN	NN	_	4	obj	_	SpaceAfter=No|Translit=jièmiàn
19	。	_	PUNCT	.	_	4	punct	_	Translit=。

~~~


