---
layout: base
title:  'Statistics of obl:agent in UD_Chinese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="zh_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="zh_pud-dep-obl-patient.html">obl:patient</a></tt>, <tt><a href="zh_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

22 nodes (0%) are attached to their parents as `obl:agent`.

22 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.95454545454545.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt> (14; 64% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt> (4; 18% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 obl:agent	color:blue
1	這	_	DET	DT	_	2	det	_	SpaceAfter=No|Translit=zhè
2	項	_	NOUN	NNB	_	7	clf	_	SpaceAfter=No|Translit=xiàng
3	為期	_	VERB	VV	_	7	acl:relcl	_	SpaceAfter=No|Translit=wèiqī
4	10	_	NUM	CD	NumType=Card	5	nummod	_	SpaceAfter=No|Translit=10
5	週	_	NOUN	NNB	_	3	obj	_	SpaceAfter=No|Translit=週
6	的	_	PART	DEC	_	3	mark:rel	_	SpaceAfter=No|Translit=de
7	課程	_	NOUN	NN	_	15	nsubj:pass	_	SpaceAfter=No|Translit=kèchéng
8	已經	_	ADV	RB	_	15	advmod	_	SpaceAfter=No|Translit=yǐjīng
9	被	_	ADP	BB	Voice=Pass	12	case	_	SpaceAfter=No|Translit=bèi
10	英國	_	PROPN	NNP	_	12	compound	_	SpaceAfter=No|Translit=yīngguó
11	情報	_	NOUN	NN	_	12	compound	_	SpaceAfter=No|Translit=qíngbào
12	機構	_	NOUN	NN	_	15	obl:agent	_	SpaceAfter=No|Translit=jīgòu
13	GCHQ	_	X	FW	_	12	appos	_	Proper=True|SpaceAfter=No|Translit=GCHQ
14	“	_	PUNCT	``	_	15	punct	_	SpaceAfter=No|Translit=“
15	認證	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=rèn證
16	”	_	PUNCT	''	_	15	punct	_	SpaceAfter=No|Translit=”
17	了	_	PART	UH	_	15	discourse:sp	_	SpaceAfter=No|Translit=le
18	。	_	PUNCT	.	_	15	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 obl:agent	color:blue
1	據稱	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=jùchēng
2	提庇留	_	PROPN	NNP	_	19	nsubj:pass	_	SpaceAfter=No|Translit=tí庇liú
3	離開	_	VERB	VV	_	19	advcl	_	SpaceAfter=No|Translit=líkāi
4	後	_	ADP	IN	_	3	mark	_	SpaceAfter=No|Translit=後
5	感到	_	AUX	VV	_	6	cop	_	SpaceAfter=No|Translit=gǎndào
6	後悔	_	ADJ	JJ	_	19	advcl	_	SpaceAfter=No|Translit=後huǐ
7	，	_	PUNCT	,	_	6	punct	_	SpaceAfter=No|Translit=，
8	並	_	ADV	RB	_	11	advmod	_	SpaceAfter=No|Translit=並
9	數	_	NUM	CD	NumType=Card	10	nummod	_	SpaceAfter=No|Translit=shù
10	次	_	NOUN	NNB	_	11	advmod	_	SpaceAfter=No|Translit=cì
11	要求	_	VERB	VV	_	19	advcl	_	SpaceAfter=No|Translit=yàoqiú
12	返回	_	VERB	VV	_	11	xcomp	_	SpaceAfter=No|Translit=fǎnhuí
13	羅馬	_	PROPN	NNP	_	12	obj	_	SpaceAfter=No|Translit=羅mǎ
14	，	_	PUNCT	,	_	11	punct	_	SpaceAfter=No|Translit=，
15	但是	_	ADV	RB	_	19	advmod	_	SpaceAfter=No|Translit=dànshì
16	均	_	ADV	RB	_	19	advmod	_	SpaceAfter=No|Translit=jūn
17	被	_	ADP	BB	Voice=Pass	18	case	_	SpaceAfter=No|Translit=bèi
18	奧古斯都	_	PROPN	NNP	_	19	obl:agent	_	SpaceAfter=No|Translit=奧gǔsīdōu
19	拒絕	_	VERB	VV	_	1	ccomp	_	SpaceAfter=No|Translit=jùjué
20	。	_	PUNCT	.	_	1	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 obl:agent	color:blue
1	如果	_	ADP	IN	_	7	mark	_	SpaceAfter=No|Translit=rúguǒ
2	他	_	PRON	PRP	Person=3	5	nmod	_	SpaceAfter=No|Translit=tā
3	的	_	PART	DEC	Case=Gen	2	case	_	SpaceAfter=No|Translit=de
4	民主黨	_	NOUN	NN	_	5	compound	_	Proper=True|SpaceAfter=No|Translit=mínzhǔdǎng
5	對手	_	NOUN	NN	_	7	nsubj	_	SpaceAfter=No|Translit=duìshǒu
6	競選	_	AUX	VV	_	7	cop	_	SpaceAfter=No|Translit=jìngxuǎn
7	成功	_	ADJ	JJ	_	11	xcomp	_	SpaceAfter=No|Translit=chénggōng
8	了	_	PART	UH	_	7	discourse:sp	_	SpaceAfter=No|Translit=le
9	，	_	PUNCT	,	_	7	punct	_	SpaceAfter=No|Translit=，
10	他	_	PRON	PRP	Person=3	11	nsubj	_	SpaceAfter=No|Translit=tā
11	保證	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=bǎo證
12	她	_	PRON	PRP	Person=3	16	obl:agent	_	SpaceAfter=No|Translit=tā
13	會	_	AUX	MD	_	16	aux	_	SpaceAfter=No|Translit=huì
14	“	_	PUNCT	``	_	16	punct	_	SpaceAfter=No|Translit=“
15	被	_	ADP	BB	Voice=Pass	12	case:loc	_	SpaceAfter=No|Translit=bèi
16	調查	_	VERB	VV	_	11	ccomp	_	SpaceAfter=No|Translit=diàochá
17	很多	_	NUM	CD	NumType=Card	18	nummod	_	SpaceAfter=No|Translit=hěnduō
18	年	_	NOUN	NNB	_	16	obj	_	SpaceAfter=No|Translit=nián
19	”	_	PUNCT	''	_	16	punct	_	SpaceAfter=No|Translit=”
20	。	_	PUNCT	.	_	11	punct	_	Translit=。

~~~


