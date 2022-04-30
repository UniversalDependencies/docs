---
layout: base
title:  'Statistics of obl:arg in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-obl.html">obl</a></tt>.

4 nodes (0%) are attached to their parents as `obl:arg`.

3 instances of `obl:arg` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.25.

The following 3 pairs of parts of speech are connected with `obl:arg`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 obl:arg	color:blue
1	Angeblich	angeblich	ADJ	ADJD	Degree=Pos|Variant=Short	2	advmod	_	_
2	geriet	geraten	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	der	der	DET	ART	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Apple-Chef	Chef	NOUN	NN	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
5	darüber	darüber	ADV	PROAV	_	4	advmod	_	_
6	so	so	ADV	ADV	Degree=Pos	2	advmod	_	_
7	in	in	ADP	APPR	AdpType=Prep|Case=Acc	8	case	_	_
8	Rage	Rage	NOUN	NN	Gender=Fem|Number=Sing|Person=3	2	obl:arg	_	_
9	(	(	PUNCT	$(	PunctType=Brck	12	punct	_	_
10	nicht	nicht	PART	PTKNEG	Polarity=Neg	12	advmod	_	_
11	zu	zu	PART	PTKZU	PartType=Inf	12	mark	_	_
12	verwechseln	verwechseln	VERB	VVINF	VerbForm=Inf	8	parataxis	_	_
13	mit	mit	ADP	APPR	AdpType=Prep|Case=Dat	16	case	_	_
14	dem	dem	DET	ART	Case=Dat|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
15	gleichnamigen	gleichnamig	ADJ	ADJA	Degree=Pos|Number=Sing	16	amod	_	_
16	ATI-Chip	Chip	NOUN	NN	Gender=Masc|Number=Sing|Person=3	12	obl	_	_
17	...	...	PUNCT	$.	PunctType=Peri	12	punct	_	_
18	)	)	PUNCT	$(	PunctType=Brck	12	punct	_	_
19	,	,	PUNCT	$,	PunctType=Comm	28	punct	_	_
20	dass	dass	SCONJ	KOUS	_	28	mark	_	_
21	er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	28	nsubj	_	_
22	die	die	DET	ART	Case=Acc|Number=Plur|PronType=Art	23	det	_	_
23	Radeon-Karten	Karte	NOUN	NN	Gender=Fem|Number=Plur|Person=3	27	obj	_	_
24	aus	aus	ADP	APPR	AdpType=Prep|Case=Dat	26	case	_	_
25	allen	all	DET	PIDAT	Case=Dat|Number=Plur|Person=3	26	det	_	_
26	Macintosh-Modellen	Modell	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur|Person=3	27	obl	_	_
27	entfernen	entfernen	VERB	VVINF	VerbForm=Inf	28	xcomp	_	_
28	ließ	lassen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	ccomp	_	_
29	.	.	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 obl:arg	color:blue
1	Werner	Werner	PROPN	NE	Gender=Masc|Number=Sing|Person=3	11	nsubj	_	_
2	Schmidt	Schmidt	PROPN	NE	Number=Sing|Person=3	1	flat:name	_	_
3	,	,	PUNCT	$,	PunctType=Comm	4	punct	_	_
4	Wirtschaftsreferent	Referent	NOUN	NN	Gender=Masc|Number=Sing|Person=3	1	appos	_	_
5	bei	bei	ADP	APPR	AdpType=Prep|Case=Dat	7	case	_	_
6	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	7	det	_	_
7	Bundesbeauftragten	Beauftragt	NOUN	NN	Degree=Pos|Number=Sing|Person=3	4	nmod	_	_
8	für	für	ADP	APPR	AdpType=Prep|Case=Acc	9	case	_	_
9	Datenschutz	Schutz	NOUN	NN	Gender=Masc|Number=Sing|Person=3	7	nmod	_	_
10	,	,	PUNCT	$,	PunctType=Comm	4	punct	_	_
11	hält	halten	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	ein	ein	DET	ART	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	14	det	_	_
13	solches	solch	ADJ	PIDAT	Case=Acc|Gender=Neut|Number=Sing|Person=3	14	amod	_	_
14	Vorgehen	Vorgehen	NOUN	NN	Gender=Neut|Number=Sing|Person=3	11	obj	_	_
15	für	für	ADP	APPR	AdpType=Prep|Case=Acc	16	case	_	_
16	strafbar	strafbar	ADJ	ADJD	Degree=Pos|Variant=Short	11	obl:arg	_	_
17	:	:	PUNCT	$.	PunctType=Peri	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:arg	color:blue
1	Aber	Aber	CCONJ	KON	_	7	cc	_	_
2	die	die	DET	ART	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Sitzung	Sitzung	NOUN	NN	Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
4	sollte	sollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	7	aux	_	_
5	auch	auch	ADV	ADV	_	6	advmod	_	_
6	dazu	dazu	ADV	PROAV	_	7	obl:arg	_	_
7	dienen	dienen	VERB	VVINF	VerbForm=Inf	0	root	_	_
8	,	,	PUNCT	$,	PunctType=Comm	18	punct	_	_
9	der	der	DET	ART	Case=Dat|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Öffentlichkeit	Öffentlichkeit	NOUN	NN	Gender=Fem|Number=Sing|Person=3	18	iobj	_	_
11	einen	einen	DET	ART	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Einblick	Einblick	NOUN	NN	Gender=Masc|Number=Sing|Person=3	18	obj	_	_
13	in	in	ADP	APPR	AdpType=Prep|Case=Acc	16	case	_	_
14	den	den	DET	ART	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
15	demokratisches	demokratisch	ADJ	ADJA	Degree=Pos|Gender=Neut|Number=Sing	16	amod	_	_
16	Prozeß	Prozeß	NOUN	NN	Gender=Masc|Number=Sing|Person=3	12	nmod	_	_
17	zu	zu	PART	PTKZU	PartType=Inf	18	mark	_	_
18	bieten	bieten	VERB	VVINF	VerbForm=Inf	7	xcomp	_	_
19	.	.	PUNCT	$.	PunctType=Peri	7	punct	_	_

~~~


