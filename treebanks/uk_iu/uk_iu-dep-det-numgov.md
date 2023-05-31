---
layout: base
title:  'Statistics of det:numgov in UD_Ukrainian-IU'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-IU: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="uk_iu-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="uk_iu-dep-det-nummod.html">det:nummod</a></tt>.

146 nodes (0%) are attached to their parents as `det:numgov`.

144 instances of `det:numgov` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31506849315068.

The following 5 pairs of parts of speech are connected with `det:numgov`: <tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (141; 97% instances), <tt><a href="uk_iu-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="uk_iu-pos-DET.html">DET</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="uk_iu-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det:numgov	color:blue
1	На	на	ADP	Spsa	Case=Acc	2	case	2:case	Id=1lo3|LTranslit=na|Translit=Na
2	що	що	PRON	Pr--nnsan	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	4	obl	4:obl	Id=1lo4|LTranslit=ščo|Translit=ščo
3	Трамп	Трамп	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	4	nsubj	4:nsubj	Id=1lo5|LTranslit=Tramp|Translit=Tramp
4	відповів	відповісти	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	Id=1lo6|LTranslit=vidpovisty|SpaceAfter=No|Translit=vidpoviv
5	:	:	PUNCT	U	_	7	punct	7:punct	Id=1lo7|LTranslit=:|Translit=:
6	"	"	PUNCT	U	PunctType=Quot	7	punct	7:punct	Id=1lo8|LTranslit="|SpaceAfter=No|Translit="
7	Є	бути	VERB	Vapip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	4:parataxis	Id=1lo9|LTranslit=buty|Translit=Ě
8	багато	багато	DET	Mlc-n	Case=Nom|NumType=Card|PronType=Ind	9	det:numgov	9:det:numgov	Id=1loa|LTranslit=bahato|Translit=bahato
9	вбивць	вбивця	NOUN	Ncmpgy	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	7	nsubj	7:nsubj	Id=1lob|LTranslit=vbyvćа|SpaceAfter=No|Translit=vbyvć
10	.	.	PUNCT	U	_	4	punct	4:punct	Id=1loc|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 det:numgov	color:blue
1	Щодо	щодо	ADP	Spsg	Case=Gen	2	case	2:case	Id=31vf|LTranslit=ščodo|Translit=Ščodo
2	ремонтів	ремонт	NOUN	Ncmpgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	11	parataxis:discourse	11:parataxis:discourse	Id=31vg|LTranslit=remont|Translit=remontiv
3	і	і	CCONJ	Ccs	_	5	cc	5:cc	Id=31vh|LTranslit=i|Translit=i
4	"	"	PUNCT	U	PunctType=Quot	5	punct	5:punct	Id=31vi|LTranslit="|SpaceAfter=No|Translit="
5	облагородження	облагородження	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	conj	2:conj	Id=31vj|LTranslit=oblahorodženńа|SpaceAfter=No|Translit=oblahorodženńа
6	"	"	PUNCT	U	PunctType=Quot	5	punct	5:punct	Id=31vk|LTranslit="|Translit="
7	зйомної	зйомний	ADJ	Ao-fsgf	Case=Gen|Gender=Fem|Number=Sing	8	amod	8:amod	Id=31vl|LTranslit=zjomnyj|Translit=zjomnoji
8	квартири	квартира	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	nmod	5:nmod	Id=31vm|LTranslit=kvartyra|SpaceAfter=No|Translit=kvartyry
9	,	,	PUNCT	U	_	2	punct	2:punct	Id=31vn|LTranslit=,|Translit=,
10	то	то	PART	Q	PartType=Conseq	11	discourse	11:discourse	Id=31vo|LTranslit=to|Translit=to
11	поміняла	поміняти	VERB	Vmeis-sf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	Id=31vp|LTranslit=pomińаty|Translit=pomińаla
12	їх	вони	PRON	Pp-3--pgn	Case=Gen|Number=Plur|Person=3|PronType=Prs	11	obj	11:obj	Id=31vq|LTranslit=vony|Translit=jich
13	кілька	кілька	DET	Mlc-a	Case=Acc|NumType=Card|PronType=Ind	12	det:numgov	12:det:numgov	Id=31vr|LTranslit=kiľka|SpaceAfter=No|Translit=kiľka
14	,	,	PUNCT	U	_	26	punct	26:punct	Id=31vs|LTranslit=,|Translit=,
15	але	але	CCONJ	Ccs	_	26	cc	26:cc	Id=31vt|LTranslit=ale|Translit=ale
16	тільки	тільки	PART	Q	_	18	discourse	18:discourse	Id=31vu|LTranslit=tiľky|Translit=tiľky
17	в	в	ADP	Spsl	Case=Loc	18	case	18:case	Id=31vv|LTranslit=v|Translit=v
18	першій	перший	ADJ	Mlofsl	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	26	obl	26:obl	Id=31vw|LTranslit=peršyj|Translit=peršij
19	і	і	CCONJ	Ccs	_	21	cc	21:cc	Id=31vx|LTranslit=i|Translit=i
20	в	в	ADP	Spsl	Case=Loc	21	case	21:case	Id=31vy|LTranslit=v|Translit=v
21	цій	цей	DET	Pd--f-sla	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	18	conj	18:conj|26:obl	Id=31vz|LTranslit=cej|SpaceAfter=No|Translit=cij
22	,	,	PUNCT	U	_	24	punct	24:punct	Id=31w0|LTranslit=,|Translit=,
23	що	що	SCONJ	Css	_	24	mark	24:mark	Id=31w1|LTranslit=ščo|Translit=ščo
24	живем	жити	VERB	Vmpip1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	21	acl	21:acl	Id=31w2|LTranslit=žyty|Translit=žyvem
25	зараз	зараз	ADV	Pd------r	PronType=Dem	24	advmod	24:advmod	Id=31w3|LTranslit=zaraz|Translit=zaraz
26	робили	робити	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	11	conj	0:root|11:conj	Id=31w4|LTranslit=robyty|Translit=robyly
27	"	"	PUNCT	U	PunctType=Quot	28	punct	28:punct	Id=31w5|LTranslit="|SpaceAfter=No|Translit="
28	облагородження	облагородження	NOUN	Ncnsan	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	26	obj	26:obj	Id=31w6|LTranslit=oblahorodženńа|SpaceAfter=No|Translit=oblahorodženńа
29	"	"	PUNCT	U	PunctType=Quot	28	punct	28:punct	Id=31w7|LTranslit="|SpaceAfter=No|Translit="
30	.	.	PUNCT	U	_	11	punct	11:punct	Id=31w8|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 27 det:numgov	color:blue
1	Тут	тут	ADV	Pd------r	PronType=Dem	2	advmod	2:advmod	Id=15lj|LTranslit=tut|Translit=Tut
2	їздили	їздити	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	0:root	Id=15lk|LTranslit=jizdyty|Translit=jizdyly
3	цілі	цілий	ADJ	Ao--pns	Case=Nom|Number=Plur	4	amod	4:amod	Id=15ll|LTranslit=cilyj|Translit=cili
4	гори	гора	NOUN	Ncfpnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	2	nsubj	2:nsubj	Id=15lm|LTranslit=hora|Translit=hory
5	зелені	зелень	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod	Id=15ln|LTranslit=zeleń|Translit=zeleni
6	з	з	ADP	Spsi	Case=Ins	8	case	8:case	Id=15lo|LTranslit=z|Translit=z
7	білим	білий	ADJ	Afpmsif	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	Id=15lp|LTranslit=bilyj|Translit=bilym
8	снігом	сніг	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	nmod	4:nmod	Id=15lq|LTranslit=snih|Translit=snihom
9	зверху	зверху	ADV	R	_	8	advmod	8:advmod	Id=15lr|LTranslit=zverchu|SpaceAfter=No|Translit=zverchu
10	,	,	PUNCT	U	_	12	punct	12:punct	Id=15ls|LTranslit=,|Translit=,
11	і	і	CCONJ	Ccs	_	12	cc	12:cc	Id=15lt|LTranslit=i|Translit=i
12	кораблі	корабель	NOUN	Ncmpnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	conj	2:nsubj|4:conj	Id=15lu|LTranslit=korabeľ|SpaceAfter=No|Translit=korabli
13	,	,	PUNCT	U	_	15	punct	15:punct	Id=15lv|LTranslit=,|Translit=,
14	і	і	CCONJ	Ccs	_	15	cc	15:cc	Id=15lw|LTranslit=i|Translit=i
15	хати	хата	NOUN	Ncfpnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	4	conj	2:nsubj|4:conj	Id=15lx|LTranslit=chata|Translit=chaty
16	(	(	PUNCT	U	_	17	punct	17:punct	Id=15ly|LTranslit=(|SpaceAfter=No|Translit=(
17	кухня	кухня	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	15	appos	15:appos|23:obl	Id=15lz|LTranslit=kuchńа|SpaceAfter=No|Translit=kuchńа
18	,	,	PUNCT	U	_	23	punct	23:punct	Id=15m0|LTranslit=,|Translit=,
19	звідки	звідки	ADV	Pr------r	PronType=Rel	23	advmod	17:ref|23:advmod	Id=15m1|LTranslit=zvidky|Translit=zvidky
20	тарілки	тарілка	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	23	obj	23:obj	Id=15m2|LTranslit=tarilka|Translit=tarilky
21	та	та	CCONJ	Ccs	_	22	cc	22:cc	Id=15m3|LTranslit=ta|Translit=ta
22	городину	городина	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	20	conj	20:conj|23:obj	Id=15m4|LTranslit=horodyna|Translit=horodynu
23	кидали	кидати	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	17	acl:relcl	17:acl:relcl	Id=15m5|LTranslit=kydaty|SpaceAfter=No|Translit=kydaly
24	)	)	PUNCT	U	_	17	punct	17:punct	Id=15m6|LTranslit=)|SpaceAfter=No|Translit=)
25	,	,	PUNCT	U	_	32	punct	32:punct	Id=15m7|LTranslit=,|Translit=,
26	і	і	CCONJ	Ccs	_	32	cc	32:cc	Id=15m8|LTranslit=i|Translit=i
27	багато	багато	DET	Mlc-n	Case=Nom|NumType=Card|PronType=Ind	32	det:numgov	32:det:numgov	Id=15m9|LTranslit=bahato|Translit=bahato
28	від	від	ADP	Spsg	Case=Gen	29	case	29:case	Id=15ma|LTranslit=vid|Translit=vid
29	коліс	колесо	NOUN	Ncnpgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	32	obl	32:obl	Id=15mb|LTranslit=koleso|Translit=kolis
30	до	до	ADP	Spsg	Case=Gen	31	case	31:case	Id=15mc|LTranslit=do|Translit=do
31	верху	верх	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	32	obl	32:obl	Id=15md|LTranslit=verch|Translit=verchu
32	убраних	убраний	ADJ	Ap--pgf-ep	Aspect=Perf|Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	4	conj	2:nsubj|4:conj	Id=15me|LTranslit=ubranyj|Promoted=Yes|Translit=ubranych
33	квітками	квітка	NOUN	Ncfpin	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	32	obl	32:obl	Id=15mf|LTranslit=kvitka|Translit=kvitkamy
34	ландо	ландо	NOUN	Ncnpgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur|Uninflect=Yes	33	nmod	33:nmod	Id=15mg|LTranslit=lando|SpaceAfter=No|Translit=lando
35	,	,	PUNCT	U	_	44	punct	44:punct	Id=15mh|LTranslit=,|Translit=,
36	а	а	CCONJ	Ccs	_	44	cc	44:cc	Id=15mi|LTranslit=a|Translit=a
37	в	в	ADP	Spsl	Case=Loc	38	case	38:case	Id=15mj|LTranslit=v|Translit=v
38	Бордігері	Бордігера	PROPN	Npfsln	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	44	obl	44:obl	Id=15mk|LTranslit=Bordihera|Translit=Bordiheri
39	сього	се	PRON	Pd--nnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	44	obj	44:obj	Id=15ml|LTranslit=se|SpaceAfter=No|Translit=śoho
40	,	,	PUNCT	U	_	41	punct	41:punct	Id=15mm|LTranslit=,|Translit=,
41	певне	певне	ADV	R	_	44	advmod	44:advmod	Id=15mn|LTranslit=pevne|SpaceAfter=No|Translit=pevne
42	,	,	PUNCT	U	_	41	punct	41:punct	Id=15mo|LTranslit=,|Translit=,
43	не	не	PART	Q	Polarity=Neg	44	advmod	44:advmod	Id=15mp|LTranslit=ne|Translit=ne
44	буде	бути	VERB	Vapif3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	2	conj	0:root|2:conj	Id=15mq|LTranslit=buty|SpaceAfter=No|Translit=bude
45	,	,	PUNCT	U	_	49	punct	49:punct	Id=15mr|LTranslit=,|Translit=,
46	бо	бо	SCONJ	Css	_	49	mark	49:mark	Id=15ms|LTranslit=bo|Translit=bo
47	тільки	тільки	PART	Q	_	48	discourse	48:discourse	Id=15mt|LTranslit=tiľky|Translit=tiľky
48	приїжджі	приїжджі	NOUN	Ao--pns	Animacy=Anim|Case=Nom|Number=Ptan	49	nsubj	49:nsubj	Id=15mu|LTranslit=pryjiždži|Translit=pryjiždži
49	братимуть	брати	VERB	Vmpif3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	44	advcl	44:advcl	Id=15mv|LTranslit=braty|Translit=bratymuť
50	участь	участь	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	49	obj	49:obj	Id=15mw|LTranslit=učasť|SpaceAfter=No|Translit=učasť
51	,	,	PUNCT	U	_	55	punct	55:punct	Id=15mx|LTranslit=,|Translit=,
52	а	а	CCONJ	Ccs	_	55	cc	55:cc	Id=15my|LTranslit=a|Translit=a
53	італьянцям	італьянець	NOUN	Ncmpdy	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	55	obj	55:obj	Id=15mz|LTranslit=itaľjaneć|Translit=itaľjanćаm
54	сьогодні	сьогодні	ADV	R	_	55	advmod	55:advmod	Id=15n0|LTranslit=śohodni|Translit=śohodni
55	піст	піст	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	49	conj	44:advcl|49:conj	Id=15n1|LTranslit=pist|Translit=pist
56	(	(	PUNCT	U	_	59	punct	59:punct	Id=15n2|LTranslit=(|SpaceAfter=No|Translit=(
57	mi-carême	mi-carême	X	X	Foreign=Yes	59	obj	59:obj	Id=15n3|LTranslit=mi-carême|Translit=mi-carême
58	уже	уже	ADV	R	_	59	advmod	59:advmod	Id=15n4|LTranslit=uže|Translit=uže
59	пропустили	пропустити	VERB	Vmeis-p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	55	parataxis	55:parataxis	Id=15n5|LTranslit=propustyty|SpaceAfter=No|Translit=propustyly
60	)	)	PUNCT	U	_	59	punct	59:punct	Id=15n6|LTranslit=)|SpaceAfter=No|Translit=)
61	.	.	PUNCT	U	_	2	punct	2:punct	Id=15n7|LTranslit=.|Translit=.

~~~


