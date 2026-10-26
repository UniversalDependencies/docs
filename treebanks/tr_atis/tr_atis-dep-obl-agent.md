---
layout: base
title:  'Statistics of obl:agent in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="tr_atis-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tr_atis-dep-obl-tmod.html">obl:tmod</a></tt>.

4 nodes (0%) are attached to their parents as `obl:agent`.

4 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.75.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (3; 75% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl:agent	color:blue
1	American	american	PROPN	_	Case=Nom|Number=Sing	7	obl:agent	_	_
2	Airlines	airlines	PROPN	_	Case=Nom|Number=Sing	1	flat	_	_
3	tarafından	tarafından	ADV	_	_	1	case	_	_
4	ne	ne	ADJ	_	_	6	amod	_	_
5	tür	tür	NOUN	_	Case=Nom|Number=Sing	4	compound	_	_
6	uçaklar	uçak	NOUN	_	Case=Nom|Number=Plur	7	nsubj:pass	_	_
7	kullanılıyor	kullan	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 obl:agent	color:blue
1	amerikan	amerikan	ADJ	_	_	6	obl:agent	_	_
2	havayolları	havayol	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	1	flat	_	_
3	tarafından	tarafından	ADV	_	_	1	case	_	_
4	hangi	hangi	ADJ	_	_	5	amod	_	_
5	uçuşlar	uçuş	NOUN	_	Case=Nom|Number=Plur	6	nsubj:pass	_	_
6	sağlanmaktadır	sağla	VERB	_	Aspect=Prog|Evident=Fh|Mood=Gen|Number=Sing|Person=3|Polarity=Pos|Polite=Form|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_

~~~


