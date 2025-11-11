---
layout: base
title:  'Statistics of parataxis in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="fr_rhapsodie-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="fr_rhapsodie-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

4 nodes (0%) are attached to their parents as `parataxis`.

4 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 parataxis	color:blue
1	euh	euh	INTJ	_	_	6	discourse	_	AlignBegin=341124|AlignEnd=341662|Overlap=Rhap_D0006-138|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=341662|AlignEnd=343151
3	alors	alors	ADV	_	_	6	advmod	_	AlignBegin=343151|AlignEnd=343346|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=343346|AlignEnd=343586
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	AlignBegin=343586|AlignEnd=343696
6	changement	changement	NOUN	_	_	0	root	_	AlignBegin=343696|AlignEnd=344185|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	AlignBegin=344185|AlignEnd=344740
8	euh	euh	INTJ	_	_	11	discourse	_	AlignBegin=344747|AlignEnd=345245|SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	AlignBegin=345245|AlignEnd=345245
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	AlignBegin=345245|AlignEnd=345365
11	crottes	crotte	NOUN	_	_	6	parataxis	_	AlignBegin=345365|AlignEnd=345555|Gender[lex]=Fem|Number[ctxt]=Plur
12	de	de	ADP	_	_	13	case	_	AlignBegin=345555|AlignEnd=345645
13	chien	chien	NOUN	_	_	11	nmod	_	AlignBegin=345645|AlignEnd=345855|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
14	.	.	PUNCT	_	_	6	punct	_	AlignBegin=345855|AlignEnd=345855

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 25 parataxis	color:blue
1	à	à	ADP	_	_	3	case	_	AlignBegin=43752|AlignEnd=43837
2	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	AlignBegin=43837|AlignEnd=43947
3	une	une	NOUN	_	_	14	nmod	_	AlignBegin=43947|AlignEnd=44117|Gender[lex]=Fem|Number[ctxt]=Sing
4	de	de	ADP	_	_	5	case	_	AlignBegin=44117|AlignEnd=44217
5	Libération	Libération	PROPN	_	_	3	nmod	_	AlignBegin=44217|AlignEnd=44807|Gender[lex]=Unknown
6	qui	qui	PRON	_	PronType=Rel	8	nsubj	_	AlignBegin=44807|AlignEnd=44997
7	ne	ne	ADV	_	Polarity=Neg	8	advmod	_	AlignBegin=44997|AlignEnd=45157
8	boude	bouder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	AlignBegin=45157|AlignEnd=45407
9	pas	pas	ADV	_	Polarity=Neg	8	advmod	_	AlignBegin=45407|AlignEnd=45597
10	son	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	11	det	_	AlignBegin=45597|AlignEnd=45767|Gender[ctxt]=Masc
11	plaisir	plaisir	NOUN	_	_	8	obj	_	AlignBegin=45767|AlignEnd=46196|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
12	,	,	PUNCT	_	_	3	punct	_	AlignBegin=46196|AlignEnd=46196
13	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	14	det	_	AlignBegin=46196|AlignEnd=46361
14	caricature	caricature	NOUN	_	_	0	root	_	AlignBegin=46361|AlignEnd=47061|Gender[lex]=Fem|Number[ctxt]=Sing
15	de	de	ADP	_	_	16	case	_	AlignBegin=47061|AlignEnd=47191
16	Nicolas	Nicolas	PROPN	_	_	14	nmod	_	AlignBegin=47191|AlignEnd=47561|Gender[lex]=Unknown
17	Sarkozy	Sarkozy	PROPN	_	_	16	flat:name	_	AlignBegin=47561|AlignEnd=48051|Gender[lex]=Unknown
18	tout	tout	ADV	_	_	19	advmod	_	AlignBegin=48051|AlignEnd=48241
19	ratatiné	ratatiné	ADJ	_	_	16	amod	_	AlignBegin=48241|AlignEnd=48710|Gender[ctxt]=Masc|Number[ctxt]=Sing
20	sous	sous	ADP	_	_	22	case	_	AlignBegin=49029|AlignEnd=49164
21	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	22	det	_	AlignBegin=49164|AlignEnd=49364
22	exclamation	exclamation	NOUN	_	_	19	obl:mod	_	AlignBegin=49364|AlignEnd=50045|Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No
23	:	:	PUNCT	_	_	25	punct	_	AlignBegin=50045|AlignEnd=50237
24	et	et	CCONJ	_	_	25	cc	_	AlignBegin=50237|AlignEnd=50362
25	bling	bling	INTJ	_	_	22	parataxis	_	AlignBegin=50362|AlignEnd=50815|SpaceAfter=No
26	!	!	PUNCT	_	_	14	punct	_	AlignBegin=50815|AlignEnd=50815

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 parataxis	color:blue
1	et	et	CCONJ	_	_	9	cc	_	AlignBegin=95149|AlignEnd=95374
2	en	en	ADP	_	_	4	case	_	AlignBegin=95374|AlignEnd=95643
3	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	AlignBegin=95643|AlignEnd=95790
4	semaine	semaine	NOUN	_	_	9	obl:mod	_	AlignBegin=95790|AlignEnd=96153|Gender[lex]=Fem|Number[ctxt]=Sing
5	ou	ou	CCONJ	_	_	6	cc	_	AlignBegin=96153|AlignEnd=96264
6	deux	deux	NUM	_	_	3	conj	_	AlignBegin=96264|AlignEnd=96402|Number[lex]=Plur|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	AlignBegin=96402|AlignEnd=96402
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj	_	AlignBegin=96402|AlignEnd=96528|Overlap=Rhap_D0009-61
9	y	y	PRON	_	Person=3|PronType=Prs	0	root	_	AlignBegin=96528|AlignEnd=96608|Overlap=Rhap_D0009-61
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	AlignBegin=96608|AlignEnd=96758|Overlap=Rhap_D0009-61|SpaceAfter=No
11	,	,	PUNCT	_	_	17	punct	_	AlignBegin=97199|AlignEnd=96402|Overlap=Rhap_D0009-48bis
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	AlignBegin=96758|AlignEnd=96788|Overlap=Rhap_D0009-61|SpaceAfter=No
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	reparandum	_	AlignBegin=96788|AlignEnd=97199|Overlap=Rhap_D0009-61|SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	AlignBegin=97199|AlignEnd=97707
15	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj:pass	_	AlignBegin=97815|AlignEnd=97848|Overlap=Rhap_D0009-62|SpaceAfter=No
16	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:pass	_	AlignBegin=97848|AlignEnd=97981|Overlap=Rhap_D0009-62
17	relivré	relivrer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	9	parataxis	_	AlignBegin=97981|AlignEnd=98495|Overlap=Rhap_D0009-62|Tense[denom]=Past

~~~


