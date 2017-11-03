---
layout: base
title:  'Statistics of iobj in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `iobj`

This relation is universal.

500 nodes (0%) are attached to their parents as `iobj`.

418 instances of `iobj` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.168.

The following 10 pairs of parts of speech are connected with `iobj`: <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (330; 66% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (109; 22% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (33; 7% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (17; 3% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Moeder	moeder	NOUN	N|soort|ev|neut	Number=Sing	3	nsubj	_	_
2	Mien	Mien	PROPN	N|eigen|ev|neut	Number=Sing	1	appos	_	_
3	spoorde	spoor_aan	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
4	haar	haar	PRON	Pron|per|3|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
5	aan	aan	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	3	compound:prt	_	_
6	toch	toch	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	9	advmod	_	_
7	op	op	ADV	Adv|deelv	PartType=Vbp	9	compound:prt	_	_
8	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	9	mark	_	_
9	stappen	stap_op	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	3	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 iobj	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	5	punct	_	SpaceAfter=No
2	Die	die	PRON	Pron|aanw|neut|attr	PronType=Dem	4	nmod	_	_
3	eerste	eerste	ADJ	Num|rang|bep|attr|onverv	Definite=Def|NumType=Ord	4	amod	_	_
4	weken	week	NOUN	N|soort|mv|neut	Number=Plur	5	obl	_	_
5	had	heb	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
6	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	heel	heel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	8	advmod	_	_
8	veelmoeite	moeite	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	5	ccomp	_	_
9	met	met	ADP	Prep|voor	AdpType=Prep	11	case	_	_
10	mijn	mijn	PRON	Pron|bez|1|ev|neut|attr	Number=Sing|Person=1|Poss=Yes|PronType=Prs	11	nmod	_	_
11	motivatie	motivatie	NOUN	N|soort|ev|neut	Number=Sing	5	iobj	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Van	van	PROPN	N|eigen|ev|neut	Number=Sing	3	iobj	_	_
2	Wout-Jan	Wout-Jan	PROPN	N|eigen|ev|neut	Number=Sing	1	obj	_	_
3	wisten	weet	VERB	V|trans|ovt|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
4	we	we	PRON	Pron|per|1|mv|nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
5	dat	dat	SCONJ	Conj|onder|metfin	_	8	mark	_	_
6	hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
7	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	8	det	_	_
8	superjockey	superjockey	NOUN	N|soort|ev|neut	Number=Sing	3	ccomp	_	_
9	was	ben	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	cop	_	SpaceAfter=No
10	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


