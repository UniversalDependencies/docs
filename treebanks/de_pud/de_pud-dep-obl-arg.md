---
layout: base
title:  'Statistics of obl:arg in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="de_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="de_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

91 nodes (0%) are attached to their parents as `obl:arg`.

60 instances of `obl:arg` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.59340659340659.

The following 7 pairs of parts of speech are connected with `obl:arg`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (40; 44% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (30; 33% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (10; 11% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:arg	color:blue
1	An	an	ADP	APPR	_	3	case	_	_
2	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Tag	Tag	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	_
4	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Rennens	Rennen	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	3	nmod	_	_
6	wohnte	wohnen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	Elliott	Elliott	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
8	der	der	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Beerdigung	Beerdigung	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	6	obl:arg	_	_
10	seines	sein	DET	DTP$	Case=Gen|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	11	det:poss	_	_
11	Vaters	Vater	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
12	bei	bei	VERB	DC	_	6	compound:prt	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:arg	color:blue
1	Um	um	SCONJ	CC	_	4	mark	_	_
2	alldem	alledem	PRON	DT	Case=Dat|Gender=Neut|Number=Sing|PronType=Tot	4	obl:arg	_	_
3	zu	zu	PART	RP	_	4	mark	_	_
4	entfliehen	entfliehen	VERB	VB	_	6	advcl	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	verbrachten	verbringen	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
7	die	der	DET	DT	Case=Nom|Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	Remis	Remis	PROPN	NNP	Case=Nom|Number=Plur	6	nsubj	_	_
9	den	der	DET	DT	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Großteil	Großteil	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
11	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Sommers	Sommer	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
13	1947	1947	NUM	CD	NumType=Card	12	obl:tmod	_	_
14	in	in	ADP	IN	_	16	case	_	_
15	der	der	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	Schweiz	Schweiz	PROPN	NNP	Case=Dat|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:arg	color:blue
1	Er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	dient	dienen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	den	der	DET	DT	Case=Dat|Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	San	San	PROPN	NNP	Case=Dat|Gender=Masc|Number=Plur	2	obl:arg	_	_
5	Franciscans	Franciscan	PROPN	NNP	Case=Dat|Gender=Masc|Number=Plur	4	flat:name	_	_
6	als	als	CCONJ	CC	_	8	cc	_	_
7	städtisches	städtisch	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	InflectionType=Strong
8	Naherholungsgebiet	Naherholungsgebiet	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	2	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


