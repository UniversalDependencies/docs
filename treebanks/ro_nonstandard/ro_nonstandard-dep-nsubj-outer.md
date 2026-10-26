---
layout: base
title:  'Statistics of nsubj:outer in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ro_nonstandard-dep-nsubj-pass.html">nsubj:pass</a></tt>.

11 nodes (0%) are attached to their parents as `nsubj:outer`.

9 instances of `nsubj:outer` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.09090909090909.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (5; 45% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (3; 27% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (2; 18% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 nsubj:outer	color:blue
1	Senac	Seneca	PROPN	Npmsry	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	_
2	dzise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	:	:	PUNCT	COLON	_	10	punct	_	_
4	"	"	PUNCT	DBLQ	_	10	punct	_	SpaceAfter=No
5	Pizma	pizmă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	10	nsubj:outer	_	_
6	unde	unde	ADV	Rw	PronType=Int,Rel	7	advmod	_	_
7	easte	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	7	punct	_	_
9	ea	el	PRON	Pp3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	scoate	scoate	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
11	binele	bine	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	10	obj	_	_
12	și	și	CCONJ	Ccssp	Polarity=Pos	13	cc	_	_
13	face	face	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	conj	_	_
14	răul	rău	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	13	obj	_	SpaceAfter=No
15	;	;	PUNCT	SCOLON	_	18	punct	_	_
16	și	și	CCONJ	Ccssp	Polarity=Pos	18	cc	_	_
17	răul	rău	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	18	nsubj	_	_
18	face	face	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	conj	_	_
19	bine	bine	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	18	obj	_	SpaceAfter=No
20	"	"	PUNCT	DBLQ	_	10	punct	_	SpaceAfter=No
21	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 nsubj:outer	color:blue
1	Că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	_
2	și	și	ADV	Rg	_	3	advmod	_	_
3	Grigorie-	Grigore	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	12	nsubj:outer	_	SpaceAfter=No
4	vodă	vodă	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	7	punct	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	cum	cum	ADV	Rw	PronType=Int,Rel	12	xcomp	_	_
8	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp	7	cop	_	SpaceAfter=No
9	,	,	PUNCT	COMMA	_	7	punct	_	_
10	i	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	12	iobj	_	_
11	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Strength=Weak	12	expl:pv	_	_
12	schimbasă	schimba	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	0	root	_	_
13	firea	fire	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	_
14	îndoit	îndoit	NUM	Mmmsr-n	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing|NumType=Mult	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 nsubj:outer	color:blue
1	Gruia	Gruia	PROPN	Npmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	5	punct	_	_
3	cînd	când	ADV	Rw	PronType=Int,Rel	5	advmod:tmod	_	_
4	îmi	eu	PRON	Pp1-sd--------s	Case=Dat|Number=Sing|Person=1|PronType=Prs	5	iobj	_	Strength=Strong
5	auzea	auzi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	advcl:tcl	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	Chiar	chiar	ADV	Rg	_	8	advmod	_	_
8	așa	așa	ADV	Rg	_	11	advmod	_	_
9	el	el	PRON	Pp3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj:outer	_	_
10	îmi	eu	PRON	Pp1-sd--------s	Case=Dat|Number=Sing|Person=1|PronType=Prs	11	iobj	_	Strength=Strong
11	făcea	face	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
12	,	,	PUNCT	COMMA	_	13	punct	_	_
13	Lua	lua	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	conj	_	_
14	albă	alb	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	15	amod	_	_
15	rochioară	rochioară	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	13	obj	_	SpaceAfter=No
16	,	,	PUNCT	COMMA	_	21	punct	_	_
17	Sub	sub	ADP	Spsa	Case=Acc	20	case	_	AdpType=Prep
18	cea	cel	DET	Tdfsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Dem	19	det	_	_
19	albă	alb	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	20	amod	_	_
20	rochioară	rochioară	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	21	obl	_	_
21	Lua	lua	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	conj	_	_
22	luce	luciu	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	23	amod	_	_
23	săbioară	săbioară	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	21	obj	_	SpaceAfter=No
24	,	,	PUNCT	COMMA	_	29	punct	_	_
25	De	de	ADP	Spsa	Case=Acc	29	mark	_	AdpType=Prep
26	să	să	PART	Qs	_	29	mark	_	PartType=Sub|SpaceAfter=No
27	-i	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs	29	iobj	_	Strength=Weak
28	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres	29	cop	_	_
29	soţioară	soţioară	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	21	advcl	_	SpaceAfter=No
30	,	,	PUNCT	COMMA	_	33	punct	_	_
31	Şi	și	CCONJ	Ccssp	Polarity=Pos	33	cc	_	_
32	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs	33	expl:pv	_	Strength=Weak
33	făcu	face	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	conj	_	_
34	govioară	govioară	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	33	xcomp	_	SpaceAfter=No
35	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


