---
layout: base
title:  'Statistics of amod in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `amod`

This relation is universal.

182 nodes (1%) are attached to their parents as `amod`.

170 instances of `amod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17032967032967.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (157; 86% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (7; 4% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
1	så	så	CCONJ	_	_	4	cc	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	brydde	bry	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	budd	bu	VERB	_	VerbForm=Part	3	ccomp	_	_
5	i	i	ADP	_	_	8	case	_	_
6	den	den	DET	_	Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
7	vesle	liten	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	8	amod	_	_
8	bygningen	bygning	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	4	obl	_	_
9	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	appos	_	_
10	da	da	ADV	_	_	4	advmod	_	_
11	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	å	å	INTJ	_	_	7	discourse	_	_
2	ikkje	ikkje	ADV	_	Polarity=Neg	7	advmod	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	7	cop	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
5	så	så	ADV	_	_	7	advmod	_	_
6	mykje	mykje	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
7	bygd	bygge	ADJ	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
8	som	som	PRON	_	PronType=Rel	11	obj	_	_
9	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
10	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	nå	nå	ADV	_	_	7	advmod	_	_
12	.	$.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 amod	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	ikkje	ikkje	ADV	_	Polarity=Neg	4	advmod	_	_
4	noko	noko	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Ind,Prs	0	root	_	_
5	#	#	PUNCT	_	_	6	punct	_	_
6	meir	mykje	ADJ	_	_	4	amod	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	appos	_	_
8	.	$.	PUNCT	_	_	4	punct	_	_

~~~


