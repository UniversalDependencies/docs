---
layout: base
title:  'Statistics of obl in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="fi_ftb-dep-obl-agent.html">obl:agent</a></tt>.

6 nodes (0%) are attached to their parents as `obl`.

5 instances of `obl` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 4 pairs of parts of speech are connected with `obl`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (3; 50% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (1; 17% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 obl	color:blue
1	Kuitenkin	kuitenkin	PART	Pcle	_	6	advmod	_	_
2	Nokian	nokia	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	5	nmod	_	_
3	toisen	toinen	ADJ	A,Ord,Sg,Gen	Case=Gen|Number=Sing|NumType=Ord	4	amod	_	_
4	kolmanneksen	kolmannes	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	5	nmod	_	_
5	tulos	tulos	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj	_	_
6	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	samalla	sama	DET	Pron,Qnt,Sg,Ade	Case=Ade|Number=Sing|PronType=Ind	8	det	_	_
8	tasolla	taso	NOUN	N,Sg,Ade	Case=Ade|Number=Sing	6	nmod	_	_
9	kuin	kuin	SCONJ	Pcle,CS	_	11	mark	_	FTB-Sub=comparator
10	se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	11	nsubj	_	_
11	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	advcl	_	FTB-Sub=comparison
12	vuoden	vuosi	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	14	nmod	_	_
13	ensimmäisellä	ensimmäinen	ADJ	A,Ord,Sg,Ade	Case=Ade|Number=Sing|NumType=Ord	14	amod	_	_
14	kolmanneksellakin	kolmannes	NOUN	N,Sg,Ade,Kin	Case=Ade|Clitic=Kin|Number=Sing	11	obl	_	_
15	.	.	PUNCT	Pun	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl	color:blue
1	se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	7	nsubj:cop	_	_
2	oli	olla	AUX	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
3	vain	vain	PART	Pcle	_	4	advmod	_	_
4	yksi	yksi	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	0	root	_	_
5	monista	moni	DET	Pron,Qnt,Pl,Ela	Case=Ela|Number=Plur|PronType=Ind	7	det	_	_
6	ruuhkaisista	ruuhkainen	ADJ	A,Pl,Ela	Case=Ela|Number=Plur	7	amod	_	_
7	paikoista	paikka	NOUN	N,Pl,Ela	Case=Ela|Number=Plur	4	obl	_	_
8	lähellä	lähellä	ADP	Adp	_	9	case	_	_
9	rautatieasemaa	rautatieasema	NOUN	N,Sg,Par	Case=Par|Number=Sing	7	nmod	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl	color:blue
1	Tämä	tämä	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	_	_
2	palautti	palauttaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	lompakon	lompakko	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	2	obj	_	_
4	samaa	sama	DET	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind	2	obl	_	_
5	kautta	kautta	ADV	Adv	_	4	fixed	_	_
6	kuin	kuin	SCONJ	Pcle,CS	_	8	mark	_	FTB-Sub=comparator
7	oli	olla	AUX	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	_
8	saanut	saada	VERB	V,Act,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	4	advcl	_	FTB-Sub=comparison
9	sen	se	PRON	Pron,Dem,Sg,Gen	Case=Gen|Number=Sing|PronType=Dem	8	obj	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


