---
layout: base
title:  'Statistics of nsubj in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `nsubj`

This relation is universal.

109 nodes (12%) are attached to their parents as `nsubj`.

109 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.01834862385321.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (29; 27% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (29; 27% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-PRON.html">PRON</a></tt> (12; 11% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PRON.html">PRON</a></tt> (10; 9% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (8; 7% instances), <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (5; 5% instances), <tt><a href="si_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="si_stb-pos-PART.html">PART</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="si_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="si_stb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-PART.html">PART</a></tt>-<tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj	color:blue
1	මේ	මේ	PRON	_	_	4	nmod	_	_
2	පිළිබඳ	පිළිබඳ	ADP	_	AdpType=Post	1	case	_	_
3	වැඩි	වැඩි	ADJ	_	Degree=Pos	4	amod	_	_
4	විස්තර	විස්තර	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
5	පසුව	පසුව	PART	_	_	6	advmod	_	_
6	හෙළිදරව්	හෙළිදරව්	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut	0	root	_	_
7	වනු	වෙ	VERB	_	Aspect=Prosp|Mood=Ind|VerbForm=Ger|Voice=Pass	6	compound:lvc	_	_
8	ඇත	ඇත	AUX	_	VerbForm=Fin	7	aux	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj	color:blue
1	එසේ	එසේ	ADV	_	AdvType=Man	2	advmod	_	_
2	ගිය	ය	VERB	_	Tense=Past|VerbForm=Part	4	acl	_	_
3	සෑම	සෑම	DET	_	_	4	det	_	_
4	කෙනාම	කෙනා	NOUN	_	Animacy=Anim|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	_
5	පාවා	පාව	VERB	_	Tense=Past|VerbForm=Part	6	compound:svc	_	_
6	දෙන්නකු	දෙන	NOUN	_	Animacy=Anim|Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	8	obj	_	_
7	ලෙස	ලෙස	PART	_	AdpType=Post	6	case	_	_
8	සැලකේ	සලක	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj	color:blue
1	ඔහු	ඔහු	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
2	ඊට	එය	PRON	_	Animacy=Inan|Case=Dat|Gender=Neut|PronType=Dem	3	nsubj	_	_
3	අවශ්‍ය	අවශ්‍ය	VERB	_	VerbForm=Part	4	acl	_	_
4	සියලු	සියලු	NOUN	_	Case=Nom	5	nmod	_	_
5	දේ	දේ	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	6	obj	_	_
6	සකසා	සකස	VERB	_	Mood=Ind|VerbForm=Part|Voice=Act	0	root	_	_
7	ගෙන	ගන්	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Part	6	compound:svc	_	_
8	තිබේ	තිබෙ	AUX	_	Aspect=Perf|Tense=Pres|VerbForm=Fin	7	aux	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


