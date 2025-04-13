---
layout: base
title:  'Statistics of advmod:emph in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="cpg_amgic-dep-advmod.html">advmod</a></tt>.

4 nodes (1%) are attached to their parents as `advmod:emph`.

4 instances of `advmod:emph` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt> (2; 50% instances), <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt> (1; 25% instances), <tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt>-<tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advmod:emph	color:blue
1	Tútus	(e)tútus	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	_
2	éši	éxu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	polá	polís	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	4	amod	_	_
4	pará	pará	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	2	obj	_	LC=YES|MorphSynC=L|MorphSynSC=LAgr|OrigLang=tr|#no special plural form, cf. Kostakis1968:59 (or < çok para)
5	ki	ki	ADV	ADV	_	2	advmod:emph	_	LC=YES|MorphSynC=FrGrM|MorphSynSC=EmphPart|OrigLang=tr|SpaceAfter=No
6	˙	˙	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Mándis	mándis	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	ki	ki	ADV	_	_	1	advmod:emph	_	LC=YES|MorphSynC=MorphIn|MorphSynSC=DiscM
3	laí	laló	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	tu	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
5	óči	óči	SCONJ	SCONJ	_	11	mark	_	_
6	"	"	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
7	ko	ko	ADJ	_	Number=Sing	9	amod	_	#indeclinable|#Emphatic Possessive Pronoun, compare < MG ο δικός/η δική μου but in Silliot it is indeclinable
8	su	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=2|Poss=Yes|PronType=Prs	9	nmod	_	_
9	kóri	kóri	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
10	se	se	AUX	Fut	_	11	aux	_	_
11	pári	pér(n)u	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	ccomp	_	_
12	tu	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	staxtiǰí	staxtiǰís	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	LC=YES|MorphSynC=BGrEl|MorphSynSC=DerBouM|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
15	"	"	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	tútus	(e)tútus	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	ki	ki	ADV	_	_	1	advmod:emph	_	LC=YES|MorphSynC=MorphIn|MorphSynSC=DiscM
3	laí	laló	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	tu	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
5	óči	óči	SCONJ	SCONJ	_	12	mark	_	_
6	"	"	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
7	xič	xič	ADV	ADV	_	9	advmod	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=NegQ|Orig=hiç|OrigLang=tr
8	na	na	AUX	Subj	_	9	aux	_	_
9	fáγu	tróγo	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	ccomp	_	_
10	psomí	psomí	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	_
11	ren	ren	PART	Neg	_	12	advmod	_	_
12	éxu	éxu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	LC=YES|MorphSynC=SynIn|MorphSynSC=HFinVFin|SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	12	punct	_	_
14	na	na	AUX	Subj	_	15	aux	_	_
15	forósu	foréno	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	18	ccomp	_	_
16	rúxa	(rúxu)	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	15	obj	_	_
17	ren	ren	PART	Neg	_	18	advmod	_	_
18	éxu	éxu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	LC=YES|MorphSynC=SynIn|MorphSynSC=HFinVFin|SpaceAfter=No
19	;	;	PUNCT	PUNCT	_	18	punct	_	_
20	náxala	náxala	ADV	_	_	22	advmod	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=WhW|OrigLang=tr
21	mi	mi	PART	Neg	_	22	advmod	_	_
22	düšünǰísu	düšündó	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	SpaceAfter=No
23	?	?	PUNCT	PUNCT	_	22	punct	_	SpaceAfter=No
24	"	"	PUNCT	PUNCT	_	3	punct	_	_

~~~


