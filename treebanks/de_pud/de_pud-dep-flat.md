---
layout: base
title:  'Statistics of flat in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="de_pud-dep-flat-name.html">flat:name</a></tt>.

14 nodes (0%) are attached to their parents as `flat`.

14 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.64285714285714.

The following 11 pairs of parts of speech are connected with `flat`: <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (3; 21% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (2; 14% instances), <tt><a href="de_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (1; 7% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="de_pud-pos-X.html">X</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 39 flat	color:blue
1	1976	1976	NUM	CD	NumType=Card	2	obl:tmod	_	_
2	traf	treffen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	sich	er|es|sie	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Rcp	2	obj	_	_
5	mit	mit	ADP	IN	_	6	case	_	_
6	Kiki	Kiki	PROPN	NNP	Case=Dat|Gender=Fem|Number=Sing|Person=3	2	obl	_	_
7	Dee	Dee	PROPN	NNP	Case=Dat|Gender=Fem|Number=Sing|Person=3	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	,	_	10	punct	_	_
9	einer	ein	DET	DT	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing|Person=3	10	det	_	_
10	Freundin	Freundin	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	6	appos	_	SpaceAfter=No
11	,	,	PUNCT	,	_	21	punct	_	_
12	die	der	PRON	REL	Case=Nom|Gender=Fem|Number=Sing|Person=3	21	nsubj	_	_
13	auch	auch	ADV	RB	Degree=Pos	21	advmod	_	_
14	mit	mit	ADP	IN	_	16	case	_	_
15	seinem	sein	PRON	DTP$	Case=Dat|Gender=Neut|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	16	nmod:poss	_	_
16	Plattenlabel	Plattenlabel	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	21	obl	_	_
17	The	The	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	20	det	_	Proper=True
18	Rocket	Rocket	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	19	compound	_	Proper=True
19	Record	Record	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	20	compound	_	Proper=True
20	Company	Company	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	16	appos	_	Proper=True
21	arbeitete	arbeiten	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	acl:relcl	_	SpaceAfter=No
22	,	,	PUNCT	,	_	26	punct	_	_
23	um	um	SCONJ	CC	_	26	mark	_	_
24	einen	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|Person=3	25	det	_	_
25	Song	Song	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	26	obj	_	_
26	aufzunehmen	aufnehmen	VERB	VB	_	2	advcl	_	SpaceAfter=No
27	,	,	PUNCT	,	_	32	punct	_	_
28	der	der	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|Person=3	32	nsubj	_	_
29	ein	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3	31	det	_	_
30	bemerkenswerter	bemerkenswert	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	31	amod	_	InflectionType=Mixed
31	Erfolg	Erfolg	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	32	xcomp	_	_
32	werden	werden	VERB	VB	_	25	acl:relcl	_	_
33	sollte	sollen	AUX	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Past	32	aux	_	SpaceAfter=No
34	:	:	PUNCT	:	_	36	punct	_	_
35	„	„	PUNCT	``	_	36	punct	_	SpaceAfter=No
36	Don'	Don'	X	''	Mood=Imp|Number=Sing|Person=2|Tense=Pres	25	parataxis	_	SpaceAfter=No|Proper=True
37	t	t	X	AFX	_	36	flat	_	Proper=True
38	Go	Go	X	VB	_	36	flat	_	Proper=True
39	Breaking	Breaking	X	VBN	Tense=Pres|VerbForm=Part	36	flat	_	Proper=True
40	My	My	PRON	DTP$	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	41	nmod:poss	_	Proper=True
41	Heart	Heart	NOUN	NN	Number=Sing|Person=3	36	flat	_	SpaceAfter=No|Proper=True
42	“	“	PUNCT	''	_	36	punct	_	SpaceAfter=No
43	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 24 flat	color:blue
1	Rafferty	Rafferty	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	nahm	nehmen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	auf	auf	ADP	IN	_	5	case	_	_
4	dem	der	DET	DT	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|Person=3	5	det	_	_
5	Album	Album	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	2	obl	_	_
6	„	„	PUNCT	``	_	9	punct	_	SpaceAfter=No
7	Over	Over	ADP	IN	_	9	case	_	Proper=True
8	My	My	PRON	DTP$	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	9	nmod:poss	_	Proper=True
9	Head	Head	NOUN	NN	Number=Sing|Person=3	5	nmod	_	SpaceAfter=No|Proper=True
10	“	“	PUNCT	''	_	9	punct	_	_
11	von	von	ADP	IN	_	12	case	_	_
12	1994	1994	NUM	CD	NumType=Card	5	nmod	_	_
13	eine	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Person=3	15	det	_	_
14	neue	neu	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Person=3	15	amod	_	InflectionType=Mixed
15	Version	Version	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	2	obj	_	_
16	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3	19	det	_	_
17	Humblebums	Humblebums	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing|Person=3	19	compound	_	SpaceAfter=No
18	-	-	PUNCT	-	_	17	punct	_	SpaceAfter=No
19	Songs	Song	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing|Person=3	15	nmod	_	_
20	„	„	PUNCT	``	_	21	punct	_	SpaceAfter=No
21	Her	her	PRON	DTP$	Case=Nom|Gender=Masc|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	19	appos	_	Proper=True
22	fahter	father	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	21	flat	_	Proper=True
23	didn'	didn'	X	''	Mood=Ind|Number=Sing|Person=3|Tense=Past	21	flat	_	SpaceAfter=No|Proper=True
24	t	t	X	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	21	flat	_	Proper=True
25	like	like	VERB	VB	_	21	flat	_	Proper=True
26	me	me	PRON	PRP	Case=Acc|Number=Sing|Person=1	21	flat	_	Proper=True
27	anyway	anyway	ADV	RB	Degree=Pos	21	flat	_	SpaceAfter=No|Proper=True
28	“	“	PUNCT	''	_	21	punct	_	_
29	auf	auf	VERB	DC	_	2	compound:prt	_	SpaceAfter=No
30	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Number=Plur|Person=3	3	det	_	_
2	zentralen	zentral	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur|Person=3	3	amod	_	InflectionType=Weak
3	Anden	Anden	PROPN	NNP	Case=Nom|Number=Plur|Person=3	4	nsubj	_	_
4	gehören	gehören	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
5	zu	zu	ADP	IN	_	9	case	_	_
6	den	der	DET	DT	Case=Dat|Definite=Def|Number=Plur|Person=3	9	det	_	_
7	sogenannten	sogenannt	ADJ	JJ	Case=Dat|Degree=Pos|Number=Plur|Person=3	9	amod	_	InflectionType=Weak
8	„	„	PUNCT	``	_	9	punct	_	SpaceAfter=No
9	Andes	Andes	PROPN	NNP	Case=Dat|Number=Plur|Person=3	4	obl	_	_
10	de	de	ADP	IN	Foreign=Yes	9	flat	_	_
11	tipo	tipo	NOUN	NN	Foreign=Yes|Gender=Masc|Number=Sing|Person=3	10	flat	_	_
12	andino	andino	ADJ	JJ	Degree=Pos|Gender=Masc|Number=Sing|Person=3	11	amod	_	SpaceAfter=No|Proper=True
13	“	“	PUNCT	``	_	9	punct	_	SpaceAfter=No
14	,	,	PUNCT	,	_	23	punct	_	_
15	die	der	PRON	REL	Case=Nom|Number=Plur|Person=3	23	nsubj	_	_
16	sich	er|es|sie	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Rcp	23	obj	_	_
17	durch	durch	ADP	IN	_	19	case	_	_
18	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	19	det	_	_
19	Subduktion	Subduktion	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	23	obl	_	_
20	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	22	det	_	_
21	ozeanischen	ozeanisch	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Person=3	22	amod	_	InflectionType=Weak
22	Kruste	Krust	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	19	nmod	_	_
23	gebildet	bilden	VERB	VBN	Tense=Past	9	acl:relcl	_	_
24	hatten	haben	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	23	aux	_	SpaceAfter=No
25	.	.	PUNCT	.	_	4	punct	_	_

~~~


