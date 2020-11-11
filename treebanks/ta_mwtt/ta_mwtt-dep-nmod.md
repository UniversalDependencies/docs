---
layout: base
title:  'Statistics of nmod in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="ta_mwtt-dep-nmod-poss.html">nmod:poss</a></tt>.

9 nodes (0%) are attached to their parents as `nmod`.

8 instances of `nmod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (6; 67% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-PRON.html">PRON</a></tt> (2; 22% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-PRON.html">PRON</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	சித்திரை	சித்திரை	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	2:nmod	Translit=cittirai|LTranslit=cittirai
2	மாதத்தோடு	மாதம்	NOUN	_	Case=Com|Number=Sing|Person=3	5	obl	5:obl	Translit=mātattōṭu|LTranslit=mātam
3	தமிழ்	தமிழ்	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nmod	4:nmod	Translit=tamiḻ|LTranslit=tamiḻ
4	வருசம்	வருசம்	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nsubj	5:nsubj	Translit=varucam|LTranslit=varucam
5	ஆரம்பிக்கிறது	ஆரம்பி	VERB	_	Gender=Neut|Number=Sing|Person=3|Tense=Pres	0	root	0:root	Translit=ārampikkiṟatu|LTranslit=ārampi
6	.	.	PUNCT	_	PunctType=Peri	5	punct	5:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	பையன்கள்	பையன்	NOUN	_	Case=Nom|Number=Plur	3	nsubj	3:nsubj	Translit=paiyaṉkaḷ|LTranslit=paiyaṉ
2	எல்லோரும்	எல்லோரும்	PRON	_	Case=Nom|Number=Plur	1	nmod	1:nmod	Translit=ellōrum|LTranslit=ellōrum
3	வந்தார்கள்	வா	VERB	_	Gender=Com|Number=Plur|Person=3|Tense=Past	0	root	0:root	Translit=vantārkaḷ|LTranslit=vā
4	.	.	PUNCT	_	PunctType=Peri	3	punct	3:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod	color:blue
1	குமாருக்கு	குமார்	PROPN	_	Case=Dat|Number=Sing|Person=3	5	nsubj	5:nsubj:nc	Translit=kumārukku|LTranslit=kumār
2	தன்	தான்	PRON	_	Case=Gen|Gender=Com|Number=Sing	5	nmod	5:nmod:poss	Translit=taṉ|LTranslit=tāṉ
3	மேலே	மேலே	ADP	_	AdpType=Post	2	case	2:case	Translit=mēlē|LTranslit=mēlē
4	ஆத்திரம்	ஆத்திரம்	NOUN	_	Case=Nom|Number=Sing|Person=3	5	compound	5:compound:nv	Translit=āttiram|LTranslit=āttiram
5	வந்தது	வா	VERB	_	Gender=Neut|Number=Sing|Person=3|Tense=Past	0	root	0:root	Translit=vantatu|LTranslit=vā
6	.	.	PUNCT	_	PunctType=Peri	5	punct	5:punct	Translit=.|LTranslit=.

~~~


