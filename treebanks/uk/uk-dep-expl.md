---
layout: base
title:  'Statistics of expl in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `expl`

This relation is universal.

94 nodes (0%) are attached to their parents as `expl`.

79 instances of `expl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.73404255319149.

The following 7 pairs of parts of speech are connected with `expl`: <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (64; 68% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (15; 16% instances), <tt><a href="uk-pos-ADV.html">ADV</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (7; 7% instances), <tt><a href="uk-pos-DET.html">DET</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="uk-pos-PRON.html">PRON</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="uk-pos-NUM.html">NUM</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="uk-pos-SYM.html">SYM</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 expl	color:blue
1	А	а	CCONJ	Ccs	_	6	cc	_	Id=1moa
2	перпендикуляр	перпендикуляр	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	Id=1mob
3	-	-	PUNCT	U	PunctType=Dash	6	punct	_	Id=1moc
4	це	це	PRON	Pd--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	expl	_	Id=1mod
5	"	"	PUNCT	U	PunctType=Quot	6	punct	_	Id=1moe|SpaceAfter=No
6	сторч	сторч	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	Id=1mof|SpaceAfter=No
7	"	"	PUNCT	U	PunctType=Quot	6	punct	_	Id=1mog|SpaceAfter=No
8	.	.	PUNCT	U	_	6	punct	_	Id=1moh

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl	color:blue
1	—	—	PUNCT	U	PunctType=Dash	2	punct	_	Id=0ibs
2	Іди	іти	VERB	Vmpm-2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	Id=0ibt
3	собі	себе	PRON	Px-----dn	Case=Dat|PronType=Prs|Reflex=Yes	2	expl	_	Id=0ibu|SpaceAfter=No
4	!	!	PUNCT	U	_	2	punct	_	Id=0ibv
5	—	—	PUNCT	U	PunctType=Dash	6	punct	_	Id=0ibx
6	гукнув	гукнути	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	parataxis	_	Id=0iby
7	голова	голова	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	Id=0ibz|SpaceAfter=No
8	,	,	PUNCT	U	_	9	punct	_	Id=0ic0
9	бачачи	бачити	VERB	Vmpgp	Aspect=Imp|Tense=Pres|VerbForm=Conv	6	advcl	_	Id=0ic1|SpaceAfter=No
10	,	,	PUNCT	U	_	16	punct	_	Id=0ic2
11	що	що	SCONJ	Css	_	16	mark	_	Id=0ic3
12	в	в	ADP	Spsg	Case=Gen	13	case	_	Id=0ic4
13	неї	вона	PRON	Pp-3f-sgn	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	16	obl	_	Id=0ic5
14	й	й	PART	Q	_	15	discourse	_	Id=0ic6
15	річ	річ	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	16	obj	_	Id=0ic7
16	відтяло	відтяти	VERB	Vmeis-sn	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	ccomp	_	Id=0ic8|SpaceAfter=No
17	.	.	PUNCT	U	_	2	punct	_	Id=0ic9

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 expl	color:blue
1	Що	що	PRON	Pr--nnsan	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	3	obj	_	Id=1msb
2	Середа	Середа	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	3	nsubj	_	Id=1msc
3	сказав	сказати	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	11	csubj	_	Id=1msd
4	про	про	ADP	Spsa	Case=Acc	5	case	_	Id=1mse
5	Вакарчука	Вакарчук	PROPN	Npmsay	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Sur|Number=Sing	3	obl	_	Id=1msf
6	-	-	PUNCT	U	PunctType=Dash	11	punct	_	Id=1msg
7	це	це	PRON	Pd--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	11	expl	_	Id=1msh
8	дуже	дуже	ADV	Rp	Degree=Pos	11	advmod	_	Id=1msi|SpaceAfter=No
9	-	-	PUNCT	U	PunctType=Hyph	10	punct	_	Id=1msj|SpaceAfter=No
10	дуже	дуже	ADV	Rp	Degree=Pos	8	flat:repeat	_	Id=1msk
11	важливо	важливо	ADV	Rp	Degree=Pos	0	root	_	Id=1msl|SpaceAfter=No
12	!	!	PUNCT	U	_	11	punct	_	Id=1msm

~~~


