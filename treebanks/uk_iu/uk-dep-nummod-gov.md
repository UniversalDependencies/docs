---
layout: base
title:  'Statistics of nummod:gov in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="uk-dep-nummod.html">nummod</a></tt>.

291 nodes (0%) are attached to their parents as `nummod:gov`.

278 instances of `nummod:gov` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51546391752577.

The following 3 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-NUM.html">NUM</a></tt> (288; 99% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="uk-pos-DET.html">DET</a></tt>-<tt><a href="uk-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod:gov	color:blue
1	З	з	ADP	Spsg	Case=Gen	3	case	_	Id=12b4
2	того	той	DET	Pd--m-sga	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	Id=12b5
3	часу	час	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	obl	_	Id=12b6
4	минуло	минути	VERB	Vmeis-sn	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	Id=12b7
5	дев’ять	дев’ять	NUM	Mlc-n	Case=Nom|NumType=Card	6	nummod:gov	_	Id=12b8
6	років	рік	NOUN	Ncmpgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	nsubj	_	Id=12b9|SpaceAfter=No
7	.	.	PUNCT	U	_	4	punct	_	Id=12ba

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod:gov	color:blue
1	Четверо	четверо	NUM	Mlc-a	Case=Acc|NumType=Card	2	nummod:gov	_	Id=1z2i
2	малознайомих	малознайомий	ADJ	Ao--pgf	Case=Gen|Number=Plur	3	obj	_	Id=1z2j|Promoted=Yes
3	видалив	видалити	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	Id=1z2k|SpaceAfter=No
4	,	,	PUNCT	U	_	5	punct	_	Id=1z2l
5	лишив	лишити	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	conj	_	Id=1z2m
6	тільки	тільки	PART	Q	_	8	discourse	_	Id=1z2n
7	знайомих	знайомий	ADJ	Ao--pafy	Animacy=Anim|Case=Acc|Number=Plur	8	amod	_	Id=1z2o
8	улибанів	улибан	NOUN	Ncmpay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	5	obj	_	Id=1z2p|SpaceAfter=No
9	:)))	:)))	SYM	X	_	3	discourse	_	Id=1z2q

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod:gov	color:blue
1	Поруч	поруч	ADV	R	_	5	advmod	_	Id=0ywu
2	з	з	ADP	Spsi	Case=Ins	4	case	_	Id=0ywv
3	нашою	наш	DET	Ppp1f-sia	Case=Ins|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	det	_	Id=0yww
4	школою	школа	NOUN	Ncfsin	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	1	obl	_	Id=0ywx
5	було	бути	VERB	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	Id=0ywy
6	ще	ще	ADV	R	_	8	advmod	_	Id=0ywz
7	п’ять	п’ять	NUM	Mlc-n	Case=Nom|NumType=Card	8	nummod:gov	_	Id=0yx0
8	інших	інший	DET	Pi----pga	Case=Gen|Number=Plur|PronType=Ind	5	nsubj	_	Id=0yx1|Promoted=Yes|SpaceAfter=No
9	,	,	PUNCT	U	_	11	punct	_	Id=0yx2
10	найпростішою	найпростіший	ADJ	Afsfsif	Case=Ins|Degree=Sup|Gender=Fem|Number=Sing	11	amod	_	Id=0yx3
11	ознакою	ознака	NOUN	Ncfsin	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	5	parataxis	_	Id=0yx4
12	протистояння	протистояння	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	11	nmod	_	Id=0yx5
13	були	бути	AUX	Vapis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	11	cop	_	Id=0yx6
14	українські	український	NOUN	Ao-mpns	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	Id=0yx7|Promoted=Yes
15	проти	проти	ADP	Spsg	Case=Gen	16	case	_	Id=0yx8
16	російських	російський	NOUN	Ao-mpgf	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	14	obl	_	Id=0yx9|Promoted=Yes|SpaceAfter=No
17	.	.	PUNCT	U	_	5	punct	_	Id=0yxa

~~~


