---
layout: base
title:  'Statistics of csubj:pass in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-csubj.html">csubj</a></tt>.

26 nodes (0%) are attached to their parents as `csubj:pass`.

26 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.15384615384615.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (21; 81% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 csubj:pass	color:blue
1	Il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	wordform=il
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	décidé	décider	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
4	que	que	SCONJ	_	_	11	mark	_	_
5	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	6	det	_	Gender[ctxt]=Fem|SpaceAfter=No
6	exécution	exécution	NOUN	_	Number=Sing	11	nsubj:pass	_	Gender[lex]=Fem
7	de	de	ADP	_	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	sentence	sentence	NOUN	_	Number=Sing	6	nmod	_	Gender[lex]=Fem
10	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	différé	différer	VERB	_	Gender=Masc|Number=Sing|Typo=Yes|VerbForm=Part|Voice=Pass	3	csubj:pass	_	CorrectForm=différée|CorrectGender=Fem|Tense[denom]=Past
12	après	après	ADP	_	_	14	case	_	_
13	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	14	det	_	Gender[ctxt]=Fem|SpaceAfter=No
14	ouverture	ouverture	NOUN	_	Number=Sing	11	obl:mod	_	Gender[lex]=Fem
15	de	de	ADP	_	_	17	case	_	_
16	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	États	état	NOUN	_	Number=Plur	14	nmod	_	Gender[lex]=Masc|SpaceAfter=No|wordform=états
18	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 csubj:pass	color:blue
1	Il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	wordform=il
2	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
3	alors	alors	ADV	_	_	4	advmod	_	_
4	décidé	décider	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
5	qu'	que	SCONJ	_	_	13	mark	_	SpaceAfter=No
6	à	à	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	Gender[ctxt]=Masc|SpaceAfter=No
8	avenir	avenir	NOUN	_	Number=Sing	13	obl:mod	_	Gender[lex]=Masc|SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	ce	ce	PRON	_	Gender=Masc|Person=3|PronType=Dem	13	expl:subj	_	_
11	serait	être	AUX	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	trompette	trompette	NOUN	_	Number=Sing	4	csubj:pass	_	Gender[lex]=Fem
14	qui	qui	PRON	_	PronType=Rel	15	nsubj	_	_
15	convoquerait	convoquer	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	advcl:cleft	_	Filler=subj
16	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	compétiteurs	compétiteur	NOUN	_	Number=Plur	15	obj	_	Gender[lex]=Masc|SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj:pass	color:blue
1	Il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	wordform=il
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
3	été	être	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	4	aux:pass	_	Tense[denom]=Past
4	démontré	démontrer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
5	que	que	SCONJ	_	_	9	mark	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	centrosaure	centrosaure	NOUN	_	Number=Sing	9	nsubj	_	Gender[lex]=Masc
8	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	cop	_	_
9	capable	capable	ADJ	_	Number=Sing	4	csubj:pass	_	Gender[ctxt]=Masc
10	de	de	ADP	_	_	12	mark	_	_
11	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	12	expl:pv	_	_
12	tenir	tenir	VERB	_	VerbForm=Inf	9	xcomp	_	Subject=SubjRaising
13	debout	debout	ADV	_	_	12	advmod	_	_
14	sur	sur	ADP	_	_	16	case	_	_
15	deux	deux	NUM	_	_	16	nummod	_	Number[lex]=Plur
16	pattes	patte	NOUN	_	Number=Plur	12	obl:mod	_	Gender[lex]=Fem|SpaceAfter=No
17	,	,	PUNCT	_	_	25	punct	_	_
18	mais	mais	CCONJ	_	_	25	cc	_	_
19	à	à	ADP	_	_	21	case	_	_
20	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	21	det	_	_
21	jour	jour	NOUN	_	Number=Sing	25	obl:mod	_	Gender[lex]=Masc|SpaceAfter=No
22	,	,	PUNCT	_	_	21	punct	_	_
23	personne	personne	PRON	_	Gender=Masc|Number=Sing|PronType=Neg	25	nsubj	_	_
24	ne	ne	ADV	_	Polarity=Neg	25	advmod	_	_
25	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
26	exactement	exactement	ADV	_	_	25	advmod	_	_
27	comment	comment	ADV	_	PronType=Int	25	obj	_	SpaceAfter=No
28	.	.	PUNCT	_	_	4	punct	_	_

~~~


