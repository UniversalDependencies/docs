---
layout: base
title:  'Statistics of case in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `case`

This relation is universal.

9913 nodes (10%) are attached to their parents as `case`.

9578 instances of `case` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7662665187128.

The following 18 pairs of parts of speech are connected with `case`: <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (7466; 75% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (1153; 12% instances), <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (461; 5% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (282; 3% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (245; 2% instances), <tt><a href="da_ddt-pos-NUM.html">NUM</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (172; 2% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (51; 1% instances), <tt><a href="da_ddt-pos-ADP.html">ADP</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (38; 0% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (27; 0% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="da_ddt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-PART.html">PART</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-SYM.html">SYM</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	fralægger	fralægge	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	os	vi	PRON	_	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Prs	3	iobj	_	_
5	ethvert	enhver	DET	_	Gender=Neut|Number=Sing|PronType=Ind	6	det	_	_
6	ansvar	ansvar	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	obj	_	_
7	for	for	ADP	_	AdpType=Prep	8	case	_	_
8	mordene	mord	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Til	til	ADP	_	AdpType=Prep	2	case	_	_
2	orgie	orgie	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
3	hos	hos	ADP	_	AdpType=Prep	4	case	_	_
4	Søren	Søren	PROPN	_	_	2	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	kiggede	kigge	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	nysgerrigt	nysgerrigt	ADV	_	Degree=Pos	2	advmod	_	_
4	på	på	ADP	_	AdpType=Prep	5	case	_	_
5	mig	jeg	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=1|PronType=Prs	2	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


