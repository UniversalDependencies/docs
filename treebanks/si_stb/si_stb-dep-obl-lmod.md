---
layout: base
title:  'Statistics of obl:lmod in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="si_stb-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="si_stb-dep-obl-tmod.html">obl:tmod</a></tt>.

10 nodes (1%) are attached to their parents as `obl:lmod`.

10 instances of `obl:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.7.

The following 5 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (3; 30% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="si_stb-pos-PART.html">PART</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 obl:lmod	color:blue
1	හම්බන්තොට	හම්බන්තොට	PROPN	_	Animacy=Inan|Case=Nom|Number=Sing	3	nsubj	_	_
2	පිහිටා	පිහිට	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Part	3	compound:svc	_	_
3	ඇත්තේ	ඇත	VERB	_	Tense=Pres|VerbForm=Fin	9	csubj	_	_
4	ලොව	ලොව	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Gender=Neut	8	obl:lmod	_	_
5	කාර්ය	කාර්ය	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	6	compound	_	_
6	බහුල	බහුල	ADJ	_	_	8	amod	_	_
7	නෞකා	නෞකා	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	8	nmod	_	_
8	මාර්ගයක්	මාර්ග	NOUN	_	Animacy=Inan|Case=Acc|Definite=Ind|Number=Sing	9	obl:lmod	_	_
9	ආසන්නයේ	ආසන්න	NOUN	_	Case=Loc|Gender=Neut	0	root	_	_
10	ය	ය	PART	_	AdpType=Post	9	dep	_	_
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:lmod	color:blue
1	එබඳු	එබඳු	ADJ	_	_	2	nmod	_	_
2	තැනැත්තන්	තැනැත්ත	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	5	nsubj	_	_
3	ෂැවොලින්	ෂැවොලින්	PROPN	_	Foreign=Yes	4	nmod	_	_
4	ආරාමවලට	ආරාම	NOUN	_	Animacy=Inan|Case=Ill|Gender=Neut|Number=Plur	5	obl:lmod	_	_
5	වැද්දගන්නේ	වැද්දගන්	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
6	ද	ද	PART	_	AdpType=Post	5	advmod	_	_
7	නැත	නැත	AUX	_	Aspect=Prosp|Polarity=Neg|VerbForm=Fin	5	aux	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:lmod	color:blue
1	ලිප්ටන්	ලිප්ටන්	PROPN	_	Case=Nom	3	obl:lmod	_	_
2	වටරවුමේ	වටරවුම	NOUN	_	Animacy=Inan|Case=Loc|Definite=Def|Number=Sing	1	flat	_	_
3	පිකට්	පිකට්	NOUN	_	Case=Nom	6	nsubj	_	_
4	කිරීමට	කර	VERB	_	VerbForm=Inf	3	csubj	_	_
5	ද	ද	PART	_	AdpType=Post	6	advmod	_	_
6	බාධාවක්	බාධා	NOUN	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
7	නැත	නැත	AUX	_	Polarity=Neg|VerbForm=Fin	6	aux	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


