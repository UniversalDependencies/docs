---
layout: base
title:  'Statistics of obl:loc in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `obl:loc`

This relation is a language-specific subtype of <tt><a href="ta_mwtt-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="ta_mwtt-dep-obl-abl.html">obl:abl</a></tt>, <tt><a href="ta_mwtt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ta_mwtt-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="ta_mwtt-dep-obl-ben.html">obl:ben</a></tt>, <tt><a href="ta_mwtt-dep-obl-cmpr.html">obl:cmpr</a></tt>, <tt><a href="ta_mwtt-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="ta_mwtt-dep-obl-pmod.html">obl:pmod</a></tt>, <tt><a href="ta_mwtt-dep-obl-soc.html">obl:soc</a></tt>, <tt><a href="ta_mwtt-dep-obl-tmod.html">obl:tmod</a></tt>.

17 nodes (1%) are attached to their parents as `obl:loc`.

17 instances of `obl:loc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `obl:loc`: <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (16; 94% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:loc	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	4:nsubj	Translit=kumār|LTranslit=kumār
2	எங்கள்	எங்கள்	PRON	_	Case=Gen|Gender=Com|Number=Plur|Person=1	3	nmod:poss	3:nmod:poss	Translit=XX|LTranslit=YY
3	வீட்டோடு	வீடு	NOUN	_	Case=Com|Number=Sing|Person=3	4	obl:loc	4:obl:loc	Translit=vīṭṭōṭu|LTranslit=vīṭu
4	இருக்கிறான்	இரு	VERB	_	Gender=Masc|Number=Sing|Person=3|Tense=Pres	0	root	0:root	Translit=irukkiṟāṉ|LTranslit=iru
5	.	.	PUNCT	_	PunctType=Peri	4	punct	4:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:loc	color:blue
1	வீட்டில்	வீடு	NOUN	_	Case=Loc|Number=Sing|Person=3	3	obl:loc	3:obl:loc	Translit=vīṭṭil|LTranslit=vīṭu
2	உள்ள	உள்ள	ADP	_	AdpType=Post	1	case	1:case	Translit=uḷḷa|LTranslit=uḷḷa
3	நாய்	நாய்	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	0:root	Translit=nāy|LTranslit=nāy
4	.	.	PUNCT	_	PunctType=Peri	3	punct	3:punct	Translit=.|LTranslit=.

~~~


