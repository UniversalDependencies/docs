---
layout: base
title:  'Statistics of amod in UD_Basque-BDT'
udver: '2'
---

## Treebank Statistics: UD_Basque-BDT: Relations: `amod`

This relation is universal.

4552 nodes (4%) are attached to their parents as `amod`.

3094 instances of `amod` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07842706502636.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (4357; 96% instances), <tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (100; 2% instances), <tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (38; 1% instances), <tt><a href="eu_bdt-pos-NUM.html">NUM</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (24; 1% instances), <tt><a href="eu_bdt-pos-DET.html">DET</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (17; 0% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="eu_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-SYM.html">SYM</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Bigarren	bigarren	ADJ	_	NumType=Ord	2	amod	_	_
2	marrazkian	marrazki	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	3	obl	_	_
3	agertzen	agertu	VERB	_	Aspect=Imp|VerbForm=Inf	5	acl	_	_
4	den	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	3	aux	_	_
5	muntaia	muntaia	NOUN	_	Case=Abs|Definite=Def|Number=Sing	6	obj	_	_
6	egizu	egin	VERB	_	Aspect=Prog|Mood=Imp|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Bestetik	beste	DET	_	Case=Abl|Definite=Def|Number=Sing	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	Ormaetxea	Ormaetxea	PROPN	_	_	6	nsubj	_	_
4	gipuzkoarra	gipuzkoar	ADJ	_	Case=Abs|Definite=Def|Number=Sing	3	amod	_	_
5	oso	oso	ADV	_	_	6	advmod	_	_
6	berria	berri	ADJ	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	_
7	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod	color:blue
1	Aurkariari	aurkari	NOUN	_	Case=Dat|Definite=Def|Number=Sing	2	iobj	_	_
2	dagokionez	egon	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=3|VerbForm=Fin	6	advcl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	Feyenoord	Feyenoord	PROPN	_	_	6	nsubj	_	_
5	ez	ez	PART	_	Polarity=Neg	6	advmod	_	_
6	dago	egon	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	0	root	_	_
7	bere	bera	DET	_	Case=Gen|Number=Sing	8	nmod	_	_
8	garairik	garai	ADJ	_	Case=Par|Definite=Ind	6	obl	_	_
9	onenean	on	ADJ	_	Case=Ine|Definite=Def|Degree=Sup|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


