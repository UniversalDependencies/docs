---
layout: base
title:  'Statistics of flat in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="de_pud-dep-flat-name.html">flat:name</a></tt>.

4 nodes (0%) are attached to their parents as `flat`.

4 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="de_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (1; 25% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	Die	_	DET	DT	Case=Nom|Definite=Def|Number=Plur|Person=3	3	det	_	_
2	zentralen	_	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur|Person=3	3	amod	_	InflectionType=Weak
3	Anden	_	PROPN	NNP	Case=Nom|Number=Plur|Person=3	4	nsubj	_	_
4	gehören	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
5	zu	_	ADP	IN	_	9	case	_	_
6	den	_	DET	DT	Case=Dat|Definite=Def|Number=Plur|Person=3	9	det	_	_
7	sogenannten	_	ADJ	JJ	Case=Dat|Degree=Pos|Number=Plur|Person=3	9	amod	_	InflectionType=Weak
8	„	_	PUNCT	``	_	9	punct	_	SpaceAfter=No
9	Andes	_	PROPN	NNP	Case=Dat|Number=Plur|Person=3	4	obl	_	_
10	de	_	ADP	IN	Foreign=Yes	9	flat	_	_
11	tipo	_	NOUN	NN	Foreign=Yes|Gender=Masc|Number=Sing|Person=3	10	flat	_	_
12	andino	_	ADJ	JJ	Degree=Pos|Gender=Masc|Number=Sing|Person=3	11	amod	_	Proper=True|SpaceAfter=No
13	“	_	PUNCT	``	_	9	punct	_	SpaceAfter=No
14	,	_	PUNCT	,	_	23	punct	_	_
15	die	_	PRON	REL	Case=Nom|Number=Plur|Person=3	23	nsubj	_	_
16	sich	_	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Rcp	23	obj	_	_
17	durch	_	ADP	IN	_	19	case	_	_
18	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	19	det	_	_
19	Subduktion	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	23	obl	_	_
20	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	22	det	_	_
21	ozeanischen	_	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Person=3	22	amod	_	InflectionType=Weak
22	Kruste	_	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	19	nmod	_	_
23	gebildet	_	VERB	VBN	Tense=Past	9	acl:relcl	_	_
24	hatten	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	23	aux	_	SpaceAfter=No
25	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 flat	color:blue
1	Diese	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	2	det	_	_
2	Abfassung	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
3	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
4	der	_	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	5	det	_	_
5	Gründungsakt	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
6	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	8	det	_	_
7	Römischen	_	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Person=3	8	amod	_	InflectionType=Weak|Proper=True
8	Gesetzgebung	_	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	5	nmod	_	SpaceAfter=No
9	,	_	PUNCT	,	_	11	punct	_	_
10	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Plur|Person=3	11	det	_	_
11	Institutionen	_	NOUN	NN	Case=Gen|Gender=Fem|Number=Plur|Person=3	8	conj	_	_
12	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	14	det	_	_
13	Römischen	_	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Person=3	14	amod	_	InflectionType=Weak|Proper=True
14	Republik	_	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	11	nmod	_	_
15	und	_	CCONJ	CC	_	17	cc	_	_
16	des	_	DET	DT	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|Person=3	17	det	_	_
17	mos	_	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing|Person=3	8	compound	_	Proper=True
18	mojorum	_	X	FW	Foreign=Yes	17	flat	_	SpaceAfter=No
19	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	Die	_	DET	DT	Case=Nom|Definite=Def|Number=Plur|Person=3	3	det	_	_
2	zentralen	_	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur|Person=3	3	amod	_	InflectionType=Weak
3	Anden	_	PROPN	NNP	Case=Nom|Number=Plur|Person=3	4	nsubj	_	_
4	gehören	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
5	zu	_	ADP	IN	_	9	case	_	_
6	den	_	DET	DT	Case=Dat|Definite=Def|Number=Plur|Person=3	9	det	_	_
7	sogenannten	_	ADJ	JJ	Case=Dat|Degree=Pos|Number=Plur|Person=3	9	amod	_	InflectionType=Weak
8	„	_	PUNCT	``	_	9	punct	_	SpaceAfter=No
9	Andes	_	PROPN	NNP	Case=Dat|Number=Plur|Person=3	4	obl	_	_
10	de	_	ADP	IN	Foreign=Yes	9	flat	_	_
11	tipo	_	NOUN	NN	Foreign=Yes|Gender=Masc|Number=Sing|Person=3	10	flat	_	_
12	andino	_	ADJ	JJ	Degree=Pos|Gender=Masc|Number=Sing|Person=3	11	amod	_	Proper=True|SpaceAfter=No
13	“	_	PUNCT	``	_	9	punct	_	SpaceAfter=No
14	,	_	PUNCT	,	_	23	punct	_	_
15	die	_	PRON	REL	Case=Nom|Number=Plur|Person=3	23	nsubj	_	_
16	sich	_	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Rcp	23	obj	_	_
17	durch	_	ADP	IN	_	19	case	_	_
18	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	19	det	_	_
19	Subduktion	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	23	obl	_	_
20	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	22	det	_	_
21	ozeanischen	_	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Person=3	22	amod	_	InflectionType=Weak
22	Kruste	_	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	19	nmod	_	_
23	gebildet	_	VERB	VBN	Tense=Past	9	acl:relcl	_	_
24	hatten	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	23	aux	_	SpaceAfter=No
25	.	_	PUNCT	.	_	4	punct	_	_

~~~


