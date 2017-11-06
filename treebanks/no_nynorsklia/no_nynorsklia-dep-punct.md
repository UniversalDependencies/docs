---
layout: base
title:  'Statistics of punct in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `punct`

This relation is universal.

2154 nodes (16%) are attached to their parents as `punct`.

1507 instances of `punct` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92293407613742.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (985; 46% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (457; 21% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (272; 13% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (170; 8% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (64; 3% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (62; 3% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (52; 2% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (27; 1% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (25; 1% instances), <tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="no_nynorsklia-pos-X.html">X</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="no_nynorsklia-pos-PART.html">PART</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 punct	color:blue
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
# visual-style 1 2 punct	color:blue
1	ja	ja	INTJ	_	_	0	root	_	_
2	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 punct	color:blue
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


