---
layout: base
title:  'Statistics of discourse in UD_Chinese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSD: Relations: `discourse`

This relation is universal.
There are 1 language-specific subtypes of `discourse`: <tt><a href="zh_gsd-dep-discourse-sp.html">discourse:sp</a></tt>.

188 nodes (0%) are attached to their parents as `discourse`.

187 instances of `discourse` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (141; 75% instances), <tt><a href="zh_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (35; 19% instances), <tt><a href="zh_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (8; 4% instances), <tt><a href="zh_gsd-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="zh_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_gsd-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 discourse	color:blue
1	但是	但是	ADV	RB	_	9	mark	_	SpaceAfter=No
2	迪士尼	迪士尼	PROPN	NNP	_	5	nmod	_	SpaceAfter=No
3	的	的	PART	DEC	Case=Gen	2	case	_	SpaceAfter=No
4	公主	公主	NOUN	NN	_	5	compound	_	SpaceAfter=No
5	們	們	PART	SFN	Number=Plur	9	nsubj	_	SpaceAfter=No
6	不會	不會	AUX	MD	_	9	aux	_	SpaceAfter=No
7	都	都	ADV	RB	_	9	mark	_	SpaceAfter=No
8	太	太	ADV	RB	_	9	advmod	_	SpaceAfter=No
9	侷限	侷限	VERB	VV	_	0	root	_	SpaceAfter=No
10	於	於	VERB	VV	_	9	mark	_	SpaceAfter=No
11	一	一	NUM	CD	NumType=Card	12	nummod	_	SpaceAfter=No
12	個	個	NOUN	NNB	_	13	clf	_	SpaceAfter=No
13	範圍	範圍	NOUN	NN	_	9	obj	_	SpaceAfter=No
14	之內	之內	ADP	IN	_	13	acl	_	SpaceAfter=No
15	了	了	PART	UH	_	9	discourse	_	SpaceAfter=No
16	嗎	嗎	PART	UH	PartType=Int	9	discourse:sp	_	SpaceAfter=No
17	？	？	PUNCT	.	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 discourse	color:blue
1	當	當	ADP	IN	_	6	case	_	SpaceAfter=No
2	《	《	PUNCT	(	_	3	punct	_	SpaceAfter=No
3	Game	Game	X	FW	_	6	nsubj	_	_
4	Informer	Informer	X	FW	_	3	flat:foreign	_	SpaceAfter=No
5	》	》	PUNCT	)	_	3	punct	_	SpaceAfter=No
6	提到	提到	VERB	VV	_	15	ccomp	_	SpaceAfter=No
7	遊戲	遊戲	NOUN	NN	_	8	nsubj	_	SpaceAfter=No
8	在	在	VERB	VV	_	12	acl:relcl	_	SpaceAfter=No
9	日本	日本	PROPN	NNP	_	8	obj	_	SpaceAfter=No
10	的	的	PART	DEC	_	8	mark:rel	_	SpaceAfter=No
11	知名	知名	ADJ	JJ	_	12	compound	_	SpaceAfter=No
12	度	度	PART	SFN	_	6	obj	_	SpaceAfter=No
13	時	時	ADP	IN	_	6	mark	_	SpaceAfter=No
14	甚至	甚至	ADV	RB	_	15	mark	_	SpaceAfter=No
15	說	說	VERB	VV	_	0	root	_	SpaceAfter=No
16	「	「	PUNCT	``	_	19	punct	_	SpaceAfter=No
17	四百萬	四百萬	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No
18	日本	日本	PROPN	NNP	_	19	compound	_	SpaceAfter=No
19	人	人	PART	SFN	_	21	nsubj	_	SpaceAfter=No
20	可能	可能	AUX	MD	_	21	aux	_	SpaceAfter=No
21	錯	錯	ADJ	JJ	_	15	ccomp	_	SpaceAfter=No
22	了	了	PART	UH	_	21	discourse	_	SpaceAfter=No
23	」	」	PUNCT	''	_	21	punct	_	SpaceAfter=No
24	。	。	PUNCT	.	_	15	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 discourse	color:blue
1	小風	小風	PROPN	NNP	_	2	nsubj	_	SpaceAfter=No
2	陷入	陷入	VERB	VV	_	0	root	_	SpaceAfter=No
3	了	了	AUX	AS	Aspect=Perf	2	aux	_	SpaceAfter=No
4	沒有	沒有	VERB	VV	_	7	acl:relcl	_	SpaceAfter=No
5	信心	信心	NOUN	NN	_	4	obj	_	SpaceAfter=No
6	的	的	PART	DEC	_	4	mark:rel	_	SpaceAfter=No
7	窘境	窘境	NOUN	NN	_	2	obj	_	SpaceAfter=No
8	，	，	PUNCT	,	_	2	punct	_	SpaceAfter=No
9	阿一	阿一	PROPN	NNP	_	10	nsubj	_	SpaceAfter=No
10	說	說	VERB	VV	_	2	parataxis	_	SpaceAfter=No
11	：	：	PUNCT	:	_	10	punct	_	SpaceAfter=No
12	「	「	PUNCT	``	_	25	punct	_	SpaceAfter=No
13	那	那	PRON	PRD	_	18	nsubj	_	SpaceAfter=No
14	也是	也是	AUX	VC	_	18	cop	_	SpaceAfter=No
15	你	你	PRON	PRP	Person=2	18	det	_	SpaceAfter=No
16	的	的	PART	DEC	Case=Gen	15	case	_	SpaceAfter=No
17	一	一	NUM	CD	NumType=Card	18	nummod	_	SpaceAfter=No
18	部份	部份	NOUN	NN	_	25	advcl	_	SpaceAfter=No
19	呀	呀	PART	UH	_	18	discourse	_	SpaceAfter=No
20	，	，	PUNCT	,	_	25	punct	_	SpaceAfter=No
21	所以	所以	ADV	RB	_	25	mark	_	SpaceAfter=No
22	，	，	PUNCT	,	_	25	punct	_	SpaceAfter=No
23	我	我	PRON	PRP	Person=1	25	nsubj	_	SpaceAfter=No
24	願意	願意	AUX	MD	_	25	aux	_	SpaceAfter=No
25	接受	接受	VERB	VV	_	10	obj	_	SpaceAfter=No
26	」	」	PUNCT	''	_	25	punct	_	SpaceAfter=No

~~~


