---
layout: base
title:  'Statistics of list in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `list`

This relation is universal.

49 nodes (0%) are attached to their parents as `list`.

49 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.83673469387755.

The following 4 pairs of parts of speech are connected with `list`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (35; 71% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (12; 24% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 list	color:blue
1	A-1	A-1	PROPN	NNP	Number=Sing	0	root	0:root	Bridge=organization-106<organization-107|Discourse=elaboration:69->67|Entity=(organization-107)
2	2470	2470	NUM	CD	NumForm=Digit|NumType=Card	3	nummod	3:nummod	Entity=(place-108
3	Lemoine	Lemoine	PROPN	NNP	Number=Sing	4	compound	4:compound	_
4	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	1:list	Entity=place-108)|SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	8:punct	_
6	tel	telephone	NOUN	NN	Number=Sing	8	nsubj	8:nsubj	Entity=(abstract-109)|SpaceAfter=No
7	:	:	PUNCT	:	_	6	punct	6:punct	_
8	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Discourse=elaboration:70->69|Entity=(abstract-109
9	201	201	NUM	CD	NumForm=Digit|NumType=Card	8	flat	8:flat	_
10	944-3737	944-3737	NUM	CD	NumForm=Word|NumType=Card	8	flat	8:flat	Entity=abstract-109)|SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 list	color:blue
1	A-1	A-1	PROPN	NNP	Number=Sing	0	root	0:root	Bridge=organization-106<organization-107|Discourse=elaboration:69->67|Entity=(organization-107)
2	2470	2470	NUM	CD	NumForm=Digit|NumType=Card	3	nummod	3:nummod	Entity=(place-108
3	Lemoine	Lemoine	PROPN	NNP	Number=Sing	4	compound	4:compound	_
4	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	1:list	Entity=place-108)|SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	8:punct	_
6	tel	telephone	NOUN	NN	Number=Sing	8	nsubj	8:nsubj	Entity=(abstract-109)|SpaceAfter=No
7	:	:	PUNCT	:	_	6	punct	6:punct	_
8	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Discourse=elaboration:70->69|Entity=(abstract-109
9	201	201	NUM	CD	NumForm=Digit|NumType=Card	8	flat	8:flat	_
10	944-3737	944-3737	NUM	CD	NumForm=Word|NumType=Card	8	flat	8:flat	Entity=abstract-109)|SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 19 list	color:blue
1	Paseo	paseo	PROPN	NNP	Number=Sing	5	compound	5:compound	Discourse=joint:70->63|Entity=(place-126(place-51-Paseo_de_Montejo
2	de	de	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	Montejo	Montejo	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=(person-32-Francisco_de_Montejo_the_Younger)place-51-Paseo_de_Montejo)
4	Information	Information	PROPN	NNP	Number=Sing	5	compound	5:compound	_
5	Module	Module	PROPN	NNP	Number=Sing	0	root	0:root	Entity=place-126)
6	(	(	PUNCT	-LRB-	_	7	punct	7:punct	Discourse=restatement:71->70|SpaceAfter=No
7	Módulo	Módulo	X	FW	_	5	appos	5:appos	Entity=(place-126
8	de	de	X	FW	_	7	flat	7:flat	_
9	Información	Información	X	FW	_	7	flat	7:flat	_
10	Turística	Turística	X	FW	_	7	flat	7:flat	_
11	Paseo	paseo	X	FW	_	7	flat	7:flat	Entity=(place-51-Paseo_de_Montejo
12	de	de	X	FW	_	7	flat	7:flat	_
13	Montejo	Montejo	X	FW	_	7	flat	7:flat	Entity=(person-32-Francisco_de_Montejo_the_Younger)place-126)place-51-Paseo_de_Montejo)|SpaceAfter=No
14	)	)	PUNCT	-RRB-	_	7	punct	7:punct	_
15	Ave	Ave	X	FW	_	1	list	1:list	Discourse=elaboration:72->70|Entity=(place-127(place-51-Paseo_de_Montejo
16	Paseo	paseo	X	FW	_	15	flat	15:flat	_
17	de	de	X	FW	_	15	flat	15:flat	_
18	Montejo	Montejo	X	FW	_	15	flat	15:flat	Entity=(person-32-Francisco_de_Montejo_the_Younger)place-51-Paseo_de_Montejo)
19	56A	56A	SYM	SYM	_	1	list	1:list	_
20	x	x	ADP	IN	_	21	case	21:case	_
21	33A	33A	SYM	SYM	_	19	nmod	19:nmod:by	Entity=place-127)
22	☎	☎	SYM	SYM	_	24	nsubj	24:nsubj	Entity=(abstract-128
23	+	+	SYM	SYM	_	24	dep	24:dep	_
24	529999204044	529999204044	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Entity=abstract-128)
25	e-mail	E-mail	NOUN	NN	Number=Sing	27	nsubj	27:nsubj	Entity=(abstract-102)|SpaceAfter=No
26	:	:	PUNCT	:	_	25	punct	25:punct	_
27	turismo@merida.gob.mx	turismo@merida.gob.mx	PROPN	NNP	Number=Sing	1	list	1:list	Discourse=joint:73->72|Entity=(abstract-102)|SpaceAfter=No
28	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


