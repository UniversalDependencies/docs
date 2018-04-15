---
layout: base
title:  'Statistics of root in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `root`

This relation is universal.

1396 nodes (10%) are attached to their parents as `root`.

1396 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.42908309455587.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (653; 47% instances), -<tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt> (378; 27% instances), -<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (127; 9% instances), -<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (101; 7% instances), -<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (34; 2% instances), -<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (31; 2% instances), -<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (28; 2% instances), -<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (23; 2% instances), -<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (9; 1% instances), -<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (8; 1% instances), -<tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt> (1; 0% instances), -<tt><a href="no_nynorsklia-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	ja	ja	INTJ	_	_	0	root	_	_
2	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	om	om	ADP	_	_	3	case	_	_
2	om	om	ADP	_	_	3	reparandum	_	_
3	dagen	dag	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	#	#	PUNCT	_	_	7	punct	_	_
5	som	som	PRON	_	PronType=Rel	7	obj	_	_
6	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
7	bar	bere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


