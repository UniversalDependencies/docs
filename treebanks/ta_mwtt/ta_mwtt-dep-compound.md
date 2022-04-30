---
layout: base
title:  'Statistics of compound in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="ta_mwtt-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="ta_mwtt-dep-compound-redup.html">compound:redup</a></tt>.

2 nodes (0%) are attached to their parents as `compound`.

2 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	நேற்று	நேற்று	NOUN	_	Case=Nom|Number=Sing|Person=3	2	compound	_	Translit=nēṟṟu|LTranslit=nēṟṟu
2	ராத்திரி	ராத்திரி	NOUN	_	Case=Nom|Number=Sing|Person=3	3	obl:tmod	_	Translit=rāttiri|LTranslit=tiri
3	மழை	மழை	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	Translit=maḻai|LTranslit=maḻai
4	பெய்து	பெய்	VERB	_	Polarity=Pos|VerbForm=Conv	3	compound:lvc	_	Translit=peytu|LTranslit=pey
5	இருக்கும்	இரு	AUX	_	Gender=Com|Number=Sing|Person=3|Tense=Fut	4	aux	_	Translit=irukkum|LTranslit=iru
6	.	.	PUNCT	_	PunctType=Peri	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	Translit=kumār|LTranslit=kumār
2	வரவே	வா	VERB	_	VerbForm=Inf	3	compound	_	Translit=varavē|LTranslit=vā
3	வரமாட்டான்	வா	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Polarity=Neg	0	root	_	Translit=varamāṭṭāṉ|LTranslit=vā
4	.	.	PUNCT	_	PunctType=Peri	3	punct	_	Translit=.|LTranslit=.

~~~


