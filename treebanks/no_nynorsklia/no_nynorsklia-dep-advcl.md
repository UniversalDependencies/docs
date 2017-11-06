---
layout: base
title:  'Statistics of advcl in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `advcl`

This relation is universal.

94 nodes (1%) are attached to their parents as `advcl`.

89 instances of `advcl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.23404255319149.

The following 15 pairs of parts of speech are connected with `advcl`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (55; 59% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (15; 16% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl	color:blue
1	ja	ja	INTJ	_	_	3	discourse	_	_
2	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
3	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	ikkje	ikkje	ADV	_	Polarity=Neg	3	advmod	_	_
5	noko	noko	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Ind,Prs	3	obj	_	_
6	med	med	ADP	_	_	7	case	_	_
7	den	den	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
8	å	å	PART	_	_	9	mark	_	_
9	gjera	gjere	VERB	_	VerbForm=Inf	3	advcl	_	_
10	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	2	appos	_	_
11	?	$?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 advcl	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	jo	jo	ADV	_	_	4	advmod	_	_
4	merkeleg	merkeleg	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	når	når	SCONJ	_	_	7	mark	_	_
6	dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
7	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	advcl	_	_
8	sendar	sendar	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	7	obj	_	_
9	og	og	CCONJ	_	_	10	cc	_	_
10	alt	all	DET	_	Gender=Neut|Number=Sing|PronType=Tot	8	conj	_	_
11	#	#	PUNCT	_	_	12	punct	_	_
12	ja	ja	INTJ	_	_	7	discourse	_	_
13	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 advcl	color:blue
1	korleis	korleis	ADV	_	_	2	advmod	_	_
2	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
4	i	i	ADP	_	_	5	case	_	_
5	Hærlandssalen	Hærlandssalen	PROPN	_	_	2	obl	_	_
6	da	da	ADV	_	_	2	advmod	_	_
7	når	når	SCONJ	_	_	11	mark	_	_
8	dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	_
9	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	11	cop	_	_
10	på	på	ADP	_	_	11	mark	_	_
11	fest	fest	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	advcl	_	_
12	?	$?	PUNCT	_	_	2	punct	_	_

~~~


