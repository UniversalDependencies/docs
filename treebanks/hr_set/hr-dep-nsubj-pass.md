---
layout: base
title:  'Statistics of nsubj:pass in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hr-dep-nsubj.html">nsubj</a></tt>.

1037 nodes (1%) are attached to their parents as `nsubj:pass`.

595 instances of `nsubj:pass` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.47830279652845.

The following 23 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (633; 61% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (261; 25% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-PROPN.html">PROPN</a></tt> (66; 6% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-DET.html">DET</a></tt> (10; 1% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="hr-pos-AUX.html">AUX</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hr-pos-ADV.html">ADV</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hr-pos-AUX.html">AUX</a></tt>-<tt><a href="hr-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Do	do	ADP	_	Case=Gen	2	case	_	_
2	sada	sada	ADV	_	Degree=Pos|PronType=Dem	6	advmod	_	_
3	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
4	takav	takav	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	tim	tim	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
6	ustrojen	ustrojiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	u	u	ADP	_	Case=Loc	8	case	_	_
8	Federaciji	federacija	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
9	BiH	BiH	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Struja	struja	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
2	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	4	expl:pv	_	_
4	prodavati	prodavati	VERB	_	VerbForm=Inf	0	root	_	_
5	HEP-u	HEP	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	4	obj	_	_
6	po	po	ADP	_	Case=Loc	8	case	_	_
7	poticajnoj	poticajan	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	cijeni	cijena	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Hrvatska	Hrvatska	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj:pass	_	_
2	pozvana	pozvati	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	na	na	ADP	_	Case=Acc	4	case	_	_
4	ubrzanje	ubrzanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	obl	_	_
5	reformi	reforma	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	_
6	koje	koji	DET	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	7	obj	_	_
7	traži	tražiti	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
8	EU	EU	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_

~~~


