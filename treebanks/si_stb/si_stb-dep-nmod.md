---
layout: base
title:  'Statistics of nmod in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="si_stb-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="si_stb-dep-nmod-tmod.html">nmod:tmod</a></tt>.

53 nodes (6%) are attached to their parents as `nmod`.

51 instances of `nmod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35849056603774.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (40; 75% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt> (4; 8% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (4; 8% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="si_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	ආරක්ෂක	ආරක්ෂා	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc	2	nmod	_	_
2	ලේකම්වරයා	ලේකම්වර	NOUN	_	Animacy=Anim|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
3	ඊට	එය	PRON	_	Animacy=Inan|Case=Dat|Gender=Neut|PronType=Dem	6	obl	_	_
4	නිසි	නිසි	ADJ	_	Degree=Pos	5	amod	_	_
5	පිළිතුරු	පිළිතුරු	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	6	obj	_	_
6	ලබා	ලබ	VERB	_	Mood=Ind|VerbForm=Part|Voice=Act	0	root	_	_
7	දී	දෙ	VERB	_	Aspect=Perf|VerbForm=Part	6	compound:svc	_	_
8	තිබේ	තිබෙ	AUX	_	Tense=Pres|VerbForm=Fin	7	aux	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	මෙබඳු	මෙබඳු	ADJ	_	_	2	nmod	_	_
2	යක්ෂයන්	යක්ෂ	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	5	nsubj	_	_
3	දේශපාලන	දේශපාලන	NOUN	_	Case=Nom|Gender=Neut	4	nmod	_	_
4	පිට්ටනියෙන්	පිට්ටනි	NOUN	_	Animacy=Inan|Case=Abl|Definite=Def|Gender=Neut|Number=Sing	5	dep	_	_
5	පිටුවහල්	පිටුවහල්	NOUN	_	Animacy=Inan|Gender=Neut	0	root	_	_
6	කළ	කර	VERB	_	Mood=Nec|VerbForm=Inf|Voice=Act	5	compound:lvc	_	_
7	යුතු	යුතු	AUX	_	VerbForm=Fin	6	aux	_	_
8	ය	ය	PART	_	AdpType=Post	5	dep	_	_
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	එබඳු	එබඳු	ADJ	_	_	2	nmod	_	_
2	තැනැත්තන්	තැනැත්ත	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	5	nsubj	_	_
3	ෂැවොලින්	ෂැවොලින්	PROPN	_	Foreign=Yes	4	nmod	_	_
4	ආරාමවලට	ආරාම	NOUN	_	Animacy=Inan|Case=Ill|Gender=Neut|Number=Plur	5	obl:lmod	_	_
5	වැද්දගන්නේ	වැද්දගන්	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
6	ද	ද	PART	_	AdpType=Post	5	advmod	_	_
7	නැත	නැත	AUX	_	Aspect=Prosp|Polarity=Neg|VerbForm=Fin	5	aux	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


