---
layout: base
title:  'Statistics of xcomp in UD_Pomak-Philotis'
udver: '2'
---

## Treebank Statistics: UD_Pomak-Philotis: Relations: `xcomp`

This relation is universal.

934 nodes (1%) are attached to their parents as `xcomp`.

934 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.03211991434689.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt> (915; 98% instances), <tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="qpm_philotis-pos-PART.html">PART</a></tt>-<tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="qpm_philotis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Ódi	hódem	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	da	da	AUX	_	_	3	aux	_	_
3	rúka	rǘkom	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	xcomp	_	_
4	drúgine	drug	DET	_	Animacy=Hum|Case=Acc|Definite=Def|Deixis=Remt|Gender=Masc|Number=Plur|PronType=Ind	3	det	_	SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 xcomp	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Kak	kak	ADV	_	PronType=Int	3	advmod	_	_
3	móža	móžom	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
4	-	-	PUNCT	_	_	3	punct	_	_
5	reklól	réčem	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	je	som	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
7	toj	ja	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
8	-	-	PUNCT	_	_	9	punct	_	_
9	píle	píle	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	5	dep	_	_
10	da	da	AUX	_	_	11	aux	_	_
11	dúmi	dúmem	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	xcomp	_	SpaceAfter=No
12	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	Dabré	dabré	ADV	_	_	11	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	če	če	SCONJ	_	_	5	mark	_	_
4	só	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	_	_
5	nájde	nájdom	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj	_	_
6	ty	ja	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	ínak	ínak	ADV	_	_	11	advmod	_	_
9	stádoso	stádo	NOUN	_	Case=Nom|Definite=Def|Deixis=Prox|DeixisRef=1|Gender=Neut|Number=Sing	11	dep	_	_
10	mi	moj	PRON	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	9	det	_	_
11	te	te	PART	_	_	0	root	_	_
12	da	da	AUX	_	_	13	aux	_	_
13	battísa	báttisom	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


