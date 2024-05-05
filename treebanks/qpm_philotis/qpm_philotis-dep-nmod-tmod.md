---
layout: base
title:  'Statistics of nmod:tmod in UD_Pomak-Philotis'
udver: '2'
---

## Treebank Statistics: UD_Pomak-Philotis: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="qpm_philotis-dep-nmod.html">nmod</a></tt>.

88 nodes (0%) are attached to their parents as `nmod:tmod`.

47 instances of `nmod:tmod` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.38636363636364.

The following 9 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (50; 57% instances), <tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (15; 17% instances), <tt><a href="qpm_philotis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (14; 16% instances), <tt><a href="qpm_philotis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="qpm_philotis-pos-ADV.html">ADV</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="qpm_philotis-pos-ADV.html">ADV</a></tt>-<tt><a href="qpm_philotis-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qpm_philotis-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="qpm_philotis-pos-NUM.html">NUM</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:tmod	color:blue
1	Annók	adín	DET	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	méseca	mésec	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	4	nmod:tmod	_	_
3	sétne	sétne	ADV	_	_	4	advmod	_	_
4	fpíra	fpírom	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	faf	faf	ADP	_	_	7	case	_	_
6	annó	adín	DET	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	7	det	_	_
7	sélo	sélo	NOUN	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	4	obl:lmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod:tmod	color:blue
1	-	-	PUNCT	_	_	5	punct	_	_
2	Kyrk	kyrk	NUM	_	Definite=Ind|Number=Plur|NumType=Card	3	nummod	_	_
3	godíny	godína	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	5	nmod:tmod	_	_
4	ajsakóf	isakvózen	DET	_	Case=Nom|Deixis=Prox|DeixisRef=1|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	žyvót	žyvót	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
6	koláj	koláj	ADV	_	_	9	advmod	_	_
7	sa	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	9	expl	_	_
8	ne	ne	PART	_	Polarity=Neg	9	advmod	_	_
9	iskáravo	izkáravom	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod:tmod	color:blue
1	Faf	faf	ADP	_	_	2	case	_	_
2	Nedéle	Nedéle	PROPN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	7	obl:tmod	_	_
3	na	na	ADP	_	_	5	case	_	_
4	10	10	NUM	_	Definite=Ind|Number=Plur|NumType=Card	5	nummod	_	_
5	mesecáse	mésec	NOUN	_	Case=Acc|Definite=Def|Deixis=Prox|DeixisRef=1|Gender=Masc|Number=Sing	2	nmod:tmod	_	_
6	še	še	AUX	_	_	7	aux	_	_
7	stánava	stánavom	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	intihápon	intiháp	NOUN	_	Case=Nom|Definite=Def|Deixis=Remt|Gender=Masc|Number=Sing	7	nsubj	_	_
9	za	za	ADP	_	_	11	case	_	_
10	nóva	nov	ADJ	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	11	amod	_	_
11	müdǘre	müdǘre	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	7	obl	_	_
12	faf	faf	ADP	_	_	14	case	_	_
13	Néa	Néa	PROPN	_	Case=Acc|Definite=Ind|Number=Sing	14	amod	_	_
14	Dimokratía	Dimokratía	PROPN	_	Case=Acc|Definite=Ind|Number=Sing	7	obl:lmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	7	punct	_	_

~~~


