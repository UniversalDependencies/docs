---
layout: base
title:  'Statistics of aux in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="de_hdt-dep-aux-pass.html">aux:pass</a></tt>.

14920 nodes (3%) are attached to their parents as `aux`.

10904 instances of `aux` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.32982573726542.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (14192; 95% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (375; 3% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (163; 1% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (158; 1% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (14; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	DENIC	DENIC	PROPN	NE	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
2	will	wollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux	_	_
3	bei	bei	ADP	APPR	Case=Dat	4	case	_	_
4	Domainstreit	Streit	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	6	obl	_	_
5	Richterspruch	Spruch	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	obj	_	_
6	abwarten	abwarten	VERB	VVINF	_	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 aux	color:blue
1	Überweisungen	Überweisung	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	8	nsubj	_	_
2	werden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres	8	aux	_	_
3	auf	auf	ADP	APPR	Case=Dat	5	case	_	_
4	diesem	diesem	DET	PDAT	Case=Dat|Gender=Masc|Number=Sing	5	det	_	_
5	Wege	Weg	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	8	obl	_	_
6	jedoch	jedoch	ADV	ADV	_	8	advmod	_	_
7	nicht	nicht	PART	PTKNEG	_	8	advmod	_	_
8	möglich	möglich	ADJ	ADJD	Degree=Pos	0	root	_	_
9	sein	sein	AUX	VAINF	_	8	cop	_	_
10	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Eigene	eigen	ADJ	ADJA	Degree=Pos|Gender=Neut|Number=Plur	2	amod	_	_
2	Ladengeschäfte	Geschäft	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur|Person=3	5	nsubj	_	_
3	könnten	können	AUX	VMFIN	Mood=Sub|Number=Plur|Person=3|Tense=Pres	5	aux	_	_
4	ein	ein	DET	ART	Case=Nom|Gender=Masc|Number=Sing	5	det	_	_
5	Bestandteil	Bestandteil	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
6	davon	davon	ADV	PROAV	_	5	advmod	_	_
7	sein	sein	AUX	VAINF	_	5	cop	_	_
8	.	.	PUNCT	$.	_	5	punct	_	_

~~~


