---
layout: base
title:  'Statistics of csubj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_rhapsodie-dep-csubj-pass.html">csubj:pass</a></tt>.

18 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.27777777777778.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (12; 67% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 csubj	color:blue
1	XXX	XXX	X	_	_	3	dep	_	AlignBegin=152546|AlignEnd=153071|Overlap=Rhap_D2007-106|Scrap=Yes|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	AlignBegin=153071|AlignEnd=152546|Overlap=Rhap_D2007-84
3	ah	ah	INTJ	_	_	8	discourse	_	AlignBegin=152546|AlignEnd=153071|Overlap=Rhap_D2007-106|SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	AlignBegin=153071|AlignEnd=152546|Overlap=Rhap_D2007-84
5	mais	mais	CCONJ	_	_	8	cc	_	AlignBegin=152546|AlignEnd=153071|Overlap=Rhap_D2007-106
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	AlignBegin=153071|AlignEnd=153176|SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	AlignBegin=153126|AlignEnd=153176
8	vrai	vrai	ADJ	_	_	0	root	_	AlignBegin=153176|AlignEnd=153336|Gender[ctxt]=Masc|Number[ctxt]=Sing
9	qu'	que	SCONJ	_	_	12	mark	_	AlignBegin=153336|AlignEnd=153386|SpaceAfter=No
10	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	nsubj:pass	_	AlignBegin=153386|AlignEnd=153486
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	AlignBegin=153486|AlignEnd=153516
12	habillé	habiller	VERB	_	VerbForm=Part|Voice=Pass	8	csubj	_	AlignBegin=153516|AlignEnd=153851|Gender[ctxt]=Masc|Number[ctxt]=Sing|Tense[denom]=Past
13	pareil	pareil	ADV	_	_	12	advmod	_	AlignBegin=153851|AlignEnd=154616|Overlap=Rhap_D2007-108|SpaceAfter=No
14	.	.	PUNCT	_	_	8	punct	_	AlignBegin=154616|AlignEnd=154616|Overlap=Rhap_D2007-86

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 csubj	color:blue
1	enfin	enfin	ADV	_	_	4	discourse	_	AlignBegin=30447|AlignEnd=30897|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=30897|AlignEnd=30897
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	AlignBegin=30897|AlignEnd=31017|SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	reparandum	_	AlignBegin=31017|AlignEnd=31097|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=31097|AlignEnd=31097
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	AlignBegin=31097|AlignEnd=31187|SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	AlignBegin=31187|AlignEnd=31247
8	vrai	vrai	ADJ	_	_	0	root	_	AlignBegin=31247|AlignEnd=31407|Gender[ctxt]=Masc|Number[ctxt]=Sing
9	que	que	SCONJ	_	_	13	mark	_	AlignBegin=31407|AlignEnd=31447
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	AlignBegin=31447|AlignEnd=31497|SpaceAfter=No
11	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	AlignBegin=31497|AlignEnd=31757
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	AlignBegin=31757|AlignEnd=31877
13	côté	côté	NOUN	_	_	8	csubj	_	AlignBegin=31877|AlignEnd=32257|Gender[lex]=Masc|Number[ctxt]=Sing
14	public	public	ADJ	_	Gender=Masc|Number=Sing	16	reparandum	_	AlignBegin=32257|AlignEnd=32772|SpaceAfter=No
15	,	,	PUNCT	_	_	14	punct	_	AlignBegin=32772|AlignEnd=32772
16	direct	direct	ADJ	_	Gender=Masc	13	amod	_	AlignBegin=32772|AlignEnd=33382|Number[ctxt]=Sing
17	et	et	CCONJ	_	_	18	cc	_	AlignBegin=33382|AlignEnd=33482
18	que	que	SCONJ	_	_	32	reparandum	_	AlignBegin=33482|AlignEnd=33941|SpaceAfter=No
19	,	,	PUNCT	_	_	18	punct	_	AlignBegin=33941|AlignEnd=33941
20	et	et	CCONJ	_	_	32	cc	_	AlignBegin=33941|AlignEnd=34092
21	que	que	SCONJ	_	_	32	mark	_	AlignBegin=34092|AlignEnd=34252
22	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	25	dislocated	_	AlignBegin=34252|AlignEnd=34630|SpaceAfter=No
23	,	,	PUNCT	_	_	22	punct	_	AlignBegin=34630|AlignEnd=34975
24	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	25	nsubj	_	AlignBegin=34975|AlignEnd=35080|SpaceAfter=No
25	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	reparandum	_	AlignBegin=35080|AlignEnd=35160|SpaceAfter=No
26	,	,	PUNCT	_	_	25	punct	_	AlignBegin=35160|AlignEnd=35160
27	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	32	nsubj:outer	_	AlignBegin=35160|AlignEnd=35450|SpaceAfter=No
28	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	_	AlignBegin=35450|AlignEnd=35520
29	comme	comme	SCONJ	_	_	32	mark	_	AlignBegin=35520|AlignEnd=35660
30	si	si	SCONJ	_	_	32	mark	_	AlignBegin=35660|AlignEnd=35800
31	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	32	nsubj	_	AlignBegin=35800|AlignEnd=35910
32	faisais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	13	conj	_	AlignBegin=35910|AlignEnd=36080
33	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	34	det	_	AlignBegin=36080|AlignEnd=36150
34	spectacle	spectacle	NOUN	_	_	32	obj	_	AlignBegin=36150|AlignEnd=36572|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
35	.	.	PUNCT	_	_	8	punct	_	AlignBegin=36572|AlignEnd=36572

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 csubj	color:blue
1	et	et	CCONJ	_	_	5	reparandum	_	AlignBegin=266095|AlignEnd=266309|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	AlignBegin=266309|AlignEnd=266309
3	euh	euh	INTJ	_	_	8	discourse	_	AlignBegin=266309|AlignEnd=266977|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=266977|AlignEnd=267563
5	et	et	CCONJ	_	_	8	cc	_	AlignBegin=267563|AlignEnd=267638
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	AlignBegin=267638|AlignEnd=267768|SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	AlignBegin=267768|AlignEnd=267808
8	vrai	vrai	ADJ	_	_	0	root	_	AlignBegin=267808|AlignEnd=267998|Gender[ctxt]=Masc|Number[ctxt]=Sing
9	que	que	SCONJ	_	_	14	mark	_	AlignBegin=267998|AlignEnd=268128
10	elle	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=268128|AlignEnd=268398
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	AlignBegin=268398|AlignEnd=268428
12	peut-être	peut-être	ADV	_	_	14	advmod	_	AlignBegin=268428|AlignEnd=268728
13	pas	pas	ADV	_	Polarity=Neg	14	advmod	_	AlignBegin=268728|AlignEnd=268838
14	compatible	compatible	ADJ	_	_	8	csubj	_	AlignBegin=268838|AlignEnd=269258|Gender[ctxt]=Fem|Number[ctxt]=Sing
15	avec	avec	ADP	_	_	22	case	_	AlignBegin=269258|AlignEnd=269608|SpaceAfter=No
16	,	,	PUNCT	_	_	22	punct	_	AlignBegin=269608|AlignEnd=269608
17	euh	euh	INTJ	_	_	22	discourse	_	AlignBegin=269608|AlignEnd=269784|SpaceAfter=No
18	,	,	PUNCT	_	_	17	punct	_	AlignBegin=269784|AlignEnd=271409
19	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	reparandum	_	AlignBegin=271409|AlignEnd=271526|SpaceAfter=No
20	,	,	PUNCT	_	_	19	punct	_	AlignBegin=271526|AlignEnd=271526
21	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	22	det	_	AlignBegin=271526|AlignEnd=271671
22	vie	vie	NOUN	_	_	14	obl:mod	_	AlignBegin=271671|AlignEnd=271771|Gender[lex]=Fem|Number[ctxt]=Sing
23	de	de	ADP	_	_	24	case	_	AlignBegin=271771|AlignEnd=271795
24	famille	famille	NOUN	_	_	22	nmod	_	AlignBegin=271795|AlignEnd=272058|Gender[lex]=Fem|Number[ctxt]=Sing
25	par	par	ADP	_	_	26	case	_	AlignBegin=272058|AlignEnd=272156
26	exemple	exemple	NOUN	_	_	8	obl:mod	_	AlignBegin=272156|AlignEnd=272408|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
27	.	.	PUNCT	_	_	8	punct	_	AlignBegin=272408|AlignEnd=272408

~~~


