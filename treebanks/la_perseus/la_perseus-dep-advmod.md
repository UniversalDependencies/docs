---
layout: base
title:  'Statistics of advmod in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="la_perseus-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_perseus-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_perseus-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_perseus-dep-advmod-tmod.html">advmod:tmod</a></tt>.

1409 nodes (5%) are attached to their parents as `advmod`.

1207 instances of `advmod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.97232079488999.

The following 18 pairs of parts of speech are connected with `advmod`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1073; 76% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (99; 7% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (98; 7% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (40; 3% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (16; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (16; 1% instances), <tt><a href="la_perseus-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (15; 1% instances), <tt><a href="la_perseus-pos-ADP.html">ADP</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (14; 1% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (11; 1% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-PART.html">PART</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	nec	neque	CCONJ	c--------	_	6	cc	_	_
2	Teucris	Teucer	PROPN	n-p---md-	Case=Dat|Gender=Masc|Number=Plur	3	obl	_	LId=Teucer1
3	addita	addo	VERB	v-srppfn-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	4	amod	_	LId=addo1|TraditionalMood=Participium|TraditionalTense=Perfectum
4	Iuno	Iuno	PROPN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	LId=Juno1
5	usquam	usquam	ADV	d--------	_	6	advmod	_	LId=usquam1
6	aberit	absum	VERB	v3stia---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
7	;	;	PUNCT	u--------	_	6	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 advmod	color:blue
1	Haec	hic	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	LId=hic1
2	quoque	quoque	ADV	d--------	_	7	advmod	_	LId=quoque1
3	adhuc	adhuc	ADV	d--------	_	9	advmod	_	LId=adhuc1
4	vitae	vita	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	LId=vita1
5	non	non	PART	d--------	_	9	advmod:neg	_	LId=non1
6	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Praesens
7	fiducia	fiducia	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	LId=fiducia1
8	nostrae	noster	DET	a-s---fg-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	LId=noster1
9	certa	certus	ADJ	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	LId=certus1
10	satis	satis	ADV	d--------	_	9	advmod	_	SpaceAfter=No|LId=satis1
11	;	;	PUNCT	u--------	_	9	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod	color:blue
1	Ne	ne	ADV	d--------	_	4	advmod	_	LId=ne1
2	c	que	CCONJ	c--------	_	4	cc	_	LId=que1
3	erit	sum	AUX	v3sfia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Futurum
4	dubitabile	dubitabilis	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	LId=dubitabilis1
5	verum	verum	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	SpaceAfter=No|LId=verum2
6	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


