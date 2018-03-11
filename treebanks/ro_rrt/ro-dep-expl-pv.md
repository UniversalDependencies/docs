---
layout: base
title:  'Statistics of expl:pv in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="ro-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro-dep-expl-poss.html">expl:poss</a></tt>.

2265 nodes (1%) are attached to their parents as `expl:pv`.

2156 instances of `expl:pv` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26710816777042.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-PRON.html">PRON</a></tt> (2262; 100% instances), <tt><a href="ro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl:pv	color:blue
1	Un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	timp	timp	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	_
3	stătu	sta	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	uitându	uita	VERB	Vmg-------y	Variant=Short|VerbForm=Ger	3	advcl	_	SpaceAfter=No
5	-se	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	4	expl:pv	_	_
6	prostește	prostește	ADV	Rgp	Degree=Pos	4	advmod	_	_
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	hârtie	hârtie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 expl:pv	color:blue
1	Annie	Annie	PROPN	Np	_	12	nsubj	_	_
2	Bowyer	Bowyer	PROPN	Np	_	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	76	76	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	1	nummod	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	Strada	stradă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
8	Hawkendon	Hawkendon	PROPN	Np	_	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	COMMA	_	10	punct	_	_
10	Clacton	Clacton	PROPN	Np	_	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	10	punct	_	_
12	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
13	dureri	durere	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	12	obj	_	_
14	groaznice	groaznic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	13	amod	_	_
15	deoarece	deoarece	SCONJ	Csssp	Polarity=Pos	19	mark	_	_
16	oasele	os	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	19	nsubj	_	_
17	sale	său	DET	Ds3fp-s	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	16	det	_	_
18	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	19	expl:pv	_	_
19	înmuiaseră	înmuia	VERB	Vmil3p	Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin	12	advcl	_	_
20	și	și	CCONJ	Crssp	Polarity=Pos	24	cc	_	_
21	coloana	coloană	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	24	nsubj	_	_
22	sa	său	DET	Ds3fsrs	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	21	det	_	_
23	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	24	expl:pv	_	_
24	sfărâmița	sfărâmița	PROPN	Np	_	19	conj	_	SpaceAfter=No
25	.	.	PUNCT	PERIOD	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 expl:pv	color:blue
1	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
2	ciuda	ciudă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	fixed	_	_
3	unei	un	DET	Tifso	Case=Dat,Gen|Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	atmosfere	atmosferă	NOUN	Ncfson	Case=Dat,Gen|Definite=Ind|Gender=Fem|Number=Sing	17	obl	_	_
5	inițiale	inițial	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
6	ostile	ostil	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	9	punct	_	_
8	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	demonstrații	demonstrație	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	nmod	_	_
10	organizate	organiza	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	9	acl	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	regim	regim	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	nmod:agent	_	SpaceAfter=No
13	,	,	PUNCT	COMMA	_	4	punct	_	_
14	discuțiile	discuție	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	17	expl:pv	_	_
15	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	17	expl:pv	_	SpaceAfter=No
16	au	avea	AUX	Va--3p	Number=Plur|Person=3	17	aux	_	_
17	încheiat	încheia	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
18	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
19	13	13	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	20	nummod	_	_
20	noiembrie	noiembrie	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	_
21	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	23	case	_	_
22	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	23	det	_	_
23	acord	acord	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	_
24	ca	ca	ADV	Rc	_	30	mark	_	_
25	reprezentanții	reprezentant	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	30	nsubj	_	_
26	Adunării	adunare	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	25	nmod	_	_
27	Naționale	național	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	26	amod	_	_
28	să	să	PART	Qs	Mood=Sub	24	fixed	_	_
29	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	30	expl:pv	_	_
30	întâlnească	întâlni	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	23	acl	_	_
31	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	32	case	_	_
32	convorbiri	convorbire	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	30	advcl	_	_
33	directe	direct	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	32	amod	_	_
34	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	35	case	_	_
35	Aristide	Aristide	PROPN	Np	_	30	obl	_	SpaceAfter=No
36	.	.	PUNCT	PERIOD	_	17	punct	_	_

~~~


