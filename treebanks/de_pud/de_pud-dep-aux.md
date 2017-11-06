---
layout: base
title:  'Statistics of aux in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="de_pud-dep-aux-pass.html">aux:pass</a></tt>.

375 nodes (2%) are attached to their parents as `aux`.

210 instances of `aux` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.13866666666667.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (349; 93% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (17; 5% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 aux	color:blue
1	Bisher	_	ADV	RB	Degree=Pos	7	advmod	_	_
2	hatten	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	7	aux	_	_
3	nur	_	ADV	RB	Degree=Pos	4	advmod	_	_
4	Blogger	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	7	nsubj	_	_
5	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|Person=3	6	det	_	_
6	Jets	_	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	7	obj	_	_
7	gesehen	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
8	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 aux	color:blue
1	Diese	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	2	det	_	_
2	Abteilung	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
3	muss	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux	_	_
4	sich	_	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Rcp	9	obj	_	_
5	nun	_	ADV	RB	Degree=Pos	9	advmod	_	_
6	auf	_	ADP	IN	_	8	case	_	_
7	neue	_	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Person=3	8	amod	_	InflectionType=Strong
8	Herausforderungen	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	9	obl	_	_
9	gefasst	_	ADJ	JJ	Degree=Pos	0	root	_	_
10	machen	_	AUX	VB	_	9	cop	_	SpaceAfter=No
11	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Diese	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	2	det	_	_
2	Affäre	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj:pass	_	_
3	kann	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux	_	_
4	als	_	CCONJ	CC	_	5	cc	_	_
5	Startpunkt	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
6	für	_	ADP	IN	_	8	case	_	_
7	seine	_	PRON	DTP$	Case=Acc|Gender=Fem|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	8	nmod:poss	_	_
8	Karriere	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	5	nmod	_	_
9	als	_	CCONJ	CC	_	11	cc	_	_
10	radikaler	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	11	amod	_	InflectionType=Strong
11	Revolutionär	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	conj	_	_
12	vestanden	_	AUX	VBN	Tense=Past	5	cop	_	_
13	werden	_	AUX	VB	_	5	aux:pass	_	SpaceAfter=No
14	.	_	PUNCT	.	_	5	punct	_	_

~~~


