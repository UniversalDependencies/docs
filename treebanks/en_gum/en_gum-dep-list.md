---
layout: base
title:  'Statistics of list in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `list`

This relation is universal.

49 nodes (0%) are attached to their parents as `list`.

49 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.04081632653061.

The following 4 pairs of parts of speech are connected with `list`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (35; 71% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (12; 24% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 list	color:blue
1	A	A	PROPN	NNP	Number=Sing	0	root	0:root	Bridge=106<107|Discourse=elaboration:69->67:1|Entity=(organization-107-acc:inf-1-sgl|SpaceAfter=No|XML=<hi rend:::"bold"><ref><w>
2	-	-	PUNCT	HYPH	_	3	punct	3:punct	SpaceAfter=No
3	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	dep	1:dep	Entity=107)|XML=</w></ref></hi>
4	2470	2470	NUM	CD	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Entity=(place-108-new-2,3-sgl
5	Lemoine	Lemoine	PROPN	NNP	Number=Sing	6	compound	6:compound	_
6	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	1:list	Entity=108)|SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	10:punct	_
8	tel	telephone	NOUN	NN	Number=Sing	10	nsubj	10:nsubj	Entity=(abstract-109-new-1-coref)|SpaceAfter=No
9	:	:	PUNCT	:	_	8	punct	8:punct	_
10	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Discourse=elaboration:70->69:0|Entity=(abstract-109-giv:act-1,2,3-coref
11	201	201	NUM	CD	NumForm=Digit|NumType=Card	10	flat	10:flat	_
12	944-3737	944-3737	NUM	CD	NumForm=Word|NumType=Card	10	flat	10:flat	Entity=109)|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 list	color:blue
1	A	A	PROPN	NNP	Number=Sing	0	root	0:root	Bridge=106<107|Discourse=elaboration:69->67:1|Entity=(organization-107-acc:inf-1-sgl|SpaceAfter=No|XML=<hi rend:::"bold"><ref><w>
2	-	-	PUNCT	HYPH	_	3	punct	3:punct	SpaceAfter=No
3	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	dep	1:dep	Entity=107)|XML=</w></ref></hi>
4	2470	2470	NUM	CD	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Entity=(place-108-new-2,3-sgl
5	Lemoine	Lemoine	PROPN	NNP	Number=Sing	6	compound	6:compound	_
6	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	1:list	Entity=108)|SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	10:punct	_
8	tel	telephone	NOUN	NN	Number=Sing	10	nsubj	10:nsubj	Entity=(abstract-109-new-1-coref)|SpaceAfter=No
9	:	:	PUNCT	:	_	8	punct	8:punct	_
10	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Discourse=elaboration:70->69:0|Entity=(abstract-109-giv:act-1,2,3-coref
11	201	201	NUM	CD	NumForm=Digit|NumType=Card	10	flat	10:flat	_
12	944-3737	944-3737	NUM	CD	NumForm=Word|NumType=Card	10	flat	10:flat	Entity=109)|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 19 list	color:blue
1	Paseo	paseo	PROPN	NNP	Number=Sing	5	compound	5:compound	Discourse=joint_m:70->63:2|Entity=(place-126-new-1,2,3,4,5-coref(place-51-giv:inact-1,2,3-coref-Paseo_de_Montejo|XML=<ref><hi rend:::"bold">
2	de	de	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	Montejo	Montejo	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=(person-32-giv:inact-1-coref-Francisco_de_Montejo_the_Younger)51)
4	Information	Information	PROPN	NNP	Number=Sing	5	compound	5:compound	_
5	Module	Module	PROPN	NNP	Number=Sing	0	root	0:root	Entity=126)|XML=</hi></ref>
6	(	(	PUNCT	-LRB-	_	7	punct	7:punct	Discourse=restatement:71->70:0|SpaceAfter=No
7	Módulo	Módulo	X	FW	_	5	appos	5:appos	Entity=(place-126-giv:act-1,2,3,4,5,6,7-appos|XML=<ref><hi rend:::"italic">
8	de	de	X	FW	_	7	flat	7:flat	_
9	Información	Información	X	FW	_	7	flat	7:flat	_
10	Turística	Turística	X	FW	_	7	flat	7:flat	_
11	Paseo	paseo	X	FW	_	7	flat	7:flat	Entity=(place-51-giv:act-3-coref-Paseo_de_Montejo
12	de	de	X	FW	_	7	flat	7:flat	_
13	Montejo	Montejo	X	FW	_	7	flat	7:flat	Entity=(person-32-giv:act-1-coref-Francisco_de_Montejo_the_Younger)51)126)|SpaceAfter=No|XML=</hi></ref>
14	)	)	PUNCT	-RRB-	_	7	punct	7:punct	_
15	Ave	Ave	X	FW	_	1	list	1:list	Discourse=elaboration:72->70:1|Entity=(place-127-new-5-sgl(place-51-giv:act-1,2,3,4-coref-Paseo_de_Montejo|XML=<ref>
16	Paseo	paseo	X	FW	_	15	flat	15:flat	_
17	de	de	X	FW	_	15	flat	15:flat	_
18	Montejo	Montejo	X	FW	_	15	flat	15:flat	Entity=(person-32-giv:act-1-coref-Francisco_de_Montejo_the_Younger)51)
19	56A	56A	SYM	SYM	_	1	list	1:list	_
20	x	x	ADP	IN	_	21	case	21:case	_
21	33A	33A	SYM	SYM	_	19	nmod	19:nmod:by	Entity=127)|XML=</ref>
22	☎	☎	SYM	SYM	_	24	nsubj	24:nsubj	Entity=(abstract-128-new-3-sgl
23	+	+	SYM	SYM	_	24	dep	24:dep	XML=<ref>
24	529999204044	529999204044	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Entity=128)|XML=</ref>
25	e-mail	E-mail	NOUN	NN	Number=Sing	27	nsubj	27:nsubj	Entity=(abstract-102-giv:inact-1-coref)|SpaceAfter=No
26	:	:	PUNCT	:	_	25	punct	25:punct	_
27	turismo@merida.gob.mx	turismo@merida.gob.mx	PROPN	NNP	Number=Sing	1	list	1:list	Discourse=joint_m:73->72:0|Entity=(abstract-102-giv:act-1-coref)|SpaceAfter=No|XML=<ref></ref>
28	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


