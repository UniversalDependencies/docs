---
layout: base
title:  'Statistics of cc:preconj in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-cc.html">cc</a></tt>.

11 nodes (0%) are attached to their parents as `cc:preconj`.

10 instances of `cc:preconj` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.45454545454545.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (5; 45% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 18% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 18% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Sowohl	sowohl	CCONJ	CC	_	2	cc:preconj	_	_
2	Zeitpunkt	Zeitpunkt	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	11	nsubj:pass	_	_
3	als	als	CCONJ	CC	_	5	cc	_	_
4	auch	auch	ADV	RB	Degree=Pos	5	advmod	_	_
5	Ablauf	Ablauf	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	_
6	dieses	dieser	DET	DT	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	7	det	_	_
7	Ereignisses	Ereignis	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	2	nmod	_	_
8	werden	werden	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	11	aux:pass	_	_
9	sehr	sehr	ADV	RB	Degree=Pos	10	advmod	_	_
10	kontrovers	kontrovers	ADV	RB	Degree=Pos	11	advmod	_	_
11	diskutiert	diskutieren	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 cc:preconj	color:blue
1	In	in	ADP	IN	_	3	case	_	_
2	seiner	sein	DET	DTP$	Case=Dat|Gender=Fem|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	3	det:poss	_	_
3	Ansprache	Ansprache	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	17	obl	_	_
4	an	an	ADP	IN	_	6	case	_	_
5	das	der	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	Kabinett	Kabinett	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	3	punct	_	_
8	kurz	kurz	ADV	RB	Degree=Pos	14	advmod	_	_
9	nachdem	nachdem	SCONJ	CC	_	14	mark	_	_
10	deutsche	deutsch	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	InflectionType=Strong|Proper=True
11	Truppen	Truppe	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	14	nsubj	_	_
12	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Grenze	Grenze	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	14	obj	_	_
14	überschritten	überschreiten	VERB	VBN	Tense=Past	17	advcl	_	_
15	hatten	haben	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	14	aux	_	SpaceAfter=No
16	,	,	PUNCT	,	_	14	punct	_	_
17	beschuldigte	beschuldigen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
18	Chamberlain	Chamberlain	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	17	nsubj	_	_
19	sowohl	sowohl	CCONJ	CC	_	20	cc:preconj	_	_
20	Deutschland	Deutschland	PROPN	NNP	Case=Acc|Gender=Neut|Number=Sing	17	obj	_	_
21	als	als	CCONJ	CC	_	23	cc	_	_
22	auch	auch	ADV	RB	Degree=Pos	23	advmod	_	_
23	Österreich	Österreich	PROPN	NNP	Case=Acc|Gender=Neut|Number=Sing	20	conj	_	SpaceAfter=No
24	.	.	PUNCT	.	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 7 cc:preconj	color:blue
1	Es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	wurde	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	aux:pass	_	_
3	vorhergesagt	vorhersagen	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	15	punct	_	_
5	dass	dass	SCONJ	CC	_	15	mark	_	_
6	er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
7	entweder	entweder	CCONJ	CC	_	15	cc:preconj	_	_
8	in	in	ADP	IN	_	10	case	_	_
9	hohem	hoch	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	10	amod	_	InflectionType=Strong
10	Alter	Alter	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	15	obl	_	_
11	nach	nach	ADP	IN	_	14	case	_	_
12	einem	ein	DET	DT	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing|NumType=Card|PronType=Art	14	det	_	_
13	erignislosen	ereignislos	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	14	amod	_	InflectionType=Mixed
14	Leben	Leben	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	15	obl	_	_
15	dahinscheiden	dahinscheiden	VERB	VB	_	3	csubj:pass	_	_
16	oder	oder	CCONJ	CC	_	21	cc	_	_
17	jung	jung	ADV	RB	Degree=Pos	21	advmod	_	_
18	in	in	ADP	APPR	_	20	case	_	_
19	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	Kampf	Kampf	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	21	obl	_	_
21	sterben	sterben	VERB	VB	_	15	conj	_	_
22	und	und	CCONJ	CC	_	27	cc	_	_
23	Unsterblichkeit	Unsterblichkeit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	27	obj	_	_
24	durch	durch	ADP	IN	_	26	case	_	_
25	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	26	det	_	_
26	Poesie	Poesie	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	27	obl	_	_
27	erlangen	erlangen	VERB	VB	_	21	conj	_	_
28	würde	werden	AUX	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Past	15	aux	_	SpaceAfter=No
29	.	.	PUNCT	.	_	3	punct	_	_

~~~


