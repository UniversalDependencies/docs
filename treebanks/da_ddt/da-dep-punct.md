---
layout: base
title:  'Statistics of punct in UD_Danish'
udver: '2'
---

## Treebank Statistics: UD_Danish: Relations: `punct`

This relation is universal.

13933 nodes (14%) are attached to their parents as `punct`.

12437 instances of `punct` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.29189693533338.

The following 18 pairs of parts of speech are connected with `punct`: <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (7758; 56% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (2950; 21% instances), <tt><a href="da-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (1046; 8% instances), <tt><a href="da-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (842; 6% instances), <tt><a href="da-pos-ADP.html">ADP</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (386; 3% instances), <tt><a href="da-pos-ADV.html">ADV</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (353; 3% instances), <tt><a href="da-pos-PRON.html">PRON</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (222; 2% instances), <tt><a href="da-pos-INTJ.html">INTJ</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (171; 1% instances), <tt><a href="da-pos-NUM.html">NUM</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (73; 1% instances), <tt><a href="da-pos-X.html">X</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (64; 0% instances), <tt><a href="da-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (35; 0% instances), <tt><a href="da-pos-AUX.html">AUX</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (17; 0% instances), <tt><a href="da-pos-PART.html">PART</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="da-pos-DET.html">DET</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="da-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="da-pos-SYM.html">SYM</a></tt>-<tt><a href="da-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 punct	color:blue
1	Hvor	hvor	ADV	_	_	2	advmod	_	_
2	kommer	komme	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	julemanden	julemand	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
4	fra	fra	ADP	_	AdpType=Prep	1	case	_	_
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
8	personlighed	personlighed	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
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
9	diskutabel	diskutabel	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


