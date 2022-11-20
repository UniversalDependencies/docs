---
layout: base
title:  'Statistics of xcomp in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `xcomp`

This relation is universal.

2 nodes (0%) are attached to their parents as `xcomp`.

2 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="si_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 xcomp	color:blue
1	ඒ	ඒ	DET	_	_	2	det	_	_
2	සියල්ල	සියලු	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	4	nsubj	_	_
3	පරාජය	පරාජය	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	4	compound:lvc	_	_
4	කිරීමට	කර	VERB	_	Definite=Def|Number=Sing|VerbForm=Ger	6	xcomp	_	_
5	දේශප්‍රේමීන්ට	දේශප්‍රේම	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	6	nsubj	_	_
6	හැකි	හැකි	AUX	_	VerbForm=Fin	0	root	_	_
7	විණි	වෙ	VERB	_	Mood=Ind|Tense=Past	6	dep	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 xcomp	color:blue
1	අවසන්	අවසන්	NOUN	_	Case=Nom	2	nmod	_	_
2	මොහොතේ	මොහොත	NOUN	_	Case=Loc|Definite=Def|Gender=Neut|Number=Sing	7	obl:tmod	_	_
3	යථාර්ථය	යථාර්ථ	NOUN	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	4	obj	_	_
4	පිළිගන්නට	පිළිගන්	VERB	_	VerbForm=Inf	7	xcomp	_	_
5	යුනෙස්කෝ	යුනෙස්කෝ	PROPN	_	Case=Nom	6	nmod	_	_
6	අධිපතිවරයාට	අධිපති	NOUN	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
7	සිදුවිය	සිදුවෙ	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


