---
layout: base
title:  'Statistics of det:nummod in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="uk-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="uk-dep-det-numgov.html">det:numgov</a></tt>.

29 nodes (0%) are attached to their parents as `det:nummod`.

29 instances of `det:nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37931034482759.

The following 2 pairs of parts of speech are connected with `det:nummod`: <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (28; 97% instances), <tt><a href="uk-pos-X.html">X</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det:nummod	color:blue
1	Кількість	кількість	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	Id=2d5n
2	таких	такий	DET	Pd----pga	Case=Gen|Number=Plur|PronType=Dem	3	det	_	Id=2d5o
3	утворень	утворення	NOUN	Ncnpgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	1	nmod	_	Id=2d5p
4	може	могти	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=2d5q
5	коливатись	коливатися	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	4	xcomp	_	Id=2d5r
6	від	від	ADP	Spsg	Case=Gen	7	case	_	Id=2d5s
7	1	1	NUM	Mlcmsg	Case=Gen|Gender=Masc|NumType=Card|Uninflect=Yes	5	obl	_	Id=2d5t|SpaceAfter=No
8	-	-	PUNCT	U	PunctType=Ndash	9	punct	_	Id=2d5u|SpaceAfter=No
9	10	10	NUM	Mlc-g	Case=Gen|NumType=Card|Uninflect=Yes	7	conj	_	Id=2d5v
10	до	до	ADP	Spsg	Case=Gen	12	case	_	Id=2d5w
11	декількох	декілька	DET	Mlc-g	Case=Gen|NumType=Card|PronType=Ind	12	det:nummod	_	Id=2d5x
12	сотень	сотня	NOUN	Ncfpgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	obl	_	Id=2d5y|SpaceAfter=No
13	.	.	PUNCT	U	_	4	punct	_	Id=2d5z

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det:nummod	color:blue
1	Писатиму	писати	VERB	Vmpif1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	Id=1sab
2	тут	тут	ADV	Pd------r	PronType=Dem	1	advmod	_	Id=1sac
3	про	про	ADP	Spsa	Case=Acc	5	case	_	Id=1sad
4	свої	свій	DET	Ppp--npaa	Animacy=Inan|Case=Acc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	Id=1sae
5	успіхи	успіх	NOUN	Ncmpan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	1	obl	_	Id=1saf
6	в	в	ADP	Spsl	Case=Loc	7	case	_	Id=1sag
7	справі	справа	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	5	nmod	_	Id=1sah
8	імплементування	імплементування	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	Id=1sai
9	UEFI	UEFI	X	X	Foreign=Yes	8	nmod	_	Id=1saj
10	на	на	ADP	Spsl	Case=Loc	12	case	_	Id=1sak
11	кількох	кілька	DET	Mlc-l	Case=Loc|NumType=Card|PronType=Ind	12	det:nummod	_	Id=1sal
12	mips	mips	X	X	Foreign=Yes	8	nmod	_	Id=1sam
13	і	і	CCONJ	Ccs	_	16	cc	_	Id=1san
14	arm	arm	X	X	Foreign=Yes	15	compound	_	Id=1sao
15	одноплатних	одноплатний	ADJ	Ao--plf	Case=Loc|Number=Plur	16	amod	_	Id=1sap
16	компутерах	компутер	NOUN	Ncmpln	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	12	conj	_	Id=1saq
17	(	(	PUNCT	U	_	18	punct	_	Id=1sar|SpaceAfter=No
18	ОПК	ОПК	NOUN	Y	Abbr=Yes|Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Uninflect=Yes	16	appos	_	Id=1sas|SpaceAfter=No
19	)	)	PUNCT	U	_	18	punct	_	Id=1sat|SpaceAfter=No
20	.	.	PUNCT	U	_	1	punct	_	Id=1sau

~~~


