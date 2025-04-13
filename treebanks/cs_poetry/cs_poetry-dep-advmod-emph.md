---
layout: base
title:  'Statistics of advmod:emph in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="cs_poetry-dep-advmod.html">advmod</a></tt>.

114 nodes (2%) are attached to their parents as `advmod:emph`.

103 instances of `advmod:emph` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.08771929824561.

The following 19 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (42; 37% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PART.html">PART</a></tt> (14; 12% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (10; 9% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-PART.html">PART</a></tt> (8; 7% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (8; 7% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (6; 5% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (5; 4% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_poetry-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:emph	color:blue
1	Však	však	CCONJ	J^-------------	_	2	advmod:emph	_	_
2	vypadám	vypadat	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	!	!	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:emph	color:blue
1	O	o	INTJ	II-------------	_	5	dep	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	5	punct	_	_
3	jediné	jediný	ADJ	AANS1----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	8	amod	_	_
4	jen	jen	PART	TT-------------	_	5	advmod:emph	_	_
5	dej	dát	VERB	Vi-S---2--A----	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
6	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	5	obl:arg	_	_
7	slyšet	slyšet	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	5	xcomp	_	_
8	slovo	slovo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	7	obj	_	SpaceAfter=No
9	:	:	PUNCT	Z:-------------	_	10	punct	_	_
10	Ego	ego	PRON	II-------------	Foreign=Yes	8	appos	_	_
11	te	tu	PRON	TT-------------	Foreign=Yes	10	flat:foreign	_	_
12	absolvo	absolvere	VERB	NNNS1-----A----	Aspect=Perf|Foreign=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	10	flat:foreign	_	SpaceAfter=No
13	!	!	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:emph	color:blue
1	Ale	ale	CCONJ	J^-------------	_	3	advmod:emph	_	_
2	ty	ten	DET	PDFP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	3	det	_	_
3	oči	oko	NOUN	NNFP1-----A----	Case=Nom|Gender=Neut|Number=Plur	0	root	_	SpaceAfter=No
4	!	!	PUNCT	Z:-------------	_	3	punct	_	_

~~~


