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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 discourse	color:blue
1	ja	ja	INTJ	_	_	8	discourse	_	_
2	det	det	DET	_	Gender=Neut|Number=Sing|PronType=Dem	3	det	_	_
3	første	første	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	5	advmod	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	begynte	begynne	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	8	parataxis:deletion	_	_
6	#	#	PUNCT	_	_	8	punct	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	#	#	PUNCT	_	_	11	punct	_	_
10	i	i	ADP	_	_	11	case	_	_
11	femogtjue	femogtjue	NUM	_	Number=Plur|NumType=Card	8	obl	_	_
12	.	$.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 discourse	color:blue
1	ja	ja	INTJ	_	_	0	root	_	_
2	visst	visst	ADV	_	_	1	advmod	_	_
3	ja	ja	INTJ	_	_	1	discourse	_	_
4	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	samlestasjonar	samle-stasjon	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	0	root	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	appos	_	_
5	ja	ja	INTJ	_	_	3	discourse	_	_
6	.	$.	PUNCT	_	_	3	punct	_	_

~~~


