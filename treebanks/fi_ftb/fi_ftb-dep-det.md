---
layout: base
title:  'Statistics of det in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `det`

This relation is universal.

3868 nodes (2%) are attached to their parents as `det`.

3868 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28024819027921.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (3271; 85% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (228; 6% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (92; 2% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (88; 2% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (67; 2% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (42; 1% instances), <tt><a href="fi_ftb-pos-DET.html">DET</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (36; 1% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (34; 1% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det	color:blue
1	noo	noo	INTJ	Pcle,Interj	_	6	discourse	_	Alt=6_discourse
2	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	6	nsubj:cop	_	_
3	o	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
4	jottais	jokin	DET	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind|Style=Coll	6	det	_	_
5	semssi	semmoinen	DET	A,Dem,Pl,Par	Case=Par|Number=Plur|PronType=Dem|Style=Coll	6	amod	_	Alt=DET
6	sukulaissi	sukulainen	NOUN	N,Pl,Par	Case=Par|Number=Plur|Style=Coll	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Kaikki	kaikki	DET	Pron,Qnt,Nom	Case=Nom|PronType=Ind	2	det	_	_
2	suomalaiset	suomalainen	ADJ	A,Pl,Nom	Case=Nom|Number=Plur	5	nsubj	_	_
3	eivät	ei	AUX	V,Neg,Act,Pl3	Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	5	aux	_	_
4	edes	edes	PART	Pcle	_	5	advmod	_	_
5	halua	haluta	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	maalle	maa	NOUN	N,Sg,All	Case=All|Number=Sing	5	nmod	_	_
7	hyttysten	hyttynen	NOUN	N,Pl,Gen	Case=Gen|Number=Plur	8	nsubj	_	_
8	syötäviksi	syödä	VERB	V,Pass,PcpVa,Pl,Tra	Case=Tra|Number=Plur|PartForm=Pres|VerbForm=Part|Voice=Pass	5	advcl	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	iso	iso	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	2	amod	_	_
2	lasi	lasi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nmod	_	_
3	sitä	se	DET	Pron,Dem,Sg,Par	Case=Par|Number=Sing|PronType=Dem	4	det	_	_
4	samaa	sama	PRON	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind	0	root	_	FTB-PronType=Qnt

~~~


