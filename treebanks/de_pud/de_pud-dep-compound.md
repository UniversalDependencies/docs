---
layout: base
title:  'Statistics of compound in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="de_pud-dep-compound-prt.html">compound:prt</a></tt>.

250 nodes (1%) are attached to their parents as `compound`.

240 instances of `compound` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.768.

The following 25 pairs of parts of speech are connected with `compound`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (104; 42% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (77; 31% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (12; 5% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (10; 4% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 compound	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Produktion	Produktion	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	9	nsubj:pass	_	_
3	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
4	Smartphone	Smartphone	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	6	compound	_	SpaceAfter=No
5	-	-	PUNCT	-	_	4	punct	_	SpaceAfter=No
6	Modells	Modell	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	_
7	wurde	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	aux:pass	_	_
8	komplett	komplett	ADV	RB	Degree=Pos	9	advmod	_	_
9	eingestellt	einstellen	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound	color:blue
1	Ich	ich	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	frage	fragen	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	mich	ich	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Rcp	2	obj	_	_
4	auch	auch	ADV	RB	Degree=Pos	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	12	punct	_	_
6	ob	ob	SCONJ	CC	_	12	mark	_	_
7	der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	Davis	Davis	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	9	compound	_	_
9	Cup	Cup	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	Proper=True
10	eine	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	11	det	_	_
11	Rolle	Rolle	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	_
12	spielte	spielen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 compound	color:blue
1	Diese	dieser	DET	DT	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	2	det	_	_
2	Pflanzenfamilien	Pflanzenfamilie	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
3	sind	sein	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
4	noch	noch	ADV	RB	Degree=Pos	3	advmod	_	_
5	in	in	ADP	IN	_	8	case	_	_
6	Papua	Papua	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing	8	compound	_	SpaceAfter=No
7	-	-	PUNCT	-	_	6	punct	_	SpaceAfter=No
8	Neuguinea	Neuguinea	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing	3	obl	_	_
9	zu	zu	PART	RP	_	10	mark	_	_
10	finden	finden	VERB	VB	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


