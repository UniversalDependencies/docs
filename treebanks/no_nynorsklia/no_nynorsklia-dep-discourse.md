---
layout: base
title:  'Statistics of discourse in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `discourse`

This relation is universal.
There are 1 language-specific subtypes of `discourse`: <tt><a href="no_nynorsklia-dep-discourse-filler.html">discourse:filler</a></tt>.

433 nodes (3%) are attached to their parents as `discourse`.

285 instances of `discourse` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.48036951501155.

The following 9 pairs of parts of speech are connected with `discourse`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (256; 59% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (77; 18% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (38; 9% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (37; 9% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (9; 2% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (9; 2% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (3; 1% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	nei	nei	INTJ	_	_	3	discourse	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	nå	nå	ADV	_	_	3	advmod	_	_
5	i	i	ADP	_	_	6	case	_	_
6	tredvetala	tredvetale	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	3	obl	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	appos	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	ja	ja	INTJ	_	_	0	root	_	_
2	ja	ja	INTJ	_	_	1	discourse	_	_
3	men	men	CCONJ	_	_	1	cc	_	_
4	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	ja	ja	INTJ	_	_	5	discourse	_	_
2	#	#	PUNCT	_	_	5	punct	_	_
3	eitt	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	øre	øre	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	5	nmod	_	_
5	literen	liter	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
6	#	#	PUNCT	_	_	5	punct	_	_
7	omtrent	omtrent	ADV	_	_	5	advmod	_	_
8	.	$.	PUNCT	_	_	5	punct	_	_

~~~


