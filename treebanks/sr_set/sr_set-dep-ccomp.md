---
layout: base
title:  'Statistics of ccomp in UD_Serbian-SET'
udver: '2'
---

## Treebank Statistics: UD_Serbian-SET: Relations: `ccomp`

This relation is universal.

1313 nodes (1%) are attached to their parents as `ccomp`.

1313 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.67022086824067.

The following 22 pairs of parts of speech are connected with `ccomp`: <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (841; 64% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt> (159; 12% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (104; 8% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (53; 4% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (52; 4% instances), <tt><a href="sr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (26; 2% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt> (19; 1% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-ADV.html">ADV</a></tt> (17; 1% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr_set-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Bitići	Bitići	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	da	da	SCONJ	Cs	_	7	mark	_	_
4	bi	biti	AUX	Vaa3p	Mood=Cnd|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux	_	_
5	jači	jak	ADJ	Agcmpny	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	6	amod	_	_
6	sindikati	sindikat	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
7	doneli	doneti	VERB	Vmp-pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	2	ccomp	_	_
8	bolje	dobar	ADJ	Agcmpay	Case=Acc|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	9	amod	_	_
9	ishode	ishod	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	"	"	PUNCT	Z	_	4	punct	_	SpaceAfter=No
2	Deceniju	decenija	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	3	nmod	_	_
3	kasnije	kasno	ADV	Rgc	Degree=Cmp	4	advmod	_	_
4	vidimo	videti	VERB	Vmr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	da	da	SCONJ	Cs	_	9	mark	_	_
6	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	ekonomija	ekonomija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
8	užasno	užasno	ADV	Rgp	Degree=Pos	9	advmod	_	_
9	nestrukturirana	nestrukturiran	ADJ	Agpfsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	4	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	SpaceAfter=No
2	Da	da	SCONJ	Cs	_	5	mark	_	_
3	li	li	PART	Qq	_	2	fixed	_	_
4	to	taj	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	_
5	znači	značiti	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	da	da	SCONJ	Cs	_	10	mark	_	_
7	smo	biti	AUX	Var1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	10	cop	_	_
8	potpuno	potpuno	ADV	Rgp	Degree=Pos	10	advmod	_	_
9	van	van	ADP	Sg	Case=Gen	10	case	_	_
10	opasnosti	opasnost	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	5	ccomp	_	SpaceAfter=No
11	?	?	PUNCT	Z	_	5	punct	_	_

~~~


