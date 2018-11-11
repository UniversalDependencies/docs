---
layout: base
title:  'Statistics of aux:pass in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-aux.html">aux</a></tt>.

230 nodes (1%) are attached to their parents as `aux:pass`.

132 instances of `aux:pass` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.23913043478261.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (220; 96% instances), <tt><a href="de_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 aux:pass	color:blue
1	Das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Person=3	2	det	_	_
2	Projekt	Projekt	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	8	nsubj:pass	_	_
3	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:pass	_	_
4	über	über	ADP	IN	_	5	case	_	_
5	Sponsoren	Sponsor	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	8	obl	_	_
6	und	und	CCONJ	CC	_	7	cc	_	_
7	Werbung	Werbung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	5	conj	_	_
8	finanziert	finanzieren	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 4 aux:pass	color:blue
1	Nordamerika	Nordamerika	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing|Person=3	15	nsubj:pass	_	_
2	und	und	CCONJ	CC	_	3	cc	_	_
3	Südamerika	Südamerika	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing|Person=3	1	conj	_	_
4	werden	werden	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	15	aux:pass	_	_
5	in	in	ADP	APPR	_	11	case	_	_
6	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|Person=3	11	det	_	_
7	Sieben	sieben	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	9	compound	_	SpaceAfter=No
8	-	-	PUNCT	-	_	7	punct	_	SpaceAfter=No
9	Kontinente	Kontinent	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	11	compound	_	SpaceAfter=No
10	-	-	PUNCT	-	_	9	punct	_	SpaceAfter=No
11	Modell	Modell	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	15	obl	_	_
12	als	als	CCONJ	CC	_	14	mark	_	_
13	eigenständige	eigenständig	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Person=3	14	amod	_	InflectionType=Strong
14	Kontinente	Kontinent	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	1	acl	_	_
15	betrachtet	betrachten	AUX	VBN	Tense=Past	0	root	_	SpaceAfter=No
16	.	.	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 aux:pass	color:blue
1	Diese	dies	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	2	det	_	_
2	Affäre	Affäre	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj:pass	_	_
3	kann	können	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux	_	_
4	als	als	CCONJ	CC	_	5	cc	_	_
5	Startpunkt	Startpunkt	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
6	für	für	ADP	IN	_	8	case	_	_
7	seine	sein	PRON	DTP$	Case=Acc|Gender=Fem|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	8	nmod:poss	_	_
8	Karriere	Karriere	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	5	nmod	_	_
9	als	als	CCONJ	CC	_	11	cc	_	_
10	radikaler	radikal	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	11	amod	_	InflectionType=Strong
11	Revolutionär	Revolutionär	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	conj	_	_
12	vestanden	vestehen	AUX	VBN	Tense=Past	5	cop	_	_
13	werden	werden	AUX	VB	_	5	aux:pass	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


