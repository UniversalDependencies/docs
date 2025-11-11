---
layout: base
title:  'Statistics of nsubj:outer in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_parisstories-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_parisstories-dep-nsubj-pass.html">nsubj:pass</a></tt>.

23 nodes (0%) are attached to their parents as `nsubj:outer`.

23 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.39130434782609.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (19; 83% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 13% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:outer	color:blue
1	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	sujet	sujet	NOUN	_	_	5	dislocated	_	Gender[lex]=Masc|Number[ctxt]=Sing
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj:outer	_	SpaceAfter=No
4	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
5	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	-on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj	_	_
7	se	soi	PRON	_	Person=3|PronType=Prs	8	obj	_	_
8	mettre	mettre	VERB	_	VerbForm=Inf	5	xcomp	_	Subject=SubjRaising
9	à	à	ADP	_	_	11	case	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	place	place	NOUN	_	_	8	obl:arg	_	Gender[lex]=Fem|Number[ctxt]=Sing
12	d'	de	ADP	_	_	13	case	_	SpaceAfter=No
13	autrui	autrui	PRON	_	Number=Sing|Person=3|PronType=Ind	11	nmod	_	_
14	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 nsubj:outer	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	nsubj:outer	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
3	que	que	SCONJ	_	_	15	mark	_	SpaceAfter=No
4	,	,	PUNCT	_	_	15	punct	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	caisse	caisse	NOUN	_	_	15	dislocated	_	Gender[lex]=Fem|Number[ctxt]=Sing
7	où	où	PRON	_	PronType=Rel	9	obl:mod	_	_
8	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	9	nsubj	_	_
9	travaille	travailler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	6	punct	_	_
11	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	nsubj	_	SpaceAfter=No
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
13	vraiment	vraiment	ADV	_	_	15	advmod	_	_
14	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	endroit	endroit	NOUN	_	_	0	root	_	Gender[lex]=Masc|Number[ctxt]=Sing
16	minuscule	minuscule	ADJ	_	_	15	amod	_	Gender[ctxt]=Masc|Number[ctxt]=Sing|SpaceAfter=No
17	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 10 nsubj:outer	color:blue
1	en	en	ADP	_	_	2	case	_	_
2	plus	plus	ADV	_	_	17	advmod	_	_
3	euh	euh	INTJ	_	_	2	discourse	_	_
4	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	dislocated	_	_
5	qui	qui	PRON	_	PronType=Rel	8	nsubj	_	_
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	trop	trop	ADV	_	_	8	advmod	_	_
8	mignon	mignon	ADJ	_	Gender=Masc	4	acl:relcl	_	Number[ctxt]=Sing|SpaceAfter=No
9	,	,	PUNCT	_	_	4	punct	_	_
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj:outer	_	SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
12	que	que	SCONJ	_	_	17	mark	_	_
13	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj	_	SpaceAfter=No
14	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
15	vraiment	vraiment	ADV	_	_	17	advmod	_	_
16	euh	euh	INTJ	_	_	17	discourse	_	_
17	elle	lui	PRON	_	Emph=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	0	root	_	_
18	qui	qui	PRON	_	PronType=Rel	22	nsubj	_	_
19	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	Filler=subj
20	à	à	ADP	_	_	22	case	_	_
21	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	base	base	NOUN	_	_	17	advcl:cleft	_	Gender[lex]=Fem|Number[ctxt]=Sing
23	de	de	ADP	_	_	24	case	_	_
24	tout	tout	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	22	nmod	_	SpaceAfter=No
25	.	.	PUNCT	_	_	17	punct	_	_

~~~


