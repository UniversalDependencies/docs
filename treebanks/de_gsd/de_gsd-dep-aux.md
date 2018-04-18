---
layout: base
title:  'Statistics of aux in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="de_gsd-dep-aux-pass.html">aux:pass</a></tt>.

3337 nodes (1%) are attached to their parents as `aux`.

2253 instances of `aux` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.20407551693138.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (3126; 94% instances), <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (172; 5% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (11; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-ADP.html">ADP</a></tt> (11; 0% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-PART.html">PART</a></tt> (8; 0% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 aux	color:blue
1	Habe	haben	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
2	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	4	det	_	_
3	bestellten	bestellt	ADJ	ADJA	Case=Nom|Gender=Neut|Number=Plur	4	amod	_	_
4	Artikel	Artikel	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	6	obj	_	_
5	prompt	prompt	ADV	ADJD	_	6	advmod	_	_
6	erhalten	erhalten	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 aux	color:blue
1	Wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	aux	_	_
2	auf	auf	ADP	APPR	_	4	case	_	_
3	jeden	jed	PRON	PIAT	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	4	det	_	_
4	Fall	Fall	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	_
5	mein	mein	PRON	PPOSAT	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes	7	det:poss	_	_
6	neuer	neu	ADJ	ADJA	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_
7	Hausarzt	Hausarzt	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	werden	werden	AUX	VAINF	VerbForm=Inf	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
1	Es	es	PRON	PPER	PronType=Prs	2	nsubj	_	_
2	erschien	erscheinen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	auf	auf	ADP	APPR	_	5	case	_	_
4	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Album	Album	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	2	obl	_	_
6	Why	Why	PROPN	FM	Foreign=Yes	9	advmod	_	_
7	Do	Do	PROPN	FM	Foreign=Yes	9	aux	_	_
8	Fools	Fools	PROPN	NE	Foreign=Yes	9	nsubj	_	_
9	Fall	Fall	PROPN	FM	Foreign=Yes	5	appos	_	_
10	in	in	PROPN	APPR	Foreign=Yes	11	case	_	_
11	Love	Love	PROPN	NE	Foreign=Yes	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	2	punct	_	_

~~~


