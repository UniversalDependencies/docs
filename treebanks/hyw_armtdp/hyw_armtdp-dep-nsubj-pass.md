---
layout: base
title:  'Statistics of nsubj:pass in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hyw_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hyw_armtdp-dep-nsubj-caus.html">nsubj:caus</a></tt>.

59 nodes (0%) are attached to their parents as `nsubj:pass`.

52 instances of `nsubj:pass` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.11864406779661.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (49; 83% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt> (5; 8% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-DET.html">DET</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Լսարան	լսարան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	nsubj:pass	_	Translit=Lsaran|LTranslit=lsaran
2	հիմնուեցաւ	հիմնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=himnowec’aw|LTranslit=himnel|SpaceAfter=No
3	:	:	PUNCT	_	Foreign=Yes	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
1	Գոյնի	գոյն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	nmod:npmod	_	Translit=Goyni|LTranslit=goyn
2	տեղ	տեղ	ADP	_	AdpType=Post	1	case	_	Translit=teġ|LTranslit=teġ
3	բոյսեր	բոյս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	0	root	_	Translit=boyser|LTranslit=boys
4	որ	որ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	7	nsubj:pass	_	Translit=or|LTranslit=or
5	մոզաիքի	մոզաիք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	obl	_	Translit=mozaik’i|LTranslit=mozaik’
6	պէս	պէս	ADP	_	AdpType=Post	5	case	_	Translit=pēs|LTranslit=pēs
7	տնկուած	տնկել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	3	acl:relcl	_	Translit=tnkowaç|LTranslit=tnkel
8	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=en|LTranslit=em
9	հողի	հող	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	obl	_	Translit=hoġi|LTranslit=hoġ
10	մէջ	մէջ	ADP	_	AdpType=Post	9	case	_	Translit=mēǰ|LTranslit=mēǰ|SpaceAfter=No
11	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	—	—	PUNCT	_	_	6	punct	_	Translit=—|LTranslit=—
2	Պոլիսը	Պոլիս|Պօլիս	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	6	nsubj:pass	_	Translit=Polisë|LTranslit=Polis|Pòlis
3	զինուորական	զինուորական	ADJ	_	_	4	amod	_	Translit=zinoworakan|LTranslit=zinoworakan
4	իշխանութեան	իշխանութիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	obj	_	Translit=išxanowt’ean|LTranslit=išxanowt’iwn
5	պիտի	պիտի	AUX	_	Aspect=Prosp|Mood=Ind|Polarity=Pos	6	aux	_	Translit=piti|LTranslit=piti
6	յանձնուի	յանձնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=yanjnowi|LTranslit=yanjnel|SpaceAfter=No
7	։	։	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


