---
layout: base
title:  'Statistics of dep in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `dep`

This relation is universal.

69 nodes (8%) are attached to their parents as `dep`.

46 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63768115942029.

The following 19 pairs of parts of speech are connected with `dep`: <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PART.html">PART</a></tt> (24; 35% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (8; 12% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-PART.html">PART</a></tt> (7; 10% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (6; 9% instances), <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-PART.html">PART</a></tt> (4; 6% instances), <tt><a href="si_stb-pos-ADV.html">ADV</a></tt>-<tt><a href="si_stb-pos-PART.html">PART</a></tt> (3; 4% instances), <tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="si_stb-pos-PART.html">PART</a></tt> (3; 4% instances), <tt><a href="si_stb-pos-PART.html">PART</a></tt>-<tt><a href="si_stb-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-ADV.html">ADV</a></tt>-<tt><a href="si_stb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-NUM.html">NUM</a></tt>-<tt><a href="si_stb-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-PART.html">PART</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dep	color:blue
1	එය	ඒ	PRON	_	Case=Nom|Number=Sing|PronType=Dem	5	obj	_	_
2	බුද්ධිමත්	බුද්ධිමත්	ADJ	_	Degree=Pos	3	amod	_	_
3	ජනතාව	ජනතා	NOUN	_	Animacy=Anim|Case=Acc|Definite=Def|Number=Sing	5	nsubj	_	_
4	ම	ම	PART	_	AdpType=Post	3	case	_	_
5	තීන්දු	තීන්දු	NOUN	_	Animacy=Inan|Gender=Neut|Number=Plur	0	root	_	_
6	කළ	කර	VERB	_	Mood=Nec|VerbForm=Inf|Voice=Act	5	compound:lvc	_	_
7	යුතු	යුතු	AUX	_	VerbForm=Fin	6	aux	_	_
8	ය	ය	PART	_	AdpType=Post	5	dep	_	_
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	මෙහි	මේ	ADV	_	AdvType=Loc	6	advmod	_	_
2	දී	දී	PART	_	AdpType=Post	1	case	_	_
3	අයථා	අයථා	NOUN	_	Case=Nom	4	nmod	_	_
4	ක්‍රියා	ක්‍රියා	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
5	ගණනාවක්	ගණන	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	dep	_	_
6	සිදු	සිදු	PART	_	_	0	root	_	_
7	වී	වෙ	VERB	_	Tense=Past|VerbForm=Part	6	compound:lvc	_	_
8	ඇත	ඇත	AUX	_	Aspect=Perf|VerbForm=Fin	7	aux	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dep	color:blue
1	කලක්	කල	NOUN	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Ptan	5	obl:tmod	_	_
2	ඔහු	ඔහු	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	5	nsubj	_	_
3	පලස්තීනය	පලස්තීන	PROPN	_	Case=Acc|Definite=Def|Foreign=Yes|Gender=Neut|Number=Sing	5	obl	_	_
4	වෙනුවෙන්	වෙනුවෙන්	ADP	_	AdpType=Post	3	case	_	_
5	පෙනී	පෙනෙ	VERB	_	Mood=Ind|VerbForm=Part|Voice=Pass	0	root	_	_
6	සිටියේ	සිටි	VERB	_	Mood=Ind|Tense=Past|VerbForm=Part|Voice=Act	5	compound:svc	_	_
7	ය	ය	PART	_	AdpType=Post	5	dep	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


