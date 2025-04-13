---
layout: base
title:  'Statistics of cc:preconj in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-cc.html">cc</a></tt>.

3 nodes (0%) are attached to their parents as `cc:preconj`.

3 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="fi_ftb-pos-DET.html">DET</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Sitä	se	DET	Pron,Dem,Sg,Par	Case=Par|Number=Sing|PronType=Dem	2	det	_	_
2	kautta	kautta	ADV	Adv	_	4	advmod	_	_
3	fuusio	fuusio	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
4	vahvistaa	vahvistaa	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	niin	niin	CCONJ	Pcle	_	6	cc:preconj	_	_
6	meidän	me	DET	Pron,Pers,Pl1,Gen	Case=Gen|Number=Plur|Person=1|PronType=Prs	11	det	_	_
7	kuin	kuin	CCONJ	Pcle,CS	_	10	cc	_	_
8	koko	koko	ADJ	A	_	10	amod	_	_
9	suomalaisen	suomalainen	ADJ	A,Sg,Gen	Case=Gen|Number=Sing	10	amod	_	_
10	metsäteollisuuden	metsäteollisuus	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	11	nmod	_	_
11	roolia	rooli	NOUN	N,Sg,Par	Case=Par|Number=Sing	4	obj	_	_
12	.	.	PUNCT	Pun	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 cc:preconj	color:blue
1	Ruotsin	ruotsi	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	3	nmod	_	_
2	tunnetut	tunnettu	ADJ	A,Pl,Nom	Case=Nom|Number=Plur	3	amod	_	_
3	automerkit	automerkki	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	7	nsubj	_	_
4	ja	ja	CCONJ	Pcle,CC	_	6	cc	_	_
5	niiden	ne	DET	Pron,Dem,Pl,Gen	Case=Gen|Number=Plur|PronType=Dem	6	det	_	_
6	mainonta	mainonta	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	conj	_	_
7	näkyvät	näkyä	VERB	V,Act,Ind,Pres,Pl3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	aivan	aivan	PART	Pcle	_	9	advmod	_	_
9	toisella	toinen	DET	Pron,Qnt,Sg,Ade	Case=Ade|Number=Sing|PronType=Ind	10	det	_	_
10	tavalla	tapa	NOUN	N,Sg,Ade	Case=Ade|Number=Sing	7	nmod	_	_
11	kuin	kuin	SCONJ	Pcle,CS	_	13	mark	_	FTB-Sub=comparator
12	Suomen	suomi	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	13	nmod	_	_
13	kuva	kuva	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	advcl	_	FTB-Sub=comparison
14	sekä	sekä	CCONJ	Pcle,CC	_	15	cc:preconj	_	_
15	lähinaapureissa	lähinaapuri	NOUN	N,Pl,Ine	Case=Ine|Number=Plur	7	nmod	_	_
16	että	että	CCONJ	Pcle,CC	_	18	cc	_	_
17	varsinkin	varsinkin	PART	Pcle	_	18	advmod	_	_
18	oltaessa	olla	VERB	V,Pass,InfE,Ine	Case=Ine|InfForm=2|VerbForm=Inf|Voice=Pass	15	conj	_	_
19	kahden	kaksi	NUM	Num,Card,Sg,Gen	Case=Gen|Number=Sing|NumType=Card	20	nummod	_	_
20	kielimuurin	kielimuuri	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	18	nmod	_	_
21	takana	takana	ADP	Adp	_	20	case	_	_
22	.	.	PUNCT	Pun	_	20	punct	_	Was18=punct:21:case

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Altistus	altistus	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	obj	_	_
2	tälle	tämä	PRON	Pron,Dem,Sg,All	Case=All|Number=Sing|PronType=Dem	1	nmod	_	_
3	todettiin	todeta	VERB	V,Pass,Ind,Past	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
4	niin	niin	CCONJ	Pcle	_	5	cc:preconj	_	_
5	minun	minä	PRON	Pron,Pers,Sg1,Gen	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	_
6	kuin	kuin	CCONJ	Pcle,CC	_	7	cc	_	_
7	kuopuksenkin	kuopus	NOUN	N,Sg,Gen,Kin	Case=Gen|Clitic=Kin|Number=Sing	5	conj	_	_
8	verikokeista	verikoe	NOUN	N,Pl,Ela	Case=Ela|Number=Plur	3	nmod	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


