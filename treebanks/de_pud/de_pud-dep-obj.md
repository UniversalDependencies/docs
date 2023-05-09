---
layout: base
title:  'Statistics of obj in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `obj`

This relation is universal.

898 nodes (4%) are attached to their parents as `obj`.

526 instances of `obj` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.61024498886414.

The following 9 pairs of parts of speech are connected with `obj`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (621; 69% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (199; 22% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (47; 5% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (20; 2% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj	color:blue
1	Was	was	PRON	WP	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	3	obj	_	_
2	sie	sie	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	sagt	sagen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	und	und	CCONJ	CC	_	7	cc	_	_
5	was	was	PRON	WP	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	7	obj	_	_
6	sie	sie	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	tut	tun	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	conj	_	_
8	-	-	PUNCT	-	_	12	punct	_	_
9	eigentlich	eigentlich	ADV	RB	Degree=Pos	12	advmod	_	_
10	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
11	es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	unglaublich	unglaublich	ADJ	JJ	Degree=Pos	3	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Dündar	Dündar	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	warnte	warnen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	Europa	Europa	PROPN	NNP	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	_
4	vor	vor	ADP	IN	_	7	case	_	_
5	zu	zu	ADV	RB	Degree=Pos	6	advmod	_	_
6	viel	viel	DET	DT	Case=Dat|Gender=Neut|Number=Sing|PronType=Ind	7	det	_	_
7	Verständnis	Verständnis	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	2	obl	_	_
8	für	für	ADP	IN	_	10	case	_	_
9	Erdogans	Erdogan	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	10	nmod:poss	_	_
10	Kurs	Kurs	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


