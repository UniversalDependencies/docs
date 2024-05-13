---
layout: base
title:  'Statistics of acl:relcl in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-acl.html">acl</a></tt>.

458 nodes (1%) are attached to their parents as `acl:relcl`.

458 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.96943231441048.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (317; 69% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (46; 10% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (30; 7% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (26; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	And	and	CCONJ	CC	_	5	cc	_	_
2	this	this	PRON	PD	Number=Sing|PronType=Dem	5	nsubj	_	_
3	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	the	the	DET	RD	Definite=Def|PronType=Art	5	det	_	_
5	paradigm	paradigm	NOUN	S	Number=Sing	0	root	_	_
6	that	that	PRON	PR	PronType=Rel	8	obj	_	_
7	we	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
8	see	see	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	throughout	throughout	ADP	E	_	11	case	_	_
10	the	the	DET	RD	Definite=Def|PronType=Art	11	det	_	_
11	universe	universe	NOUN	S	Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	This	this	PRON	PD	Number=Sing|PronType=Dem	3	nsubj	_	_
2	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	what	what	PRON	PR	Number=Sing|PronType=Rel	0	root	_	_
4	we	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
5	are	be	AUX	VA	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	today	today	ADV	B	_	7	advmod	_	_
7	asking	ask	VERB	V	VerbForm=Ger	3	acl:relcl	_	_
8	the	the	DET	RD	Definite=Def|PronType=Art	9	det	_	_
9	Commissioner	commissioner	NOUN	S	Number=Sing	7	obj	_	_
10	for	for	ADP	E	_	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 acl:relcl	color:blue
1	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
2	This	this	DET	DD	Number=Sing|PronType=Dem	3	det	_	_
3	reality	reality	NOUN	S	Number=Sing	5	nsubj:pass	_	_
4	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	noted	note	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
6	by	by	ADP	E	_	7	case	_	_
7	playwright	playwright	NOUN	S	Number=Sing	5	obl	_	_
8	Oscar	Oscar	PROPN	SP	_	7	nmod	_	_
9	Wilde	Wilde	PROPN	SP	_	8	flat	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	8	punct	_	_
11	who	who	PRON	PR	PronType=Rel	12	nsubj	_	_
12	said	say	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	8	acl:relcl	_	SpaceAfter=No
13	:	:	PUNCT	FC	_	5	punct	_	_

~~~


