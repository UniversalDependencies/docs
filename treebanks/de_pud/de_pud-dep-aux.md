---
layout: base
title:  'Statistics of aux in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="de_pud-dep-aux-pass.html">aux:pass</a></tt>.

367 nodes (2%) are attached to their parents as `aux`.

205 instances of `aux` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.20708446866485.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (359; 98% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 aux	color:blue
1	Bisher	bisher	ADV	RB	Degree=Pos	7	advmod	_	_
2	hatten	haben	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	7	aux	_	_
3	nur	nur	ADV	RB	Degree=Pos	4	advmod	_	_
4	Blogger	Blogger	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
5	die	der	DET	DT	Case=Acc|Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	Jets	Jets	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	7	obj	_	_
7	gesehen	sehen	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 aux	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	große	groß	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	InflectionType=Weak
3	Höhe	Höhe	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	hilft	helfen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	9	punct	_	_
6	das	der	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	Klima	Klima	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	_
8	zu	zu	PART	RP	_	9	mark	_	_
9	kühlen	kühlen	VERB	VB	_	4	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	,	_	14	punct	_	_
11	das	der	PRON	REL	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem,Rel	14	nsubj	_	_
12	anderenfalls	anderenfalls	ADV	RB	Degree=Pos	14	advmod	_	_
13	sehr	sehr	ADV	RB	Degree=Pos	14	advmod	_	_
14	heiß	heiß	ADJ	JJ	Degree=Pos	7	acl:relcl	_	_
15	sein	sein	AUX	VB	_	14	cop	_	_
16	würde	werden	AUX	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Past	14	aux	_	SpaceAfter=No
17	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 aux	color:blue
1	Trudeau	Trudeau	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
2	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux	_	_
3	den	der	DET	DT	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	45.	45.	ADJ	JJ	Case=Acc|Gender=Masc|Number=Sing|NumType=Ord	5	amod	_	InflectionType=Weak
5	Präsidenten	Präsident	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	9	obj	_	_
6	der	der	DET	DT	Case=Gen|Definite=Def|Number=Plur|PronType=Art	8	det	_	_
7	Vereinigten	vereinigt	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	8	amod	_	InflectionType=Weak|Proper=True
8	Staaten	Staat	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	Proper=True
9	einladen	einladen	VERB	VB	_	0	root	_	SpaceAfter=No
10	,	,	PUNCT	,	_	14	punct	_	_
11	wer	wer	PRON	WP	Case=Nom|Number=Sing|PronType=Int,Rel	14	nsubj	_	_
12	auch	auch	ADV	RB	Degree=Pos	13	advmod	_	_
13	immer	immer	ADV	RB	Degree=Pos	11	advmod	_	_
14	das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	advcl	_	_
15	sein	sein	AUX	VB	_	14	cop	_	_
16	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	14	aux	_	SpaceAfter=No
17	.	.	PUNCT	.	_	9	punct	_	_

~~~


