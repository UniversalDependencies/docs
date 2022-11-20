---
layout: base
title:  'Statistics of conj in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `conj`

This relation is universal.

3 nodes (0%) are attached to their parents as `conj`.

3 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `conj`: <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	එහි	එහි	PRON	_	Case=Loc|Number=Sing|PronType=Dem	7	obl:lmod	_	_
2	ඉතා	ඉතා	ADV	_	_	3	advmod	_	_
3	පැහැදිලි	පැහැදිලි	ADJ	_	Degree=Pos	6	amod	_	_
4	හා	හා	CCONJ	_	_	3	cc	_	_
5	ගැඹුරු	ගැඹුරු	ADJ	_	Degree=Pos	3	conj	_	_
6	අදහසක්	අදහස	NOUN	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	7	obj	_	_
7	තිබේ	තිබෙ	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	ආර්ථිකය	ආර්ථික	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
2	හා	හා	CCONJ	_	_	1	cc	_	_
3	සංස්කෘතිය	සංස්කෘති	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Gender=Neut|Number=Sing	1	conj	_	_
4	ද	ද	PART	_	_	7	advmod	_	_
5	සාඩම්බර	සාඩම්බර	ADJ	_	Degree=Pos	6	amod	_	_
6	තත්ත්වයක	තත්ත්ව	NOUN	_	Case=Loc|Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	_
7	පැවැතිණි	පවති	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	ඉන්දියාව	ඉන්දියා	PROPN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	6	nsubj	_	_
2	මෙන්ම	මෙන්	CCONJ	_	_	3	cc	_	_
3	පාකිස්ථානය	පාකිස්ථාන	PROPN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	1	conj	_	_
4	ද	ද	PART	_	AdpType=Post	3	case	_	_
5	අපේ	අප	PRON	_	Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	මිතුරෝ	මිතුර	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
7	ය	ය	PART	_	AdpType=Post	6	dep	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


