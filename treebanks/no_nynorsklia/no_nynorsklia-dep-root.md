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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	ja	ja	INTJ	_	_	0	root	_	_
2	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	den	den	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	tid	tid	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	6	obl	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
5	jo	jo	ADV	_	_	6	advmod	_	_
6	tennpluggar	tennplugg	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	0	root	_	_
7	og	og	CCONJ	_	_	9	cc	_	_
8	#	#	PUNCT	_	_	9	punct	_	_
9	vanleg	vanleg	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	6	conj	_	_
10	.	$.	PUNCT	_	_	6	punct	_	_

~~~


