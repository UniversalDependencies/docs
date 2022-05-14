---
layout: base
title:  'Statistics of cop in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `cop`

This relation is universal.

5293 nodes (2%) are attached to their parents as `cop`.

4791 instances of `cop` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5393916493482.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (3406; 64% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (1624; 31% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (93; 2% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (56; 1% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (49; 1% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (35; 1% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (19; 0% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="sl_ssj-pos-SYM.html">SYM</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 cop	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	NER=O
2	in	in	CCONJ	Cc	_	3	cc	_	NER=O
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	NER=O
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	NER=O
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	NER=O
6	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	NER=O
7	med	med	ADP	Si	Case=Ins	8	case	_	NER=O
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	NER=O
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	NER=O
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	NER=O|SpaceAfter=No
11	.	.	PUNCT	Z	_	10	punct	_	NER=O

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Toda	toda	CCONJ	Cc	_	4	cc	_	NER=O
2	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	4	nsubj	_	NER=O
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	NER=O
4	energija	energija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	NER=O
5	"	"	PUNCT	Z	_	6	punct	_	NER=O|SpaceAfter=No
6	nacionalizma	nacionalizem	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	NER=O|SpaceAfter=No
7	"	"	PUNCT	Z	_	6	punct	_	NER=O|SpaceAfter=No
8	?	?	PUNCT	Z	_	4	punct	_	NER=O

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Ne	ne	PART	Q	Polarity=Neg	0	root	_	NER=O
2	energija	energija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	1	orphan	_	NER=O
3	"	"	PUNCT	Z	_	5	punct	_	NER=O|SpaceAfter=No
4	biti	biti	AUX	Va-n	VerbForm=Inf	5	cop	_	NER=O
5	vse	ves	DET	Pg-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	2	acl	_	NER=O
6	ali	ali	CCONJ	Cc	_	7	cc	_	NER=O
7	nič	nič	PRON	Pz-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	5	conj	_	NER=O|SpaceAfter=No
8	"	"	PUNCT	Z	_	5	punct	_	NER=O|SpaceAfter=No
9	,	,	PUNCT	Z	_	12	punct	_	NER=O
10	ampak	ampak	CCONJ	Cc	_	12	cc	_	NER=O
11	preprosto	preprosto	ADV	Rgp	Degree=Pos	12	orphan	_	NER=O
12	energija	energija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	NER=O
13	biti	bit	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	NER=O|SpaceAfter=No
14	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


