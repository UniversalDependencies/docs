---
layout: base
title:  'Statistics of expl in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `expl`

This relation is universal.

2298 nodes (2%) are attached to their parents as `expl`.

2113 instances of `expl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.78764142732811.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (2292; 100% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl	color:blue
1	Bojim	bati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	pa	pa	CCONJ	Cc	_	1	advmod	_	Dep=0|Rel=Root
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	SpaceAfter=No|Dep=1|Rel=PPart
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	da	da	SCONJ	Cs	_	9	mark	_	Dep=7|Rel=Conj
6	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	Dep=7|Rel=PPart
7	bodo	biti	AUX	Va-f3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	cop	_	Dep=1|Rel=Obj
8	ravno	ravno	PART	Q	_	9	advmod	_	Dep=9|Rel=Atr
9	realni	realen	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	ccomp	_	SpaceAfter=No|Dep=7|Rel=Atr
10	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 expl	color:blue
1	Zadeva	zadeva	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	Dep=2|Rel=Sb
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Dep=0|Rel=Root
3	zapletena	zapleten	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=2|Rel=Atr
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	ker	ker	SCONJ	Cs	_	9	mark	_	Dep=8|Rel=Conj
6	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	Dep=8|Rel=PPart
7	strokovnjaki	strokovnjak	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	Dep=8|Rel=Sb
8	niso	biti	AUX	Va-r3p-y	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	9	cop	_	Dep=2|Rel=AdvO
9	edini	edin	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	advcl	_	Dep=8|Rel=Atr
10	o	o	ADP	Sl	Case=Loc	12	case	_	Dep=12|Rel=Atr
11	njenih	njen	DET	Ps3mplsf	Case=Loc|Gender=Masc|Gender[psor]=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	Dep=12|Rel=Atr
12	vzrokih	vzrok	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	9	obl	_	SpaceAfter=No|Dep=9|Rel=Obj
13	.	.	PUNCT	Z	_	3	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 expl	color:blue
1	Je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	Dep=0|Rel=Root
2	mož	mož	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|Dep=1|Rel=Atr
3	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
4	ki	ki	SCONJ	Cs	_	6	mark	_	Dep=6|Rel=Conj
5	zmeraj	zmeraj	ADV	Rgp	Degree=Pos	6	advmod	_	Dep=6|Rel=AdvO
6	vključi	vključiti	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	Dep=2|Rel=Atr
7	svetilko	svetilka	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	Dep=6|Rel=Obj
8	in	in	CCONJ	Cc	_	10	cc	_	Dep=10|Rel=Conj
9	jo	on	PRON	Pp3fsa--y	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Variant=Short	10	obj	_	Dep=10|Rel=Obj
10	podrži	podržati	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	Dep=0|Rel=Root
11	v	v	ADP	Sa	Case=Acc	12	case	_	Dep=12|Rel=Atr
12	obraz	obraz	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No|Dep=10|Rel=AdvO
13	,	,	PUNCT	Z	_	18	punct	_	Dep=0|Rel=Root
14	ki	ki	SCONJ	Cs	_	18	mark	_	Dep=18|Rel=Conj
15	z	z	ADP	Si	Case=Ins	17	case	_	Dep=17|Rel=Atr
16	zavihanimi	zavihan	ADJ	Appmpi	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	17	amod	_	Dep=17|Rel=Atr
17	rokavi	rokav	NOUN	Ncmpi	Case=Ins|Gender=Masc|Number=Plur	18	obl	_	Dep=18|Rel=AdvM
18	štorklja	štorkljati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	Dep=0|Rel=Root
19	po	po	ADP	Sl	Case=Loc	20	case	_	Dep=20|Rel=Atr
20	sobi	soba	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	18	obl	_	Dep=18|Rel=AdvO
21	in	in	CCONJ	Cc	_	23	cc	_	Dep=25|Rel=Conj
22	pri	pri	ADP	Sl	Case=Loc	23	case	_	Dep=23|Rel=Atr
23	katerem	kateri	DET	Pq-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Int	18	conj	_	Dep=25|Rel=Atr
24	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	23	expl	_	Dep=25|Rel=PPart
25	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	23	cop	_	Dep=0|Rel=Root
26	treba	treba	ADV	Rgp	Degree=Pos	23	advmod	_	Dep=25|Rel=AdvM
27	kozarec	kozarec	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	30	obj	_	Dep=30|Rel=Obj
28	vode	voda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	27	nmod	_	Dep=27|Rel=Atr
29	šele	šele	PART	Q	_	30	advmod	_	Dep=0|Rel=Root
30	zaslužiti	zaslužiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	23	csubj	_	SpaceAfter=No|Dep=25|Rel=Sb
31	.	.	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


