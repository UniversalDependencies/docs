---
layout: base
title:  'Statistics of obl:tmod in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="da_ddt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="da_ddt-dep-obl-lmod.html">obl:lmod</a></tt>.

132 nodes (0%) are attached to their parents as `obl:tmod`.

73 instances of `obl:tmod` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.62121212121212.

The following 12 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (46; 35% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (45; 34% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (14; 11% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (9; 7% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (6; 5% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-X.html">X</a></tt> (2; 2% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:tmod	color:blue
1	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	lang	lang	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	amod	_	_
4	tid	tid	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	obl:tmod	_	_
5	siden	siden	ADV	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	"	"	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl:tmod	color:blue
1	Ubehaget	ubehag	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
2	varer	vare	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	oftest	ofte	ADV	_	Degree=Sup	2	advmod	_	_
4	kun	kun	ADV	_	_	7	advmod	_	_
5	nogle	nogen	DET	_	Number=Plur|PronType=Ind	7	det	_	_
6	få	få	ADJ	_	Degree=Pos|Number=Plur	7	amod	_	_
7	dage	dag	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	2	obl:tmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	-	-	PUNCT	_	_	4	punct	_	_
2	Om	om	ADP	_	AdpType=Prep	3	case	_	_
3	lidt	lidt	ADV	_	Degree=Pos	4	obl:tmod	_	_
4	ringer	ringe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	advcl	_	_
5	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	6	det	_	_
6	telefon	telefon	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	_
8	sagde	sige	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


