---
layout: base
title:  'Statistics of ccomp:pmod in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `ccomp:pmod`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-ccomp.html">ccomp</a></tt>.

74 nodes (0%) are attached to their parents as `ccomp:pmod`.

58 instances of `ccomp:pmod` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.36486486486486.

The following 8 pairs of parts of speech are connected with `ccomp:pmod`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (54; 73% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp:pmod	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	4	cc	_	ref=MARC15.44
2	Pilat	Pilat	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	ref=MARC15.44
3	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Strength=Weak	4	expl:pv	_	ref=MARC15.44
4	miră	mira	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MARC15.44
5	unde	unde	ADV	Rw	PronType=Int,Rel	7	advmod	_	ref=MARC15.44
6	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	aux	_	ref=MARC15.44
7	murit	muri	VERB	Vmp	VerbForm=Part	4	ccomp:pmod	_	ref=MARC15.44
8	așa	așa	ADV	Rg	_	9	advmod	_	ref=MARC15.44
9	curînd	cura	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	7	advcl:tcl	_	ref=MARC15.44|SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MARC15.44

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 ccomp:pmod	color:blue
1	Har	har	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	obj	_	ref=PAVEL_COLAS.1.12
2	dînd	da	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	0	root	_	ref=PAVEL_COLAS.1.12
3	Tatălui	tată	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	2	iobj	_	ref=PAVEL_COLAS.1.12
4	carele	care	PRON	Pw3fsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Int,Rel	7	nsubj	_	ref=PAVEL_COLAS.1.12
5	ne-	eu	PRON	Pp1-pa--------w	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Weak	7	obj	_	ref=PAVEL_COLAS.1.12|SpaceAfter=No
6	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	aux	_	ref=PAVEL_COLAS.1.12
7	făcut	făcut	VERB	Vmp	VerbForm=Part	3	acl	_	ref=PAVEL_COLAS.1.12
8	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	ref=PAVEL_COLAS.1.12
9	noi	eu	PRON	Pp1-pa--------s	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Strong	7	nmod:pmod	_	ref=PAVEL_COLAS.1.12
10	destoinici	destoinic	ADJ	Afpmprn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	7	xcomp	_	ref=PAVEL_COLAS.1.12
11	a	a	PART	Qn	PartType=Inf	12	mark	_	ref=PAVEL_COLAS.1.12
12	lua	lua	VERB	Vmn	VerbForm=Inf	10	ccomp:pmod	_	ref=PAVEL_COLAS.1.12
13	parte	parte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	12	obj	_	ref=PAVEL_COLAS.1.12
14	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	ref=PAVEL_COLAS.1.12
15	moșiia	moșie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	nmod	_	ref=PAVEL_COLAS.1.12
16	sfinților	sfânt	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	15	nmod	_	ref=PAVEL_COLAS.1.12|SpaceAfter=No
17	,	,	PUNCT	COMMA	_	19	punct	_	ref=PAVEL_COLAS.1.12
18	întru	întru	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	ref=PAVEL_COLAS.1.12
19	lumină	lumină	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	13	nmod	_	ref=PAVEL_COLAS.1.12
20	(	(	PUNCT	LPAR	_	23	punct	_	ref=PAVEL_COLAS.1.12|SpaceAfter=No
21	Ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	23	nsubj	_	ref=PAVEL_COLAS.1.12
22	să	să	PART	Qs	PartType=Sub	23	expl:pv	_	ref=PAVEL_COLAS.1.12
23	zice	zice	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	acl	_	ref=PAVEL_COLAS.1.12
24	împărăție	împărăție	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	23	xcomp	_	ref=PAVEL_COLAS.1.12|SpaceAfter=No
25	)	)	PUNCT	RPAR	_	23	punct	_	ref=PAVEL_COLAS.1.12|SpaceAfter=No
26	.	.	PUNCT	PERIOD	_	2	punct	_	ref=PAVEL_COLAS.1.12

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 ccomp:pmod	color:blue
1	Derept	drept	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	ref=LUCA11.35
2	aceaia	acela	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	obl	_	ref=LUCA11.35
3	ia	lua	VERB	Vmm-2s--z	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	0	root	_	ref=LUCA11.35
4	aminte	aminte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	obj	_	ref=LUCA11.35
5	ca	ca	ADP	Spsa	AdpType=Prep|Case=Acc	15	mark	_	ref=LUCA11.35
6	lumina	lumină	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	15	nsubj	_	ref=LUCA11.35
7	carea	care	PRON	Pw3fsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Int,Rel	8	nsubj	_	ref=LUCA11.35
8	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	ref=LUCA11.35
9	întru	întru	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	ref=LUCA11.35
10	tine	tu	PRON	Pp2-sa--------s	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	8	obl	_	ref=LUCA11.35|SpaceAfter=No
11	,	,	PUNCT	COMMA	_	6	punct	_	ref=LUCA11.35
12	să	să	PART	Qs	PartType=Sub	15	mark	_	ref=LUCA11.35
13	nu	nu	ADV	Qz	Polarity=Neg	15	advmod	_	ref=LUCA11.35
14	fie	fi	AUX	Vasp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres	15	cop	_	ref=LUCA11.35
15	întunearec	întuneric	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	ccomp:pmod	_	ref=LUCA11.35|SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	3	punct	_	ref=LUCA11.35

~~~


