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
1	柏拉圖	柏拉圖	PROPN	NNP	_	2	nsubj	_	SpaceAfter=No|Translit=bǎilātú|LTranslit=bǎilātú
2	認為	為	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=rènwèi|LTranslit=wèi
3	，	，	PUNCT	,	_	11	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
4	將	將	ADP	BB	Voice=Cau	5	case	_	SpaceAfter=No|Translit=jiāng|LTranslit=jiāng
5	權力	權力	NOUN	NN	_	6	obl:patient	_	SpaceAfter=No|Translit=quánlì|LTranslit=quánlì
6	授予	授予	VERB	VV	_	11	csubj	_	SpaceAfter=No|Translit=shòuyǔ|LTranslit=shòuyǔ
7	精心	精心	ADV	RB	_	8	advmod	_	SpaceAfter=No|Translit=jīngxīn|LTranslit=jīngxīn
8	培育	培育	VERB	VV	_	10	acl:relcl	_	SpaceAfter=No|Translit=péiyù|LTranslit=péiyù
9	的	的	PART	DEC	_	8	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
10	守護者們	守護者們	VERB	VV	_	6	iobj	_	SpaceAfter=No|Translit=shǒuhùzhěmen|LTranslit=shǒuhùzhěmen
11	安全	安全	VERB	JJ	_	2	ccomp	_	SpaceAfter=No|Translit='ānquán|LTranslit='ānquán
12	得	得	PART	DEV	_	11	mark:prt	_	SpaceAfter=No|Translit=de|LTranslit=de
13	多	多	ADJ	JJ	_	11	xcomp	_	SpaceAfter=No|Translit=duō|LTranslit=duō
14	。	。	PUNCT	.	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 obl:patient	color:blue
1	我	我	PRON	PRP	Person=1	6	nsubj	_	SpaceAfter=No|Translit=wǒ|LTranslit=wǒ
2	想	想	AUX	MD	_	6	aux	_	SpaceAfter=No|Translit=xiǎng|LTranslit=xiǎng
3	和	和	ADP	IN	_	4	case	_	SpaceAfter=No|Translit=hé|LTranslit=hé
4	他們	他	PRON	PRP	Number=Plur|Person=3	6	obl	_	SpaceAfter=No|Translit=tāmen|LTranslit=tā
5	一起	一起	NOUN	NN	_	6	obl	_	SpaceAfter=No|Translit=yīqǐ|LTranslit=yīqǐ
6	看	看	VERB	VV	_	20	dep	_	SpaceAfter=No|Translit=kàn|LTranslit=kàn
7	，	，	PUNCT	,	_	6	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
8	但	但	ADV	RB	_	20	advmod	_	SpaceAfter=No|Translit=dàn|LTranslit=dàn
9	他們	他	PRON	PRP	Number=Plur|Person=3	20	nsubj	_	SpaceAfter=No|Translit=tāmen|LTranslit=tā
10	最後	最後	NOUN	NN	_	20	obl:tmod	_	SpaceAfter=No|Translit=zuìhòu|LTranslit=zuìhòu
11	還是	還是	ADV	RB	_	20	advmod	_	SpaceAfter=No|Translit=háishì|LTranslit=háishì
12	決定	決定	VERB	VV	_	20	advcl	_	SpaceAfter=No|Translit=juédìng|LTranslit=juédìng
13	把	把	ADP	BB	Voice=Cau	14	case	_	SpaceAfter=No|Translit=bǎ|LTranslit=bǎ
14	我	我	PRON	PRP	Person=1	15	obl:patient	_	SpaceAfter=No|Translit=wǒ|LTranslit=wǒ
15	排除	排除	VERB	VV	_	12	xcomp	_	SpaceAfter=No|Translit=páichú|LTranslit=páichú
16	在	在	VERB	VV	_	15	mark:prt	_	SpaceAfter=No|Translit=zài|LTranslit=zài
17	外	外	NOUN	NN	_	15	obj	_	SpaceAfter=No|Translit=wài|LTranslit=wài
18	，	，	PUNCT	,	_	12	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
19	自己	自己	PRON	PRD	_	20	obl	_	SpaceAfter=No|Translit=zìjǐ|LTranslit=zìjǐ
20	看	看	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=kàn|LTranslit=kàn
21	了	了	PART	UH	_	20	discourse:sp	_	SpaceAfter=No|Translit=le|LTranslit=le
22	。	。	PUNCT	.	_	20	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:patient	color:blue
1	後來	後來	NOUN	NN	_	3	obl:tmod	_	SpaceAfter=No|Translit=hòulái|LTranslit=hòulái
2	奧古斯塔斯	奧古斯塔斯	PROPN	NNP	_	3	nsubj	_	SpaceAfter=No|Translit='àogǔsītǎsī|LTranslit='àogǔsītǎsī
3	建立	建立	VERB	VV	_	11	dep	_	SpaceAfter=No|Translit=jiànlì|LTranslit=jiànlì
4	了	了	AUX	AS	Aspect=Perf	3	aux	_	SpaceAfter=No|Translit=le|LTranslit=le
5	羅馬	羅馬	PROPN	NNP	_	6	compound	_	SpaceAfter=No|Translit=luómǎ|LTranslit=luómǎ
6	帝國	帝國	NOUN	NN	_	3	obj	_	Proper=True|SpaceAfter=No|Translit=dìguó|LTranslit=dìguó
7	，	，	PUNCT	,	_	3	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
8	羅馬人	羅馬人	PROPN	NNP	_	11	nsubj	_	SpaceAfter=No|Translit=luómǎrén|LTranslit=luómǎrén
9	把	把	ADP	BB	Voice=Cau	10	case	_	SpaceAfter=No|Translit=bǎ|LTranslit=bǎ
10	地中海	地中海	PROPN	NNP	_	11	obl:patient	_	SpaceAfter=No|Translit=dezhōnghǎi|LTranslit=dezhōnghǎi
11	稱	稱	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=chēng|LTranslit=chēng
12	為	為	VERB	VC	_	11	mark:prt	_	SpaceAfter=No|Translit=wèi|LTranslit=wèi
13	“	“	PUNCT	``	_	16	punct	_	SpaceAfter=No|Translit=“|LTranslit=“
14	我們	我	PRON	PRP	Number=Plur|Person=1	16	nmod	_	Proper=True|SpaceAfter=No|Translit=wǒmen|LTranslit=wǒ
15	的	的	PART	DEC	Case=Gen	14	case	_	Proper=True|SpaceAfter=No|Translit=de|LTranslit=de
16	海	海	NOUN	NN	_	11	obj	_	Proper=True|SpaceAfter=No|Translit=hǎi|LTranslit=hǎi
17	”	”	PUNCT	''	_	16	punct	_	SpaceAfter=No|Translit=”|LTranslit=”
18	(	(	PUNCT	(	_	19	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
19	Mare	Mare	X	FW	_	16	appos	_	Proper=True|Translit=Mare|LTranslit=Mare
20	Nostrum	Nostrum	X	FW	Foreign=Yes	19	flat	_	Proper=True|SpaceAfter=No|Translit=Nostrum|LTranslit=Nostrum
21	)	)	PUNCT	)	_	19	punct	_	SpaceAfter=No|Translit=)|LTranslit=)
22	。	。	PUNCT	.	_	11	punct	_	Translit=.|LTranslit=.

~~~


