---
layout: base
title:  'Statistics of punct in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `punct`

This relation is universal.

13933 nodes (14%) are attached to their parents as `punct`.

11011 instances of `punct` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.34314218043494.

The following 18 pairs of parts of speech are connected with `punct`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (7814; 56% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (2932; 21% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (1045; 8% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (834; 6% instances), <tt><a href="da_ddt-pos-ADP.html">ADP</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (379; 3% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (358; 3% instances), <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (239; 2% instances), <tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (128; 1% instances), <tt><a href="da_ddt-pos-NUM.html">NUM</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (71; 1% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (67; 0% instances), <tt><a href="da_ddt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (36; 0% instances), <tt><a href="da_ddt-pos-AUX.html">AUX</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (15; 0% instances), <tt><a href="da_ddt-pos-PART.html">PART</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="da_ddt-pos-DET.html">DET</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-SYM.html">SYM</a></tt>-<tt><a href="da_ddt-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 punct	color:blue
1	Hvor	hvor	ADV	_	_	2	advmod	_	_
2	kommer	komme	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	julemanden	julemand	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
4	fra	fra	ADP	_	AdpType=Prep	1	case	_	SpaceAfter=No
5	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 punct	color:blue
1	H.L.	H.L.	PROPN	_	_	8	nsubj	_	_
2	Hansen	Hansen	PROPN	_	_	1	flat	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
4	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	8	det	_	_
5	udsædvanlig	udsædvanlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	8	amod	_	_
6	og	og	CCONJ	_	_	7	cc	_	_
7	frodig	frodig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	conj	_	_
8	personlighed	personlighed	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 punct	color:blue
1	Jens	Jens	PROPN	_	_	3	nmod:poss	_	_
2	Madsens	Madsen	PROPN	_	Case=Gen	1	flat	_	_
3	udvisning	udvisning	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	9	nsubj	_	_
4	i	i	ADP	_	AdpType=Prep	7	case	_	_
5	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	7	det	_	_
6	43.	43.	ADJ	_	NumType=Ord	7	amod	_	_
7	minut	minut	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	nmod	_	_
8	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	diskutabel	diskutabel	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


