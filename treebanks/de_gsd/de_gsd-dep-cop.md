---
layout: base
title:  'Statistics of cop in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `cop`

This relation is universal.

3842 nodes (1%) are attached to their parents as `cop`.

3157 instances of `cop` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.56350858927642.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1896; 49% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1674; 44% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (151; 4% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (56; 1% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (21; 1% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (18; 0% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="de_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="de_gsd-pos-X.html">X</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="de_gsd-pos-DET.html">DET</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	unbeschreiblich	unbeschreiblich	ADJ	ADJD	_	0	root	_	SpaceAfter=No
4	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Manasse	Manasse	PROPN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	NamedEntity=Yes
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	einzigartiger	einzigartig	ADJ	ADJA	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	_
5	Parfümeur	Parfümeur	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	bin	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	Schafflunder	Schafflunder	PROPN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	NamedEntity=Yes
4	und	und	CCONJ	KON	_	5	cc	_	_
5	übernachte	übernachten	NOUN	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	_
6	selbst	selbst	ADV	ADV	_	5	advmod	_	_
7	nicht	nicht	PART	PTKNEG	Polarity=Neg	5	advmod	_	_
8	in	in	ADP	APPR	_	10	case	_	_
9	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Utspann	Utspann	PROPN	NN	Case=Dat|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No|NamedEntity=Yes
11	.	.	PUNCT	$.	_	3	punct	_	_

~~~


