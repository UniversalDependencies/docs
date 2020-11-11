---
layout: base
title:  'Statistics of compound in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="ta_mwtt-dep-compound-nv.html">compound:nv</a></tt>, <tt><a href="ta_mwtt-dep-compound-redup.html">compound:redup</a></tt>.

5 nodes (0%) are attached to their parents as `compound`.

5 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	அவனுக்கு	அவன்	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3	3	nsubj	3:nsubj:nc	Translit=avaṉukku|LTranslit=avaṉ
2	பேதி	பேதி	NOUN	_	Case=Nom|Number=Sing|Person=3	3	compound	3:compound:nv	Translit=pēti|LTranslit=pēti
3	எடுக்க	எடு	VERB	_	VerbForm=Inf	0	root	0:root	Translit=eṭukka|LTranslit=eṭu
4	.	.	PUNCT	_	PunctType=Peri	3	punct	3:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	3:nsubj	Translit=kumār|LTranslit=kumār
2	வரவே	வா	VERB	_	VerbForm=Inf	3	compound	3:compound:redup	Translit=varavē|LTranslit=vā
3	வரமாட்டான்	வா	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Polarity=Neg	0	root	0:root	Translit=varamāṭṭāṉ|LTranslit=vā
4	.	.	PUNCT	_	PunctType=Peri	3	punct	3:punct	Translit=.|LTranslit=.

~~~


