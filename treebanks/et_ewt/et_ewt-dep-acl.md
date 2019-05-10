---
layout: base
title:  'Statistics of acl in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="et_ewt-dep-acl-relcl.html">acl:relcl</a></tt>.

352 nodes (1%) are attached to their parents as `acl`.

228 instances of `acl` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.63352272727273.

The following 15 pairs of parts of speech are connected with `acl`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (210; 60% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (62; 18% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (35; 10% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (19; 5% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl	color:blue
1	Mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	4	nmod	4:nmod	_
2	"	"	PUNCT	Z	_	4	punct	4:punct	SpaceAfter=No
3	tõestatud	tõestatud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	4:acl	_
4	füüsika	füüsika	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
5	"	"	PUNCT	Z	_	4	punct	4:punct	SpaceAfter=No
6	?	?	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 acl	color:blue
1	Igast	iga	DET	P	Case=Ela|Number=Sing|PronType=Tot	2	det	2:det	_
2	kroonist	kroon	NOUN	S	Case=Ela|Number=Sing	0	root	0:root	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
4	kahju	kahju	NOUN	S	Case=Nom|Number=Sing	2	nsubj:cop	2:nsubj	SpaceAfter=No
5	,	,	PUNCT	Z	_	9	punct	9:punct	_
6	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	9	obj	9:obj	_
7	euroga	euro	NOUN	S	Case=Com|Number=Sing	9	obl	9:obl	_
8	ära	ära	ADV	D	_	9	compound:prt	9:compound	_
9	võetakse	võtma	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	acl	2:acl	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl	color:blue
1	Samas	samas	ADV	D	_	5	advmod	5:advmod	_
2	ei	ei	AUX	V	Polarity=Neg	5	aux	5:aux	_
3	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
4	armulaud	armu_laud	NOUN	S	Case=Nom|Number=Sing	5	obj	5:obj	_
5	antud	andma	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	selleks	see	PRON	P	Case=Tra|Number=Sing|PronType=Dem	5	obl	5:obl	SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	10:punct	_
8	et	et	SCONJ	J	_	10	mark	10:mark	_
9	inimest	inimene	NOUN	S	Case=Par|Number=Sing	10	obj	10:obj	_
10	hirmutada	hirmutama	VERB	V	VerbForm=Inf	6	acl	6:acl	SpaceAfter=No
11	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


