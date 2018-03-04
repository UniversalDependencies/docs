---
layout: base
title:  'Statistics of aux in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="de-dep-aux-pass.html">aux:pass</a></tt>.

3337 nodes (1%) are attached to their parents as `aux`.

2253 instances of `aux` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.20467485765658.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-AUX.html">AUX</a></tt> (3126; 94% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-AUX.html">AUX</a></tt> (172; 5% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (11; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-ADP.html">ADP</a></tt> (11; 0% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-PART.html">PART</a></tt> (8; 0% instances), <tt><a href="de-pos-ADV.html">ADV</a></tt>-<tt><a href="de-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 aux	color:blue
1	Habe	haben	AUX	VAFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
2	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	bestellten	bestellt	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	Artikel	Artikel	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
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
1	Wird	werden	AUX	VAFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
2	auf	auf	ADP	APPR	_	4	case	_	_
3	jeden	jed	PRON	PIAT	Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	4	det	_	_
4	Fall	Fall	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	_
5	mein	mein	PRON	PPOSAT	Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det:poss	_	_
6	neuer	neu	ADJ	ADJA	Degree=Cmp,Pos	7	amod	_	_
7	Hausarzt	Hausarzt	NOUN	NN	_	0	root	_	_
8	werden	werden	AUX	VAINF	VerbForm=Inf	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	erschien	erscheinen	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
3	auf	auf	ADP	APPR	_	5	case	_	_
4	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	5	det	_	_
5	Album	Album	NOUN	NN	Case=Dat|Gender=Masc,Neut|Number=Sing	2	obl	_	_
6	Why	Why	PROPN	NE	_	9	advmod	_	_
7	Do	Do	PROPN	NE	_	9	aux	_	_
8	Fools	Fools	PROPN	NN	Case=Nom|Number=Sing	9	nsubj	_	_
9	Fall	Fall	PROPN	NN	_	5	appos	_	_
10	in	in	PROPN	APPR	_	11	case	_	_
11	Love	Love	PROPN	NN	_	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	2	punct	_	_

~~~


