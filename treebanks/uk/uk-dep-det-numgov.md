---
layout: base
title:  'Statistics of det:numgov in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="uk-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="uk-dep-det-nummod.html">det:nummod</a></tt>.

129 nodes (0%) are attached to their parents as `det:numgov`.

129 instances of `det:numgov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31007751937985.

The following 2 pairs of parts of speech are connected with `det:numgov`: <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (128; 99% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det:numgov	color:blue
1	На	на	ADP	Spsa	Case=Acc	2	case	_	Id=1lo3
2	що	що	PRON	Pr--nnsan	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	4	obl	_	Id=1lo4
3	Трамп	Трамп	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	4	nsubj	_	Id=1lo5
4	відповів	відповісти	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	Id=1lo6|SpaceAfter=No
5	:	:	PUNCT	U	_	7	punct	_	Id=1lo7
6	"	"	PUNCT	U	PunctType=Quot	7	punct	_	Id=1lo8|SpaceAfter=No
7	Є	бути	VERB	Vapip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	Id=1lo9
8	багато	багато	DET	Mlc-n	Case=Nom|NumType=Card|PronType=Ind	9	det:numgov	_	Id=1loa
9	вбивць	вбивця	NOUN	Ncmpgy	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	7	nsubj	_	Id=1lob|SpaceAfter=No
10	.	.	PUNCT	U	_	4	punct	_	Id=1loc

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 27 det:numgov	color:blue
1	Тут	тут	ADV	Pd------r	PronType=Dem	2	advmod	_	Id=15lj
2	їздили	їздити	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	Id=15lk
3	цілі	цілий	ADJ	Ao--pns	Case=Nom|Number=Plur	4	amod	_	Id=15ll
4	гори	гора	NOUN	Ncfpnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	Id=15lm
5	зелені	зелень	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	Id=15ln
6	з	з	ADP	Spsi	Case=Ins	8	case	_	Id=15lo
7	білим	білий	ADJ	Afpmsif	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	Id=15lp
8	снігом	сніг	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	nmod	_	Id=15lq
9	зверху	зверху	ADV	R	_	8	advmod	_	Id=15lr|SpaceAfter=No
10	,	,	PUNCT	U	_	12	punct	_	Id=15ls
11	і	і	CCONJ	Ccs	_	12	cc	_	Id=15lt
12	кораблі	корабель	NOUN	Ncmpnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	conj	_	Id=15lu|SpaceAfter=No
13	,	,	PUNCT	U	_	15	punct	_	Id=15lv
14	і	і	CCONJ	Ccs	_	15	cc	_	Id=15lw
15	хати	хата	NOUN	Ncfpnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	4	conj	_	Id=15lx
16	(	(	PUNCT	U	_	17	punct	_	Id=15ly|SpaceAfter=No
17	кухня	кухня	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	15	appos	_	Id=15lz|SpaceAfter=No
18	,	,	PUNCT	U	_	23	punct	_	Id=15m0
19	звідки	звідки	ADV	Pr------r	PronType=Rel	23	advmod	_	Id=15m1
20	тарілки	тарілка	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	23	obj	_	Id=15m2
21	та	та	CCONJ	Ccs	_	22	cc	_	Id=15m3
22	городину	городина	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	20	conj	_	Id=15m4
23	кидали	кидати	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	17	acl	_	Id=15m5|SpaceAfter=No
24	)	)	PUNCT	U	_	17	punct	_	Id=15m6|SpaceAfter=No
25	,	,	PUNCT	U	_	32	punct	_	Id=15m7
26	і	і	CCONJ	Ccs	_	32	cc	_	Id=15m8
27	багато	багато	DET	Mlc-n	Case=Nom|NumType=Card|PronType=Ind	32	det:numgov	_	Id=15m9
28	від	від	ADP	Spsg	Case=Gen	29	case	_	Id=15ma
29	коліс	колесо	NOUN	Ncnpgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	32	obl	_	Id=15mb
30	до	до	ADP	Spsg	Case=Gen	31	case	_	Id=15mc
31	верху	верх	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	32	obl	_	Id=15md
32	убраних	убраний	ADJ	Ap--pgf-ep	Aspect=Perf|Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	4	conj	_	Id=15me|Promoted=Yes
33	квітками	квітка	NOUN	Ncfpin	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	32	obl	_	Id=15mf
34	ландо	ландо	NOUN	Ncnpgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur|Uninflect=Yes	33	nmod	_	Id=15mg|SpaceAfter=No
35	,	,	PUNCT	U	_	44	punct	_	Id=15mh
36	а	а	CCONJ	Ccs	_	44	cc	_	Id=15mi
37	в	в	ADP	Spsl	Case=Loc	38	case	_	Id=15mj
38	Бордігері	Бордігера	PROPN	Npfsln	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	44	obl	_	Id=15mk
39	сього	се	PRON	Pd--nnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	44	obj	_	Id=15ml|SpaceAfter=No
40	,	,	PUNCT	U	_	41	punct	_	Id=15mm
41	певне	певне	ADV	R	_	44	advmod	_	Id=15mn|SpaceAfter=No
42	,	,	PUNCT	U	_	41	punct	_	Id=15mo
43	не	не	PART	Q	Polarity=Neg	44	advmod	_	Id=15mp
44	буде	бути	VERB	Vapif3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	2	conj	_	Id=15mq|SpaceAfter=No
45	,	,	PUNCT	U	_	49	punct	_	Id=15mr
46	бо	бо	SCONJ	Css	_	49	mark	_	Id=15ms
47	тільки	тільки	PART	Q	_	48	discourse	_	Id=15mt
48	приїжджі	приїжджі	NOUN	Ao--pns	Animacy=Anim|Case=Nom|Number=Ptan	49	nsubj	_	Id=15mu
49	братимуть	брати	VERB	Vmpif3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	44	advcl	_	Id=15mv
50	участь	участь	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	49	obj	_	Id=15mw|SpaceAfter=No
51	,	,	PUNCT	U	_	55	punct	_	Id=15mx
52	а	а	CCONJ	Ccs	_	55	cc	_	Id=15my
53	італьянцям	італьянець	NOUN	Ncmpdy	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	55	obj	_	Id=15mz
54	сьогодні	сьогодні	ADV	R	_	55	advmod	_	Id=15n0
55	піст	піст	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	49	conj	_	Id=15n1
56	(	(	PUNCT	U	_	59	punct	_	Id=15n2|SpaceAfter=No
57	mi-carême	mi-carême	X	X	Foreign=Yes	59	obj	_	Id=15n3
58	уже	уже	ADV	R	_	59	advmod	_	Id=15n4
59	пропустили	пропустити	VERB	Vmeis-p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	55	parataxis	_	Id=15n5|SpaceAfter=No
60	)	)	PUNCT	U	_	59	punct	_	Id=15n6|SpaceAfter=No
61	.	.	PUNCT	U	_	2	punct	_	Id=15n7

~~~


