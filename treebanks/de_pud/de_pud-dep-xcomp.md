---
layout: base
title:  'Statistics of xcomp in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `xcomp`

This relation is universal.

190 nodes (1%) are attached to their parents as `xcomp`.

142 instances of `xcomp` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.12105263157895.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (85; 45% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (32; 17% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (31; 16% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (30; 16% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (7; 4% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	Hong	Hong	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
2	Kong	Kong	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing	1	flat:name	_	_
3	scheint	scheinen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	sich	sich	PRON	PRP	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	8	obj	_	_
5	auf	auf	ADP	IN	_	7	case	_	_
6	eine	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	7	det	_	_
7	Protestwelle	Protestwelle	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	_
8	vorzubereiten	vorbereiten	VERB	VB	_	3	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 xcomp	color:blue
1	Ich	ich	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	nenne	nennen	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	es	es	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
4	nicht	nicht	PART	RB	Polarity=Neg	5	advmod	_	_
5	leichtfertig	leichtfertig	ADV	RB	Degree=Pos	2	advmod	_	_
6	eine	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	7	det	_	_
7	Bestie	Bestie	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	2	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 xcomp	color:blue
1	Ich	ich	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	erkläre	erklären	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	die	der	DET	DT	Case=Acc|Definite=Def|Number=Plur|PronType=Art	7	det	_	_
4	ersten	erst	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|NumType=Ord	7	amod	_	InflectionType=Weak
5	internationalen	international	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	4	conj	_	InflectionType=Weak|Proper=True
6	Olympischen	olympisch	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	4	conj	_	InflectionType=Weak|Proper=True
7	Spiele	Spiel	NOUN	NN	Case=Acc|Gender=Neut|Number=Plur	2	obj	_	Proper=True
8	für	für	CCONJ	CC	_	2	cc	_	_
9	beendet	beenden	ADJ	JJ	Degree=Pos	2	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


