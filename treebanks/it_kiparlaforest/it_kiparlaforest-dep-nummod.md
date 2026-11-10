---
layout: base
title:  'Statistics of nummod in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `nummod`

This relation is universal.

125 nodes (1%) are attached to their parents as `nummod`.

111 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.176.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NUM.html">NUM</a></tt> (114; 91% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="it_kiparlaforest-pos-NUM.html">NUM</a></tt>-<tt><a href="it_kiparlaforest-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_kiparlaforest-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	marzo	marzo	NOUN	_	Gender=Masc	0	root	_	Begin=82.81|Coconstruct=conj:reform::BOA1009_32::3|End=83.226|Intonation=Falling|KID=34-0
2	duemiladiciotto	duemiladiciotto	NUM	_	_	1	nummod	_	Begin=84.226|End=85.206|Intonation=Falling|KID=35-0|OverlappingGroup=16

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nummod	color:blue
1	ah	ah	INTJ	_	_	8	discourse	_	Begin=1017.902|KID=671-0
2	beh	beh	INTJ	_	_	8	discourse	_	KID=671-1
3	mo	mo	ADV	_	_	8	discourse	_	KID=671-2
4	undici	undici	NUM	_	NumType=Card	6	nummod	_	KID=671-3
5	e	e	CCONJ	_	_	6	cc	_	KID=671-4
6	mezza	mezza	ADJ	_	_	8	obl	_	KID=671-5
7	ti	ti	PRON	_	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	8	expl	_	KID=671-6
8	prepari	preparare	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	KID=671-7
9	prima	prima	ADV	_	_	8	advmod	_	End=1020.632|Intonation=WeaklyRising|KID=671-8

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nummod	color:blue
1	e	e	CCONJ	_	_	8	cc	_	Begin=2331.198|KID=911-0
2	comunque	comunque	CCONJ	_	_	8	cc	_	KID=911-1
3	ogni	ogni	DET	_	PronType=Ind	4	det	_	KID=911-2
4	due	due	NUM	_	NumType=Card	8	obl	_	KID=911-3
5	per	per	ADP	_	_	6	case	_	KID=911-4
6	tre	tre	NUM	_	NumType=Card	4	nummod	_	KID=911-5
7	qualcuno	qualcuno	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	8	nsubj	_	KID=911-6
8	trova	trovare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=911-7
9	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	KID=911-8
10	sasso	sasso	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	KID=911-9
11	e	e	CCONJ	_	_	12	cc	_	KID=911-10
12	dice	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	KID=911-11
13	guardate	guardare	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	12	ccomp	_	KID=911-12|Reported=Yes
14	ho	avere	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	aux	_	KID=911-13
15	trovato	trovare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	conj	_	KID=911-14
16	questa	questo	DET	_	Gender=Fem|Number=Sing|PronType=Dem	17	det	_	KID=911-15
17	cosa	cosa	NOUN	_	Gender=Fem|Number=Sing	15	obj	_	KID=911-16
18	e	e	CCONJ	_	_	20	cc	_	KID=911-17
19	questo	questo	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	20	nsubj	_	KID=911-18
20	rivoluziona	rivoluzionare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	conj	_	KID=911-19
21	completamente	completamente	ADV	_	_	20	advmod	_	KID=911-20
22	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	KID=911-21
23	storia	storia	NOUN	_	Gender=Fem|Number=Sing	20	obj	_	KID=911-22
24	di	di	ADP	_	_	27	case	_	KID=911-23
25	tutte	tutto	DET	_	Gender=Fem|Number=Plur|PronType=Tot	27	det:predet	_	KID=911-24
26	le	il	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	27	det	_	KID=911-25
27	lingue	lingua	NOUN	_	Gender=Fem|Number=Plur	23	nmod	_	KID=911-26
28	semitiche	semitico	ADJ	_	Gender=Fem|Number=Plur	27	amod	_	KID=911-27
29	così	così	ADV	_	_	33	advmod	_	KID=911-28
30	come	come	ADV	_	_	33	mark	_	KID=911-29
31	noi	noi	PRON	_	Number=Plur|Person=1|PronType=Prs	33	nsubj	_	KID=911-30
32	la	la	PRON	_	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	33	obj	_	KID=911-31
33	conosciamo	conoscere	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	23	acl	_	End=2339.659|Intonation=Falling|KID=911-32

~~~


