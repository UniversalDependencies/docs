---
layout: base
title:  'Statistics of compound:prt in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="si_stb-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="si_stb-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="si_stb-dep-compound-svc.html">compound:svc</a></tt>.

3 nodes (0%) are attached to their parents as `compound:prt`.

2 instances of `compound:prt` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `compound:prt`: <tt><a href="si_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:prt	color:blue
1	ඉන්	එය	PRON	_	Case=Abl|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
2	මෙරටට	මෙරට	NOUN	_	Case=Dat|Definite=Def|Gender=Neut|Number=Sing	3	obl:lmod	_	_
3	ලබාගත	ලබාගන්	VERB	_	Mood=Pot|VerbForm=Inf	4	compound:prt	_	_
4	හැකි	හැකි	AUX	_	VerbForm=Part	6	acl	_	_
5	ආර්ථික	ආර්ථික	NOUN	_	Case=Nom	6	nmod	_	_
6	වාසි	වාසි	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	7	nsubj	_	_
7	රැසකි	රැස	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:prt	color:blue
1	ඒ	ඒ	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	_
2	ලෝකයා	ලෝක	NOUN	_	Animacy=Anim|Case=Acc|Definite=Def|Number=Sing	5	obj	_	_
3	නො	නො	PART	_	AdpType=Prep	4	dep	_	_
4	මඟ	මඟ	NOUN	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	5	compound:prt	_	_
5	යැවීම	යව	NOUN	_	Case=Acc|Definite=Def|Number=Sing|VerbForm=Ger	0	root	_	_
6	සඳහා	සඳහා	ADP	_	AdpType=Post	5	case	_	_
7	ය	ය	PART	_	AdpType=Post	5	dep	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	එහෙත්	එහෙත්	ADV	_	_	5	advmod	_	_
2	අවසානයේ	අවසාන	ADV	_	AdvType=Tim|Definite=Def	5	advmod	_	_
3	ඔහු	ඔහු	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	5	nsubj	_	_
4	ඉලක්කය	ඉලක්ක	NOUN	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	5	obj	_	_
5	ජය	ජය	NOUN	_	_	0	root	_	_
6	ගත්තේ	ගන්	VERB	_	Mood=Ind|Tense=Past|VerbForm=Part|Voice=Act	5	compound:prt	_	_
7	ය	ය	PART	_	AdpType=Post	5	dep	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


