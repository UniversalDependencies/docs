---
layout: base
title:  'Statistics of nsubj:cop in UD_Veps-VWT'
udver: '2'
---

## Treebank Statistics: UD_Veps-VWT: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="vep_vwt-dep-nsubj.html">nsubj</a></tt>.

35 nodes (3%) are attached to their parents as `nsubj:cop`.

24 instances of `nsubj:cop` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.11428571428571.

The following 11 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vep_vwt-pos-PRON.html">PRON</a></tt> (10; 29% instances), <tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (7; 20% instances), <tt><a href="vep_vwt-pos-PRON.html">PRON</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="vep_vwt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="vep_vwt-pos-ADV.html">ADV</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="vep_vwt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vep_vwt-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="vep_vwt-pos-ADV.html">ADV</a></tt>-<tt><a href="vep_vwt-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="vep_vwt-pos-PRON.html">PRON</a></tt>-<tt><a href="vep_vwt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="vep_vwt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="vep_vwt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vep_vwt-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:cop	color:blue
1	Tatan	tat	NOUN	_	Case=Gen|Number=Sing	5	nmod	_	_
2	polespäi	pol'	NOUN	_	Case=Ela|Number=Sing	5	obl	_	_
3	kaik	kaik	PRON	_	Case=Nom|Number=Sing|PronType=Tot	5	nsubj:cop	_	_
4	oma	olda	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	vepsläižed	vepsläine	NOUN	_	Case=Nom|Number=Plur	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:cop	color:blue
1	Vepsän	vepsän	ADJ	_	Case=Gen|Number=Sing	2	amod	_	_
2	kel't	kel'	NOUN	_	Case=Par|Number=Sing	3	nsubj:cop	_	_
3	školas	škol	NOUN	_	Case=Ine|Number=Sing	0	root	_	_
4	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg	3	aux	_	_
5	olend	olda	AUX	_	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nsubj:cop	color:blue
1	Sigä	sigä	ADV	_	_	0	root	_	_
2	om	olda	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	toine	toine	PRON	_	Case=Nom|Number=Sing|PronType=Dem	4	nmod	_	_
4	elo	elo	NOUN	_	Case=Nom|Number=Sing	1	nsubj:cop	_	_
5	,	,	PUNCT	_	_	10	punct	_	_
6	toižed	toine	PRON	_	Case=Nom|Number=Plur|PronType=Dem	7	nmod	_	_
7	ristitud	ristit	NOUN	_	Case=Nom|Number=Plur	10	nsubj:cop	_	_
8	oma	olda	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
9	ümbri	ümbri	ADP	_	AdpType=Prep	10	case	_	_
10	sinus	sinä	PRON	_	Case=Ine|Number=Sing|Person=2|PronType=Prs	1	conj	_	_
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


