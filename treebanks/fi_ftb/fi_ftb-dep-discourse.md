---
layout: base
title:  'Statistics of discourse in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `discourse`

This relation is universal.

308 nodes (0%) are attached to their parents as `discourse`.

268 instances of `discourse` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.70779220779221.

The following 14 pairs of parts of speech are connected with `discourse`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (164; 53% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (35; 11% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (19; 6% instances), <tt><a href="fi_ftb-pos-PART.html">PART</a></tt>-<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (18; 6% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (14; 5% instances), <tt><a href="fi_ftb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (14; 5% instances), <tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (9; 3% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-SCONJ.html">SCONJ</a></tt> (9; 3% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (3; 1% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	no	no	INTJ	Pcle,Interj	_	6	discourse	_	Alt=6_discourse
2	sit	sitten	ADV	Adv	Style=Coll	6	advmod	_	_
3	yks	yksi	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card|Style=Coll	5	nummod	_	_
4	toinen	toinen	DET	Pron,Qnt,Sg,Nom	Case=Nom|Number=Sing|PronType=Ind	5	det	_	_
5	kaveri	kaveri	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj	_	_
6	lähti	lähteä	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	armeijaan	armeija	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	6	nmod	_	_
8	ja	ja	CCONJ	Pcle,CC	_	11	cc	_	_
9	me	me	PRON	Pron,Pers,Pl1,Nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	_
10	oltiin	olla	AUX	V,Pass,Ind,Past	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	11	aux	_	_
11	sovittu	sopia	VERB	V,Pass,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	6	conj	_	_
12	.	.	PUNCT	Pun	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
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
# visual-style 2 1 discourse	color:blue
1	Hyi	hyi	INTJ	Pcle,Interj	_	2	discourse	_	Alt=2_discourse
2	kauheeta	kauhea	ADJ	A,Sg,Par	Case=Par|Number=Sing|Style=Coll	0	root	_	_
3	!	!	PUNCT	Pun	_	2	punct	_	_

~~~


