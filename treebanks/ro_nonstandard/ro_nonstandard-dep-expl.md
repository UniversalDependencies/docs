---
layout: base
title:  'Statistics of expl in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl`

This relation is universal.
There are 4 language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pv.html">expl:pv</a></tt>.

710 nodes (0%) are attached to their parents as `expl`.

598 instances of `expl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66197183098592.

The following 7 pairs of parts of speech are connected with `expl`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (672; 95% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (17; 2% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MATT20.32
2	stătu	sta	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT20.32
3	Iisus	Iisus	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT20.32|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	5	punct	_	ref=MATT20.32
5	chemă	chema	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	ref=MATT20.32
6	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	ref=MATT20.32
7	ei	el	PRON	Pp3mpa--------s	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	5	nmod:pmod	_	ref=MATT20.32
8	și	și	CCONJ	Ccssp	Polarity=Pos	9	cc	_	ref=MATT20.32
9	zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	ref=MATT20.32|SpaceAfter=No
10	:	:	PUNCT	COLON	_	12	punct	_	ref=MATT20.32
11	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	12	expl	_	ref=MATT20.32
12	vreți	vrea	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	parataxis	_	ref=MATT20.32
13	să	să	PART	Qs	PartType=Sub	14	mark	_	ref=MATT20.32
14	fac	face	VERB	Vmsp1s	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	ccomp	_	ref=MATT20.32
15	voao	tu	PRON	Pp2-pd--------s	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Strong	14	iobj	_	ref=MATT20.32|SpaceAfter=No
16	?	?	PUNCT	QUEST	_	12	punct	_	ref=MATT20.32

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	9	cc	_	ref=MARC13.37
2	cealea	acela	PRON	Pd3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	9	obj	_	ref=MARC13.37
3	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	4	obj	_	ref=MARC13.37
4	zic	zice	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	ref=MARC13.37
5	voao	tu	PRON	Pp2-pd--------s	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Strong	4	iobj	_	ref=MARC13.37|SpaceAfter=No
6	,	,	PUNCT	COMMA	_	2	punct	_	ref=MARC13.37
7	tuturor	tot	PRON	Pi3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Ind	9	iobj	_	ref=MARC13.37
8	vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	9	expl	_	ref=MARC13.37
9	zic	zic	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	ref=MARC13.37|SpaceAfter=No
10	,	,	PUNCT	COMMA	_	11	punct	_	ref=MARC13.37
11	prevegheați	priveghea	VERB	Vmm-2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	9	parataxis	_	ref=MARC13.37|SpaceAfter=No
12	-vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	11	expl:pv	_	ref=MARC13.37|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	9	punct	_	ref=MARC13.37

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 expl	color:blue
1	Şi	și	CCONJ	Ccssp	Polarity=Pos	3	cc	_	ref=LUCA16.20
2	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	3	det	_	ref=LUCA16.20
3	cerșitoriu	cerșetor	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	ref=LUCA16.20
4	căruia	care	PRON	Pw3mso	Case=Dat,Gen|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	8	iobj	_	ref=LUCA16.20|SpaceAfter=No
5	-i	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	8	expl	_	ref=LUCA16.20
6	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	ref=LUCA16.20
7	numele	nume	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	ref=LUCA16.20
8	Lazăr	Lazăr	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	acl	_	ref=LUCA16.20|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	11	punct	_	ref=LUCA16.20
10	carele	care	PRON	Pw3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	11	nsubj	_	ref=LUCA16.20
11	zăcea	zăcea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	conj	_	ref=LUCA16.20
12	înaintea	înaintea	ADP	Spsg	AdpType=Prep|Case=Gen	13	case	_	ref=LUCA16.20
13	ușăi	ușii	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	11	obl	_	ref=LUCA16.20
14	lui	el	PRON	Pp3mso	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nmod	_	ref=LUCA16.20|SpaceAfter=No
15	,	,	PUNCT	COMMA	_	16	punct	_	ref=LUCA16.20
16	zgăibos	zgăibos	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	11	xcomp	_	ref=LUCA16.20|SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	3	punct	_	ref=LUCA16.20

~~~


