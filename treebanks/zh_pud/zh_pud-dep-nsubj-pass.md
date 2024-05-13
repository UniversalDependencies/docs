---
layout: base
title:  'Statistics of nsubj:pass in UD_Chinese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="zh_pud-dep-nsubj.html">nsubj</a></tt>.

71 nodes (0%) are attached to their parents as `nsubj:pass`.

71 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.74647887323944.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt> (40; 56% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt> (12; 17% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-PRON.html">PRON</a></tt> (9; 13% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-VERB.html">VERB</a></tt> (8; 11% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-X.html">X</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 7 nsubj:pass	color:blue
1	這	這	DET	DT	_	2	det	_	SpaceAfter=No|Translit=zhè|LTranslit=zhè
2	項	項	NOUN	NNB	_	7	clf	_	SpaceAfter=No|Translit=xiàng|LTranslit=xiàng
3	為期	為	VERB	VV	_	7	acl:relcl	_	SpaceAfter=No|Translit=wèiqī|LTranslit=wèi
4	10	10	NUM	CD	NumType=Card	5	nummod	_	SpaceAfter=No|Translit=10|LTranslit=10
5	週	週	NOUN	NNB	_	3	obj	_	SpaceAfter=No|Translit=週|LTranslit=週
6	的	的	PART	DEC	_	3	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
7	課程	課程	NOUN	NN	_	15	nsubj:pass	_	SpaceAfter=No|Translit=kèchéng|LTranslit=kèchéng
8	已經	已經	ADV	RB	_	15	advmod	_	SpaceAfter=No|Translit=yǐjīng|LTranslit=yǐjīng
9	被	被	ADP	BB	Voice=Pass	12	case	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
10	英國	英國	PROPN	NNP	_	12	compound	_	SpaceAfter=No|Translit=yīngguó|LTranslit=yīngguó
11	情報	情報	NOUN	NN	_	12	compound	_	SpaceAfter=No|Translit=qíngbào|LTranslit=qíngbào
12	機構	機構	NOUN	NN	_	15	obl:agent	_	SpaceAfter=No|Translit=jīgòu|LTranslit=jīgòu
13	GCHQ	GCHQ	X	FW	_	12	appos	_	Proper=True|SpaceAfter=No|Translit=GCHQ|LTranslit=GCHQ
14	“	“	PUNCT	``	_	15	punct	_	SpaceAfter=No|Translit=“|LTranslit=“
15	認證	認證	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=rènzhèng|LTranslit=rènzhèng
16	”	”	PUNCT	''	_	15	punct	_	SpaceAfter=No|Translit=”|LTranslit=”
17	了	了	PART	UH	_	15	discourse:sp	_	SpaceAfter=No|Translit=le|LTranslit=le
18	。	。	PUNCT	.	_	15	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:pass	color:blue
1	溫特	溫特	PROPN	NNP	_	9	nsubj:pass	_	SpaceAfter=No|Translit=wēntè|LTranslit=wēntè
2	只	只	ADV	RB	_	3	advmod	_	SpaceAfter=No|Translit=zhǐ|LTranslit=zhǐ
3	出現	出現	VERB	VV	_	9	advcl	_	SpaceAfter=No|Translit=chūxiàn|LTranslit=chūxiàn
4	了	了	AUX	AS	Aspect=Perf	3	aux	_	SpaceAfter=No|Translit=le|LTranslit=le
5	一會	一會	NOUN	NN	_	3	obl:tmod	_	SpaceAfter=No|Translit=yīhuì|LTranslit=yīhuì
6	，	，	PUNCT	,	_	3	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
7	並且	並且	ADV	RB	_	9	advmod	_	SpaceAfter=No|Translit=bìngqiě|LTranslit=bìngqiě
8	被	被	AUX	BB	Voice=Pass	9	aux:pass	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
9	拍到	拍到	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=pāidào|LTranslit=pāidào
10	在	在	ADP	IN	_	11	mark	_	SpaceAfter=No|Translit=zài|LTranslit=zài
11	接受	接受	VERB	VV	_	14	xcomp	_	SpaceAfter=No|Translit=jiēshòu|LTranslit=jiēshòu
12	采訪	采訪	NOUN	NN	_	11	obj	_	SpaceAfter=No|Translit=cǎifǎng|LTranslit=cǎifǎng
13	前	前	ADP	IN	_	11	mark	_	SpaceAfter=No|Translit=qián|LTranslit=qián
14	戴上	戴上	VERB	VV	_	9	xcomp	_	SpaceAfter=No|Translit=dàishàng|LTranslit=dàishàng
15	了	了	AUX	AS	Aspect=Perf	14	aux	_	SpaceAfter=No|Translit=le|LTranslit=le
16	太陽	太陽	NOUN	NN	_	17	compound	_	SpaceAfter=No|Translit=tàiyáng|LTranslit=tàiyáng
17	眼鏡	眼鏡	NOUN	NN	_	14	obj	_	SpaceAfter=No|Translit=yǎnjìng|LTranslit=yǎnjìng
18	。	。	PUNCT	.	_	9	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	她	她	PRON	PRP	Person=3	4	nsubj:pass	_	SpaceAfter=No|Translit=tā|LTranslit=tā
2	還	還	ADV	RB	_	4	advmod	_	SpaceAfter=No|Translit=hái|LTranslit=hái
3	被	被	AUX	BB	Voice=Pass	4	aux:pass	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
4	指控	指控	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=zhǐkòng|LTranslit=zhǐkòng
5	試圖	試圖	VERB	VV	_	4	xcomp	_	SpaceAfter=No|Translit=shìtú|LTranslit=shìtú
6	殺死	殺死	VERB	VV	_	5	xcomp	_	SpaceAfter=No|Translit=shāsǐ|LTranslit=shāsǐ
7	她	她	PRON	PRP	Person=3	12	compound	_	SpaceAfter=No|Translit=tā|LTranslit=tā
8	兩	兩	NUM	CD	NumType=Card	9	nummod	_	SpaceAfter=No|Translit=liǎng|LTranslit=liǎng
9	歲	歲	NOUN	NNB	_	10	obl:tmod	_	SpaceAfter=No|Translit=suì|LTranslit=suì
10	大	大	ADJ	JJ	_	12	acl:relcl	_	SpaceAfter=No|Translit=dà|LTranslit=dà
11	的	的	PART	DEC	_	10	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
12	女兒	女兒	NOUN	NN	_	6	obj	_	SpaceAfter=No|Translit=nǚr|LTranslit=nǚr
13	。	。	PUNCT	.	_	4	punct	_	Translit=.|LTranslit=.

~~~


