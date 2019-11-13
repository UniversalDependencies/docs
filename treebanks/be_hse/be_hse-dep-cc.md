---
layout: base
title:  'Statistics of cc in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `cc`

This relation is universal.

595 nodes (4%) are attached to their parents as `cc`.

594 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88235294117647.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (345; 58% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (111; 19% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (98; 16% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (21; 4% instances), <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="be_hse-pos-SYM.html">SYM</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="be_hse-pos-DET.html">DET</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-PART.html">PART</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-X.html">X</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Сiстэма	сiстэма	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	органаў	орган	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
3	і	і	CCONJ	_	_	4	cc	_	_
4	падраздзяленняў	падраздзяленне	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	2	conj	_	_
5	па	па	ADP	_	_	7	case	_	_
6	надзвычайных	надзвычайны	ADJ	_	Case=Loc|Degree=Pos|Number=Plur	7	amod	_	_
7	сiтуацыях	сiтуацыя	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	2	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	І	і	CCONJ	CC	_	3	cc	_	_
2	гэта	гэта	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	obj	_	_
3	разумеюць	разумець	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	ўсё	усё	PRON	DT	Case=Nom|Number=Plur|PronType=Tot	3	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Купюра	купюра	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	выканана	выканаць	VERB	VBNH	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	ў	ў	ADP	IN	_	9	case	_	_
4	зялёна-шэрых	зялёна-шэры	ADJ	JJL	Case=Loc|Degree=Pos|Number=Plur	9	amod	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	карычневых	карычневы	ADJ	JJL	Case=Loc|Degree=Pos|Number=Plur	4	conj	_	_
7	і	і	CCONJ	CC	_	8	cc	_	_
8	аранжавых	аранжавы	ADJ	JJL	Case=Loc|Degree=Pos|Number=Plur	4	conj	_	_
9	танах	тон	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


