---
layout: base
title:  'Statistics of obl:tmod in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="si_stb-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="si_stb-dep-obl-lmod.html">obl:lmod</a></tt>.

9 nodes (1%) are attached to their parents as `obl:tmod`.

9 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.11111111111111.

The following 6 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (4; 44% instances), <tt><a href="si_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="si_stb-pos-PART.html">PART</a></tt>-<tt><a href="si_stb-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="si_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="si_stb-pos-ADV.html">ADV</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:tmod	color:blue
1	මැස්සන්	මැසි	NOUN	_	Animacy=Anim|Case=Acc|Number=Plur	2	nsubj	_	_
2	ඇහිරුණු	ඇහිරෙ	VERB	_	Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
3	අලුත්	අලුත්	ADJ	_	Degree=Pos	4	amod	_	_
4	කඩය	කඩ	NOUN	_	Animacy=Inan|Case=Acc|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
5	මාස	මස	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	6	nmod	_	_
6	කිහිපයකින්	කිහිප	NOUN	_	Case=Ins|Definite=Ind|Gender=Neut|Number=Sing	7	obl:tmod	_	_
7	වසා	වස	VERB	_	Mood=Ind|Tense=Past|VerbForm=Part	0	root	_	_
8	දැමිණි	දම	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	7	compound:svc	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:tmod	color:blue
1	මෙවර	මෙවර	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	3	obl:tmod	_	_
2	අයවැය	අයවැය	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	3	nsubj	_	_
3	ඉදිරිපත්	ඉදිරිපත්	ADJ	_	_	4	compound:lvc	_	_
4	වන්නේ	වෙ	VERB	_	Tense=Pres|VerbForm=Fin	9	csubj	_	_
5	ඉහත	ඉහත	NOUN	_	Case=Nom|Gender=Neut	6	obl	_	_
6	කී	කි	VERB	_	Tense=Past|VerbForm=Part|Voice=Act	8	acl	_	_
7	ආර්ථික	ආර්ථික	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	8	nmod	_	_
8	දුෂ්කරතා	දුෂ්කර	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	9	nmod	_	_
9	මධ්‍යයේ	මධ්‍ය	NOUN	_	Case=Ine|Definite=Def|Gender=Neut	0	root	_	_
10	ය	ය	PART	_	AdpType=Post	9	dep	_	_
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obl:tmod	color:blue
1	අද	අද	ADV	_	AdvType=Tim	5	obl:tmod	_	_
2	නිදහසේ	නිදහස්	ADV	_	AdvType=Man	5	obl	_	_
3	හුස්ම	හුස්ම	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	4	nmod	_	_
4	පොදක්	පොද	NOUN	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	5	obj	_	_
5	ගැනීමේ	ගන්	NOUN	_	Number=Sing|VerbForm=Ger	6	acl	_	_
6	අවස්ථාව	අවස්ථා	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	8	obj	_	_
7	ජනතාවට	ජනතා	NOUN	_	Animacy=Anim|Case=Dat|Number=Sing	8	nsubj	_	_
8	තිබේ	තිබෙ	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


