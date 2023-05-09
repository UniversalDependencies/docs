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
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 obl:agent	color:blue
1	據稱	據稱	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=jùchēng|LTranslit=jùchēng
2	提庇留	提庇留	PROPN	NNP	_	19	nsubj:pass	_	SpaceAfter=No|Translit=tí庇liú|LTranslit=tí庇liú
3	離開	離開	VERB	VV	_	19	advcl	_	SpaceAfter=No|Translit=líkāi|LTranslit=líkāi
4	後	後	ADP	IN	_	3	mark	_	SpaceAfter=No|Translit=hòu|LTranslit=hòu
5	感到	感到	VERB	VV	_	19	advcl	_	SpaceAfter=No|Translit=gǎndào|LTranslit=gǎndào
6	後悔	後悔	ADJ	JJ	_	5	xcomp	_	SpaceAfter=No|Translit=hòuhuǐ|LTranslit=hòuhuǐ
7	，	，	PUNCT	,	_	5	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
8	並	並	ADV	RB	_	11	advmod	_	SpaceAfter=No|Translit=bìng|LTranslit=bìng
9	數	數	NUM	CD	NumType=Card	10	nummod	_	SpaceAfter=No|Translit=shù|LTranslit=shù
10	次	次	NOUN	NNB	_	11	obl	_	SpaceAfter=No|Translit=cì|LTranslit=cì
11	要求	要求	VERB	VV	_	19	advcl	_	SpaceAfter=No|Translit=yàoqiú|LTranslit=yàoqiú
12	返回	返回	VERB	VV	_	11	xcomp	_	SpaceAfter=No|Translit=fǎnhuí|LTranslit=fǎnhuí
13	羅馬	羅馬	PROPN	NNP	_	12	obj	_	SpaceAfter=No|Translit=luómǎ|LTranslit=luómǎ
14	，	，	PUNCT	,	_	11	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
15	但是	但是	ADV	RB	_	19	advmod	_	SpaceAfter=No|Translit=dànshì|LTranslit=dànshì
16	均	均	ADV	RB	_	19	advmod	_	SpaceAfter=No|Translit=jūn|LTranslit=jūn
17	被	被	ADP	BB	Voice=Pass	18	case	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
18	奧古斯都	奧古斯都	PROPN	NNP	_	19	obl:agent	_	SpaceAfter=No|Translit='àogǔsīdōu|LTranslit='àogǔsīdōu
19	拒絕	拒絕	VERB	VV	_	1	ccomp	_	SpaceAfter=No|Translit=jùjué|LTranslit=jùjué
20	。	。	PUNCT	.	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 obl:agent	color:blue
1	如果	如果	ADP	IN	_	6	mark	_	SpaceAfter=No|Translit=rúguǒ|LTranslit=rúguǒ
2	他	他	PRON	PRP	Person=3	5	nmod	_	SpaceAfter=No|Translit=tā|LTranslit=tā
3	的	的	PART	DEC	Case=Gen	2	case	_	SpaceAfter=No|Translit=de|LTranslit=de
4	民主黨	民主黨	NOUN	NN	_	5	compound	_	Proper=True|SpaceAfter=No|Translit=mínzhǔdǎng|LTranslit=mínzhǔdǎng
5	對手	對手	NOUN	NN	_	6	nsubj	_	SpaceAfter=No|Translit=duìshǒu|LTranslit=duìshǒu
6	競選	競選	VERB	VV	_	11	xcomp	_	SpaceAfter=No|Translit=jìngxuǎn|LTranslit=jìngxuǎn
7	成功	成功	ADJ	JJ	_	6	xcomp	_	SpaceAfter=No|Translit=chénggōng|LTranslit=chénggōng
8	了	了	PART	UH	_	6	discourse:sp	_	SpaceAfter=No|Translit=le|LTranslit=le
9	，	，	PUNCT	,	_	6	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
10	他	他	PRON	PRP	Person=3	11	nsubj	_	SpaceAfter=No|Translit=tā|LTranslit=tā
11	保證	保證	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=bǎozhèng|LTranslit=bǎozhèng
12	她	她	PRON	PRP	Person=3	16	obl:agent	_	SpaceAfter=No|Translit=tā|LTranslit=tā
13	會	會	AUX	MD	_	16	aux	_	SpaceAfter=No|Translit=huì|LTranslit=huì
14	“	“	PUNCT	``	_	15	punct	_	SpaceAfter=No|Translit=“|LTranslit=“
15	被	被	ADP	BB	Voice=Pass	12	case:loc	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
16	調查	調查	VERB	VV	_	11	ccomp	_	SpaceAfter=No|Translit=diàochá|LTranslit=diàochá
17	很多	很多	NUM	CD	NumType=Card	18	nummod	_	SpaceAfter=No|Translit=hěnduō|LTranslit=hěnduō
18	年	年	NOUN	NNB	_	16	obj	_	SpaceAfter=No|Translit=nián|LTranslit=nián
19	”	”	PUNCT	''	_	16	punct	_	SpaceAfter=No|Translit=”|LTranslit=”
20	。	。	PUNCT	.	_	11	punct	_	Translit=.|LTranslit=.

~~~


