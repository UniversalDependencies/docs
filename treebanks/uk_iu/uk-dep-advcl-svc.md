---
layout: base
title:  'Statistics of advcl:svc in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `advcl:svc`

This relation is a language-specific subtype of <tt><a href="uk-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="uk-dep-advcl-sp.html">advcl:pred</a></tt>.

29 nodes (0%) are attached to their parents as `advcl:svc`.

28 instances of `advcl:svc` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31034482758621.

The following 2 pairs of parts of speech are connected with `advcl:svc`: <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (28; 97% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advcl:svc	color:blue
1	Так	так	PART	Q	_	3	discourse	_	Id=14az
2	і	і	PART	Q	_	1	fixed	_	Id=14b0
3	тягне	тягнути	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=14b1
4	робити	робити	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	3	advcl:svc	_	Id=14b2
5	виписки	виписка	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	4	obj	_	Id=14b3|SpaceAfter=No
6	.	.	PUNCT	U	_	3	punct	_	Id=14b4

~~~


~~~ conllu
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 42 advcl:svc	color:blue
1	На	на	ADP	Spsl	Case=Loc	5	case	_	Id=2b1c
2	всіх	весь	DET	Pg----pla	Case=Loc|Number=Plur|PronType=Tot	5	det	_	Id=2b1d
3	же	же	PART	Q	_	4	discourse	_	Id=2b1e
4	інших	інший	DET	Pi----pla	Case=Loc|Number=Plur|PronType=Ind	5	det	_	Id=2b1f
5	ділянках	ділянка	NOUN	Ncfpln	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	18	obl	_	Id=2b1g
6	обов'язкового	обов’язковий	ADJ	Ao-msgf	Case=Gen|Gender=Masc|Number=Sing	12	amod	_	Id=2b1h
7	для	для	ADP	Spsg	Case=Gen	9	case	_	Id=2b1i
8	культурної	культурний	ADJ	Afpfsgf	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	Id=2b1j
9	нації	нація	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	obl	_	Id=2b1k
10	"	"	PUNCT	U	PunctType=Quot	12	punct	_	Id=2b1l|SpaceAfter=No
11	гуманітарного	гуманітарний	ADJ	Ao-msgf	Case=Gen|Gender=Masc|Number=Sing	12	amod	_	Id=2b1m
12	мінімуму	мінімум	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	Id=2b1n|SpaceAfter=No
13	"	"	PUNCT	U	PunctType=Quot	12	punct	_	Id=2b1o
14	відсутність	відсутність	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	18	nsubj	_	Id=2b1p
15	структурованого	структурований	ADJ	Ap-nsgf-ep	Aspect=Perf|Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	17	amod	_	Id=2b1q
16	експертного	експертний	ADJ	Ao-nsgf	Case=Gen|Gender=Neut|Number=Sing	17	amod	_	Id=2b1r
17	середовища	середовище	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	14	nmod	_	Id=2b1s
18	дає	давати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=2b1t
19	змогу	змога	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	18	obj	_	Id=2b1u
20	кому	хто	PRON	Pi--mysdn	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|PronType=Ind	18	iobj	_	Id=2b1v
21	завгодно	завгодно	PART	Q	_	20	discourse	_	Id=2b1w
22	верзти	верзти	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	19	acl	_	Id=2b1x
23	що	що	PRON	Pi--nnsan	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	22	obj	_	Id=2b1y
24	завгодно	завгодно	PART	Q	_	23	discourse	_	Id=2b1z|SpaceAfter=No
25	,	,	PUNCT	U	_	27	punct	_	Id=2b20
26	як	як	SCONJ	Css	_	27	mark	_	Id=2b21
27	Рабиновичу	Рабинович	PROPN	Npmsdy	Animacy=Anim|Case=Dat|Gender=Masc|NameType=Sur|Number=Sing	22	advcl	_	Id=2b22
28	про	про	ADP	Spsa	Case=Acc	29	case	_	Id=2b23
29	Олеся	Олесь	PROPN	Npmsay	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	27	obl	_	Id=2b24|SpaceAfter=No
30	,	,	PUNCT	U	_	27	punct	_	Id=2b25
31	-	-	PUNCT	U	PunctType=Dash	34	punct	_	Id=2b26
32	без	без	ADP	Spsg	Case=Gen	34	case	_	Id=2b27
33	найменшого	найменший	ADJ	Afsmsgf	Case=Gen|Degree=Sup|Gender=Masc|Number=Sing	34	amod	_	Id=2b28
34	ризику	ризик	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	22	obl	_	Id=2b29
35	бути	бути	AUX	Vapn	Aspect=Imp|VerbForm=Inf	36	cop	_	Id=2b2a
36	перебитим	перебитий	ADJ	Ap-msif-ep	Aspect=Perf|Case=Ins|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	34	acl	_	Id=2b2b
37	в	в	ADP	Spsl	Case=Loc	38	case	_	Id=2b2c
38	ефірі	ефір	NOUN	Ncmsln	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	36	obl	_	Id=2b2d
39	й	й	CCONJ	Ccs	_	40	cc	_	Id=2b2e
40	посланим	посланий	ADJ	Ap-msif-ep	Aspect=Perf|Case=Ins|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	36	conj	_	Id=2b2f
41	"	"	PUNCT	U	PunctType=Quot	42	punct	_	Id=2b2g|SpaceAfter=No
42	читати	читати	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	40	advcl:svc	_	Id=2b2h
43	підручник	підручник	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	42	obj	_	Id=2b2i|SpaceAfter=No
44	"	"	PUNCT	U	PunctType=Quot	42	punct	_	Id=2b2j|SpaceAfter=No
45	.	.	PUNCT	U	_	18	punct	_	Id=2b2k

~~~


