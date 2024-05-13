---
layout: base
title:  'Statistics of discourse in UD_Chinese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSD: Relations: `discourse`

This relation is universal.
There are 1 language-specific subtypes of `discourse`: <tt><a href="zh_gsd-dep-discourse-sp.html">discourse:sp</a></tt>.

189 nodes (0%) are attached to their parents as `discourse`.

187 instances of `discourse` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.98412698412698.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (141; 75% instances), <tt><a href="zh_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (35; 19% instances), <tt><a href="zh_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (8; 4% instances), <tt><a href="zh_gsd-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="zh_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 discourse	color:blue
1	但是	但是	SCONJ	RB	_	9	mark	_	SpaceAfter=No|Translit=dànshì|LTranslit=dànshì
2	迪士尼	迪士尼	PROPN	NNP	_	5	nmod	_	SpaceAfter=No|Translit=díshìní|LTranslit=díshìní
3	的	的	PART	DEC	Case=Gen	2	case	_	SpaceAfter=No|Translit=de|LTranslit=de
4	公主	公主	NOUN	NN	_	5	compound	_	SpaceAfter=No|Translit=gōngzhǔ|LTranslit=gōngzhǔ
5	們	們	PART	SFN	Number=Plur	9	nsubj	_	SpaceAfter=No|Translit=men|LTranslit=men
6	不會	會	AUX	MD	Polarity=Neg	9	aux	_	SpaceAfter=No|Translit=bùhuì|LTranslit=huì
7	都	都	SCONJ	RB	_	9	mark	_	SpaceAfter=No|Translit=dōu|LTranslit=dōu
8	太	太	ADV	RB	_	9	advmod	_	SpaceAfter=No|Translit=tài|LTranslit=tài
9	侷限	侷限	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=侷xiàn|LTranslit=侷xiàn
10	於	於	VERB	VV	_	9	mark	_	SpaceAfter=No|Translit=yú|LTranslit=yú
11	一	一	NUM	CD	NumType=Card	13	nummod	_	SpaceAfter=No|Translit=yī|LTranslit=yī
12	個	個	NOUN	NNB	_	11	clf	_	SpaceAfter=No|Translit=gè|LTranslit=gè
13	範圍	範圍	NOUN	NN	_	9	obj	_	SpaceAfter=No|Translit=fànwéi|LTranslit=fànwéi
14	之內	之內	ADP	IN	_	13	case	_	SpaceAfter=No|Translit=zhīnèi|LTranslit=zhīnèi
15	了	了	PART	UH	_	9	discourse	_	SpaceAfter=No|Translit=le|LTranslit=le
16	嗎	嗎	PART	UH	PartType=Int	9	discourse:sp	_	SpaceAfter=No|Translit=ma|LTranslit=ma
17	？	？	PUNCT	.	_	9	punct	_	SpaceAfter=No|Translit=?|LTranslit=?

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 discourse	color:blue
1	當	當	ADP	IN	_	6	case	_	SpaceAfter=No|Translit=dāng|LTranslit=dāng
2	《	《	PUNCT	(	_	3	punct	_	SpaceAfter=No|Translit=«|LTranslit=«
3	Game	Game	X	FW	_	6	nsubj	_	Translit=Game|LTranslit=Game
4	Informer	Informer	X	FW	_	3	flat:foreign	_	SpaceAfter=No|Translit=Informer|LTranslit=Informer
5	》	》	PUNCT	)	_	3	punct	_	SpaceAfter=No|Translit=»|LTranslit=»
6	提到	提到	VERB	VV	_	15	ccomp	_	SpaceAfter=No|Translit=tídào|LTranslit=tídào
7	遊戲	遊戲	NOUN	NN	_	8	nsubj	_	SpaceAfter=No|Translit=yóuxì|LTranslit=yóuxì
8	在	在	VERB	VV	_	12	acl:relcl	_	SpaceAfter=No|Translit=zài|LTranslit=zài
9	日本	日本	PROPN	NNP	_	8	obj	_	SpaceAfter=No|Translit=rìběn|LTranslit=rìběn
10	的	的	SCONJ	DEC	_	8	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
11	知名	知名	ADJ	JJ	_	12	compound	_	SpaceAfter=No|Translit=zhīmíng|LTranslit=zhīmíng
12	度	度	PART	SFN	_	6	obj	_	SpaceAfter=No|Translit=dù|LTranslit=dù
13	時	時	ADP	IN	_	6	mark	_	SpaceAfter=No|Translit=shí|LTranslit=shí
14	甚至	甚至	SCONJ	RB	_	15	mark	_	SpaceAfter=No|Translit=shénzhì|LTranslit=shénzhì
15	說	說	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=shuō|LTranslit=shuō
16	「	「	PUNCT	``	_	21	punct	_	SpaceAfter=No|Translit=‘|LTranslit=‘
17	四百萬	四百萬	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No|Translit=sìbǎiwàn|LTranslit=sìbǎiwàn
18	日本	日本	PROPN	NNP	_	19	compound	_	SpaceAfter=No|Translit=rìběn|LTranslit=rìběn
19	人	人	PART	SFN	_	21	nsubj	_	SpaceAfter=No|Translit=rén|LTranslit=rén
20	可能	可能	AUX	MD	_	21	aux	_	SpaceAfter=No|Translit=kěnéng|LTranslit=kěnéng
21	錯	錯	ADJ	JJ	_	15	ccomp	_	SpaceAfter=No|Translit=cuò|LTranslit=cuò
22	了	了	PART	UH	_	21	discourse	_	SpaceAfter=No|Translit=le|LTranslit=le
23	」	」	PUNCT	''	_	21	punct	_	SpaceAfter=No|Translit=’|LTranslit=’
24	。	。	PUNCT	.	_	15	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 discourse	color:blue
1	小風	小風	PROPN	NNP	_	2	nsubj	_	SpaceAfter=No|Translit=xiǎofēng|LTranslit=xiǎofēng
2	陷入	陷入	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=xiànrù|LTranslit=xiànrù
3	了	了	AUX	AS	Aspect=Perf	2	aux	_	SpaceAfter=No|Translit=le|LTranslit=le
4	沒有	有	VERB	VV	Polarity=Neg	7	acl:relcl	_	SpaceAfter=No|Translit=méiyǒu|LTranslit=yǒu
5	信心	信心	NOUN	NN	_	4	obj	_	SpaceAfter=No|Translit=xìnxīn|LTranslit=xìnxīn
6	的	的	SCONJ	DEC	_	4	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
7	窘境	窘境	NOUN	NN	_	2	obj	_	SpaceAfter=No|Translit=窘jìng|LTranslit=窘jìng
8	，	，	PUNCT	,	_	10	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
9	阿一	阿一	PROPN	NNP	_	10	nsubj	_	SpaceAfter=No|Translit='āyī|LTranslit='āyī
10	說	說	VERB	VV	_	2	parataxis	_	SpaceAfter=No|Translit=shuō|LTranslit=shuō
11	：	：	PUNCT	:	_	25	punct	_	SpaceAfter=No|Translit=:|LTranslit=:
12	「	「	PUNCT	``	_	25	punct	_	SpaceAfter=No|Translit=‘|LTranslit=‘
13	那	那	PRON	PRD	_	18	nsubj	_	SpaceAfter=No|Translit=nà|LTranslit=nà
14	也是	是	AUX	VC	_	18	cop	_	SpaceAfter=No|Translit=yěshì|LTranslit=shì
15	你	你	PRON	PRP	Person=2	18	det	_	SpaceAfter=No|Translit=nǐ|LTranslit=nǐ
16	的	的	PART	DEC	Case=Gen	15	case	_	SpaceAfter=No|Translit=de|LTranslit=de
17	一	一	NUM	CD	NumType=Card	18	nummod	_	SpaceAfter=No|Translit=yī|LTranslit=yī
18	部份	部份	NOUN	NN	_	25	advcl	_	SpaceAfter=No|Translit=bùfèn|LTranslit=bùfèn
19	呀	呀	PART	UH	_	18	discourse	_	SpaceAfter=No|Translit=ya|LTranslit=ya
20	，	，	PUNCT	,	_	18	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
21	所以	所以	SCONJ	RB	_	25	mark	_	SpaceAfter=No|Translit=suǒyǐ|LTranslit=suǒyǐ
22	，	，	PUNCT	,	_	21	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
23	我	我	PRON	PRP	Person=1	25	nsubj	_	SpaceAfter=No|Translit=wǒ|LTranslit=wǒ
24	願意	願意	AUX	MD	_	25	aux	_	SpaceAfter=No|Translit=願yì|LTranslit=願yì
25	接受	接受	VERB	VV	_	10	obj	_	SpaceAfter=No|Translit=jiēshòu|LTranslit=jiēshòu
26	」	」	PUNCT	''	_	25	punct	_	SpaceAfter=No|Translit=’|LTranslit=’

~~~


