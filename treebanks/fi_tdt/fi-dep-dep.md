---
layout: base
title:  'Statistics of dep in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `dep`

This relation is universal.

12 nodes (0%) are attached to their parents as `dep`.

12 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 5 pairs of parts of speech are connected with `dep`: <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-ADV.html">ADV</a></tt> (3; 25% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (3; 25% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-SYM.html">SYM</a></tt> (3; 25% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt> (2; 17% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 dep	color:blue
1	Useimmat	usea	ADJ	A	Case=Nom|Degree=Sup|Number=Plur	5	nsubj:cop	_	_
2	ovat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	taittelukaavioidensa	taitella#kaavio	NOUN	N	Case=Gen|Number=Plur|Person[psor]=3	4	nmod:poss	_	_
4	mukaisia	mukainen	ADJ	A	Case=Par|Degree=Pos|Derivation=Inen|Number=Plur	5	amod	_	_
5	monisteita	moniste	NOUN	N	Case=Par|Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	mutta	mutta	CCONJ	C	_	8	cc	_	_
8	joukossa	joukko	NOUN	N	Case=Ine|Number=Sing	5	conj	_	_
9	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
10	mitä	mitä	ADV	Adv	_	11	dep	_	_
11	mielikuvituksellisimpia	mieli#kuvituksellinen	ADJ	A	Case=Par|Degree=Sup|Derivation=Llinen|Number=Plur	12	amod	_	_
12	variaatioita	variaatio	NOUN	N	Case=Par|Number=Plur	8	nsubj:cop	_	_
13	samasta	sama	PRON	Pron	Case=Ela|Number=Sing|PronType=Ind	14	det	_	_
14	teemasta	teema	NOUN	N	Case=Ela|Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep	color:blue
1	Sitä	se	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	3	obj	_	_
2	voi	voida	AUX	V	Mood=Ind|Number=Sing|Person=0|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	nähdä	nähdä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
4	mitä	mikä	PRON	Pron	Case=Par|Number=Sing|PronType=Rel	5	dep	_	_
5	erilaisimpien	erilainen	ADJ	A	Case=Gen|Degree=Sup|Derivation=Lainen|Number=Plur	6	amod	_	_
6	kukkien	kukka	NOUN	N	Case=Gen|Number=Plur	7	nmod:poss	_	_
7	vieraana	vieras	NOUN	N	Case=Ess|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dep	color:blue
1	*	*	PUNCT	Punct	_	4	punct	_	_
2	yy	yy	SYM	Symb	_	4	dep	_	_
3	-	-	PUNCT	Punct	_	2	punct	_	_
4	kopioi	kopioida	VERB	V	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
5	kursorin	kursori	NOUN	N	Case=Gen|Number=Sing	7	obl	_	_
6	alla	alla	ADP	Adp	AdpType=Post	5	case	_	_
7	oleva	olla	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	8	acl	_	_
8	rivi	rivi	NOUN	N	Case=Nom|Number=Sing	4	obj	_	_

~~~


