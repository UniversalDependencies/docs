---
layout: base
title:  'Statistics of obl:lmod in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="ta_mwtt-dep-obl.html">obl</a></tt>.
There are also 6 other language-specific subtypes of `obl`: <tt><a href="ta_mwtt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ta_mwtt-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="ta_mwtt-dep-obl-cmpr.html">obl:cmpr</a></tt>, <tt><a href="ta_mwtt-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="ta_mwtt-dep-obl-pmod.html">obl:pmod</a></tt>, <tt><a href="ta_mwtt-dep-obl-tmod.html">obl:tmod</a></tt>.

16 nodes (1%) are attached to their parents as `obl:lmod`.

16 instances of `obl:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (13; 81% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:lmod	color:blue
1	அவன்	அவன்	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	5:nsubj	Translit=avaṉ|LTranslit=avaṉ
2	ஒரு	ஒன்று	NUM	_	_	3	nummod	3:nummod	Translit=oru|LTranslit=oṉṟu
3	ஆபிசில்	ஆபிச்	NOUN	_	Case=Loc|Number=Sing|Person=3	5	obl:lmod	5:obl:lmod	Translit=āpicil|LTranslit=āpic
4	வேலை	வேலை	NOUN	_	Case=Nom|Number=Sing|Person=3	5	obj	5:obj	Translit=vēlai|LTranslit=vēlai
5	செய்கிறான்	செய்	VERB	_	Gender=Masc|Number=Sing|Person=3|Tense=Pres	0	root	0:root	Translit=ceykiṟāṉ|LTranslit=cey
6	.	.	PUNCT	_	PunctType=Peri	5	punct	5:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:lmod	color:blue
1	வீட்டில்	வீடு	NOUN	_	Case=Loc|Number=Sing|Person=3	3	obl:lmod	3:obl:lmod	Translit=vīṭṭil|LTranslit=vīṭu
2	உள்ள	உள்ள	ADP	_	AdpType=Post	1	case	1:case	Translit=uḷḷa|LTranslit=uḷḷa
3	நாய்	நாய்	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	0:root	Translit=nāy|LTranslit=nāy
4	.	.	PUNCT	_	PunctType=Peri	3	punct	3:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:lmod	color:blue
1	சென்னையில்	சென்னை	PROPN	_	Case=Loc|Number=Sing|Person=3	4	obl:lmod	4:obl:lmod	Translit=ceṉṉaiyil|LTranslit=ceṉṉai
2	நான்கு	நான்கு	NUM	_	Case=Nom	3	nummod	3:nummod	Translit=nāṉku|LTranslit=nāṉku
3	வருசமாக	வருசம்	NOUN	_	Number=Sing|Person=3	4	obl:tmod	4:obl:tmod	Translit=varucamāka|LTranslit=varucam
4	இருக்கிறேன்	இரு	VERB	_	Gender=Com|Number=Sing|Person=1|Tense=Pres	0	root	0:root	Translit=irukkiṟēṉ|LTranslit=iru
5	.	.	PUNCT	_	PunctType=Peri	4	punct	4:punct	Translit=.|LTranslit=.

~~~


