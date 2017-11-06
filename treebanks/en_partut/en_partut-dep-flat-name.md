---
layout: base
title:  'Statistics of flat:name in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="en_partut-dep-flat-foreign.html">flat:foreign</a></tt>.

359 nodes (1%) are attached to their parents as `flat:name`.

358 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34818941504178.

The following 5 pairs of parts of speech are connected with `flat:name`: <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (352; 98% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	This	this	PRON	PD	Number=Sing|PronType=Dem	3	nsubj	_	_
2	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	photomicrographs	photomicrographs	ADJ	A	Degree=Pos	0	root	_	_
4	from	from	ADP	E	_	5	case	_	_
5	Nick	Nick	PROPN	SP	_	3	obl	_	_
6	Read	Read	PROPN	SP	_	5	flat:name	_	_
7	and	and	CCONJ	CC	_	8	cc	_	_
8	Patrick	Patrick	PROPN	SP	_	5	conj	_	_
9	Hickey	Hickey	PROPN	SP	_	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 30 flat:name	color:blue
1	But	but	CCONJ	CC	_	11	cc	_	_
2	the	the	DET	RD	Definite=Def|PronType=Art	3	det	_	_
3	depth	depth	NOUN	S	Number=Sing	11	nsubj	_	_
4	and	and	CCONJ	CC	_	5	cc	_	_
5	persistence	persistence	NOUN	S	Number=Sing	3	conj	_	_
6	of	of	ADP	E	_	9	case	_	_
7	the	the	DET	RD	Definite=Def|PronType=Art	9	det	_	_
8	ongoing	ongoing	ADJ	A	Degree=Pos	9	amod	_	_
9	crisis	crisis	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
10	have	have	AUX	VA	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	exposed	expose	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
12	the	the	DET	RD	Definite=Def|PronType=Art	13	det	_	_
13	euro	euro	NOUN	S	Number=Sing	16	nmod	_	SpaceAfter=No
14	's	's	PART	PART	_	13	case	_	_
15	fundamental	fundamental	ADJ	A	Degree=Pos	16	amod	_	_
16	fragilities	fragility	NOUN	S	Number=Plur	11	obj	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	20	punct	_	_
18	and	and	CCONJ	CC	_	20	cc	_	_
19	should	shall	AUX	VM	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	20	aux	_	_
20	serve	serve	VERB	V	VerbForm=Inf	11	conj	_	_
21	as	as	ADP	E	_	23	case	_	_
22	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	23	det	_	_
23	warning	warning	NOUN	S	Number=Sing	20	obl	_	_
24	that	that	PRON	PR	PronType=Rel	33	obj	_	_
25	today	today	NOUN	S	Number=Sing	28	nmod:tmod	_	SpaceAfter=No
26	's	's	PART	PART	_	25	case	_	_
27	technocratic	technocratic	ADJ	A	Degree=Pos	28	amod	_	_
28	Band	band	NOUN	S	Number=Sing	33	nsubj	_	SpaceAfter=No
29	-	-	PUNCT	FF	_	28	punct	_	SpaceAfter=No
30	Aids	Aids	PROPN	SP	_	28	flat:name	_	_
31	may	may	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	33	aux	_	_
32	not	not	PART	PART	Polarity=Neg	33	advmod	_	_
33	hold	hold	VERB	V	VerbForm=Inf	23	acl:relcl	_	_
34	in	in	ADP	E	_	36	case	_	_
35	the	the	DET	RD	Definite=Def|PronType=Art	36	det	_	_
36	face	face	NOUN	S	Number=Sing	33	obl	_	_
37	of	of	ADP	E	_	39	case	_	_
38	another	another	DET	RI	Definite=Ind|Number=Sing|PronType=Art	39	det	_	_
39	shock	shock	NOUN	S	Number=Sing	36	nmod	_	SpaceAfter=No
40	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat:name	color:blue
1	Shakespeare	Shakespeare	PROPN	SP	_	3	nsubj:pass	_	_
2	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	born	bear	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
4	and	and	CCONJ	CC	_	5	cc	_	_
5	brought	bring	VERB	V	Tense=Past|VerbForm=Part	3	conj	_	_
6	up	up	ADP	E	_	5	compound:prt	_	_
7	in	in	ADP	E	_	8	case	_	_
8	Stratford	Stratford	PROPN	SP	_	5	obl	_	SpaceAfter=No
9	-	-	PUNCT	FF	_	8	punct	_	SpaceAfter=No
10	upon	upon	ADP	E	_	8	flat:name	_	SpaceAfter=No
11	-	-	PUNCT	FF	_	8	punct	_	SpaceAfter=No
12	Avon	Avon	PROPN	SP	_	8	flat:name	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	3	punct	_	_

~~~


