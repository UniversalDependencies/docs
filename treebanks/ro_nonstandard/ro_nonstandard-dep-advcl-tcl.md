---
layout: base
title:  'Statistics of advcl:tcl in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `advcl:tcl`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-advcl.html">advcl</a></tt>.

106 nodes (1%) are attached to their parents as `advcl:tcl`.

80 instances of `advcl:tcl` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.89622641509434.

The following 8 pairs of parts of speech are connected with `advcl:tcl`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (96; 91% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advcl:tcl	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	6	cc	_	ref=MATT6.17
2	tu	tu	PRON	Pp2-sr	Case=Acc,Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	ref=MATT6.17
3	cînd	când	ADV	Rw	PronType=Int,Rel	4	advmod:tmod	_	ref=MATT6.17
4	postești	posti	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	advcl:tcl	_	ref=MATT6.17|SpaceAfter=No
5	,	,	PUNCT	COMMA	_	4	punct	_	ref=MATT6.17
6	unge	unge	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	ref=MATT6.17
7	capul	cap	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	6	obj	_	ref=MATT6.17
8	tău	tău	DET	Ds2ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	7	det	_	ref=MATT6.17
9	și	și	CCONJ	Ccssp	Polarity=Pos	11	cc	_	ref=MATT6.17|SpaceAfter=No
10	-ți	tu	PRON	Pp2-sd--------w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	11	iobj	_	ref=MATT6.17
11	spală	spăla	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	6	conj	_	ref=MATT6.17
12	fața	față	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	obj	_	ref=MATT6.17
13	ta	tău	DET	Ds2fsrs	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	12	det	_	ref=MATT6.17|SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	6	punct	_	ref=MATT6.17

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 13 advcl:tcl	color:blue
1	Când	când	ADV	Rw	PronType=Int,Rel	2	advmod:tmod	_	_
2	călca	călca	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	advcl:tcl	_	_
3	mai	mai	ADV	Rg	_	4	advmod	_	_
4	rar	rar	ADV	Rg	_	2	advmod	_	Rhyme=ID8|Type=Paired
5	–	-	PUNCT	DASH	_	6	punct	_	_
6	Tot	tot	ADV	Rg	_	0	root	_	_
7	din	din	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	8	case	_	_
8	deal	deal	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	Rhyme=ID4|Type=Imperf
9	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	deal	deal	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	17	punct	_	_
12	Când	când	ADV	Rw	PronType=Int,Rel	13	advmod:tmod	_	_
13	călca	călca	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	17	advcl:tcl	_	_
14	mai	mai	ADV	Rg	_	15	advmod	_	_
15	des	des	ADV	Rg	_	13	advmod	_	Rhyme=ID21|Type=Paired
16	–	-	PUNCT	DASH	_	17	punct	_	_
17	Tot	tot	ADV	Rg	_	6	conj	_	_
18	din	din	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	19	case	_	_
19	șes	șes	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	_
20	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	21	case	_	_
21	șes	șes	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	Rhyme=ID15|SpaceAfter=No|Type=Paired
22	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 advcl:tcl	color:blue
1	Dară	dar	CCONJ	Ccssp	Polarity=Pos	12	cc	_	ref=MATT6.16
2	cînd	când	ADV	Rw	PronType=Int,Rel	3	advmod:tmod	_	ref=MATT6.16
3	postiți	posti	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	12	advcl:tcl	_	ref=MATT6.16|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	3	punct	_	ref=MATT6.16
5	nu	nu	ADV	Qz	Polarity=Neg	6	advmod	_	ref=MATT6.16
6	fireți	fi	VERB	Vmm-2p---l	Mood=Imp|Number=Plur|Person=2|Variant=Long|VerbForm=Fin	12	cop	_	ref=MATT6.16|SpaceAfter=No
7	,	,	PUNCT	COMMA	_	10	punct	_	ref=MATT6.16
8	ca	ca	ADV	Rg	_	10	case	_	ref=MATT6.16
9	cei	cel	DET	Tdmpr	Case=Acc,Nom|Gender=Masc|Number=Plur|PronType=Dem	10	det	_	ref=MATT6.16
10	fățarnici	fățarnic	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	12	obl	_	ref=MATT6.16|SpaceAfter=No
11	,	,	PUNCT	COMMA	_	10	punct	_	ref=MATT6.16
12	triști	trist	ADJ	Afpmprn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	ref=MATT6.16
13	(	(	PUNCT	LPAR	_	14	punct	_	ref=MATT6.16|SpaceAfter=No
14	mîhniți	mâhni	VERB	Vmp--pm-p	Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part	12	appos	_	ref=MATT6.16|SpaceAfter=No
15	)	)	PUNCT	RPAR	_	14	punct	_	ref=MATT6.16|SpaceAfter=No
16	,	,	PUNCT	COMMA	_	19	punct	_	ref=MATT6.16
17	că	că	SCONJ	Csssp	Polarity=Pos	19	mark	_	ref=MATT6.16|SpaceAfter=No
18	-și	sine	PRON	Px3--d--------w	Case=Dat|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	19	iobj	_	ref=MATT6.16
19	smolesc	smoli	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	advcl	_	ref=MATT6.16
20	fața	față	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	19	obj	_	ref=MATT6.16
21	lor	el	PRON	Pp3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Prs	20	nmod	_	ref=MATT6.16|SpaceAfter=No
22	,	,	PUNCT	COMMA	_	26	punct	_	ref=MATT6.16
23	ca	ca	ADV	Rg	_	26	mark	_	ref=MATT6.16
24	să	să	PART	Qs	PartType=Sub	23	fixed	_	ref=MATT6.16
25	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	26	expl:pv	_	ref=MATT6.16
26	arate	arăta	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	19	advcl	_	ref=MATT6.16
27	oamenilor	om	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	26	iobj	_	ref=MATT6.16
28	postindu	posti	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	26	xcomp	_	ref=MATT6.16|SpaceAfter=No
29	-se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	28	expl:pv	_	ref=MATT6.16|SpaceAfter=No
30	.	.	PUNCT	PERIOD	_	12	punct	_	ref=MATT6.16

~~~


