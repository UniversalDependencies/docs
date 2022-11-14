---
layout: base
title:  'Statistics of compound in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="si_stb-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="si_stb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="si_stb-dep-compound-svc.html">compound:svc</a></tt>.

29 nodes (3%) are attached to their parents as `compound`.

25 instances of `compound` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `compound`: <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (19; 66% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	හමුදා	හමුදා	NOUN	_	Case=Nom|Gender=Neut	2	compound	_	_
2	ප්‍රධානයකු	ප්‍රධාන	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	7	nsubj	_	_
3	රාජ්‍යයක	රාජ්‍ය	NOUN	_	Case=Ine|Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
4	පවතින	පවති	VERB	_	Tense=Pres|VerbForm=Part	6	ccomp	_	_
5	යුද	යුද	NOUN	_	Case=Nom|Gender=Neut	6	compound	_	_
6	රහස්	රහස්	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	7	obj	_	_
7	දනී	දන්	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	ප්‍රවෘත්තිය	ප්‍රවෘත්ති	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	3	nsubj	_	_
2	පළ	පළ	PART	_	_	3	compound:lvc	_	_
3	වීමෙන්	වෙ	NOUN	_	Case=Ins|Number=Sing|VerbForm=Ger	6	advcl	_	_
4	පසු	පසු	PART	_	AdpType=Post	3	case	_	_
5	රට	රට	NOUN	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	6	nsubj	_	_
6	ගිනි	ගිනි	NOUN	_	Case=Nom|Gender=Neut|Number=Ptan	0	root	_	_
7	ගනී	ගන්	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	compound	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	ශ්‍රී	ශ්‍රී	PROPN	_	_	5	nmod	_	_
2	ලංකාව	ලංකා	PROPN	_	Case=Acc|Gender=Neut|Number=Sing	1	flat	_	_
3	වැනි	වැනි	ADP	_	AdpType=Post	2	case	_	_
4	රාජ්‍යයක්	රාජ්‍ය	NOUN	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	5	obj	_	_
5	ගොඩනැඟීම	ගොඩනඟ	NOUN	_	Definite=Def|Number=Sing|VerbForm=Ger	9	nsubj	_	_
6	සඳහා	සඳහා	ADP	_	AdpType=Post	5	case	_	_
7	ජනමූල	ජනමූල	ADJ	_	_	8	compound	_	_
8	නායකයකු	නායක	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	9	obj	_	_
9	අවශ්‍ය	අවශ්‍ය	ADJ	_	_	0	root	_	_
10	වේ	වෙ	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


