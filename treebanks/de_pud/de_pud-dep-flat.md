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
1	Die	der	DET	DT	Case=Nom|Definite=Def|Number=Plur|PronType=Art	3	det	_	_
2	zentralen	zentral	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur	3	amod	_	InflectionType=Weak
3	Anden	Anden	PROPN	NNP	Case=Nom|Number=Plur	4	nsubj	_	_
4	gehören	gehören	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
5	zu	zu	ADP	IN	_	9	case	_	_
6	den	der	DET	DT	Case=Dat|Definite=Def|Number=Plur|PronType=Art	9	det	_	_
7	sogenannten	sogenannt	ADJ	JJ	Case=Dat|Degree=Pos|Number=Plur	9	amod	_	InflectionType=Weak
8	„	„	PUNCT	``	_	9	punct	_	SpaceAfter=No
9	Andes	Andes	PROPN	NNP	Case=Dat|Number=Plur	4	obl	_	_
10	de	de	ADP	IN	Foreign=Yes	9	flat	_	_
11	tipo	tipo	NOUN	NN	Foreign=Yes|Gender=Masc|Number=Sing	10	flat	_	_
12	andino	andino	ADJ	JJ	Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No|Proper=True
13	“	“	PUNCT	``	_	9	punct	_	SpaceAfter=No
14	,	,	PUNCT	,	_	23	punct	_	_
15	die	der	PRON	REL	Case=Nom|Number=Plur|PronType=Dem,Rel	23	nsubj	_	_
16	sich	sich	PRON	PRP	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	23	obj	_	_
17	durch	durch	ADP	IN	_	19	case	_	_
18	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	Subduktion	Subduktion	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	23	obl	_	_
20	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
21	ozeanischen	ozeanisch	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	InflectionType=Weak
22	Kruste	Krust	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	19	nmod	_	_
23	gebildet	bilden	VERB	VBN	Tense=Past	9	acl:relcl	_	_
24	hatten	haben	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	23	aux	_	SpaceAfter=No
25	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 flat	color:blue
1	Diese	dieser	DET	DT	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	Abfassung	Abfassung	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
3	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
4	der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Gründungsakt	Gründungsakt	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
7	Römischen	römisch	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	InflectionType=Weak|Proper=True
8	Gesetzgebung	Gesetzgebung	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	_	_
10	der	der	DET	DT	Case=Gen|Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	Institutionen	Institution	NOUN	NN	Case=Gen|Gender=Fem|Number=Plur	8	conj	_	_
12	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
13	Römischen	römisch	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	InflectionType=Weak|Proper=True
14	Republik	Republik	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	_
15	und	und	CCONJ	CC	_	17	cc	_	_
16	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	17	det	_	_
17	mos	mos	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	8	compound	_	Proper=True
18	mojorum	mojorum	X	FW	Foreign=Yes	17	flat	_	SpaceAfter=No
19	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Number=Plur|PronType=Art	3	det	_	_
2	zentralen	zentral	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur	3	amod	_	InflectionType=Weak
3	Anden	Anden	PROPN	NNP	Case=Nom|Number=Plur	4	nsubj	_	_
4	gehören	gehören	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
5	zu	zu	ADP	IN	_	9	case	_	_
6	den	der	DET	DT	Case=Dat|Definite=Def|Number=Plur|PronType=Art	9	det	_	_
7	sogenannten	sogenannt	ADJ	JJ	Case=Dat|Degree=Pos|Number=Plur	9	amod	_	InflectionType=Weak
8	„	„	PUNCT	``	_	9	punct	_	SpaceAfter=No
9	Andes	Andes	PROPN	NNP	Case=Dat|Number=Plur	4	obl	_	_
10	de	de	ADP	IN	Foreign=Yes	9	flat	_	_
11	tipo	tipo	NOUN	NN	Foreign=Yes|Gender=Masc|Number=Sing	10	flat	_	_
12	andino	andino	ADJ	JJ	Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No|Proper=True
13	“	“	PUNCT	``	_	9	punct	_	SpaceAfter=No
14	,	,	PUNCT	,	_	23	punct	_	_
15	die	der	PRON	REL	Case=Nom|Number=Plur|PronType=Dem,Rel	23	nsubj	_	_
16	sich	sich	PRON	PRP	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	23	obj	_	_
17	durch	durch	ADP	IN	_	19	case	_	_
18	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	Subduktion	Subduktion	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	23	obl	_	_
20	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
21	ozeanischen	ozeanisch	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	InflectionType=Weak
22	Kruste	Krust	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	19	nmod	_	_
23	gebildet	bilden	VERB	VBN	Tense=Past	9	acl:relcl	_	_
24	hatten	haben	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	23	aux	_	SpaceAfter=No
25	.	.	PUNCT	.	_	4	punct	_	_

~~~


