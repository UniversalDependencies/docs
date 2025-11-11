---
layout: base
title:  'Statistics of expl:subj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `expl:subj`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `expl`: <tt><a href="fr_rhapsodie-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_rhapsodie-dep-expl-pass.html">expl:pass</a></tt>.

425 nodes (1%) are attached to their parents as `expl:subj`.

409 instances of `expl:subj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.34823529411765.

The following 7 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (319; 75% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (37; 9% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (37; 9% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (23; 5% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:subj	color:blue
1	vraiment	vraiment	ADV	_	_	7	advmod	_	AlignBegin=239381|AlignEnd=239576|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=239576|AlignEnd=239576
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	AlignBegin=239576|AlignEnd=239656
4	psychiatrie	psychiatrie	NOUN	_	_	7	dislocated	_	AlignBegin=239656|AlignEnd=239997|Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=239997|AlignEnd=239997
6	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	AlignBegin=239997|AlignEnd=240043
7	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	AlignBegin=240043|AlignEnd=240161
8	ê~	ê~	X	_	ExtPos=VERB	7	ccomp	_	AlignBegin=240161|AlignEnd=240253|Scrap=Yes|SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	_	AlignBegin=240253|AlignEnd=240253
10	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	expl:subj	_	AlignBegin=240253|AlignEnd=240367
11	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=240367|AlignEnd=240551
12	être	être	AUX	_	VerbForm=Inf	11	ccomp	_	AlignBegin=240551|AlignEnd=241190|Scrap=Yes|SpaceAfter=No|Subject=NoRaising
13	…	…	PUNCT	_	_	11	punct	_	AlignBegin=241190|AlignEnd=241190

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 expl:subj	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	AlignBegin=189136|AlignEnd=189216|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	AlignBegin=189216|AlignEnd=189326|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	AlignBegin=189246|AlignEnd=189326
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	AlignBegin=189326|AlignEnd=189436|SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	AlignBegin=189436|AlignEnd=189516|SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	AlignBegin=189516|AlignEnd=189516
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	expl:subj	_	AlignBegin=189516|AlignEnd=189626|SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	AlignBegin=189626|AlignEnd=189666
9	surtout	surtout	ADV	_	_	11	advmod	_	AlignBegin=189666|AlignEnd=189916
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	AlignBegin=189916|AlignEnd=189946|Gender[ctxt]=Masc|SpaceAfter=No
11	hôpital	hôpital	NOUN	_	Number=Sing	0	root	_	AlignBegin=189946|AlignEnd=190226|Gender[lex]=Masc
12	public	public	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	AlignBegin=190226|AlignEnd=190486
13	qui	qui	PRON	_	PronType=Rel	15	nsubj	_	AlignBegin=190486|AlignEnd=190546
14	m'	moi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=1|PronType=Prs	15	obj	_	AlignBegin=190546|AlignEnd=190576|SpaceAfter=No
15	attire	attirer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	advcl:cleft	_	AlignBegin=190576|AlignEnd=190704|Filler=subj|SpaceAfter=No
16	.	.	PUNCT	_	_	11	punct	_	AlignBegin=190704|AlignEnd=190704

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl:subj	color:blue
1	ben	ben	INTJ	_	_	5	discourse	_	AlignBegin=85835|AlignEnd=85925|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=85925|AlignEnd=85925
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	AlignBegin=85925|AlignEnd=86025|SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	AlignBegin=86025|AlignEnd=86055
5	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	0	root	_	AlignBegin=86055|AlignEnd=86165
6	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	AlignBegin=86165|AlignEnd=86295
7	les	eux	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=3|PronType=Prs	9	obj	_	AlignBegin=86295|AlignEnd=86395
8	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux:tense	_	AlignBegin=86395|AlignEnd=86445|Filler=subj
9	payés	payer	VERB	_	VerbForm=Part|Voice=Act	5	advcl:cleft	_	AlignBegin=86445|AlignEnd=86946|Gender[ctxt]=Masc|Number[ctxt]=Plur|SpaceAfter=No|Tense[denom]=Past
10	.	.	PUNCT	_	_	5	punct	_	AlignBegin=86946|AlignEnd=86946

~~~


