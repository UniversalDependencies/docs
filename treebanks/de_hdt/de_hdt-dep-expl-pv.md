---
layout: base
title:  'Statistics of expl:pv in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-expl.html">expl</a></tt>.

10469 nodes (0%) are attached to their parents as `expl:pv`.

6275 instances of `expl:pv` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.88814595472347.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (10450; 100% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (18; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 expl:pv	color:blue
1	Man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	8	nsubj	_	_
2	wolle	wollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	8	aux	_	_
3	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	8	expl:pv	_	_
4	nur	nur	ADV	ADV	_	8	advmod	_	_
5	für	für	ADP	APPR	AdpType=Prep	7	case	_	_
6	alle	alle	DET	PIDAT	Case=Acc|Number=Plur|PronType=Tot	7	det	_	_
7	Eventualitäten	Eventualitäten	NOUN	NN	Case=Acc	8	obl	_	_
8	rüsten	rüsten	VERB	VVINF	VerbForm=Inf	0	root	_	_
9	.	.	PUNCT	$.	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl:pv	color:blue
1	Erholt	erholen	ADJ	ADJD	Degree=Pos|Variant=Short	2	advmod	_	_
2	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	2	expl:pv	_	_
4	das	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Unternehmen	Unternehmen	NOUN	NN	Gender=Neut|Number=Sing	2	nsubj	_	_
6	davon	davon	ADV	PROAV	PronType=Dem	2	advmod	_	_
7	bislang	bislang	ADV	ADV	_	2	advmod	_	_
8	offensichtlich	offensichtlich	ADJ	ADJD	Degree=Pos|Variant=Short	2	advmod	_	_
9	nicht	nicht	PART	PTKNEG	Polarity=Neg	2	advmod	_	_
10	:	:	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl:pv	color:blue
1	Uneinig	uneinig	ADJ	ADJD	Degree=Pos|Variant=Short	0	root	_	_
2	sind	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	sich	sich	PRON	PRF	Case=Dat|Person=3|PronType=Prs|Reflex=Yes	1	expl:pv	_	_
4	die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	Marktforscher	Forscher	NOUN	NN	Gender=Masc|Number=Plur	1	nsubj	_	_
6	darüber	darüber	ADV	PROAV	PronType=Dem	5	advmod	_	_
7	,	,	PUNCT	$,	PunctType=Comm	25	punct	_	_
8	ob	ob	SCONJ	KOUS	_	25	mark	_	_
9	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Flaute	Flaute	NOUN	NN	Gender=Fem|Number=Sing	25	nsubj	_	_
11	in	in	ADP	APPR	AdpType=Prep|Case=Dat	13	case	_	_
12	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	13	det	_	_
13	Business-Bereich	Bereich	NOUN	NN	Gender=Masc|Number=Sing	10	nmod	_	_
14	als	als	CCONJ	KOKOM	ConjType=Comp	15	case	_	_
15	Nachwirkung	Nachwirkung	NOUN	NN	Gender=Fem|Number=Sing	25	obl	_	_
16	der	der	DET	ART	Case=Gen|Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	Jahr-2000-Probleme	Problem	NOUN	NN	Gender=Neut|Number=Plur	15	nmod	_	_
18	oder	oder	CCONJ	KON	_	21	cc	_	_
19	als	als	CCONJ	KOKOM	ConjType=Comp	21	case	_	_
20	ein	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|NumType=Card|PronType=Art	21	det	_	_
21	Anzeichen	Anzeichen	NOUN	NN	Gender=Neut|Number=Sing	15	conj	_	_
22	einer	ein	DET	ART	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	23	det	_	_
23	Marktsättigung	Sättigung	NOUN	NN	Gender=Fem|Number=Sing	21	nmod	_	_
24	zu	zu	PART	PTKZU	PartType=Inf	25	mark	_	_
25	interpretieren	interpretieren	VERB	VVINF	VerbForm=Inf	1	ccomp	_	Cxn=Interrogative-Polar-Indirect|CxnElt=25:Interrogative-Polar-Indirect.Clause
26	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux	_	_
27	.	.	PUNCT	$.	PunctType=Peri	1	punct	_	_

~~~


