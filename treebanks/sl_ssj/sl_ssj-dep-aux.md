---
layout: base
title:  'Statistics of aux in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `aux`

This relation is universal.

7153 nodes (5%) are attached to their parents as `aux`.

6639 instances of `aux` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5601845379561.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (6433; 90% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (536; 7% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (162; 2% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CCONJ	Cc	_	8	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	S	z	ADP	Si	Case=Ins	2	case	_	Dep=2|Rel=Atr
2	tem	ta	DET	Pd-nsi	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	6	obl	_	Dep=5|Rel=AdvM
3	naj	naj	PART	Q	_	6	advmod	_	Dep=5|Rel=PPart
4	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	6	aux	_	Dep=5|Rel=PPart
5	bila	biti	AUX	Va-p-sf	Gender=Fem|Number=Sing|VerbForm=Part	6	cop	_	Dep=0|Rel=Root
6	zagotovljena	zagotovljen	ADJ	Appfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=5|Rel=Atr
7	objektivnost	objektivnost	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No|Dep=5|Rel=Sb
8	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Zagožen	Zagožen	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Dep=3|Rel=Sb
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	Dep=3|Rel=PPart
3	bil	biti	AUX	Va-p-sm	Gender=Masc|Number=Sing|VerbForm=Part	5	cop	_	Dep=0|Rel=Root
4	nasprotnega	nasproten	ADJ	Agpnsg	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	mnenja	mnenje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No|Dep=3|Rel=Atr
6	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


