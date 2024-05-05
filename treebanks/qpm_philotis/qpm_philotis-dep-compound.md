---
layout: base
title:  'Statistics of compound in UD_Pomak-Philotis'
udver: '2'
---

## Treebank Statistics: UD_Pomak-Philotis: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="qpm_philotis-dep-compound-redup.html">compound:redup</a></tt>.

10 nodes (0%) are attached to their parents as `compound`.

10 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="qpm_philotis-pos-ADV.html">ADV</a></tt>-<tt><a href="qpm_philotis-pos-ADV.html">ADV</a></tt> (4; 40% instances), <tt><a href="qpm_philotis-pos-NUM.html">NUM</a></tt>-<tt><a href="qpm_philotis-pos-NUM.html">NUM</a></tt> (4; 40% instances), <tt><a href="qpm_philotis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qpm_philotis-pos-ADJ.html">ADJ</a></tt> (2; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 compound	color:blue
1	Búgün	búgün	ADV	_	_	7	advmod	_	_
2	isýj	isýj	ADV	_	Deixis=Prox|DeixisRef=1|PronType=Dem	1	compound	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	útre	útre	ADV	_	_	5	compound:redup	_	_
5	inýj	inýj	ADV	_	Deixis=Remt|PronType=Dem	1	compound	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	vídela	vídem	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
8	je	som	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
9	nevǽstana	nevǽsta	NOUN	_	Case=Nom|Definite=Def|Deixis=Remt|Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	7	punct	_	_
11	če	če	SCONJ	_	_	13	mark	_	_
12	na	na	PART	_	Polarity=Neg	13	advmod	_	_
13	móža	móžom	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	_
14	da	da	AUX	_	_	16	aux	_	_
15	só	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	16	expl	_	_
16	žyvé	žývem	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	csubj	_	_
17	vrit	vrit	ADV	_	_	16	advmod	_	_
18	inýj	inýj	ADV	_	Deixis=Remt|PronType=Dem	16	advmod	_	SpaceAfter=No
19	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	Beš	beš	NUM	_	Definite=Ind|Number=Plur|NumType=Card	0	root	_	_
2	jus	jus	NUM	_	Definite=Ind|Number=Plur|NumType=Card	1	compound	_	_
3	kyrk	kyrk	NUM	_	Definite=Ind|Number=Plur|NumType=Card	1	compound	_	SpaceAfter=No
4	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 compound	color:blue
1	Bir	bir	DET	_	Definite=Ind|Number=Sing|PronType=Ind	11	advmod	_	_
2	vakýt	vakýt	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	1	fixed	_	_
3	bir	bir	DET	_	Definite=Ind|Number=Sing|PronType=Ind	1	fixed	_	_
4	zemán	zemán	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	1	fixed	_	_
5	je	som	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	fixed	_	_
6	Hamdí	Hamdí	PROPN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	11	nsubj	_	SpaceAfter=No
7	-	-	PUNCT	_	_	6	punct	_	SpaceAfter=No
8	star	star	ADJ	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	6	compound	_	_
9	nó	no	PART	_	PartTypeQpm=Ind	10	advmod	_	_
10	kaná	kaná	PRON	_	PronType=Int	11	obj	_	_
11	právil	právem	VERB	_	Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
12	samýj	sámyjem	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	xcomp	_	_
13	pri	pri	ADP	_	_	15	case	_	_
14	annók	adín	DET	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	15	det	_	_
15	gǿle	gǿl	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	12	obl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	11	punct	_	_

~~~


