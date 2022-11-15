---
layout: base
title:  'Statistics of acl in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `acl`

This relation is universal.

608 nodes (3%) are attached to their parents as `acl`.

607 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.02631578947368.

The following 15 pairs of parts of speech are connected with `acl`: <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (470; 77% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (84; 14% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (20; 3% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-X.html">X</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	facoltà	facoltà	NOUN	S	Gender=Fem	1	obj	_	_
3	di	di	ADP	E	_	4	mark	_	_
4	intervenire	intervenire	VERB	V	VerbForm=Inf	2	acl	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	1	punct	_	_
6	senatore	senatore	NOUN	S	Gender=Masc|Number=Sing	1	vocative	_	_
7	Falanga	Falanga	PROPN	SP	_	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 acl	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	punto	punto	NOUN	S	Gender=Masc|Number=Sing	8	nsubj:outer	_	_
3	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
4	che	che	SCONJ	CS	_	8	mark	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Paese	paese	NOUN	S	Gender=Masc|Number=Sing	8	nsubj	_	_
7	oggi	oggi	ADV	B	_	8	advmod	_	_
8	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	bisogno	bisogno	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
10	di	di	ADP	E	_	11	case	_	_
11	qualcuno	qualcuno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	9	nmod	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	decida	decidere	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	Ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	2	expl	_	_
2	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	però	però	ADV	B	_	2	advmod	_	_
4	situazioni	situazione	NOUN	S	Gender=Fem|Number=Plur	2	nsubj	_	_
5	in	in	ADP	E	_	6	case	_	_
6	cui	cui	PRON	PR	PronType=Rel	10	obl	_	_
7	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	10	nsubj	_	_
8	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
9	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	possibile	possibile	ADJ	A	Gender=Masc|Number=Sing	4	acl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	_	_

~~~


