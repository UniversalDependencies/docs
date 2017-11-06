---
layout: base
title:  'Statistics of amod in UD_Basque'
udver: '2'
---

## Treebank Statistics: UD_Basque: Relations: `amod`

This relation is universal.

4190 nodes (3%) are attached to their parents as `amod`.

3017 instances of `amod` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07398568019093.

The following 17 pairs of parts of speech are connected with `amod`: <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (3462; 83% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (539; 13% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (67; 2% instances), <tt><a href="eu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (35; 1% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (28; 1% instances), <tt><a href="eu-pos-ADP.html">ADP</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (24; 1% instances), <tt><a href="eu-pos-DET.html">DET</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="eu-pos-NUM.html">NUM</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="eu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="eu-pos-NUM.html">NUM</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="eu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="eu-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="eu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="eu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="eu-pos-DET.html">DET</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="eu-pos-SYM.html">SYM</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	Athleticek	Athletic	PROPN	_	Case=Erg|Definite=Def|Number=Sing	5	nsubj	_	_
2	presio	presio	NOUN	_	_	4	obj	_	_
3	itzela	itzel	ADJ	_	Case=Abs|Definite=Def|Number=Sing	2	amod	_	_
4	pairatu	pairatu	VERB	_	VerbForm=Part	5	xcomp	_	_
5	beharko	behar_izan	VERB	_	_	0	root	_	_
6	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Bigarren	bigarren	NUM	_	NumType=Ord	2	amod	_	_
2	marrazkian	marrazki	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	3	obl	_	_
3	agertzen	agertu	VERB	_	Aspect=Imp|VerbForm=Inf	5	acl	_	_
4	den	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	3	aux	_	_
5	muntaia	muntaia	NOUN	_	Case=Abs|Definite=Def|Number=Sing	6	obj	_	_
6	egizu	egin	VERB	_	Aspect=Prog|Mood=Imp|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Bestetik	beste	DET	_	Case=Abl|Definite=Def|Number=Sing	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	_
3	Ormaetxea	Ormaetxea	PROPN	_	_	6	nsubj	_	_
4	gipuzkoarra	gipuzkoar	ADJ	_	Case=Abs|Definite=Def|Number=Sing	3	amod	_	_
5	oso	oso	ADV	_	_	6	advmod	_	_
6	berria	berri	ADJ	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	_
7	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


